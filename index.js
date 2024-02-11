function showYoungestStudent(students) { 
var youngest = students[0];
    for(var i = 1; i < students.length; i++){
    if( students[i].age < youngest.age){
        youngest = students[i]
    }
}
console.log("This student youngest of other student");
console.log(youngest);
}

var students = [{name:"Noor", age:23},
    {name:"Reem", age:22},
    {name:"Huda", age:17},
    {name:"Alaa", age:22},
    {name:"Ali", age:20},
    {name:"Omnia", age:21},
    {name:"Nabel", age:33},
    {name:"Arkan", age:19}]
    
showYoungestStudent(students);