
import React, { useState } from 'react';
import { CvData, ContactInfo, ExperienceItem, ProjectItem, EducationItem, CertificationItem } from './types';
import { 
  IconGitHub, IconLinkedIn, IconMail, IconPhone, IconExternalLink,
  IconHome, IconSearch, IconLibrary, IconSpotifyLogo, IconPlayCircle, IconUser 
} from './components/icons';

const cvData: CvData = {
  name: "Savi Savi",
  tagline: "Financial Data Analysis, Risk Modeling, and Valuation Specialist",
  contact: {
    email: "khannasavi2001@gmail.com",
    phone: "07436590899",
    location: "London, UK",
    githubUrl: "https://github.com/savisavi", // Actual link
    linkedinUrl: "https://linkedin.com/in/savisavi" // Actual link
  },
  professionalSummary: "Highly analytical and detail-oriented graduate with a strong foundation in financial data analysis, risk modeling, and valuation, leveraging advanced skills in SQL, Python, and Excel. Proven ability to extract insights from complex financial datasets (e.g., SEC filings, market data) and translate them into actionable recommendations. Eager to apply robust analytical capabilities and a keen interest in securitization to contribute to transaction execution and financial analysis within Citi's Capital Markets team.",
  technicalSkills: {
    "Data Analysis": ["SQL", "Python", "R Programming", "Power BI", "Excel"],
    "Data Processing": ["ETL", "Data Modeling", "Data Warehousing", "Data Cleaning"],
    "Visualization": ["Tableau", "Power BI DAX", "Statistical Analysis", "Reporting"],
    "Database": ["SQL Server", "MongoDB", "Cosmos DB", "Database Design"],
    "Cloud & Tools": ["Azure", "AWS", "Git", "Jupyter Notebooks"],
    "Business Analytics": ["KPI Monitoring", "Financial Reporting", "Predictive Analytics"]
  },
  experience: [
    { role: "Senior IT Technician", company: "GBS", location: "London", duration: "Sep 2023 - Present", points: ["Deployed Azure Kubernetes (AKS) clusters for microservices, ensuring 99.9% uptime for 25K+ devices.", "Implemented ISO 27001 controls via Azure Security Center, reducing vulnerabilities by 40%.", "Scripted Python/Ansible workflows to auto-resolve 250+ tickets, cutting manual effort by 40%.", "Designed Local DNS servers to reduce network latency by 25% across campuses."] },
    { role: "IT Technician", company: "GBS", location: "London", duration: "Jun 2022 - Sep 2023", points: ["Led Azure adoption workshops, reducing team onboarding time by 25%.", "Resolved AWS/Azure infrastructure issues, achieving 95% SLA compliance."] },
    { role: "Account Manager", company: "Eco Target Ltd", duration: "Jun 2021 - Jun 2022", points: ["Drove 15% client growth by aligning tech solutions with business."]}
  ],
  projects: [
    { title: "Better Buy: A Novel Stock Value Joint-Analysis and Comparison Tool", descriptionPoints: ["Performs complete comparisons of competitive strategy, financial strength, growth potential, and valuation of two companies through fundamental and technical analysis.", "Wrote data parser and reader to download 10-Q and 10-K SEC filings and store them in pandas DataFrame, as well as scripts to append certain business performance metrics for trend analysis.", "Designed risk-analysis models using Monte-Carlo Simulations and implemented visualizations using matplotlib and Seaborn.", "Combined data with experts' opinions and shareholder sentiment on business strategy and company/management direction to make final \"better buy\" decision."]},
    { title: "Risk/Return Analysis and Predictions for 'FAANG' Stocks", descriptionPoints: ["Used pandas Dataframe to represent adjusted closing prices and compute moving averages, daily returns, and associated risk of 'FAANG' tech companies.", "Created visual representations of comparative daily returns and single-stock analysis using Matplotlib, as well as more complex heatmaps and distribution plots using Seaborn.", "Compared and plotted risk of investment between simple return analysis techniques and Monte-Carlo simulations."]}
  ],
  education: [
    { degree: "BSc (Hons) Computing Systems with Diploma in Professional Practice", institution: "Ulster University London", details: "Distinction | 2024", relevantCourses: ["Data Mining & Analytics", "Statistical Analysis", "Database Management Systems", "Business Intelligence"]}
  ],
  certifications: [
    { name: "AZ-104: Microsoft Azure Administrator", issuerAndYear: "(2025)", certificateLink: "#" },
    { name: "SQL for Data Analysis", issuerAndYear: "(LinkedIn)", certificateLink: "#" },
    { name: "Power Bi", issuerAndYear: "(LinkedIn)", certificateLink: "#" },
    { name: "AZ-900: Microsoft Azure Fundamentals", issuerAndYear: "(2024)", certificateLink: "#" },
    { name: "ISO 27001:2022 Cybersecurity (Annex A Controls)", certificateLink: "#" },
    { name: "React Native (Mobile Finance Apps)", certificateLink: "#" }
  ]
};

