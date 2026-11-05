/**
 * ============================================================================
 * AERISH OFFICIAL LANDING PAGE — SCRIPT.JS
 * Fitur Interaktif Lengkap & Responsif untuk HP, iPad, dan Desktop:
 * 1. Katalog Card Baju Interaktif (Klik Card -> Buka Modal Deskripsi)
 * 2. Filter Kategori & Live Search Real-Time
 * 3. Modal Interaktif (Zoom Gambar, Pilih Ukuran Dinamis, Navigasi Prev/Next)
 * 4. Studio Simulasi FREE CUSTOM Kaos Live (Ganti Warna, Ketik Lirik, Pilih Font)
 * 5. Kalkulator Rekomendasi Ukuran Pintar (Smart Size Finder)
 * 6. Animasi Scroll Reveal & Auto-Preview Hero
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
   * 1. DATA KATALOG 7 PRODUK RESMI AERISH (aerish.id)
   * -------------------------------------------------------------------------- */
  const SELLER_WHATSAPP = '6289672649620';

  const PRODUCT_ORDER = [
    'backburner',
    'wave-to-earth',
    'lala-lost-you',
    'kids-hindia',
    'membasuh-ver1',
    'membasuh-ver2',
    'free-custom',
  ];

  const PRODUCT_VARIANTS = {
    backburner: {
      id: 'backburner',
      name: 'KAOS BACKBURNER NIKI',
      fullTitle: 'KAOS BACKBURNER NIKI (Kaos Unisex)',
      category: 'AERISH UNISEX COLLECTION',
      desc: 'Kaos Unisex kasual berbahan katun premium yang lembut dan adem untuk daily wear. Menampilkan ilustrasi ikonik pixel ghost di dada kiri serta tipografi lirik "Hey are you still there?" di bagian punggung.',
      specs: [
        '✔ Bahan: 100% Premium Cotton Soft & Breathable (Nyaman untuk Daily Wear)',
        '✔ Sablon: High-Definition Print (Tajam, Rapi & Tidak Mudah Retak)',
        '✔ Potongan: Relaxed Unisex Fit (Cocok untuk Pria & Wanita)',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/f92eae2a.jpg',
      shopeeUrl: 'https://shopee.co.id/KAOS-UNISEX-NIKI-BACKBURNER-i.1701437093.52662231580',
    },
    'wave-to-earth': {
      id: 'wave-to-earth',
      name: 'KAOS LOVE WAVE TO EARTH',
      fullTitle: 'KAOS LOVE WAVE TO EARTH (Kaos Unisex)',
      category: 'AERISH UNISEX COLLECTION',
      desc: 'Koleksi kaos kasual unisex dengan ilustrasi depan minimalis dan artwork "LOVE / WAVE TO EARTH" bernuansa biru artistik di punggung. Bahan premium yang sejuk dipakai seharian.',
      specs: [
        '✔ Bahan: 100% Premium Cotton Soft & Breathable (Tidak Menerawang)',
        '✔ Sablon: High-Resolution Graphic Print di Dada & Punggung',
        '✔ Potongan: Relaxed Unisex Fit (Nyaman untuk Aktivitas Harian)',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/1fa584a4.jpg',
      shopeeUrl: 'https://shopee.co.id/KAOS-UNISEX-WAVE-TO-EARTH-LOVE-i.1701437093.45562164763',
    },
    'lala-lost-you': {
      id: 'lala-lost-you',
      name: 'KAOS LA LA LOST YOU NIKI',
      fullTitle: 'KAOS LA LA LOST YOU NIKI (Kaos Unisex)',
      category: 'AERISH UNISEX COLLECTION',
      desc: 'Kaos Unisex warna Misty Grey lembut dengan artwork hangat "LA LA LOST YOU — All My Demons" bergaya editorial. Dirancang untuk menyamankan hati dan menunjang ekspresi dirimu.',
      specs: [
        '✔ Bahan: Cotton Combed Premium Misty Grey (Lembut di Kulit)',
        '✔ Sablon: Detail Presisi Tinggi di Bagian Depan & Belakang',
        '✔ Potongan: Relaxed Unisex Fit (Cocok untuk Pria & Wanita)',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/b3e6b32e.jpg',
      shopeeUrl: 'https://shopee.co.id/NIKI-LA-LA-LOST-YOU-KAOS-UNISEX-i.1701437093.57109787656',
    },
    'kids-hindia': {
      id: 'kids-hindia',
      name: 'KAOS KIDS HINDIA',
      fullTitle: 'KAOS KIDS HINDIA (Kaos Unisex)',
      category: 'AERISH UNISEX COLLECTION',
      desc: 'Kaos Unisex edisi Hindia KIDS ("BE HOME with my cats/kids") dengan sentuhan monokrom modern. Bahan katun premium yang adem dipakai di dalam maupun luar ruangan.',
      specs: [
        '✔ Bahan: 100% Premium Cotton Daily Wear',
        '✔ Sablon: Monokrom High-Contrast Print',
        '✔ Potongan: Relaxed Unisex Fit (Cocok untuk Pria & Wanita)',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/cbb851cb.jpg',
      shopeeUrl: 'https://shopee.co.id/HINDIA-KIDS-KAOS-UNISEX-i.1701437093.43530530555',
    },
    'membasuh-ver1': {
      id: 'membasuh-ver1',
      name: 'KAOS MEMBASUH (ver 1) HINDIA',
      fullTitle: 'KAOS MEMBASUH (ver 1) HINDIA (Kaos Unisex)',
      category: 'AERISH UNISEX COLLECTION',
      desc: "Kaos Unisex edisi Membasuh (ver 1) warna Mocha hangat dengan lirik penuh makna \"Cukup besar 'tuk mengampuni, 'tuk mengasihi\" di bagian punggung yang menyembuhkan dan menyamankan hati.",
      specs: [
        '✔ Bahan: 100% Premium Cotton Warna Mocha Eksklusif',
        '✔ Sablon: Tipografi Minimalis Depan & Lirik Punggung',
        '✔ Potongan: Relaxed Unisex Fit (Cocok untuk Pria & Wanita)',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/02ce0707.jpg',
      shopeeUrl: 'https://shopee.co.id/HINDIA-MEMBASUH-KAOS-UNISEX-i.1701437093.45409807789',
    },
    'membasuh-ver2': {
      id: 'membasuh-ver2',
      name: 'KAOS MEMBASUH (ver 2) HINDIA',
      fullTitle: 'KAOS MEMBASUH (ver 2) HINDIA (Kaos Unisex)',
      category: 'AERISH UNISEX COLLECTION',
      desc: 'Kaos Unisex edisi Membasuh (ver 2) warna Hitam pekat dengan tipografi kaligrafi "Jadilah Tenang" di bagian punggung. Elegan, simpel, dan sangat nyaman untuk daily wear.',
      specs: [
        '✔ Bahan: 100% Premium Cotton Jet Black',
        '✔ Sablon: Kaligrafi Kontras Tajam & Tahan Lama',
        '✔ Potongan: Relaxed Unisex Fit (Cocok untuk Pria & Wanita)',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/60c93ba0.jpg',
      shopeeUrl: 'https://shopee.co.id/HINDIA-MEMBASUH-2-KAOS-UNISEX-i.1701437093.57209787779',
    },
    'free-custom': {
      id: 'free-custom',
      name: 'FREE CUSTOM',
      fullTitle: 'FREE CUSTOM — Kaos Unisex Custom Desain Sesukamu',
      category: 'SPECIAL CUSTOM SERVICE',
      desc: 'Spesial untukmu, AERISH menyediakan layanan FREE CUSTOM desain agar kamu bisa mewujudkan kaos impianmu sendiri tanpa biaya tambahan! Tampil beda, bebas request tulisan, lirik, atau gambar sesukamu.',
      specs: [
        '✔ Gratis Biaya Custom Desain (Bebas Request Depan / Belakang)',
        '✔ Bahan: 100% Premium Cotton Daily Wear',
        '✔ Konsultasi Desain Mudah via WhatsApp Resmi AERISH',
        '✔ Ukuran Tersedia: S, M, L, XL, XXL',
      ],
      image: 'assets/40765cd1.jpg',
      shopeeUrl: 'https://shopee.co.id/KAOS-UNISEX-CUSTOM-i.1701437093.44484763439',
    },
  };

  /* --------------------------------------------------------------------------
   * 2. STICKY NAVBAR, MOBILE MENU & SCROLL REVEAL ANIMATION
   * -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // IntersectionObserver untuk animasi kemunculan elemen saat di-scroll di HP/iPad/Desktop
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  /* --------------------------------------------------------------------------
   * 3. HERO IMAGE QUICK SWITCHER + KLIK GAMBAR LANGSUNG BUKA DESKRIPSI
   * -------------------------------------------------------------------------- */
  const heroFeaturedImg = document.getElementById('hero-featured-img');
  const heroActiveTitle = document.getElementById('hero-active-title');
  const heroMiniBtns = document.querySelectorAll('.hero__mini-btn');

  heroMiniBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const newImg = btn.getAttribute('data-hero-img');
      const variantId = btn.getAttribute('data-variant-id');
      const titleText = btn.getAttribute('data-title');

      heroMiniBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      if (heroActiveTitle && titleText) {
        heroActiveTitle.textContent = titleText;
      }

      if (heroFeaturedImg) {
        heroFeaturedImg.style.opacity = '0.3';
        heroFeaturedImg.setAttribute('data-variant-id', variantId);
        setTimeout(() => {
          heroFeaturedImg.src = newImg;
          heroFeaturedImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  if (heroFeaturedImg) {
    heroFeaturedImg.addEventListener('click', () => {
      const activeVar = heroFeaturedImg.getAttribute('data-variant-id') || 'backburner';
      openProductDetailModal(activeVar);
    });
  }

  /* --------------------------------------------------------------------------
   * 4. FILTER KATEGORI & LIVE SEARCH KATALOG BAJU (#produk)
   * -------------------------------------------------------------------------- */
  const filterPills = document.querySelectorAll('#catalog-filters .filter-pill');
  const searchInput = document.getElementById('catalog-search-input');
  const productCards = document.querySelectorAll('.product-card');
  const catalogEmpty = document.getElementById('catalog-empty');

  let activeFilter = 'all';
  let searchQuery = '';

  function filterCatalogCards() {
    let visibleCount = 0;

    productCards.forEach((card) => {
      const category = card.getAttribute('data-category') || '';
      const keywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const title = card.querySelector('.product-card__title').textContent.toLowerCase();

      const matchesCategory = activeFilter === 'all' || category === activeFilter;
      const matchesSearch =
        !searchQuery || title.includes(searchQuery) || keywords.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden-card');
        visibleCount += 1;
      } else {
        card.classList.add('hidden-card');
      }
    });

    if (catalogEmpty) {
      if (visibleCount === 0) {
        catalogEmpty.removeAttribute('hidden');
      } else {
        catalogEmpty.setAttribute('hidden', '');
      }
    }
  }

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter') || 'all';
      filterCatalogCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCatalogCards();
    });
  }

  /* --------------------------------------------------------------------------
   * 5. MODAL DESKRIPSI PRODUK INTERAKTIF (ZOOM, PILIH SIZE, PREV/NEXT)
   * -------------------------------------------------------------------------- */
  const productDetailOverlay = document.getElementById('product-detail-overlay');
  const detailModalClose = document.getElementById('detail-modal-close');
  const modalImageZoomBox = document.getElementById('modal-image-zoom-box');
  const detailModalImg = document.getElementById('detail-modal-img');
  const detailModalBadge = document.getElementById('detail-modal-badge');
  const detailModalTitle = document.getElementById('detail-modal-title');
  const detailModalDesc = document.getElementById('detail-modal-desc');
  const detailModalSpecs = document.getElementById('detail-modal-specs');
  const detailModalShopee = document.getElementById('detail-modal-shopee');
  const detailModalWa = document.getElementById('detail-modal-wa');
  const modalSizeBtns = document.querySelectorAll('#modal-size-selector .size-btn');
  const modalSelectedSizeText = document.getElementById('modal-selected-size-text');
  const modalPrevBtn = document.getElementById('modal-prev-btn');
  const modalNextBtn = document.getElementById('modal-next-btn');

  let currentModalVariantId = 'backburner';
  let currentModalSize = 'L';

  function updateModalWhatsAppLink() {
    const variant = PRODUCT_VARIANTS[currentModalVariantId];
    if (!variant || !detailModalWa) return;
    const waText = `Halo Admin AERISH 👋, saya ingin bertanya tentang produk *${variant.name}* (Ukuran *${currentModalSize}*).`;
    detailModalWa.href = `https://wa.me/${SELLER_WHATSAPP}?text=${encodeURIComponent(waText)}`;
  }

  function openProductDetailModal(variantId) {
    const variant = PRODUCT_VARIANTS[variantId];
    if (!variant || !productDetailOverlay) return;

    currentModalVariantId = variantId;

    if (modalImageZoomBox) {
      modalImageZoomBox.classList.remove('zoomed');
    }

    detailModalImg.src = variant.image;
    detailModalImg.alt = variant.fullTitle;
    detailModalBadge.textContent = variant.category;
    detailModalTitle.textContent = variant.fullTitle;
    detailModalDesc.textContent = variant.desc;

    if (detailModalSpecs) {
      detailModalSpecs.innerHTML = variant.specs.map((s) => `<li>${s}</li>`).join('');
    }

    if (detailModalShopee) {
      detailModalShopee.href = variant.shopeeUrl;
    }

    updateModalWhatsAppLink();
    productDetailOverlay.removeAttribute('hidden');
  }

  function closeProductDetailModal() {
    if (productDetailOverlay) {
      productDetailOverlay.setAttribute('hidden', '');
    }
    if (modalImageZoomBox) {
      modalImageZoomBox.classList.remove('zoomed');
    }
  }

  // Klik Card Baju -> Buka Modal Deskripsi
  productCards.forEach((card) => {
    card.addEventListener('click', () => {
      openProductDetailModal(card.dataset.variantId);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductDetailModal(card.dataset.variantId);
      }
    });
  });

  // Klik Gambar di Modal untuk Zoom In / Out
  if (modalImageZoomBox) {
    modalImageZoomBox.addEventListener('click', () => {
      modalImageZoomBox.classList.toggle('zoomed');
    });
  }

  // Klik Ukuran (S, M, L, XL, XXL) di dalam Modal
  modalSizeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalSizeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentModalSize = btn.getAttribute('data-size') || 'L';
      const dims = btn.getAttribute('data-dims') || '';
      if (modalSelectedSizeText) {
        modalSelectedSizeText.textContent = `Size ${currentModalSize} — ${dims}`;
      }
      updateModalWhatsAppLink();
    });
  });

  // Navigasi Prev / Next Baju di dalam Modal
  function navigateModalProduct(direction) {
    const currentIndex = PRODUCT_ORDER.indexOf(currentModalVariantId);
    const nextIndex = (currentIndex + direction + PRODUCT_ORDER.length) % PRODUCT_ORDER.length;
    openProductDetailModal(PRODUCT_ORDER[nextIndex]);
  }

  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', () => navigateModalProduct(-1));
  }
  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', () => navigateModalProduct(1));
  }

  if (detailModalClose) {
    detailModalClose.addEventListener('click', closeProductDetailModal);
  }
  if (productDetailOverlay) {
    productDetailOverlay.addEventListener('click', (e) => {
      if (e.target === productDetailOverlay) {
        closeProductDetailModal();
      }
    });
  }

  // Dukungan Keyboard (Escape, Panah Kiri/Kanan saat Modal terbuka)
  document.addEventListener('keydown', (e) => {
    if (!productDetailOverlay || productDetailOverlay.hasAttribute('hidden')) return;
    if (e.key === 'Escape') closeProductDetailModal();
    if (e.key === 'ArrowLeft') navigateModalProduct(-1);
    if (e.key === 'ArrowRight') navigateModalProduct(1);
  });

  /* --------------------------------------------------------------------------
   * 6. SMART SIZE FINDER INTERAKTIF (#size-finder)
   * -------------------------------------------------------------------------- */
  const heightSlider = document.getElementById('height-slider');
  const weightSlider = document.getElementById('weight-slider');
  const heightValue = document.getElementById('height-value');
  const weightValue = document.getElementById('weight-value');
  const fitPrefBtns = document.querySelectorAll('#fit-pref-btns .chip-btn');
  const recommendedSizeBadge = document.getElementById('recommended-size-badge');
  const recommendedSizeDims = document.getElementById('recommended-size-dims');
  const recommendedSizeNote = document.getElementById('recommended-size-note');

  let selectedFitPref = 'regular';

  const SIZE_INFO = {
    S: { dims: 'Lebar Dada: <strong>50 cm</strong> × Panjang Baju: <strong>68 cm</strong>' },
    M: { dims: 'Lebar Dada: <strong>52 cm</strong> × Panjang Baju: <strong>70 cm</strong>' },
    L: { dims: 'Lebar Dada: <strong>55 cm</strong> × Panjang Baju: <strong>72 cm</strong>' },
    XL: { dims: 'Lebar Dada: <strong>58 cm</strong> × Panjang Baju: <strong>74 cm</strong>' },
    XXL: { dims: 'Lebar Dada: <strong>61 cm</strong> × Panjang Baju: <strong>76 cm</strong>' },
  };

  function calculateRecommendedSize() {
    if (!heightSlider || !weightSlider) return;

    const h = parseInt(heightSlider.value, 10);
    const w = parseInt(weightSlider.value, 10);

    if (heightValue) heightValue.textContent = `${h} cm`;
    if (weightValue) weightValue.textContent = `${w} kg`;

    const sizeOrder = ['S', 'M', 'L', 'XL', 'XXL'];
    let baseIdx = 2; // L

    if (w < 54 && h < 165) {
      baseIdx = 0; // S
    } else if (w < 64 && h < 172) {
      baseIdx = 1; // M
    } else if (w < 75 && h < 178) {
      baseIdx = 2; // L
    } else if (w < 86 && h < 185) {
      baseIdx = 3; // XL
    } else {
      baseIdx = 4; // XXL
    }

    // Jika pilih gaya Oversized Look, naikkan 1 tingkat ukuran (maks XXL)
    if (selectedFitPref === 'oversized' && baseIdx < 4) {
      baseIdx += 1;
    }

    const finalSize = sizeOrder[baseIdx];
    if (recommendedSizeBadge) recommendedSizeBadge.textContent = finalSize;
    if (recommendedSizeDims) recommendedSizeDims.innerHTML = SIZE_INFO[finalSize].dims;
    if (recommendedSizeNote) {
      recommendedSizeNote.textContent =
        selectedFitPref === 'oversized'
          ? `Ukuran ${finalSize} memberikan siluet Oversized Look yang santai untuk tinggi ${h} cm & berat ${w} kg.`
          : `Ukuran ${finalSize} pas dan proporsional (Regular Fit) untuk tinggi ${h} cm & berat ${w} kg.`;
    }
  }

  if (heightSlider) heightSlider.addEventListener('input', calculateRecommendedSize);
  if (weightSlider) weightSlider.addEventListener('input', calculateRecommendedSize);

  fitPrefBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      fitPrefBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFitPref = btn.getAttribute('data-fit') || 'regular';
      calculateRecommendedSize();
    });
  });

  calculateRecommendedSize();
});
