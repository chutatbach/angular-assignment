import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log(value)
    let content;
    if(value == 'true'){
      content = "Nam"
    }else{
      content = "Nữ"
    }
    return content;
  }

}
