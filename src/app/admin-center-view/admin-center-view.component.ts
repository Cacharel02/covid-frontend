import { Component, Input } from '@angular/core';
import { Admin } from '../models/Admin';
import { Center } from '../models/Center';
import { Ville } from '../models/Ville';
import { MatDialog } from '@angular/material/dialog';
import { CenterviewComponent } from '../centerview/centerview.component';
import { CentresPersonnelComponent } from '../centres-personnel/centres-personnel.component';

@Component({
  selector: 'app-admin-center-view',
  templateUrl: './admin-center-view.component.html',
  styleUrl: './admin-center-view.component.scss'
})
export class AdminCenterViewComponent {
  constructor(private dialog:MatDialog){}

  @Input() center:Center = new Center(0,"",new Ville(""),new Admin(0,"","","",""))

  people() {
    const dialogRef = this.dialog.open(CentresPersonnelComponent,{
      data : this.center
    })
  }
  modify() {
    const dialogRef = this.dialog.open(CenterviewComponent,{
      data : this.center
    })
  }
}
