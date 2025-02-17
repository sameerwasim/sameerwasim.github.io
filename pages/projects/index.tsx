import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import config from 'config';

export default function Projects() {
  const activeProjects = config.projects;

  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Projects' />
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {activeProjects.map(
              ({
                slug,
                title,
                shortDescription,
                stack,
                banner,
                website,
                status,
              }) => (
                <Card
                  key={slug}
                  title={title}
                  stack={stack}
                  description={shortDescription}
                  banner={banner}
                  href={website}
                  status={status}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
