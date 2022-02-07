import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  Quotes
} from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {


  newquote = new Quotes(0, "", "", "", new Date());
  @Output() addquote = new EventEmitter < Quotes > ();

  submitquote() {
    this.addquote.emit(this.newquote);
    this.newquote = new Quotes(0,"","","",new Date());
  }
  constructor() {}

  ngOnInit(): void {}

}
