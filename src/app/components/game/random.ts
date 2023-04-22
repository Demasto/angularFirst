export class CustomRandom {
  private max: number = 1000;
  private min: number = 0;

  randomInt() : number {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
  randomArray() : Array<string> {
    let arr = [ ];
    for (let i = 0; i <= 12; i++) {
      arr.push(this.randomInt().toString())
    }
    return arr;
  }
}
