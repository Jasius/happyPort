import React from 'react';

function form () {
    return (
        <div className="mx-auto max-w-6xl sm:p-12 p-8">
            <div className="shadow-lg bg-white px-8 py-20 flex flex-col md:flex-row justify-center">
                <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div className="md:text-4xl text-2xl font-black uppercase">
                        <span className='bg-blue-500 text-white rounded px-1'>Seriously,</span> get in touch.
                    </div>
                    <div className="text-xl mt-4">I am on the lookout for any kind of meaningful work. If you have something in mind or just want to say hi, drop me a line.</div>
                </div>
                <div className="md:w-1/2 flex justify-start md:justify-end w-full md:w-1/2">
                    <form name="contact" method="post" className="flex-auto md:max-w-sm md:px-8">
                        <input type="hidden" name="submission-form" value="contact" />
                        <div className="w-full">
                            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> First Name
                            </div>
                            <div className="my-2 bg-white p-1 flex border border-gray-300 rounded">
                                <input placeholder="John Doe" type="text" name="name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Email
                            </div>
                            <div className="my-2 bg-white p-1 flex border border-gray-300 rounded">
                                <input placeholder="JohnDoe@Outlook.com" type="email" name="email" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                <span className="text-red-400 mr-1" >*</span> Message
                            </div>
                            <div className="my-2 bg-white p-1 flex border border-gray-300 rounded">
                                <textarea placeholder="Hi there!" name="message" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                            </div>
                        </div>
                        <div className="mt-6 relative">
                            <button type="submit" className="font-medium py-2 px-4 text-white bg-blue-600 rounded text-lg tr-mt text-center w-full hover:bg-blue-400 ease-in-out duration-200">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default form;
