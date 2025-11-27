// Импорт данных о продуктах из отдельного файла
import { plantArt, heroHotspots, bitumenTanks as allBitumenTanks, products as allProducts } from './data/products.js';

// Фильтруем товары по полю enabled (показываем только включенные)
const bitumenTanks = allBitumenTanks.filter(tank => tank.enabled !== false);
const products = allProducts.filter(product => product.enabled !== false);

const state = {
  selectedProductId: null
};

const catalogGrid = document.querySelector('[data-catalog-grid]');
const bitumenTanksGrid = document.querySelector('[data-bitumen-tanks-grid]');
const capacityFilter = document.querySelector('#capacity-filter');
const tankCapacityFilter = document.querySelector('#tank-capacity-filter');
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

// Модальное окно комплектации
const includesModal = document.querySelector('#includes-modal');
const includesModalOverlay = document.querySelector('.includes-modal-overlay');
const includesModalClose = document.querySelector('.includes-modal-close');
const includesModalTitle = document.querySelector('#includes-modal-title');
const includesModalList = document.querySelector('#includes-modal-list');

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

// Функция для получения SVG иконки по типу
function getIconSVG(iconType) {
  const icons = {
    '⚙️': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path></svg>`,
    '📊': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    '🔥': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
    '🌿': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
    '💻': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    '📦': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    '🛢️': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="8" ry="6"></ellipse><path d="M4 12h16"></path><path d="M4 12v-2a10 10 0 0 1 20 0v2"></path></svg>`,
    '🌡️': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"></path></svg>`,
    '🔄': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
    '🛡️': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    '🚚': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"></path><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    '♻️': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`
  };
  return icons[iconType] || icons['⚙️'];
}

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
  // Определяем единицы измерения: м³ для битумных ёмкостей, т/ч для заводов
  const unit = product.id && product.id.includes('bitumen-tank') ? 'м³' : 'т/ч';
  capacityTag.textContent = `${product.capacity} ${unit}`;
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
  if (!catalogGrid) return;
  
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

function renderBitumenTanks(filterValue = 'all') {
  if (!bitumenTanksGrid) return;
  
  bitumenTanksGrid.innerHTML = '';

  const filteredTanks =
    filterValue === 'all'
      ? bitumenTanks
      : bitumenTanks.filter((tank) => tank.capacityCategory === filterValue);

  filteredTanks.forEach((tank) => {
    const card = createProductCard(tank);
    bitumenTanksGrid.appendChild(card);
  });

  // Выбираем продукт только если он был явно выбран пользователем
  if (state.selectedProductId) {
    const selectedTank = filteredTanks.find((t) => t.id === state.selectedProductId);
    if (selectedTank) {
      selectProduct(state.selectedProductId);
    }
  }

  if (!filteredTanks.length) {
    const empty = document.createElement('div');
    empty.className = 'product-empty';
    empty.textContent = 'Нет решений под выбранные параметры. Попробуйте изменить фильтр.';
    bitumenTanksGrid.appendChild(empty);
  }
}

