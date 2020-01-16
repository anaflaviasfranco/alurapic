import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = []; 
  filter: string = ''; 

  // constructor sera destinado a construcao de dependencia
  constructor(private activatedRoute: ActivatedRoute) { }

 // ngoninit ciclo de vida de um componente
  ngOnInit(): void {

    this.photos = this.activatedRoute.snapshot.data['photos'];

  }

}
