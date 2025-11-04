import { Injectable } from '@angular/core'; // diferente lá no core do card.ts, o service não é um componente, é um conteúdo injetável no Angular.

// conceito de direção de dependencias: significa que uma classe (componente, serviço etc) pode depender de outra classe para funcionar corretamente. No Angular, isso é feito através da injeção de dependência, onde o framework cuida de criar e fornecer as dependências necessárias para uma classe quando ela é instanciada.

@Injectable({
  providedIn: 'root', // root => significa raiz em inglês, ou seja, o serviço estará disponível em todo o projeto para ser injetado em qualquer componente ou outra classe que precise dele. (Está servindo a arvore inteira).
})

//---------------------------------------------------------------------------------------------------------
//explicação:
// export class pokemonService é uma classe TypeScript que agrupa a lógica de negócio dos pokémons.
// (ex.: buscar dados da API — fazer requisições HTTP a endpoints externos;
//  processar informações — mapear, filtrar e normalizar os dados recebidos;
//  tratar erros e cache — lidar com falhas e armazenar resultados temporariamente;
//  expor métodos para componentes — funções que UI/contêineres chamam para obter dados).

export class PokemonService {
  
}
