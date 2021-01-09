import React from 'react';
import porfolioData from '../assets/portfolioData.json'
import { stringTemplateParser } from "../utils/jsonTemplateParsing";
import { getTimespan } from "../utils/getTimespan";

function Header () {
    return (
        <section className="m-10 lg:m-20">
            <div className="flex mx-auto max-w-screen-md">
                <div className="hidden">
                    <img src="assets/img/jaska.png" loading="eager" className="h-48 min-w-48 bg-cover shadow-lg rounded-full border-solid border-2 border-blue-600 flex items-center justify-center overflow-hidden" alt="Personal profile"/>
                </div>
                <div className="lg:ml-6">
                    <h2 className="text-3xl font-semibold text-gray-800">Hi, <span className="bg-blue-600 text-white rounded px-1">I’m {porfolioData.profile.firstName}.</span> Nice to meet you!</h2>
                    <p className="text-gray-600 mt-4" dangerouslySetInnerHTML={stringTemplateParser(
                        porfolioData.profile.aboutMe,
                        { age: getTimespan(porfolioData.profile.dateOfBirth) }, true
                    )} />
                </div>
            </div>
        </section>
    );
}

export default Header;
