import React from 'react'
import Input from '../Components/Input';
import logo_Gitar from '../assets/logo_GItar.png'
import bgUtama from '../assets/bgUtama.png'

function CreateAccount() {

  return (
    <>
      <div className="m-0 box-border flex h-screen w-full bg-slate-500 p-0">
        <div className="left flex w-1/2 flex-col bg-white items-center justify-center gap-20">
          <img src={logo_Gitar} className='mt-10 rounded-xl' />
          <div className='bottom-0'>@ By Hariando Muthi_PWL_RA_UTS</div>
        </div>
        <div className="w-1/2">
          <div className="relative h-screen flex flex-col items-center justify-center">
            <img src={bgUtama} className='h-full w-full object-cover absolute inset-0 z-0' />
            {/* <Image
                            src="/images/bg-login.png"
                            alt="logo-dashboard"
                            layout="fill"
                            objectFit="cover"
                            className="h-full w-full object-cover absolute inset-0 z-0"
                        /> */}
            <div className="z-20 -mt-10">
              {/* <Image
                                src="/images/logokedai.png"
                                alt="Logo Kedai"
                                width={150}
                                height={150}
                            /> */}
            </div>
            <div className="text-center z-10 bg-white pl-7 pr-7 pt-5 pb-5 w-[60%] rounded-xl drop-shadow-2xl">
              <div className="mb-7 style={{ fontFamily: 'Montserrat' }} text-[32px] font-medium">
                Create Account
              </div>
              <div className="text-black">
                <div className="mb-[20px]">
                  <div className='text-[16px] flex justify-start items-start ml-1 text-[#000000] opacity-50'>Full Name</div>
                  <Input
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder="Masukkan Nama"
                    required
                    type="email"
                  />
                </div>
                <div className="mb-[15px]">
                  <div className='text-[16px] flex justify-start items-start ml-1 text-[#000000] opacity-50'>Email Address</div>
                  <Input
                    onChange={(e) => { setEmail(e.target.value); }}
                    placeholder="Masukkan Email"
                    required
                    type="email"
                  />
                </div>
                <div className="mb-[2px]">
                  <div className='text-[16px] flex justify-start items-start ml-1 text-[#000000] opacity-50'>Password</div>
                  <Input
                    onChange={(e) => { setPassword(e.target.value); }}
                    placeholder="Masukkan Password"
                    required
                    type="password"
                  />
                  {/* {isPasswordEmpty && <p className="text-red-500">Password is required</p>} */}
                </div>
              </div>
              <button
                type="button"
                // onClick={handleFormSubmit}
                onClick="./"
                className="text-white w-[50%] bg-[#5E42CE] hover:bg-[#937af9] focus:ring-4 focus:ring-[#937af9] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#5E42CE] dark:hover:bg-[#937af9] focus:outline-none mt-5"
              >
                Sign-Up
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateAccount
