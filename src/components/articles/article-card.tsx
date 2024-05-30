import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ArticleType } from "src/types/articles";

export default function ArticleCard({ article }: { article: ArticleType }) {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ opacity: 1, y: 0 });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: 0, y: -20 });
  };

  return (
    <motion.div
      className="rounded-md overflow-hidden bg-zinc-600/30"
    >
      <Link href={"/articles/1"}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative w-full h-36 ">
          <img src={article.image}
            className="w-full h-full object-cover"
            alt={article.title} />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 0.3 }}
            className="z-20 absolute inset-0 bg-zinc-800/50 flex flex-col justify-center items-center">
            <p className="font-semibold">Read the article</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </motion.div>
        </div>
      </Link>
      <div className="px-3 py-2 space-y-1">
        <h2 className="font-semibold">{article.title}</h2>
        <p className="text-sm">{article.content.substring(0, 100)}</p>
      </div>
    </motion.div>
  );
}