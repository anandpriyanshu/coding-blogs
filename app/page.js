
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
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 mx-16">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
                <input type="search" name="query" placeholder="Search Components" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
                <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
          </div>


        </section>

        <section class="py-12">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold text-gray-800 dark:text-white mb-10">Pricing Plans</h2>
            <div class="flex justify-center space-x-6">
              <div class="bg-white shadow-lg rounded-lg p-8 w-1/3 transition-transform transform hover:scale-105">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Basic</h3>
                <p class="text-gray-600 text-lg mb-4">$10/month</p>
                <ul class="mb-4 text-left">
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 1</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 2</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 3</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 4</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 5</li>
                </ul>
                <Button className="mx-2 text-gray-500 dark:text-black  bg-blue-300" variant="outline">Choose Plan</Button>
              </div>
              <div class="bg-white shadow-lg rounded-lg p-8 w-1/3 transition-transform transform hover:scale-105">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Standard</h3>
                <p class="text-gray-600 text-lg mb-4">$20/month</p>
                <ul class="mb-4 text-left">
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 1</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 2</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 3</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 4</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 5</li>
                </ul>
                <Button className="mx-2 text-gray-500 dark:text-black  bg-blue-300" variant="outline">Choose Plan</Button>
              </div>
              <div class="bg-white shadow-lg rounded-lg p-8 w-1/3 transition-transform transform hover:scale-105">
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Premium</h3>
                <p class="text-gray-600 text-lg mb-4">$30/month</p>
                <ul class="mb-4 text-left">
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 1</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 2</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 3</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 4</li>
                  <li class="mb-2 text-black dark:text-gray-600">✔ Feature 5</li>
                </ul>
                <Button className="mx-2 text-gray-500 dark:text-black  bg-blue-300" variant="outline">Choose Plan</Button>
              </div>
            </div>
          </div>
        </section>


        <section class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-400 to-red-500 animate-fade-in">
          <div class="text-white text-4xl font-bold mb-6">
            Latest Blogs
          </div>
          <div class="space-y-4">
            <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h2 class="text-xl font-semibold">Blog Title 1</h2>
              <p class="text-gray-700">A brief description of the blog content goes here.</p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h2 class="text-xl font-semibold">Blog Title 2</h2>
              <p class="text-gray-700">A brief description of the blog content goes here.</p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h2 class="text-xl font-semibold">Blog Title 3</h2>
              <p class="text-gray-700">A brief description of the blog content goes here.</p>
            </div>
          </div>
        </section>

      </main>

    </>

  );
}
