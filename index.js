import express from "express";
import axios from "axios";
const app = express();

app.use(express.json());

// ✅ Khi ngân hàng gửi giao dịch mới về
app.post("/acb-webhook", async (req, res) => {
  const data = req.body;
  console.log("📩 Nhận giao dịch mới:", data);

  // Gửi sang web nạp PHP để xử lý
  try {
    const response = await axios.post("https://tenmiencuaban.com/api/auto-nap.php", data);
    console.log("✅ Gửi sang web PHP thành công:", response.data);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Gửi sang web PHP thất bại:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Test route
app.get("/", (req, res) => res.send("Server API ACB đang hoạt động 🚀"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
