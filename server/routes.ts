import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { sendInquiryNotification } from "./email";
import { log } from "./index";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      
      // Send email notification (non-blocking - don't fail request if email fails)
      try {
        await sendInquiryNotification(inquiry);
      } catch (emailError) {
        // Log email error but don't fail the request
        log(`Failed to send email notification for inquiry #${inquiry.id}: ${emailError instanceof Error ? emailError.message : String(emailError)}`, "email");
      }
      
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
