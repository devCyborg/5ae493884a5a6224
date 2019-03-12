import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('f') ref : ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onKey(key:any){
    this.valeur=this.ref.nativeElement.value;
  }
}
