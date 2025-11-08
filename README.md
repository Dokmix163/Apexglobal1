# ApexGlobal — корпоративный сайт

Современный лендинг для компании ApexGlobal, поставляющей асфальтобетонные заводы по всей России. Проект выполнен в темной палитре с золотыми акцентами, включает каталог решений, форму подбора комплекса и анимации при прокрутке.

## Технологии
- Node.js (встроенный HTTP-сервер без сторонних зависимостей)
- Статический фронтенд на HTML/CSS/JavaScript
- IntersectionObserver и CSS-анимации для плавных эффектов

## Команды
Запускаются из корня репозитория.

```bash
# режим разработки (отдаёт файлы из src/)
npm run dev

# сборка статического фронтенда в dist/
npm run build

# продакшн-режим (использует dist/, переменная PORT поддерживается платформой)
npm start
```

После отправки формы заявки данные сохраняются в `data/inquiries.json` и отправляются на email (если настроен SMTP).

## Настройка отправки email

Для настройки отправки заявок на email создайте файл `.env` в корне проекта на основе `.env.example`:

```bash
cp .env.example .env
```

Заполните переменные окружения в `.env`:

```env
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yandex.ru
SMTP_PASS=your-password
EMAIL_TO=sales@apexglobals.ru
EMAIL_FROM=noreply@apexglobals.ru
```

### Примеры настроек для популярных почтовых сервисов:

**Yandex Mail:**
```env
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yandex.ru
SMTP_PASS=your-password
```

**Gmail / Google Workspace:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Используйте пароль приложения, не обычный пароль
```

**Mail.ru:**
```env
SMTP_HOST=smtp.mail.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@mail.ru
SMTP_PASS=your-password
```

**Примечание:** Если SMTP настройки не заданы, заявки будут сохраняться только в файл `data/inquiries.json`, но email отправляться не будет.

## Структура проекта
```
.
├── src/                 # исходники фронтенда
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── dist/                # результат сборки (создаётся автоматически)
├── scripts/
│   └── build.js         # node-скрипт копирования src → dist
├── server.js            # HTTP-сервер и API /api/inquiry
├── data/                # заявки клиентов (создаётся во время работы)
├── package.json
└── README.md
```

## Дополнительные замечания
- В каталоге реализован выбор продукта с фильтром по производительности и последующей привязкой к заявке.
- API `/api/inquiry` возвращает JSON-ответы и отправляет заявки на email (если настроен SMTP).
- Для локальной проверки формы убедитесь, что сервер запущен (`npm run dev` или `npm start`), чтобы запросы уходили на backend.
- Переменные окружения для SMTP можно также настроить в панели управления вашего хостинга (Vercel, Heroku и т.д.).
