var a = this;
console.log(this);
b();

function b(){
    var efg = 10;  
    function d(){ 
        var b = this;
        console.log(this);
        console.log(efg);
        console.log(Object.is(a,b));
    }
    d();
}







