export class CounterService{
  activeToInactiveCounter = 0;
  InactiveToInactiveCounter = 0;

  incrementActiveToInactive (){
    this.activeToInactiveCounter ++;
    console.log(this.activeToInactiveCounter)
  }

  incrementInactiveToInactive (){
    this.InactiveToInactiveCounter ++;
    console.log(this.InactiveToInactiveCounter)
  }
}
