import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []; 
  filter: string = ''; 
  debounce: Subject<string> = new Subject<string>();

  // constructor sera destinado a construcao de dependencia
  constructor(private activatedRoute: ActivatedRoute) { }

 // ngoninit ciclo de vida de um componente
  ngOnInit(): void {

   this.photos = this.activatedRoute.snapshot.data['photos'];

   this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);

  }

  //se vc trabalha com observable que nao chama complete, vc garante para fazer o unsubscribe da destruiçao do componente. é uma boa pratica
  ngOnDestroy(): void {

    this.debounce.unsubscribe();
  }

}
