import React from 'react'
import { sendUserAuthRequest } from '../../Api-helpers/Api-helpers';
import AuthForm from './AuthForm';
import { userActions } from '../../store';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const onResReceived = (data) =>{
    console.log(data);
    dispatch(userActions.login())
    localStorage.setItem("userId", data.id)
  }
  const getData = (data) => {
    console.log("Calling to",data)
    sendUserAuthRequest(data.inputs, data.signup)
    .then(onResReceived)
    .catch((err) => {console.log(err)});
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false}/>
    </div>
  )
}


export default Auth;