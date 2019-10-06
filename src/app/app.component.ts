import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  grid = [];
  ship;
  countShip1 = 4;
  countShip2 = 3;
  countShip3 = 2;
  countShip4 = 1;
  
  reset(){
    this.countShip1 = 4;
    this.countShip2 = 3;
    this.countShip3 = 2;
    this.countShip4 = 1;
  }

  constructor() {
    for(let i = 0;i < 10; i++){
      this.grid[i]=[];
      for (let j = 0; j < 10; j++) {
        this.grid[i][j]={
          ship: false
        };
      }
    }
  }

  onClick(item : number){
    // if(this.ship){
    //   for (let i = 0; i < this.ship; i++) {
    //     this.grid[item+i].value = 1;
    //   }
      

    // }
    // this.grid[item].value = 1;
  }

  onShip(ship: number){
    // if( this['countShip' + ship]){
      this.ship=ship;
      


    // }

  }

}



