import React, { useEffect, useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'
import { validateEmail } from '../../utils/helper'
import { API_PATHS } from '../../utils/apiPaths'
import axiosInstance from '../../utils/axiosInstance'
import { UserContext } from '../../context/userContext'
import uploadImage from '../../utils/uploadImage'
import { pingServer } from '../../utils/pingServer'
import { toast } from 'react-hot-toast'

function SignUp() {
  const [profilePic, setProfilePic] = useState(null)
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

    let profileImageUrl = ''

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
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic)
        profileImageUrl = imgUploadRes.imageUrl || ''
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
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
        <h3 className="text-xl md:text-2xl font-semibold text-black">Create an Account</h3>
        <p className="text-sm md:text-base text-slate-700 mt-1 mb-6">
          Join us today by entering your details below.
        </p>
        <form onSubmit={handleSignUp} className="space-y-4">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="col-span-1 md:col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button type="submit" className="btn-primary w-full">SIGN UP</button>
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
