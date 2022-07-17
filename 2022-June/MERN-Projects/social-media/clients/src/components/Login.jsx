import React from 'react'
import video from "../assets/code-screen.mp4"
import GoogleLogin from 'react-google-login';
import {FcGoogle} from "react-icons/fc"
const Login = () => {

    const responseGoogle = (res) => {
        console.log(res)
    }

  return (
      <div className='flex justify-start items-center flex-col h-screen'>
          <div className="relative w-full h-full">
              <video
                  src={video}
                  type="video/mp4"
                  loop
                  controls={false}
                  autoPlay
                  muted
                  className='w-full h-full object-cover'
              />
              <div
                  className="
                  absolute flex flex-col justify-center
                  items-center top-0 right-0 left-0
                  bottom-0 bg-blackOverlay">
                  <div className="shadow-2xl">
                      <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                          render={(renderProps) => (
                              <button
                                  type='button'
                                  className="bg-mainColor flex justify-center
                                   items-center p-3 rounded-lg cursor-pointer
                                    outline-none
                                   "
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                              >
                                  <FcGoogle className="mr-4"/> Sign in with Google
                              </button>
                        )}
                      />
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Login