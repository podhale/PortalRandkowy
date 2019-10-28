import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
    this.galleryOptions = [
      {
          width: '700px',
          height: '500px',
          thumbnailsColumns: 4,
          imagePercent: 100,
          preview: false,
          imageAnimation: NgxGalleryAnimation.Slide
      }
    ];
    this.galleryImages = this.getImages();
  }

  getImages() {
    const imagesUrls = [];

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.user.photos.length; i++) {
      imagesUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
        description: this.user.photos[i].description,
      });
      return imagesUrls;
    }
  }

}
