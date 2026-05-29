const CALDER_COLORS = ['#505ae4', '#62c2cc', '#4f46e5', '#22d3ee', '#6366f1', '#38bdf8', '#4338ca', '#06b6d4'];

const CALDER_PHOTOS = {
  2: 'https://i.postimg.cc/WDccP8Mm/calder-2.jpg',
  3: 'https://i.postimg.cc/0611qnpQ/calder-3.jpg',
  4: 'https://i.postimg.cc/QBZZrmpH/calder-4.jpg',
  5: 'https://i.postimg.cc/GBnn1Kk4/calder-5.jpg',
  7: 'https://i.postimg.cc/TyvvX0r2/calder-7.jpg',
  8: 'https://i.postimg.cc/p9MMtCDD/calder-8.jpg',
  18: 'https://i.postimg.cc/nsfft2v4/calder-18.jpg',
  20: 'https://i.postimg.cc/mcWWGjQS/calder-20.jpg',
};

/** [num, name, location, bio, games, camPrice?] */
const CALDER_ENTRIES = [
  [2, 'Vincent', 'Hà Nội', 'Ngoan đúng lúc, hư đúng chỗ', 'TFT, Liên Minh, Liên Quân'],
  [3, 'Phạm Đức', 'Hải Phòng', 'Thích cái đẹp đơn giản', 'DF, VLR, CS2, RBL, AOV'],
  [4, 'An Đàm', 'Gia Lai', 'Do more of what makes you happy', 'AOV, FF, TFT, VLR, FC, Vương Giả'],
  [5, 'Tèo', 'Đà Nẵng', 'Tôi nghiện bạn có tiền không', 'Valo, TFT, LQ'],
  [7, 'Hshy', 'Hà Nội', 'Yêu tất cả phụ nữ', 'VAL, TFT'],
  [8, 'Hoàng Anh', 'Hà Nội', 'Anh yêu ems', 'Liên Quân'],
  [18, 'Rùa', 'Bắc Ninh', 'You can never say wrong things to the right person', 'Liên Quân, Free Fire, Roblox'],
  [20, 'Twi', 'Hà Nội', 'Em ơi bướm gỗ màu nâu, bướm ma màu trắng — bướm em màu gì?', 'All game'],
];

function calderInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'C';
}

function createCalderProfiles() {
  return CALDER_ENTRIES.map(([num, name, location, bio, games, camPrice]) => {
    const price = camPrice || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `calder-${num}`,
      calderNum: num,
      name,
      avatar: calderInitials(name),
      photo: CALDER_PHOTOS[num] || null,
      color: CALDER_COLORS[(num - 1) % CALDER_COLORS.length],
      position: 'Ca',
      services: ['chat', 'oncam'],
      games: gameStr,
      location,
      camPrice: price,
      rank: `Calder ${num} · ${location}`,
      rating: Math.round((4.5 + (num % 5) * 0.1) * 10) / 10,
      reviews: 32 + ((num * 37) % 380),
      online: num % 3 !== 0,
      tags: [`Giá Cam: ${price}`],
      bio: bio || '—',
    };
  });
}
