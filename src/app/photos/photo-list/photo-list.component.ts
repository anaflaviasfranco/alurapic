import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];  

  // constructor sera destinado a construcao de dependencia
  constructor(private photoService: PhotoService) { }

 // ngoninit ciclo de vida de um componente
  ngOnInit(): void {
    this.photoService.listFromUser('flavio').subscribe(photos => this.photos = photos);
  }

}
