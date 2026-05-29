const COOWNER_COLORS = ['#f79327', '#ffecc', '#e07d1a', '#fcd34d', '#ffcc80'];

const COOWNER_PHOTOS = {
  2: 'https://i.postimg.cc/qhmR1S9t/phuoc.jpg',
  3: 'https://i.postimg.cc/8fjC9wS1/jay.jpg',
  13: 'https://i.postimg.cc/fSJbp5Ny/uchiha-tam.jpg',
  555: 'https://i.postimg.cc/D48zH5Tf/shinn.png',
  999: 'https://i.postimg.cc/PvPq9KjX/moii.jpg',
};

/** [vipNum, name, location, bio, games, camPrice?] */
const COOWNER_ENTRIES = [
  [2, 'Phước', 'Co-owner', 'Smile and the whole world laugh with you. If you cry you will have to cry alone', ''],
  [3, 'Jay', 'Co-owner', 'Trời dạo này lạnh nhỉ. Làm anh nhớ tới cái lần em ốm', ''],
  [13, 'Uchiha Tâm', 'Co-owner', 'Phiến Thợ Điện', ''],
  [555, 'Shinn', 'Co-owner', 'Baby anh sẽ qua vào late night…', ''],
  [999, 'Móii', 'Co-owner', 'Hii', ''],
];

function coownerInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'C';
}

function createCoOwnerProfiles() {
  return COOWNER_ENTRIES.map(([vipNum, name, location, bio, games, camPrice], index) => {
    const price = camPrice || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `coown-${vipNum}`,
      vipNum,
      name,
      avatar: coownerInitials(name),
      photo: COOWNER_PHOTOS[vipNum] || null,
      color: COOWNER_COLORS[index % COOWNER_COLORS.length],
      position: 'Co-own',
      services: ['chat', 'oncam'],
      games: gameStr,
      location,
      camPrice: price,
      rank: `VIP Profile ${vipNum} · ${location}`,
      rating: 5,
      reviews: 500,
      online: true,
      tags: ['Co-owner', 'VIP'],
      bio: bio || '—',
    };
  });
}
