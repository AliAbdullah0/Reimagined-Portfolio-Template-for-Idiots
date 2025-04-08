export const portfolioData = {
  header: {
    title: "Aashir Faisal.",
    subtitle: "Web Developer.",
    intro: "Welcome to my creative space!",
  },
  sections: [
    {
      id: "intro",
      title: "About Me...",
      content: "I'm a passionate web developer, currently studying Computer Science, and constantly learning new technologies.",
      alignment: "left",
      dark: false,
    },
    {
      id: "projects",
      title: "My Projects...",
      content: "Explore some of my recent projects including hotel websites, coding platforms, and AI-powered applications.",
      alignment: "right",
      dark: false,
    },
    {
      id: "skills-ground",
      title: "Skills in Action.",
      content: "I specialize in full-stack development, utilizing technologies like Next.js, React, Tailwind CSS, Node.js, and more.",
      alignment: "left",
      dark: false,
      isGround: true,
    },
    {
      id: "blueprint",
      title: "The Nitty Gritty.",
      content: "Let’s dive into the details...",
      alignment: "left",
      dark: true,
      isBlueprint: true,
      subSections: [
        {
          id: "experience",
          title: "Experience",
          content: "Developing web applications, building shop inventory systems, and working on AI-driven coding agents.",
        },
        {
          id: "tools",
          title: "Tools",
          content: "React.js, Next.js, Tailwind CSS, Node.js, MongoDB, Supabase, and more.",
        },
        {
          id: "education",
          title: "Education",
          content: "Grade 12 Computer Science student at Bahria College E8, Islamabad.",
        },
      ],
    },
    {
      id: "end",
      title: "Finish.",
      content: "",
      alignment: "left",
      dark: false,
      isEnd: true,
      credits: [
        {
          text: "Created by",
          link: "https://github.com/AliAbdullah0",
          label: "Ali Abdullah",
        },
        {
          text: "Animated with",
          link: "https://greensock.com/scrolltrigger/",
          label: "GSAP ScrollTrigger",
        },
      ],
    },
  ],
};
