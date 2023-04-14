import React from 'react';
import icon from '../../img/icon.png'

const Login = () => {
    return (
        <>
            <div className='h-screen bg-gray-200 flex justify-center'>
                <div className="w-full h-[400px] text-center">
                    <div className="w-full h-full-">
                        <div className="w-full h-[310px] bg-custom-green"></div>
                    </div>
                    <div className='absolute w-full flex-col items-center justify-center top-[4%] md:p-1'>
                        <img className="mx-auto w-[13rem]"
                             src={icon}
                             alt=''
                        />
                        <p className="text-4xl text-white">Money Lover</p>
                    </div>
                    <div className="absolute w-full flex flex-col items-center justify-center top-[14rem] md:p-2">
                        <div className="w-fit h-fit bg-white justify-center rounded-[20px] shadow-md p-8">
                            <h2 className="text-3xl font-bold font-roboto items-center text-gray-800 mb-6 text-center">Register</h2>
                            <div className="flex items-center justify-between mt-6">
                                <div className="w-[18rem] h-80 p-1">
                                    <h2 className="text-base text-left font-roboto text-gray-500 mt-1 mb-4">Using social networking accounts</h2>
                                    <form className="space-y-3">
                                        <div>
                                            <button
                                                className="border-2 border-rose-500  hover:bg-red-400 hover:text-white text-red-400 font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                <span className="mr-2"></span>
                                                Connect with Google
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="border-2 border-blue-500  hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                <span className="mr-2"></span>
                                                Connect with Facebook
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="border-2 border-black  hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50 w-full">
                                                <span className="mr-2"></span>
                                                Sign in Apple
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="border-l-2 border-gray-300 h-[12rem] mb-8 mx-2"></div>
                                <div className="w-[18rem] h-fit p-1 mb-6">
                                    <h2 className="text-base text-left font-roboto text-gray-500 mb-4">Using Money Lover account</h2>
                                    <form className="space-y-6">
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Email"
                                                   className="w-full font-roboto border-1 bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 outline-2 hover:outline-green-500 "/>
                                        </div>
                                        <div>
                                            <input type="password" name="password" id="password" placeholder="Password" autoComplete='current-password'
                                                   className="w-full font-roboto bg-gray-100 py-2 px-4 rounded-[10px] focus:outline-none focus:ring focus:ring-green-600 "/>
                                        </div>
                                        <div>
                                            <button type="submit"
                                                    className="w-full bg-green-500 text-white font-roboto py-2 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">REGISTER
                                            </button>
                                        </div>
                                        <div>
                                            <p>Have you an account? <a href='/login'><p className='text-green-600 decoration-green-600 decoration-1'>Sign In</p></a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
