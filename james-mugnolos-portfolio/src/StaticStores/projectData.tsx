interface IProjectDataLayout {
  id: number;
  name: string;
  description: string;
  githubLink: string;
}
export const ProjectData: IProjectDataLayout[] = [
  {
    id: 1,
    name: "Simple Calculator App (school Project)",
    description:
      "This project was created to test out basic Gradle, Docker, and Gitlab pipeline fuctionalities to build, test, and deploy a simple app. Click the link below and view the ReadMe.txt file to find out more.",
    githubLink: "https://github.com/JamesMugnolo/SimpleCalculator",
  },
];
