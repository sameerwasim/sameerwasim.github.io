import { Maybe, Tuple } from '../types';

export interface Highlight {
  title: string;
  link: string;
  banner?: string;
  date: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    title: 'Top Rated on Upwork',
    description:
      'Achieved top-rated badge and a perfect 100% job success rate on Upwork, a recognition of my exceptional performance and dedication to delivering high-quality work to my clients.',
    link: 'https://www.upwork.com/freelancers/~018c62300de4534d95',
    banner: '',
    date: '29th Oct, 2023',
  },
  {
    title: "Generative AI Insights: Featured on RipeSeed's LinkedIn",
    description:
      "Discussing the transformative power of OpenAI and how it can be used in conjuction with a VectorDB to enchance it's capabilities.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7108051061608726528/',
    banner: '',
    date: '21st Sept, 2023',
  },
  {
    title: 'Jazzcash Checkout',
    description:
      'Created my first npmjs package, "jazzcash-checkout," on November 2022. It simplifies the integration of JazzCash payment services into NodeJS based applications, making life easier for developers.',
    link: 'https://www.npmjs.com/package/jazzcash-checkout',
    banner: '',
    date: '23rd Nov, 2022',
  },
  {
    title: 'XML Sitemap Generator',
    description:
      'Developed a PHP library, named "xml-sitemap-generator," to address the challenge of generating dynamic XML-based sitemaps for websites with constantly changing and updating content.',
    link: 'https://github.com/sameerwasim/xml-sitemap-generator',
    banner: '',
    date: '3rd Oct, 2022',
  },
];
