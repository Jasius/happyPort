import React from 'react';

function projects () {
    return (
        <main className="font-sans">
            <div>
                <section className="bg-gray-800 pattern py-20">
                    <div className="max-w-5xl px-6 mx-auto text-center">
                        <h2 className="text-4xl font-semibold text-white mb-10">Projects</h2>
                        <div class="flex mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            <div class="w-1/3 p-8 bg-gray-400 text-center">
                                <div class="flex items-center justify-center h-40 overflow-hidden">
                                    <img class="object-cover" src="https://via.placeholder.com/1920x1080.png" alt="" />
                                </div>
                                <div class="grid grid-flow-row grid-cols-4 gap-1">
                                    <div className="border-b-2 border-blue-500 text-blue-500">React</div>
                                    <div className="border-b-2 border-green-500 text-green-500">SQL</div>
                                    <div className="border-b-2 border-pink-500 text-pink-500">Sass</div>
                                    <div className="border-b-2 border-orange-500 text-orange-500">JS</div>
                                </div>
                                <p className="mt-4">Software developer</p>
                            </div>
                            <div class="w-2/3 py-8 px-12 bg-gray-700 text-center text-gray-300">
                                <h2 class="text-2xl font-semibold">BV project</h2>
                                    Bazaarvoice is a digital marketing company. It provides software that allows retailers to add customer reviews to their websites. Bazaarvoice is third biggest company in the world by CGC, behind Google and Facebook.
                                    Developed internal automation tool, scripts, extensions for QA team.
                                    Leading QA team work distribution and estimation.</div>
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                        <img className="object-cover " src="https://via.placeholder.com/1920x1080.png" alt="" />
                                    </div>
                                    <a href="#" className="block bg-gray-700 rounded-md overflow-hidden ">
                                        <div className="py-2 px-3 text-center text-sm">
                                            <p className="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                            <span className="block text-gray-500 mt-2">jaska.dev</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                        <img className="object-cover " src="https://via.placeholder.com/1920x1080.png" alt="" />
                                    </div>
                                    <a href="#" className="block bg-gray-700 rounded-md overflow-hidden ">
                                        <div className="py-2 px-3 text-center text-sm">
                                            <p className="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                            <span className="block text-gray-500 mt-2">jaska.dev</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="max-w-xs w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div className="flex items-center justify-center  bg-white  overflow-hidden">
                                        <img className="object-cover " src="https://via.placeholder.com/1920x1080.png" alt="" />
                                    </div>
                                    <a href="#" className="block bg-gray-700 rounded-md overflow-hidden ">
                                        <div className="py-2 px-3 text-center text-sm">
                                            <p className="text-gray-300">Bazaarvoice is a digital marketing company.</p>
                                            <span className="block text-gray-500 mt-2">jaska.dev</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default projects;
