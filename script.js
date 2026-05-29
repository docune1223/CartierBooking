const position = [
  { id: 'all', name: 'TẤT CẢ', icon: '✨' },
  { id: 'Own', name: 'OWNER', icon: '👑' },
  { id: 'Co-own', name: 'CO-OWNER', icon: '💎' },
  { id: 'Adm', name: 'ADMIN', icon: '🛡️' },
  { id: 'Sup', name: 'SUPPORTER', icon: '💫' },
  { id: 'Vip', name: 'VIP PLAYER', icon: '⭐' },
  { id: 'Lo', name: 'LORETTE', icon: '🌸' },
  { id: 'Ca', name: 'CALDER', icon: '🔥' },
];

const SERVICES = [
  { id: 'chat', name: 'Nói chuyện', icon: '💬' },
  { id: 'game', name: 'Chơi game', icon: '🎮' },
  { id: 'tarot', name: 'Tarot', icon: '🔮' },
  { id: 'voice', name: 'Voice', icon: '🎙️' },
];

const BOOKING_TYPES = [
  { id: 'chat', name: 'Nói chuyện', icon: '💬' },
  { id: 'oncam', name: 'Oncam', icon: '📹' },
];

const PLAYERS = [
  ...createOwnerProfiles(),
  ...createCoOwnerProfiles(),
  ...createAdminProfiles(),
  ...createSupporterProfiles(),
  ...createVipPlayerProfiles(),
  ...createLoretteProfiles(),
  ...createCalderProfiles(),
];

const DURATIONS = [
  { id: '30m', label: '30 phút' },
  { id: '1h', label: '1 giờ' },
  { id: '2h', label: '2 giờ' },
  { id: '3h', label: '3 giờ' },
];

let orders = JSON.parse(localStorage.getItem('playerduo-orders') || '[]');
let activeChip = 'all';
let activeService = 'all';
let searchQuery = '';
let sortBy = 'recommended';
let bookingPlayer = null;
let bookingDuration = '1h';
let bookingType = 'chat';

const ownerGrid = document.getElementById('ownerGrid');
const coownerGrid = document.getElementById('coownerGrid');
const adminGrid = document.getElementById('adminGrid');
const supGrid = document.getElementById('supGrid');
const vippGrid = document.getElementById('vippGrid');
const loretteGrid = document.getElementById('loretteGrid');
const calderGrid = document.getElementById('calderGrid');
const gameChips = document.getElementById('gameChips');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const ownerNoResults = document.getElementById('ownerNoResults');
const coownerNoResults = document.getElementById('coownerNoResults');
const adminNoResults = document.getElementById('adminNoResults');
const supNoResults = document.getElementById('supNoResults');
const vippNoResults = document.getElementById('vippNoResults');
const loretteNoResults = document.getElementById('loretteNoResults');
const calderNoResults = document.getElementById('calderNoResults');
const ownerCount = document.getElementById('ownerCount');
const coownerCount = document.getElementById('coownerCount');
const adminCount = document.getElementById('adminCount');
const supCount = document.getElementById('supCount');
const vippCount = document.getElementById('vippCount');
const loretteCount = document.getElementById('loretteCount');
const calderCount = document.getElementById('calderCount');
const categoryEmpty = document.getElementById('categoryEmpty');
const ownerSection = document.getElementById('owner');
const coownerSection = document.getElementById('coowner');
const adminSection = document.getElementById('admin');
const supSection = document.getElementById('sup');
const vippSection = document.getElementById('vipp');
const loretteSection = document.getElementById('lorette');
const calderSection = document.getElementById('calder');

const POSITION_SECTIONS = {
  Own: ownerSection,
  'Co-own': coownerSection,
  Adm: adminSection,
  Sup: supSection,
  Vip: vippSection,
  Lo: loretteSection,
  Ca: calderSection,
};
const heroFeatured = document.getElementById('heroFeatured');
const ordersList = document.getElementById('ordersList');
const ordersEmpty = document.getElementById('ordersEmpty');
const bookingModal = document.getElementById('bookingModal');
const becomeModal = document.getElementById('becomeModal');
const modalPlayer = document.getElementById('modalPlayer');
const modalSessionTypes = document.getElementById('modalSessionTypes');
const durationRow = document.getElementById('durationRow');
const bookingForm = document.getElementById('bookingForm');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const header = document.querySelector('.header');
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');

function getPosition(id) {
  return position.find((p) => p.id === id);
}

function getService(id) {
  return SERVICES.find((s) => s.id === id);
}

