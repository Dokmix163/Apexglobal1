# Background and Motivation
ApexGlobal landing showcases products and captures inquiries. Mobile responsiveness improved, but the site can benefit from better UX, SEO, accessibility, performance, and conversion tooling.

# Key Challenges and Analysis
- Navigation: Mobile menu works but lacks accessibility attributes and outside-click/escape close.
- Content depth: No cases/clients, certifications, FAQs, or detailed product pages; reduces trust and SEO.
- Forms: Minimal validation, no consent checkbox, no phone masking, no anti-spam, no success state page.
- Performance: No image optimization pipeline, no lazy-loading for non-critical visuals, font loading not optimized.
- SEO: No Open Graph/Twitter tags, no sitemap.xml or robots.txt, missing structured data, missing favicons.
- Analytics: No analytics/goal tracking for conversions.
- PWA: No manifest/service worker for installability/offline basics.
- Backend: Basic POST /api/inquiry; lacks rate limit, server-side validation, email/CRM integration.
- Accessibility: Missing ARIA on navbar toggle, focus outlines, skip-to-content link, color contrast review.
- Internationalization: Russian-only; potential future RU/EN.

# High-level Task Breakdown
1) Enhance mobile nav accessibility and UX
- Add `aria-expanded`, `aria-controls`, ESC/outside-click close, focus trap.
- Success criteria: Keyboard users can open/close menu; axe audit shows no nav a11y issues.

2) Improve form UX, validation, and compliance
- Add phone mask, required consent checkbox, inline validation, success state.
- Add honeypot + basic rate limit + backend schema validation.
- Success criteria: Invalid submits blocked client/server; spam reduced; submission success toast + reset.

3) Add anti-spam/rate limiting on backend
- Implement per-IP rate limit, basic captcha alternative (honeypot + timing), server-side schema (Zod/Yup).
- Success criteria: >95% automated spam blocked in logs; legitimate submits succeed.

4) Image and asset optimization
- Convert hero/illustrations to WebP/AVIF with fallbacks; lazy-load non-critical images, `loading="lazy"`.
- Preload critical font weights; use `font-display: swap`.
- Success criteria: Lighthouse Performance ≥ 90 on mobile; CLS < 0.1; LCP < 2.5s on 4G.

5) SEO essentials
- Add Open Graph/Twitter meta, meta keywords where relevant, canonical link.
- Generate `sitemap.xml` and `robots.txt`.
- Add JSON-LD Organization and Product schema for catalog items.
- Success criteria: Google Rich Results test passes; pages indexed; social previews correct.

6) Accessibility pass (WCAG AA)
- Ensure focus styles visible; add skip link; improve contrasts; set proper heading hierarchy.
- ARIA labels for buttons/links; label associations in forms.
- Success criteria: Lighthouse Accessibility ≥ 95; screen reader basic flows succeed.

7) Analytics and goals
- Add privacy-friendly analytics (e.g., Plausible/Yandex.Metrica) with goal events for CTA clicks, form submit.
- Success criteria: Events visible in dashboard; conversions attributable by source/medium.

8) Trust-building content blocks
- Add section: clients/partners logo wall; certifications/ISO; testimonials; case studies with metrics.
- Success criteria: New sections render responsively; time-on-page and CTR to contact increase.

9) Product detail overlays/pages
- For each product, provide modal/detail with specs, gallery, downloads (PDF), and CTA.
- Success criteria: Detail view loads without page reload; selects product into form; deep-linkable.

10) Legal pages
- Add Privacy Policy and Terms pages + footer links.
- Success criteria: Links present; policy covers form data usage and consent.

11) PWA basics
- Add `manifest.webmanifest`, icons, and minimal service worker for asset caching.
- Success criteria: Lighthouse PWA installable on Android/Chrome.

12) Error handling and fallback pages
- Add 404.html, minimal error boundary for JS.
- Success criteria: Navigating to unknown route shows helpful 404; JS errors show toast/log.

# Project Status Board
- [ ] Enhance mobile nav accessibility and UX
- [ ] Improve form UX, validation, and compliance
- [ ] Add anti-spam/rate limiting on backend
- [ ] Image and asset optimization
- [ ] SEO essentials (OG/Twitter, sitemap, robots, schema)
- [ ] Accessibility pass (WCAG AA)
- [ ] Analytics and goals
- [ ] Trust-building content blocks
- [ ] Product detail overlays/pages
- [ ] Legal pages
- [ ] PWA basics
- [ ] Error handling and fallback pages

# Current Status / Progress Tracking
- Mobile typography/buttons adjusted and deployed. Awaiting real-device verification after cache busting.
- **Domain updated**: Все упоминания домена обновлены с `apexglobal.ru` на `apexglobals.ru` (приобретенный домен).
  - Обновлены: canonical URL, Open Graph URL, JSON-LD schema, email адреса, robots.txt, sitemap.xml
  - Исправлена конфигурация vercel.json (убран placeholder API)
  - Исправлена ссылка на иконку в JSON-LD (теперь указывает на logo.png вместо несуществующего icon-512.png)
- **Email отправка заявок**: Реализована отправка заявок на email через SMTP.
  - Установлены зависимости: nodemailer, dotenv
  - Добавлена функция отправки HTML-писем с данными заявки
  - Настройки SMTP через переменные окружения (см. .env.example)
  - Email отправляется асинхронно, не блокируя ответ пользователю
  - Заявки продолжают сохраняться в JSON файл даже если email не отправился

# Executor's Feedback or Assistance Requests
- Confirm preferred analytics platform and whether to include Yandex.Metrica.
- Provide branding assets: partner logos, certifications, testimonials content.
- Confirm whether email/CRM integration (SMTP, Telegram bot, Bitrix24/AMO) is desired.

# Lessons
- Mobile scaling issues often persist due to cache; versioning CSS helped ensure updates.
- Clamp-based typography + breakpoint html font-size yields predictable mobile sizing.
