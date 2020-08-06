import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './basic-carousel.component.html'
  })
export class BasicCarousel {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1280/800`);
}