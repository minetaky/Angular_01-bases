import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Vero'];
heroeRecienBorrado: string= '';

borrarHeroe(){
  console.log('Borrando...');
  this.heroeRecienBorrado = this.heroes.shift() || '';
  console.log('se borró a: ', this.heroeRecienBorrado);
}

}
