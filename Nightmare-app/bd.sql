CREATE DATABASE nightmare;
USE nightmare;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

-- Exemplo de produtos
INSERT INTO produtos (nome, preco) VALUES
('Camiseta Caveira', 89.90),
('Moletom Sombrio', 159.90),
('Caneca Noturna', 49.90);


