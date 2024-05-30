import React from "react";
import Header from "src/components/ui/header";

async function fetchAtricle() {
  try {
    const res = await fetch("https://www.simula.live/api/gswxypw8kzgmqcfx/articles/id", {
      headers: {
        "Authorization": "a8852d00.69925a22539ce544a1e0bc47df1575b72cd5fd39ab9c885bbef55f0bc745750c"
      }
    });

    const data = await res.json();

    console.log(data);

    return data.article;
  } catch (e) {
    console.log(e);
  }
}

export default async function Page() {
  const article = await fetchAtricle();

  return (
    <div>
      <Header />

      <div className="flex justify-center">
        {!article ?
          (<div className="w-[800px] pt-28">
            <div className="border border-red-500 p-3 rounded-md">Could not found the article</div>
          </div>) : (
            <div className="w-full md:w-[800px] pt-28 bg-zinc-700/40 space-y-5">
              <img src={article.image} className="p-4 md:p-0 rounded-lg w-full h-96 object-cover" />
              <div className="p-4 space-y-3">
                <h1 className="text-2xl font-semibold">{article.title}</h1>
                <h6 className="">By Abdelhadi AHRAM</h6>
                <h6 className="text-sm text-gray-400">{article.createdAt}</h6>
                <div className="pt-4 space-y-6">
                  <p key={Math.random()} className="leading-8 text-lg"><span className="pl-6"></span>{article.content}</p>
                </div>
              </div>
              <div className="space-y-2 px-3">
                <h1 className="font-medium">Comments</h1>
                {
                  !article.comments ? <></> : article.comments.map((comment: any) => (
                    <div key={Math.random()}
                      className="bg-zinc-700/80 rounded-xl p-3"
                    >
                      <div className="flex items-center space-x-2">
                        <img src={comment.author.avatar} className="w-6 h-6 rounded-full" />
                        <h3 className="font-medium">{comment.author.firstName}</h3>
                      </div>
                      {comment.content}
                    </div>
                  ))
                }
              </div>
              <div className="w-full h-24"></div>
            </div>
          )}
      </div>
    </div >
  );
}