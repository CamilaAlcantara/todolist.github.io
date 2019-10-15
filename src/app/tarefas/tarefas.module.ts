import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService} from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
  
})
export class TarefasModule { }


