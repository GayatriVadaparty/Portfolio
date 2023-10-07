export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Crystal Metal Connect (2023)",
    techs: ["BeautifulSoup", "ExpressJS", "Python"],
    link: "https://github.com/GayatriVadaparty/Crystal_Metal_connect",
  },
  {
    title: "Ping-Pong-game",
    techs: ["JavaScript","HTML","CSS"],
    link: "https://github.com/GayatriVadaparty/ping-pong-js",
  },
  {
    title: "Real Time Chat Application",
    techs: ["ReactJS","Firebase"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
