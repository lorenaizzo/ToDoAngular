import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoContentComponent } from './todo-content/todo-content.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [{ path: '', redirectTo: '/todo', pathMatch: 'full' },
                        { path: 'todo', component: TodoContentComponent },
                        { path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
