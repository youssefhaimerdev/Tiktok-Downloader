import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for TikTokDown Pro – how we handle your data.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  const updated = 'January 1, 2025'

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
      <p className="text-zinc-500 text-sm mb-12">Last updated: {updated}</p>

      <div className="prose prose-invert prose-zinc max-w-none space-y-10 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
          <p>
            We collect minimal information necessary to provide the service. When you use our
            TikTok downloader, we temporarily process the URL you submit in order to fetch video
            metadata from TikTok&apos;s public API. We do not store URLs, downloaded video files,
            or any personally identifiable information on our servers.
          </p>
          <p className="mt-3">
            We use Google Analytics to collect anonymized data about how visitors use our website,
            including page views, session duration, and general geographic region. This data is
            aggregated and cannot be used to identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Cookies</h2>
          <p>
            We use cookies only for analytics purposes (Google Analytics). We do not use tracking
            cookies for advertising targeting beyond standard ad network cookies (Google AdSense)
            which are governed by Google&apos;s own privacy policy.
          </p>
          <p className="mt-3">
            You can disable cookies at any time in your browser settings. Disabling analytics
            cookies will not affect the core functionality of the tool.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
          <p>The data we collect is used solely to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
            <li>Process your video download requests in real time</li>
            <li>Improve the performance and reliability of our service</li>
            <li>Understand aggregate usage patterns to improve user experience</li>
            <li>Display relevant advertisements through Google AdSense</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or share your data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Services</h2>
          <p>Our website uses the following third-party services:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400">
            <li><strong className="text-zinc-300">Google Analytics</strong> – website usage analytics</li>
            <li><strong className="text-zinc-300">Google AdSense</strong> – advertising revenue</li>
            <li><strong className="text-zinc-300">TikTok oEmbed API</strong> – fetching public video metadata</li>
          </ul>
          <p className="mt-3">
            Each of these services has its own privacy policy and data handling practices. We
            encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Data Retention</h2>
          <p>
            We do not store video files or URLs beyond the duration of your download request.
            Once your download is delivered to your browser, the data is discarded from our
            servers automatically. Analytics data is retained by Google Analytics according to
            their standard retention policies (typically 26 months).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Children&apos;s Privacy</h2>
          <p>
            Our service is not directed at children under the age of 13. We do not knowingly
            collect personal information from children. If you are a parent or guardian and
            believe your child has provided us with personal information, please contact us
            immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &quot;Last updated&quot; date at the top of this page. We encourage you to review this page
            periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data,
            please contact us at:{' '}
            <a
              href="mailto:privacy@tiktokdown.pro"
              className="text-brand-400 hover:text-brand-300 underline"
            >
              privacy@tiktokdown.pro
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
