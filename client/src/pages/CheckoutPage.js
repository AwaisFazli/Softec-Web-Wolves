import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axiosInstance from '../services/MakeBackendRequests';

const CheckoutPage = () => {
  const REACT_APP_STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

  useEffect(() => {
    const loadStripeHandler = async () => {
      try {
        const stripe = await loadStripe(REACT_APP_STRIPE_KEY);
        const headers = {
          "Content-Type": "application/json"
        }
  
        const response = await fetch("http://localhost:3002/create-checkout-session", {
          method: "POST",
          headers: headers
        })
        const session = await response.json()
  
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
  
        if (result.error) {
          console.error(result.error);
        }
      } catch (error) {
        console.error('Error during checkout:', error.message);
      }
    };
  
    loadStripeHandler();
  }, []);

  return (
    <div>
    </div>
  );
};

export default CheckoutPage;
