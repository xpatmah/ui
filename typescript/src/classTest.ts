class Department{
    private name: string ;
    private grades : string[];

    constructor(name:string , grades:string[]){
        this.name = name;
        this.grades = grades;
    }

    public display():void{
        console.log(this.name+" "+this.grades);
    }
}

class ComputerDepartment extends Department{

    constructor(public cname:string , public cgrades:string[]){
        super(cname,cgrades);
    } 

    public display():void{
        console.log(this.cname+" "+this.cname);
    }
}

