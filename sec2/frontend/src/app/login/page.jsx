import MyButton from '@/components/MyButton'
import React from 'react'

const Login = () => {
  return (
   <div>
    <h1 className='text-4xl font-bold'>Login Page</h1>
    <MyButton dis={true}>button 1</MyButton>
    <MyButton dis={true}>submit</MyButton>
    <MyButton>Click me</MyButton>
    </div>
   
   
  )
}

export default Login;