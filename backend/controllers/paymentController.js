const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe")("sk_test_51M5s0kG9nxanLPy4vr2bbBIVsawWp5kGgZcjRSvu3vSTzfP7Ji5ETM8FOZTvWzoTQPkEY2YvadaSTDS8NiEKTqV900W7xDKKG6");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "pen",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: "pk_test_51M5s0kG9nxanLPy49TnrHUrgYH4InmaZnAbVLKULH9b50ZTXtmg26x1a2QhdNWMQycOkGq4WMItImxSXSUZxFEJF00kF0gn9pF"});
});
