import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {

  @Output() onCambio = new EventEmitter();
  @Input() personas = [];
  @Input() set tareas(value) {
    console.log('ASIGNANDO TAREAS');
    this._tareas = value;
    this.filtrarTareas(); 
  } 
  
   get tareas() {
      return this._tareas;
  }

  private _tareas = [];
  private tareasFiltradas=[];
  private filtro={
    tarea:'',
    realizada: false
  };

  constructor() { }

  ngOnInit() {
    this.filtrarTareas();
  }

  onFiltrar(filtro){
    this.filtro=filtro;
    this.filtrarTareas();
  }

  cambiar() {
    this.onCambio.emit('');
  }

  filtrarTareas(){
    this.tareasFiltradas.splice(0, this.tareasFiltradas.length);

    this._tareas.forEach(unaTarea => {
      if(unaTarea.realizada == this.filtro.realizada && unaTarea.tarea.includes(this.filtro.tarea)){
        this.tareasFiltradas.push(unaTarea);
      }
    });

    this.convertirPersona();
  }

  convertirPersona(){
    this.tareasFiltradas.forEach(unaTarea => {
      this.personas.forEach(unaPersona => {
        if(unaPersona.id == unaTarea.asignado_a_id) {
          unaTarea.persona={nombre: unaPersona.nombre,
                            apellido: unaPersona.apellido,
                            id: unaPersona.id};
        }
      });
    });
  }
}
