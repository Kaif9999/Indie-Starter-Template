import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#2563eb', textAlign: 'center' }}>Welcome to our waitlist!</h1>
    <p>Hi {firstName},</p>
    <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
    <p>You'll be among the first to know when we launch. We'll keep you updated on our progress and notify you as soon as we're ready.</p>
    <p>Stay tuned!</p>
    <p>Best regards,<br/>The Team</p>
  </div>
);