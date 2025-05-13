import React, { useEffect, useState } from "react";
import './Calculator.css'

export const Calculator = () =>{
    const operations = ['*', '/', '+', '-', '=', 'C'];
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');
    const [currentOperation, setCurrentOperation] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');


    const clearData = () =>{
        setCurrentOperation('');
            setOperator('');
            setNum1('')
            setNum2('');
            setResult('')
            return;
    }

    const handleInputChange = (input) =>{
        if(result){
           if(operator){
            setNum1(result.toString());
            setCurrentOperation(result+input)
           }else{
            setNum1(result.toString()+input)
            setCurrentOperation(result+input)

           }
        }
        if(input == '='){
            getResult();
            setOperator('');
            setNum1('')
            setNum2('');
            return;
        }
        if(input == 'C'){
            return clearData()
          }
      setCurrentOperation(currentOperation+input);
       if(operations.includes(input)){
        setOperator(input)
       }else if(!operator){
         setNum1(num1+input)
       }else{
        setNum2(num2+input)
       }
    }

    useEffect(()=>{
        console.log('res : ',result)
    }, [result])
    const getResult = () =>{
        const ele1 = Number(num1);
        const ele2 = Number(num2);
        console.log('ele1 : ',ele1)
        console.log('ele2 : ',ele2)
        if(operator == '*'){
            setResult(ele1 * ele2);
        }else if(operator == '+'){
            setResult(ele1 + ele2);
        }else if(operator == '-'){
            setResult(ele1 - ele2);
        }else if(operator == '/'){
            setResult(ele1 / ele2);
        }else{
            setResult(0);
        }
        setCurrentOperation('');
        setOperator('');
        setNum1('')
        setNum2('');
        return;    }

    const digits = [1, 2, 3, 4, 5, 6,7, 8, 9, 0];

    return (
        <div className="parentDiv">
            <span className="header">Calculator</span>
            <span className="result">Result : {result}</span>
            <span className="result">Current : {currentOperation}</span>
            <span className="operations">{operations.map((sign)=><button className="sign" onClick={()=>handleInputChange(sign)}>{sign}</button>)}</span>
            <div className="allDigits">
              {  
                 digits.map((digit)=> <button className="digit" onClick={()=>handleInputChange(digit)}>{digit}</button>)
              }
            </div>
        </div>
    )
}