// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("aside ul li a, header nav a");
    const content = document.querySelector(".content");
  
    const pages = {
      "Trang chủ": `
        <h2>Trang chủ</h2>
        <div class="card">
          <p>Chào mừng bạn đến với hệ thống quản lý mạng <strong>CHATL</strong>. Đây là trung tâm giám sát và điều khiển mạng cho tòa nhà cao tầng, cung cấp công cụ hiện đại giúp theo dõi hiệu suất mạng và xử lý sự cố nhanh chóng.</p>
        </div>
      `,
      "Giới thiệu": `
        <h2>Giới thiệu hệ thống CHATL</h2>
        <div class="card">
          <p>CHATL là hệ thống giám sát mạng thông minh dành cho các tòa nhà cao tầng như trung tâm dữ liệu, tòa nhà văn phòng. Hệ thống hỗ trợ thu thập dữ liệu SNMP, giám sát CPU, RAM, cảnh báo lỗi và giúp quản lý hiệu quả hơn hạ tầng mạng phức tạp.</p>
          <p>Với CHATL, đội ngũ kỹ thuật có thể chủ động phát hiện lỗi, tối ưu lưu lượng mạng và bảo vệ an toàn hệ thống một cách toàn diện.</p>
        </div>
      `,
      "Sản phẩm": `
        <h2>Sản phẩm đã triển khai</h2>
        <div class="products">
          ${["Switch PoE 24 port", "Router bảo mật cao cấp", "Firewall NGFW", "WiFi Controller", "SNMP Monitoring", "Cảnh báo nhiệt độ", "Giám sát log hệ thống", "Core Switch", "Access Point tầng cao", "Syslog Server", "Load Balancer", "NMS Software", "UPS Monitoring", "Cloud Backup Gateway", "VPN Concentrator", "SD-WAN Router", "RADIUS Server", "VoIP Gateway", "Giải pháp phân tích lưu lượng", "Cảnh báo thông minh AI"].map(item => `<div class="product-card"><img src="https://via.placeholder.com/200x150"><p>${item}</p></div>`).join('')}
        </div>
      `,
      "Liên hệ": `
        <h2>Liên hệ</h2>
        <div class="card">
          <p>📞 Số điện thoại: <strong>0961 186 421</strong></p>
          <p>📧 Email: <strong>ttoan2286@gmail.com</strong></p>
          <p>📍 Địa chỉ: 96A Đ. Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội</p>
        </div>
      `,
      "Thiết bị mạng": `
        <h2>Thiết bị mạng</h2>
        <div class="card">
          <p>Hiển thị danh sách thiết bị mạng đã được kết nối và tình trạng hoạt động hiện tại.</p>
          <ul>
            <li>Switch PoE tầng 1 - Đang hoạt động</li>
            <li>Router tầng 5 - Mất kết nối</li>
            <li>Firewall tầng 12 - Bình thường</li>
          </ul>
        </div>
      `,
      "Switch PoE": `
        <h2>Switch PoE</h2>
        <div class="card">
          <p>Thông tin chi tiết về các thiết bị Switch hỗ trợ cấp nguồn qua Ethernet.</p>
          <p>Hiện tại có 30 switch PoE đang được giám sát trong toàn bộ tòa nhà 30 tầng.</p>
        </div>
      `,
      "Giám sát hiệu suất": `
        <h2>Giám sát hiệu suất</h2>
        <div class="card">
          <p>Biểu đồ thể hiện tải CPU và RAM của các thiết bị trong mạng.</p>
          <canvas id="performanceChart" width="600" height="300"></canvas>
          <script>
            setTimeout(() => {
              const ctx = document.getElementById("performanceChart").getContext("2d");
              new Chart(ctx, {
                type: "line",
                data: {
                  labels: ["0s", "5s", "10s", "15s", "20s"],
                  datasets: [
                    {
                      label: "CPU (%)",
                      data: [20, 35, 30, 50, 45],
                      borderColor: "#0074D9",
                      fill: false
                    },
                    {
                      label: "RAM (%)",
                      data: [40, 45, 50, 55, 60],
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
                      text: 'Hiệu suất thiết bị mạng'
                    }
                  }
                }
              });
            }, 100);
          </script>
        </div>
      `,
      "Báo cáo lỗi": `
        <h2>Báo cáo lỗi</h2>
        <div class="card">
          <p>Danh sách các sự cố gần đây được phát hiện bởi hệ thống.</p>
          <ul>
            <li>[10:23] Router tầng 25 - Không phản hồi</li>
            <li>[09:47] Switch PoE tầng 7 - Quá nhiệt</li>
            <li>[08:31] Access Point tầng 30 - Mất kết nối</li>
          </ul>
        </div>
      `,
      "Tòa nhà - 30 tầng": `
        <h2>Sơ đồ quản lý theo tầng</h2>
        <div class="card">
          <div class="floor-grid">
            ${[...Array(30).keys()].map(i => {
              const floor = 30 - i;
              return `<button class="floor-btn" onclick="alert('Hiển thị thiết bị tầng ${floor}')">Tầng ${floor}</button>`;
            }).join('')}
          </div>
        </div>
      `
    };
  
    menuLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const selected = this.textContent.trim();
        if (pages[selected]) {
          content.innerHTML = pages[selected];
        } else {
          content.innerHTML = "<div class='card'><p>Nội dung đang được cập nhật...</p></div>";
        }
      });
    });
  
    // Cập nhật vị trí footer
    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.position = "absolute";
      footer.style.bottom = "0";
      footer.style.width = "100%";
      footer.style.textAlign = "center";
    }
  });
  