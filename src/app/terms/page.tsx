import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for TikTokDown Pro.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  const updated = 'January 1, 2025'

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms of Service</h1>
      <p className="text-zinc-500 text-sm mb-12">Last updated: {updated}</p>

      <div className="space-y-10 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using TikTokDown Pro (&quot;the Service&quot;), you accept and agree to be
            bound by these Terms of Service. If you do not agree to these terms, please do not
            use our service. We reserve the right to update these terms at any time without prior
            notice, and your continued use of the service constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
          <p>
            TikTokDown Pro is a web-based utility that allows users to download publicly available
            TikTok videos. The service processes URLs provided by users and retrieves video files
            from TikTok&apos;s public content delivery network. We are not affiliated with, endorsed
            by, or connected to TikTok or ByteDance Ltd. in any way.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">3. Permitted Use</h2>
          <p>You may use this service only for lawful purposes. Specifically, you agree to:</p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
            <li>Only download videos for personal, non-commercial use unless you have explicit permission from the content creator</li>
            <li>Respect the intellectual property rights of TikTok creators</li>
            <li>Comply with TikTok&apos;s Community Guidelines regarding content you download</li>
            <li>Not use downloaded content to harass, defame, or harm any individual</li>
            <li>Not use the service in any way that could damage or overburden our infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">4. Prohibited Use</h2>
          <p>You expressly agree not to:</p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
            <li>Re-upload downloaded content to other platforms without the original creator&apos;s permission</li>
            <li>Use downloaded videos for commercial purposes without appropriate licensing</li>
            <li>Attempt to circumvent any technical measures we use to manage the service</li>
            <li>Use automated scripts or bots to bulk-download content via our service</li>
            <li>Download content that infringes third-party intellectual property rights</li>
            <li>Download content depicting illegal activities or that violates any applicable law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
          <p>
            All TikTok videos remain the intellectual property of their original creators. By
            downloading a video through our service, you do not acquire any ownership rights to
            that content. The responsibility for ensuring you have the right to download and use
            any given piece of content rests entirely with you, the user.
          </p>
          <p className="mt-3">
            The software, design, and branding of TikTokDown Pro itself are the intellectual
            property of their respective owners and may not be reproduced or reused without
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">6. Disclaimer of Warranties</h2>
          <p>
            The service is provided &quot;as is&quot; without any warranties, express or implied. We do not
            guarantee that the service will be available at all times, that downloads will always
            succeed, or that the quality of downloaded videos will meet your expectations. TikTok
            may change its platform at any time in ways that affect our service, and we make no
            guarantees about continued compatibility.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, TikTokDown Pro shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages arising from
            your use of the service, including but not limited to loss of data, loss of profits,
            or any other damages. Our total liability to you for any claim arising from use of the
            service shall not exceed the amount you paid us in the twelve months preceding the
            claim (which in most cases will be zero, as the service is free).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless TikTokDown Pro and its operators from any
            claims, damages, losses, liabilities, costs, and expenses (including reasonable
            attorney&apos;s fees) arising out of your use of the service, your violation of these
            Terms, or your violation of any third-party rights, including intellectual property
            rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable law.
            Any disputes arising from these terms or your use of the service shall be resolved
            through good faith negotiation first, and if that fails, through binding arbitration
            or the courts of the relevant jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
          <p>
            For any questions regarding these Terms of Service, please contact us at{' '}
            <a
              href="mailto:legal@tiktokdown.pro"
              className="text-brand-400 hover:text-brand-300 underline"
            >
              legal@tiktokdown.pro
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
