import {Routes} from '@angular/router';
//import { NgModule } from '@angular/core'
import { ListarTarefaComponent } from './listar/listar-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar';


export const TarefaRoutes : Routes = [

    {
        path:'tarefas',
        redirectTo: 'tarefas/listar'
    },

    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    }

];
