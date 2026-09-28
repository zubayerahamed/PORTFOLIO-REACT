import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { profile } from '../data/portfolio';

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/zubayerahamed', href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: 'zubayerahamed', href: profile.github, external: true },
];

const fieldClass =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-fg placeholder:text-muted/60 transition-colors focus:border-spring focus:outline-none focus:ring-4 focus:ring-spring/15';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [composed, setComposed] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setComposed(true);
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_20%_30%,#000_10%,transparent_60%)]"
      />
      <div className="page relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-center text-[2.5rem] lg:text-left font-extrabold leading-[1] sm:text-6xl lg:text-[4rem]">
            Have a system to build or fix?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-center text-lg leading-relaxed text-white/70 lg:mx-0 lg:text-left">
            I take on selected freelance projects and technical consulting, and I'm open to full-time roles with
            real engineering challenges and system ownership.
          </p>

          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex min-h-[64px] items-center gap-4 py-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-spring">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-white/50">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-colors group-hover:text-spring-bright" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/50">
            <MapPin className="h-4 w-4" />
            Based in {profile.location}
          </p>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="rounded-3xl bg-surface p-6 text-fg shadow-2xl shadow-black/20 ring-1 ring-transparent dark:ring-white/10 sm:p-10">
            <h3 className="text-2xl font-bold">Send a message</h3>
            <p className="mt-1.5 text-muted">Tell me what you're working on and where I can help.</p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Your name
                </label>
                <input id="name" name="name" autoComplete="name" required value={form.name} onChange={onChange} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="ERP integration, new project, full-time role…"
                  value={form.subject}
                  onChange={onChange}
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What are you building, and where could you use help?"
                  value={form.message}
                  onChange={onChange}
                  className={`${fieldClass} resize-y`}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">Opens your email app with the message filled in.</p>
              <button type="submit" className="btn-primary shrink-0">
                <Send className="h-4 w-4" />
                Compose email
              </button>
            </div>

            {composed && (
              <p role="status" className="mt-5 rounded-xl bg-spring-soft px-4 py-3 text-sm text-spring-dark dark:text-spring-bright">
                Your email app should now be open with the message ready to send. If nothing opened, email me at{' '}
                <a href={`mailto:${profile.email}`} className="font-semibold underline">
                  {profile.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