function getBookingType(id) {
  return BOOKING_TYPES.find((t) => t.id === id);
}

function renderGameTags(p) {
  if (p.games) {
    return p.games
      .split(/[,，]/)
      .map((g) => g.trim())
      .filter(Boolean)
      .map((g) => `<span class="game-tag">${g}</span>`)
      .join('');
  }
  return p.services.map((sid) => `<span class="game-tag">${getService(sid)?.name || sid}</span>`).join('');
}

function getPlayer(id) {
  return PLAYERS.find((p) => p.id === id);
}

function renderPlayerAvatarContent(p) {
  if (p.photo) {
    return `<img class="player-avatar-img" src="${p.photo}" alt="${p.name}" loading="lazy" width="72" height="72" />`;
  }
  return p.avatar;
}

function playerAvatarBlock(p, { showStatus = true, className = '', style = '' } = {}) {
  const hasPhoto = Boolean(p.photo);
  const status = showStatus
    ? `<span class="status-dot${p.online ? '' : ' offline'}" title="${p.online ? 'Online' : 'Offline'}"></span>`
    : '';
  return `<div class="player-avatar${hasPhoto ? ' player-avatar--photo' : ''}${className ? ` ${className}` : ''}" style="--avatar-fill:${p.color}${style ? `;${style}` : ''}">${renderPlayerAvatarContent(p)}${status}</div>`;
}

function getDuration(id) {
  return DURATIONS.find((d) => d.id === id) || DURATIONS[0];
}

function showToast(msg) {
  toastMsg.textContent = msg;
  toast.hidden = false;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.hidden = true; }, 300);
  }, 3200);
}

function saveOrders() {
  localStorage.setItem('playerduo-orders', JSON.stringify(orders));
}

function filterPlayers(forPosition) {
  let list = PLAYERS.filter((p) => p.position === forPosition);

  if (activeService !== 'all') {
    list = list.filter((p) => p.services.includes(activeService));
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter((p) => {
      const serviceNames = p.services.map((sid) => getService(sid)?.name || '').join(' ');
      const gamesText = (p.games || '').toLowerCase();
      const loc = (p.location || '').toLowerCase();
      const vip = String(p.vipNum ?? '');
      const admin = String(p.adminNum ?? '');
      const sup = String(p.supNum ?? '');
      const vipp = String(p.vipPlayerNum ?? '');
      return (
        p.name.toLowerCase().includes(q) ||
        p.rank.toLowerCase().includes(q) ||
        p.bio.toLowerCase().includes(q) ||
        loc.includes(q) ||
        vip.includes(q) ||
        admin.includes(q) ||
        sup.includes(q) ||
        vipp.includes(q) ||
        gamesText.includes(q) ||
        serviceNames.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }

  switch (sortBy) {
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'online':
      list.sort((a, b) => (b.online ? 1 : 0) - (a.online ? 1 : 0));
      break;
    default:
      list.sort(
        (a, b) =>
          (a.vipPlayerNum ?? a.supNum ?? a.adminNum ?? a.vipNum ?? a.loretteNum ?? a.calderNum ?? 0) -
            (b.vipPlayerNum ?? b.supNum ?? b.adminNum ?? b.vipNum ?? b.loretteNum ?? b.calderNum ?? 0) ||
          b.reviews - a.reviews
      );
  }

  return list;
}

function playerCardHTML(p) {
  const isOwner = p.position === 'Own';
  const isCoown = p.position === 'Co-own';
  const isAdmin = p.position === 'Adm';
  const isSup = p.position === 'Sup';
  const isVipp = p.position === 'Vip';
  const isLorette = p.position === 'Lo';
  const isCalder = p.position === 'Ca';
  const isGameStaff = isAdmin || isSup || isVipp;
  const isVipTier = isOwner || isCoown;
  const cardModifier = isOwner
    ? ' player-card--owner'
    : isCoown
      ? ' player-card--coown'
      : isAdmin
        ? ' player-card--admin'
        : isSup
          ? ' player-card--sup'
          : isVipp
            ? ' player-card--vipp'
            : isLorette
              ? ' player-card--lorette'
              : isCalder
                ? ' player-card--calder'
                : '';
  const badge = isAdmin
    ? '<span class="card-badge card-badge--admin">ADMIN</span>'
    : isSup
      ? '<span class="card-badge card-badge--sup">SUP</span>'
      : isVipp
        ? '<span class="card-badge card-badge--vipp">VIP</span>'
        : isVipTier
      ? `<span class="card-badge${isCoown ? ' card-badge--coown' : ' card-badge--vip'}">VIP</span>`
      : p.online
      ? '<span class="card-badge card-badge--online">Online</span>'
      : p.reviews > 200
        ? '<span class="card-badge card-badge--hot">HOT</span>'
        : '';
  const gamesBlock = p.games
    ? `<div class="player-games">${renderGameTags(p)}</div>`
    : '';
  return `
    <article class="player-card${cardModifier}" data-id="${p.id}">
      ${badge}
      <div class="player-top">
        ${playerAvatarBlock(p)}
        <div class="player-meta">
          <h3>${p.name}</h3>
          <p class="player-rank">${p.rank}</p>
          <p class="player-cam">${isGameStaff ? 'Giá Game' : 'Giá Cam'}: ${p.camPrice || 'Deal'}</p>
          <p class="player-rating"><span class="star">★</span> ${p.rating} · ${p.reviews} đánh giá</p>
        </div>
      </div>
      <p class="player-bio">${p.bio}</p>
      ${gamesBlock}
      <div class="player-tags">
        ${p.tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
      <div class="player-footer">
        <button type="button" class="player-book" data-id="${p.id}">Đặt lịch</button>
      </div>
    </article>`;
}

function bindBookButtons(container) {
  container.querySelectorAll('.player-book').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openBooking(btn.dataset.id);
    });
  });
}

