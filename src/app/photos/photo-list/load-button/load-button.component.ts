import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  //hasMore: para saber se tem mais coisa para exibir ou nao
  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
