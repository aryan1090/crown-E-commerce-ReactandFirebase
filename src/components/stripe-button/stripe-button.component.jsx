import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import crown from '../../assets/crown.svg'

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51IP0fLD8DYI1cpn5EfV2SGBa4g8UIuSzyCkjuhSEVlHYEwFPbv9QgeXsqTS8BeTdiJAOCpxUh02U59e4T7CSRn0d00CCnxIhC7';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='CROWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image={crown}
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;