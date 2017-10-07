/*Add the JavaScript here for the function billingFunction().
It is responsible for setting and clearing the fields in Billing Information */
//Yo tengo acceso a los elementos del formulatio por el id directamente
function billingFunction(){
   if (same.checked) {
      billingName.value = shippingName.value;
      billingZip.value = shippingZip.value;
   }
   else {
      billingName.value = "";
      billingZip.value = "";
   }
}
