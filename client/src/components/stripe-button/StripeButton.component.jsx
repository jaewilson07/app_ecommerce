import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

import { STRIPE_PUBLISH_KEY } from '../../stripe/constants';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('payment successful');
        console.log(response);
      })
      .catch((err) => {
        alert('There was an issue with your payment');
        console.log(err);
        // console.log('Payment err: ', JSON.parse(err));
      });
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
