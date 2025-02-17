import Image from 'next/image';
import StackList from './list/StackList';
import { Stack } from 'config/stack';
import { ActivityStatus } from 'config/projects';

function Card({
  title,
  description,
  banner,
  stack,
  href,
  date,
  status,
}: Readonly<{
  title: string;
  description: string;
  banner?: string;
  stack: Stack[];
  href: string;
  date?: string;
  status?: ActivityStatus;
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

  const getStatusColor = (status: ActivityStatus) => {
    switch (status) {
      case ActivityStatus.active:
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case ActivityStatus.semiActive:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case ActivityStatus.inactive:
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className='md p-4 md:w-1/2' style={{ maxWidth: '544px' }}>
      <div
        className={`${
          banner && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-100 border-opacity-60 dark:border-gray-800`}
      >
        <div className='p-6'>
          <div className='flex flex-row items-center gap-3'>
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
            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl font-bold leading-8 tracking-tight'>
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
              {status && (
                <span
                  className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                    status,
                  )}`}
                >
                  {status.replace('-', ' ')}
                </span>
              )}
            </div>
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
