import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { IContact } from '../models/contact';

@Component({
  selector: 'tp-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  contactList$: FirebaseListObservable<IContact[]>;
  constructor(db: AngularFireDatabase) {
    this.contactList$ = db.list('/contacts');
  }

  ngOnInit() {
  }

  removeContact(contact: IContact) {
    if (contact && contact.$key) {
      this.contactList$.remove(contact.$key);
    }
  }

}
