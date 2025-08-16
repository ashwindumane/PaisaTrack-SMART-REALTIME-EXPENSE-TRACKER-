import React, { useEffect, useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import { API_PATHS } from '../../utils/apiPaths'
import axiosInstance from '../../utils/axiosInstance'
import { UserContext } from '../../context/userContext'
import { pingServer } from '../../utils/pingServer'
import { toast } from 'react-hot-toast'

function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { updateUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    pingServer()
  }, [])

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!fullName) {
      setError('Please enter your name')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    setError('')

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
      })

      const { token, user } = response.data

      if (token) {
        localStorage.setItem('token', token)
        updateUser(user)
        toast.success(
          `Account created successfully. Welcome, ${user.fullName?.split(' ')[0] || 'User'}!`
        )
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.response?.data.message) {
        setError(error.response.data.message)
      } else {
        setError('Something went wrong. Please try again')
      }
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:w-[100%] h-auto md:h-full mt-6 md:mt-0 flex flex-col justify-center mx-auto px-4">
        
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-semibold text-black text-center">
          Create an Account
        </h3>
        <p className="text-sm md:text-base text-slate-700 text-center mt-2 mb-6">
          Join us today by entering your details below.
        </p>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />

          {/* Error */}
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          {/* Submit */}
          <button type="submit" className="btn-primary w-full">SIGN UP</button>

          {/* Redirect */}
          <p className="text-[13px] text-slate-800 mt-3 text-center">
            Already have an account?{' '}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
