import React from 'react';
import Resume from './Aaron_Geesink_Resume.pdf'

const Hero = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
        <h1 className="text-4xl font-semibold">
          Hey, I'm Aaron. <br />{' '}
        </h1>
        <h2 className="text-3xl">
          I'm a software engineer who loves software testing, AI, and efficient algorithm design 
        </h2>
        <p className="text-xl">
          Find me on{' '}
          <a
            href="https://github.com/AaronGeesink"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          {' '} and {' '}
          <a
            href="https://www.linkedin.com/in/aaron-geesink/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          .
        </p>
        <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
