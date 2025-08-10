<?php
/**
 * Plugin Name: Custom Cart Handler and Design Tool API
 * Description: Handles add-to-cart requests from VueJS without modifying Vue code, and exposes REST API endpoints for products and cart total.
 * Author: Your Name
 * Version: 1.0
 */

// ============================
// 1. Handle custom add-to-cart requests from VueJS
// ============================
add_action('template_redirect', function () {

    // Check if the request contains "add-to-cart" parameter
    if (isset($_GET['add-to-cart']) && is_numeric($_GET['add-to-cart'])) {

        $product_id   = intval($_GET['add-to-cart']); // Main product ID
        $variation_id = isset($_GET['variation_id']) ? intval($_GET['variation_id']) : 0; // Variation ID (if any)
        $quantity     = isset($_GET['quantity']) ? intval($_GET['quantity']) : 1; // Quantity, default 1

        // Collect all extra fields from GET parameters
        // This will store them as cart item meta
        $item_data = [];
        foreach ($_GET as $key => $value) {
            // Skip WooCommerce default parameters
            if (in_array($key, ['add-to-cart', 'variation_id', 'quantity'])) {
                continue;
            }
            // Store any other parameter (e.g., wccpf_boatname, more_info, etc.)
            $item_data[$key] = sanitize_text_field(wp_unslash($value));
        }

        // If product is a variation
        if ($variation_id > 0) {
            $variation_data = wc_get_product_variation_attributes($variation_id);
            WC()->cart->add_to_cart($product_id, $quantity, $variation_id, $variation_data, $item_data);
        } else {
            // Simple product
            WC()->cart->add_to_cart($product_id, $quantity, 0, [], $item_data);
        }

        // If request comes from AJAX (like VueJS XMLHttpRequest), return WooCommerce fragments directly
        if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
            WC_AJAX::get_refreshed_fragments();
            exit;
        }

        // If not AJAX, redirect to the cart page (avoid parameters in URL)
        wp_safe_redirect(wc_get_cart_url());
        exit;
    }
});


// ============================
// 2. Register custom REST API endpoints
// ============================
add_action('rest_api_init', function () {

    // Endpoint to get products for the design tool
    register_rest_route('custom-api/v1', '/products/', array(
        'methods'  => 'GET',
        'callback' => 'get_design_tool_products_simple',
        'permission_callback' => '__return_true', // Public access
    ));

    // Endpoint to get the current cart total
    register_rest_route('custom-api/v1', '/cart-total', array(
        'methods'  => 'GET',
        'callback' => 'custom_get_cart_total',
        'permission_callback' => '__return_true', // Public access
    ));
});


// ============================
// 3. Get products for the Design Tool
// ============================
function get_design_tool_products_simple() {
    // Query only "Design Tool" and "Uncategorized" product categories
    $args = array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'name',
                'terms'    => array('Design Tool', 'Uncategorized'),
                'operator' => 'IN'
            ),
        ),
    );

    $query = new WP_Query($args);
    $products = array();

    while ($query->have_posts()) {
        $query->the_post();
        $product = wc_get_product(get_the_ID());

        // Skip non-variable products
        if (!$product->is_type('variable')) {
            continue;
        }

        $product_data = array(
            'id' => $product->get_id(),
            'product' => strtolower(str_replace(' ', '', $product->get_name())),
            'variations' => array(),
        );

        // Loop through available variations
        foreach ($product->get_available_variations() as $variation_data) {
            $variation = wc_get_product($variation_data['variation_id']);
            $attributes = $variation->get_attributes();

            $variation_item = array(
                'id'    => $variation->get_id(),
                'price' => $variation->get_price(),
            );

            // Only include specific attributes (size and colors)
            foreach ($attributes as $key => $value) {
                $key_clean = strtolower(str_replace('pa_', '', $key));
                if (in_array($key_clean, ['size', 'colors'])) {
                    $variation_item['attribute_' . $key_clean] = $value;
                }
            }

            $product_data['variations'][] = $variation_item;
        }

        $products[] = $product_data;
    }

    wp_reset_postdata();

    // Return as REST API response
    return rest_ensure_response(array('designproducts' => $products));
}


// ============================
// 4. Get the current cart total
// ============================
function custom_get_cart_total() {
    // Ensure WooCommerce is active and cart object is available
    if (!class_exists('WooCommerce') || !WC()->cart) {
        return new WP_REST_Response(['error' => 'Cart not available'], 400);
    }

    // Calculate total: subtotal + tax
    $amount = WC()->cart->cart_contents_total + WC()->cart->tax_total;

    return new WP_REST_Response([
        'carttotal' => floatval($amount)
    ], 200);
}
