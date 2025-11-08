# Background and Motivation
ApexGlobal landing showcases products and captures inquiries. Mobile responsiveness improved, but the site can benefit from better UX, SEO, accessibility, performance, and conversion tooling.

**Последнее обновление:** Проведен анализ конкурентов и составлен план улучшений сайта на основе лучших практик индустрии промышленного оборудования.

# Competitive Analysis

## Анализ конкурентов в нише асфальтобетонных заводов

### Типичные практики конкурентов (на основе анализа индустрии B2B промышленного оборудования):

**1. Контент и структура:**
- Детальные страницы продуктов с техническими характеристиками, галереями, видео
- Раздел "Проекты/Кейсы" с реальными примерами установок и отзывами клиентов
- Блог/Новости с техническими статьями и обновлениями
- Раздел "Сервис и поддержка" с описанием гарантий, запчастей, обучения
- FAQ раздел с ответами на частые вопросы
- Калькулятор стоимости/конфигуратор оборудования
- Виртуальные туры по производству или установкам

**2. Функциональность:**
- Онлайн-чат (JivoSite, Intercom, Yandex.Chat) для быстрой связи
- Множественные формы обратной связи (быстрая заявка, запрос коммерческого предложения, заказ звонка)
- Интеграция с CRM (Bitrix24, AMO CRM) для автоматизации продаж
- Личный кабинет для клиентов (отслеживание заказов, документация)
- Система бронирования консультаций/встреч
- Интеграция с мессенджерами (WhatsApp, Telegram, Viber)
- Видео-консультации через сайт

**3. Доверие и социальное доказательство:**
- Логотипы клиентов/партнеров
- Сертификаты и лицензии
- Отзывы и рекомендации с фото/видео
- Статистика (количество установок, лет на рынке, регионы работы)
- Награды и достижения
- Публикации в СМИ

**4. SEO и контент-маркетинг:**
- Региональные страницы (АБЗ в Москве, СПб, регионах)
- Технические статьи и гайды
- Видео-контент на YouTube с интеграцией на сайт
- Инфографика и схемы работы оборудования
- Сравнительные таблицы моделей
- FAQ с длинными хвостами запросов

**5. UX/UI улучшения:**
- Интерактивные 3D модели оборудования
- Виртуальные туры по заводу
- Анимированные схемы работы оборудования
- Интерактивные калькуляторы производительности
- Прогресс-бар в формах (шаг 1 из 3)
- Персонализация контента по типу посетителя (подрядчик, производитель, инвестор)

**6. Конверсионные элементы:**
- Стикеры с телефоном и WhatsApp
- Всплывающие окна с предложениями (скидки, акции)
- Таймеры ограниченных предложений
- Квизы для подбора оборудования
- Сравнение "до/после" установки оборудования
- ROI калькулятор (окупаемость инвестиций)

### Сильные стороны текущего сайта ApexGlobal:
✅ Современный дизайн с хорошей типографикой
✅ Адаптивная верстка
✅ Модальные окна продуктов с детальной информацией
✅ Форма обратной связи с валидацией
✅ Базовая SEO оптимизация (OG теги, schema.org)
✅ PWA поддержка

### Слабые стороны (по сравнению с конкурентами):
❌ Нет раздела с кейсами/проектами
❌ Нет отзывов клиентов
❌ Нет онлайн-чата
❌ Нет калькулятора стоимости
❌ Нет FAQ раздела
❌ Нет блога/новостей
❌ Нет видео-контента
❌ Нет сертификатов/лицензий на сайте
❌ Нет логотипов клиентов
❌ Нет интеграции с мессенджерами
❌ Ограниченная информация о компании (нет истории, команды, производства)

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

## Приоритет 1: Конверсионные улучшения (быстрый эффект)

1) Добавить онлайн-чат
- Интеграция JivoSite или Yandex.Chat
- Настройка автоответов и рабочего времени
- Success criteria: Чат доступен на всех страницах, отвечает на базовые вопросы автоматически

2) Добавить раздел "Клиенты и проекты"
- Галерея логотипов клиентов/партнеров
- Кейсы с фото установок, описанием проекта, результатами
- Карта проектов по регионам России
- Success criteria: Минимум 5-10 кейсов с фото и описанием, карта показывает геолокацию проектов

3) Добавить отзывы клиентов
- Секция с отзывами на главной странице
- Отдельная страница с расширенными отзывами
- Возможность добавления фото/видео к отзывам
- Success criteria: 5-10 отзывов с именами, компаниями, фото (или аватарами)

4) Добавить FAQ раздел
- Частые вопросы по оборудованию, установке, сервису
- Аккордеон или вкладки для удобной навигации
- SEO-оптимизированные ответы с длинными хвостами
- Success criteria: 15-20 вопросов, структурированных по категориям, индексация в Google

