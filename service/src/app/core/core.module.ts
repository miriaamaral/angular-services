import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule], // Importa o módulo HttpClientModule para permitir requisições HTTP em toda a aplicação
  exports: [HttpClientModule], // Exporta o HttpClientModule para que outros módulos que importem o CoreModule também tenham acesso ao HttpClientModule
})
export class CoreModule {}

// refiz como o professor fez em aula, mas mostra esse risco no nome do import porque já existe outro HttpClientModule em outro lugar do projeto. Em breve vou organizar melhor isso.
