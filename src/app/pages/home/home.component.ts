import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';
import { Producto } from '../../models';
import { runInThisContext } from 'vm';
import { ToastController } from '@ionic/angular';


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
              public toastController: ToastController) {

                this.loadProductos();
  }

   ngOnInit() {}
  
 
  

   openMenu() {
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }
  textoBuscar=''; 
  //funcion que busca con el search bar
buscar(event){
 //console.log(event);
 this.textoBuscar= event.detail.value;

 }
   loadProductos() {
      this.firestoreService.getCollection<Producto>(this.path).subscribe( res => {
            // console.log(res);
            this.productos = res;
      });
      
  }


  async presentToast1(){
    const toast= await this.toastController.create({
      message: 'El producto ha sido agregado al carrito',
      duration: 2000,
      position: "bottom"
  
    });

    toast.present()
  }
  

}