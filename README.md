<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="./assets/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 2: FastFeet, o início
</h3>

<h3 align="center">
  :warning: Etapa 1/4 do Desafio Final :warning:
</h3>

<p>Esta aplicação tem por objetivo contemplar o segundo desafio do bootcamp GoStack. A aplicação consiste em um app para uma transportadora fictícia, o FastFeet.</p>

### Requisitos para rodas a aplicação:

<p>Seu ambiente deve conter as seguintes tecnologias/libs</p>

- `Docker`
- `Sequelize`
- `Sequelize-cli`

### Para rodar a aplicação siga os passos abaixo:

- `yarn`
- `yarn docker:init`
- `yarn run:migrations`
- `yarn dev`

<p>Agora a aplicação deve estar rodando normalmente na porta :4200.</p>

<p>Agora você já pode testar o desafio.</p>

### 1.Utilizando a rota de cadastro de usuários:

<p>Para efetuar a cadastro de um usuário, bata na seguinte rotas passando o body abaixo:</p>

- `POST - http://localhost:4200/users`;

```js
{
	"name": "Flávio Maran Florentino",
	"email": "flavio@hotmail.com",
	"password": "09812345"
}
```

### 2.Realizando o login:

<p>Para efetuar o login de um usuário, bata na seguinte rota passando o body abaixo:</p>

- `POST - http://localhost:4200/sessions`

```js
{
	"email": "flavio@hotmail.com",
	"password": "09812345"
}
```

### 3.Criando um destinatário:

<p>Para criar um destinatário, bata na seguinte rota passando o body abaixo:</p>

- `POST - http://localhost:4200/recipients`

```js
{
	"name": "Fláio - house",
	"street": "castro alves",
	"number": 15,
	"complement": "valderi",
	"state": "SP",
	"city": "São Caetano do Sul",
	"postalCode": "04790030"
}
```

### .Alterando um destinatário:

<p>Para alterar um destinatário, bata na seguinte rota passando o body abaixo:</p>

- `PUT - http://localhost:4200/recipients`

```js
{
	"id": 1,
	"name": "Flávio editado",
	"street": "castro alves",
	"number": 15,
	"complement": "valderi",
	"state": "SP",
	"city": "São Caetano do Sul",
	"postalCode": "04790030"
}
```

<p>Link do desafio: <a href="#rocket-sobre-o-desafio" target="_blank">Visualizar o desafio</a></p>
