export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "discount-service" });
  });

  // Discount endpoints
  app.post("/discount/apply", (req, res) => {
    const { userId, orderId, code } = req.body;
    res.json({ message: `Discount code ${code} applied for user ${userId} on order ${orderId}`, discountAmount: 15 });
  });

  app.get("/discount/:userId", (req, res) => {
    const { userId } = req.params;
    res.json({
      userId,
      availableDiscounts: [
        { code: "SUMMER25", amount: 25, expires: "2025-10-01" },
        { code: "WELCOME10", amount: 10, expires: "2025-12-31" }
      ]
    });
  });

  app.post("/discount/remove", (req, res) => {
    const { userId, code } = req.body;
    res.json({ message: `Discount code ${code} removed for user ${userId}` });
  });
}