type ViewType = 'home' | 'experience' | 'skills' | 'projects' | 'education' | 'certifications';

interface SidebarItemConfig {
  id: string; // Unique key for the item, e.g., "nav_home", "header_library"
  label: string;
  icon?: React.ReactNode; // Optional: not all items (e.g., sub-items) have icons
  viewId?: ViewType; // The ViewType this item navigates to, if applicable
  disabled?: boolean;
  isHeader?: boolean;
  parent?: string; // The `id` of the parent item, e.g., "header_library"
}

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems: SidebarItemConfig[] = [
    { id: 'nav_home', viewId: 'home', label: 'Home', icon: <IconHome /> },
    { id: 'nav_search', label: 'Search', icon: <IconSearch />, disabled: true }, // Thematic, no viewId
    { id: 'header_library', label: 'Your Library', icon: <IconLibrary />, isHeader: true, disabled: true }, // Thematic header, no viewId
    { id: 'sub_experience', viewId: 'experience', label: 'Career Journey', parent: 'header_library'},
    { id: 'sub_skills', viewId: 'skills', label: 'Skillset Mix', parent: 'header_library' },
    { id: 'sub_projects', viewId: 'projects', label: 'Project Highlights', parent: 'header_library' },
    { id: 'sub_education', viewId: 'education', label: 'Academic Records', parent: 'header_library' },
    { id: 'sub_certifications', viewId: 'certifications', label: 'Credentials', parent: 'header_library' },
  ];

  return (
    <aside className="w-64 bg-black text-neutral-400 p-6 space-y-4 flex-shrink-0 h-full overflow-y-auto">
      <a href="#" onClick={() => setActiveView('home')} className="flex items-center space-x-2 text-white mb-8 hover:text-green-500 transition-colors">
        <IconSpotifyLogo className="w-8 h-8 text-green-500" />
        <span className="font-bold text-xl">Savi's Profile</span>
      </a>
      <nav>
        <ul>
          {navItems.filter(item => !item.parent).map(item => (
            <li key={item.id} className={`${item.isHeader ? 'mt-6 mb-2 text-xs uppercase tracking-wider font-semibold text-neutral-500' : ''}`}>
              <button
                onClick={() => {
                  if (item.viewId && !item.disabled) {
                    setActiveView(item.viewId);
                  }
                }}
                disabled={item.disabled || !item.viewId} 
                aria-current={item.viewId && activeView === item.viewId ? 'page' : undefined}
                className={`flex items-center space-x-3 w-full text-left py-2 px-3 rounded-md transition-colors
                  ${(item.disabled || !item.viewId) ? 'cursor-not-allowed opacity-50' : 'hover:bg-neutral-800 hover:text-white'}
                  ${item.viewId && activeView === item.viewId && !item.disabled ? 'bg-neutral-700 text-white font-semibold' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
              {item.id === 'header_library' && ( 
                <ul className="pl-4 mt-2 space-y-1">
                  {navItems.filter(subItem => subItem.parent === 'header_library').map(subItem => (
                     <li key={subItem.id}>
                        <button
                          onClick={() => {
                            if (subItem.viewId) { 
                              setActiveView(subItem.viewId);
                            }
                          }}
                          aria-current={subItem.viewId && activeView === subItem.viewId ? 'page' : undefined}
                           className={`w-full text-left py-1.5 px-2 rounded-md transition-colors text-sm
                           ${subItem.viewId && activeView === subItem.viewId ? 'text-green-400 font-semibold' : 'hover:text-white'}`}
                        >
                          {subItem.label} 
                        </button>
                     </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const SectionCard: React.FC<{title: string, subtitle?: string, children: React.ReactNode, icon?: React.ReactNode}> = ({ title, subtitle, children, icon }) => (
  <div className="bg-neutral-800 p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      {icon && <div className="mr-3 text-green-500">{icon}</div>}
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-neutral-400 text-sm">{subtitle}</p>}
      </div>
    </div>
    {children}
  </div>
);

const TrackListItem: React.FC<{ title: string; artist?: string; album?: string; duration?: string; onClick?: () => void; children?: React.ReactNode; link?: string }> = ({ title, artist, album, duration, onClick, children, link }) => (
  <div className={`flex items-center justify-between p-3 rounded-md hover:bg-neutral-700/50 group transition-colors ${onClick || link ? 'cursor-pointer' : ''}`} onClick={onClick}>
    <div className="flex items-center space-x-4">
      <div className="text-neutral-500 group-hover:text-green-500 transition-colors">
         { onClick || link ? <IconPlayCircle className="w-6 h-6"/> : <span className="w-6 h-6 inline-block text-center text-sm">#</span> }
      </div>
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline">{title} <IconExternalLink className="w-3 h-3 ml-0.5 inline-block text-neutral-500" /></a>
        ) : (
          <h3 className="text-white font-medium">{title}</h3>
        )}
        {artist && <p className="text-neutral-400 text-sm">{artist}</p>}
      </div>
    </div>
    {album && <p className="text-neutral-400 text-sm hidden md:block">{album}</p>}
    {duration && <p className="text-neutral-400 text-sm">{duration}</p>}
    {children}
  </div>
);


const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const { name, tagline, contact, professionalSummary, technicalSkills, experience, projects, education, certifications } = cvData;
  const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <div className="space-y-8">
            <SectionCard title={name} subtitle={tagline} icon={<IconUser className="w-8 h-8"/>}>
              <p className="text-neutral-300 leading-relaxed my-4">{professionalSummary}</p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <a href={`mailto:${contact.email}`} className="flex items-center space-x-2 text-neutral-400 hover:text-green-400 transition-colors"><IconMail className="w-5 h-5"/> <span>{contact.email}</span></a>
                  <a href={`tel:${contact.phone}`} className="flex items-center space-x-2 text-neutral-400 hover:text-green-400 transition-colors"><IconPhone className="w-5 h-5"/> <span>{contact.phone}</span></a>
                  {contact.githubUrl && <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-neutral-400 hover:text-green-400 transition-colors"><IconGitHub className="w-5 h-5"/> <span>GitHub</span></a>}
                  {contact.linkedinUrl && <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-neutral-400 hover:text-green-400 transition-colors"><IconLinkedIn className="w-5 h-5"/> <span>LinkedIn</span></a>}
                </div>
              </div>
            </SectionCard>
          </div>
        );
      case 'experience':
        return (
          <SectionCard title="Career Journey" subtitle="Professional Experience" icon={<IconLibrary className="w-8 h-8"/>}>
            <div className="space-y-1 mt-4">
              {experience.map((item, index) => (
                <TrackListItem key={index} title={item.role} artist={item.company} album={item.location} duration={item.duration}>
                  {item.points && (
                    <details className="w-full mt-2 ml-10 text-sm">
                      <summary className="text-neutral-500 cursor-pointer hover:text-neutral-300">Details</summary>
                      <ul className="list-disc list-inside mt-1 text-neutral-400 space-y-1 pl-2">
                        {item.points.map((point, pIndex) => <li key={pIndex}>{point}</li>)}
                      </ul>
                    </details>
                  )}
                </TrackListItem>
              ))}
            </div>
          </SectionCard>
        );
      case 'skills':
        return (
          <SectionCard title="Skillset Mix" subtitle="Technical Proficiencies" icon={<IconPlayCircle className="w-8 h-8"/>}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-neutral-700/30 p-4 rounded">
                  <h4 className="text-md font-semibold text-green-400 mb-2">{category}</h4>
                  <p className="text-neutral-300 text-sm">{skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        );
      case 'projects':
        return (
           <SectionCard title="Project Highlights" subtitle="Featured Work" icon={<IconLibrary className="w-8 h-8"/>}>
            <div className="space-y-1 mt-4">
              {projects.map((item, index) => (
                <TrackListItem key={index} title={item.title} artist="Personal Project">
                   <details className="w-full mt-2 ml-10 text-sm">
                      <summary className="text-neutral-500 cursor-pointer hover:text-neutral-300">Details</summary>
                      <ul className="list-disc list-inside mt-1 text-neutral-400 space-y-1 pl-2">
                        {item.descriptionPoints.map((point, pIndex) => <li key={pIndex}>{point}</li>)}
                      </ul>
                    </details>
                </TrackListItem>
              ))}
            </div>
          </SectionCard>
        );
      case 'education':
        return (
          <SectionCard title="Academic Records" subtitle="Education & Qualifications" icon={<IconLibrary className="w-8 h-8"/>}>
             <div className="space-y-1 mt-4">
              {education.map((item, index) => (
                <TrackListItem key={index} title={item.degree} artist={item.institution} duration={item.details}>
                  {item.relevantCourses && (
                     <div className="w-full mt-2 ml-10 text-sm text-neutral-400">
                        <strong className="text-neutral-300">Relevant Courses:</strong> {item.relevantCourses.join(', ')}
                     </div>
                  )}
                </TrackListItem>
              ))}
            </div>
          </SectionCard>
        );
      case 'certifications':
        return (
          <SectionCard title="Credentials" subtitle="Certifications & Achievements" icon={<IconPlayCircle className="w-8 h-8"/>}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {certifications.map((item, index) => (
                 <TrackListItem 
                    key={index} 
                    title={item.name} 
                    artist={item.issuerAndYear} 
                    link={item.certificateLink && item.certificateLink !== '#' ? item.certificateLink : undefined}
                 />
              ))}
            </div>
          </SectionCard>
        );
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="flex h-screen bg-neutral-900 text-neutral-300 overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black">
        {renderContent()}
         <footer className="mt-16 pt-8 border-t border-neutral-700/50 text-center">
          <p className="text-xs text-neutral-500">Last updated: {lastUpdated}</p>
          <p className="text-xs text-neutral-600 mt-1">Inspired by Spotify UI | Built with React & TailwindCSS</p>
        </footer>
      </main>
      <div className="h-20 bg-neutral-800 border-t border-neutral-700 flex-shrink-0 w-full fixed bottom-0 left-0 z-10 flex items-center justify-center px-4 md:hidden">
        <p className="text-sm text-neutral-400">Exploring Savi Savi's Profile</p>
      </div>
       <div className="h-20 bg-neutral-800 border-t border-neutral-700 flex-shrink-0 w-full fixed bottom-0 left-0 z-10 hidden md:flex items-center justify-center px-4">
        <p className="text-sm text-neutral-400">Exploring Savi Savi's Profile. Full experience on desktop.</p>
      </div>
    </div>
  );
};

export default App;
