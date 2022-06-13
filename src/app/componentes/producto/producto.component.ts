import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Producto } from '../../models';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;

  constructor(public carritoService: CarritoService,
              public modalController: ModalController) {

  }

  ngOnInit() {
  }

  addCarrito() {
        console.log('addCarrito()');
        this.carritoService.addProducto(this.producto);
  }


}
  