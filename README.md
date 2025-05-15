## 🧾 Commit cuối cùng

Dự án sử dụng kiến trúc phần mềm **Layered Architecture** (Kiến trúc phân lớp).
project/
├── models/
│   ├── Device.js
│   ├── Network.js
│   ├── User.js
│   ├── Alert.js
│   ├── Performance.js
│   ├── Configuration.js
│   ├── SecurityLog.js
│   └── Report.js
├── controllers/
│   ├── deviceController.js
│   ├── networkController.js
│   ├── monitoringController.js
│   ├── securityController.js
│   ├── reportController.js
│   └── userController.js
├── routes/
│   ├── device.js
│   ├── network.js
│   ├── monitoring.js
│   ├── security.js
│   ├── report.js
│   └── user.js
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── dashboard.js
│   │   ├── monitoring.js
│   │   ├── devices.js
│   │   ├── network.js
│   │   └── reports.js
│   └── index.html
├── config/
│   └── db.js
├── middleware/
│   ├── auth.js
│   └── logger.js
└── server.js

Lệnh Git đã sử dụng để commit cuối cùng theo yêu cầu:

```bash
git add .
git commit -m "Layered Architecture"
git push origin main


1. Tầng Trình bày (Presentation Layer)
Mục đích: Giao tiếp với người dùng, hiển thị dữ liệu và nhận đầu vào.

Thành phần:

index.html: Giao diện người dùng chính.

style.css: Định dạng và bố cục giao diện.

script.js: Xử lý sự kiện và tương tác người dùng.

Chức năng:

Hiển thị thông tin thiết bị mạng, hiệu suất hệ thống.

Gửi yêu cầu đến máy chủ để lấy dữ liệu.

2. Tầng Xử lý (Business Logic Layer)
Mục đích: Xử lý logic nghiệp vụ, quản lý luồng dữ liệu giữa tầng trình bày và tầng dữ liệu.

Thành phần:

server.js: Thiết lập máy chủ Express, định nghĩa các tuyến API.

routes/: (Nếu có) Quản lý các tuyến đường và logic liên quan.

Chức năng:

Xử lý các yêu cầu từ phía client.

Thực hiện xác thực người dùng, xử lý dữ liệu trước khi lưu trữ hoặc trả về.

3. Tầng Dữ liệu (Data Access Layer)
Mục đích: Tương tác với cơ sở dữ liệu, thực hiện các thao tác CRUD.

Thành phần:

models/: Định nghĩa các mô hình dữ liệu như User, Device, Performance, Alert.

seed.js: Khởi tạo dữ liệu mẫu cho cơ sở dữ liệu.

Chức năng:

Định nghĩa cấu trúc dữ liệu và mối quan hệ giữa các thực thể.

Thực hiện các truy vấn và cập nhật dữ liệu trong MongoDB.

🔄 Luồng Dữ liệu
Người dùng tương tác với giao diện (index.html), ví dụ: chọn tầng để xem thông tin thiết bị.

script.js gửi yêu cầu HTTP đến máy chủ (server.js) thông qua các tuyến API.

server.js xử lý yêu cầu, tương tác với các mô hình trong models/ để lấy hoặc cập nhật dữ liệu.

Dữ liệu được trả về cho script.js, sau đó cập nhật giao diện người dùng.

✅ Lợi ích của Kiến trúc Phân lớp
Tách biệt trách nhiệm: Mỗi tầng có một vai trò riêng, giúp mã nguồn rõ ràng và dễ hiểu.

Dễ bảo trì và mở rộng: Thay đổi ở một tầng ít ảnh hưởng đến các tầng khác.

Tái sử dụng: Các thành phần có thể được tái sử dụng trong các phần khác của ứng dụng hoặc trong các dự án khác.

