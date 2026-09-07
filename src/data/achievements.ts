export type Achievement = {
  title: string;
  issuer: string;
  issued?: string;
  category: string;
  skills?: string[];
  description: string;
  certificateUrl?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Technical Documentation",
    issuer: "Google Sites",
    category: "Documentation",
    description:
      "A collection of technical documentation and supporting project information.",
      certificateUrl: "https://sites.google.com/view/book-claim-supply-chain-lets/"
  },
  {
    title: "ReFi Leaders",
    issuer: "Frankfurt School Centre for Digital Economics",
    issued: "Dec 2024",
    category: "Web3 / Blockchain",
    description:
      "Successfully completed the ReFi Leaders program organized by Web3Talents and backed by the Frankfurt School Centre for Digital Economics.",
    certificateUrl:
      "https://drive.google.com/drive/folders/1kIymEblgdparDCVyLuqfpp0XfuuIlBqt?usp=sharing"
  },
    {
      title: "IBMCE CEPYT1IN Certificate",
      issuer: "IBM",
      issued: "Mar 2023",
      category: "Technical",
      description:
        "IBM certification demonstrating technical and professional development.",
      certificateUrl:
        "https://drive.google.com/file/d/1kmx1s5q-4jyYMg7mhLmESm3_RctlS7FL/view?usp=sharing"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      issued: "Oct 2022",
      category: "Cloud & Computing",
      description:
        "NPTEL certification focused on cloud computing concepts and technologies.",
      certificateUrl:
        "https://drive.google.com/file/d/1Fp8RF6XQ6F_UHmWG22HdiP259VWGSJaT/view?usp=sharing"
    },
    {
      title: "Employability Skill Development",
      issuer: "Zensar Technologies",
      issued: "Jul 2022",
      category: "Software Development",
      skills: ["SQL", "Core Java"],
      description:
        "Technical and professional skill development program covering SQL and Core Java.",
      certificateUrl:
        "https://drive.google.com/file/d/1c8I2ldXXvjPl6L_4jNQ9C2fPuS_m8smT/view"
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "Coursera",
      category: "Programming",
      description:
        "Course focused on fundamental programming concepts using Python.",
      certificateUrl: ""
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      issued: "Jan 2022",
      category: "Programming",
      skills: ["MATLAB", "Simulink"],
      description:
        "Foundational certification covering MATLAB and Simulink.",
      certificateUrl:
        "https://drive.google.com/drive/u/0/folders/1aW3C1zEFLBMcA-I7R9IdwIDqluaMJNzV"
    }
  ];

