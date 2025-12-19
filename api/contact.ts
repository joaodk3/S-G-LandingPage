import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { api } from '../shared/routes';
import { z } from 'zod';
import { sendInquiryNotification } from '../server/email';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate input
    const input = api.contact.submit.input.parse(req.body);
    
    // Create inquiry in database
    const inquiry = await storage.createInquiry(input);
    
    // Send email notification (non-blocking - don't fail request if email fails)
    try {
      await sendInquiryNotification(inquiry);
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error(
        `Failed to send email notification for inquiry #${inquiry.id}:`,
        emailError instanceof Error ? emailError.message : String(emailError)
      );
    }
    
    // Return success response
    return res.status(201).json(inquiry);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join('.'),
      });
    }
    
    // Log unexpected errors
    console.error('Error processing contact form:', err);
    
    return res.status(500).json({
      message: err instanceof Error ? err.message : 'Internal server error',
    });
  }
}

