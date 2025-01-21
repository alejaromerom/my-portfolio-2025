import React from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandGmail } from "@tabler/icons-react";

export function Contactme() {
  return (
    <>
      <div className="">
        <h1 className="text-3xl text-primary text-center p-10">Contactame</h1>
        <div className="flex space-x-10 justify-center">
          <a
            className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            href="#"
          >
            <IconBrandGithub size={40} stroke={1.5} color="#6ceb1e" />
          </a>
          <a
            className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            href="https://www.linkedin.com/in/alejaromerom/"
          >
            <IconBrandLinkedin size={40} stroke={1.5} color="#6ceb1e" />
          </a>

          <a
            className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            href="mailto:aleromero43@gmail.com"
          >
            <IconBrandGmail size={40} stroke={1.5} color="#6ceb1e" />
          </a>
        </div>
      </div>
    </>
  );
}
