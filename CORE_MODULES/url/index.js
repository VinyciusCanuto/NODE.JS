
const url = require('node:url');
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira';
const pareUrl = new url.URL(adress);

console.log(pareUrl.host)
console.log(pareUrl.pathname)
console.log(pareUrl.search)
console.log(pareUrl.searchParams)
console.log(pareUrl.searchParams.get('produtos'))