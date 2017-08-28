import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Employee } from '../Employee';

@Injectable()
export class EmployeeService {
    currentUser:any={};  
    constructor(
        private http: Http        
    ) {
          
     }
    login(username: string, password: string) {
        alert('in service');
       this.currentUser.id=1;
       this.currentUser.empID=username;
       this.currentUser.empPwd=password;
        return this.http.post('', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                   // localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
       getCurrentUsr():Employee{
                return this.currentUser;
      }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    loging(){
        alert('ok');
    }
}