import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

export default function Cyanofall() {
  return (
    <>
      <PageSEO
        title={`Cyanofall Privacy Policy - ${siteMetadata.author}`}
        description='Privacy policy for Cyanofall, a single-player ocean explorer.'
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Privacy Policy' subtitle='Cyanofall' />
        <div className='container py-12'>
          <div className='prose max-w-none dark:prose-dark'>
            <p>
              This application is a single-player ocean explorer. It is built to
              work without an account and without ads.
            </p>

            <h2>Data stored on your device</h2>
            <p>
              The app keeps a local discovery log, a deepest-depth value, and
              whether you have finished the training dive. That information
              stays on the device using on-device storage. It is used only to
              remember what you have already found.
            </p>
            <p>Uninstalling the app removes this local data.</p>

            <h2>Data we do not collect</h2>
            <p>
              The app does not create an account, does not include analytics or
              advertising SDKs, and does not upload your discovery log to a
              server operated by the developer.
            </p>
            <p>
              Motion sensors are used only to steer the submersible while you
              play. The app does not request activity-recognition, microphone,
              or location permission.
            </p>

            <h2>Questions</h2>
            <p>
              Use the support email on the Google Play store listing for this
              app.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
