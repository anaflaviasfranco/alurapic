import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []; 
  filter: string = ''; 
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  // constructor sera destinado a construcao de dependencia
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }

 // ngoninit ciclo de vida de um componente
  ngOnInit(): void {

   this.userName = this.activatedRoute.snapshot.params.userName; 

   this.photos = this.activatedRoute.snapshot.data['photos'];

   this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);

  }

  //se vc trabalha com observable que nao chama complete, vc garante para fazer o unsubscribe da destruiçao do componente. é uma boa pratica
  ngOnDestroy(): void {

    this.debounce.unsubscribe();
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
  })};

}
