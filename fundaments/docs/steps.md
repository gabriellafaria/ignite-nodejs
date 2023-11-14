<h1>Fundamentos em NodeJS</h1>

Inicie criando um repositório e starta o packege com o comando `npm init -y`.

Para que o node entenda os ESModules, precisamos adicionar o ` "type": "module",` no packege.json.<br />
Para importar os pacotes nativos, adicionamos o `'node:***'` no nome do pacote, como por exemplo: `import http from 'node:http'`

Adicione o `node --watch src/server.js` nos scripts do package para não ser necessário ficar rodando o comando sempre. 