import { Component } from '@angular/core';
import { CustomRandom } from './random'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  firstCard = {
    n: 0,
    alt: 0
  }
  isClicked: number = 0;
  state:boolean = true;
  arrayOfState = [false,false,false,false,false,false,false,false,false,false,false,false]


  startGame() {
    // @ts-ignore
    document.getElementById("text").style.display = "none";
    // @ts-ignore
    document.getElementById("gameStart").style.display = "block";
    const x = document.querySelectorAll<HTMLElement>(".game-card")
    const random = new CustomRandom()
    const arr = random.randomArray()
    arr.forEach((i) => {
      console.log(i)
    })

    let i = 0;
    x.forEach((item) => {
      item.style.order = arr[i];
      i++;
    });

  }
  async delay(ms: number, n1: number, n2: number) {
    await new Promise( resolve => setTimeout(resolve, ms) );
    this.arrayOfState[n1] = false;
    this.arrayOfState[n2] = false;
    this.state = true;
  }
  rotateCard(n: number, alt: number){
    if(this.state) {
      // @ts-ignore
      if (!this.arrayOfState[n]) { //Первым делом поворот карты (Если она еще не перевернута)
        this.arrayOfState[n] = true;
        this.isClicked++;
      }

      if (this.isClicked === 1) { // Каждый первый поворот, мы запоминаем alt значение карты в firstCard
        this.firstCard.alt = alt;
        this.firstCard.n = n;
      }
      else if (this.isClicked === 2) { //каждый второй поворот карты
        this.isClicked = 0;
        if (this.firstCard.alt === alt) { // Если значения совпали, необходимо удалить эти карты.

        }
        else { // Иначе нужно повернуть их обратно через 2 секунды
          this.state = false;
          void this.delay(1000, n, this.firstCard.n);
        }
      }

    }
  }
}
