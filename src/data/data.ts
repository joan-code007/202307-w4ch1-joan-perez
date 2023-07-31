import { AnswerSection, QuestionSection } from "../types";

export const question: QuestionSection[] = [
  { id: 1, question: "La Tortilla:" },
  { id: 2, question: "En Verano:" },
];

export const answer: AnswerSection[] = [
  { id: 1, isSelected: true || false },
  { id: 2, isSelected: true || false },
];
