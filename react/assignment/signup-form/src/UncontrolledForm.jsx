import React, { useRef, useState } from "react";
function UncontrolledForm({data}) {
  console.log(data)
  // const [formData, setFormData] = useState({name:'', email:'', password:''});
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  
  const [errors, setErrors] = useState({});
  const [showData, setShowData] = useState(false);


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
    if(nameRef?.current?.value?.length < 3){
      // validation failed, need to create an entry in error state
      errorEntries.name = 'Name must be atleast 3 chars long'
    }
    if(!emailRef?.current.value?.includes('@')) errorEntries.email = 'Email is not of correct format'
    if(passwordRef?.current.value?.length < 6) errorEntries.password = 'Password must be atleast 6 chars long'
    setErrors(errorEntries);
  }

  const clearForm = (e)=>{
    e.preventDefault();
    // setFormData({name:'', email:'', password:''});
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    setErrors({});
    setShowData(false);
  }

  return (
    <div>
      <form>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" type="text" name="name" ref={nameRef} /> <br />
        {errors?.name && <p style={{color:"red"}}>{errors.name}</p>}

        <label htmlFor="email-input">Email: </label>
        <input id="email-input"type="text" name="email" ref={emailRef} /><br />
        {errors?.email && <p style={{color:"red"}}>{errors.email}</p>}

        <label htmlFor="pwd-input">Password: </label>
        <input id="pwd-input"  type="password" name="password" ref={passwordRef} /> <br />
        {errors?.password && <p style={{color:"red"}}>{errors.password}</p>}

        <button value="submit" onClick={submitHandler}>Submit</button>
        <button value='reset' onClick={clearForm}>Clear</button>
      </form>
      
      <div>
      {
        showData &&
        <>
          <hr />
          <div>
            Name: {nameRef.current.value} <br />
            Email: {emailRef.current.value} <br />
            Password: {passwordRef.current.value} <br />
          </div>
        </>
      }
      </div>
    </div>
  );
}

export default UncontrolledForm;
