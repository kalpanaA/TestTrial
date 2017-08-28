import{Component ,OnInit,Input} from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'entry',
    templateUrl:'./dayentry.component.html'
})
export class DayEntryComponent
{
    constructor(){

    }
    entry:any={};
    expand=false;
    
expandF1(){
     this.expand=!this.expand;
}
}