import {Routes} from '@angular/router';
//import { NgModule } from '@angular/core'
import { ListarTarefaComponent } from './listar/listar-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';


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
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent    
    }

];
