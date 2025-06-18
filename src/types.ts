
export interface Project {
    title: string;
    description: string;
    about: string; // About the Game
    contributions: string; // My Contributions
    image: string;
    videoUrl?: string;
    playUrl?: string; // Optional Play URL
    gameCode?: string; // Optional Game Code
    subsection: string;
    gameDetails?: {  // Optional Game Details
      gameMode?: string;
      genre?: string;
      maxPlayers?: number;
      sessionLength?: string;
      
    };
    keyFeatures?: string[]; // Key Features
    showContributionIntro?: boolean;
  }
  
  export interface ProjectsData {
    unreal: Project[];
    unity?: Project[]; // Add other sections as needed
    uefn?: Project[];
  }