import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'editcitation'
})
export class EditcitationPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}
  transform(value: String, args?: any): any {
    var flag = false;
    var array=value.split(" ");
    var exp = /[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/g;
    const copy = [];
    var str2;    
    array.forEach(function(element:String){
      var result = element.match(exp);
      var str = element;
      if(result){
        flag=!flag;
        var t = result.toString().length;
        if(flag){
          copy.push(result.toString().sup()+str.slice(t))
        }else{
          copy.push("<br>"+result.toString().sup()+str.slice(t))
          flag=!flag;
        }
    }else{
      copy.push(element);
    }
    
  });
 return this.sanitizer.bypassSecurityTrustHtml(copy.join(" "));
}
}
