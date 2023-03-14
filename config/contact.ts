export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  // twitter = 'twitter',
  // youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'sameerwasim.github.com',
  links: {
    github: 'https://github.com/sameerwasim',
    linkedin: 'https://linkedin.com/in/sameerwasim',
    email: 'mailto:sameerwaseem01@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/sameerwasim',
  },
};
