import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './Employee';
import {EmployeeService} from './_Services/employee.Service';
@Component({
    moduleId:module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private empService:EmployeeService,
    ) { }
    ngOnInit() {
        // reset login status       

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
   empl:Employee={empID:'',empEmail:'',empPwd:'',firstName:'',lastName:'',id:1};
   //={};    
   localStorage:any={ID:"NSIN253",pwd:"123"};
    title="EmployeePortal";   
    submitted =false;
    onLogin(): void {
        //this.empService.loging();
         this.empService.login(this.empl.empID, this.empl.empPwd)
            .subscribe(
                data => {
                    this.router.navigate(['/Employee']);
                },
                error => {
                   this.router.navigate(['/Employee']);
                });
               
       //let  isValid:boolean= form.valid;
        // if (this.empl.empID != '' && this.empl.empPwd != '') {
        //     alert(this.localStorage.pwd + "and" + this.empl.empPwd);
        //     if(this.empl.empID==this.localStorage.ID && this.localStorage.pwd==this.empl.empPwd){
        //          alert(this.empl.id);
        //         this.router.navigate(['/Employee']);
        //     }
           
        // }
        // else{
        //     alert(this.empl.empID);
        // }
    


    }
    onRegister(): void {
        alert('Register');
        this.router.navigate(['/Register']);
    }
    validate(username: string, pwd: string): boolean {
        let isValid: boolean = false;


        return isValid;
    }



}
