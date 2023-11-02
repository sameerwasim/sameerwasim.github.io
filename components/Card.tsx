import Image from 'next/image';
import Link from './Link';
import StackList from './list/StackList';

function Card({
  title,
  description,
  banner,
  stack,
  href,
  date,
}): React.ReactElement {
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
                <Link href={href} aria-label={`Link to ${title}`}>
                  {image}
                </Link>
              ) : (
                image
              ))}
            <h2 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
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
            {href && (
              <Link
                href={href}
                className='text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                aria-label={`Link to ${title}`}
              >
                Learn more &rarr;
              </Link>
            )}
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
