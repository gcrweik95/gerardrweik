import React from "react";

type ProjectCardProps = {
  imgSrc: string;
};

export default function ProjectCard({ imgSrc }: ProjectCardProps) {
  return (
    <article className="relative aspect-video overflow-hidden rounded-3xl px-16 py-[1.5em]  md:rounded-[0rem] md:p-[0.2em] ">
      <img
        src={imgSrc}
        alt=""
        className="relative z-10 h-full w-full rounded-[0rem]"
      />
      <div className="mask absolute left-0 top-0 -z-10 h-full w-full bg-colorSecondaryLight opacity-80"></div>
    </article>
  );
}
