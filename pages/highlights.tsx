import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Highlights() {
  return (
    <>
      <PageSEO
        title={`Highlights - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contributions & Highlights' />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {config.highlights.map(
              ({ title, link, banner, date, description }, idx) => (
                <Card
                  key={idx}
                  date={date}
                  title={title}
                  stack={[]}
                  description={description}
                  banner={banner}
                  href={link}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
