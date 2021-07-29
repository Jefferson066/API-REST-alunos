# API REST simples para consumo de dados


## 💻 Sobre o projeto
Uma API Rest utilizando MySQL (SQL) e o Sequelize, com sistema de login que utiliza JSON Web Tokens (JWT) e um sistema de cadastro e edição de alunos onde faz o cadastro de dados do aluno e upload de imagens do aluno.

## 🚀 Como executar o projeto


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Mysql](https://www.mysql.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando a API

Primeiramente crie uma instância no seu Mysql chamada de api_database . 

Edite o arquivo .env_example para .env.

No arquivo .env você deve adicionar adicionar as configurações da sua instância do Mysql.

```bash
# exemplo
DATABASE='api_database'
DATABASE_HOST='127.0.0.1'
DATABASE_PORT=3306
DATABASE_USERNAME='root'
DATABASE_PASSWORD='sua-senha'
```

Você também precisará adicionar uma secret key no arquivo .env
```bash
# exemplo
TOKEN_SECRET='sua_secret_key_aqui'
TOKEN_EXPIRATION=7d
```
Feito isso execute os comandos:
```bash
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm start
```
Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:3002/.

Os dados de usuário e senha para loguin do arquivo de seed é:

<!--ts-->
   * email = admin@email.com
   * senha = 123456
<!--te-->

Você pode obter o token JWT na rota /tokens, passando os dados JSON:
```bash
{
	"email": "admin@email.com",
	"password": "123456"
}
```
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção da API:
#### **API**  (([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Sequelize](https://sequelize.org/)**
-   **[Mysql](https://www.mysql.com/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
-   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
-   **[mysql2](https://www.npmjs.com/package/mysql2)**

#### **Utilitários**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**

