import { checkoutPayment, getRazorpayKey } from "../api-call";

var key;

const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

// getRazorpayKey().then((response) => { setKey(response?.data?.key) });

export async function checkoutpayment(amount) {
    const res = await initializeRazorpay();

     console.log("amount : ",amount);
       checkoutPayment(amount).then((response) => {
            // console.log(response?.data?.order?.id);
            getRazorpayKey({data: key => response?.data?.key})
            console.log(response)
            const options = {
                key: key, // Enter the Key ID generated from the Dashboard
                amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: response?.data?.order?.currency,
                name: "Acme Corp",
                description: "Test Transaction",
                // image: "https://example.com/your_logo",
                order_id: response?.data?.order?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: "http://localhost:5000/api/v1/payment/paymentverification",
                profile: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: response?.data?.order?.notes
                },
                theme: {
                    color: "#3399cc"
                }
            };
            const razorpay_payment = new window.Razorpay(options);
            razorpay_payment.open();
        })

}

