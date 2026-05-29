const LORETTE_COLORS = [
  '#ec4899', // Pink
  '#f43f5e', // Rose
  '#d946ef', // Fuchsia
  '#a855f7', // Purple
  '#db2777', // Deep Pink
  '#be185d', // Dark Pink
  '#e879f9', // Light Violet
  '#f472b6'  // Pastel Pink
];

const LORETTE_PHOTOS = {
  1: 'https://i.postimg.cc/ZBm7wD6L/lorette-1.jpg',
  2: 'https://i.postimg.cc/8JGKZnLH/lorette-2.jpg',
  3: 'https://i.postimg.cc/FdvWTn0G/lorette-3.jpg',
  4: 'https://i.postimg.cc/v1f2Ldxn/lorette-4.jpg',
  5: 'https://i.postimg.cc/zLK2S1HS/lorette-5.jpg',
  7: 'https://i.postimg.cc/sB7H9RGJ/lorette-7.jpg',
  8: 'https://i.postimg.cc/QB1YkrKS/lorette-8.jpg',
  9: 'https://i.postimg.cc/mz4Xm67H/lorette-9.jpg',
  10: 'https://i.postimg.cc/sQz6T05Y/lorette-10.jpg',
  11: 'https://i.postimg.cc/N9tJdPRk/lorette-11.jpg',
  13: 'https://i.postimg.cc/jDGk7j2S/lorette-13.jpg',
  14: 'https://i.postimg.cc/K1dsMYjj/lorette-14.jpg',
  15: 'https://i.postimg.cc/NKWPH0F5/lorette-15.jpg',
  16: 'https://i.postimg.cc/v1f2LdxM/lorette-16.jpg',
  17: 'https://i.postimg.cc/94ZgtjwX/lorette-17.jpg',
  19: 'https://i.postimg.cc/hJTZbqQh/lorette-19.jpg',
  20: 'https://i.postimg.cc/8FMXBVfJ/lorette-20.jpg',
  21: 'https://i.postimg.cc/dhzSy03J/lorette-21.jpg',
  22: 'https://i.postimg.cc/fV6g9byz/lorette-22.jpg',
  23: 'https://i.postimg.cc/sMt0h2XN/lorette-23.jpg',
  24: 'https://i.postimg.cc/YvJyWS9Z/lorette-24.jpg',
  25: 'https://i.postimg.cc/5XZkCt0D/lorette-25.jpg',
  26: 'https://i.postimg.cc/VJ3HCNvQ/lorette-26.jpg',
  27: 'https://i.postimg.cc/BjdwKvbG/lorette-27.jpg',
  29: 'https://i.postimg.cc/pmg1Fdrv/lorette-29.jpg',
  30: 'https://i.postimg.cc/TKZHDP1G/lorette-30.jpg',
  31: 'https://i.postimg.cc/bZKFtvrp/lorette-31.jpg',
  32: 'https://i.postimg.cc/21qKyWzK/lorette-32.jpg',
  33: 'https://i.postimg.cc/0z6BjS8H/lorette-33.jpg',
  34: 'https://i.postimg.cc/HrJhnMpF/lorette-34.jpg',
  35: 'https://i.postimg.cc/bZKFtvJL/lorette-35.jpg',
  36: 'https://i.postimg.cc/RWjbH0FX/lorette-36.jpg',
  37: 'https://i.postimg.cc/DStYXzZY/lorette-37.jpg',
  38: 'https://i.postimg.cc/TKZHDPwN/lorette-38.jpg',
  39: 'https://i.postimg.cc/FYfBzS93/lorette-39.jpg',
  40: 'https://i.postimg.cc/18gjXF9r/lorette-40.jpg',
  41: 'https://i.postimg.cc/gxwTjhYs/lorette-41.jpg',
  43: 'https://i.postimg.cc/Jsy20X1K/lorette-43.jpg',
  44: 'https://i.postimg.cc/6ybPBcN2/lorette-44.jpg',
  45: 'https://i.postimg.cc/JGYFRxWs/lorette-45.jpg',
  46: 'https://i.postimg.cc/N5CnQDwr/lorette-46.jpg',
  47: 'https://i.postimg.cc/jL31RcrN/lorette-47.jpg',
  48: 'https://i.postimg.cc/FYfBzS9f/lorette-48.jpg',
  49: 'https://i.postimg.cc/D8pN76KQ/lorette-49.jpg',
  50: 'https://i.postimg.cc/hXJ5vmS7/lorette-50.jpg',
  51: 'https://i.postimg.cc/9rQS3Ss5/lorette-51.jpg',
  52: 'https://i.postimg.cc/svg8F8b3/lorette-52.jpg',
  53: 'https://i.postimg.cc/rKwb6b7y/lorette-53.jpg',
  54: 'https://i.postimg.cc/Czr2w7Vy/lorette-54.jpg',
  55: 'https://i.postimg.cc/crkzdhNG/lorette-55.jpg',
  57: 'https://i.postimg.cc/VdZhzgcz/lorette-57.jpg',
  58: 'https://i.postimg.cc/2V9tCGfz/lorette-58.jpg',
  59: 'https://i.postimg.cc/9rQS3SKk/lorette-59.jpg',
  60: 'https://i.postimg.cc/yk85q5t5/lorette-60.jpg',
  61: 'https://i.postimg.cc/gn2595QS/lorette-61.jpg',
  63: 'https://i.postimg.cc/7fZcvcdW/lorette-63.jpg',
  69: 'https://i.postimg.cc/jLS9V9mG/lorette-69.jpg',
};

