import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jonathan Cover",
  EMAIL: "jonathancover@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Jonathan Cover's portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done for the last 13 years.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/jonathancover",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/Dearthtacular"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jonathancover",
  }
];
