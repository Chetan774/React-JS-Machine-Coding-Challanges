import { useState } from "react"
import { InputComponent } from "./component/InputComponent"

export const Form = () =>{

    const defaultErrorObj = {
        firstName:false, 
        lastName:false, 
        mobileNo:false
    }

    const [data, setData] = useState({
        firstName:'', 
        lastName:"", 
        mobileNo:''
    })

    const [error, setError] = useState(defaultErrorObj)

    const handleChange = (e, type) =>{
        const value = e.target.value;
        if(type == 'firstName'  && value.length < 5){
           setError({...defaultErrorObj, [type]:"Enter More than 5 Characters"})
        }else if(type == 'lastName'  && value.length < 5){
           setError({...defaultErrorObj, [type]:"Enter More than 5 Characters"})
        }else if(type == 'mobileNo' && (value.length < 10 || value.length > 10)){
           setError({...defaultErrorObj, [type]:"Mobile no cannot be less than 10 digits and more than 10 digits"})
        }else{
            setError(defaultErrorObj)
        }
        setData({...data, [type]:value})
    }

    return (
    <div>
        <div>Form</div>
        <InputComponent label={"First Name :"} type="text" handleChange={(e)=>handleChange(e,'firstName')} value={data.firstName}  error={error.firstName}  />
        <InputComponent label={"Last Name :"} type="text" handleChange={(e)=>handleChange(e,'lastName')} value={data.lastName}  error={error.lastName}  />
        <InputComponent label={"Mobile No :"} type="number" handleChange={(e)=>handleChange(e,'mobileNo')} value={data.mobileNo}  error={error.mobileNo}  />
    </div>)
}