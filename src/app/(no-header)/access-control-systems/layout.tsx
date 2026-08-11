import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Access Control Systems',
  description: 'Access Control Systems Page',
};

export default function AccessControlLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="m-0 p-0">
      <body className="m-0 p-0 overflow-x-hidden">
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow-x: hidden;
          }
          /* Hide any header or footer that might be injected */
          header, footer {
            display: none !important;
          }
          /* Hide floating elements */
          .floating-contact, .chat-widget, .toast-container, .disclaimer, 
          [class*="fixed"], [class*="floating"] {
            display: none !important;
          }
          /* Specifically target known floating components */
          div[class*="fixed"][class*="right"][class*="bottom"],
          div[class*="fixed"][class*="bottom"][class*="left"],
          div[class*="fixed"][class*="z-"],
          .react-hot-toast,
          #disclaimer {
            display: none !important;
          }
          /* Ensure no whitespace above the page */
          .access-control-standalone {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            position: relative;
          }
          /* Override any inherited padding from root layout */
          main {
            padding-top: 0 !important;
            margin-top: 0 !important;
          }
          /* Remove any default spacing */
          * {
            box-sizing: border-box;
          }
        `}</style>
        <div className="access-control-standalone">
          {children}
        </div>
      </body>
    </html>
  );
}