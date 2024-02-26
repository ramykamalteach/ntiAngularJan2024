import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  public products:any[] = [
    {
      id : 1,
      title : "pizza",
      oldPrice : 150,
      price : 100,
      photo : "../../../assets/img/pic01.jpg"
    },
    {
      id : 2,
      title : "meat",
      oldPrice : 222,
      price : 55,
      photo : "../../../assets/img/pic02.jpg"
    },
    {
      id : 3,
      title : "fish",
      oldPrice : 333,
      price : 111,
      photo : "../../../assets/img/pic03.jpg"
    },
    {
      id : 4,
      title : "salat",
      oldPrice : 150,
      price : 100,
      photo : "../../../assets/img/pic04.jpg"
    },
    {
      id : 5,
      title : "salat",
      oldPrice : 211,
      price : 55,
      photo : "../../../assets/img/pic04.jpg"
    }

  ]
}
