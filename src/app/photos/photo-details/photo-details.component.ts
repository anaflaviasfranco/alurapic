import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['photo-details.css']
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;

    constructor(
        private route: ActivatedRoute,
        private PhotoService: PhotoService,
        ) {}

    ngOnInit(): void {
        this.photo$ = this.PhotoService.findById(
            this.route.snapshot.params.photoId
        )
    }

}