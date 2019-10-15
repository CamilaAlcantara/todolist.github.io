import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { 

  }

  ngOnInit() {
    this.tarefas = this.listarTodos();
   /* this.tarefas = [
      new Tarefa(1, "Tarefa de teste", false),
      new Tarefa(2, "Tarefa de teste2", true)
    ];*/
  }

    listarTodos(): Tarefa[]{
      return this.tarefaService.listarTodos();
    }
    remover($event: any, tarefa: Tarefa): void{
      $event.preventDefaut();
      if(confirm('Deseja remover a tarefa"'+ tarefa.nome+'"?')){
        this.tarefaService.remover(tarefa.id);
        this.tarefas = this.tarefaService.listarTodos();
     }
    }

}

