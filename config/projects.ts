import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository?: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner?: string;
  description?: string;
  shortDescription: string;
  repository?: Maybe<string>;
  stack: Stack[];
  responsibilities?: string[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots?: string[];
  deployment?: Deployment;
  subProjects?: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'MooziLyrics',
    slug: 'moozilyrics',
    shortDescription:
      'MooziLyrics.com is a platform that allows users to translate song lyrics into their preferred language.',
    stack: [
      Stack.javascript,
      Stack.mongo,
      Stack.nextjs,
      Stack.openai,
      Stack.prompt_engineering,
    ],
    banner: '/static/projects/moozilyrics/banner.webp',
    website: 'https://moozilyrics.com',
  },
  {
    title: 'Beltway Brief',
    slug: 'beltwaybrief',
    shortDescription:
      'Beltway Brief is a platform offering AI-powered executive news briefs focused on the top political stories of the day.',
    stack: [
      Stack.python,
      Stack.flask,
      Stack.mongo,
      Stack.pinecone,
      Stack.openai,
      Stack.prompt_engineering,
    ],
    // banner: '/static/projects/beltwaybrief/banner.webp',
    website: 'https://beltwaybrief.com/',
  },
  {
    title: 'ApplyBro',
    slug: 'applybro',
    shortDescription:
      'ApplyBro is a resume-building platform designed to help job seekers create standout resumes quickly and easily.',
    stack: [
      Stack.flutter,
      Stack.mongo,
      Stack.firebase,
      Stack.node,
      Stack.javascript,
      Stack.openai,
      Stack.prompt_engineering,
    ],
    banner: '/static/projects/applybro/banner.webp',
    website: 'https://applybro.com/',
  },
  {
    title: 'CityBook',
    slug: 'citybook',
    shortDescription:
      'Citybook is a classified business listing and event search website.',
    stack: [
      Stack.javascript,
      Stack.php,
      Stack.mysql,
      Stack.react,
      Stack.reactnative,
      Stack.node,
    ],
    banner: '/static/projects/citybook/banner.webp',
    website: 'https://citybook.pk',
  },
  {
    title: 'AutoOnes',
    slug: 'autoones',
    banner: '/static/projects/autoones/banner.webp',
    website: 'https://autoones.com',
    shortDescription:
      'AutoOnes.com is a Pakistani-based online platform that specializes in buying, selling of automotive vehicles',
    stack: [Stack.javascript, Stack.php, Stack.mysql, Stack.react, Stack.node],
  },
  {
    title: 'List Networks',
    slug: 'list-networks',
    banner: '/static/projects/ln/banner.png',
    website: 'https://listnetworks.com',
    shortDescription:
      'List Networks is an online marketplace for businesses to submit their networks and get leads from customers globally, offering event listings, coupons, deals, reviews, and more.',
    stack: [Stack.php, Stack.codeigniter, Stack.mysql],
  },
  {
    title: 'My Auction Sheet',
    slug: 'my-auction-sheet',
    banner: '/static/projects/mas/banner.webp',
    website: 'https://myauctionsheet.com',
    shortDescription:
      'My Auction Sheet is a website providing access to auction sheets for Japanese imported vehicles to help buyers make informed decisions about the condition of the vehicle.',
    stack: [Stack.javascript, Stack.php, Stack.mysql, Stack.react, Stack.node],
  },
  {
    title: 'AutoDeals',
    slug: 'autodeals',
    banner: '/static/projects/autodeals/banner.webp',
    website: 'https://autodeals.pk',
    shortDescription:
      'Autodeals.pk is a website for car dealers and sellers to list and buyers to purchase cars in Pakistan, offering features such as browsing, contacting sellers, and resources for buyers and sellers.',
    stack: [Stack.javascript, Stack.php, Stack.mysql, Stack.react, Stack.node],
  },
];
