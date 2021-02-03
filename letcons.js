const name1="Hridoy";
const name2="Hassan";
const fullName=`${name1} ${name2} Chowdhury`;
console.log(fullName);

function add(num1,num2)
{
  const  num=num2||10;
    const sum=num1+num;
    return sum;
}

const result=add(7);
console.log(result);