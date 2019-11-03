import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TareaService } from 'src/app/tarea.service';
import { PersonaService } from 'src/app/persona.service';



@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onAgregoTarea = new EventEmitter();

  error ='';

  unTodo = {
    tarea: '',
    vencimiento: new Date(),
    asignadoId: null
  }

  personas: any;

  constructor(
    private tareaService: TareaService, 
    private personaService: PersonaService) { }

  async ngOnInit() {
    this.personas = await this.personaService.traerTodasLasPersonas();
  }

  async guardar() {
    
    let result: any;

    let unaTarea = {
      tarea: this.unTodo.tarea,
      fecha: this.unTodo.vencimiento,
      asignadaId: this.unTodo.asignadoId,
      realizada: false,
      fechaRealizacion: null
    }

    result = await this.tareaService.guardarTarea(unaTarea);

    if(result) {
      // inicializar campos
      // mostrar mensaje
      this.unTodo.tarea = '';
      this.unTodo.vencimiento = new Date(),
      this.unTodo.asignadoId = null
  
      this.error = '';
  
      this.onAgregoTarea.emit('');
    }
    else {
      // mostrar mensaje error y dejar todo para que corrija
      this.error = "No se pudo guardar";
    }


  }

}
