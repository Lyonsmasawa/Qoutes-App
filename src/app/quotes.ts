export class Quotes {
    public showDescription: boolean;
  constructor(public id: number,public name: string,public description: string,public person: string, public completeDate: Date, public likes:number, public dislikes:number){
    this.showDescription=false;
  }
}
