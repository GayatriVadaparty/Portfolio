type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "gayatrivalp@gmail.com",
  title: "Hi, I’m Gayatri 👋",
  // profile: "/profile.webp",
  description:
    "Passionate final-year undergraduate at Andhra University pursuing a Bachelor of Technology in Computer Science. I'm actively seeking internships and full-time roles in Software Development and Research. My strong foundation in programming languages such as Python, C, Java, and R, coupled with expertise in tools like PyTorch, TensorFlow, and Git, enables me to tackle complex challenges. I have hands-on experience in various domains, from Quantum Computing and AI to Cloud Computing and Machine Learning.",
  socials: [
    {
      label: "Medium",
      link: "https://medium.com/@gayatrivalp",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gayatri-vadaparty-46ba50219",
    },
    {
      label: "Github",
      link: "https://github.com/GayatriVadaparty",
    },
  ],
};

export default presentation;
