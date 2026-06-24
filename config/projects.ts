import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export enum ActivityStatus {
  active = 'active',
  semiActive = 'semi-active',
  inactive = 'inactive',
}

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
  status: ActivityStatus;
}

export const projects: Project[] = [
  {
    title: 'Gratuity Guru: Tip & Split',
    slug: 'gratuity-guru',
    website:
      'https://play.google.com/store/apps/details?id=com.sameerwasim.gratuityguru',
    shortDescription:
      'Fast, ad-free tip and split bill calculator. Works 100% offline with custom tip presets, share results, and dark mode.',
    stack: [Stack.reactnative, Stack.javascript],
    deployment: {
      android:
        'https://play.google.com/store/apps/details?id=com.sameerwasim.gratuityguru',
    },
    status: ActivityStatus.active,
  },
];
