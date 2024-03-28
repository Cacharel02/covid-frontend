import { Component } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {

  constructor(){}
  ngOnInit(): void {
      
  }
  
  showTable: boolean = false;

  createTable() {
    // You can add logic here to create the table dynamically if needed
    this.showTable = true;
  }

  isClicked: boolean = false;

  handleClick() {
    this.isClicked = true;
  }

}
