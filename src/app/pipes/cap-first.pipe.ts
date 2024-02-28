import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capFirst',
  standalone: true
})
export class CapFirstPipe implements PipeTransform {

  transform(myString : string): string {
    if(!myString) {
      return '';
    }
    else {
      return myString.charAt(0).toUpperCase() + myString.slice(1);
    }    
  }
}