5) Улучшить форму обратной связи
- Добавить тип запроса (консультация, коммерческое предложение, сервис)
- Добавить поле "Регион" для региональной аналитики
- Добавить быструю форму "Заказать звонок" (только имя и телефон)
- Success criteria: Разные типы форм, аналитика по типам запросов

## Приоритет 2: Контент и доверие

6) Добавить раздел "О компании" (расширенный)
- История компании, миссия, ценности
- Фото производства, команды
- Сертификаты и лицензии (галерея)
- Награды и достижения
- Success criteria: Полноценная страница "О нас" с визуальным контентом

7) Добавить калькулятор стоимости/конфигуратор
- Интерактивный выбор параметров (производительность, тип, опции)
- Автоматический расчет примерной стоимости
- Формирование коммерческого предложения
- Success criteria: Рабочий калькулятор с сохранением конфигурации в форму

8) Добавить видео-контент
- Видео о компании (1-2 минуты)
- Видео-обзоры оборудования
- Видео-отзывы клиентов
- Интеграция YouTube канала
- Success criteria: Минимум 3-5 видео на сайте, YouTube канал создан

9) Добавить блог/новости
- Технические статьи об асфальтобетоне
- Новости компании и индустрии
- Кейсы и проекты в формате статей
- SEO-оптимизация статей
- Success criteria: 5-10 статей при запуске, план публикаций 1-2 раза в месяц

## Приоритет 3: Функциональность и интеграции

10) Интеграция с мессенджерами
- Кнопки WhatsApp, Telegram, Viber
- Автоматическая отправка заявок в мессенджеры
- Success criteria: Кнопки видны на всех страницах, работают на мобильных устройствах

11) Добавить систему бронирования консультаций
- Календарь доступности специалистов
- Выбор времени для звонка/встречи
- Напоминания по email/SMS
- Success criteria: Рабочая система бронирования с календарем

12) Добавить личный кабинет клиента (опционально)
- История заявок и заказов
- Доступ к документации и спецификациям
- Отслеживание статуса заказа
- Success criteria: Базовая версия ЛК с авторизацией

## Приоритет 4: Технические улучшения

13) Enhance mobile nav accessibility and UX
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

## Новые задачи (приоритет конверсии):
- [ ] Добавить онлайн-чат (JivoSite/Yandex.Chat)
- [ ] Создать раздел "Клиенты и проекты" с кейсами
- [ ] Добавить отзывы клиентов
- [ ] Создать FAQ раздел
- [ ] Улучшить формы обратной связи (типы запросов, быстрая форма)
- [ ] Расширить раздел "О компании" (история, команда, сертификаты)
- [ ] Добавить калькулятор стоимости/конфигуратор
- [ ] Добавить видео-контент (о компании, обзоры, отзывы)
- [ ] Создать блог/новости
- [ ] Интеграция с мессенджерами (WhatsApp, Telegram, Viber)
- [ ] Система бронирования консультаций
- [ ] Личный кабинет клиента (опционально)

## Существующие задачи:
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

# Competitive Analysis Summary

## Ключевые выводы из анализа конкурентов:

1. **Контент - король**: Конкуренты активно используют кейсы, отзывы, видео для построения доверия
2. **Множественные точки контакта**: Онлайн-чат, мессенджеры, формы разных типов увеличивают конверсию
3. **Образовательный контент**: Блоги и FAQ помогают в SEO и позиционировании как эксперта
4. **Интерактивность**: Калькуляторы и конфигураторы вовлекают пользователей и собирают данные
5. **Социальное доказательство**: Логотипы клиентов, сертификаты, статистика критически важны для B2B

## Рекомендуемый порядок внедрения:

**Фаза 1 (1-2 недели) - Быстрые победы:**
- Онлайн-чат
- Отзывы клиентов
- FAQ раздел
- Интеграция мессенджеров

**Фаза 2 (2-4 недели) - Контент:**
- Раздел "Клиенты и проекты"
- Расширенный "О компании"
- Видео-контент
- Калькулятор стоимости

**Фаза 3 (1-2 месяца) - Долгосрочный контент:**
- Блог/новости
- Система бронирования
- Личный кабинет (если требуется)

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
- **Новые запросы:**
- Предоставить контент для кейсов (фото проектов, описания, результаты)
- Предоставить отзывы клиентов (тексты, имена, компании, фото если есть)
- Выбрать платформу для онлайн-чата (JivoSite, Yandex.Chat, или другая)
- Предоставить видео-материалы (о компании, обзоры оборудования) или подтвердить создание новых
- Подготовить FAQ вопросы и ответы (минимум 15-20)
- Решить о необходимости личного кабинета клиента

# Lessons
- Mobile scaling issues often persist due to cache; versioning CSS helped ensure updates.
- Clamp-based typography + breakpoint html font-size yields predictable mobile sizing.
