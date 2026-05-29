const OWNER_COLORS = ['#dc2626', '#b91c1c', '#ffffff'];

const OWNER_PHOTOS = {
  0: 'https://i.postimg.cc/sM7DSvm4/lon.jpg',
  1: 'https://i.postimg.cc/LJL6fnDB/cua.jpg',
  136: 'https://i.postimg.cc/18w56fB0/gao.jpg',
};

/** [vipNum, name, location, bio, games, camPrice?] */
const OWNER_ENTRIES = [
  [0, 'Lợn Hoàng Kim', 'Owner', 'Muốn mời em đi ăn tối, không ngờ lại trở thành bữa tối của em', ''],
  [1, 'Cua Hoàng Đế', 'Owner', 'Anh thích em mặc đầm vì anh thích em vừa dẫm vừa đi', ''],
  [136, 'Gao', 'Owner', 'Chuyên gia phông bạt, tốt nghiệp chứng chỉ phông bạt loại xuất sắc', ''],
];

function ownerInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'O';
}

function createOwnerProfiles() {
  return OWNER_ENTRIES.map(([vipNum, name, location, bio, games, camPrice]) => {
    const price = camPrice || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `owner-${vipNum}`,
      vipNum,
      name,
      avatar: ownerInitials(name),
      photo: OWNER_PHOTOS[vipNum] || null,
      color: OWNER_COLORS[vipNum === 136 ? 2 : vipNum % OWNER_COLORS.length],
      position: 'Own',
      services: ['chat', 'oncam'],
      games: gameStr,
      location,
      camPrice: price,
      rank: `VIP Profile ${vipNum} · ${location}`,
      rating: 5,
      reviews: 999,
      online: true,
      tags: ['Owner', 'VIP'],
      bio: bio || '—',
    };
  });
}
