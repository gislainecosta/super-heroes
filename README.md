# Super Heroes

### *Este teste foi desenvoldido pela Coobrastur para o cargo de Desenvolvedor web frontend, sendo realizado por Gislaine Costa.*
<br>

## Sumário
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Requisitos do projeto](#requisitos-do-projeto)
  - [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
  - [Instruções de início](#instruções-de-início)
  - [Melhorias Futuras](#melhorias-futuras)
<br>

## O que deverá ser desenvolvido

Desenvolveu-se um site de super-heróis com as seguintes funcionalidades: 
  - Página de Login;
  - Página de Home, com um espaço para pesquisa de heróis e a listagem destes;
  - Tela de Detalhes de um heróis específico.
<br>

## Requisitos do projeto
- Utilizar o versionamento GIT para desenvolvimento.
- Utilizar orientação a objetos e classes para representar os dados mostrados (Não é necessário criar uma autenticação verdadeira com request, só validação);
- deve levar em consideração as boas práticas do mercado para estrutura e clean code na aplicação;
- Todo o design ficará a critério do candidato;
- Poderá ser usado quaisquer bibliotecas e framework de apoio para criação do design e validações, mas será levado em consideração a confiabilidade das bibliotecas escolhidas.

### 1. Página de Login
- Validações de campo contendo mensagem adequada para cada um.
- Após validação, redirecionar para Home

### 2. Home
- Deverá ser utilizado a api publica do site: [Super Herois API](https://superheroapi.com);
- Listar os herois com nome, uma breve descrição biográfica e opção de "ver detalhes";
- Deve ser criado campo de pesquisa na tela da lista onde é possível pesquisar por um Herói.

### 3. Detalhes do Herói
- Deve ser mostrado os powerstats, biography, appearance e image contidas na API sobre aquele herói.
<br>

## Ferramentas e Tecnologias Utilizadas

- ReactJs com Typescript
- React Router DOM
- Programação orientada à objetos
- Formulário com validação nos inputs
- API externa de Super Heróis
- axios
- Criação de gráfico de Radar com a lib ChartJs
- Styled Components
- Git
<br>

## Instruções de início

1. Após clonar e acessar o repositório, instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm run dev` (A aplicação será iniciada em http://localhost:3000/)
<br>

## Melhorias Futuras
- Criação de um estado Global com Redux ou Context
- Retorno das mensagens de erro das requições da API (mostrar ao usuário)
- Responsividade para Tablets
