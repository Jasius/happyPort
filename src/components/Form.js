import React from 'react';

function form () {
  return (
      <div className="mx-auto max-w-6xl p-12">
          <div className="shadow-md p-8 flex flex-col md:flex-row justify-center">
              <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                  <div className="md:text-4xl text-xl font-black uppercase"><span className='bg-blue-500 text-white rounded px-1'>Seriously,</span> get in touch.</div>
                  <div className="text-xl mt-4">I am on the lookout for any kind of meaningful work. If you have something in mind or just want to say hi, drop me a line.</div>
              </div>
              <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2 ">
                  <div className="flex-auto max-w-sm p-8 pb-20">
                      <div className="w-full">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> First Name</div>
                          <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="John Doe" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                      </div>
                      <div className="w-full">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> Email</div>
                          <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="JohnDoe@Outlook.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                      </div>
                      <div className="w-full">
                          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span className="text-red-400 mr-1">*</span> Message</div>
                          <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">  <textarea placeholder="Hi there!" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
                      </div>
                      <div className="mt-6 relative">
                          <div className="font-medium py-2 px-4 text-white
                  cursor-pointer bg-blue-500 rounded text-lg tr-mt  absolute text-center w-full">Submit</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default form;
