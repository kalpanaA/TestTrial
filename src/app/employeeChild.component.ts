import { Component, Input } from '@angular/core';
import { Employee } from './Employee';
import { NgDataGridModel } from 'angular2-datagrid';
import { User } from './User';
@Component({
    moduleId: module.id,
    selector: 'name-child',
    templateUrl: './employeeChild.component.html',
    styleUrls: ['./app.component.css']
})
export class EmpChildComponent {
    table = new NgDataGridModel<User>([]);
    @Input() empCh: Employee;
    private userId: number = 0;
    constructor() {
        for (this.userId = 0; this.userId < 10; this.userId++) {
            this.table.items.push(new User(this.userId, "UserName" + this.userId));
        }
    }
    /*Crud for Employee*/

    addEmployee(user:User):void{
       this.userId++;
       this.table.items.push(new User(this.userId, "UserName" + this.userId));
    }
    deleteEmployee(user:User):void{         
      let index=  this.table.items.indexOf(user);
       if (index !== -1) {
        this.table.items.splice(index, 1);
     }        
    }
    editEmployee(user:User):User{
        user.username="editedEmp";
      return user;
     }
    fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        alert('fileUploaded');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
}
}
