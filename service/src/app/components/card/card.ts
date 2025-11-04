import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {
name: string = 'CHARIZARD'; // Lá no card.html eu vou substituir o h3 por uma interpolação da variavel: {{name}, assim o nome do pokémon aparece dinamicamente no card
attributesTypes: string[] = ['FIRE', 'ROCK']; // Criei um array de strings chamado attributesTypes que vai armazenar os tipos do pokémon E vou usar esse array lá no card.html para exibir os tipos dinamicamente e renderizar os badges (badges => aqueles quadradinhos com o nome do tipo do pokémon como FIRE, ROCK, WATER etc)
}








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
