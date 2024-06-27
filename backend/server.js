const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const contactSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
  const { email, name, phone, message } = req.body;
  const newContact = new Contact({ email, name, phone, message });

  try {
    await newContact.save();
    res.status(201).send('Mensaje enviado con éxito');
  } catch (error) {
    res.status(500).send('Error al enviar el mensaje');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
