import React, { useState } from "react";
function ControlledForm() {
  
  const [formData, setFormData] = useState({name:'', email:'', password:''});
  const [errors, setErrors] = useState({});
  const [showData, setShowData] = useState(false);

  const changeHandler = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    validate();

    if(Object.keys(errors).length == 0){
      setShowData(true)
    }
    else{
      setShowData(false)
    }
  }

  const validate = ()=>{
    let errorEntries = {};
    if(formData?.name?.length < 3){
      // validation failed, need to create an entry in error state
      errorEntries.name = 'Name must be atleast 3 chars long'
    }
    if(!formData?.email?.includes('@')) errorEntries.email = 'Email is not of correct format'
    if(formData?.password?.length < 6) errorEntries.password = 'Password must be atleast 6 chars long'
    setErrors(errorEntries);
  }

  const clearForm = (e)=>{
    e.preventDefault();
    setFormData({name:'', email:'', password:''});
    setErrors({});
    setShowData(false);
  }

  return (
    <div>
      <form>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" value={formData?.name} type="text" name="name" onChange={changeHandler} /> <br />
        {errors?.name && <p style={{color:"red"}}>{errors.name}</p>}

        <label htmlFor="email-input">Email: </label>
        <input id="email-input" value={formData?.email} type="text" name="email" onChange={changeHandler} /><br />
        {errors?.email && <p style={{color:"red"}}>{errors.email}</p>}

        <label htmlFor="pwd-input">Password: </label>
        <input id="pwd-input" value={formData?.password} type="password" name="password" onChange={changeHandler} /> <br />
        {errors?.password && <p style={{color:"red"}}>{errors.password}</p>}

        <button value="submit" onClick={submitHandler}>Submit</button>
        <button value='reset' onClick={clearForm}>Clear</button>
      </form>
      
      <div>
      {
        showData && formData &&
        <>
          <hr />
          <div>
            Name: {formData.name} <br />
            Email: {formData.emal} <br />
            Password: {formData.password} <br />
          </div>
        </>
      }
      </div>
    </div>
  );
}

export default ControlledForm;
