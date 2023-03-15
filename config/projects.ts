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
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'CityBook',
    slug: 'citybook',
    banner: '/static/projects/citybook/banner.webp',
    website: 'https://citybook.pk',
    description:
      'Welcome to CityBook.pk, the leading business listing and event submission platform in Pakistan. Our goal is to help local businesses compete and win by connecting them with a wider audience. We offer a well-organized structure of data for products, services, and events, making it easy for users to search for local businesses, products, and services across Pakistan.',
    shortDescription:
      'Citybook is a classified business listing and event search website.',
    repository: '',
    stack: [
      Stack.javascript,
      Stack.php,
      Stack.mysql,
      Stack.react,
      Stack.reactnative,
      Stack.node,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/citybook/banner.webp',
      'https://play-lh.googleusercontent.com/aP4LXbs55tz1UKxwD0fK10B31OEd8VOz4HCWzIl517baCJpDRlCcSjYUO77LInzMdg=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/K3R2BcCHxCG04xpyWfdxdfmZDDo77TvuOVyXrtTIzJTnm0gxInkuXpLfW6ZtIYODNk0=w1052-h592-rw',
      'https://play-lh.googleusercontent.com/EexziyroE6Mz1xdE4_-zzR_0vQt-lw_Kj_paC13ff6pX7ujSvbxdq4S-BzP6i1PNjA=w1052-h592-rw',
    ],
    deployment: {
      web: 'https://citybook.pk',
      android: 'https://play.google.com/store/apps/details?id=pk.citybook',
    },
    subProjects: [
      {
        title: 'CB - Ringtones & Images/Videos',
        description:
          'Explore stock photos, reels, and videos by categories. People, Nature, Technology, Wallpaper, Products, Cars, Bikes, and much more to explore. All images are high-quality and can be used in your personal project or commercial.',
        deployment: {
          android:
            'https://play.google.com/store/apps/details?id=pk.citybook.ri',
        },
      },
    ],
  },
  {
    title: 'AutoOnes',
    slug: 'autoones',
    banner: '/static/projects/autoones/banner.png',
    website: 'https://autoones.com',
    description:
      'AutoOnes.com is a Pakistani-based online platform that specializes in buying, selling, and discussing cars, bikes, and other automotive vehicles. The website has a large user base and provides a variety of services related to the automotive industry.',
    shortDescription:
      'AutoOnes.com is a Pakistani-based online platform that specializes in buying, selling of automotive vehicles',
    repository: '',
    stack: [Stack.javascript, Stack.php, Stack.mysql, Stack.react, Stack.node],
    dimensions: [360, 640],
    screenshots: ['/static/projects/autoones/banner.png'],
    deployment: {
      web: 'https://autoones.com',
    },
    subProjects: [],
  },
  {
    title: 'List Networks',
    slug: 'list-networks',
    banner: '/static/projects/ln/banner.png',
    website: 'https://listnetworks.com',
    description:
      'List Networks is online marketplace where businesses can submit their business networks and get leads from customers. We operate all over the world no matter where are you, just submit your ad in your country or city, the rest work we will do it for you. Submit events, coupons, deals reviews and much more.',
    shortDescription:
      'List Networks is an online marketplace for businesses to submit their networks and get leads from customers globally, offering event listings, coupons, deals, reviews, and more.',
    repository: '',
    stack: [Stack.php, Stack.codeigniter, Stack.mysql],
    dimensions: [360, 640],
    screenshots: ['/static/projects/ln/banner.png'],
    deployment: {
      web: 'https://listnetworks.com',
    },
    subProjects: [],
  },
  {
    title: 'My Auction Sheet',
    slug: 'my-auction-sheet',
    banner: '/static/projects/mas/banner.jpeg',
    website: 'https://myauctionsheet.com',
    description:
      'My Auction Sheet is a website that provides access to auction sheets for vehicles imported from Japan. An auction sheet is a document that provides detailed information about the condition of a vehicle that is being sold at an auction in Japan. By providing access to auction sheets, myauctionsheet.com aims to help people make informed decisions when purchasing a used vehicle from Japan. The website claims to provide accurate and reliable information about the condition of vehicles, which can help buyers avoid purchasing a vehicle with hidden problems or defects.',
    shortDescription:
      'My Auction Sheet is a website providing access to auction sheets for Japanese imported vehicles to help buyers make informed decisions about the condition of the vehicle.',
    repository: '',
    stack: [Stack.javascript, Stack.php, Stack.mysql, Stack.react, Stack.node],
    dimensions: [360, 640],
    screenshots: ['/static/projects/mas/banner.jpeg'],
    deployment: {
      web: 'https://myauctionsheet.com',
    },
    subProjects: [],
  },
  {
    title: 'inPKR',
    slug: 'inpkr',
    banner: '/static/projects/inpkr/banner.png',
    website: 'https://inpkr.com',
    description:
      'inPKR is a price portal where you can find latest and updated prices of various items in Pakistan. inPKR team tries to share proper features and specifications detail of every mobile, groccery, petrol and more',
    shortDescription:
      'inPKR is a price portal where you can find latest and updated prices of various items in Pakistan',
    repository: '',
    stack: [Stack.javascript, Stack.php, Stack.mysql],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/inpkr/banner.png',
      '/static/projects/inpkr/1.png',
      '/static/projects/inpkr/2.png',
      '/static/projects/inpkr/3.png',
    ],
    deployment: {
      web: 'https://inpkr.com',
    },
    subProjects: [],
  },
];
