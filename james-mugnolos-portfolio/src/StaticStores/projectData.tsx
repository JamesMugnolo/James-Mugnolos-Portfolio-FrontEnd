interface IProjectDataLayout {
  id: number;
  name: string;
  description: string;
  githubLink: string;
}
export const ProjectData: IProjectDataLayout[] = [
  {
    id: 1,
    name: "CI/CD Calculator (school Project)",
    description:
      "Using Java to write the app, Gradle to run tests and build the app, Docker to deploy the app in a container, and GitLab Pipelines to run the Docker and Gradle Commands, I created a simple calculator app that deployed to a container for every push to the repository that had no errors. Click the link below and view the ReadMe.txt file to find out more.",
    githubLink: "https://github.com/JamesMugnolo/SimpleCalculator",
  },
];
