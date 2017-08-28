import { Component,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './Employee';
@Component({
  moduleId:module.id,
  templateUrl: './register.component.html' 
})
export class RegisterComponent implements OnInit {  
  title = 'Registration';
  returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
      this.empl={};
     }
      
  ngOnInit() {
        // reset login status       

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
     empl:any={};  
     emply:Employee;
     registerEmp(employee:Employee){
     this.emply=employee;     
     alert("still under development");
   }
}