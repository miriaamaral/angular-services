import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card implements OnInit {
  name: string = 'CHARIZARD';
  attributesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    // exemplo: buscar dados do pokemon e atualizar o card
    this.service.getPokemon(this.name).subscribe({
      next: (res: any) => {
        if (res?.name) this.name = (res.name || '').toUpperCase();
        if (res?.types) this.attributesTypes = res.types.map((t: any) => (t.type?.name || '').toUpperCase());
      },
      error: (err: unknown) => console.error('Erro ao buscar pokemon', err),
    });
  }
}


//---------------------------------------------------------------------------------------------------------


// diferente do service.ts que é um serviço injetável, o card.ts é um componente visual do Angular, por isso usamos @Component ao invés de @Injectable.

// diferente do pokemon.ts que é um serviço, o card.ts é um componente visual do Angular, por isso usamos @Component ao invés de @Injectable.


