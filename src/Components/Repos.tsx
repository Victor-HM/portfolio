import { useEffect, useState } from "react";
import { Button } from "./Button";

interface Repos {
  name: string;
  img: string;
  github_url: string;
  site_url: string;
}

export function Repos({ name, img, github_url, site_url }: Repos) {
  return (
    <div className="w-80 lg:min-w-[24rem] h-56 relative rounded-md overflow-hidden group">
      <img
        src={img}
        alt="Screenshot do site"
        className="absolute object-cover w-full h-full"
      />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-violet-700 transition-all group-hover:flex group-hover:justify-center group-hover:items-center group-hover:h-full group-hover:bg-violet-700 group-hover:bg-opacity-50">
        <div className="hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:gap-5">
          <p className="text-xl text-center">{name}</p>

          <div className="flex flex-col lg:flex-row items-center gap-5">
            <a href={github_url} target="_blank">
              <Button placeholder="Repositório" />
            </a>
            <a href={site_url} target="_blank">
              <Button placeholder="Site" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
