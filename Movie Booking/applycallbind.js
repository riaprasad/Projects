let name1 = {firstName: "Ria" , lastName: "Prasad"}
let name2 = {firstName: "Garima" , lastName: "Prasad"}

printWholeName = function(age, occupation){
  console.log(this.firstName , "" , this.lastName , "age and occupation are " , age , occupation);
}

printWholeName.call(name1, "18" , " , student");
printWholeName.apply(name2, ["28" , "job"]);

let printFullName = printWholeName.bind(name2, "28", ", job in hyderabad" );
printFullName();
