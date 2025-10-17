import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.get("/test", (req, res) => {
  res.json({ message: "API hoạt động ngon rồi 😎" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
