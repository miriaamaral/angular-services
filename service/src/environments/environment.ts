export const environment = {
  production: false,
  pokeApi: 'https://pokeapi.co/api/v2/pokemon/'
};




//---------------------------------------------------------------------------------------------------------
// environment em pt-br significa: ambiente
// No Angular, a pasta environments geralmente contém arquivos de configuração para diferentes ambientes, como desenvolvimento (environment.ts) e produção (environment.prod.ts). 

// Porque é importante ter uma pasta environments? => 
// é importante ter essa separação para facilitar o gerenciamento de configurações como URLs de APIs, chaves de autenticação, entre outros, que podem variar entre os ambientes de desenvolvimento e produção. 
// 
// Assim, ao fazer o build (que é um processo de preparação do código para ser executado em um ambiente específico) para produção, o Angular automaticamente utiliza o arquivo environment.prod.ts, garantindo que a aplicação funcione corretamente com as configurações apropriadas para esse ambiente.

//explicação: 
// 1. Criei uma constante chamada environment que é um objeto contendo configurações para o ambiente de desenvolvimento.
// 2. Adicionei uma propriedade production com o valor false, indicando que este é o ambiente de desenvolvimento.
// 3. Adicionei uma propriedade pokeApi com a URL base da API de pokémons, que será usada para fazer requisições à API durante o desenvolvimento.