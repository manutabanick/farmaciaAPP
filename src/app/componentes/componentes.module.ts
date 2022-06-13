import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ItemcarritoComponent } from './itemcarrito/itemcarrito.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductoComponent,
   ItemcarritoComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ], exports: [
    ProductoComponent,
    ItemcarritoComponent
  ]
})
export class ComponentesModule { }
