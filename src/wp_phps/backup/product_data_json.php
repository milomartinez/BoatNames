<?php




add_action('rest_api_init', function () {
    register_rest_route('custom-api/v1', '/products/', array(
        'methods'  => 'GET',
        'callback' => 'get_design_tool_products_simple',
        'permission_callback' => '__return_true',
    ));



    register_rest_route('custom-api/v1', '/cart-total', array(
        'methods'  => 'GET',
        'callback' => 'custom_get_cart_total',
        'permission_callback' => '__return_true', // Público
    ));

  
});


function get_design_tool_products_simple() {
    $args = array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'name',
                'terms'    => array('Design Tool', 'Uncategorized'), // 👈 Aquí se incluyen ambas categorías
                'operator' => 'IN'
            ),
        ),
    );

    $query = new WP_Query($args);
    $products = array();

    while ($query->have_posts()) {
        $query->the_post();
        $product = wc_get_product(get_the_ID());

        // Solo productos variables
        if (!$product->is_type('variable')) {
            continue;
        }

        $product_data = array(
            'id' => $product->get_id(),
            'product' => strtolower(str_replace(' ', '', $product->get_name())),
            'variations' => array(),
        );

        foreach ($product->get_available_variations() as $variation_data) {
            $variation = wc_get_product($variation_data['variation_id']);
            $attributes = $variation->get_attributes();

            $variation_item = array(
                'id'    => $variation->get_id(),
                'price' => $variation->get_price(),
            );

            // Agregar atributos específicos (size y colors)
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
   return rest_ensure_response(array('designproducts' => $products));
}


function custom_get_cart_total() {
    if ( ! class_exists( 'WooCommerce' ) || ! WC()->cart ) {
        return new WP_REST_Response(['error' => 'Carrito no disponible'], 400);
    }

    $amount = WC()->cart->cart_contents_total + WC()->cart->tax_total;

    return new WP_REST_Response([
        'carttotal' => floatval($amount)
    ], 200);
}


?>