import { constants } from "../constants/constants";

export function Technologies() {
  return (
    <>
      <h1 className="text-5xl text-primary text-center p-10 sm-text-center">
        Tecnologias que manejo
      </h1>
      <div className="flex flex-row justify-center space-x-5 sm:space-x-5 md:pace-x-5">
        {constants.tech.map((technology) => (
          <technology.icon
            key={technology.name}
            className="transition ease-in-out delay-150 translate-y-1 hover:scale-150 hover:bg-transparent duration-300"
            size={70}
            stroke={1.5}
            color="#6ceb1e"
          />
        ))}
      </div>
    </>
  );
}
