const products = [
  {
    id: 'apexcore-320',
    name: 'ApexCore 320',
    capacity: 320,
    capacityCategory: 'high',
    type: 'Стационарный комплекс',
    description:
      'Флагманская линия с высокой долей автоматизации, подходит для магистральных проектов и городских программ.',
    features: [
      'Прецизионная система дозирования и контроля влажности',
      'Интеллектуальная горелка с модуляцией пламени',
      'Экологическая фильтрация с автоматической регенерацией рукавов',
      'Интеграция с ERP и системами мониторинга'
    ]
  },
  {
    id: 'apexflex-210',
    name: 'ApexFlex 210',
    capacity: 210,
    capacityCategory: 'medium',
    type: 'Модульный комплекс',
    description:
      'Быстровозводимая модульная конструкция для региональных проектов. Легко масштабируется и транспортируется.',
    features: [
      'Сборка и ввод в эксплуатацию за 10 дней',
      'Стандартные транспортные габариты блоков',
      'Опциональные силосы минерального порошка до 80 т',
      'Удалённая диагностика и поддержка 24/7'
    ]
  },
  {
    id: 'apexmobile-160',
    name: 'ApexMobile 160',
    capacity: 160,
    capacityCategory: 'low',
    type: 'Мобильная установка',
    description:
      'Компактный мобильный комплекс для строительства и ремонта дорог в труднодоступных регионах.',
    features: [
      'Развертывание на площадке менее чем за 72 часа',
      'Энергоэффективная дизельная горелка',
      'Усиленная рама для эксплуатации в -45 °C',
      'Комплект телеметрии и удаленного управления'
    ]
  },
  {
    id: 'apexeco-260',
    name: 'ApexEco 260',
    capacity: 260,
    capacityCategory: 'medium',
    type: 'Стационарный комплекс',
    description:
      'Энергоэффективная модель с рекуперацией тепла и сниженным потреблением электроэнергии до 18%.',
    features: [
      'Замкнутый цикл пылеулавливания',
      'Рекуперация тепла сушильного барабана',
      'Автоматизированная система контроля качества',
      'Опция переработки РАП до 40 %'
    ]
  },
  {
    id: 'apexmicro-140',
    name: 'ApexMicro 140',
    capacity: 140,
    capacityCategory: 'low',
    type: 'Компактный комплекс',
    description:
      'Решение для муниципальных подрядчиков и небольших производств с упором на безостановочный цикл.',
    features: [
      'Компактная планировка и пониженное энергопотребление',
      'Автоматическое ведение журнальных записей',
      'Опция комплектования силосом минералов 40 т',
      'Оптимизированная логистика и монтаж'
    ]
  },
  {
    id: 'apexpro-400',
    name: 'ApexPro 400',
    capacity: 400,
    capacityCategory: 'high',
    type: 'Высокопроизводительный комплекс',
    description:
      'Максимальная производительность для федеральных проектов, резервирование ключевых узлов и двойные циклы.',
    features: [
      'Двойной смесительный узел',
      'Система автоматической подачи добавок и модификаторов',
      'Непрерывный контроль качества смеси',
      'Встроенный центр диагностики и аналитики'
    ]
  }
];

const state = {
  selectedProductId: null
};

const catalogGrid = document.querySelector('[data-catalog-grid]');
const capacityFilter = document.querySelector('#capacity-filter');
const toast = document.querySelector('#toast');
const form = document.querySelector('#inquiry-form');
const consent = document.querySelector('#consent');
const phoneInput = document.querySelector('#phone');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

const selectedProductName = document.querySelector('#selected-product-name');
const selectedProductCapacity = document.querySelector('#selected-product-capacity');
const selectedProductInput = document.querySelector('#productId');

function createFeatureList(features) {
  const list = document.createElement('ul');
  list.className = 'feature-list';

  features.forEach((feature) => {
    const item = document.createElement('li');
    item.textContent = feature;
    list.appendChild(item);
  });

  return list;
}

function createMetaRow(product) {
  const wrapper = document.createElement('div');
  wrapper.className = 'product-meta';

  const capacityTag = document.createElement('span');
  capacityTag.textContent = `${product.capacity} т/ч`;
  wrapper.appendChild(capacityTag);

  const typeTag = document.createElement('span');
  typeTag.textContent = product.type;
  wrapper.appendChild(typeTag);

  return wrapper;
}

function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.productId = product.id;

  const title = document.createElement('h3');
  title.textContent = product.name;

  const description = document.createElement('p');
  description.textContent = product.description;

  card.appendChild(title);
  card.appendChild(createMetaRow(product));
  card.appendChild(description);
  card.appendChild(createFeatureList(product.features));

  card.addEventListener('click', () => {
    selectProduct(product.id, { scroll: true });
  });

  return card;
}

