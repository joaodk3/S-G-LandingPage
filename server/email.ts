/**
 * Email Service for S&G Global Advisors
 * 
 * Configuration:
 * - Set EMAIL_ENABLED=true to enable email notifications
 * - Configure SMTP settings: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * - Set sender: EMAIL_FROM
 * - Set recipient: EMAIL_TO
 * 
 * Example Gmail configuration:
 * EMAIL_ENABLED=true
 * SMTP_HOST=smtp.gmail.com
 * SMTP_PORT=587
 * SMTP_USER=your-email@gmail.com
 * SMTP_PASS=your-app-password
 * EMAIL_FROM=noreply@sgglobaladvisors.com
 * EMAIL_TO=contact@sgglobaladvisors.com
 */

import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import type { Inquiry } from "@shared/schema";

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean; // true for 465, false for other ports
  auth: {
    user: string;
    pass: string;
  };
  from: string; // sender email address
  to: string; // recipient email address
}

function getEmailConfig(): EmailConfig | null {
  // Check if email is enabled
  if (process.env.EMAIL_ENABLED !== "true") {
    return null;
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!host || !port || !user || !pass || !from || !to) {
    console.warn(
      "Email configuration incomplete. Set EMAIL_ENABLED=true and all SMTP_* and EMAIL_* variables to enable email notifications.",
    );
    return null;
  }

  return {
    host,
    port: parseInt(port, 10),
    secure: port === "465", // Use SSL for port 465
    auth: {
      user,
      pass,
    },
    from,
    to,
  };
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (transporter) {
    return transporter;
  }

  const config = getEmailConfig();
  if (!config) {
    return null;
  }

  try {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    });

    return transporter;
  } catch (error) {
    console.error("Failed to create email transporter:", error);
    return null;
  }
}

export async function sendInquiryNotification(inquiry: Inquiry): Promise<void> {
  const config = getEmailConfig();
  const emailTransporter = getTransporter();

  if (!config || !emailTransporter) {
    // Email not configured, skip silently (inquiry still saved to DB)
    console.log("Email not configured, skipping email notification");
    return;
  }

  const subject = `New Contact Inquiry from ${inquiry.name}`;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1e293b; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f8f9fa; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e293b; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #1e293b; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Inquiry</h2>
            <p>S&G Global Advisors</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(inquiry.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(inquiry.email)}</div>
            </div>
            ${inquiry.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(inquiry.phone)}</div>
            </div>
            ` : ''}
            ${inquiry.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${escapeHtml(inquiry.company)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(inquiry.message).replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <div class="label">Submitted:</div>
              <div class="value">${new Date(inquiry.createdAt || Date.now()).toLocaleString()}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was automatically generated from the S&G Global Advisors contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const textContent = `
New Contact Inquiry - S&G Global Advisors

Name: ${inquiry.name}
Email: ${inquiry.email}
${inquiry.phone ? `Phone: ${inquiry.phone}\n` : ''}${inquiry.company ? `Company: ${inquiry.company}\n` : ''}
Message:
${inquiry.message}

Submitted: ${new Date(inquiry.createdAt || Date.now()).toLocaleString()}
  `.trim();

  try {
    await emailTransporter.sendMail({
      from: `"S&G Global Advisors" <${config.from}>`,
      to: config.to,
      replyTo: inquiry.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.log(`Inquiry email notification sent for inquiry #${inquiry.id}`);
  } catch (error) {
    // Log error and re-throw - caller will handle gracefully
    console.error("Failed to send inquiry email notification:", error);
    throw error;
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

