import React from 'react';
const AddWalletModal = () => {
    return (
        <>
            <button type="button" data-modal-target="defaultModal" data-modal-toggle="defaultModal"
                    className="font-roboto ml-8 mt-3.5 bg-button-green h-[32px] w-[146] text-white shadow-xl rounded-lg hover:bg-green-400 font-semibold text-l px-3 py-2 text-center inline-flex items-center">
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
                Connect wallet
            </button>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true"
                 className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative shadow-2xl bottom-60 w-fit max-w-2xl h-fit">
                    <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add a wallet first!
                            </h3>
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-5 relative flex content-center mx-auto">
                            <div className="border-2 w-[103px] h-[64px] rounded-lg">

                            </div>
                            <div className='border-2 w-[328px] h-[64px] rounded-lg ml-8'>
                                <input type="email" name="email" id="email"
                                       className=" border border-gray-300 text-black text-sm rounded-lg h-full w-full p-2.5 "
                                       placeholder="Your wallet name?" required/>
                            </div>
                        </div>
                        <div className="p-5 mx-auto relative flex content-center">
                            <div className='border-2 w-[256px] h-[64px] rounded-lg'>

                            </div>
                            <div className='border-2 w-[176px] h-[64px]  ml-8 rounded-lg'>
                                <input type="number" name="balance" id="balance"
                                       className=" border border-gray-300 text-black text-sm rounded-lg h-full w-full p-2.5 "
                                       placeholder="0" required/>
                            </div>
                        </div>
                        <div
                            className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button"
                                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Save
                            </button>
                            <button data-modal-hide="defaultModal" type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddWalletModal;
