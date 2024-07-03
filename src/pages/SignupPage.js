import React from 'react'

const SignupPage = () => {
  return (
    <div>
      <h1>Login</h1>
        <form>
            <input type="email-id" placeholder="johndoe@mail.com" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default SignupPage;