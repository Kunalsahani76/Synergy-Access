"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Loader2, RefreshCw } from 'lucide-react';

// Extend window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface QuoteFormProps {
  title?: string;
  size?: 'small' | 'large';
  onSubmit?: (formData: FormDataType) => void;
}

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  requirement: string;
  captchaAnswer: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteForm({ title = "Get Your Free Quote", size = "large", onSubmit }: QuoteFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    captchaAnswer: ''
  });

  // Form state
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // CAPTCHA state
  const [captchaValue, setCaptchaValue] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  // Generate a simple math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaValue(`${num1} + ${num2}`);
    setFormData(prev => ({ ...prev, captchaAnswer: (num1 + num2).toString() }));
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'userCaptcha') {
      setUserCaptchaInput(value);
      setIsCaptchaValid(true);
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    if (formStatus === 'error') {
      setFormStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    // Validate CAPTCHA
    if (userCaptchaInput !== formData.captchaAnswer) {
      setIsCaptchaValid(false);
      setFormStatus('error');
      setErrorMessage('Incorrect CAPTCHA. Please try again.');
      generateCaptcha();
      setUserCaptchaInput('');
      return;
    }
    
    try {
      console.log('Form submitted:', formData);
      
      // Call onSubmit callback if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mgvzpolk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          requirement: formData.requirement,
          _subject: 'New Quote Request from Access Control Page',
          _cc: 'business@synergy-access.com'
        })
      });

      if (response.ok) {
        // Track Google Ads conversion event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'ads_conversion_Form_1', {
            'event_category': 'form_submission',
            'event_label': 'access_control_quote',
            'value': 1
          });
        }
        
        // Redirect to thank you page within the same section
        router.push('/access-control-systems/thank-you');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setErrorMessage('Failed to submit form. Please try again or contact us directly.');
    }
  };

  // Compact size-based styling
  const formStyles = {
    small: {
      cardPadding: "p-4",
      inputHeight: "h-9",
      textSize: "text-sm",
      labelMargin: "mb-1",
      textareaRows: 2,
      captchaPadding: "p-2",
      buttonHeight: "h-9",
      buttonSize: "text-sm",
      titleSize: "text-lg font-semibold",
      gap: "space-y-3"
    },
    large: {
      cardPadding: "p-6",
      inputHeight: "h-10",
      textSize: "text-sm",
      labelMargin: "mb-1",
      textareaRows: 3,
      captchaPadding: "p-3",
      buttonHeight: "h-10",
      buttonSize: "text-sm",
      titleSize: "text-xl font-semibold",
      gap: "space-y-4"
    }
  };

  const styles = formStyles[size];

  return (
    <Card className="bg-white shadow-lg rounded-xl overflow-hidden border-none">
      <CardContent className={styles.cardPadding}>
        <div className="text-center mb-4">
          <h2 className={`${styles.titleSize} text-gray-900 mb-1`}>{title}</h2>
          <p className="text-gray-600 text-xs">We&apos;ll get back to you soon</p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className={styles.gap}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="name" className={`block text-xs font-medium text-gray-700 ${styles.labelMargin}`}>
                Name *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.inputHeight} ${styles.textSize} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-lg`}
                required
                disabled={formStatus === 'submitting'}
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className={`block text-xs font-medium text-gray-700 ${styles.labelMargin}`}>
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`${styles.inputHeight} ${styles.textSize} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-lg`}
                required
                disabled={formStatus === 'submitting'}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className={`block text-xs font-medium text-gray-700 ${styles.labelMargin}`}>
              Phone *
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className={`${styles.inputHeight} ${styles.textSize} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-lg`}
              required
              disabled={formStatus === 'submitting'}
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="requirement" className={`block text-xs font-medium text-gray-700 ${styles.labelMargin}`}>
              Requirements
            </label>
            <Textarea
              id="requirement"
              name="requirement"
              placeholder="Tell us about your project..."
              value={formData.requirement}
              onChange={handleInputChange}
              rows={styles.textareaRows}
              className={`${styles.textSize} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-lg resize-none`}
              disabled={formStatus === 'submitting'}
            />
          </div>
          
          {/* Compact CAPTCHA Section */}
          <div className="space-y-2">
            <div className={`flex items-center justify-between bg-gray-50 rounded-lg ${styles.captchaPadding} border border-gray-200`}>
              <span className="text-gray-800 font-medium text-sm">Calculate: {captchaValue} = ?</span>
              <button 
                type="button" 
                onClick={generateCaptcha}
                disabled={formStatus === 'submitting'}
                className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center gap-1 transition-colors disabled:opacity-50"
              >
                <RefreshCw className="w-3 h-3" />
                Refresh
              </button>
            </div>
            <div className="space-y-1">
              <label htmlFor="userCaptcha" className={`block text-xs font-medium text-gray-700 ${styles.labelMargin}`}>
                Answer *
              </label>
              <Input
                id="userCaptcha"
                name="userCaptcha"
                placeholder="Enter result"
                value={userCaptchaInput}
                onChange={handleInputChange}
                className={`${styles.inputHeight} ${styles.textSize} border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-lg ${
                  !isCaptchaValid ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                }`}
                required
                disabled={formStatus === 'submitting'}
              />
              {!isCaptchaValid && (
                <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                  &#x2717; Incorrect answer
                </p>
              )}
            </div>
          </div>

          {/* Error Message */}
          {formStatus === 'error' && errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-2">
              <p className="text-red-700 text-xs font-medium flex items-center gap-1">
                <span>&#x26A0;</span>
                {errorMessage}
              </p>
            </div>
          )}
          
          <Button 
            type="submit" 
            disabled={formStatus === 'submitting'}
            className={`w-full ${styles.buttonHeight} ${styles.buttonSize} bg-blue-600 hover:bg-blue-700 text-white transition-all rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {formStatus === 'submitting' ? (
              <>
                <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get Free Quote'
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}