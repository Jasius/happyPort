import React from 'react';

function Header () {
    return (
        <section class="bg-white m-20">
            <div class="lg:flex mb-4">
                <div class="lg:w-1/3 float-right">
                    <div class="flex items-end float-right">
                        <div class="h-48 w-48 bg-cover rounded-full border-solid border-2 border-green-600 flex items-center justify-center overflow-hidden" title="Profile picture" style={{ backgroundImage: `url('https://images-eds-ssl.xboxlive.com/image?url=wHwbXKif8cus8csoZ03RW3apWESZjav65Yncai8aRmVbSlZ3zqRpg1sdxEje_JmFQYY9q5JGf.Pd9sLQD6FJwRn1nuYA8hbE_i4.3p8sY4CaXnuE.AazJzwGhXEuUOW4TJA3BgJYBnUD7Be8CI3bp3oHAuC47ksD1MRHvXb8ymQ-&format=png')` }}>
                        </div>
                    </div>
                </div>
                <div class="lg:w-5/6">
                    <div class="max-w-2xl px-6 text-center ml-4">
                        <h2 class="text-3xl font-semibold text-gray-800">Hi, <span class="bg-blue-600 text-white rounded px-1">I’m Mindaugas</span>. Nice to meet you!</h2>
                        <p class="text-gray-600 mt-4">I am a 23 years old ambitious front end developer who currently works in a flex role as internal tools developer, QA engineer and resides in a beautiful Vilnius city. Before going back to live in Vilnius I served as a conscript soldier in Marijampole's logistics battalion where I was assigned to SEP operator duties.
                        I have a drive to use skills and experience towards improving tools, services and communities such as Microsoft discord which has given me the chance to talk and gain knowledge, experience from Microsoft employees, prominent developers and journalists.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
