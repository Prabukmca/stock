import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogContainerComponent } from './containers/blog-container/blog-container.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';


@NgModule({
  declarations: [BlogContainerComponent, BlogHomeComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
