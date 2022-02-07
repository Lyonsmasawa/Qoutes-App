import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  faThumbsup = faThumbsUp;

  @Input() quote!: Quotes;
  @Input() quoteUp!: Quotes;
  @Input() quoteDown!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }
  upvote(){
    this.quoteUp.likes+=1;
  }
  downvote(){
    this.quoteDown.dislikes+=1;
  }

}
