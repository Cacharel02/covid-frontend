import { Component, Inject, Input } from '@angular/core';
import { Center } from '../models/Center';
import { Ville } from '../models/Ville';
import { Admin } from '../models/Admin';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RendezVousComponent } from '../rendez-vous/rendez-vous.component';
import { ApiService } from '../services/ApiService';

@Component({
  selector: 'app-centerview',
  templateUrl: './centerview.component.html',
  styleUrl: './centerview.component.scss'
})
export class CenterviewComponent {

  // @Input() center:Center = new Center(0,"",new Ville(""),new Admin(0,"","","",""))

  constructor(private dialogRef:MatDialogRef<CenterviewComponent>,
    @Inject(MAT_DIALOG_DATA) public center: Center,
    private apiService:ApiService){  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
