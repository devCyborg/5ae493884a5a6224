import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  /*public compteur: number = 0;*/
  public  result : number = 0;

  constructor() { }

  ngOnInit() {
  }
  incrementerDeUn(un:number){
    console.log(un);
    this.result=this.result+un;

  }
  decrementerDeUn(un:number){
    console.log(un);
    this.result=this.result-un;

  }
}
