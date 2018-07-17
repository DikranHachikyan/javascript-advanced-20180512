import { Component, 
         OnInit,
         Input,
         Output,
         EventEmitter } from '@angular/core';

import { Contact } from '../models/contact';
import { StaticDatasourceService } from '../models/static-datasource.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input('selected-contact') contact:Contact;
  @Output('childEvent') btnClicked:EventEmitter<any> = new EventEmitter();  
  constructor(private dataSource:StaticDatasourceService){ }

  ngOnInit() {
  }

  saveContact():void{
    this.dataSource.saveContact(this.contact);
  }
}
