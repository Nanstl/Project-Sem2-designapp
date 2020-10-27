import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email;
  password;
  errors;
  constructor(
    private modalController: ModalController,
    private afb: AngularFireAuth,
    private navCtrl:NavController
    ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  signin() {
    this.afb.auth.signInWithEmailAndPassword
      (this.email, this.password)
      .then((res) => {
        console.log("login OK");
        this.navCtrl.navigateForward(["/detail",{uidKey: res.user.uid,}]);
      })
      .catch ((errors: any) => {
        console.log(errors);
        this.errors = errors.message;
        console.log(this.errors);
      });

  }

}
