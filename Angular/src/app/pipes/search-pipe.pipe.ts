import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class searchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(drink => {
        return (drink.strDrink.search(searchText) !== -1);
      });
    }
  }
}
