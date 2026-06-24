const PrivacyPolicy = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-8'>
      <div className='space-y-6'>
        <div className='mb-8 text-center'>
          <h1 className='mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100'>
            Privacy Policy
          </h1>
          <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300'>
            Nestboard
          </h3>
          <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
            Effective Date: June 24, 2026
          </p>
        </div>

        <div className='space-y-6 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900'>
          <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
            Nestboard (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a
            family task board app developed by Sameer Wasim. This Privacy Policy
            explains what information we collect, how we use it, and your
            choices when you use the Nestboard mobile application (the
            &quot;App&quot;).
          </p>

          <div className='space-y-4'>
            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Information We Collect
              </h5>
              <p className='mb-3 leading-relaxed text-gray-700 dark:text-gray-300'>
                When you create an account or use the App, we collect and store
                the following information to provide the service:
              </p>
              <ul className='list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300'>
                <li>
                  <strong>Account information:</strong> email address, display
                  name, and profile photo URL (if you sign in with Google).
                </li>
                <li>
                  <strong>Family and membership data:</strong> family names,
                  member display names, member roles (parent or child), invite
                  codes, and your family memberships.
                </li>
                <li>
                  <strong>Task and list data you create:</strong> task titles,
                  notes, categories, assignees, due dates, completion status,
                  and custom people or category labels you add in Settings.
                </li>
                <li>
                  <strong>Technical identifiers:</strong> a Firebase user ID
                  used to associate your account with your data, and timestamps
                  such as when records were created.
                </li>
              </ul>
              <p className='mt-3 leading-relaxed text-gray-700 dark:text-gray-300'>
                The App may temporarily store a small amount of data on your
                device (for example, a flag indicating that local tasks were
                migrated to your family) using local device storage. This data
                stays on your device and is not sent to us except when you
                choose to import tasks into your family.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                How We Use Your Information
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                We use the information above to authenticate you, sync your
                family&apos;s tasks and settings across devices, let family
                members collaborate on shared task boards, manage invite codes
                and membership, and operate and improve the App. We do not use
                your information for advertising, and we do not sell your
                personal information.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                How Your Information Is Shared
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                Information you add to a family (tasks, member names,
                categories, and related data) is visible to other members of
                that family who have joined using an invite code. We do not
                share your information with third parties for their own
                marketing purposes. We use service providers only as needed to
                run the App, as described below.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Third-Party Services
              </h5>
              <p className='mb-3 leading-relaxed text-gray-700 dark:text-gray-300'>
                Nestboard uses Google Firebase and related Google services to
                provide authentication and cloud storage:
              </p>
              <ul className='list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300'>
                <li>
                  <strong>Firebase Authentication</strong> — to sign you in with
                  email and password or Google Sign-In.
                </li>
                <li>
                  <strong>Cloud Firestore</strong> — to store your account,
                  family, and task data and sync it in real time.
                </li>
                <li>
                  <strong>Google Sign-In</strong> — if you choose to sign in
                  with your Google account.
                </li>
              </ul>
              <p className='mt-3 leading-relaxed text-gray-700 dark:text-gray-300'>
                Data sent to these services is encrypted in transit.
                Google&apos;s handling of data is also governed by{' '}
                <a
                  href='https://policies.google.com/privacy'
                  className='text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Google&apos;s Privacy Policy
                </a>
                . The App does not include third-party advertising or analytics
                SDKs.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Data Retention
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                We retain your account and family data for as long as your
                account is active or as needed to provide the App. If you leave
                a family, your membership and name are removed from that
                family&apos;s records, but tasks and other family data may
                remain for other members. You can sign out of the App at any
                time.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Account and Data Deletion
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                To request deletion of your account and associated personal
                data, email us at the contact address below from the email
                address linked to your account. We will verify your request and
                delete your account data within a reasonable period, subject to
                any data we are required to keep by law. Deleting your account
                does not automatically delete family content you created that
                other members still use; contact us if you need help with that.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Children&apos;s Privacy
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                Nestboard is not directed at children under 13. We do not
                knowingly collect personal information from children under 13.
                If you believe a child under 13 has provided us personal
                information, please contact us and we will take steps to delete
                it.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Security
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                We use industry-standard measures, including encryption in
                transit and Firebase security rules that limit family data
                access to members of that family. No method of transmission or
                storage is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Changes to This Policy
              </h5>
              <p className='leading-relaxed text-gray-700 dark:text-gray-300'>
                We may update this Privacy Policy from time to time. We will
                post the updated policy on this page and change the effective
                date above. Continued use of the App after changes means you
                accept the updated policy.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>
                Contact
              </h5>
              <p className='mb-2 leading-relaxed text-gray-700 dark:text-gray-300'>
                If you have questions about this Privacy Policy or want to
                exercise your privacy rights (including account deletion),
                contact:
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                Sameer Wasim
                <br />
                <a
                  href='mailto:sameerwaseem01@gmail.com'
                  className='text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                >
                  sameerwaseem01@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
