Para usar o micro framework fastify, basta instalar pelo comando `npm i fastify` 

Ele é o utilizado nesse projeto por: 
- É mais "bem" mantido;
- Opção popular e é similar com a API do express;
- É mais performático e está preparado para lidar com novas features do JS. 

Como será usado o typescript no projeto, é necessário instalar com o comando `npm i -D typescript`. <br />
Adicionar os tipos do node é o melhor, quando usamos com o typescript, `npm i -D @types/node`. <br />
Para criar o arquivo de configurações do Typescript, é possível automatizar com o comando `npx tsc --init`, ele gera o tscinfig. <br />
Nele, será necessário alterar o `"target"`, para atualizar qual será o ecmascript utilizado. Nesse caso, será o de 2020. 

Após isso, é possível converter o códio com `npx tsc nomeDoArquivo`. 

O uso da ferramenta tsx ajuda com o processo de conversão do código para JS e executa o node no JS convertido de forma automatizada, `npm i tsx -D`. Para facilitar, pode adicionar o srcipt no package `tsx watch src/server.ts`.

EsLint usado no projeto: `@rocketseat/eslint-config`

---
Banco de dados 

Será usado o query builder Knex.js com o sqlite, instale por `npm i knex sqlite3`. <br />

Para o knex reconheça o typescript, criamos o knexfile. 

Para criar as migrations, você inicia com `npx knex migrate:make suaMensagem`, para executar a migrations, use `migrate:latest`. 

Será usado o arquivo .env para armazenamento de variáveis de ambiente, para usar com o node é necessário instalar o `npm i dotenv`.


--- 
Zod

Será usado o zod para as validações de dados. <br />
Para a instalação, usa-se `npm i zod`

Foi adicionado o arquivo no @Types para melhor integração do Knex com o typescript. Da forma que foi adiocionado, conseguimos o intellisense nas tabelas. 

---

Será usado cookies para identificação de uso na aplicação, no lugar de usuários, inicialmente. 
Para conseguirmos usar os cookies da melhor forma, instale `@fastify/cookie`. É adicionado o cadatro dos cookies no server, antes das requisições. 

Os testes serão executados pelo Vitest, intalado por `npm i vitest -D`. <br />
É usado também o supertest, `npm i supertest -D`, que necessita da importação dos types `npm i -D @types/supertest`. <br />
Após a instalação, é criada a pasta de testes.

--- 

Build 

É usado o Tsup para a build, realizando a conversão do código para javascript. Instalação por `npm i tsup -D`.

O banco de dados precisará ser o Postgresql, para o deploy no Render. Nesse caso, foi criado um banco no Render e ajustes no código para a troca do banco no ambiente de produção. 