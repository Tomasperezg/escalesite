import { Component, OnInit } from '@angular/core';
import { Form } from '../form'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  subjects = ['--Select Message Topic--', '', 'Consult (Free)']

  model = new Form('', 123456789, '',  this.subjects[0], '')

  submitted = false;
  
  onSubmit(){
    this.submitted = true;
    console.log('Message sent')
  }
  
  ngOnInit() {
  }

}
