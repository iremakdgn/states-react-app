import {useState} from "react";

function InputExample(){
    const [form,setForm] =useState({name: '', surname:''});

    const onChangeInput = (event)=> setForm({...form, [event.target.name]: event.target.value})
    return ( 
    <div>
        Please enter a name
        <br></br>
        <input name="name" type="text" value={form.name} onChange={onChangeInput}></input>
<br></br>
        Please enter a surname
        <br></br>
        <input name="surname" type="text" value={form.surname} onChange={onChangeInput}></input>
    </div>
    )
       
    
}
export default InputExample;