function renderSection(forPosition, gridEl, countEl, noResultsEl, emptySub) {
  const list = filterPlayers(forPosition);

  if (forPosition === 'Own') {
    countEl.textContent = `${list.length} Owner · VIP Profile`;
  } else if (forPosition === 'Co-own') {
    countEl.textContent = `${list.length} Co-owner · VIP Profile`;
  } else if (forPosition === 'Adm') {
    countEl.textContent = `${list.length} Admin · Quản trị viên`;
  } else if (forPosition === 'Sup') {
    countEl.textContent = `${list.length} Supporter · Đồng hành & game`;
  } else if (forPosition === 'Vip') {
    countEl.textContent = `${list.length} VIP Player · Ưu tiên đặt lịch`;
  } else if (forPosition === 'Lo') {
    countEl.textContent = `${list.length} Lorette · Những người đẹp nhất Cartier`;
  } else {
    countEl.textContent = `${list.length} Calder · ${emptySub}`;
  }

  if (list.length === 0) {
    gridEl.innerHTML = '';
    noResultsEl.hidden = false;
    return;
  }

  noResultsEl.hidden = true;
  gridEl.innerHTML = list.map(playerCardHTML).join('');
  bindBookButtons(gridEl);
}

function sectionVisibleForChip(sectionPosition) {
  if (activeChip === 'all') return true;
  return activeChip === sectionPosition;
}

function updateSectionVisibility() {
  const hasMappedSection = Boolean(POSITION_SECTIONS[activeChip]);
  if (ownerSection) ownerSection.hidden = !sectionVisibleForChip('Own');
  if (coownerSection) coownerSection.hidden = !sectionVisibleForChip('Co-own');
  if (adminSection) adminSection.hidden = !sectionVisibleForChip('Adm');
  if (supSection) supSection.hidden = !sectionVisibleForChip('Sup');
  if (vippSection) vippSection.hidden = !sectionVisibleForChip('Vip');
  if (loretteSection) loretteSection.hidden = !sectionVisibleForChip('Lo');
  if (calderSection) calderSection.hidden = !sectionVisibleForChip('Ca');
  if (categoryEmpty) {
    categoryEmpty.hidden = activeChip === 'all' || hasMappedSection;
  }
}

function scrollToPosition(id) {
  const targets = {
    Own: 'owner',
    'Co-own': 'coowner',
    Adm: 'admin',
    Sup: 'sup',
    Vip: 'vipp',
    Lo: 'lorette',
    Ca: 'calder',
    all: 'games',
  };
  const el = document.getElementById(targets[id] || 'games');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderGameChips() {
  gameChips.innerHTML = position
    .map(
      (g) => `
    <button type="button" class="game-chip${activeChip === g.id ? ' active' : ''}" data-id="${g.id}">
      <span class="chip-icon">${g.icon}</span>${g.name}
    </button>`
    )
    .join('');

  gameChips.querySelectorAll('.game-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeChip = btn.dataset.id;
      renderGameChips();
      updateSectionVisibility();
      renderPlayers();
      scrollToPosition(activeChip);
    });
  });
}

