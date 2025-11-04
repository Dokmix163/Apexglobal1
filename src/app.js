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
    ],
    images: ['./plant.png'],
    specs: {
      'Производительность': '320 т/ч',
      'Мощность горелки': '25 МВт',
      'Объём смесителя': '3,5 м³',
      'Температура сушки': 'до 180°C',
      'Потребление электроэнергии': '450 кВт',
      'Размеры площадки': '45×60 м',
      'Вес оборудования': '85 т'
    }
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
    ],
    images: ['./plant.png'],
    specs: {
      'Производительность': '210 т/ч',
      'Мощность горелки': '18 МВт',
      'Объём смесителя': '2,8 м³',
      'Температура сушки': 'до 180°C',
      'Потребление электроэнергии': '320 кВт',
      'Размеры площадки': '35×50 м',
      'Вес оборудования': '65 т'
    }
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
    ],
    images: ['./plant.png'],
    specs: {
      'Производительность': '160 т/ч',
      'Мощность горелки': '14 МВт',
      'Объём смесителя': '2,2 м³',
      'Температура сушки': 'до 180°C',
      'Потребление электроэнергии': '250 кВт',
      'Размеры площадки': '30×40 м',
      'Вес оборудования': '48 т'
    }
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
    ],
    images: ['./plant.png'],
    specs: {
      'Производительность': '260 т/ч',
      'Мощность горелки': '20 МВт',
      'Объём смесителя': '3,0 м³',
      'Температура сушки': 'до 180°C',
      'Потребление электроэнергии': '280 кВт',
      'Размеры площадки': '40×55 м',
      'Вес оборудования': '72 т'
    }
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
    ],
    images: ['./plant.png'],
    specs: {
      'Производительность': '140 т/ч',
      'Мощность горелки': '12 МВт',
      'Объём смесителя': '2,0 м³',
      'Температура сушки': 'до 180°C',
      'Потребление электроэнергии': '220 кВт',
      'Размеры площадки': '28×38 м',
      'Вес оборудования': '42 т'
    }
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
    ],
    images: ['./plant.png'],
    specs: {
      'Производительность': '400 т/ч',
      'Мощность горелки': '32 МВт',
      'Объём смесителя': '4,5 м³',
      'Температура сушки': 'до 180°C',
      'Потребление электроэнергии': '650 кВт',
      'Размеры площадки': '55×70 м',
      'Вес оборудования': '120 т'
    }
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

  // Обработка клика и touch для мобильных
  let touchStartTime = 0;
  let touchMoved = false;

  const handleCardActivation = (e) => {
    // Предотвращаем открытие модалки если клик по ссылке внутри карточки
    if (e.target.tagName === 'A') {
      return;
    }
    
    // Проверяем, не был ли это swipe
    if (touchMoved) {
      return;
    }
    
    e.stopPropagation();
    openProductModal(product.id);
  };

  // Обработка touch событий
  card.addEventListener('touchstart', (e) => {
    touchStartTime = Date.now();
    touchMoved = false;
  }, { passive: true });

  card.addEventListener('touchmove', () => {
    touchMoved = true;
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    const touchDuration = Date.now() - touchStartTime;
    
    // Если это был быстрый тап (менее 300ms) и не было движения
    if (!touchMoved && touchDuration < 300) {
      e.preventDefault();
      handleCardActivation(e);
    }
  }, { passive: false });

  // Обработка клика для десктопа
  card.addEventListener('click', (e) => {
    // На мобильных устройствах click может сработать после touchend
    // Поэтому проверяем, не было ли это touch событие
    if (Date.now() - touchStartTime < 400) {
      return;
    }
    handleCardActivation(e);
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

// Модальное окно деталей продукта
let currentGalleryIndex = 0;
let currentGalleryImages = [];

function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    console.log('Product not found:', productId);
    return;
  }
  
  console.log('Opening modal for product:', product.name);

  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalDescription = document.getElementById('modal-description');
  const specsList = document.getElementById('specs-list');
  const featuresList = document.getElementById('features-list-modal');
  const galleryTrack = document.getElementById('gallery-track');
  const galleryIndicators = document.getElementById('gallery-indicators');

  // Заполняем заголовок и мета-информацию
  modalTitle.textContent = product.name;
  modalMeta.innerHTML = `
    <span class="meta-tag">${product.capacity} т/ч</span>
    <span class="meta-tag">${product.type}</span>
  `;
  modalDescription.textContent = product.description;

  // Заполняем технические характеристики
  specsList.innerHTML = '';
  if (product.specs) {
    Object.entries(product.specs).forEach(([key, value]) => {
      const dt = document.createElement('dt');
      dt.textContent = key;
      const dd = document.createElement('dd');
      dd.textContent = value;
      specsList.appendChild(dt);
      specsList.appendChild(dd);
    });
  }

  // Заполняем особенности
  featuresList.innerHTML = '';
  product.features.forEach((feature) => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Создаем карусель изображений
  currentGalleryImages = product.images || ['./plant.png'];
  currentGalleryIndex = 0;
  galleryTrack.innerHTML = '';
  galleryIndicators.innerHTML = '';

  currentGalleryImages.forEach((imgSrc, index) => {
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'gallery-slide';
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `${product.name} - изображение ${index + 1}`;
    img.loading = 'lazy';
    imgWrapper.appendChild(img);
    galleryTrack.appendChild(imgWrapper);

    const indicator = document.createElement('button');
    indicator.className = 'gallery-indicator';
    indicator.setAttribute('aria-label', `Перейти к изображению ${index + 1}`);
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToGallerySlide(index));
    galleryIndicators.appendChild(indicator);
  });

  updateGallery();

  // Показываем модальное окно
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Выбираем продукт в форме
  selectProduct(productId);
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

function goToGallerySlide(index) {
  if (index < 0 || index >= currentGalleryImages.length) return;
  currentGalleryIndex = index;
  updateGallery();
}

function updateGallery() {
  const galleryTrack = document.getElementById('gallery-track');
  const indicators = document.querySelectorAll('.gallery-indicator');
  
  if (galleryTrack) {
    galleryTrack.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
  }

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentGalleryIndex);
  });
}

