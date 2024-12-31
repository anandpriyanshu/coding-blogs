
"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
export default function Home() {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', "Software Engineering", 'Machine Learning', 'Data Science'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  //  <span ref={el} />
  return (
    <>
      <main className=" h-screen mx-12">

        <section className="container px-4 py-10 mx-auto lg:h-128 lg:flex lg:items-center lg:justify-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 mx-16">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20 mx-auto">
              <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
                <input type="search" name="query" placeholder="Search Components" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
                <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white dark:text-black transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2 flex justify-center">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
          </div>
        </section>



        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRICING PLANS</h2>
              <h1 className=" dark:text-white sm:text-3xl text-2xl font-medium title-font text-gray-900">Choose Your Plan</h1>
            </div>
            <div className="flex flex-wrap justify-center m-4">

              <div className="p-4 w-full sm:w-1/2 md:w-1/3">
                <div className="flex items-center rounded-lg h-full bg-gray-200 p-8 flex-col">
                  <h2 className="text-lg font-medium title-font mb-3">Basic</h2>
                  <p className="text-3xl font-bold mb-4">$19</p>
                  <ul className="flex-grow">
                    <li className="mb-2">✔ Feature 1</li>
                    <li className="mb-2">✔ Feature 2</li>
                    <li className="mb-2">✖ Feature 3</li>
                  </ul>
                  <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded">Choose Plan</button>
                </div>
              </div>

              <div className="p-4 w-full sm:w-1/2 md:w-1/3">
                <div className="flex items-center rounded-lg h-full bg-indigo-500 dark:bg-gray-600 text-white p-8 flex-col">
                  <h2 className="text-lg font-medium title-font mb-3">Standard</h2>
                  <p className="text-3xl font-bold mb-4">$39</p>
                  <ul className="flex-grow">
                    <li className="mb-2">✔ Feature 1</li>
                    <li className="mb-2">✔ Feature 2</li>
                    <li className="mb-2">✔ Feature 3</li>
                  </ul>
                  <button className="mt-4 bg-white text-indigo-500 py-2 px-4 rounded">Choose Plan</button>
                </div>
              </div>

              <div className="p-4 w-full sm:w-1/2 md:w-1/3">
                <div className="flex items-center rounded-lg h-full bg-gray-200 p-8 flex-col">
                  <h2 className="text-lg font-medium title-font mb-3">Premium</h2>
                  <p className="text-3xl font-bold mb-4">$59</p>
                  <ul className="flex-grow">
                    <li className="mb-2">✔ Feature 1</li>
                    <li className="mb-2">✔ Feature 2</li>
                    <li className="mb-2">✔ Feature 3</li>
                  </ul>
                  <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">BLOG REVIEWS</h2>
              <h1 class="dark:text-gray-300 sm:text-3xl text-2xl font-medium title-font text-gray-900">What Our Users Say</h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-200 dark:bg-gray-500 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Alice Johnson</h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base dark:text-black">"The blog is a treasure trove of information! I found exactly what I needed and more. Highly recommend!"</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-200 dark:bg-gray-500 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Bob Smith</h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base dark:text-black">"I love the variety of topics covered. Each post is well-researched and engaging!"</p>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-200 dark:bg-gray-500 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Charlie Brown</h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base dark:text-black">"A fantastic resource! The insights shared have helped me tremendously in my projects."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </>

  );
}
