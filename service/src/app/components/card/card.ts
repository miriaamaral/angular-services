import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData
  attributesTypes: string[] = ['FIRE', 'ROCK']

  constructor(private service: PokemonService) {
    this.pokemon = {
    id: 0, name: '',
    sprites: { front_default: '' },
    types: []
    }
  }

  ngOnInit(): void {
    // buscar dados do pokemon e atualizar o card
    this.service.getPokemon("charizard").subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
      },
      error: (err: unknown) => console.error('Erro ao buscar pokemon', err),
      }
    )
  }
}


//---------------------------------------------------------------------------------------------------------


// diferente do service.ts que é um serviço injetável, o card.ts é um componente visual do Angular, por isso usamos @Component ao invés de @Injectable.

// diferente do pokemon.ts que é um serviço, o card.ts é um componente visual do Angular, por isso usamos @Component ao invés de @Injectable.


