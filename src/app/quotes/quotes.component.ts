import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.', '― Neil Gaiman, Coraline ',new Date(1999,10,23)),
    new Quotes(2,`“Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.” `,' ― Shel Silverstein ',new Date(2022,1,24)),
    new Quotes(3,`“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”`,' ― John Lennon ',new Date(2012,3,2)),
  ];

  addNewquote(quote: Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  seeDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  } 

  deletequote(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
