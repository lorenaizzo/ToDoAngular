import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() onFiltrar = new EventEmitter();

  filtro={
    tarea:'',
    realizada: false
  }

  constructor() { }

  ngOnInit() {
  }

  filtrar() {
    this.onFiltrar.emit(this.filtro);
  }
}
