const products = [
  {
    id: 'apexcore-320',
    name: 'ApexCore 320',
    capacity: 320,
    capacityCategory: 'high',
    type: 'Стационарный комплекс',
    description:
      'Флагманская линия с высокой долей автоматизации, подходит для магистральных проектов и городских программ.',
    fullDescription:
      'ApexCore 320 — это флагманский комплекс для производства асфальтобетона с производительностью 320 тонн в час. Идеально подходит для крупных магистральных проектов и городских программ ремонта дорог. Комплекс включает прецизионную систему дозирования, интеллектуальную горелку с модуляцией пламени и экологическую фильтрацию.',
    features: [
      'Прецизионная система дозирования и контроля влажности',
      'Интеллектуальная горелка с модуляцией пламени',
      'Экологическая фильтрация с автоматической регенерацией рукавов',
      'Интеграция с ERP и системами мониторинга'
    ],
    images: ['./plant.png', './plant.png', './plant.png']
  },
  {
    id: 'apexflex-210',
    name: 'ApexFlex 210',
    capacity: 210,
    capacityCategory: 'medium',
    type: 'Модульный комплекс',
    description:
      'Быстровозводимая модульная конструкция для региональных проектов. Легко масштабируется и транспортируется.',
    fullDescription:
      'ApexFlex 210 — модульный комплекс производительностью 210 тонн в час. Быстровозводимая конструкция идеальна для региональных проектов. Сборка и ввод в эксплуатацию занимают всего 10 дней. Комплекс легко масштабируется и транспортируется благодаря стандартным транспортным габаритам.',
    features: [
      'Сборка и ввод в эксплуатацию за 10 дней',
      'Стандартные транспортные габариты блоков',
      'Опциональные силосы минерального порошка до 80 т',
      'Удалённая диагностика и поддержка 24/7'
    ],
    images: ['./plant.png', './plant.png', './plant.png']
  },
  {
    id: 'apexmobile-160',
    name: 'ApexMobile 160',
    capacity: 160,
    capacityCategory: 'low',
    type: 'Мобильная установка',
    description:
      'Компактный мобильный комплекс для строительства и ремонта дорог в труднодоступных регионах.',
    fullDescription:
      'ApexMobile 160 — компактный мобильный комплекс производительностью 160 тонн в час. Предназначен для строительства и ремонта дорог в труднодоступных регионах. Развертывание на площадке занимает менее 72 часов. Усиленная рама позволяет эксплуатировать комплекс при температуре до -45°C.',
    features: [
      'Развертывание на площадке менее чем за 72 часа',
      'Энергоэффективная дизельная горелка',
      'Усиленная рама для эксплуатации в -45 °C',
      'Комплект телеметрии и удаленного управления'
    ],
    images: ['./plant.png', './plant.png', './plant.png']
  },
  {
    id: 'apexeco-260',
    name: 'ApexEco 260',
    capacity: 260,
    capacityCategory: 'medium',
    type: 'Стационарный комплекс',
    description:
      'Энергоэффективная модель с рекуперацией тепла и сниженным потреблением электроэнергии до 18%.',
    fullDescription:
      'ApexEco 260 — энергоэффективный комплекс производительностью 260 тонн в час. Модель оснащена системой рекуперации тепла сушильного барабана, что позволяет снизить потребление электроэнергии до 18%. Замкнутый цикл пылеулавливания обеспечивает экологичность производства.',
    features: [
      'Замкнутый цикл пылеулавливания',
      'Рекуперация тепла сушильного барабана',
      'Автоматизированная система контроля качества',
      'Опция переработки РАП до 40 %'
    ],
    images: ['./plant.png', './plant.png', './plant.png']
  },
  {
    id: 'apexmicro-140',
    name: 'ApexMicro 140',
    capacity: 140,
    capacityCategory: 'low',
    type: 'Компактный комплекс',
    description:
      'Решение для муниципальных подрядчиков и небольших производств с упором на безостановочный цикл.',
    fullDescription:
      'ApexMicro 140 — компактный комплекс производительностью 140 тонн в час. Идеальное решение для муниципальных подрядчиков и небольших производств. Компактная планировка и пониженное энергопотребление делают его экономически выгодным для небольших проектов.',
    features: [
      'Компактная планировка и пониженное энергопотребление',
      'Автоматическое ведение журнальных записей',
      'Опция комплектования силосом минералов 40 т',
      'Оптимизированная логистика и монтаж'
    ],
    images: ['./plant.png', './plant.png', './plant.png']
  },
  {
    id: 'apexpro-400',
    name: 'ApexPro 400',
    capacity: 400,
    capacityCategory: 'high',
    type: 'Высокопроизводительный комплекс',
    description:
      'Максимальная производительность для федеральных проектов, резервирование ключевых узлов и двойные циклы.',
    fullDescription:
      'ApexPro 400 — высокопроизводительный комплекс с максимальной производительностью 400 тонн в час. Предназначен для федеральных проектов и крупных инфраструктурных объектов. Двойной смесительный узел обеспечивает непрерывное производство, а резервирование ключевых узлов гарантирует надежность работы.',
    features: [
      'Двойной смесительный узел',
      'Система автоматической подачи добавок и модификаторов',
      'Непрерывный контроль качества смеси',
      'Встроенный центр диагностики и аналитики'
    ],
    images: ['./plant.png', './plant.png', './plant.png']
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

// Модальное окно
const productModal = document.querySelector('#product-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const galleryMain = document.querySelector('#gallery-main');
const galleryThumbnails = document.querySelector('#gallery-thumbnails');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');

let currentGalleryIndex = 0;
let currentProductImages = [];

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
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Открыть подробную информацию о ${product.name}`);
  card.setAttribute('aria-describedby', `product-${product.id}-desc`);

  const title = document.createElement('h3');
  title.textContent = product.name;

  const description = document.createElement('p');
  description.textContent = product.description;
  description.id = `product-${product.id}-desc`;

  card.appendChild(title);
  card.appendChild(createMetaRow(product));
  card.appendChild(description);
  card.appendChild(createFeatureList(product.features));

  const handleActivate = () => {
    openProductModal(product.id);
  };

  card.addEventListener('click', handleActivate);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleActivate();
    }
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

// Функции для модального окна
let previousFocusElement = null;

function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product || !productModal) return;

  // Сохраняем элемент, который открыл модальное окно
  previousFocusElement = document.activeElement;

  currentProductImages = product.images || [];
  currentGalleryIndex = 0;

  // Заполняем информацию о продукте
  document.querySelector('#modal-title').textContent = product.name;
  document.querySelector('#modal-description').textContent = product.fullDescription || product.description;
  
  const modalMeta = document.querySelector('#modal-meta');
  modalMeta.innerHTML = '';
  const metaRow = createMetaRow(product);
  modalMeta.appendChild(metaRow);

  const modalFeatures = document.querySelector('#modal-features');
  modalFeatures.innerHTML = '';
  const featuresList = createFeatureList(product.features);
  featuresList.className = 'modal-features-list';
  modalFeatures.appendChild(featuresList);

  // Выбираем продукт в форме
  selectProduct(productId);

  // Обновляем галерею
  updateGallery();

  // Открываем модальное окно
  productModal.setAttribute('aria-hidden', 'false');
  productModal.setAttribute('aria-modal', 'true');
  productModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Устанавливаем focus trap
  setupFocusTrap();

  // Фокус на кнопку закрытия для доступности
  modalClose?.focus();
}

function closeProductModal() {
  if (!productModal) return;
  productModal.setAttribute('aria-hidden', 'true');
  productModal.removeAttribute('aria-modal');
  productModal.classList.remove('is-open');
  document.body.style.overflow = '';
  
  // Удаляем focus trap
  removeFocusTrap();

  // Возвращаем фокус на элемент, который открыл модальное окно
  if (previousFocusElement) {
    previousFocusElement.focus();
    previousFocusElement = null;
  }
}

function setupFocusTrap() {
  const focusableElements = productModal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (event) => {
    if (event.key !== 'Tab') return;
    
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  };

  productModal.addEventListener('keydown', handleTabKey);
  productModal._focusTrapHandler = handleTabKey;
}

function removeFocusTrap() {
  if (productModal._focusTrapHandler) {
    productModal.removeEventListener('keydown', productModal._focusTrapHandler);
    productModal._focusTrapHandler = null;
  }
}

function updateGallery() {
  if (!galleryMain || !galleryThumbnails || currentProductImages.length === 0) return;

  // Основное изображение
  galleryMain.innerHTML = '';
  const mainImg = document.createElement('img');
  mainImg.src = currentProductImages[currentGalleryIndex];
  mainImg.alt = `Изображение ${currentGalleryIndex + 1}`;
  mainImg.className = 'gallery-main-image';
  galleryMain.appendChild(mainImg);

  // Миниатюры
  galleryThumbnails.innerHTML = '';
  currentProductImages.forEach((imgSrc, index) => {
    const thumb = document.createElement('button');
    thumb.className = `gallery-thumb ${index === currentGalleryIndex ? 'active' : ''}`;
    thumb.type = 'button';
    thumb.setAttribute('aria-label', `Показать изображение ${index + 1}`);
    const thumbImg = document.createElement('img');
    thumbImg.src = imgSrc;
    thumbImg.alt = `Миниатюра ${index + 1}`;
    thumb.appendChild(thumbImg);
    thumb.addEventListener('click', () => {
      currentGalleryIndex = index;
      updateGallery();
    });
    galleryThumbnails.appendChild(thumb);
  });

  // Показываем/скрываем кнопки навигации
  if (galleryPrev && galleryNext) {
    galleryPrev.style.display = currentProductImages.length > 1 ? 'flex' : 'none';
    galleryNext.style.display = currentProductImages.length > 1 ? 'flex' : 'none';
  }
}

function navigateGallery(direction) {
  if (currentProductImages.length === 0) return;
  if (direction === 'next') {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentProductImages.length;
  } else {
    currentGalleryIndex = currentGalleryIndex === 0 ? currentProductImages.length - 1 : currentGalleryIndex - 1;
  }
  updateGallery();
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

  // Проверка обязательных полей
  const name = formData.get('name')?.trim() || '';
  if (!name || name.length < 2) {
    showToast('Укажите имя и компанию (не менее 2 символов).', 'error');
    document.querySelector('#name')?.focus();
    return;
  }

  const rawPhone = String(formData.get('phone') || '').trim();
  const phoneDigits = rawPhone.replace(/\D+/g, '');
  const isValidPhone = phoneDigits.length >= 11 && (phoneDigits.startsWith('7') || phoneDigits.startsWith('8'));

  const payload = {
    name: name,
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
    navbarLinks.setAttribute('aria-hidden', 'true');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.focus();
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onOutsideClick, true);
  };

  const openMenu = () => {
    navbarLinks.classList.add('is-open');
    navbarLinks.setAttribute('aria-hidden', 'false');
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
      // Пропускаем skip-link - разрешаем стандартное поведение для доступности
      if (anchor.classList.contains('skip-link')) {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          // Переводим фокус на цель после перехода
          setTimeout(() => {
            target.setAttribute('tabindex', '-1');
            target.focus();
            target.removeAttribute('tabindex');
          }, 100);
        }
        return; // Разрешаем стандартное поведение браузера
      }
      
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
  // Не выбираем продукт автоматически - пользователь должен сделать выбор явно
  // selectProduct(products[0].id);
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

  // Модальное окно
  if (modalClose) {
    modalClose.addEventListener('click', closeProductModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeProductModal);
  }
  if (galleryPrev) {
    galleryPrev.addEventListener('click', () => navigateGallery('prev'));
  }
  if (galleryNext) {
    galleryNext.addEventListener('click', () => navigateGallery('next'));
  }

  // Закрытие по Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && productModal?.classList.contains('is-open')) {
      closeProductModal();
    }
  });

}

// Обработка глобальных ошибок JavaScript
window.addEventListener('error', (event) => {
  console.error('JS Error:', event.error);
  // В production можно отправлять ошибки на сервер
  if (window.toast && typeof showToast === 'function') {
    showToast('Произошла ошибка. Пожалуйста, обновите страницу.', 'error');
  }
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  if (window.toast && typeof showToast === 'function') {
    showToast('Произошла ошибка при загрузке данных.', 'error');
  }
});

// Регистрация Service Worker для PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then((registration) => {
        console.log('SW registered:', registration);
      })
      .catch((error) => {
        console.log('SW registration failed:', error);
      });
  });
}

document.addEventListener('DOMContentLoaded', init);
