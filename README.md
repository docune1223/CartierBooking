# Cartier Booking

Nền tảng kết nối hàng đầu — Booking nói chuyện, oncam và đồng hành cùng bạn mọi lúc.

## 📋 Giới thiệu

Cartier Booking là nơi mọi kết nối đều có chủ đích. Chúng tôi cung cấp dịch vụ:
- Nói chuyện 24/7
- Oncam
- Chơi game
- Xem tarot
- Và nhiều dịch vụ khác

## 🎯 Tính năng

- **Đa dạng dịch vụ**: Chat, Oncam, Game, Tarot, Voice
- **Hệ thống rank**: Owner, Co-owner, Admin, Supporter, VIP Player, Lorette, Calder
- **Đặt lịch dễ dàng**: Chọn thời lượng, dịch vụ và người kết nối
- **Quản lý đơn đặt**: Xem và hủy đơn đặt của bạn
- **Tìm kiếm**: Tìm kiếm theo tên, dịch vụ, game, và vị trí
- **Responsive**: Hoạt động tốt trên mọi thiết bị

## 🚀 Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Tìm người kết nối phù hợp với nhu cầu của bạn
3. Nhấn "Đặt lịch" để đặt lịch
4. Điền thông tin của bạn và xác nhận

## 📁 Cấu trúc dự án

```
booking-site/
├── index.html              # Trang chính
├── styles.css              # Styles cho trang web
├── script.js               # Logic chính
├── owner-data.js           # Dữ liệu Owner
├── co-owner-data.js        # Dữ liệu Co-owner
├── admin-data.js           # Dữ liệu Admin
├── supporter-data.js       # Dữ liệu Supporter
├── vip-player-data.js      # Dữ liệu VIP Player
├── lorette-data.js         # Dữ liệu Lorette
├── calder-data.js          # Dữ liệu Calder
├── images/                 # Hình ảnh
└── README.md               # File này
```

## 🎨 Tùy chỉnh

### Thêm người kết nối mới

Mỗi file dữ liệu có cấu trúc tương tự. Ví dụ `vip-player-data.js`:

```javascript
const VIP_PLAYER_ENTRIES = [
  [playerNum, name, location, bio, games, price],
  // Thêm người mới ở đây
];
```

### Thay đổi màu sắc

Màu sắc được định nghĩa trong `styles.css` ở phần `:root`.

## 📞 Liên hệ

- Discord: https://discord.gg/cartierbooking

## 📜 License

© 2026 Cartier Booking. Tất cả quyền được bảo lưu.
