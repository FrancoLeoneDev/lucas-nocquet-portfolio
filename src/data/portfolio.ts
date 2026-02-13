export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  social: {
    linkedin: string;
  };
  profileImage: string;
}

export interface Stat {
  number: string;
  label: string;
  emoji: string;
}

export interface SkillCategory {
  category: string;
  tools: string[];
  emoji: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress";
  featured: boolean;
}

export interface JourneyItem {
  title: string;
  institution: string;
  emoji: string;
}

export interface Achievement {
  title: string;
  detail?: string;
  year?: string;
  emoji: string;
}

// ===== Personal Info =====
export const personalInfo: PersonalInfo = {
  name: "Lucas Nocquet",
  title: "3D Artist & Game Designer",
  tagline:
    "Making high quality 3D models, 3D Texturing & interactive gaming experiences",
  email: "nocquetlucas.dev@gmail.com",
  location: "Buenos Aires, Argentina",
  social: {
    linkedin: "https://www.linkedin.com/in/lucas-nocquet-a6b70621b/",
  },
  profileImage: "/profile.jpg",
};

// ===== About Me =====
export const aboutParagraphs: string[] = [
  "I'm a 3D Artist & Game Designer of Virtual Simulators with strong capabilities in both areas.",
  "Advanced proficiency in Unity HDRP with post processing & illumination, having built multiple scenarios, UI interfaces & gameplay ambience. Currently expanding my skills with ZBrush and CapCut for video editing.",
  "Skilled in 3D modeling & texturing using modern technologies and engines like Maya, Blender & Substance Painter.",
  "Driven by a deep passion for game design, virtual simulations, and with a strong commitment to delivering high-quality digital products across both fields.",
];

export const stats: Stat[] = [
  { number: "5+", label: "Game Projects", emoji: "🎮" },
  { number: "10+", label: "Technologies", emoji: "⚡" },
  { number: "2+", label: "Virtual Simulations", emoji: "🌐" },
];

// ===== Skills & Technologies =====
export const skills: SkillCategory[] = [
  {
    category: "3D Modeling",
    tools: ["Maya", "Blender", "ZBrush", "3Ds Max"],
    emoji: "🎨",
    color: "primary",
  },
  {
    category: "3D Texturing",
    tools: ["Substance Painter"],
    emoji: "🖌️",
    color: "accent",
  },
  {
    category: "Game Development",
    tools: ["Unity", "Unreal", "C#"],
    emoji: "🎮",
    color: "gold",
  },
  {
    category: "2D & 3D Animation",
    tools: ["Dragonbones", "Maya", "3Ds Max"],
    emoji: "🎬",
    color: "primary",
  },
  {
    category: "UI Interfaces",
    tools: ["Photoshop", "Krita", "Figma"],
    emoji: "🖥️",
    color: "accent",
  },
  {
    category: "Programming",
    tools: ["Python", "C#", "Visual Basic"],
    emoji: "💻",
    color: "gold",
  },
];

// ===== Projects =====
export const projects: Project[] = [
  {
    id: "memora",
    title: "Memora",
    description:
      "A 90s-set horror game where a 14-year-old boy must unmask a dark mystery and escape his nightmare. Features interactive puzzles, a unique memory mechanic that lets you relive past moments through photographs, and intense horror events across a sprawling mansion and hospital. Built by Noctis Team, a group of Argentinian developers passionate about horror storytelling.",
    image: "/projects/memora.jpg",
    tags: ["Unity", "C#", "Horror", "3D", "Game Design"],
    liveUrl: "https://memoraoficial.itch.io/memora",
    status: "in-progress",
    featured: true,
  },
  {
    id: "duats-temple",
    title: "Duats Temple",
    description:
      "A roguelike divided into four floors, each populated with rooms containing enemies and a boss at the end. Defeating the boss allows you to advance to the next floor. Losing forces you to start over from the first floor, but this is mitigated by coins, awarded for defeating enemies, which you can use at the end of the game to upgrade your abilities. You win by defeating the final boss at the top of the pyramid.",
    image: "/projects/duats-temple.jpg",
    tags: ["Unity", "C#", "Game Development", "Roguelike"],
    status: "completed",
    featured: true,
  },
  {
    id: "stage-device",
    title: "Stage Device Simulation",
    description:
      "Work done at the request of visual artist Claudia Facciolo for a presentation of her project at ArtHaus. A virtual simulation recreating stage devices with high-fidelity visual effects and interactive elements.",
    image: "/projects/stage-device.jpg",
    videoUrl:
      "https://drive.google.com/file/d/1zfeu8INadSvovctit_svVB380JYWhQer/preview",
    tags: ["Maya", "Unity", "Visual Effects"],
    status: "completed",
    featured: true,
  },
];

// ===== My Journey =====
export const journey: JourneyItem[] = [
  {
    title: "Designer and Programmer of Virtual Simulators",
    institution: "Da Vinci Multimedia Art School",
    emoji: "🎓",
  },
  {
    title: "Computer Technician",
    institution: "Luis A. Huergo Industrial Institute",
    emoji: "🔧",
  },
  {
    title: "First Certificate in English Level 1",
    institution: "Certificate in ESOL International",
    emoji: "🌍",
  },
  {
    title: "C# Programming Course for Video Games",
    institution: "UTN",
    emoji: "💻",
  },
];

// ===== Achievements =====
export const achievements: Achievement[] = [
  {
    title: "1st Diploma of Cisco ITE CFT27",
    year: "2019",
    emoji: "🏅",
  },
  {
    title: "2nd Diploma of Cisco CCNA 1 V6.0",
    year: "2020",
    emoji: "🏅",
  },
  {
    title: "C# Programming Course for Video Games",
    detail: "UTN",
    emoji: "🎮",
  },
  {
    title: "Designer and Programmer of Virtual Simulators",
    detail: "Da Vinci Multimedia Art School",
    emoji: "🎓",
  },
  {
    title: "Computer Technician",
    detail: "Luis A. Huergo Industrial Institute",
    emoji: "🔧",
  },
  {
    title: "Diploma AACI Level Senior 6 - B2 CEFR",
    detail: "Accreditation exams in AACI & CLE",
    emoji: "🌍",
  },
  {
    title: "First Certificate in English Level 1",
    detail: "Certificate in ESOL International",
    emoji: "📜",
  },
];
