[![Netlify Status](https://api.netlify.com/api/v1/badges/06cc765c-bf86-47a4-b5e7-7b99beb0fcdd/deploy-status)](https://app.netlify.com/sites/bernardonascimento-navers/deploys)

O projeto foi criado utilizando [Create React App](https://github.com/facebook/create-react-app).

Dentro do diretório do projeto, você pode executar:

### `yarn start`

Para iniciar o servidor em desenvolvimento <br />
Abra [http://localhost:3000](http://localhost:3000) em seu navegador.

### Ferramentas utilizadas

`axios` realizar chamadas HTTP <br />
`react-router-dom` para controlar as rotas <br />
`styled-components` utilizado para estruturação do CSS de todo o layout <br />
`styled-icons` todos os ícones vindos do material <br />  
`react-loader-spinner` criação do loader para carregamento das requisições <br />
`react-toastify` utilizado para mensagem de erro na página de Login <br />
`styled-react-modal` criação dos Modais da aplicação.

### Gerenciamento de estado

Para gerenciar o estado da aplicação, foi utilizado o `ContextAPI`, `Redux` e `Redux-Saga`, o intuito é demonstrar as minhas habilidades no uso das duas ferramentas.

`ContextAPI` utilizado no controle das rotas e na página de Login <br />
`Redux` utilizado no restante da aplicação para controlar o estado e chamadas assíncronas utilizando o middleware `Redux-Saga`.

### Layout

- [x] Layout de acordo com as telas do [figma](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Front-End).

### Funcionalidades aplicadas

- [x] A web app deverá possuir um fluxo de autenticação, onde o usuário só pode acessar as telas internas do sistema (listagem, formulários) passando pela tela de login com as credenciais criadas previamente via Postman.

- [x] Para realizar o login, você deve usar a request de users/login disponível no postman. Essa request retornará um token do tipo Bearer que deverá ser utilizado no header das próximas requisições.

- [x] A página inicial da aplicação tera uma lista dos navers.

- [x] Para listar os navers, você deve usar a request de navers/index disponível no postman.

- [x] Ao clicar em algum naver da listagem, o usuário terá uma visualização completa das informações do mesmo.

- [x] Para apresentar um único naver, você deve usar a request de navers/show disponível no postman.

- [x] Para excluir um naver, você deve usar a request de navers/delete disponível no postman.

- [x] O usuário precisa ter a possibilidade de criar um novo naver ou editar um já existente.

- [x] Para criar um naver, você deve usar a request de navers/create disponível no postman. Para editar um naver, você deve usar a request de navers/update disponível no postman.