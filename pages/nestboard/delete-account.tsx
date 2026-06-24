import Link from '@/components/Link';

const DeleteAccount = () => {
  const email = 'sameerwaseem01@gmail.com';
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    'Nestboard Account Deletion Request',
  )}&body=${encodeURIComponent(
    'Please delete my Nestboard account and associated personal data.\n\nAccount email:\n[enter the email linked to your Nestboard account]\n\nThank you.',
  )}`;

  return (
    <div className='mx-auto max-w-3xl px-4 py-8'>
      <div className='space-y-6'>
        <div className='mb-8 text-center'>
          <h1 className='mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100'>
            Delete Your Account
          </h1>
          <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300'>
            Nestboard
          </h3>
          <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
            Last updated: June 24, 2026
          </p>
        </div>

        <div className='space-y-6 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900'>
          <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
            You can request deletion of your Nestboard account and associated
            personal data at any time. This page explains how to submit a
            request and what happens after you do.
          </p>

          <div className='space-y-4'>
            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                How to request account deletion
              </h5>
              <ol className='list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-300'>
                <li>
                  Send an email to{' '}
                  <a
                    href={mailtoHref}
                    className='text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                  >
                    {email}
                  </a>{' '}
                  from the email address linked to your Nestboard account.
                </li>
                <li>
                  Use the subject line{' '}
                  <strong>
                    &quot;Nestboard Account Deletion Request&quot;
                  </strong>{' '}
                  and include the email address you use to sign in.
                </li>
                <li>
                  We will verify your request and process deletion within{' '}
                  <strong>30 days</strong>.
                </li>
              </ol>
              <p className='mt-3'>
                <a
                  href={mailtoHref}
                  className='inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                >
                  Request account deletion by email
                </a>
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                What we delete
              </h5>
              <p className='mb-3 leading-relaxed text-gray-700 dark:text-gray-300'>
                When your deletion request is approved, we delete personal data
                linked to your account, including:
              </p>
              <ul className='list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300'>
                <li>
                  Your account credentials and profile (email, display name)
                </li>
                <li>Your user profile document in our database</li>
                <li>
                  Your membership and display name in any families you joined
                </li>
                <li>
                  Your active family selection and family membership records
                </li>
              </ul>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                What may be kept
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                Deleting your account does not automatically remove family
                content you created that other members still use, such as shared
                tasks, categories, or family settings. Other family members may
                still see that content until a parent removes it or the family
                is deleted. If you need help removing specific content, mention
                it in your deletion request email.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Before you delete
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                You can sign out of the app at any time without deleting your
                account. If you only want to leave a family, use{' '}
                <strong>Leave family</strong> in the app Settings instead of
                deleting your whole account.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Contact
              </h5>
              <p className='mb-2 leading-relaxed text-gray-700 dark:text-gray-300'>
                Questions about account deletion or your data? Contact:
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                Sameer Waseem
                <br />
                <a
                  href={`mailto:${email}`}
                  className='text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                >
                  {email}
                </a>
              </p>
              <p className='mt-3 text-sm text-gray-500 dark:text-gray-400'>
                See also our{' '}
                <Link
                  href='/nestboard/privacy-policy'
                  className='text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
