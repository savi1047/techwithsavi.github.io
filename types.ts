export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  duration: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  descriptionPoints: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  details: string; // e.g., "Distinction | 2024"
  relevantCourses?: string[];
}

export interface CertificationItem {
  name: string;
  issuerAndYear?: string; // e.g., "(LinkedIn)" or "(2025)"
  certificateLink?: string; // Optional link to certificate
}

export interface CvData {
  name: string;
  tagline: string;
  contact: ContactInfo;
  professionalSummary: string;
  technicalSkills: { [category: string]: string[] };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
