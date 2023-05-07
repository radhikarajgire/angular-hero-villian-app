import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css'],
})
export class Search2Component implements OnInit {
  ngOnInit(): void {}
  enteredSeachValue: string = '';
  @Output()
  seacrhTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.seacrhTextChanged.emit(this.enteredSeachValue);
  }
}
