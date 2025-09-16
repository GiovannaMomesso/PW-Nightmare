// server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "segredo123"; // depois pode colocar em variável de ambiente

// --- Cadastro ---
app.post("/api/cadastro", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: "Preencha todos os campos" });
    }

    const [userExist] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
    if (userExist.length > 0) {
      return res.status(400).json({ mensagem: "Email já cadastrado" });
    }

    const hash = await bcrypt.hash(senha, 10);
    await pool.query("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", [nome, email, hash]);

    res.json({ mensagem: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// --- Login ---
app.post("/api/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const [rows] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({ mensagem: "Usuário não encontrado" });
    }

    const usuario = rows[0];
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: "Senha incorreta" });
    }

    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, SECRET, { expiresIn: "1h" });

    res.json({ mensagem: usuario.nome, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

// --- Produtos ---
app.get("/api/produtos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM produtos");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: "Erro no servidor" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
