import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  // createDatabase(){
  //   return this.firestore.collection('itemsList').add(items);
  // }

}
