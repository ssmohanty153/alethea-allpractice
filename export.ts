export let age : number = 20;

export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }

    displayEmployee():void {

        console.log (this.empCode + "-->" + this.empName );
    }
}
let companyName:string = "subhransu";