// Prefix site-relative paths with the base path (needed while hosted at <user>.github.io/<repo>).
export function url(path = '/'): string {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}

export function initials(name: string): string {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('el-GR', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Age categories in display order (Greek federation naming).
export const CATEGORIES = ['Άνδρες', 'Γυναίκες', 'Νέοι', 'Νέες', 'Έφηβοι', 'Νεάνιδες', 'Παίδες', 'Κορασίδες'] as const;
