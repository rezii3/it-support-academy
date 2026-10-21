export interface KeyTerm {
  termKa: string;
  termEn: string;
  definitionKa: string;
}

export interface LessonSection {
  heading: string;
  content: string;
  codeOrCommand?: string;
  proTip?: string;
  warning?: string;
}

export interface PracticalScenario {
  title: string;
  ticketDescription: string;
  solutionSteps: string[];
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  questionText: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  moduleId: string;
  title: string;
  passingScorePercent: number;
  questions: Question[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  order: number;
  title: string;
  durationMinutes: number;
  summary: string;
  objectives: string[];
  sections: LessonSection[];
  keyTerms: KeyTerm[];
  practicalScenario?: PracticalScenario;
  quiz: Quiz;
}

export interface Module {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  estimatedHours: number;
  lessons: Lesson[];
}

export interface QuizAttemptResult {
  quizId: string;
  lessonId: string;
  moduleId: string;
  scorePercent: number;
  passed: boolean;
  correctAnswersCount: number;
  totalQuestionsCount: number;
  completedAt: string;
}

export interface Progress {
  completedLessonIds: string[];
  completedModuleIds: string[];
  quizResults: Record<string, QuizAttemptResult>;
  lastVisitedModuleId: string | null;
  lastVisitedLessonId: string | null;
  totalXp: number;
  updatedAt: string;
}