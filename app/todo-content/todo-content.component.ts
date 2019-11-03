import { Component, OnInit, NgZone } from '@angular/core';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListContentComponent } from './list-content/list-content.component';
import { PersonaService } from 'src/app/persona.service';
import { TareaService } from 'src/app/tarea.service';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.css']
})
export class TodoContentComponent implements OnInit {
  personas= [];
  tareas= [];

  constructor(
    private tareaService: TareaService, 
    private personaService: PersonaService,
    private zone: NgZone) { }

    async ngOnInit() {
      this.personas = await this.personaService.traerTodasLasPersonas();
      this.tareas = await this.tareaService.todasLasTareas();
    }

    async onAgregoTarea(){
      console.log("AGREGO");
      await this.actualizarTareas();

    }
  
    onCambio(){
      console.log("onCambio todoContent");
      this.actualizarTareas();
    }

    async actualizarTareas(){
      let tareasAux = await this.tareaService.todasLasTareas();

      this.zone.run(() => {
        this.tareas = tareasAux;
      })
    }

}