function renderPlayers() {
  const ownerTotal = PLAYERS.filter((p) => p.position === 'Own').length;
  const coownerTotal = PLAYERS.filter((p) => p.position === 'Co-own').length;
  const adminTotal = PLAYERS.filter((p) => p.position === 'Adm').length;
  const supTotal = PLAYERS.filter((p) => p.position === 'Sup').length;
  const vippTotal = PLAYERS.filter((p) => p.position === 'Vip').length;
  const loretteTotal = PLAYERS.filter((p) => p.position === 'Lo').length;
  const calderTotal = PLAYERS.filter((p) => p.position === 'Ca').length;
  const statOwner = document.getElementById('statOwner');
  const statCoowner = document.getElementById('statCoowner');
  const statAdmin = document.getElementById('statAdmin');
  const statSup = document.getElementById('statSup');
  const statVipp = document.getElementById('statVipp');
  const statLorette = document.getElementById('statLorette');
  const statCalder = document.getElementById('statCalder');
  if (statOwner) statOwner.textContent = String(ownerTotal);
  if (statCoowner) statCoowner.textContent = String(coownerTotal);
  if (statAdmin) statAdmin.textContent = String(adminTotal);
  if (statSup) statSup.textContent = String(supTotal);
  if (statVipp) statVipp.textContent = String(vippTotal);
  if (statLorette) statLorette.textContent = String(loretteTotal);
  if (statCalder) statCalder.textContent = String(calderTotal);

  renderSection('Own', ownerGrid, ownerCount, ownerNoResults, 'VIP Profile');
  renderSection('Co-own', coownerGrid, coownerCount, coownerNoResults, 'VIP Profile');
  renderSection('Adm', adminGrid, adminCount, adminNoResults, 'Quản trị viên');
  renderSection('Sup', supGrid, supCount, supNoResults, 'Đồng hành & game');
  renderSection('Vip', vippGrid, vippCount, vippNoResults, 'Ưu tiên đặt lịch');
  renderSection('Lo', loretteGrid, loretteCount, loretteNoResults, 'Những người đẹp nhất Cartier');
  renderSection('Ca', calderGrid, calderCount, calderNoResults, 'Đồng hành mạnh mẽ');
  updateSectionVisibility();
}

function renderHeroFeatured() {
  const top = [...PLAYERS]
    .filter((p) => p.position === 'Own')
    .sort((a, b) => (a.vipNum ?? 0) - (b.vipNum ?? 0));
  heroFeatured.innerHTML = top
    .map(
      (p) => `
    <div class="mini-card">
      <div class="mini-avatar${p.photo ? ' mini-avatar--photo' : ''}" style="--avatar-fill:${p.color}">${renderPlayerAvatarContent(p)}</div>
      <div class="mini-info">
        <h4>${p.name}</h4>
        <p>${p.rank.split('·')[0].trim()}</p>
      </div>
    </div>`
    )
    .join('');
}

function renderOrders() {
  ordersList.querySelectorAll('.order-card').forEach((el) => el.remove());

  if (orders.length === 0) {
    ordersEmpty.hidden = false;
    return;
  }

  ordersEmpty.hidden = true;

  orders.forEach((o) => {
    const player = getPlayer(o.playerId);
    const session = getBookingType(o.sessionType || o.gameId) || getService(o.sessionType || o.gameId);
    const el = document.createElement('article');
    el.className = 'order-card';
    el.innerHTML = `
      <div class="order-avatar${player?.photo ? ' order-avatar--photo' : ''}" style="--avatar-fill:${player?.color || '#666'}">${player ? renderPlayerAvatarContent(player) : '?'}</div>
      <div>
        <h4>${player?.name || 'Unknown'} · ${session?.name || o.sessionType}</h4>
        <p class="order-meta">${o.durationLabel} · ${o.ign} · ${new Date(o.createdAt).toLocaleDateString()}</p>
      </div>
      <button type="button" class="order-cancel" data-id="${o.id}">Cancel order</button>
    `;
    ordersList.appendChild(el);
  });

  ordersList.querySelectorAll('.order-cancel').forEach((btn) => {
    btn.addEventListener('click', () => {
      orders = orders.filter((o) => o.id !== btn.dataset.id);
      saveOrders();
      renderOrders();
      showToast('Order cancelled');
    });
  });
}

