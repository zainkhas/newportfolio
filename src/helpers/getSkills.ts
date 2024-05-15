export const getSkills = (skills: string[]): [string[], string[]] => [
  skills.slice(0, Math.ceil(skills.length / 2)),
  skills.slice(Math.ceil(skills.length / 2))
];
