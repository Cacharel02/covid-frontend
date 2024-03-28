import { Component, Input } from '@angular/core';
import { Doctor } from '../models/Doctor';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrl: './doctor-view.component.scss'
})
export class DoctorViewComponent {

  @Input() doctors: Doctor[] = []
}
