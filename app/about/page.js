import React from 'react';

function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  ">
            <h1 className="text-4xl font-bold text-gray-400 mb-4">About Us</h1>
            <p className="text-lg text-gray-400 mb-6 text-center max-w-2xl">
                Welcome to our blog! We are passionate about sharing knowledge and insights on various topics.
                Our mission is to provide valuable content that inspires and informs our readers.
            </p>
            <p className="text-lg text-gray-400 text-center max-w-2xl">
                Join us on this journey as we explore new ideas and perspectives. Thank you for being a part of our community!
            </p>
        </div>
    );
}

export default About;
