<?php
function dequeue_hello_frontend_script() {
    wp_dequeue_script('hello-theme-frontend'); // este es el handle usual del script
}
add_action('wp_enqueue_scripts', 'dequeue_hello_frontend_script', 100);

function dequeue_ajax_script() {
    wp_dequeue_script('ajax-script');
}
add_action('wp_enqueue_scripts', 'dequeue_ajax_script', 100);
?>