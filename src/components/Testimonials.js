import React from 'react';
import justeImg from '../assets/img/justeS.png'

function Testimonials () {
    return (
        <div className="max-w-5xl px-6 mx-auto text-center py-20">
            <h2 class="text-4xl text-gray-800 font-semibold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div class="max-w-md px-8 bg-white shadow-lg rounded-lg py-10">
                    <div class="flex justify-center">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-blue-600" src="https://jaska.dev/elvyraS.e50bb4df.png" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-2xl font-semibold"><svg xmlns="http://www.w3.org/2000/svg" class="inline align-baseline" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg> Elvyra S.</h2>
                        <h3 class="text-gray-800 text-1xl ">Certification Specialist</h3>
                        <p class="mt-4 italic text-gray-600">Thanks for sharing your superpowers!</p>
                    </div>
                </div>
                <div class="max-w-md px-8 bg-white shadow-lg rounded-lg py-10">
                    <div class="flex justify-center">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-blue-600" src="https://jaska.dev/tomasS.0a6948d5.jpg" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-2xl font-semibold"><svg xmlns="http://www.w3.org/2000/svg" class="inline align-baseline" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg> Tomas S.</h2>
                        <h3 class="text-gray-800 text-1xl ">Implementation Manager</h3>
                        <p class="mt-4 italic text-gray-600">Thank you for your help on building QA Automation tool.</p>
                    </div>
                </div>
                <div class="max-w-md px-8 bg-white shadow-lg rounded-lg py-10">
                    <div class="flex justify-center">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-blue-600" src={justeImg} />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-2xl font-semibold"><svg xmlns="http://www.w3.org/2000/svg" class="inline align-baseline" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="7" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg> Juste S.</h2>
                        <h3 class="text-gray-800 text-1xl ">Delivery Ops Manager</h3>
                        <p class="mt-4 italic text-gray-600">Welcome back to the BV family our number one IT talent, Mr. "Continuous improvement Jaska"!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
