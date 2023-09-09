import React from 'react';
import verne from '../assets/images/verne.png';
import typefight from '../assets/images/typefight.png';
import dungeondesigner from '../assets/images/dungeondesigner.png';

const Projects = () => {
  const works = [
    {
      title: 'Verne',
      description: 'Learning tool that teaches Virtual Reality concepts in VR',
      link: 'https://chatmansave.itch.io/verne',
      stack: 'Unity, C#, Oculus SDK',
      thumbnail: verne,
    },
    {
      title: 'TypeFight',
      description: 'Speed-typing game where users compete on a global leaderboard',
      link: 'https://github.com/AaronGeesink/TypeFight',
      stack: 'React, NodeJS, ExpressJS, MongoDB, JavaScript',
      thumbnail: typefight,
    },
    {
      title: 'DungeonDesigner',
      description: 'Tool for creating dungeons for tabletop RPG games',
      link: 'https://github.com/AaronGeesink/Dungeon-Designer',
      stack: 'C++, CMake, Valgrind',
      thumbnail: dungeondesigner,
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col items-start mt-20 space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-12 mt-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="p-4 space-y-5 border border-white group lg:gap-x-0 lg:gap-y-5 hover:border-zinc-200 rounded-2xl"
          >
            <img
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="object-cover w-full h-auto rounded-2xl"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p>{work.description}</p>
              <div className="flex flex-row items-center w-full">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-150 border rounded-lg hover:bg-zinc-900 hover:text-white"
                >
                  Link{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-4 h-4 icon icon-tabler icon-tabler-code"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
