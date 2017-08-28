import {Component} from "@angular/core";

@Component({
    //selector: 'app-red-component',
    templateUrl: './grid.template.html'
})
export class GridComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}