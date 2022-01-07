//import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './scss/custom.scss';
import './scss/style.scss';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';



$(function() {

    $('[data-tssoggle="tooltip"]').tooltip();
  $(".add-to-cart-btn").click(function(){
alert("اضيف الي عربة السراء");
  });
$("#copyright").text("جميع الحقوق محفوظة للمتجر الالكتروني" +new Date().getFullYear());
 $(".product-option input[type='radio']").change(function(){
   $(this).parents('.product-option').siblings().removeClass('active');
   $(this).parents('.product-option').addClass("active");
 });
 $('[data-product-quantity]').change(function(){
   var newQuantity=$(this).val();
   var parent = $(this).parents('[data-product-info]');
   var pricep= parent.attr('data-product-price');
   var nn=newQuantity * pricep;
   parent.find(".total-price-for-product").text(nn + '$');
   calcutt();
 });
 $('[data-remove-from-cart]').click(function(){
  $(this).parents('[data-product-info]').remove();
  calcutt();
 });
 function calcutt(){
   var  totalPriceForAllProducts=0;
   $('[data-product-info]').each(function(){
    var pricePerUnit = $(this).attr('data-product-price');
    // اجلب كمية المنتج من حقل اختيار الكمية
    var quantity = $(this).find('[data-product-quantity]').val();
    var totalPriceForProduct = pricePerUnit * quantity;
    totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);

   });
   $("#total-price-for-all-products").text( totalPriceForAllProducts +'$');
  
 };
 var citiesByCountry={
   sa:['جدة','الرياض'],
   eg:['القاهرة','الاسكندرية'],
   jo:['عمان','الزرقاء'],
   sy:['حلب','دمشق','اللاذقية']
 }

 $('#form-checkout select[name="country"]').change(function(){
  
  var country = $(this).val();
  var cities = citiesByCountry[country];
    
     $('#form-checkout select[name="city"]').empty();
    $('#form-checkout select[name="city"]').append(
        '<option disabled selected value="">اختر المدينة</option>'
    );
    
      cities.forEach(function(city) {
        var newOption = $('<option></option>');
        newOption.text(city);
        newOption.val(city);
        $('#form-checkout select[name="city"]').append(newOption);
      });
    });

    $(' #form-checkout input[name="payment_method"]').change(function(){
      var p=$(this).val();
      if(p==='on_delivery'){
        $("#credit-card-info input").prop("disabled", true)
      }
      else{
        $("#credit-card-info input").prop("disabled",false )
      }
      $("#credit-card-info").toggle();
        });





  
          $( "#price-range" ).slider({
            range: true,
            min: 50,
            max: 1000,
            step:50,
            values: [ 250, 800 ],
            slide: function( event, ui ) {
           $("#price-min").text(ui.values[0]);
           
           $("#price-max").text(ui.values[1]);
            }
          });
        
        
 });
 