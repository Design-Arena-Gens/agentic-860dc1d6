// Edit these details with your information
const contactInfo = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourhandle', // Optional
  kaggle: 'https://kaggle.com/yourusername', // Optional
}

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-12">
        I'm always interested in connecting with fellow data scientists, researchers, and potential collaborators.
        Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub Profile
                </a>
              </div>

              {contactInfo.twitter && (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐦</span>
                  <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Twitter
                  </a>
                </div>
              )}

              {contactInfo.kaggle && (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <a href={contactInfo.kaggle} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Kaggle Profile
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">I'm Interested In</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Collaboration on data science and ML projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Research opportunities in machine learning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Internship and job opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Knowledge sharing and mentorship</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Open source contributions</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
        <p className="text-gray-700 mb-4">
          Whether you want to discuss a project, explore collaboration opportunities, or just chat about
          data science and machine learning, I'd love to hear from you.
        </p>
        <p className="text-gray-700">
          The best way to reach me is via email at{' '}
          <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline font-semibold">
            {contactInfo.email}
          </a>
        </p>
      </div>
    </div>
  )
}
