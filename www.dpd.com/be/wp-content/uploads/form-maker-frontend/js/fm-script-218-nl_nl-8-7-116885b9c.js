    var fm_currentDate = new Date();
    var FormCurrency_11688 = '$';
    var FormPaypalTax_11688 = '0';
    var check_submit11688 = 0;
    var check_before_submit11688 = {};
    var required_fields11688 = ["41","18","33","35","36","5","7","45","46","39","11","47","26","26_confirm","12"];
    var labels_and_ids11688 = {"3":"type_section_break","41":"type_own_select","44":"type_label","18":"type_text","33":"type_text","35":"type_own_select","37":"type_text","36":"type_own_select","38":"type_text","9":"type_section_break","20":"type_textarea","13":"type_section_break","40":"type_own_select","15":"type_section_break","4":"type_text","5":"type_text","17":"type_section_break","7":"type_text","45":"type_text","46":"type_text","39":"type_text","11":"type_text","47":"type_text","19":"type_section_break","26":"type_submitter_mail","8":"type_text","21":"type_section_break","12":"type_text","14":"type_own_select","23":"type_section_break","25":"type_section_break","32":"type_recaptcha","27":"type_section_break","24":"type_label","28":"type_section_break","1":"type_submit_reset"};
    var check_regExp_all11688 = [];
    var check_paypal_price_min_max11688 = [];
    var file_upload_check11688 = [];
    var spinner_check11688 = [];
    var scrollbox_trigger_point11688 = '20';
    var header_image_animation11688 = 'none';
    var scrollbox_loading_delay11688 = '0';
    var scrollbox_auto_hide11688 = '1';
         function before_load11688() {	
        }	
                 function before_submit11688() {
                     }	
                 function before_reset11688() {	
        }    function onload_js11688() {
            }
    function condition_js11688() {
        
                                if( jQuery("#wdform_35_element11688 option:selected").val()=="Beiden" ) {
                                    jQuery("#form11688 div[wdid=37]").removeAttr("style");
                                } else {
                                    jQuery("#form11688 div[wdid=37]").css("display", "none");
                                }
                                    jQuery("#wdform_35_element11688").change(function() {
                                        if( jQuery("#wdform_35_element11688 option:selected").val()=="Beiden" ) {
                                            jQuery("#form11688 div[wdid=37]").removeAttr("style");
                                        } else {
                                            jQuery("#form11688 div[wdid=37]").css("display", "none");
                                        }
                                    });
                                if( jQuery("#wdform_36_element11688 option:selected").val()=="Beiden" ) {
                                    jQuery("#form11688 div[wdid=38]").removeAttr("style");
                                } else {
                                    jQuery("#form11688 div[wdid=38]").css("display", "none");
                                }
                                    jQuery("#wdform_36_element11688").change(function() {
                                        if( jQuery("#wdform_36_element11688 option:selected").val()=="Beiden" ) {
                                            jQuery("#form11688 div[wdid=38]").removeAttr("style");
                                        } else {
                                            jQuery("#form11688 div[wdid=38]").css("display", "none");
                                        }
                                    });
                                if( jQuery("#wdform_41_element11688 option:selected").val()=="Meer dan 25 pakketten per maand " ) {
                                    jQuery("#form11688 div[wdid=18]").removeAttr("style");
                                } else {
                                    jQuery("#form11688 div[wdid=18]").css("display", "none");
                                }
                                    jQuery("#wdform_41_element11688").change(function() {
                                        if( jQuery("#wdform_41_element11688 option:selected").val()=="Meer dan 25 pakketten per maand " ) {
                                            jQuery("#form11688 div[wdid=18]").removeAttr("style");
                                        } else {
                                            jQuery("#form11688 div[wdid=18]").css("display", "none");
                                        }
                                    });
                                if( jQuery("#wdform_41_element11688 option:selected").val()=="Minder dan 25 pakketten per maand" ) {
                                    jQuery("#form11688 div[wdid=44]").removeAttr("style");
                                } else {
                                    jQuery("#form11688 div[wdid=44]").css("display", "none");
                                }
                                    jQuery("#wdform_41_element11688").change(function() {
                                        if( jQuery("#wdform_41_element11688 option:selected").val()=="Minder dan 25 pakketten per maand" ) {
                                            jQuery("#form11688 div[wdid=44]").removeAttr("style");
                                        } else {
                                            jQuery("#form11688 div[wdid=44]").css("display", "none");
                                        }
                                    });    }
    function check_js11688(id, form_id) {
        if (id != 0) {
            x = jQuery("#" + form_id + "form_view"+id);
        } else {
            x = jQuery("#form"+form_id);
        }
            }
    function onsubmit_js11688() {
        
            var disabled_fields = "";
            jQuery("#form11688 div[wdid]").each(function() {
                if(jQuery(this).css("display") == "none") {
                    disabled_fields += jQuery(this).attr("wdid");
                    disabled_fields += ",";
                }
                if(disabled_fields) {
                    jQuery("<input type=\"hidden\" name=\"disabled_fields11688\" value =\""+disabled_fields+"\" />").appendTo("#form11688");
                }
            });    }
    jQuery(document).ready(function () {
        formOnload(11688);
    });
    form_view_count11688 = 0;
    jQuery(document).ready(function () {
        fm_document_ready(11688);
    });
