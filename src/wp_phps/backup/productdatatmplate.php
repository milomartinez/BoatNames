<?php /* Template Name: Prod Data Ben */ 

		echo '{"designproducts":[';

		$handle=new WC_Product_Variable('1909');
        echo '{"product":"sidenames","id":1909,"variations":[';
        bn_output_variations($handle);
		echo ']},';

		$handle=new WC_Product_Variable('2025');
        echo '{"product":"transomname","id":2025,"variations":[';
        bn_output_variations($handle);
		echo ']},';

		$handle=new WC_Product_Variable('2110');
        echo '{"product":"liferingname","id":2110,"variations":[';
        bn_output_variations($handle);
		echo ']},';

		$handle=new WC_Product_Variable('2104');
        echo '{"product":"tenderto","id":2104,"variations":[';
        bn_output_variations($handle);
		echo ']},';

		$handle=new WC_Product_Variable('2093');
        echo '{"product":"homeport","id":2093,"variations":[';
        bn_output_variations($handle);
		echo ']},';

		$handle=new WC_Product_Variable('2083');
        echo '{"product":"regonumbers","id":2083,"variations":[';
        bn_output_variations($handle);
		echo ']}]}';


function bn_output_variations($bnproduct) {
	$variations1=$bnproduct->get_children();
	$numVariations = count($variations1);
    $varIndex = 0;
    foreach ($variations1 as $value) {
        $single_variation=new WC_Product_Variation($value);
        echo '{"id":'.$single_variation->get_variation_id().',';
        $attris = $single_variation->get_variation_attributes();
        foreach ($attris as $key => $attrValue) {
        	echo '"'.$key.'":"'.$attrValue.'",';
        }
        $varIndex++;

        echo '"price":'.$single_variation->price.'}';
        if ( $varIndex < $numVariations ) {
        	echo ',';
        }
	}
}
?>