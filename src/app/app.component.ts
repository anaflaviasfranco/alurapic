import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos: Object[] = [

    // { 
    //   url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg', 
    //   description: 'Leão'
    // },
    // { 
    //   url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg', 
    //   description: 'Leoa'
    // },
    // { 
    //   url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lioness_Etosha_NP.jpg/500px-Lioness_Etosha_NP.jpg', 
    //   description: 'Leoa'
    // }         
  ];  

  // constructor sera destinado a construcao de dependencia
 constructor(private photoService: PhotoService) { }

 // ngoninit ciclo de vida de um componente
 ngOnInit(): void {
  this.photoService.listFromUser('flavio').subscribe(photos => this.photos = photos);
  }
}
