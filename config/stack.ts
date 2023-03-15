import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  python,
  php,

  // Frontend
  react,
  nextjs,
  reactnative,

  // Backend
  node,
  codeigniter,

  // Cloud
  aws,

  // Skills
  webscraping,
  webautomation,

  // Databases
  mysql,
  redis,
  postgres,
  mongo,

  // Tools
  npm,
  docker,
  githubactions,
}

export const WorkStack = [
  Stack.typescript,
  Stack.javascript,
  Stack.php,
  Stack.python,
  Stack.react,
  Stack.reactnative,
  Stack.nextjs,
  Stack.node,
  Stack.codeigniter,
  Stack.mysql,
  Stack.redis,
  Stack.aws,
  Stack.docker,
  Stack.mongo,
  Stack.githubactions,
  Stack.postgres,
  Stack.webautomation,
  Stack.webscraping,
  Stack.npm,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.php]: {
    value: 'PHP',
    color: Colors.php,
  },

  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'NextJS',
    color: Colors.nextjs,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },

  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },

  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.codeigniter]: {
    value: 'Codeigniter',
    color: Colors.codeigniter,
  },

  [Stack.webscraping]: {
    value: 'Web Scraping',
    color: Colors.webscraping,
  },
  [Stack.webautomation]: {
    value: 'Web Automation',
    color: Colors.webautomation,
  },

  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },

  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.githubactions]: {
    value: 'Github Actions',
    color: Colors.githubactions,
  },
  [Stack.npm]: {
    value: 'NPM',
    color: Colors.npm,
  },
};
