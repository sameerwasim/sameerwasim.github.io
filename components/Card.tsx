import Image from 'next/image';
import StackList from './list/StackList';
import { Stack } from 'config/stack';

function Card({
  title,
  description,
  banner,
  stack,
  href,
  date,
}: Readonly<{
  title: string;
  description: string;
  banner?: string;
  stack: Stack[];
  href: string;
  date?: string;
}>): React.ReactElement {
  const image = (
    <Image
      alt={title}
      src={banner}
      className='rounded-full object-cover object-center duration-200 ease-in hover:scale-105 md:h-36 lg:h-48'
      width={30}
      height={30}
    />
  );

  return (
    <div className='md p-4 md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
          banner && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-100 border-opacity-60 dark:border-gray-800`}
      >
        <div className='p-6'>
          <div className='flex flex-row gap-3'>
            {banner &&
              (href ? (
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href={href}
                  aria-label={`Link to ${title}`}
                >
                  {image}
                </a>
              ) : (
                image
              ))}
            <h2 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
              {href ? (
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href={href}
                  aria-label={`Link to ${title}`}
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h2>
          </div>
          <p className='prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
            {description}
          </p>
          {stack.length > 0 && <StackList stack={stack} />}
          <div className='flex flex-row justify-between'>
            {date && (
              <p>
                <i>{date}</i>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
