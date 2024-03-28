import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Center } from '../models/Center';


@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrl: './centres.component.scss'
})
export class CentresComponent implements OnInit{


people() {
throw new Error('Method not implemented.');
}
modify() {
throw new Error('Method not implemented.');
}

  @Input() centers:Center[] = []
  constructor(){}
    

  ngOnInit(): void {
      
  }

}
