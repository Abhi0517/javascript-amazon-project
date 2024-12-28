import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "../data/backend-practice.js"

//Runs inner function immediately.
new Promise((resolve) => {
    console.log('promise');
}).then(() => {
    console.log('next step');
})

renderOrderSummary();
renderPaymentSummary(); 