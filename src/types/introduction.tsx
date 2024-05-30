/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
const sentence1 = "I am ";
const sentence2 = "A software engineering student from Morocco at ";

const sentence3 = "I specialize in software engineering and distributed computing systems. Passionate about coding and technology, I enjoy solving complex problems and collaborating on innovative projects. Scroll Down to see my work and learn more about my journey.";
interface Token {
  type: string,
  value: string,
  link?: string
}

function toLetters(sen: string): Token[] {
  return sen.split("").map(i => ({ type: "LETTER", value: i }));
}

export const data = [
  ...toLetters(sentence1),
  { type: "NAME", value: "Abdelhadi AHRAM" },
  { type: "NEWLINE", value: "\n" },
  ...toLetters(sentence2),
  { type: "LINK", link: "https://www.enset-media.ac.ma/", value: "ENSET University." },
  { type: "NEWLINE", value: "\n" },
  ...toLetters(sentence3),
  { type: "NEWLINE", value: "\n" },
  { type: "NEWLINE", value: "\n" },
  ...toLetters("Contact me HERE:")
];