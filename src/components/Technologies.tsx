import { IconBrandJavascript, IconBrandReact } from "@tabler/icons-react";
import { IconBrandNodejs } from "@tabler/icons-react";
import { IconBrandSass } from "@tabler/icons-react";
import { IconBrandTypescript } from "@tabler/icons-react";

export function Technologies() {
  return (
    <>
      <h1 className=" text-5xl text-primary text-center p-10">
        Tecnologias que manejo
      </h1>
      <div className="flex flex-row justify-center space-x-5">
        <IconBrandReact
          className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
          size={70}
          stroke={1.5}
          color="#6ceb1e"
        />
        <IconBrandNodejs
          className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
          size={70}
          stroke={1.5}
          color="#6ceb1e"
        />
        <IconBrandSass
          className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
          size={70}
          stroke={1.5}
          color="#6ceb1e"
        />
        <IconBrandJavascript
          className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
          size={70}
          stroke={1.5}
          color="#6ceb1e"
        />
        <IconBrandTypescript
          className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
          size={70}
          stroke={1.5}
          color="#6ceb1e"
        />
      </div>
    </>
  );
}
