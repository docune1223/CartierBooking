const SUPPORTER_COLORS = ['#ff6bcb', '#c084fc', '#60a5fa', '#4ade80', '#fde047'];

const SUPPORTER_PHOTOS = {
  1: 'https://i.postimg.cc/56pXyHPt/yunie.jpg',
  2: 'https://i.postimg.cc/qzQNqtm4/vincent.jpg',
  3: 'https://i.postimg.cc/yknDxJfd/muoi-iuu.png',
};

/** [supNum, name, city, bio, games, gamePrice?] */
const SUPPORTER_ENTRIES = [
  [1, 'Yunie', 'Hà Nội', '99% cơ thể là ngại', 'AOV, TFT', 'Deal'],
  [2, 'Vincent', 'Hà Nội', 'Ngoan đúng lúc, hư đúng chỗ', 'TFT, LOL, AOV v.v', 'Deal'],
  [3, 'Muối iuu', 'Phan Thiết', 'Hầm và dai', 'Chơi đùa tình cảm', 'Deal'],
];

function formatSupNum(num) {
  return String(num).padStart(3, '0');
}

function supporterInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'S';
}

function createSupporterProfiles() {
  return SUPPORTER_ENTRIES.map(([supNum, name, city, bio, games, gamePrice], index) => {
    const price = gamePrice || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `sup-${supNum}`,
      supNum,
      name,
      avatar: supporterInitials(name),
      photo: SUPPORTER_PHOTOS[supNum] || null,
      color: SUPPORTER_COLORS[index % SUPPORTER_COLORS.length],
      position: 'Sup',
      services: ['chat', 'oncam', 'game'],
      games: gameStr,
      location: city,
      camPrice: price,
      rank: `SUPPORTER ${formatSupNum(supNum)} · ${city}`,
      rating: 4.9,
      reviews: 150,
      online: true,
      tags: ['Supporter'],
      bio: bio || '—',
    };
  });
}
