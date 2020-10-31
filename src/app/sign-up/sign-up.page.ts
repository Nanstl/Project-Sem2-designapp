import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  username;
  email;
  password;
  firstname;
  lastname;
  error;
  constructor(
    private modalController: ModalController,
    private afb: AngularFireAuth,
    private dbfb: AngularFireDatabase
  ) {}

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }

  creatAccount() {
    this.afb.auth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((res: any) => {
        console.log(res);
        {
          this.dbfb.object(`users/${res.user.uid}/detail`).set({
            username: this.username,
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
          });
        }
        this.afb.auth.currentUser.sendEmailVerification();
      })
      .catch((errors: any) => {
        console.log(errors);
        this.error = errors.message;
        console.log(this.error);
      });
  }
}
