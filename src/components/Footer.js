import React from 'react';
import porfolioData from '../assets/portfolioData.json'

const getSocialLinksFooter = () => {
    const icons = {
        "twitter": "<svg class='h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z' /></svg>",
        "linkedin": "<svg class='h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z'/></svg>",
        "github": "<svg class='h-5 w-5 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'/></svg>"
    }
    const template = (url, altText, icon, key) => <a className="flex items-center mx-2 hover:text-blue-600 ease-in-out duration-200" href={url} alt={altText} key={key} dangerouslySetInnerHTML={{ __html: icon }}></a>
    return <div className="flex items-center -mx-2">{Object.entries(porfolioData.profile.socialLinks).map((socialLink, index) => template(socialLink[1], socialLink[0], icons[socialLink[0]], index))}</div>
}

function footer () {
    return (
        <footer className="bg-white border-solid border-t border-gray-200">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center text-gray-600">
                    <div>
                        <div>&copy; {porfolioData.profile.firstName} {porfolioData.profile.lastName} {new Date().getFullYear()}</div>
                    </div>
                    {getSocialLinksFooter()}
                </div>
            </div>
        </footer>
    );
}

export default footer;
