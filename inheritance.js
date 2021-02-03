class fullName{
    constructor(){
        this.firstName="Tareq"
    }
}
class name1 extends fullName{
    constructor(lastName){
        super();
        this.name=lastName;
    }
    add(){
        return this.firstName +' '+ this.name;
    }
}

const man1=new name1('Hasan');
const man2=new name1('Chowdhury');
console.log(man1.add(),man2);