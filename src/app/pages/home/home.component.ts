import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';
import { Producto } from '../../models';
import { HomeService } from 'src/app/home.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private path = 'Productos/';

  productos: Producto[] = [];

  constructor(public menucontroler: MenuController,
              public firestoreService: FirestoreService,
              public homeService:HomeService) {

                this.loadProductos();
  }

  ngOnInit() {}
  
  buscar(event){
    console.log(event);
  }

  openMenu() {
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }

  loadProductos() {
      this.firestoreService.getCollection<Producto>(this.path).subscribe( res => {
            // console.log(res);
            this.productos = res;
      });
  }
 
  
}
