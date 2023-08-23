import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { getFileBySlug } from '@/lib/mdx';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter };
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [
    'default',
  ]);
  const { mdxSource, frontMatter } = authorDetails;
  return { props: { authorDetails: { mdxSource, frontMatter } } };
};

function Contact({ authorDetails }): React.ReactElement {
  const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Contact' />
        <div className='container py-12'>
          <p>
            Do you have a project in mind? Want to hire me? or simply wanna
            chat? Feel free to email me at 
            <a
              className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
              href={`mailto:${authorDetails.frontMatter.email}`}
              role='button'
              tabIndex={0}
            >
              <RoughNotation
                show
                type='underline'
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
              >
                sameerwaseem01@gmail.com
              </RoughNotation>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
