import { Component, OnInit } from '@angular/core';
import { Center } from '../models/Center';
import { ApiService } from '../services/ApiService';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit{
  centers:Center[] = []

  constructor(private apiService:ApiService){}
  ngOnInit(): void {
      this.apiService.getCenters().subscribe((data : Center[]) =>{
        this.centers = data;
      })
  }

}
