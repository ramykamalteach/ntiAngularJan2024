import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public pName:string = '';

  @Output() public childEventWhenLiked = new EventEmitter;

  handleLikeClick() {
    this.childEventWhenLiked.emit("Product is Liked !!!");
  }
}
