const PrivacyPolicy = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-8'>
      <div className='space-y-6'>
        <div className='mb-8 text-center'>
          <h1 className='mb-2 text-3xl font-bold text-gray-900'>
            Privacy Policy
          </h1>
          <h3 className='text-xl font-semibold text-gray-700'>Gratuity Guru</h3>
          <p className='mt-2 text-sm text-gray-500'>
            Effective Date: May 28, 2025
          </p>
        </div>

        <div className='space-y-6 rounded-lg bg-white p-6 shadow-sm'>
          <p className='leading-relaxed text-gray-700'>
            Gratuity Guru respects your privacy. This app does not collect,
            store, or share any personal or non-personal data from its users.
          </p>

          <div className='space-y-4'>
            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900'>
                Data Collection
              </h5>
              <p className='leading-relaxed text-gray-700'>
                Gratuity Guru does not collect any user data. All data created
                or used within the app remains solely on the user's device and
                is deleted automatically when the app is uninstalled.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900'>
                Third-Party Services
              </h5>
              <p className='leading-relaxed text-gray-700'>
                This app does not use any third-party services that collect or
                process user data.
              </p>
            </div>

            <div>
              <h5 className='mb-2 text-lg font-semibold text-gray-900'>
                Contact
              </h5>
              <p className='mb-2 leading-relaxed text-gray-700'>
                If you have any questions about this Privacy Policy, you can
                contact us at:
              </p>
              <p className='text-gray-700'>
                📧{' '}
                <a
                  href='mailto:sameerwaseem01@gmail.com'
                  className='text-blue-600 transition-colors duration-200 hover:text-blue-800'
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
