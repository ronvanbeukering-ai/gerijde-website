// Serverless function (Vercel) — Mollie calls this URL whenever a payment's
// status changes. We never trust the webhook body itself (Mollie only sends
// an id); we always re-fetch the payment from Mollie's API to confirm the
// real status before treating an order as paid.
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const apiKey = process.env.MOLLIE_API_KEY;
  const paymentId = (req.body && req.body.id) || (req.query && req.query.id);

  if (!apiKey || !paymentId) {
    // Always acknowledge with 200 so Mollie doesn't keep retrying on
    // malformed pings, but there's nothing useful to do without an id.
    res.status(200).end();
    return;
  }

  try {
    const mollieRes = await fetch(`https://api.mollie.com/v2/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const payment = await mollieRes.json();

    if (payment.status === 'paid') {
      // Order is confirmed paid. Full order details (products, customer
      // name/address/email/phone) are in payment.metadata, and every paid
      // order is visible in the Mollie Dashboard under Payments — that is
      // the order overview for now. (An email/Slack notification on top of
      // this can be added later if wanted.)
      console.log('Betaalde bestelling:', JSON.stringify(payment.metadata));
    }

    res.status(200).end();
  } catch (err) {
    // Still acknowledge — Mollie will retry failed webhooks on its own,
    // and a 5xx here would just trigger unnecessary retries for something
    // we can equally well re-check by looking at the Mollie Dashboard.
    res.status(200).end();
  }
};
