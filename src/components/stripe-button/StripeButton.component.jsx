import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { STRIPE_PUBLISH_KEY } from '../../stripe/constants';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Success!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Sweet Knickers"
      billingAddress
      shippingAddress
      image={require('../../assets/crown.svg')}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={STRIPE_PUBLISH_KEY}
    />
  );
};

export default StripeButton;