/** [num, name, location, bio, games, camPrice?, discord?] */
const LORETTE_ENTRIES = [
  [1, 'Ngọc Anh', 'Hà Nội', 'Biết là bận rồi, nhưng mà để ý em một tí', 'AOV', 'Deal', '1 ✧ Nganh'],
  [2, 'Su', 'Hà Nội', 'Đối sao đáp vậy', 'FF', 'Deal', '2 ✧ Lọ lem của Mạnh Dũng'],
  [3, 'Trâm Anh', 'Hà Nội', 'Đàn ông chinh phục thế giới, tôi sẽ chinh phục đàn ông', 'AOV', 'Deal', '3 ✧ Vợ yêu của Mói'],
  [4, 'Sâu', 'Phú Thọ', 'Hâm và vô tư', 'AOV', 'Deal', '4 ✧ sâu sâu là mặt trăng nhỏ~'],
  [5, 'Su Nhi', 'Hà Nội', 'Trời đổ mưa vì nhớ mây, còn em đổ vì ánh mắt anh', 'AOV', 'Deal', '5✧ Su Nhi'],
  [7, 'Mây', 'Phú thọ', 'Tim em chắc bị lỗi rồi, cứ gặp anh là bị lag', 'Liên quân', 'Deal', '7 ✧ Mây mèo'],
  [8, 'Đan Vy', 'Quảng Bình', 'Nói được giọng 3 miền mỗi tội không nói được lời yêu anh', 'PUBG, MB, AOV, RBL', 'Deal', '8 ✧ Đan Vy'],
  [9, 'Chip', 'Hà Nội', 'Em đây không phải là nắng, nhưng vẫn đủ làm anh say', 'AOV', 'Deal', '9 ✧ Chippi'],
  [10, 'Yenii', 'Hà Nội', 'Em không thích cạnh tranh, chỉ thích ở bên cạnh anh thôi', 'FF', 'Deal', '10 ✧ nhi'],
  [11, 'Hồng Ngọc', 'Hưng Yên', '—', 'AOV, Roblox, Minecraft', 'Deal', '11 ✧ kiki'],
  [13, 'Em Thảo', 'HCM', 'Miss em thì call', 'LQ, FF, TFT', 'Deal', '13 ✧ CôEmXinhXinhNướcLồnVịSting'],
  [14, 'Bống', 'Hà Nội', 'gọi em là deadline , vì anh không thể nào quên được', 'AOV', 'Deal', '14 ✧ Bống'],
  [15, 'Luccy', 'Hà Nội', 'Người tình trong mơ', 'TFT, AOV, FF', 'Deal', '15 ✧ vợ'],
  [16, 'Dâu', 'TPHCM', 'Em làm gì cũng vội vã. Để lỡ có ngã thì ngã vào lòng anh', '', 'Deal', 'người-dùng-không-xác-định'],
  [17, 'Tít', 'Hà Nội', 'Người tình bên gối mỗi tối nhớ anh', 'Chơi đàn ông', 'Deal', '17 ✧ TÍT YÊU CỦA ANH ƠI'],
  [19, 'Docu', 'TP BMT', 'Nhìn lên thấy ai cũng hơn mình. Nhìn xuống thấy vú.', 'All game pc', 'Deal', 'ngu som di em'],
  [20, 'Meo', 'HCM', 'hâm và vô tư', 'FF', 'Deal', 'Meo'],
  [21, 'Punn', 'Hà Nội', 'Tim em thì nhỏ, nhưng chắc đủ chỗ cho anh rồi.', 'Playtogether, FF', '400', '21 ✧ pun'],
  [22, 'Bốp', 'Lạng Sơn', 'Xinh gái tinh quái', 'AOV', 'Deal', 'người-dùng-không-xác-định'],
  [23, 'Quỳnh', 'Hà Nội', 'Em không phải google nhưng em có mọi thứ anh đang tìm', 'FF', 'Deal', '23 ✧ Kẹo bông gòn'],
  [24, 'Sóc', 'Hà Tĩnh', 'Gái nhật học tiếng anh để rên tiếng việt', 'AOV', 'Deal', '24 ✧ Emi Fukada'],
  [25, 'Xì Trum', 'Phú Thọ', 'Trời xanh mây trắng nắng vàng, còn em thì thích nhẹ nhàng có anh', 'FF', 'Deal', '25 ✧ trum trum là mặt trời nhỏ~'],
  [26, 'Bảo Ni', 'Biên Hòa', 'Yêu em hay để em yêu', 'Roblox, FF', 'Deal', '26 ✧ ѕáтɢơ có cây cơ ở ɢιữα'],
  [27, 'Chris', 'Cam Ranh, Khánh Hòa', 'Tình yêu là một điều khó hiểu. Nhưng không vì thế mà người ta không yêu.', 'Valorant, Minecraft', 'Deal', '27 ✧ Chris'],
  [29, 'Bani', 'Hà Nội', 'Người tình trong tối', 'VLR, TFT, AOV, Game steam', 'Deal', '29 ✧ trong sáng nhất sv'],
  [30, 'Thỏ', 'BMT', 'Dễ thương và đáng iu', 'AOV', 'Deal', '30 ✧Thỏ'],
  [31, 'Kami', 'Hà Nội', 'A secret makes a woman woman', 'VLR, AOV, RBL, TFT', 'Deal', '31 ✧ quận chúa Kami'],
  [32, 'Nhím Xinh', 'Hà Nội', 'Em không cần nhiều người theo… chỉ cần đúng người hiểu', 'AOV, PUBG', 'Deal', '32 ✧Nhím Xinh'],
  [33, 'Chít', 'Sài Gòn', 'Bố đếch buồi quan tâm', 'MNC, BBlast', 'Deal', 'người-dùng-không-xác-định'],
  [34, 'it’s upp', 'Nghệ An', 'Người tình bên gối mỗi tối nhớ anh', 'Hii', 'Deal', 'người-dùng-không-xác-định'],
  [35, 'Bông Iuu', 'Hà Nội', 'Thèm bánh u', 'AOV, chơi trai', 'Deal', '35 ✧ Bông iuu'],
  [36, 'Selina', 'Sài Gòn', 'Lam phien nhau ti di', 'AOV', 'Deal', '36 ✧ Selina'],
  [37, 'Miu Xing', 'Hà Nội', 'Anh cưng chiều, em yêu nhiều.', 'AOV', 'Deal', 'người-dùng-không-xác-định'],
  [38, 'Trúc Phương', 'Sài Gòn', 'LiuLiu', 'PLT, AOV', 'Deal', 'người-dùng-không-xác-định'],
  [39, 'Quincy', 'TPHCM', 'Làm ồn sẽ tỉnh', 'AOV, PUBG', 'Deal', 'người-dùng-không-xác-định'],
  [40, 'Trang', 'Hà Nội', 'Em không cần thu hút ai cả, vì thân thái của em đã là điểm nhấn rồi', 'FF', 'Deal', 'người-dùng-không-xác-định'],
  [41, 'Lee Lee', 'Hà Nội', 'Em ở đây, còn anh ở đâu', 'AOV', 'Deal', 'người-dùng-không-xác-định'],
  [43, 'Thu Cá', 'Hà Nội', 'Hà Nội đẹp nhất về đêm, đẹp hơn là lúc có em bên đời', 'AOV, FF, PLAYTOGETHER', 'Deal', '43 ✧ Thu Cá'],
  [44, 'Bảo Nhi', 'Quảng Ninh', 'Hôm nay trời xanh mây trắng, không say nắng thì say đời.', 'AOV', 'Deal', '44 ✧ Bảo Nhi'],
  [45, 'Bông', 'Phú Thọ', 'Đồng vợ đồng chồng chứ đừng đồng chí đau lòng em', 'FF', 'Deal', '45 ✧ Bong bong là đám mây nhỏ~'],
  [46, 'em Mèo', 'Quảng Bình', 'Nguoi lạ 5p đầu, nguoi quen 5 tiếng sauu🙇♀️', 'Liên quân (có chơi danong)', 'Deal', '46 ✧ mèoo.'],
  [47, 'Huỳn', 'Hà Nội', 'Hiền và nhiều tiền', 'AOV, PUBG', 'Deal', 'người-dùng-không-xác-định'],
  [48, 'Soo', 'Hà Nội', 'Check ib em nhé,em chưa nhắn', 'FF, PTG, RBL, AOV', 'Deal', '48 ✧ SOO (bin)'],
  [49, 'Óng Lyều', 'Từ từ biết', 'Hay Cáu Kỉnh', 'AOV', 'Deal', '49 ✧ óng lyều'],
  [50, 'Daphne', 'Nha trang', 'yếu tiếng trung vì trúng tiếng yêu', 'chơi đùa nhau', 'Deal', '50 ✧ Daphne'],
  [51, 'Nhým', 'Hà tỉnh', 'yêu hay không yêu ?', 'FF, Liên quân', 'Deal', '51 ✧ Nhýmm🎀'],
  [52, 'ChipB', 'Đài loan', 'yêu em hay để em yêu?', 'AOV, TFT, PTG', 'Deal', '52 ✧ ChipB Cung Nữ'],
  [53, 'Mít', 'Bắc Ninh', 'ebe đáng yêu', 'TFT, AOV, RBL', 'Deal', '53 ✧ mít'],
  [54, 'Nhii', 'Quảng bình', 'Dễ thương nhưng thương không dễ', 'Play together', 'Deal', '54 ✧ Nhi'],
  [55, 'Ốc', 'Nghệ An', 'Miss me yet', 'TFT, AOV, Khu vườn trên mây', 'Deal', '55 ✧ thị mơ'],
  [57, 'Oanh Xinh', 'Hà Nội', 'Đố anh biết ứng dụng nào thích em nhất', 'AOV', 'Deal', '57 ✧ Oanh Xinh'],
  [58, 'Anya', 'Ha Noi', 'chẳng phải tình đầu sao đau đến thế', 'AOV, Play together, Roblox, Miniworld', 'Deal', '58 ✧'],
  [59, 'Cúc Ki', 'TP HCM', 'tại sao buông được kẻ tồi, nhưng tôi là kẻ buồn', '', 'Deal', '59 ✧ jet nhat sg'],
  [60, 'Zoe', 'Phú thọ', 'Nhớ anh tốn nhiều calo thế nên em gầy trơ xương', 'Liên quân', 'Deal', 'người-dùng-không-xác-định'],
  [61, 'Darling', 'Hải Phòng', 'Cô nàng tarot reader nổi loạn', 'TFT, Valo, LOL', 'Deal', '61 ✧ Darling'],
  [63, 'Như', 'Hà tỉnh', 'iu hay hong iu', 'FF', 'Deal', '63✧bapbiii'],
  [69, 'Xoài', 'Hà Tĩnh', 'Đỏ bạc đen tình', 'FF, AOV, NSSB', 'Deal', 'Xoài Xoài là mặt lốp nhỏ 💋'],
];

function loretteInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'L';
}

function createLoretteProfiles() {
  return LORETTE_ENTRIES.map(([num, name, location, bio, games, camPrice, discord]) => {
    const price = camPrice || 'Deal';
    const gameStr = (games || '').trim();
    return {
      id: `lorette-${num}`,
      loretteNum: num,
      name,
      avatar: loretteInitials(name),
      photo: LORETTE_PHOTOS[num] || null,
      color: LORETTE_COLORS[(num - 1) % LORETTE_COLORS.length],
      position: 'Lo',
      services: ['chat', 'oncam'],
      games: gameStr,
      location,
      camPrice: price,
      rank: `Lorette ${num} · ${location}`,
      rating: Math.round((4.6 + (num % 5) * 0.1) * 10) / 10,
      reviews: 50 + ((num * 29) % 250),
      online: num % 4 !== 0,
      tags: [`Giá Cam: ${price}`],
      bio: bio || '—',
      discord: discord || '',
    };
  });
}
