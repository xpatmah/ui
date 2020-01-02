abstract class Person{
    projectName:string = "Default";
    budget:number;

    abstract changeName(name:string):void;

    calcBught(){
        return this.budget * 2;
    }
}

class Student extends Person{
    changeName(name:string){
        this.projectName = name;
    }
}


class SingleTon{

    private static instance : SingleTon;

    private constructor(){

    }

    static getInstance():SingleTon{
        if(!SingleTon.instance){
            SingleTon.instance = new SingleTon();
        }
        return SingleTon.instance;
    }

}
