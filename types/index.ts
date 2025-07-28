export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  description: string;
}

export interface Skill {
  category: string;
  icon: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  status?: "active" | "maintenance" | "completed";
  role: string;
  description: string;
  achievements: Achievement;
  techStack: string[];
  links: Array<{
    label: string;
    url: string;
  }>;
  images?: string[];
}

export interface Award {
  id: string;
  title: string;
  project: string;
  description: string;
  period: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  period: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}