function renderProducts(filterValue = 'all') {
  catalogGrid.innerHTML = '';

  const filteredProducts =
    filterValue === 'all'
      ? products
      : products.filter((product) => product.capacityCategory === filterValue);

  filteredProducts.forEach((product) => {
    const card = createProductCard(product);
    catalogGrid.appendChild(card);
  });

  if (
    filteredProducts.length &&
    !filteredProducts.some((product) => product.id === state.selectedProductId)
  ) {
    selectProduct(filteredProducts[0].id);
  } else {
    selectProduct(state.selectedProductId);
  }

  if (!filteredProducts.length) {
    const empty = document.createElement('div');
    empty.className = 'product-empty';
    empty.textContent = 'Нет решений под выбранные параметры. Попробуйте изменить фильтр.';
    catalogGrid.appendChild(empty);
  }
}

function selectProduct(productId, options = {}) {
  if (!productId) {
    return;
  }
  const { scroll = false } = options;
  state.selectedProductId = productId;

  document.querySelectorAll('.product-card').forEach((card) => {
    const isActive = card.dataset.productId === productId;
    card.classList.toggle('active', isActive);
    if (isActive && scroll) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  const product = products.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  selectedProductName.textContent = product.name;
  selectedProductCapacity.textContent = `${product.capacity} т/ч • ${product.type}`;
  selectedProductInput.value = product.id;
}

function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.className = `toast ${type}`;
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 4200);
}

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  // Honeypot: silently drop
  if (formData.get('website')) {
    return;
  }

  if (consent && !consent.checked) {
    showToast('Подтвердите согласие на обработку персональных данных.', 'error');
    consent.focus();
    return;
  }

  const rawPhone = String(formData.get('phone') || '').trim();
  const phoneDigits = rawPhone.replace(/\D+/g, '');
  const isValidPhone = phoneDigits.length >= 11 && (phoneDigits.startsWith('7') || phoneDigits.startsWith('8'));

  const payload = {
    name: formData.get('name')?.trim(),
    phone: rawPhone,
    email: formData.get('email')?.trim(),
    productId: formData.get('productId')?.trim(),
    message: formData.get('message')?.trim()
  };

  if (!payload.productId) {
    showToast('Выберите комплекс в каталоге перед отправкой заявки.', 'error');
    return;
  }

  if (!isValidPhone) {
    showToast('Введите корректный телефон в формате +7 (___) ___-__-__', 'error');
    phoneInput?.focus();
    return;
  }

  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Не удалось отправить заявку');
    }

    showToast(result.message || 'Заявка отправлена', 'success');
    form.reset();
    selectedProductInput.value = payload.productId;
  } catch (error) {
    showToast(
      error.message || 'Произошла техническая ошибка. Попробуйте повторить попытку позже.',
      'error'
    );
  }
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  targets.forEach((target) => observer.observe(target));
}

function setupNavbar() {
  if (!navbarToggle || !navbarLinks) {
    return;
  }

  const firstMenuLink = navbarLinks.querySelector('a');
  const closeMenu = () => {
    navbarLinks.classList.remove('is-open');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.focus();
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onOutsideClick, true);
  };

  const openMenu = () => {
    navbarLinks.classList.add('is-open');
    navbarToggle.setAttribute('aria-expanded', 'true');
    if (firstMenuLink) {
      firstMenuLink.focus();
    }
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onOutsideClick, true);
  };

  const onKeydown = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const onOutsideClick = (event) => {
    if (!navbarLinks.contains(event.target) && event.target !== navbarToggle) {
      closeMenu();
    }
  };

  navbarToggle.addEventListener('click', () => {
    const isOpen = navbarLinks.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navbarLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function init() {
  renderProducts();
  selectProduct(products[0].id);
  setupRevealAnimations();
  setupNavbar();
  setupSmoothAnchors();

  capacityFilter?.addEventListener('change', (event) => {
    renderProducts(event.target.value);
  });

  form?.addEventListener('submit', handleSubmit);

  // Simple phone mask
  if (phoneInput) {
    // Prefill with +7 on load if empty
    if (!phoneInput.value.trim()) {
      phoneInput.value = '+7 ';
    }

    // Ensure +7 appears on focus if cleared
    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value.trim() || !phoneInput.value.trim().startsWith('+7')) {
        phoneInput.value = '+7 ';
      }
    });

    phoneInput.addEventListener('input', () => {
      let digits = phoneInput.value.replace(/\D+/g, '');
      if (digits.startsWith('8')) digits = '7' + digits.slice(1);
      if (!digits.startsWith('7')) digits = '7' + digits;
      const parts = ['+7'];
      if (digits.length > 1) {
        const a = digits.slice(1, 4);
        if (a) parts.push(` (${a}`);
        const b = digits.slice(4, 7);
        if (b) parts.push(`) ${b}`);
        const c = digits.slice(7, 9);
        if (c) parts.push(`-${c}`);
        const d = digits.slice(9, 11);
        if (d) parts.push(`-${d}`);
      }
      phoneInput.value = parts.join('');
    });
  }

  document.addEventListener('mousemove', (event) => {
    const orb = document.querySelector('.orb');
    if (!orb) {
      return;
    }
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
}

document.addEventListener('DOMContentLoaded', init);
