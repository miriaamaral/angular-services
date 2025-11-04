// É essa separação que nos permite ter uma API de teste e uma API oficial sem precisar ficar mudando o código toda hora.

// O environment.ts é o "ambiente de desenvolvimento" (o rascunho, onde usamos a PokeAPI).

// O environment.prod.ts é o "ambiente real" (o pra valer, onde o production é true e a gente colocaria a URL da API oficial).

// O Angular faz a mágica de trocar os arquivos automaticamente quando a gente faz o build de produção (quando o site vai pro ar), em outras palavras, ele usa o environment.ts quando estamos desenvolvendo e o environment.prod.ts quando estamos publicando o site/aplicação. 
// 
// ele quem? => o Angular CLI (Command Line Interface), que é a ferramenta de linha de comando do Angular usada para criar, desenvolver e manter aplicações Angular.

export const environment = {
  production: true
};



//---------------------------------------------------------------------------------------------------------
//explicação:
// 1. Criei uma constante chamada environment que é um objeto contendo configurações para o ambiente de produção.
// 2. Adicionei uma propriedade production com o valor true, indicando que este é o ambiente de produção.

// aqui nessa constante podemos adicionar outras propriedades específicas para o ambiente de produção, como URLs de APIs, chaves de autenticação, entre outros, conforme necessário para a aplicação funcionar corretamente nesse ambiente. 

// ela é diferente do environment.ts que é para o ambiente de desenvolvimento, porque aqui, explicando bem didaticamente, é o ambiente "real" onde a aplicação será usada pelos usuários finais, enquanto o environment.ts é usado durante o desenvolvimento e testes da aplicação.