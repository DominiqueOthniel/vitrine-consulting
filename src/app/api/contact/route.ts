import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@vitrine-consulting.fr';
const FROM_EMAIL = process.env.RESEND_FROM || 'onboarding@resend.dev';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message } = body;

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    if (resend) {
      const { error } = await resend.emails.send({
        from: `VITRINE CONSULTING Contact <${FROM_EMAIL}>`,
        to: [CONTACT_EMAIL],
        replyTo: email,
        subject: `[Contact] ${sujet}`,
        text: `Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Nom:</strong> ${nom}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br />')}</p>`,
      });
      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Erreur envoi email' }, { status: 502 });
      }
    } else {
      console.info('Contact form (no RESEND_API_KEY):', { nom, email, sujet, message });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
