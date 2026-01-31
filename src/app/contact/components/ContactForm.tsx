'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/components/common/LanguageContext';
import { translations } from '@/lib/translations';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const { lang } = useLanguage();
  const t = useMemo(() => translations[lang] ?? translations.fr, [lang]);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const project = searchParams.get('project');
    if (project) setSujet(`${t.form.projectLabel}: ${decodeURIComponent(project)}`);
  }, [searchParams, t.form.projectLabel]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nom.trim()) e.nom = t.form.nameRequired;
    if (!email.trim()) e.email = t.form.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t.form.emailInvalid;
    if (!sujet.trim()) e.sujet = t.form.subjectRequired;
    if (!message.trim()) e.message = t.form.messageRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrors({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, sujet, message }),
      });
      if (!res.ok) throw new Error('Erreur envoi');
      setStatus('success');
      setNom('');
      setEmail('');
      setSujet('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nom" className="block text-sm font-cta font-medium text-foreground mb-2">
          {t.form.name}
        </label>
        <input
          id="nom"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border bg-background font-body ${
            errors.nom ? 'border-error' : 'border-border'
          } focus:ring-2 focus:ring-primary focus:border-transparent outline-none`}
          placeholder={t.form.yourName}
        />
        {errors.nom && <p className="mt-1 text-sm text-error">{errors.nom}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-cta font-medium text-foreground mb-2">
          {t.form.email}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border bg-background font-body ${
            errors.email ? 'border-error' : 'border-border'
          } focus:ring-2 focus:ring-primary focus:border-transparent outline-none`}
          placeholder={t.form.yourEmail}
        />
        {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="sujet" className="block text-sm font-cta font-medium text-foreground mb-2">
          {t.form.subject}
        </label>
        <input
          id="sujet"
          type="text"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border bg-background font-body ${
            errors.sujet ? 'border-error' : 'border-border'
          } focus:ring-2 focus:ring-primary focus:border-transparent outline-none`}
          placeholder={t.form.subjectPlaceholder}
        />
        {errors.sujet && <p className="mt-1 text-sm text-error">{errors.sujet}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-cta font-medium text-foreground mb-2">
          {t.form.message}
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border bg-background font-body resize-none ${
            errors.message ? 'border-error' : 'border-border'
          } focus:ring-2 focus:ring-primary focus:border-transparent outline-none`}
          placeholder={t.form.yourMessage}
        />
        {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-success/10 text-success">
          <Icon name="CheckCircleIcon" size={24} />
          <span>{t.form.success}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-error/10 text-error">
          {t.form.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-conversion-accent transition-all duration-300 shadow-subtle hover:shadow-brand disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
            {t.form.sending}
          </>
        ) : (
          <>
            <Icon name="PaperAirplaneIcon" size={20} />
            {t.form.send}
          </>
        )}
      </button>
    </form>
  );
}
