import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void{
        this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));

    }
      //se vc trabalha com observable que nao chama complete, vc garante para fazer o unsubscribe da destruiçao do componente. é uma boa pratica
    ngOnDestroy(): void {

        this.debounce.unsubscribe();
  }
}

