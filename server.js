const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Тестовый маршрут
app.get("/", (req, res) => {
  res.send("Backend работает 🚀");
});

// Основной POST /api/chat
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  console.log(message)
 
  if (!message) {
    return res.status(400).json({ error: "Сообщение не передано" });
  }else{
    return res.status(200).json(message);
}

  /*try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error("Ошибка OpenAI:", err.message);
    res.status(500).json({ error: "Ошибка при обращении к AI" });
  }*/

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
