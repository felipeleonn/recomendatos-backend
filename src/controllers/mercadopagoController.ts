import { Request, Response } from 'express';
import { createPreference, CreatePreferencePayload } from '../services/mercadopagoService';
import { logger } from '../utils/logger';

export const createPaymentPreference = async (req: Request, res: Response) => {
  try {
    const payload: CreatePreferencePayload = req.body;
    const preference = await createPreference(payload);
    res.json({
      id: preference.id,
      init_point: preference.init_point,
    });
  } catch (error) {
    logger.error('Error creating payment preference:', error);
    res.status(500).json({ error: 'Error creating payment preference' });
  }
};