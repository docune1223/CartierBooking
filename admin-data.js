const ADMIN_COLORS = ['#af84ff', '#9fc1ff'];

const ADMIN_PHOTOS = {
  1: 'https://i.postimg.cc/HjYcg424/bibeos.jpg',
  2: 'https://i.postimg.cc/dZVLjw3T/docu.jpg',
};

/** [adminNum, name, location, bio, games, gamePrice?] */
const ADMIN_ENTRIES = [
  [1, 'Bibeos', 'Admin', 'Xứ sở thần tiên · sao cũng được', 'AOV, TFT', 'Deal'],
  [2, 'Docu', 'Admin', 'Miền đất hứa · Love với lốp khác nhau lắm', 'All game pc', 'Deal'],
];

function formatAdminNum(num) {
  return String(num).padStart(3, '0');
}

function adminInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'A';
}

function createAdminProfiles() {
  return ADMIN_ENTRIES.map(([adminNum, name, location, bio, games, gamePrice], index) => {
    const price = gamePrice || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `admin-${adminNum}`,
      adminNum,
      name,
      avatar: adminInitials(name),
      photo: ADMIN_PHOTOS[adminNum] || null,
      color: ADMIN_COLORS[index % ADMIN_COLORS.length],
      position: 'Adm',
      services: ['chat', 'oncam', 'game'],
      games: gameStr,
      location,
      camPrice: price,
      rank: `ADMIN ${formatAdminNum(adminNum)} · ${location}`,
      rating: 5,
      reviews: 300,
      online: true,
      tags: ['Admin'],
      bio: bio || '—',
    };
  });
}
