import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MateriPage } from '../materi/materi';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {
		
	} 

	ToHalamanMateri(){
		this.navCtrl.push(MateriPage);

		console.log("Klik tombol Materi, menuju materi page");
	}


}
