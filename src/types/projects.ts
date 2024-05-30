export interface ProjectType {
  image: string,
  name: string,
  url: string,
  description: string,
  status: string
}

export const projects: ProjectType[] = [
  {
    image: "/images/lullup.png",
    name: "Lullup",
    url: "https://www.lullup.com/",
    description: "A project that generates stunning bedtime stories for kids",
    status: "Finished"
  }, {
    image: "/images/simula.png",
    name: "Simula",
    url: "https://www.lullup.com/",
    description: "Helps developers to generate mock data, and receive it with RESTful API",
    status: "Under Development"
  }, {
    image: "/images/heiconvert.png",
    name: "HEIConvert",
    url: "https://heiconvert.com/",
    description: "A website for converting .Heic format to a png/jpeg formats built with javascript",
    status: "Finished"
  }, {
    image: "/images/ziphine.png",
    name: "Ziphine",
    url: "https://ziphine.vercel.app/",
    description: "A platform that offers tools to deal with XML files",
    status: "Under Development"
  }, {
    image: "/images/blockly.png",
    name: "Blockly",
    url: "https://abdelhadi-ahram.github.io/blockly",
    description: "Simplify and visualize algorithms using a block language",
    status: "Under Development"
  }
];