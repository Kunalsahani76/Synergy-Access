import { Metadata } from 'next';
import { FileText, Shield, AlertTriangle, CheckCircle, Clock, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Synergy Access',
  description: 'Read our terms and conditions governing the use of Synergy Access services, products, and website. Understand your rights and obligations.',
  keywords: 'terms and conditions, service terms, user agreement, legal terms, Synergy Access',
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              These Terms and Conditions govern your use of Synergy Access Pvt. Ltd. services, products, and website. 
              By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                Acceptance of Terms
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-gray-700 mb-4">
                  By accessing our website, using our services, or purchasing our products, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, 
                  please do not use our services.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• You must be at least 18 years old to use our services</li>
                  <li>• You are responsible for maintaining the confidentiality of your account</li>
                  <li>• You agree to provide accurate and complete information</li>
                  <li>• You will not use our services for any illegal or unauthorized purpose</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-indigo-600" />
                Services & Products
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Product Availability</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Products are subject to availability</li>
                    <li>• We reserve the right to modify or discontinue products</li>
                    <li>• Prices are subject to change without notice</li>
                    <li>• Product specifications may vary</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Installation services are scheduled based on availability</li>
                    <li>• Maintenance services require advance booking</li>
                    <li>• Emergency services are available 24/7</li>
                    <li>• Remote support is provided during business hours</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-indigo-600" />
                User Obligations
              </h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mb-6">
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">Prohibited Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Attempting to gain unauthorized access to our systems</li>
                  <li>• Interfering with the proper functioning of our services</li>
                  <li>• Using our services for illegal activities</li>
                  <li>• Sharing confidential information with unauthorized parties</li>
                  <li>• Attempting to reverse engineer our products</li>
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Proper Use</h4>
                  <p className="text-gray-600">
                    You agree to use our products and services only for their intended purpose and in accordance 
                    with our installation and maintenance guidelines.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Compliance</h4>
                  <p className="text-gray-600">
                    You must comply with all applicable laws and regulations when using our services, 
                    including local building codes and safety standards.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-indigo-600" />
                Payment Terms
              </h2>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Payment Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• All prices are quoted in Indian Rupees (INR)</li>
                  <li>• Payment is due upon order confirmation</li>
                  <li>• We accept bank transfers, checks, and online payments</li>
                  <li>• Late payments may incur additional charges</li>
                  <li>• Service contracts require advance payment</li>
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Refund Policy</h4>
                  <p className="text-gray-600">
                    Products may be returned within 7 days of delivery if found defective. 
                    Custom products are non-refundable. Service fees are non-refundable once work begins.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Cancellation</h4>
                  <p className="text-gray-600">
                    Orders may be cancelled within 24 hours of placement. Installation appointments 
                    require 48-hour notice for cancellation without penalty.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Warranty & Support</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Product Warranty</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standard warranty: 1 year from installation</li>
                    <li>• Extended warranty available for purchase</li>
                    <li>• Warranty covers manufacturing defects only</li>
                    <li>• Damage from misuse is not covered</li>
                    <li>• Warranty is non-transferable</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">Technical Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Free support during warranty period</li>
                    <li>• 24/7 emergency support available</li>
                    <li>• Remote troubleshooting included</li>
                    <li>• On-site service available for contract customers</li>
                    <li>• Training and documentation provided</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Intellectual Property</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="mb-4 text-gray-700">
                  All content on our website, including text, graphics, logos, and software, is the property of 
                  Synergy Access Pvt. Ltd. and is protected by copyright and other intellectual property laws.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Permitted Use</h4>
                    <p className="text-sm text-gray-600">
                      You may view and download content for personal, non-commercial use only.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-800 mb-2">Restricted Use</h4>
                    <p className="text-sm text-gray-600">
                      Reproduction, distribution, or modification of our content is strictly prohibited.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Limitation of Liability</h2>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Disclaimer</h3>
                <p className="text-gray-700 mb-4">
                  Synergy Access Pvt. Ltd. shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services or products.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Our liability is limited to the amount paid for the specific product or service</li>
                  <li>• We are not responsible for third-party actions or damages</li>
                  <li>• Force majeure events are excluded from liability</li>
                  <li>• Claims must be filed within 30 days of the incident</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy & Data Protection</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed 
                  by our Privacy Policy, which is incorporated into these Terms and Conditions.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• We collect only necessary information for service delivery</li>
                  <li>• Your data is protected using industry-standard security measures</li>
                  <li>• We do not sell or share your personal information with third parties</li>
                  <li>• You have the right to access and correct your personal information</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Termination</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Termination</h4>
                  <p className="text-gray-600">
                    We may terminate or suspend your access to our services immediately, without prior notice, 
                    for any breach of these Terms and Conditions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Effect of Termination</h4>
                  <p className="text-gray-600">
                    Upon termination, your right to use our services will cease immediately. 
                    All provisions of these terms that should survive termination shall remain in effect.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Governing Law</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg border">
                <p className="text-gray-700">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts 
                  in Noida, Uttar Pradesh, India.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Changes to Terms</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                <p className="text-gray-700">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services after any changes 
                  constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg border">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600" />
                Contact Information
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Questions About Terms?</h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms and Conditions, please contact our legal team:
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Company Address</h3>
                  <p className="text-gray-600">
                    Synergy Access Pvt. Ltd.<br />
                    B-103, Sector-2<br />
                    Noida, 201301<br />
                    Uttar Pradesh, India
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

export default TermsAndConditions;
