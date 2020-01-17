import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void{
        this.debounce.pipe(debounceTime(300));

    }
      //se vc trabalha com observable que nao chama complete, vc garante para fazer o unsubscribe da destruiçao do componente. é uma boa pratica
    ngOnDestroy(): void {

        this.debounce.unsubscribe();
  }
}

