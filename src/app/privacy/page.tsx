// src/app/privacy/page.tsx
import { Metadata } from 'next';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Synergy Access',
  description:
    'Learn about how Synergy Access collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  keywords:
    'privacy policy, data protection, GDPR, cookies, personal information, Synergy Access',
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600">Last updated: January 15, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              At Synergy Access Pvt. Ltd., we are committed to protecting your privacy and ensuring the security of your personal information.{' '}
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-indigo-600" />
                Information We Collect
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name and contact details</li>
                    <li>• Company information</li>
                    <li>• Email addresses and phone numbers</li>
                    <li>• Billing and shipping addresses</li>
                    <li>• Technical specifications and requirements</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP addresses and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent</li>
                    <li>• Cookies and tracking data</li>
                    <li>• Website usage analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-indigo-600" />
                How We Use Your Information
              </h2>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Primary Purposes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Provide and maintain our services</li>
                  <li>• Process orders and fulfill requests</li>
                  <li>• Communicate with you about products and services</li>
                  <li>• Improve our website and user experience</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Delivery</h4>
                  <p className="text-gray-600">
                    We use your information to provide technical support, process installations,{' '}
                    and deliver maintenance services for our security systems.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Communication</h4>
                  <p className="text-gray-600">
                    We may contact you regarding product updates, service notifications,{' '}
                    and important information about your security systems.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-indigo-600" />
                Data Protection & Security
              </h2>

              <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Security Measures</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Encryption of sensitive data in transit and at rest</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Access controls and authentication protocols</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Data Retention</h4>
                  <p className="text-gray-600">
                    We retain your personal information only as long as necessary to fulfill{' '}
                    the purposes outlined in this policy or as required by law.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Third-Party Services</h4>
                  <p className="text-gray-600">
                    We may use trusted third-party services for analytics, payment processing,{' '}
                    and customer support, all bound by strict confidentiality agreements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-indigo-600" />
                Your Rights &amp; Choices
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Access &amp; Control</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Request access to your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Object to processing of your data</li>
                    <li>• Data portability rights</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Communication Preferences</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Control tracking and analytics</li>
                    <li>• Update contact preferences</li>
                    <li>• Unsubscribe from newsletters</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cookies &amp; Tracking Technologies</h2>

              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience,{' '}
                  analyze website traffic, and understand where our visitors are coming from.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Required for basic website functionality and security features.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">Used to deliver relevant advertisements and content.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">International Data Transfers</h2>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your own.{' '}
                  We ensure that such transfers comply with applicable data protection laws and implement{' '}
                  appropriate safeguards to protect your personal information.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Children&apos;s Privacy</h2>

              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <p className="text-gray-700">
                  Our services are not intended for children under the age of 16. We do not knowingly{' '}
                  collect personal information from children under 16. If you believe we have collected{' '}
                  such information, please contact us immediately.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Changes to This Policy</h2>

              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices{' '}
                  or for other operational, legal, or regulatory reasons. We will notify you of any material{' '}
                  changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg border">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600" />
                Contact Us
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Privacy Questions?</h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our data practices,{' '}
                    please contact our Data Protection Officer:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-indigo-600" />
                      <span className="text-gray-700">business@synergy-access.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-indigo-600" />
                      <span className="text-gray-700">+91 99993 39265</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Address</h3>
                  <p className="text-gray-600">
                    Synergy Access Pvt. Ltd.
                    <br />
                    B-103, Sector-2
                    <br />
                    Noida, 201301
                    <br />
                    India
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
