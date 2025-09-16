CREATE DATABASE nightmare_db;

USE nightmare_db;

-- Tabela de usuários
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);

-- Tabela de produtos
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

-- Exemplo de inserir produtos
INSERT INTO produtos (nome, preco) VALUES
('Camisa Assombrada', 99.90),
('Caneca do Medo', 49.50),
('Pôster Sangrento', 29.90);
