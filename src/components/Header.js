import React from 'react';

function Header () {
    return (
        <section className="bg-white m-10 lg:m-20">
            <div className="flex mx-auto max-w-screen-md">
                <div className="lg:block hidden">
                    <div className="h-48 w-48 bg-cover shadow-lg rounded-full border-solid border-2 border-blue-600 flex items-center justify-center overflow-hidden" title="Profile picture" style={{ backgroundImage: `url('https://jaska.dev/jaska.b4e4c830.png')` }}></div>
                </div>
                <div className="lg:ml-6">
                    <h2 className="text-3xl font-semibold text-gray-800">Hi, <span className="bg-blue-600 text-white rounded px-1">I’m Mindaugas</span>. Nice to meet you!</h2>
                    <p className="text-gray-600 mt-4">I am a 23 years old ambitious front end developer who currently works in a flex role as internal tools developer, QA engineer and resides in a beautiful <a className="underline" href="https://govilnius.lt">Vilnius city.</a> Before going back to live in Vilnius <a className="underline" href="https://www.linkedin.com/posts/jasius_covid19-military-army-activity-6654753774902493184-bCm_">I served as a conscript soldier</a> in Marijampole's logistics battalion where I was assigned to SEP operator duties.
                    I have a drive to use skills and experience towards improving tools, services and communities such as Microsoft discord which has given me the chance to talk and gain knowledge, experience from Microsoft employees, prominent developers and journalists.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Header;
