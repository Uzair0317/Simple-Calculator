#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message :"Enter Your First Number =", type : "number", name : "Firstnumber"},
    {message : "Enter Your Second Number =" , type : "number" , name : "SecondNumber"},
    {message : "Enter Exponent", type :"number", name : "Exponent"},
    {message : "Kindly Salect Operator", type : "list", name : "Operator",
        choices : ["Addition" , "Substraction" , "Multiplication" , "Divide", "Exponent", "Module"],
    },])
    if (answer.Operator === "Addition" )
        {console.log(answer.Firstnumber + answer.SecondNumber)}
    else if (answer.Operator ==="Substraction")
        {console.log(answer.Firstnumber - answer.SecondNumber);}
else if (answer.Operator === "Multiplication")
{console.log(answer.Firstnumber * answer.SecondNumber);}
else if (answer.Operator === "Divide")
    {console.log(answer.Firstnumber / answer.SecondNumber);}
else if (answer.Operator === "Exponent")
    {console.log(answer.Firstnumber ** answer.Exponent);}
else if ( answer.Operator === "Module")
    {console.log(answer.Firstnumber % answer.SecondNumber);}
else{console.log("Error! Please Salect operator");}