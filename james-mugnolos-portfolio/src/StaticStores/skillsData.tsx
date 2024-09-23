export enum comfortTypes {
  VC = "Very Comfortable",
  C = "Comfortable",
  SC = "Somewhat Comfortable",
}
export enum skillTypes {
  LANGUAGES = "Languages",
  TOOLS = "Tools",
  FRAMEWORKS = "Frameworks",
  CERTIFICATIONS = "Certifications",
}

interface ISkillsDataLayout {
  id: number;
  name: string;
  comfortLevel: comfortTypes | string;
  type: skillTypes;
}
export const SkillData: ISkillsDataLayout[] = [
  {
    id: 1,
    name: "C#",
    comfortLevel: comfortTypes.C,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 2,
    name: "JavaScript",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 3,
    name: "TypeScript",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 4,
    name: "Java",
    comfortLevel: comfortTypes.C,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 5,
    name: "C++",
    comfortLevel: comfortTypes.C,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 6,
    name: "HTML/CSS",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 7,
    name: "SQL",
    comfortLevel: comfortTypes.C,
    type: skillTypes.LANGUAGES,
  },
  {
    id: 8,
    name: "Postman",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.TOOLS,
  },
  {
    id: 9,
    name: "Jira",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.TOOLS,
  },
  {
    id: 10,
    name: "PostgeSQL",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.TOOLS,
  },
  {
    id: 11,
    name: "Microsoft SQL Server",
    comfortLevel: comfortTypes.C,
    type: skillTypes.TOOLS,
  },
  {
    id: 12,
    name: "GitHub",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.TOOLS,
  },
  {
    id: 13,
    name: "AWS",
    comfortLevel: comfortTypes.SC,
    type: skillTypes.TOOLS,
  },
  {
    id: 14,
    name: "DockerHub",
    comfortLevel: comfortTypes.SC,
    type: skillTypes.TOOLS,
  },
  {
    id: 15,
    name: "React",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.FRAMEWORKS,
  },
  {
    id: 16,
    name: "Node",
    comfortLevel: comfortTypes.VC,
    type: skillTypes.FRAMEWORKS,
  },
  {
    id: 17,
    name: ".Net Core",
    comfortLevel: comfortTypes.SC,
    type: skillTypes.FRAMEWORKS,
  },
  {
    id: 18,
    name: "Git",
    comfortLevel: comfortTypes.C,
    type: skillTypes.FRAMEWORKS,
  },
  {
    id: 19,
    name: "AWS Certified Cloud Practicionter",
    comfortLevel: "2023-2026",
    type: skillTypes.CERTIFICATIONS,
  },
  {
    id: 20,
    name: "Angular",
    comfortLevel: comfortTypes.C,
    type: skillTypes.FRAMEWORKS,
  },
  {
    id: 21,
    name: "Spring",
    comfortLevel: comfortTypes.C,
    type: skillTypes.FRAMEWORKS,
  },
  {
    id: 22,
    name: "JDBC",
    comfortLevel: comfortTypes.C,
    type: skillTypes.FRAMEWORKS,
  },
];