function setupProductModal() {
  const modal = document.getElementById('product-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close');
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');
  const modalSelectBtn = document.getElementById('modal-select-btn');

  if (!modal) return;

  // Закрытие по клику на backdrop
  modalBackdrop?.addEventListener('click', closeProductModal);
  
  // Закрытие по кнопке
  modalClose?.addEventListener('click', closeProductModal);

  // Закрытие по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeProductModal();
    }
  });

  // Навигация по галерее
  galleryPrev?.addEventListener('click', () => {
    const newIndex = currentGalleryIndex > 0 
      ? currentGalleryIndex - 1 
      : currentGalleryImages.length - 1;
    goToGallerySlide(newIndex);
  });

  galleryNext?.addEventListener('click', () => {
    const newIndex = currentGalleryIndex < currentGalleryImages.length - 1
      ? currentGalleryIndex + 1
      : 0;
    goToGallerySlide(newIndex);
  });

  // Кнопка выбора продукта
  modalSelectBtn?.addEventListener('click', () => {
    const productId = state.selectedProductId;
    if (productId) {
      closeProductModal();
      // Прокручиваем к форме
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  // Swipe для мобильных
  let touchStartX = 0;
  let touchEndX = 0;
  const galleryViewport = document.querySelector('.gallery-viewport');
  
  if (galleryViewport) {
    galleryViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    galleryViewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next
        const newIndex = currentGalleryIndex < currentGalleryImages.length - 1
          ? currentGalleryIndex + 1
          : 0;
        goToGallerySlide(newIndex);
      } else {
        // Swipe right - prev
        const newIndex = currentGalleryIndex > 0 
          ? currentGalleryIndex - 1 
          : currentGalleryImages.length - 1;
        goToGallerySlide(newIndex);
      }
    }
  }
}

function init() {
  renderProducts();
  selectProduct(products[0].id);
  setupRevealAnimations();
  setupNavbar();
  setupSmoothAnchors();
  setupProductModal();

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
