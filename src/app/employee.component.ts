import{Component ,OnInit,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {GridOptions} from "ag-grid";
import { Employee } from './Employee';
import {EmployeeService} from './_Services/employee.Service';
import {GridComponent} from './grid.componet';
@Component({
 moduleId:module.id,
  templateUrl: './employee.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeeComponent {
    /* ag-grid usage */
    private gridOptions: GridOptions;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private empService:EmployeeService
    ) { 
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: GridComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }   
   
   empl:Employee =this.empService.getCurrentUsr();
   @Input() emplyee =this.empl;  
   
}
