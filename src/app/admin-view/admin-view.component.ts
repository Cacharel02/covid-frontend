import { Component, Input } from '@angular/core';
import { Admin } from '../models/Admin';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.scss'
})
export class AdminViewComponent {

  @Input() admin : Admin = new Admin(0,"","","","")

}
