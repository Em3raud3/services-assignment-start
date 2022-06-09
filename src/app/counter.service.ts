export class CounterService{
  activeToInactiveCounter = 0;
  InactiveToInactiveCounter = 0;

  incrementActiveToInactive (){
    this.activeToInactiveCounter ++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter)
  }

  incrementInactiveToActive (){
    this.InactiveToInactiveCounter ++;
    console.log('Inactive to Active: ' + this.InactiveToInactiveCounter)
  }
}
