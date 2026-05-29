const VIP_PLAYER_COLORS = ['#6e21ff', '#fb54ff', '#a855f7', '#c026d3', '#e879f9'];

const VIP_PLAYER_PHOTOS = {
  36: 'https://i.postimg.cc/064mQ6yz/bibeos.jpg',
  888: 'https://i.postimg.cc/LqWfXq8q/xi-trum.jpg',
  911: 'https://i.postimg.cc/Y4Pg94CG/td.jpg',
};

/** [playerNum, name, location, bio, games, price?] */
const VIP_PLAYER_ENTRIES = [
  [36, 'Bibeos', 'VIP Player', 'Khùng giai đoạn cuối', '', 'Deal'],
  [
    888,
    'Xì Trum',
    'VIP Player',
    'đẹp gái đào hoa em không có...hài hài ngố ngố anh có thích em không',
    '',
    'Deal',
  ],
  [911, 'Td', 'VIP Player', 'Nhà anh nuôi bò, bò anh tuôi', '', 'Deal'],
];

function formatVipPlayerNum(num) {
  return String(num);
}

function vipPlayerInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'V';
}

function createVipPlayerProfiles() {
  return VIP_PLAYER_ENTRIES.map(([playerNum, name, location, bio, games, price], index) => {
    const gamePrice = price || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `vipp-${playerNum}`,
      vipPlayerNum: playerNum,
      name,
      avatar: vipPlayerInitials(name),
      photo: VIP_PLAYER_PHOTOS[playerNum] || null,
      color: VIP_PLAYER_COLORS[index % VIP_PLAYER_COLORS.length],
      position: 'Vip',
      services: ['chat', 'oncam', 'game'],
      games: gameStr,
      location,
      camPrice: gamePrice,
      rank: `VIP Player ${formatVipPlayerNum(playerNum)} · ${location}`,
      rating: 4.9,
      reviews: 200,
      online: true,
      tags: ['VIP Player'],
      bio: bio || '—',
    };
  });
}
