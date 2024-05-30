"use client";
import React, { useEffect, useState } from "react";
import Brain from "../background/brain";
import ArticleCard from "./article-card";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("https://www.simula.live/api/gswxypw8kzgmqcfx/articles", {
        headers: {
          "Authorization": "a8852d00.69925a22539ce544a1e0bc47df1575b72cd5fd39ab9c885bbef55f0bc745750c"
        }
      });

      const data = await res.json();

      setArticles(data.articles);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="snap-start w-screen lg:h-screen relative px-4 sm:px-10 md:px-16 lg:px-24 pt-32">
      <Brain className="z-[-1] absolute right-[150px] bottom-[150px] w-96 h-96" />
      <div className=" bg-zinc-600/40 rounded-xl p-3">
        <div className="w-full px-3 py-2 flex space-x-3">
          <div className="mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path stroke="url(#myGradient)" strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
          </div>

          <div className="text-md">
            <p className="text-gray-400 pb-2 font-semibold">Latest Articles</p>

            <div className="mt-4 space-y-3 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5">
              {
                articles.map((item, index) => (
                  <ArticleCard article={item} key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}