import React from 'react';
import porfolioData from '../assets/portfolioData.json'

const Testimonials = () => {
    const testimonialTemplate = (testimonial) => <div className="px-8 bg-white shadow-lg rounded-lg py-10 bg-opacity-25 testimonial-card">
        {testimonial?.avatar?.length > 0 &&
            <div className="flex justify-center">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-blue-600" loading="lazy" src={'assets/img/' + testimonial.avatar} alt={"Picture of " + testimonial.reviewer} />
            </div>
        }
        <div>
            <h2 className="text-gray-800 text-2xl font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline align-baseline" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg> {testimonial.reviewer}
            </h2>
            <h3 className="text-gray-800 text-1xl ">{testimonial.role}</h3>
            <p className="mt-4 italic text-gray-600">{testimonial.testimonial}</p>
        </div>
    </div>
    const [showRemaining, setShow] = React.useState(false);
    const listTestimonials = porfolioData.testimonials.slice(0, 3).map((obj) => testimonialTemplate(obj));
    const remainingTestimonials = porfolioData.testimonials.slice(3).map((obj) => testimonialTemplate(obj));
    return (
        <div className="max-w-5xl px-6 mx-auto text-center py-20">
            <h2 className="text-4xl text-gray-800 font-semibold mb-2 cursor-default">Testimonials</h2>
            <div className="mx-auto mb-10 w-16 border-b-3 border-gray-800 cursor-default"></div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {listTestimonials}
                {showRemaining ? (
                    remainingTestimonials
                ) : null}
            </div>
            {porfolioData.testimonials.length > 3 && <button onClick={() => setShow(!showRemaining)} className="w-32 font-medium m-6 py-2 px-4 text-white bg-blue-600 rounded text-lg tr-mt hover:bg-blue-400 ease-in-out duration-200">Show {!showRemaining ? 'more' : 'less'}</button>}
        </div>
    );

}

export default Testimonials;