function populateProductSelects() {
  // Заполняем основной select
  if (selectedProductInput && selectedProductInput.tagName === 'SELECT') {
    // Очищаем существующие опции (кроме первой пустой)
    while (selectedProductInput.options.length > 1) {
      selectedProductInput.remove(1);
    }
    
    // Добавляем асфальтобетонные заводы
    products.forEach((product) => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (${product.capacity} т/ч)`;
      selectedProductInput.appendChild(option);
    });
    
    // Добавляем битумные ёмкости
    bitumenTanks.forEach((tank) => {
      const option = document.createElement('option');
      option.value = tank.id;
      option.textContent = `${tank.name} (${tank.capacity} м³)`;
      selectedProductInput.appendChild(option);
    });
  }

  // Заполняем модальный select
  if (selectedProductInputModal && selectedProductInputModal.tagName === 'SELECT') {
    // Очищаем существующие опции (кроме первой пустой)
    while (selectedProductInputModal.options.length > 1) {
      selectedProductInputModal.remove(1);
    }
    
    // Добавляем асфальтобетонные заводы
    products.forEach((product) => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (${product.capacity} т/ч)`;
      selectedProductInputModal.appendChild(option);
    });
    
    // Добавляем битумные ёмкости
    bitumenTanks.forEach((tank) => {
      const option = document.createElement('option');
      option.value = tank.id;
      option.textContent = `${tank.name} (${tank.capacity} м³)`;
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
    
    // Убираем индикатор "Выбрано" со всех карточек (в обоих каталогах)
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

  // Обновляем карточки в обоих каталогах
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

  // Ищем продукт в обоих массивах
  let product = products.find((item) => item.id === productId);
  if (!product) {
    product = bitumenTanks.find((item) => item.id === productId);
  }
  
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
  // Ищем продукт в обоих массивах
  let product = products.find((p) => p.id === productId);
  if (!product) {
    product = bitumenTanks.find((t) => t.id === productId);
  }
  
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
  const includeItems = Array.isArray(product.includes)
    ? product.includes.filter((item) => item && item.enabled !== false)
    : [];
  const detailedActiveItems = Array.isArray(product.includesDetailed)
    ? product.includesDetailed.filter((item) => item && item.enabled !== false)
    : [];

  if (includeItems.length > 0) {
    includesGrid.innerHTML = '';
    includeItems.forEach((item, index) => {
      const includeItem = document.createElement('button');
      includeItem.className = 'include-item include-item-clickable';
      includeItem.type = 'button';
      includeItem.setAttribute('aria-label', `Подробнее о ${item.text}`);
      const highlightIndex = detailedActiveItems[index] ? index : null;
      includeItem.addEventListener('click', () => {
        // Открываем модальное окно с детальной информацией
        openIncludesModal(product.id, highlightIndex);
      });
      
      const iconWrapper = document.createElement('span');
      iconWrapper.className = 'include-icon';
      iconWrapper.innerHTML = getIconSVG(item.icon);
      const textSpan = document.createElement('span');
      textSpan.className = 'include-text';
      textSpan.textContent = item.text;
      
      // Добавляем иконку стрелки для индикации кликабельности
      const arrowIcon = document.createElement('span');
      arrowIcon.className = 'include-arrow';
      arrowIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      
      includeItem.appendChild(iconWrapper);
      includeItem.appendChild(textSpan);
      includeItem.appendChild(arrowIcon);
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

// Функции для модального окна комплектации
let previousIncludesFocusElement = null;

function openIncludesModal(productId, highlightIndex = null) {
  // Ищем продукт в обоих массивах
  let product = products.find((p) => p.id === productId);
  if (!product) {
    product = bitumenTanks.find((t) => t.id === productId);
  }
  
  // Проверяем наличие элементов модального окна
  const modal = document.querySelector('#includes-modal');
  const titleEl = document.querySelector('#includes-modal-title');
  const listEl = document.querySelector('#includes-modal-list');
  
  if (!product || !modal || !titleEl || !listEl) {
    console.error('Не удалось открыть модальное окно комплектации:', {
      product: !!product,
      modal: !!modal,
      titleEl: !!titleEl,
      listEl: !!listEl
    });
    return;
  }

  const detailedItems = Array.isArray(product.includesDetailed)
    ? product.includesDetailed.filter((item) => item && item.enabled !== false)
    : [];

  if (detailedItems.length === 0) {
    console.warn('Для этого продукта нет активных элементов includesDetailed');
    return;
  }

  // Сохраняем элемент, который открыл модальное окно
  previousIncludesFocusElement = document.activeElement;

  // Заполняем заголовок
  titleEl.textContent = `Что входит в комплекс ${product.name}`;

  // Заполняем список комплектации
  listEl.innerHTML = '';

  const resolvedHighlightIndex =
    typeof highlightIndex === 'number' &&
    highlightIndex >= 0 &&
    highlightIndex < detailedItems.length
      ? highlightIndex
      : null;

  detailedItems.forEach((item, index) => {
    const includeCard = document.createElement('div');
    includeCard.className = 'include-detail-card';
    includeCard.style.opacity = '0';
    includeCard.style.transform = 'translateY(20px)';
    
    if (resolvedHighlightIndex !== null && index === resolvedHighlightIndex) {
      includeCard.classList.add('highlighted');
    }
    
    // Анимация появления с задержкой
    setTimeout(() => {
      includeCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      includeCard.style.opacity = '1';
      includeCard.style.transform = 'translateY(0)';
      
      // Прокручиваем к выделенному элементу
      if (resolvedHighlightIndex !== null && index === resolvedHighlightIndex) {
        setTimeout(() => {
          includeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }, index * 80);
    
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'include-detail-image';
    
    // Добавляем градиентный overlay для эффекта глубины
    const imageOverlay = document.createElement('div');
    imageOverlay.className = 'include-detail-image-overlay';
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.loading = 'lazy';
    
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(imageOverlay);
    
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'include-detail-content';
    
    // Добавляем номер элемента
    const numberBadge = document.createElement('div');
    numberBadge.className = 'include-detail-number';
    numberBadge.textContent = String(index + 1).padStart(2, '0');
    
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'include-detail-title-wrapper';
    
    const title = document.createElement('h3');
    title.textContent = item.title;
    
    const description = document.createElement('p');
    description.textContent = item.description;
    
    titleWrapper.appendChild(numberBadge);
    titleWrapper.appendChild(title);
    
    contentWrapper.appendChild(titleWrapper);
    contentWrapper.appendChild(description);
    
    includeCard.appendChild(imageWrapper);
    includeCard.appendChild(contentWrapper);
    
    listEl.appendChild(includeCard);
  });

  // Открываем модальное окно
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-modal', 'true');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  // Устанавливаем focus trap
  setupIncludesFocusTrap();

  // Фокус на кнопку закрытия для доступности
  const closeBtn = document.querySelector('.includes-modal-close');
  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeIncludesModal() {
  const modal = document.querySelector('#includes-modal');
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  
  // Удаляем focus trap
  removeIncludesFocusTrap();

  // Возвращаем фокус на элемент, который открыл модальное окно
  if (previousIncludesFocusElement) {
    previousIncludesFocusElement.focus();
    previousIncludesFocusElement = null;
  }
}

function setupIncludesFocusTrap() {
  const modal = document.querySelector('#includes-modal');
  if (!modal) return;
  const focusableElements = modal.querySelectorAll(
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

  modal.addEventListener('keydown', handleTabKey);
  modal._focusTrapHandler = handleTabKey;
}

function removeIncludesFocusTrap() {
  const modal = document.querySelector('#includes-modal');
  if (modal && modal._focusTrapHandler) {
    modal.removeEventListener('keydown', modal._focusTrapHandler);
    modal._focusTrapHandler = null;
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
    // Восстанавливаем состояние кнопки перед выходом
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.style.display = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
    return;
  }

  if (consent && !consent.checked) {
    showToast('Подтвердите согласие на обработку персональных данных.', 'error');
    consent.focus();
    // Восстанавливаем состояние кнопки
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.style.display = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
    return;
  }

  // Проверка обязательных полей
  const name = formData.get('name')?.trim() || '';
  if (!name || name.length < 2) {
    showToast('Укажите имя и компанию (не менее 2 символов).', 'error');
    document.querySelector('#name')?.focus();
    // Восстанавливаем состояние кнопки
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.style.display = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
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
    // Восстанавливаем состояние кнопки
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.style.display = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
    return;
  }

  if (!isValidPhone) {
    showToast('Введите корректный телефон в формате +7 (___) ___-__-__', 'error');
    phoneInput?.focus();
    // Восстанавливаем состояние кнопки
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitText) submitText.style.display = 'inline';
      if (submitSpinner) submitSpinner.style.display = 'none';
    }
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

    // Проверяем, что ответ не пустой
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Сервер вернул неверный формат ответа');
    }

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Не удалось отправить заявку');
    }

    showToast(result.message || 'Заявка отправлена', 'success');
    
    // Закрываем модальное окно формы, если оно открыто
    if (contactModal && contactModal.classList.contains('is-open')) {
      closeContactModal();
    }
    
    // Сбрасываем форму и выбор продукта
    form.reset();
    if (contactFormModal) {
      contactFormModal.reset();
    }
    
    // Сбрасываем выбранный продукт после успешной отправки
    selectProduct(null);
    
    // Восстанавливаем маску телефона
    if (phoneInput && !phoneInput.value.trim()) {
      phoneInput.value = '+7 ';
    }
  } catch (error) {
    // Обрабатываем разные типы ошибок
    let errorMessage = 'Произошла техническая ошибка. Попробуйте повторить попытку позже.';
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = 'Проблема с подключением к интернету. Проверьте соединение и попробуйте снова.';
    } else if (error instanceof SyntaxError) {
      errorMessage = 'Ошибка обработки ответа сервера. Попробуйте позже.';
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    showToast(errorMessage, 'error');
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

let activeHeroHotspot = null;

function initHeroHotspots() {
  const heroVisual = document.querySelector('[data-hero-visual]');
  if (!heroVisual || !heroHotspots.length) {
    return;
  }

  const layer = document.createElement('div');
  layer.className = 'hero-hotspots';
  heroVisual.appendChild(layer);

  heroHotspots.forEach((spot, index) => {
    const hotspot = document.createElement('button');
    hotspot.type = 'button';
    hotspot.className = 'hero-hotspot';
    hotspot.style.setProperty('--hotspot-x', `${spot.x}%`);
    hotspot.style.setProperty('--hotspot-y', `${spot.y}%`);
    hotspot.setAttribute('aria-label', `${spot.label}. ${spot.description}`);
    hotspot.dataset.hotspotId = spot.id;

    const core = document.createElement('span');
    core.className = 'hero-hotspot-core';
    hotspot.appendChild(core);

    const tooltip = document.createElement('div');
    tooltip.className = 'hero-hotspot-tooltip';
    tooltip.innerHTML = `<strong>${spot.label}</strong><p>${spot.description}</p>`;
    hotspot.appendChild(tooltip);

    layer.appendChild(hotspot);
    attachHeroHotspotEvents(hotspot);

    // Лёгкое смещение по времени, чтобы точки появлялись каскадом
    hotspot.style.animationDelay = `${index * 120}ms`;
  });
}

function attachHeroHotspotEvents(hotspot) {
  const show = () => showHeroHotspot(hotspot);
  const hide = () => hideHeroHotspot(hotspot);

  hotspot.addEventListener('pointerenter', show);
  hotspot.addEventListener('pointerleave', hide);
  hotspot.addEventListener('focus', show);
  hotspot.addEventListener('blur', hide);
  hotspot.addEventListener('click', (event) => {
    event.preventDefault();
    if (activeHeroHotspot === hotspot) {
      hideHeroHotspot(hotspot);
    } else {
      showHeroHotspot(hotspot);
    }
  });
}

function showHeroHotspot(hotspot) {
  if (!hotspot) {
    return;
  }
  if (activeHeroHotspot && activeHeroHotspot !== hotspot) {
    hideHeroHotspot(activeHeroHotspot);
  }
  hotspot.classList.add('active');
  const tooltip = hotspot.querySelector('.hero-hotspot-tooltip');
  animateHeroTooltip(tooltip, 'in');
  activeHeroHotspot = hotspot;
}

function hideHeroHotspot(hotspot) {
  if (!hotspot) {
    return;
  }
  hotspot.classList.remove('active');
  const tooltip = hotspot.querySelector('.hero-hotspot-tooltip');
  animateHeroTooltip(tooltip, 'out');
  if (activeHeroHotspot === hotspot) {
    activeHeroHotspot = null;
  }
}

function animateHeroTooltip(tooltip, direction = 'in') {
  if (!tooltip || typeof tooltip.animate !== 'function') {
    return;
  }
  const frames =
    direction === 'in'
      ? [
          { opacity: 0, transform: 'translate(-50%, 12px) scale(0.92)' },
          { opacity: 1, transform: 'translate(-50%, 0) scale(1)' }
        ]
      : [
          { opacity: 1, transform: 'translate(-50%, 0) scale(1)' },
          { opacity: 0, transform: 'translate(-50%, 12px) scale(0.94)' }
        ];
  tooltip.animate(frames, {
    duration: 420,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
  });
}

function init() {
  initHeroHotspots();
  renderProducts();
  renderBitumenTanks();
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

  // Обработчик фильтра битумных ёмкостей
  tankCapacityFilter?.addEventListener('change', (event) => {
    const value = event.target.value;
    renderBitumenTanks(value);
    
    // Подсветка активного фильтра
    tankCapacityFilter?.querySelectorAll('option').forEach((option) => {
      option.classList.remove('selected');
    });
    const selectedOption = tankCapacityFilter?.querySelector(`option[value="${value}"]`);
    if (selectedOption) {
      selectedOption.classList.add('selected');
    }
  });
  
  // Инициализация подсветки фильтра битумных ёмкостей
  if (tankCapacityFilter) {
    const initialValue = tankCapacityFilter.value || 'all';
    const initialOption = tankCapacityFilter.querySelector(`option[value="${initialValue}"]`);
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

  // Модальное окно комплектации
  const includesModalCloseEl = document.querySelector('.includes-modal-close');
  const includesModalOverlayEl = document.querySelector('.includes-modal-overlay');
  if (includesModalCloseEl) {
    includesModalCloseEl.addEventListener('click', closeIncludesModal);
  }
  if (includesModalOverlayEl) {
    includesModalOverlayEl.addEventListener('click', closeIncludesModal);
  }

  // Закрытие по Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // Закрываем сначала модальное окно формы, если оно открыто
      if (contactModal?.classList.contains('is-open')) {
        closeContactModal();
      } else if (document.querySelector('#includes-modal')?.classList.contains('is-open')) {
        closeIncludesModal();
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
        // Восстанавливаем состояние кнопки перед выходом
        if (submitBtnModal) {
          submitBtnModal.disabled = false;
          if (submitTextModal) submitTextModal.style.display = 'inline';
          if (submitSpinnerModal) submitSpinnerModal.style.display = 'none';
        }
        return;
      }

      const submitBtnModal = contactFormModal.querySelector('button[type="submit"]');
      const submitTextModal = submitBtnModal?.querySelector('.submit-text');
      const submitSpinnerModal = submitBtnModal?.querySelector('.submit-spinner');
      
      // Показываем индикатор отправки
      if (submitBtnModal) {
        submitBtnModal.disabled = true;
        if (submitTextModal) submitTextModal.style.display = 'none';
        if (submitSpinnerModal) submitSpinnerModal.style.display = 'inline-flex';
      }

      if (consentModal && !consentModal.checked) {
        showToast('Подтвердите согласие на обработку персональных данных.', 'error');
        consentModal.focus();
        // Восстанавливаем состояние кнопки
        if (submitBtnModal) {
          submitBtnModal.disabled = false;
          if (submitTextModal) submitTextModal.style.display = 'inline';
          if (submitSpinnerModal) submitSpinnerModal.style.display = 'none';
        }
        return;
      }

      // Проверка обязательных полей
      const name = formData.get('name')?.trim() || '';
      if (!name || name.length < 2) {
        showToast('Укажите имя и компанию (не менее 2 символов).', 'error');
        document.querySelector('#name-modal')?.focus();
        // Восстанавливаем состояние кнопки
        if (submitBtnModal) {
          submitBtnModal.disabled = false;
          if (submitTextModal) submitTextModal.style.display = 'inline';
          if (submitSpinnerModal) submitSpinnerModal.style.display = 'none';
        }
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
        // Восстанавливаем состояние кнопки
        if (submitBtnModal) {
          submitBtnModal.disabled = false;
          if (submitTextModal) submitTextModal.style.display = 'inline';
          if (submitSpinnerModal) submitSpinnerModal.style.display = 'none';
        }
        return;
      }

      if (!isValidPhone) {
        showToast('Введите корректный телефон в формате +7 (___) ___-__-__', 'error');
        phoneInputModal?.focus();
        // Восстанавливаем состояние кнопки
        if (submitBtnModal) {
          submitBtnModal.disabled = false;
          if (submitTextModal) submitTextModal.style.display = 'inline';
          if (submitSpinnerModal) submitSpinnerModal.style.display = 'none';
        }
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

        // Проверяем, что ответ не пустой
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Сервер вернул неверный формат ответа');
        }

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Не удалось отправить заявку');
        }

        showToast(result.message || 'Заявка отправлена', 'success');
        
        // Закрываем модальное окно формы
        closeContactModal();
        
        // Сбрасываем форму и выбор продукта
        contactFormModal.reset();
        selectProduct(null);
        
        // Восстанавливаем маску телефона
        if (phoneInputModal && !phoneInputModal.value.trim()) {
          phoneInputModal.value = '+7 ';
        }
      } catch (error) {
        // Обрабатываем разные типы ошибок
        let errorMessage = 'Произошла техническая ошибка. Попробуйте повторить попытку позже.';
        
        if (error instanceof TypeError && error.message.includes('fetch')) {
          errorMessage = 'Проблема с подключением к интернету. Проверьте соединение и попробуйте снова.';
        } else if (error instanceof SyntaxError) {
          errorMessage = 'Ошибка обработки ответа сервера. Попробуйте позже.';
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        showToast(errorMessage, 'error');
      } finally {
        // Убираем индикатор отправки
        if (submitBtnModal) {
          submitBtnModal.disabled = false;
          if (submitTextModal) submitTextModal.style.display = 'inline';
          if (submitSpinnerModal) submitSpinnerModal.style.display = 'none';
        }
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
