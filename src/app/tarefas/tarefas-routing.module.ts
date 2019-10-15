import {Routes} from '@angular/router';
import { NgModule } from '@angular/core'
import { ListarTarefaComponent } from './listar/listar-tarefas.component';

export const TarefaRoutes : Routes = [

    {
        path:'tarefas',
        redirectTo: 'tarefas/listar'
    },

    {
        path: '/tarefas/listar',
        component: ListarTarefaComponent
    }

];