function openBooking(playerId, typeId = null) {
  const player = getPlayer(playerId);
  if (!player) return;

  bookingPlayer = playerId;
  bookingType = typeId || 'chat';
  bookingDuration = '1h';
  bookingForm.reset();

  modalPlayer.innerHTML = `
    ${playerAvatarBlock(player, {
      className: 'player-avatar--modal',
      style: 'width:52px;height:52px;font-size:1rem;border-radius:14px',
    })}
    <div>
      <h3 style="font-size:1rem;font-weight:600">${player.name}</h3>
      <p style="font-size:0.85rem;color:var(--text-muted)">${player.rank}</p>
    </div>`;

  modalSessionTypes.innerHTML = BOOKING_TYPES.map(
    (t) =>
      `<button type="button" class="chip-btn${bookingType === t.id ? ' selected' : ''}" data-id="${t.id}">${t.icon} ${t.name}</button>`
  ).join('');

  modalSessionTypes.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      bookingType = btn.dataset.id;
      modalSessionTypes.querySelectorAll('.chip-btn').forEach((b) =>
        b.classList.toggle('selected', b.dataset.id === bookingType)
      );
    });
  });

  durationRow.innerHTML = DURATIONS.map(
    (d) => `<button type="button" class="dur-btn${bookingDuration === d.id ? ' selected' : ''}" data-id="${d.id}">${d.label}</button>`
  ).join('');

  durationRow.querySelectorAll('.dur-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      bookingDuration = btn.dataset.id;
      durationRow.querySelectorAll('.dur-btn').forEach((b) => b.classList.toggle('selected', b.dataset.id === bookingDuration));
    });
  });

  bookingModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  bookingModal.hidden = true;
  document.body.style.overflow = '';
}

function closeBecome() {
  becomeModal.hidden = true;
  document.body.style.overflow = '';
}

function confirmBooking() {
  if (!bookingForm.reportValidity() || !bookingPlayer) return;

  const fd = new FormData(bookingForm);
  const player = getPlayer(bookingPlayer);
  const dur = getDuration(bookingDuration);

  const session = getBookingType(bookingType);

  const order = {
    id: crypto.randomUUID(),
    playerId: bookingPlayer,
    sessionType: bookingType,
    durationId: bookingDuration,
    durationLabel: dur.label,
    ign: fd.get('ign').trim(),
    contact: fd.get('contact').trim(),
    note: (fd.get('note') || '').trim(),
    createdAt: new Date().toISOString(),
  };

  orders.unshift(order);
  saveOrders();
  renderOrders();
  closeBooking();
  showToast(`Đã đặt ${player.name} · ${session?.name || bookingType} · ${dur.label}`);
  document.getElementById('orders').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('searchBtn').addEventListener('click', () => {
  searchQuery = searchInput.value;
  renderPlayers();
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchQuery = searchInput.value;
    renderPlayers();
  }
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  renderPlayers();
});

document.getElementById('clearFilter').addEventListener('click', () => {
  activeChip = 'all';
  activeService = 'all';
  searchQuery = '';
  searchInput.value = '';
  renderGameChips();
  renderPlayers();
  scrollToPosition('all');
});

sortSelect.addEventListener('change', () => {
  sortBy = sortSelect.value;
  renderPlayers();
});

document.getElementById('headerBookBtn').addEventListener('click', () => {
  const first =
    filterPlayers('Own')[0] ||
    filterPlayers('Co-own')[0] ||
    filterPlayers('Adm')[0] ||
    filterPlayers('Sup')[0] ||
    filterPlayers('Vip')[0] ||
    filterPlayers('Lo')[0] ||
    filterPlayers('Ca')[0] ||
    PLAYERS[0];
  openBooking(first.id);
});

document.getElementById('modalClose').addEventListener('click', closeBooking);
bookingModal.addEventListener('click', (e) => {
  if (e.target === bookingModal) closeBooking();
});
document.getElementById('confirmBook').addEventListener('click', confirmBooking);

document.getElementById('becomeBtn').addEventListener('click', () => {
  becomeModal.hidden = false;
  document.body.style.overflow = 'hidden';
});
document.getElementById('becomeClose').addEventListener('click', closeBecome);
becomeModal.addEventListener('click', (e) => {
  if (e.target === becomeModal) closeBecome();
});
document.getElementById('becomeSubmit').addEventListener('click', () => {
  const form = document.getElementById('becomeForm');
  if (!form.reportValidity()) return;
  closeBecome();
  form.reset();
  showToast('Application received! We\'ll review your profile soon.');
});

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.classList.toggle('active', open);
  menuBtn.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBooking();
    closeBecome();
  }
});

renderGameChips();
renderHeroFeatured();
renderPlayers();
renderOrders();
