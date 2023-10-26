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
  flutter,

  // Backend
  node,

  // frameworks
  codeigniter,
  laravel,
  flask,
  expressjs,
  jquery,

  // Cloud
  aws,

  // Generative AI
  openai,
  prompt_engineering,

  // Databases
  mysql,
  postgres,
  mongo,
  pinecone,

  // Tools
  npm,
  github,
  firebase,
}

export const WorkStack = [
  Stack.typescript,
  Stack.javascript,
  Stack.python,
  Stack.php,

  Stack.react,
  Stack.reactnative,
  Stack.nextjs,

  Stack.node,

  Stack.codeigniter,
  Stack.laravel,
  Stack.flask,

  Stack.aws,

  Stack.prompt_engineering,

  Stack.mysql,
  Stack.mongo,
  Stack.postgres,

  Stack.firebase,
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
  [Stack.flutter]: {
    value: 'Flutter',
    color: Colors.flutter,
  },

  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },

  [Stack.node]: {
    value: 'NodeJS',
    color: Colors.node,
  },

  [Stack.codeigniter]: {
    value: 'Codeigniter',
    color: Colors.codeigniter,
  },
  [Stack.laravel]: {
    value: 'Laravel',
    color: Colors.laravel,
  },
  [Stack.flask]: {
    value: 'Flask',
    color: Colors.flask,
  },
  [Stack.expressjs]: {
    value: 'ExpressJS',
    color: Colors.expressjs,
  },
  [Stack.jquery]: {
    value: 'jQuery',
    color: Colors.jquery,
  },

  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.postgres]: {
    value: 'PostgreSQL',
    color: Colors.postgres,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.pinecone]: {
    value: 'Pinecone',
    color: Colors.pinecone,
  },

  [Stack.openai]: {
    value: 'OpenAI',
    color: Colors.openai,
  },
  [Stack.prompt_engineering]: {
    value: 'Prompt Engineering',
    color: Colors.prompt_engineering,
  },

  [Stack.npm]: {
    value: 'NPM',
    color: Colors.npm,
  },
  [Stack.github]: {
    value: 'Github',
    color: Colors.github,
  },
  [Stack.firebase]: {
    value: 'Firebase',
    color: Colors.firebase,
  },
};
