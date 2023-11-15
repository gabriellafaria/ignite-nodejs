<h1>Fundamentos em NodeJS</h1>

Inicie criando um repositório e starta o packege com o comando `npm init -y`.

Para que o node entenda os ESModules, precisamos adicionar o ` "type": "module",` no packege.json.<br />
Para importar os pacotes nativos, adicionamos o `'node:***'` no nome do pacote, como por exemplo: `import http from 'node:http'`

Adicione o `node --watch src/server.js` nos scripts do package para não ser necessário ficar rodando o comando sempre. 

A pasta de streams é para melhor entendimento do seu funcionamento. 

--- 

Middlewares é um interceptador, uma função que intercepta a nossa função e são de fácil reconhecimento, por receber os parâmetros req e res. 

Para deixar uma prpriedade privada, pasta adicionar o `#` antes do nome. 

<h4>Percistência - database</h4>

A principal diferença entre as impostações do `fs` para o `fs/promisses` é que o último aceita o novo formato de asincronismo do JS, aceitando o `async` e não tem os métodos de Streaming. No primeiro, é necessário o uso de callbacks e tem os metodos `createReadStream`, por exemplo. 

O método `persist` é o que escreverá o nosso bando de dados em um arquivo físico. 

Para conseguirmos o caminho do banco de dados, podemos usar o `import.meta.url`, assim como o construtor `URL`