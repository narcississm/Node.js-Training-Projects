const stripe = require('../utils/stripe');

exports.createCheckoutSession = async(req, res, next) => {
    try {
        const { products } = req.body;

        const lineItems = products.map(product => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.name
                },
                unit_amount: product.price * 100
            },
            quantity: product.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: lineItems,
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        });

        res.status(200).json({ id: session.id });
    } catch (err) {
        next(err);
    }
};