import React from 'react';

function form () {
    return (
        <div className="mx-auto max-w-6xl sm:p-12 p-8">
            <div className="shadow-lg bg-white p-8 flex flex-col md:flex-row justify-center">
                <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div className="md:text-4xl text-2xl font-black uppercase">
                        <span className='bg-blue-500 text-white rounded px-1'>Seriously,</span> get in touch.
                    </div>
                    <div className="text-xl mt-4">I am on the lookout for any kind of meaningful work. If you have something in mind or just want to say hi, drop me a line.</div>
                </div>
                <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2">
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default form;
