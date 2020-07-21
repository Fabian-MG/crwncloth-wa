import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisableKey = 'pk_test_51H3CVPC8OZwRg0hWiITWC71FctdEdHfY9kCXI6rzl7i7ERzBn0iQnGNFdQWHvJ6MebikrdlbVPcaLiQZyFrnrTOQ00l8u72dtA';
  

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckoutButton;
