<?php /* Template Name: Custom Cart Value */ 

global $woocommerce;
$amount = $woocommerce->cart->cart_contents_total+$woocommerce->cart->tax_total;

echo '{"carttotal":'.$amount.'}';

?>