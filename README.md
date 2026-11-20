# 🛒 Marketplace API

API RESTful para gerenciamento de um marketplace, desenvolvida em **TypeScript**, **Node.js**, **Express** e **MongoDB**, com arquitetura modular, injeção de dependências, autenticação JWT, upload de arquivos, testes automatizados e suporte a Docker.

---

## ✨ Funcionalidades e Módulos

- **Auth (`src/modules/Auth`)**: Autenticação via JWT e login social com GitHub OAuth.
- **Users (`src/modules/Users`)**: Cadastro e gerenciamento de usuários.
- **Categories (`src/modules/Categories`)**: Organização de produtos por categorias.
- **Products (`src/modules/Products`)**: Cadastro, listagem paginada e gerenciamento de produtos com upload de imagens.
- **Carts (`src/modules/Carts`)**: Gerenciamento de carrinhos de compras.
- **Orders (`src/modules/Orders`)**: Fluxo de criação e consulta de pedidos.

### Recursos Técnicos
- Validação de requisições com **Joi** (`schemaValidationMiddleware`)
- Paginação padronizada (`paginationMiddleware`)
- Tratamento centralizado de erros (`errorMiddleware` e `apiError`)
- Injeção de dependências com **TSyringe**
- Upload de arquivos com **Multer**
- Testes unitários e de integração com **Jest** e **Supertest**

---

## 🛠️ Tecnologias

- **Node.js** & **TypeScript**
- **Express**
- **MongoDB** & **Mongoose**
- **JWT (`jsonwebtoken`)** & **Bcrypt**
- **Joi** & **TSyringe**
- **Multer**
- **Jest** & **Supertest**
- **Docker** & **Docker Compose**

---

## 🚀 Como Executar

### 1. Pré-requisitos
- Node.js (v18+)
- MongoDB em execução (local ou Atlas)
- Docker (opcional)

### 2. Configuração
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Pedrohenr1qq/marketplace-API.git
cd marketplace-API
npm install
```

Crie um arquivo `.env` na raiz com base no `.env.example`:

```env
DATABASE_URL=mongodb://localhost:27017/marketplace
SECRET_JWT=sua_chave_secreta
```

### 3. Rodando em desenvolvimento
```bash
npm run dev
```

### 4. Build para produção
```bash
npm run build
```

### 5. Executando os testes
```bash
npm test
# ou com cobertura:
npm run test:coverage
```

### 6. Executando com Docker
```bash
docker compose -f docker-compose-test.yml up --build
```

---

## 📄 Licença

Este projeto está sob a licença definida no arquivo [LICENSE](./LICENSE).
