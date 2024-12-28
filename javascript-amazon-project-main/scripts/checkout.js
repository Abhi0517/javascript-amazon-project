import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "../data/backend-practice.js"

//async makes a function return a Promise.
async function loadPage() {
    console.log('load page');
    return 'value2';
}
loadPage().then((value) => {
    console.log('next step');
    console.log(value);
});
// await let us write asynchronous code like normal code.
//await can only be used inside an async function.
// async await can only work with promises and not callback.

//Runs inner function immediately.
new Promise((resolve) => {
    console.log('promise');
}).then(() => {
    console.log('next step');
})

renderOrderSummary();
renderPaymentSummary(); 