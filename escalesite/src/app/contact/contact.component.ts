import { Component, OnInit } from '@angular/core';
import { Form } from '../form'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  subjects = ['--Selectt Message Topic--', '', 'Consult (Free)']

  model = new Form('Tom', 123456789, 'some@some.com',  this.subjects[0], 'This is a sample Message')

  submit = false;
  
  onSubmit(){
    this.submit = true;
  }
  
  ngOnInit() {
  }

}
