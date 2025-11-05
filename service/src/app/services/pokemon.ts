import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private baseURL: string = '';
  private pokeData: any

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi; // pega a URL base do environment
  }

  getPokemon(pokemonName: string): Observable<any> {
    const pokeData = this.http.get(`${this.baseURL}/pokemon/${pokemonName.toLowerCase()}`);
    console.log(pokeData);
    return pokeData;
  }
}


//---------------------------------------------------------------------------------------------------------


//explicação da função getPokemon:
// A função getPokemon é um método público da classe PokemonService que recebe um parâmetro pokemonName do tipo string. Quando essa função é chamada, ela simplesmente imprime o nome do pokémon no console usando console.log(pokemonName). Essa função pode ser expandida futuramente para incluir lógica adicional, como fazer uma requisição a uma API para buscar informações sobre o pokémon com o nome fornecido.



