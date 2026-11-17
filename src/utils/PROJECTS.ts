import { useI18N } from "@c/i18n";
import MMAnalysis from "@imgs/money-minder/analysis.webp";
import MMDashboard from "@imgs/money-minder/dashboard.webp";
import MMLogin from "@imgs/money-minder/login.webp";
import MMMain from "@imgs/money-minder/main.webp";
import MMMobile from "@imgs/money-minder/mobile.webp";

export interface Project {
  title: string;
  body: string;
  imgs: string[];
  projectLink: string;
  githubUrl: string;
  languages: string[];
}

export const getProjects = (currentLocale: string): Project[] => {
  const { i18n } = useI18N(currentLocale);

  return i18n.PROJECTS.PROJECTS.map((project, index) => {
    const projectLinks = [
      {
        link: "https://money-minder-xi.vercel.app/",
        github: "https://github.com/callmerosendo/money-minder",
        languages: ["Angular", "Tailwind", "TypeScript"],
      },
      {
        link: "https://money-minder-api.up.railway.app/api/ping",
        github: "https://github.com/callmerosendo/money-minder-api/",
        languages: ["Jest", "NestJS", "PostgreSQL", "TypeScript"],
      },
    ];

    const imgs = [[MMMain.src, MMLogin.src, MMDashboard.src, MMAnalysis.src, MMMobile.src], []];

    return {
      title: project.TITLE,
      body: project.DESCRIPTION,
      imgs: imgs[index] ?? [],
      projectLink: projectLinks[index]?.link ?? "",
      githubUrl: projectLinks[index]?.github ?? "",
      languages: projectLinks[index]?.languages ?? [],
    };
  });
};
