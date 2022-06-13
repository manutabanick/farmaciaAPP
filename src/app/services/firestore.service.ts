import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database: AngularFirestore) { }

  crearDoc(data: any, path: string, id: string) {
      const collection = this.database.collection(path);
      return collection.doc(id).set(data);
  }

  getDoc<tipo>(path: string, id: string) {
    const collection = this.database.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }

  borrarDoc(path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).delete();
  }

  updateDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }

  getId() {
    return this.database.createId();
  }

  getCollection<tipo>(path: string) {
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }

  getCollectionQuery<tipo>(path: string, parametro: string, condicion: any, busqueda: string) {
    const collection = this.database.collection<tipo>(path, 
      ref => ref.where( parametro, condicion, busqueda));
    return collection.valueChanges();
  }

  

}



