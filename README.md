# ⚛️ Sistema Escolar - Front-end Web

Interface web moderna, dinâmica e responsiva do Sistema Escolar. Este projeto foi desenvolvido para consumir a API REST em Java/Spring e fornecer uma experiência de usuário limpa, fluida e intuitiva para o gerenciamento de fluxos educacionais.

*Nota: Este projeto representou um desafio pessoal prático para consolidação de conhecimentos e aprendizado em React e TypeScript.*

---

### 🛠️ Tecnologias Utilizadas

* **Biblioteca Principal:** React
* **Linguagem:** TypeScript (Garantindo tipagem segura, autocomplete robusto e menos bugs em tempo de execução)
* **Estilização:** CSS puro / Bootstrap (Layouts flexíveis e design responsivo)
* **Comunicação com a API:** Axios (Cliente HTTP baseado em Promises)
* **Gerenciador de Pacotes:** NPM / Yarn

---

### 🚀 Funcionalidades Principais

* **Integração com API REST:** Consumo completo e assíncrono de endpoints para listagem, criação, edição e exclusão (CRUD).
* **Interface Responsiva:** Estrutura visual adaptada para perfeita renderização em computadores, tablets e smartphones.
* **Gerenciamento de Estado:** Fluxo de dados otimizado utilizando Hooks para atualização rápida de tabelas, formulários e mensagens de feedback.

---

### 🔧 Como Executar o Projeto (Passo a Passo)

#### **Pré-requisitos**
* Node.js instalado (versão 18 ou superior LTS recomendada).
* O ambiente de Back-end (`api-escola-backend`) deve estar em execução para que os dados sejam integrados e exibidos na tela.

#### **Instalação e Configuração**
1. Clone o repositório:
   ```bash
   git clone https://github.com
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd web-escola-frontend
   ```
3. Certifique-se de que a URL base de comunicação no arquivo de serviços (geralmente em `src/services/api.ts` ou arquivos de ambiente) está apontando para o endereço correto da API Spring:
   ```typescript
   const api = axios.create({
     baseURL: 'http://localhost:8080'
   });
   ```

#### **Execução**
1. Instale todas as dependências mapeadas do ecossistema Node:
   ```bash
   npm install
   ```
2. Inicie o servidor local de desenvolvimento do React:
   ```bash
   npm start
   ```
   *(Caso o projeto tenha sido estruturado utilizando o Vite, utilize o comando `npm run dev` no terminal).*
3. O terminal indicará o sucesso da operação e abrirá automaticamente o navegador em `http://localhost:3000` (ou na porta correspondente).

---

### 📈 Conecte-se Comigo

* **LinkedIn:** [linkedin.com/in/higoeduardo](https://www.linkedin.com/in/higoeduardo/)
* **E-mail:** [higoedu@gmail.com]

---
💻 *Desenvolvido por Higo Eduardo como portfólio técnico Full Stack.*
