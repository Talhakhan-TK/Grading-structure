#! /usr/bin/env node
import inquirer from "inquirer";
let Obtainednumber = await inquirer.prompt([
    {message: "Put obtained marks", type: "number", name: "Marks"},
]);

console.log("Your grade as per Obtained marks is:")
if(Obtainednumber.Marks >= 80 ){
    console.log("*Grade A+*")
}
else if (Obtainednumber.Marks >= 70 && Obtainednumber.Marks < 80){
    console.log("*Grade A*")
}
else if (Obtainednumber.Marks >= 60 && Obtainednumber.Marks < 70){
    console.log("*Grade B*")
}
else if (Obtainednumber.Marks >= 50 && Obtainednumber.Marks < 60){
    console.log("*Grade C*")
}
else if (Obtainednumber.Marks >= 40 && Obtainednumber.Marks < 50){
    console.log("*Grade D*")
}else {console.log("*Fail*")}

console.log("\n-Grading are as follows: \n Grade A+: >80 \n Grade A: 70 to 79 \n Grade B: 60 to 69 \n Grade C: 50 to 59 \n Grade D: 40 to 49 \n Fail: < 40")