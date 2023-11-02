import { contact, Contact } from './contact';
import { Course, courses } from './courses';
import { Project, projects } from './projects';
import { Highlight, highlights } from './highlights';

interface Config {
  contact: Contact;
  projects: Project[];
  courses: Course[];
  highlights: Highlight[];
}

const config: Config = {
  contact,
  projects,
  courses,
  highlights,
};

export const POSTS_PER_PAGE = 5;

export default config;
