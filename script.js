document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("aside ul li a");
  const content = document.querySelector(".content");

  const pages = {
    "Trang chủ": `
      <h2>Trang chủ</h2>
      <div class="card">
        <p><strong>CHATL</strong> là hệ thống quản lý và giám sát hạ tầng mạng hiện đại được phát triển cho các tòa nhà cao tầng. Hệ thống giúp kỹ thuật viên theo dõi trạng thái thiết bị mạng, phân tích hiệu suất và xử lý sự cố nhanh chóng, chính xác.</p>
        <p>Với giao diện trực quan, biểu đồ phân tích và báo cáo chi tiết theo từng tầng, CHATL là giải pháp lý tưởng cho trung tâm dữ liệu, văn phòng và hệ thống mạng phức tạp.</p>
      </div>
    `,
    "Giới thiệu": `
      <h2>Giới thiệu hệ thống CHATL</h2>
      <div class="card">
        <p>CHATL được xây dựng nhằm tối ưu hóa quy trình vận hành mạng trong các tòa nhà cao tầng. Hệ thống hỗ trợ các tính năng nổi bật:</p>
        <ul>
          <li>✅ Giám sát hiệu suất thiết bị theo thời gian thực</li>
          <li>✅ Cảnh báo lỗi và bất thường</li>
          <li>✅ Quản lý thiết bị mạng theo từng tầng</li>
          <li>✅ Báo cáo chi tiết cho đội ngũ kỹ thuật</li>
        </ul>
        <p>Hệ thống kết hợp giữa thu thập dữ liệu SNMP, xử lý backend mạnh mẽ và giao diện web trực quan giúp vận hành mượt mà và hiệu quả.</p>
      </div>
    `,
    "Quản lý mạng": `
      <h2>Quản lý tòa nhà 30 tầng</h2>
      <div class="card">
        <p>Chọn tầng để xem thông tin thiết bị mạng, hiệu suất và lỗi:</p>
        <div class="floor-list">
          ${[...Array(30).keys()].map(i => {
            const floor = 30 - i;
            return `<button class="floor-btn" onclick="loadFloorData(${floor})">Tầng ${floor}</button>`;
          }).join("")}
        </div>
      </div>
    `,
    "Giám sát hiệu suất": `
      <h2>Giám sát hiệu suất hệ thống</h2>
      <div class="card">
        <h3>Thông tin giám sát toàn hệ thống</h3>
        <ul>
          <li>Băng thông sử dụng: 75%</li>
          <li>Thời gian hoạt động: 99.8%</li>
          <li>Cảnh báo: 2</li>
          <li>Sự cố đang xử lý: 1</li>
        </ul>
      </div>
      <div class="card">
        <h3>Biểu đồ hiệu suất</h3>
        <canvas id="performanceChart" width="600" height="300"></canvas>
      </div>
      <div class="card">
        <h3>Thống kê theo tầng</h3>
        <table class="performance-table">
          <thead>
            <tr>
              <th>Tầng</th>
              <th>CPU trung bình</th>
              <th>RAM sử dụng</th>
              <th>Băng thông</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            ${[...Array(30).keys()].map(i => {
              const floor = 30 - i;
              return `
                <tr>
                  <td>Tầng ${floor}</td>
                  <td>${(Math.random() * 30 + 20).toFixed(1)}%</td>
                  <td>${(Math.random() * 30 + 50).toFixed(1)}%</td>
                  <td>${(Math.random() * 40 + 30).toFixed(1)}%</td>
                  <td>${Math.random() > 0.2 ? '✅ Ổn định' : '⚠ Cảnh báo'}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `,
    "Thiết bị mạng": `
      <h2>Quản lý thiết bị mạng</h2>
      <div class="card">
        <h3>Danh sách thiết bị toàn hệ thống</h3>
        <table class="devices-table">
          <thead>
            <tr>
              <th>Tên thiết bị</th>
              <th>Địa chỉ IP</th>
              <th>Vị trí</th>
              <th>Trạng thái</th>
              <th>Thời gian hoạt động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Router chính</td>
              <td>192.168.1.1</td>
              <td>Phòng server</td>
              <td>Online</td>
              <td>15 ngày</td>
            </tr>
            <tr>
              <td>Switch tầng 1</td>
              <td>192.168.1.2</td>
              <td>Tầng 1</td>
              <td>Online</td>
              <td>12 ngày</td>
            </tr>
            <tr>
              <td>Access Point tầng 1</td>
              <td>192.168.1.3</td>
              <td>Tầng 1</td>
              <td>Offline</td>
              <td>0 giờ</td>
            </tr>
            ${[...Array(27).keys()].map(i => {
              const floor = i + 2;
              return `
                <tr>
                  <td>Switch tầng ${floor}</td>
                  <td>192.168.${floor}.1</td>
                  <td>Tầng ${floor}</td>
                  <td>Online</td>
                  <td>${Math.floor(Math.random() * 10) + 1} ngày</td>
                </tr>
                <tr>
                  <td>Access Point tầng ${floor}</td>
                  <td>192.168.${floor}.2</td>
                  <td>Tầng ${floor}</td>
                  <td>Online</td>
                  <td>${Math.floor(Math.random() * 10) + 1} ngày</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `,
    "Báo cáo lỗi": `
      <h2>Quản lý sự cố hệ thống</h2>
      <div class="card">
        <h3>Danh sách sự cố gần đây</h3>
        <div class="report-item">
          <h4>Mất kết nối Internet</h4>
          <p><strong>Thời gian:</strong> 10/4/2023 14:30</p>
          <p><strong>Trạng thái:</strong> Đang xử lý</p>
          <p><strong>Mô tả:</strong> Mất kết nối toàn bộ hệ thống trong 15 phút</p>
          <p><strong>Nhân viên phụ trách:</strong> Nguyễn Văn A</p>
        </div>
        <div class="report-item">
          <h4>Chậm mạng</h4>
          <p><strong>Thời gian:</strong> 8/4/2023 09:15</p>
          <p><strong>Trạng thái:</strong> Đã giải quyết</p>
          <p><strong>Mô tả:</strong> Tốc độ mạng chậm bất thường</p>
          <p><strong>Giải pháp:</strong> Thay thế cáp quang tầng 5</p>
        </div>
        <div class="report-item">
          <h4>Quá tải server</h4>
          <p><strong>Thời gian:</strong> 5/4/2023 11:45</p>
          <p><strong>Trạng thái:</strong> Đã giải quyết</p>
          <p><strong>Mô tả:</strong> CPU server đạt 100% trong 30 phút</p>
          <p><strong>Giải pháp:</strong> Thêm RAM và tối ưu dịch vụ</p>
        </div>
        <button class="btn-report">Báo cáo sự cố mới</button>
      </div>
    `,
    "Liên hệ": `
      <h2>Thông tin liên hệ</h2>
      <div class="card">
        <p>📞 Số điện thoại: <strong>0961 186 421</strong></p>
        <p>📧 Email: <strong>ttoan2286@gmail.com</strong></p>
        <p>📍 Địa chỉ: 96A Đ. Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội</p>
      </div>
      <div class="card">
        <h3>Gửi yêu cầu hỗ trợ</h3>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Họ và tên:</label>
            <input type="text" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="message">Nội dung:</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn-submit">Gửi yêu cầu</button>
        </form>
      </div>
    `
  };

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selected = this.textContent.trim();
      if (pages[selected]) {
        content.innerHTML = pages[selected];
        
        // Khởi tạo biểu đồ nếu có
        if (selected === "Giám sát hiệu suất") {
          setTimeout(() => {
            const ctx = document.getElementById("performanceChart").getContext("2d");
            new Chart(ctx, {
              type: "line",
              data: {
                labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
                datasets: [
                  {
                    label: "CPU trung bình (%)",
                    data: [25, 30, 45, 50, 40, 35],
                    borderColor: "#0074D9",
                    fill: false
                  },
                  {
                    label: "RAM trung bình (%)",
                    data: [50, 55, 60, 65, 58, 52],
                    borderColor: "#FF4136",
                    fill: false
                  },
                  {
                    label: "Băng thông (%)",
                    data: [30, 40, 60, 70, 50, 45],
                    borderColor: "#2ECC40",
                    fill: false
                  }
                ]
              },
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top'
                  },
                  title: {
                    display: true,
                    text: 'Hiệu suất hệ thống 24 giờ qua'
                  }
                }
              }
            });
          }, 100);
        }
      } else {
        content.innerHTML = "<div class='card'><p>Nội dung đang được cập nhật...</p></div>";
      }
    });
  });

  // Load trang chủ mặc định
  content.innerHTML = pages["Trang chủ"];

  window.loadFloorData = function (floor) {
    content.innerHTML = `
      <h2>Thông tin tầng ${floor}</h2>
      <div class="card">
        <h3>Thiết bị mạng</h3>
        <ul>
          <li>Switch tầng ${floor} - Hoạt động ổn định</li>
          <li>Router tầng ${floor} - Bình thường</li>
          <li>Access Point tầng ${floor} - Đang kết nối</li>
        </ul>
      </div>
      <div class="card">
        <h3>Hiệu suất thiết bị</h3>
        <canvas id="performanceChart" width="600" height="300"></canvas>
      </div>
      <div class="card">
        <h3>Báo cáo lỗi</h3>
        <ul>
          <li>[10:10] Switch tầng ${floor} - Ping delay cao</li>
          <li>[09:45] Router tầng ${floor} - Tăng tải CPU</li>
        </ul>
      </div>
    `;

    setTimeout(() => {
      const ctx = document.getElementById("performanceChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["0s", "5s", "10s", "15s", "20s"],
          datasets: [
            {
              label: "CPU (%)",
              data: [Math.random() * 30 + 20, 40, 45, 35, 50],
              borderColor: "#0074D9",
              fill: false
            },
            {
              label: "RAM (%)",
              data: [50, 60, 55, 58, 62],
              borderColor: "#FF4136",
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Hiệu suất tầng ' + floor
            }
          }
        }
      });
    }, 100);
  };
});
