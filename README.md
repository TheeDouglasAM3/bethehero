# Be the Hero

<p  align="center">
    <img  src="./.github/logo.png"  alt="Be the hero"  width="280"/>
</p>

<p  align="center">
    <a  href="https://www.linkedin.com/in/douglas-alves-marcelino-704250180/">
        <img  alt="Douglas Alves Marcelino"  src="https://img.shields.io/badge/-Douglas%20Alves%20Marcelino-e02041?style=flat&logo=Linkedin&logoColor=white" />
    </a>
    <img  alt="Repository size"  src="https://img.shields.io/github/repo-size/TheeDouglasAM3/bethehero?color=e02041">
    <a  href="https://github.com/TheeDouglasAM3/bethehero/commits/master">
        <img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/TheeDouglasAM3/bethehero?color=e02041">
    </a>
    <img  alt="License"  src="https://img.shields.io/badge/license-MIT-e02041">
    <a  href="https://github.com/TheeDouglasAM3/bethehero/stargazers">
        <img  alt="Stargazers"  src="https://img.shields.io/github/stars/TheeDouglasAM3/bethehero?color=e02041&logo=github">
    </a>
</p>

Projeto criado durante a Semana Omnistack 11 [@Rocketseat](https://github.com/Rocketseat), com o intuito de adquirir mais conhecimentos sobre as tecnologias React, React Native e NodeJS.


# :star: Sumário

* [Descrição](#descrição)
* [Demonstração da aplicação](#demonstração-da-aplicação) 
* [Tecnologias](#tecnologias)
* [Como rodar o projeto](#como-rodar-o-projeto)
* [Achou algum bug?](#problemas)
* [Licença](#licença)

# Descrição
Be the Hero é uma plataforma onde possui o intuito de ajudar as pessoas a encontrarem casos de ONGs, e com isso eles podem realizar doações e ajudá-las.

# Demonstração da aplicação
O front-end desenvolvido neste repositório está disponível em: 
[https://bethehero-lyart.vercel.app/](https://bethehero-lyart.vercel.app/)

# Tecnologias
Neste projeto foram utilizadas as seguintes tecnologias:
* [NodeJS](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org/)
* [ReactNative](https://reactnative.dev/)
* [Expo](https://expo.io/)

# Como rodar o projeto
```bash
# Copie o repositório
$ git clone https://github.com/TheeDouglasAM3/bethehero.git
```

### Rode o servidor (back-end)

```bash
# Vá para a pasta do servidor
$ cd bethehero/backend

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode as migrações do banco de dados
knex --knexfile knexfile.js migrate:latest

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o servidor em: http://localhost:3333/

### Rode o website (front-end)

```bash
# Vá para a pasta web
$ cd bethehero/frontend

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o website em: http://localhost:3000/

### Rode o aplicativo móvel

É necessário que você tenha instalado em seu celular o aplicativo Expo. Caso não possua, você precisará emular Android ou Ios diretamente em seu dispositivo.

```bash
# Vá para a pasta mobile
$ cd bethehero/mobile

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```

Leia o QRCode disponibilizado, utilizando o aplicativo do expo ou rode em um emulador.


# Problemas
Se você encontrou algum bug, se sinta livre **para criar uma nova issue**  [clicando aqui!](https://github.com/TheeDouglasAM3/bethehero/issues). Se você já encontrou a solução para o problema, **faça um pull request**!

# Licença

Criado em 2020 

Feito com carinho por [Douglas Alves Marcelino](https://github.com/TheeDouglasAM3) :duck:

Esse projeto esta sobre [MIT license](./LICENSE).