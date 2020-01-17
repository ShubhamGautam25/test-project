import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [LayoutComponent, ContactUsComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
