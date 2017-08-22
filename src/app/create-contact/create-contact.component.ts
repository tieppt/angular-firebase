import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { optionalEmail } from '../validators/optional-email';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IContact } from '../models/contact';

@Component({
  selector: 'tp-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  cform: FormGroup;
  private contactList$: FirebaseListObservable<IContact[]>;
  constructor(private fb: FormBuilder, db: AngularFireDatabase) {
    this.contactList$ = db.list('/contacts');
  }

  ngOnInit() {
    this.cform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      job: [],
      email: ['', optionalEmail]
    });
  }

  onSubmit() {
    if (this.cform.valid) {
      this.contactList$.push(this.cform.value as IContact);
      this.cform.reset();
    }
  }

}
