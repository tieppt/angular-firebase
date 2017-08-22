import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContact } from '../models/contact';

@Component({
  selector: 'tp-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input()
  contact: IContact;

  @Output()
  removed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeContact() {
    this.removed.next(this.contact);
  }

}
