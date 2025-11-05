<!-- 
  Esse é o meu bloquinho de anotações para não poluir mais o meu projeto 
  Eu fiz algumas anotações dentro dos componentes sobre:

- O PAPEL DO SERVICE: 
  basicamente, de u aforma simples e usando um exemplo bem facil, o serviço (service) no Angular é uma classe que encapsula a lógica de negócio e os dados da aplicação, permitindo que diferentes componentes compartilhem essa lógica e esses dados de forma eficiente e organizada. 
  Um exemplo dentro do próprio projeto é o serviço de pokémons (pokemon.ts) que criamos para buscar informações sobre pokémons a partir de uma API externa.

//---------------------------------------------------------------------------------------------------------

- A ANATOMIA DE UM SERVICE: 
  um serviço no Angular geralmente possui os seguintes elementos principais:
  1. Decorador @Injectable: indica que a classe pode ser injetada como uma dependência em outros componentes ou serviços.
  2. Propriedades: armazenam dados ou estados que o serviço gerencia.
  3. Métodos: funções que encapsulam a lógica de negócio, como buscar dados, processar informações, tratar erros etc.
  4. Injeção de Dependência: o serviço pode depender de outros serviços ou recursos, que são injetados através do construtor da classe.

//---------------------------------------------------------------------------------------------------------

- COMO INJETAR UM SERVICE: 
  eu segui exatamente esses passos para injetar um serviço no Angular:
  1. Criei o serviço com @Injectable e defini sua lógica de negócio (como fizemos no pokemon.ts).
  2. No componente onde eu queria usar o serviço (como no card.ts), adicionei o serviço como uma dependência no construtor da classe do componente.
  3. Usei os métodos do serviço dentro do componente para obter dados ou executar ações relacionadas à lógica de negócio encapsulada no serviço.

se triver dúvida é só olhar lá no card.ts que eu fiz exatamente isso: 
  1- injetei o serviço de pokémons no construtor do componente Card escrevendo private service: PokemonService e já declarei que o service é do tipo PokemonService (que é o serviço que criamos no pokemon.ts) 
  2- chamei o método getPokemon do serviço dentro do ngOnInit do componente Card escrevendo this.service.getPokemon("Bulbasaur") e passei o nome do pokémon que quero buscar como argumento (no caso, "Bulbasaur").


Como vou usar a injeção de dependência no Angular?
  1 - Crio um serviço injetável com @Injectable (como fizemos no pokemon.ts)
  2 - Injeto o serviço dentro do componente que vai usar ele (como fizemos no card.ts)
  3 - Uso os métodos do serviço dentro do componente (como fizemos no card.ts chamando o método getPokemon do serviço de pokémons)

//---------------------------------------------------------------------------------------------------------

- DIFERENÇA ENTRE SERVICE E COMPONENTE: 
  um serviço (service) no Angular é uma classe que encapsula a lógica de negócio e os dados da aplicação, permitindo que diferentes componentes compartilhem essa lógica e esses dados de forma eficiente e organizada. Já um componente (component) é uma classe que representa uma parte da interface do usuário (UI) da aplicação, responsável por exibir dados e interagir com o usuário. Enquanto o serviço foca na lógica e nos dados, o componente foca na apresentação visual e na interação com o usuário.

//---------------------------------------------------------------------------------------------------------

- SERVICE CONVERSANDO COM UM ENVIRONMENT: 
  no Angular, um serviço pode acessar variáveis definidas em arquivos de ambiente (environment) para obter configurações específicas do ambiente em que a aplicação está sendo executada, como URLs de APIs, chaves de autenticação etc. 
  Isso é feito importando o objeto environment no serviço e utilizando suas propriedades conforme necessário. 
  No exemplo do projeto, o serviço de pokémons (pokemon.ts) acessa a URL base da API de pokémons definida no arquivo environment.ts para fazer requisições à API de forma dinâmica, dependendo do ambiente (desenvolvimento ou produção).
  só olhar lá no pokemon.ts que eu fiz exatamente isso importando o environment e usando a propriedade pokeApi para definir a variável baseURL do serviço de pokémons.

//---------------------------------------------------------------------------------------------------------

- TRABALHaNDO COM MÓDULO HTTP: 
  eu confeso que senti dificuldade nessa parte, mas entendi que, de forma geral, o HttpClient é um serviço do Angular que facilita a comunicação com servidores web através do protocolo HTTP. 
  Ele permite fazer requisições HTTP (GET, POST, PUT, DELETE etc.) de maneira simples e eficiente, retornando os dados em formato observável (Observable) que pode ser facilmente manipulado usando RxJS. Usamos diretamente com o observable.
  Para achar o http no ccódigo, usamos a injeção de dependência no construtor da classe, declarando private http: HttpClient. 
  E conseguimos assim usar o http para fazer requisições, como na função getPokemon onde usamos this.http.get para buscar os dados do pokémon na API.




//---------------------------------------------------------------------------------------------------------

// ANOTAÇÕES IMPORTANTES DURANTE O DESENVOLVIMENTO DO PROJETO:
// BY: MIRIÃ AMARAL CUSTÓDIO SANTOS

//---------------------------------------------------------------------------------------------------------
// COMO CONSTRUO MEUS COMPONENTES NO ANGULAR?
// 1 - Crio o componente (comando: ng g c nome-do-componente) => ng G(generate) C(component)
// 2 - Desenho a estrutura HTML e estilizo com CSS
// 3 - Adiciono a lógica de negócio no TS (TypeScript)
// --------------------------------------------------------------------------------------------------------
// DICA IMPORTANTE DE COMO CONSTRUIR MEUS COMPONENTES NO ANGULAR:
// Sempre que for construir um componente novo, sigo essa ordem de passos para facilitar o desenvolvimento e evitar retrabalho:
// HTML + CSS + TS (LÓGICA DE NEGÓCIO)
// 1 - Desenho minha estrutura HTML com os dados cravados (MOCADOS => significa que os dados estão fixos, não são dinâmicos ainda como fizemos com o h3 do card.html), estilizo pra ver como fica visualmente
// 2- Depois vou desacoplando os dados, ou seja, substituo os dados fixos por variáveis que vão buscar os dados dinamicamente (como fizemos com o h3 do card.html que antes tinha CHARIZARD fixo e agora tem {{name}} que busca o valor da variável name do card.ts)
// 3- E por fim vejo a lógica de negócio que não deveria estar ali e envio pro service, ou seja, como esses dados vão chegar até o componente (quando falamos de services e APIs) - Ir desacoplando as coisas e ajustando é chamado de REFACTORING (REFATORAÇÃO), que é o ato de melhorar o código sem alterar sua funcionalidade.

// --------------------------------------------------------------------------------------------------------

// Explicação:
// 1. Criei uma variável chamada name do tipo string e atribuí o valor 'CHARIZARD' a ela. Essa variável será usada para exibir o nome do pokémon dinamicamente no card.
// 2. Criei um array de strings chamado attributesTypes que armazena os tipos do pokémon, nesse caso 'FIRE' e 'ROCK'. Esse array será usado para renderizar os badges dos tipos do pokémon dinamicamente no card.




-->
