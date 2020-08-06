import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MylistComponent } from './partials/my-list/my-list.component';
import { BasicCarousel } from './partials/carousel/basic-carousel.component';

@NgModule({
  imports:      [ 
  BrowserModule,
  NgbModule,
  RouterModule.forRoot([
    { path: 'hello', component: HelloComponent },
    { path: 'my-list', component: MylistComponent },
    { path: '', redirectTo: '/hello', pathMatch: 'full' },
  ]),  
  FormsModule ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    MylistComponent,
    BasicCarousel,
    
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
