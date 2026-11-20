import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import type { PartnershipInquiry } from './src/types/cms.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

function ensureInquiriesFile(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(INQUIRIES_FILE)) {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readInquiries(): PartnershipInquiry[] {
  ensureInquiriesFile();
  try {
    const raw = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw) as PartnershipInquiry[];
  } catch {
    return [];
  }
}

function writeInquiries(inquiries: PartnershipInquiry[]): void {
  ensureInquiriesFile();
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
}

async function startServer() {
  ensureInquiriesFile();
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '1mb' }));

  app.post('/api/contact', (req, res) => {
    const { name, organization, email, interest, message, language } = req.body || {};
    if (!name || !email || !message || typeof email !== 'string' || !email.includes('@')) {
      res.status(400).json({ error: 'Please provide a valid name, email address, and message.' });
      return;
    }

    const inquiry: PartnershipInquiry = {
      id: `inq_${Date.now()}`,
      name: String(name).trim(),
      organization: String(organization || '').trim(),
      email: String(email).trim(),
      interest: String(interest || 'WE-TECH').trim(),
      message: String(message).trim(),
      language: language === 'fr' || language === 'en' ? language : 'pt',
      createdAt: new Date().toISOString(),
    };

    const list = readInquiries();
    list.unshift(inquiry);
    writeInquiries(list);

    res.status(201).json({ ok: true, inquiry });
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`WE-TECH server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start WE-TECH server:', err);
  process.exit(1);
});
