"use client";

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

// Extend window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function AccessControlThankYou() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track Google Ads conversion event on page load
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ads_conversion_Form_1', {
        'event_category': 'form_submission',
        'event_label': 'access_control_quote_thank_you',
        'value': 1
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="bg-white shadow-lg rounded-xl overflow-hidden border-none">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex flex-col items-center justify-center space-y-6 py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Thank You!</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Your quote request has been submitted successfully. We&apos;ll contact you within 24 hours.
                </p>
              </div>
              <div className="pt-6 w-full max-w-md mx-auto">
                <Link href="/access-control-systems">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                    Back to Access Control Systems
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need immediate assistance? Call us at{' '}
            <a href="tel:+91 99993 39265" className="text-blue-600 hover:underline">
              +91-99993 39265
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}