const checkoutController = {};
require("dotenv").config();
const stripe_secret_key = process.env.stripe_secret_key;
const stripe = require("stripe")(stripe_secret_key);

checkoutController.Checkout = async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: 'Your Subscription Product Name',
            type: 'service', // or 'good' depending on your use case
        });

        const price = await stripe.prices.create({
            product: product.id,
            currency: 'usd',
            unit_amount: 100,
        });

        const lineItems = [{
            price: price.id,
            quantity: 1,
        }];

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/checkout/failed",
            cancel_url: "http://localhost:3000/checkout/failed",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = checkoutController;
