const products = [
  {
    id: 'apexcore-320',
    name: 'ApexCore 320',
    capacity: 320,
    capacityCategory: 'high',
    type: 'Стационарный комплекс',
    badges: [{ type: 'top', text: 'Топ продажа' }],
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
    includes: [
      { icon: '⚙️', text: 'Сушильный барабан с системой рекуперации' },
      { icon: '📊', text: 'Система дозирования компонентов' },
      { icon: '🔥', text: 'Интеллектуальная горелка' },
      { icon: '🌿', text: 'Система фильтрации пыли' },
      { icon: '💻', text: 'Система управления и контроля' },
      { icon: '📦', text: 'Силосы для минерального порошка' }
    ],
    specs: [
      { label: 'Производительность', value: '320 т/ч' },
      { label: 'Мощность горелки', value: '25 МВт' },
      { label: 'Температура сушки', value: 'до 180°C' },
      { label: 'Энергопотребление', value: '450 кВт' },
      { label: 'Площадь установки', value: '45×25 м' },
      { label: 'Вес', value: '280 т' }
    ],
    pdfSpec: '#',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
    ]
  },
  {
    id: 'apexflex-210',
    name: 'ApexFlex 210',
    capacity: 210,
    capacityCategory: 'medium',
    type: 'Модульный комплекс',
    badges: [{ type: 'new', text: 'Новинка' }],
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
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop'
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
    fullDescription:
      'ApexMobile 160 — компактный мобильный комплекс производительностью 160 тонн в час. Предназначен для строительства и ремонта дорог в труднодоступных регионах. Развертывание на площадке занимает менее 72 часов. Усиленная рама позволяет эксплуатировать комплекс при температуре до -45°C.',
    features: [
      'Развертывание на площадке менее чем за 72 часа',
      'Энергоэффективная дизельная горелка',
      'Усиленная рама для эксплуатации в -45 °C',
      'Комплект телеметрии и удаленного управления'
    ],
    includes: [
      { icon: '🚚', text: 'Мобильная платформа' },
      { icon: '⚙️', text: 'Сушильный барабан' },
      { icon: '📊', text: 'Система дозирования' },
      { icon: '🔥', text: 'Дизельная горелка' },
      { icon: '🌿', text: 'Система фильтрации' },
      { icon: '💻', text: 'Система телеметрии' }
    ],
    specs: [
      { label: 'Производительность', value: '160 т/ч' },
      { label: 'Мощность горелки', value: '12 МВт' },
      { label: 'Температура сушки', value: 'до 180°C' },
      { label: 'Энергопотребление', value: '280 кВт' },
      { label: 'Площадь установки', value: '32×18 м' },
      { label: 'Вес', value: '180 т' }
    ],
    pdfSpec: '#',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
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
    fullDescription:
      'ApexEco 260 — энергоэффективный комплекс производительностью 260 тонн в час. Модель оснащена системой рекуперации тепла сушильного барабана, что позволяет снизить потребление электроэнергии до 18%. Замкнутый цикл пылеулавливания обеспечивает экологичность производства.',
    features: [
      'Замкнутый цикл пылеулавливания',
      'Рекуперация тепла сушильного барабана',
      'Автоматизированная система контроля качества',
      'Опция переработки РАП до 40 %'
    ],
    includes: [
      { icon: '⚙️', text: 'Сушильный барабан с рекуперацией' },
      { icon: '📊', text: 'Система дозирования' },
      { icon: '🔥', text: 'Энергоэффективная горелка' },
      { icon: '🌿', text: 'Замкнутая система фильтрации' },
      { icon: '💻', text: 'Система контроля качества' },
      { icon: '♻️', text: 'Система переработки РАП' }
    ],
    specs: [
      { label: 'Производительность', value: '260 т/ч' },
      { label: 'Мощность горелки', value: '20 МВт' },
      { label: 'Температура сушки', value: 'до 180°C' },
      { label: 'Энергопотребление', value: '380 кВт' },
      { label: 'Площадь установки', value: '42×24 м' },
      { label: 'Вес', value: '250 т' }
    ],
    pdfSpec: '#',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop'
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
    fullDescription:
      'ApexMicro 140 — компактный комплекс производительностью 140 тонн в час. Идеальное решение для муниципальных подрядчиков и небольших производств. Компактная планировка и пониженное энергопотребление делают его экономически выгодным для небольших проектов.',
    features: [
      'Компактная планировка и пониженное энергопотребление',
      'Автоматическое ведение журнальных записей',
      'Опция комплектования силосом минералов 40 т',
      'Оптимизированная логистика и монтаж'
    ],
    includes: [
      { icon: '⚙️', text: 'Компактный сушильный барабан' },
      { icon: '📊', text: 'Система дозирования' },
      { icon: '🔥', text: 'Газовая горелка' },
      { icon: '🌿', text: 'Система фильтрации' },
      { icon: '💻', text: 'Панель управления' },
      { icon: '📦', text: 'Силос минерального порошка 40 т' }
    ],
    specs: [
      { label: 'Производительность', value: '140 т/ч' },
      { label: 'Мощность горелки', value: '10 МВт' },
      { label: 'Температура сушки', value: 'до 180°C' },
      { label: 'Энергопотребление', value: '240 кВт' },
      { label: 'Площадь установки', value: '30×16 м' },
      { label: 'Вес', value: '150 т' }
    ],
    pdfSpec: '#',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop'
    ]
  },
  {
    id: 'apexpro-400',
    name: 'ApexPro 400',
    capacity: 400,
    capacityCategory: 'high',
    type: 'Высокопроизводительный комплекс',
    badges: [{ type: 'top', text: 'Топ продажа' }, { type: 'new', text: 'Новинка' }],
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
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop'
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

const selectedProductInput = document.querySelector('#productId');
const selectedProductInputModal = document.querySelector('#productId-modal');

// Модальное окно продукта
const productModal = document.querySelector('#product-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const galleryMain = document.querySelector('#gallery-main');
const galleryThumbnails = document.querySelector('#gallery-thumbnails');
const galleryPrev = document.querySelector('.gallery-prev');
const galleryNext = document.querySelector('.gallery-next');
const modalContactBtn = document.querySelector('#modal-contact-btn');

// Модальное окно формы
const contactModal = document.querySelector('#contact-modal');
const contactModalOverlay = document.querySelector('.contact-modal-overlay');
const contactModalClose = document.querySelector('.contact-modal-close');
const contactFormModal = document.querySelector('#inquiry-form-modal');
const phoneInputModal = document.querySelector('#phone-modal');
const consentModal = document.querySelector('#consent-modal');

let currentGalleryIndex = 0;
let currentProductImages = [];
let previousContactFocusElement = null;

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

  // Бейджи
  if (product.badges && product.badges.length > 0) {
    const badgesContainer = document.createElement('div');
    badgesContainer.className = 'product-badges';
    product.badges.forEach((badge) => {
      const badgeEl = document.createElement('span');
      badgeEl.className = `product-badge product-badge-${badge.type}`;
      badgeEl.textContent = badge.text;
      badgesContainer.appendChild(badgeEl);
    });
    card.appendChild(badgesContainer);
  }

  // Превью изображения
  if (product.images && product.images.length > 0) {
    const previewWrapper = document.createElement('div');
    previewWrapper.className = 'product-preview';
    const previewImg = document.createElement('img');
    previewImg.src = product.images[0];
    previewImg.alt = `${product.name} - превью`;
    previewImg.loading = 'lazy';
    previewWrapper.appendChild(previewImg);
    card.appendChild(previewWrapper);
  }

  const title = document.createElement('h3');
  title.textContent = product.name;

  const description = document.createElement('p');
  description.textContent = product.description;
  description.id = `product-${product.id}-desc`;

  card.appendChild(title);
  card.appendChild(createMetaRow(product));
  card.appendChild(description);
  card.appendChild(createFeatureList(product.features));

  // CTA кнопка
  const ctaButton = document.createElement('button');
  ctaButton.className = 'product-card-cta';
  ctaButton.type = 'button';
  ctaButton.textContent = 'Подробнее';
  ctaButton.setAttribute('aria-label', `Подробнее о ${product.name}`);
  card.appendChild(ctaButton);

  // Индикатор "Выбрано"
  const selectedIndicator = document.createElement('div');
  selectedIndicator.className = 'product-selected-indicator';
  selectedIndicator.textContent = 'Выбрано';
  selectedIndicator.setAttribute('aria-hidden', 'true');
  card.appendChild(selectedIndicator);

  const handleActivate = () => {
    // Сначала выбираем продукт в форме
    selectProduct(product.id);
    // Затем открываем модальное окно
    openProductModal(product.id);
  };

  card.addEventListener('click', (event) => {
    // Не открываем модальное окно при клике на CTA, чтобы избежать двойного клика
    if (event.target === ctaButton || ctaButton.contains(event.target)) {
      return;
    }
    handleActivate();
  });

  ctaButton.addEventListener('click', (event) => {
    event.stopPropagation();
    handleActivate();
  });

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

  // Выбираем продукт только если он был явно выбран пользователем
  if (state.selectedProductId) {
    const selectedProduct = filteredProducts.find((p) => p.id === state.selectedProductId);
    if (selectedProduct) {
      selectProduct(state.selectedProductId);
    } else {
      // Если выбранный продукт не в фильтре, сбрасываем выбор
      selectProduct(null);
    }
  }

  if (!filteredProducts.length) {
    const empty = document.createElement('div');
    empty.className = 'product-empty';
    empty.textContent = 'Нет решений под выбранные параметры. Попробуйте изменить фильтр.';
    catalogGrid.appendChild(empty);
  }
}

function populateProductSelects() {
  // Заполняем основной select
  if (selectedProductInput && selectedProductInput.tagName === 'SELECT') {
    // Очищаем существующие опции (кроме первой пустой)
    while (selectedProductInput.options.length > 1) {
      selectedProductInput.remove(1);
    }
    products.forEach((product) => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (${product.capacity} т/ч)`;
      selectedProductInput.appendChild(option);
    });
  }

  // Заполняем модальный select
  if (selectedProductInputModal && selectedProductInputModal.tagName === 'SELECT') {
    // Очищаем существующие опции (кроме первой пустой)
    while (selectedProductInputModal.options.length > 1) {
      selectedProductInputModal.remove(1);
    }
    products.forEach((product) => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (${product.capacity} т/ч)`;
      selectedProductInputModal.appendChild(option);
    });
  }
}

