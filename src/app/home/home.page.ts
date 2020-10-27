import { SignUpPage } from './../sign-up/sign-up.page';
import { SignInPage } from './../sign-in/sign-in.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {

  }

  async SigninModal() {
    const myModal = await this.modalController.create({
      component: SignInPage,
      cssClass: 'my-custom-modal-css'
    });
    return await myModal.present();
  }

  async SignupModal() {
    const myModal = await this.modalController.create({
      component: SignUpPage,
      cssClass: 'my-custom-modal-css'
    });
    return await myModal.present();
  }

}
