import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IZgKfSCIXvQNBxv5n3eZ4PufaBgJkLKUY0kii5nX3nBcF0i7cgkTHHJeiwHmtj405Ysc1enopfgnwLjKBWQuNQW00o8GxatUy";

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull !! Thank you for shopping with Us!");
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CROWN Clothing Ltd."
            amount={priceForStripe}
            billingAddress
            shippingAddress
            currency="INR"
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is Rs. ${price}`}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}

        />
    );
}

export default StripeButton;