function selectProduct(productId, options = {}) {
  if (!productId) {
    // Сбрасываем выбор в обеих формах
    if (selectedProductInput) {
      selectedProductInput.value = '';
    }
    
    if (selectedProductInputModal) {
      selectedProductInputModal.value = '';
    }
    
    // Убираем индикатор "Выбрано" со всех карточек
    document.querySelectorAll('.product-selected-indicator').forEach((indicator) => {
      indicator.style.display = 'none';
    });
    
    document.querySelectorAll('.product-card').forEach((card) => {
      card.classList.remove('active');
    });
    
    state.selectedProductId = null;
    return;
  }
  
  const { scroll = false } = options;
  state.selectedProductId = productId;

  document.querySelectorAll('.product-card').forEach((card) => {
    const isActive = card.dataset.productId === productId;
    card.classList.toggle('active', isActive);
    
    // Показываем/скрываем индикатор "Выбрано"
    const selectedIndicator = card.querySelector('.product-selected-indicator');
    if (selectedIndicator) {
      selectedIndicator.style.display = isActive ? 'flex' : 'none';
    }
    
    if (isActive && scroll) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  const product = products.find((item) => item.id === productId);
  if (!product) {
    return;
  }

  // Обновляем select в основной форме
  if (selectedProductInput) {
    if (selectedProductInput.tagName === 'SELECT') {
      selectedProductInput.value = product.id;
    } else {
      selectedProductInput.value = product.id;
    }
  }

  // Обновляем select в модальной форме
  if (selectedProductInputModal) {
    if (selectedProductInputModal.tagName === 'SELECT') {
      selectedProductInputModal.value = product.id;
    } else {
      selectedProductInputModal.value = product.id;
    }
  }
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

  // Заполняем "Что входит в комплекс"
  const includesGrid = document.querySelector('#includes-grid');
  const modalIncludes = document.querySelector('#modal-includes');
  if (product.includes && product.includes.length > 0) {
    includesGrid.innerHTML = '';
    product.includes.forEach((item) => {
      const includeItem = document.createElement('div');
      includeItem.className = 'include-item';
      includeItem.innerHTML = `
        <span class="include-icon">${item.icon}</span>
        <span class="include-text">${item.text}</span>
      `;
      includesGrid.appendChild(includeItem);
    });
    modalIncludes.style.display = 'block';
  } else {
    modalIncludes.style.display = 'none';
  }

  // Заполняем таблицу параметров
  const specsTbody = document.querySelector('#specs-tbody');
  const modalSpecs = document.querySelector('#modal-specs');
  if (product.specs && product.specs.length > 0) {
    specsTbody.innerHTML = '';
    product.specs.forEach((spec) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="spec-label">${spec.label}</td>
        <td class="spec-value">${spec.value}</td>
      `;
      specsTbody.appendChild(row);
    });
    modalSpecs.style.display = 'block';
  } else {
    modalSpecs.style.display = 'none';
  }

  // Ссылка на PDF
  const pdfLink = document.querySelector('#modal-pdf-link');
  if (product.pdfSpec && product.pdfSpec !== '#') {
    pdfLink.href = product.pdfSpec;
    pdfLink.style.display = 'inline-flex';
  } else {
    pdfLink.style.display = 'none';
  }

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

// Функции для модального окна формы
function openContactModal() {
  if (!contactModal) return;
  
  // Сохраняем элемент, который открыл модальное окно
  previousContactFocusElement = document.activeElement;
  
  // Обновляем select в модальной форме, если продукт уже выбран
  if (state.selectedProductId && selectedProductInputModal) {
    selectedProductInputModal.value = state.selectedProductId;
  }
  
  // Открываем модальное окно формы (поверх модального окна продукта)
  contactModal.setAttribute('aria-hidden', 'false');
  contactModal.setAttribute('aria-modal', 'true');
  contactModal.classList.add('is-open');
  
  // Устанавливаем focus trap для формы
  setupContactFocusTrap();
  
  // Фокус на первое поле или кнопку закрытия
  const firstInput = contactFormModal?.querySelector('input, textarea, button');
  if (firstInput) {
    setTimeout(() => firstInput.focus(), 100);
  } else {
    contactModalClose?.focus();
  }
  
  // Инициализируем маску телефона для модальной формы
  if (phoneInputModal) {
    if (!phoneInputModal.value.trim()) {
      phoneInputModal.value = '+7 ';
    }
  }
}

function closeContactModal() {
  if (!contactModal) return;
  
  contactModal.setAttribute('aria-hidden', 'true');
  contactModal.removeAttribute('aria-modal');
  contactModal.classList.remove('is-open');
  
  // Удаляем focus trap
  removeContactFocusTrap();
  
  // Возвращаем фокус на элемент, который открыл модальное окно
  if (previousContactFocusElement) {
    previousContactFocusElement.focus();
    previousContactFocusElement = null;
  }
}

function setupContactFocusTrap() {
  const focusableElements = contactModal.querySelectorAll(
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

  contactModal.addEventListener('keydown', handleTabKey);
  contactModal._focusTrapHandler = handleTabKey;
}

function removeContactFocusTrap() {
  if (contactModal._focusTrapHandler) {
    contactModal.removeEventListener('keydown', contactModal._focusTrapHandler);
    contactModal._focusTrapHandler = null;
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

  const submitBtn = document.querySelector('#submit-btn');
  const submitText = submitBtn?.querySelector('.submit-text');
  const submitSpinner = submitBtn?.querySelector('.submit-spinner');
  
  // Показываем индикатор отправки
  if (submitBtn) {
    submitBtn.disabled = true;
    if (submitText) submitText.style.display = 'none';
    if (submitSpinner) submitSpinner.style.display = 'inline-flex';
  }

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
    
    // Закрываем модальное окно формы, если оно открыто
    if (contactModal && contactModal.classList.contains('is-open')) {
      closeContactModal();
    }
    
    // Сбрасываем форму
    form.reset();
    if (contactFormModal) {
      contactFormModal.reset();
    }
    
    // Восстанавливаем выбранный продукт
    if (payload.productId) {
      selectedProductInput.value = payload.productId;
      if (document.querySelector('#productId-modal')) {
        document.querySelector('#productId-modal').value = payload.productId;
      }
    }
  } catch (error) {
    showToast(
      error.message || 'Произошла техническая ошибка. Попробуйте повторить попытку позже.',
      'error'
    );
  } finally {
    // Убираем индикатор отправки
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.style.display = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
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

  // Функция для обновления aria-hidden в зависимости от размера экрана
  const updateNavbarAccessibility = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      // На мобильных: aria-hidden зависит от состояния меню
      if (!navbarLinks.classList.contains('is-open')) {
        navbarLinks.setAttribute('aria-hidden', 'true');
      }
    } else {
      // На десктопе: меню всегда видимо для скринридеров
      navbarLinks.removeAttribute('aria-hidden');
    }
  };

  // Обновляем при загрузке и изменении размера окна
  updateNavbarAccessibility();
  window.addEventListener('resize', updateNavbarAccessibility);

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
  // Обновление активного раздела при скролле
  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.navbar-links a[href^="#"]');
    
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentSection);
    });
  };

  // Обновляем при скролле
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection(); // Инициализация

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
      
      // Обновляем активный раздел после скролла
      setTimeout(updateActiveSection, 300);
    });
  });
}

function init() {
  renderProducts();
  populateProductSelects(); // Заполняем select списки продуктами
  // Не выбираем продукт автоматически - пользователь должен сделать выбор явно
  // selectProduct(products[0].id);
  setupRevealAnimations();
  setupNavbar();
  setupSmoothAnchors();

  capacityFilter?.addEventListener('change', (event) => {
    const value = event.target.value;
    renderProducts(value);
    
    // Подсветка активного фильтра
    capacityFilter?.querySelectorAll('option').forEach((option) => {
      option.classList.remove('selected');
    });
    const selectedOption = capacityFilter?.querySelector(`option[value="${value}"]`);
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
  });
  
  // Инициализация подсветки фильтра
  if (capacityFilter) {
    const initialValue = capacityFilter.value || 'all';
    const initialOption = capacityFilter.querySelector(`option[value="${initialValue}"]`);
    if (initialOption) {
      initialOption.classList.add('selected');
    }
  }

  // Обработчик изменения select в основной форме
  if (selectedProductInput && selectedProductInput.tagName === 'SELECT') {
    selectedProductInput.addEventListener('change', (event) => {
      const productId = event.target.value;
      if (productId) {
        selectProduct(productId, { scroll: true });
      } else {
        selectProduct(null);
      }
    });
  }

  // Обработчик изменения select в модальной форме
  if (selectedProductInputModal && selectedProductInputModal.tagName === 'SELECT') {
    selectedProductInputModal.addEventListener('change', (event) => {
      const productId = event.target.value;
      if (productId) {
        selectProduct(productId);
      } else {
        selectProduct(null);
      }
    });
  }

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
    if (event.key === 'Escape') {
      // Закрываем сначала модальное окно формы, если оно открыто
      if (contactModal?.classList.contains('is-open')) {
        closeContactModal();
      } else if (productModal?.classList.contains('is-open')) {
        closeProductModal();
      }
    }
  });

  // Кнопка "Оставить заявку" в модальном окне продукта
  if (modalContactBtn) {
    modalContactBtn.addEventListener('click', () => {
      openContactModal();
    });
  }

  // Модальное окно формы
  if (contactModalClose) {
    contactModalClose.addEventListener('click', closeContactModal);
  }
  if (contactModalOverlay) {
    contactModalOverlay.addEventListener('click', closeContactModal);
  }

  // Обработчик формы в модальном окне
  if (contactFormModal) {
    contactFormModal.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const formData = new FormData(contactFormModal);
      
      // Honeypot: silently drop
      if (formData.get('website')) {
        return;
      }

      if (consentModal && !consentModal.checked) {
        showToast('Подтвердите согласие на обработку персональных данных.', 'error');
        consentModal.focus();
        return;
      }

      // Проверка обязательных полей
      const name = formData.get('name')?.trim() || '';
      if (!name || name.length < 2) {
        showToast('Укажите имя и компанию (не менее 2 символов).', 'error');
        document.querySelector('#name-modal')?.focus();
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
        phoneInputModal?.focus();
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
        
        // Закрываем модальное окно формы
        closeContactModal();
        
        // Сбрасываем форму
        contactFormModal.reset();
        
        // Восстанавливаем выбранный продукт
        if (payload.productId) {
          if (document.querySelector('#productId-modal')) {
            document.querySelector('#productId-modal').value = payload.productId;
          }
        }
      } catch (error) {
        showToast(
          error.message || 'Произошла техническая ошибка. Попробуйте повторить попытку позже.',
          'error'
        );
      }
    });
  }

  // Маска телефона для модальной формы
  if (phoneInputModal) {
    if (!phoneInputModal.value.trim()) {
      phoneInputModal.value = '+7 ';
    }

    phoneInputModal.addEventListener('focus', () => {
      if (!phoneInputModal.value.trim() || !phoneInputModal.value.trim().startsWith('+7')) {
        phoneInputModal.value = '+7 ';
      }
    });

    phoneInputModal.addEventListener('input', () => {
      let digits = phoneInputModal.value.replace(/\D+/g, '');
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
      phoneInputModal.value = parts.join('');
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

// Регистрация Service Worker для PWA (с поддержкой Safari)
if ('serviceWorker' in navigator) {
  // Safari требует полной загрузки страницы перед регистрацией SW
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js', {
        scope: './'
      })
      .then((registration) => {
        console.log('SW registered:', registration);
        // Проверка обновлений для Safari
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('New SW available');
              }
            });
          }
        });
      })
      .catch((error) => {
        // Safari может блокировать SW в некоторых случаях
        console.log('SW registration failed:', error);
      });
  });
  
  // Обработка обновлений для Safari
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

// Функции для повышения вовлеченности
function setupEngagementFeatures() {
  // Баннер консультации
  const consultationBanner = document.querySelector('#consultation-banner');
  const consultationBannerClose = document.querySelector('.consultation-banner-close');
  
  // Показываем баннер через 5 секунд после загрузки страницы
  setTimeout(() => {
    const wasShown = sessionStorage.getItem('consultation-banner-shown');
    if (!wasShown && consultationBanner) {
      consultationBanner.setAttribute('aria-hidden', 'false');
      consultationBanner.classList.add('is-visible');
      sessionStorage.setItem('consultation-banner-shown', 'true');
    }
  }, 5000);

  if (consultationBannerClose) {
    consultationBannerClose.addEventListener('click', () => {
      consultationBanner.setAttribute('aria-hidden', 'true');
      consultationBanner.classList.remove('is-visible');
    });
  }

  const consultationBannerBtn = document.querySelector('#consultation-banner-btn');
  if (consultationBannerBtn) {
    consultationBannerBtn.addEventListener('click', () => {
      consultationBanner.setAttribute('aria-hidden', 'true');
      consultationBanner.classList.remove('is-visible');
      openContactModal();
    });
  }

  // Кнопка "Наверх"
  const backToTop = document.querySelector('#back-to-top');
  if (backToTop) {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Чат-виджет
  const chatWidget = document.querySelector('#chat-widget');
  if (chatWidget) {
    chatWidget.addEventListener('click', () => {
      openContactModal();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  setupEngagementFeatures();
});
