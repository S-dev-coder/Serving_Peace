import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      // title="Join the millions learning to code with StudyNotion for free"
      title="Join us to experience abundance soul of yours with Serving Peace for free.."
      desc1="You’re not alone—you have a community of people who support you..."
      desc2="You deserve a happy life..."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
