import { Component, Inject, Input, OnInit } from '@angular/core';
import { Center } from '../models/Center';
import { Ville } from '../models/Ville';
import { Admin } from '../models/Admin';
import { ApiService } from '../services/ApiService';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CenterviewComponent } from '../centerview/centerview.component';
import { Doctor } from '../models/Doctor';

@Component({
  selector: 'app-centres-personnel',
  templateUrl: './centres-personnel.component.html',
  styleUrl: './centres-personnel.component.scss'
})
export class CentresPersonnelComponent implements OnInit{

  admin : Admin = new Admin(0,"","","","")
  doctors : Doctor[] = []

  constructor(private dialogRef:MatDialogRef<CentresPersonnelComponent>,
    @Inject(MAT_DIALOG_DATA) public center: Center,
    private apiService:ApiService){}

  ngOnInit(): void {
    this.apiService.getAdmin(this.center.id).subscribe((data : Admin) =>{
      this.admin = data;
    })
    this.apiService.getDoctors(this.center.id).subscribe((data : Doctor[]) =>{
      this.doctors = data;
    })
      
  }

}
