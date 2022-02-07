import { invalid } from '@angular/compiler/src/render3/view/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference =Math.round(todayWithNoTime - value)
    const secondsInADay= 86400;

    var dateDifferenceSeconds=dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1 && todayWithNoTime > value){
        return Math.floor(dateCounter);
    }else{
        return 0;
    }
  }
}
