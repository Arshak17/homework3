   const arithmeticalOperations = function (x1, x2, x3) {
    return x1*x2-x3;
};
arithmeticalOperations(1, 2, 5);


const noArguments = function () {
  return 3;
};
noArguments();


const noOutcome = function(a,b){
const product = a * b;
};
noOutcome(1,5);


const fullName = function(firstName, lastName) {
  return firstName + ' ' + lastName;
};
fullName('Arshak', 'Kosakyan');

const longestValue = function(a, b, c) {
 if(a.length > b.length){
    if(a.length > c.length){
       return a;
    }else{
       return c;
    }
 }else{
   if(b.length > c.length){
       return b;
    }else{
       return c;
    }
}
};
 longestValue ('Arshak','Artur','Hayk' );
 
 
const signum = function(x, y){
 if(x > y){ 
    return 1;
 }else if(y > x){
    return -1;
 }
 return 0;
};
signum (1, 2);


 const firstTruethyValue = function(x, y, z){
 return x || y || z;
};
firstTruethyValue(5, '', 0);
