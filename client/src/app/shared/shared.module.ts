import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PagerComponent } from './components/pager/pager.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';




@NgModule({
  declarations: [
    
  
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbCarouselModule
  ],
  exports: [NgbPaginationModule, PagingHeaderComponent, PagerComponent, NgbCarouselModule]
})
export class SharedModule { }
