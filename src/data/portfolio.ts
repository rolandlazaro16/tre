export const profile = {
  name: "Theresa Godfrey ADOLF",
  title: "Computer Science Engineer",
  birthplace: "Dar es Salaam, Tanzania",
  tagline:
    "Diploma graduate in Computer Science Engineering with hands-on experience in software and hardware maintenance, organizational network infrastructure, and a passion for graphics, business management, and software engineering.",
  email: "terrygodfrey078@gmail.com",
  whatsapp: "+255 657 146 544",
  whatsappLink: "https://wa.me/255657146544",
  aboutSubtitle:
    "A computer science engineering professional from Dar es Salaam, trained at St. Joseph University of Engineering & Technology with practical IT and networking experience.",
};

export const heroStats = [
  { label: "Qualification", value: "Diploma — CSE" },
  { label: "Based in", value: "Dar es Salaam, TZ" },
  { label: "Focus", value: "IT & Networks" },
] as const;

export const quickFacts = [
  { term: "Full Name", detail: profile.name },
  { term: "Birthplace", detail: profile.birthplace },
  {
    term: "University",
    detail:
      "St. Joseph University of Engineering & Technology — Diploma in Computer Science Engineering",
  },
  {
    term: "Core Skills",
    detail: "Graphics, Business Management, Software Engineering",
  },
  {
    term: "Specialization",
    detail: "Software & hardware maintenance, LAN and network infrastructure",
  },
] as const;

export const aboutParagraphs = [
  `I am ${profile.name}, originally from ${profile.birthplace}. I completed my education from primary school through A-level secondary school in Tanzania before pursuing higher studies in technology.`,
  "I earned a Diploma in Computer Science Engineering from St. Joseph University of Engineering & Technology, where I built a strong foundation in computing, systems, and engineering principles.",
  "My professional experience includes software and hardware maintenance, as well as maintaining organizational network infrastructure—troubleshooting connectivity issues and installing cables for LAN setups.",
] as const;

export const education = [
  {
    level: "Primary School",
    institution: "St. Ann's Primary School",
    description: "Foundation in core academics and personal development in Dar es Salaam.",
  },
  {
    level: "O-Level Secondary",
    institution: "Kilomen Girl's Secondary School",
    description: "Ordinary level secondary education.",
  },
  {
    level: "A-Level Secondary",
    institution: "Kondoa Girls Secondary School",
    description: "Advanced level secondary education.",
  },
  {
    level: "Diploma",
    institution: "St. Joseph University of Engineering & Technology",
    field: "Computer Science Engineering",
    description:
      "Diploma studies in computer science engineering, covering software development, systems, and applied computing.",
    highlight: true,
  },
] as const;

export const skills = [
  {
    name: "Graphics",
    description:
      "Creative and visual design skills for digital content, presentations, and visual communication.",
    icon: "graphics",
  },
  {
    name: "Business Management",
    description:
      "Understanding of business operations, planning, and organizational management in professional settings.",
    icon: "business",
  },
  {
    name: "Software Engineering",
    description:
      "Development and maintenance of software solutions, with practical experience in systems support and engineering.",
    icon: "software",
  },
] as const;

export const experienceItems = [
  {
    title: "Software & Hardware Maintenance",
    description:
      "Maintaining and supporting computer systems, diagnosing hardware and software issues, and ensuring reliable day-to-day IT operations.",
  },
  {
    title: "Network Infrastructure Maintenance",
    description:
      "Maintenance of organizational network infrastructure including troubleshooting network connectivity problems and cable installation for LAN setups.",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
