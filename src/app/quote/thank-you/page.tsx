"use client";

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="bg-white shadow-lg rounded-xl overflow-hidden border-none max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-6 py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
              <p className="text-gray-600">
                Your quote request has been submitted successfully. We&apos;ll contact you within 24 hours.
              </p>
            </div>
            <div className="pt-4 w-full">
              <Link href="/">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}