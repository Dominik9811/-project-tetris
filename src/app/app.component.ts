import { Component,  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public ngAfterViewInit() {
    
    let move = 0;

    for (let i = 0; i < 9; i++) {
         document.getElementById('game').innerHTML += '<div class="block" style="height: 5rem; width: 5rem; border: 2px solid black;  float: left; box-sizing: border-box; line-height: 5rem; text-align: center;"></div>';
          
        }

    document.getElementById('game').onclick = function (event) {
      console.log(event);
      if (event.target.className == 'block') {
        if (move %2 ==0) {
          event.target.innerHTML = 'O';
        }
        else
        event.target.innerHTML = 'X';
      }
      move++;
      checkWinner();
    }

    function checkWinner(){
      let playField = document.getElementsByClassName('block');
      if (playField[0].innerHTML && playField[1].innerHTML && playField[2].innerHTML == 'O') {
        console.log('yes');
      }
    }
  }


  title = 'training';

  // let init = function(){
  //   for (let i = 0; i < 9; i++) {
  //     document.getElementById('game').innerHTML += '<div class="block"></div>';
      
  //   }
  // };
  // init();
  
  // $window.onload = function(e) { //your magic here } 

  // func() {
  //   let elem = document.getElementById('test');
  //   elem.style.color='red';
  //   elem.style.fontSize = '16px';

    
  }




