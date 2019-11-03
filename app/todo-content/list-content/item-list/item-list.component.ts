import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaService } from 'src/app/tarea.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() tareas=[];
  @Output() onCambio = new EventEmitter();

  constructor( private tareaService: TareaService) { }

  ngOnInit() {
  }

  async realizada(unaTarea) {
    let result: any;

    let tareaRealizada = {
      id: unaTarea.id,
      tarea: unaTarea.tarea,
      asignado_a_id: unaTarea.asignado_a_id,
      vencimiento: unaTarea.vencimiento,
      realizada: true,
      fecha_realizacion: new Date()
    }
    result = await this.tareaService.marcarFinalizada(tareaRealizada);

    this.onCambio.emit('');

  }

}
