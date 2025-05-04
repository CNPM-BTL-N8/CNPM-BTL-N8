document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("aside ul li a");
  const content = document.querySelector(".content");

  const pages = {
    "Trang chủ": `
      <h2>Chào mừng đến với Hệ thống Quản lý Mạng CHATL</h2>
      <div class="card">
        <p>Hệ thống Quản lý Mạng CHATL là giải pháp giám sát và quản lý hạ tầng mạng tiên tiến, được phát triển nhằm mang đến cho người quản trị mạng một công cụ toàn diện, trực quan và hiệu quả. Với giao diện thân thiện, công nghệ hiện đại và khả năng mở rộng mạnh mẽ, CHATL không chỉ giúp bạn theo dõi trạng thái thiết bị mạng theo thời gian thực mà còn cung cấp các công cụ phân tích hiệu suất, phát hiện sự cố và cảnh báo sớm để đảm bảo hệ thống luôn vận hành ổn định, an toàn.</p>
        <h3>Tại sao chọn CHATL?</h3>
        <ul>
          <li class="animated-list-item"><b>Giám sát theo thời gian thực:</b> Hiển thị trực quan thông tin hoạt động của thiết bị, hiệu suất CPU, RAM, băng thông và nhiều chỉ số quan trọng khác.</li>
          <li class="animated-list-item"><b>Phát hiện và cảnh báo sự cố nhanh chóng:</b> Hệ thống sẽ tự động cảnh báo khi có sự cố xảy ra, giúp người quản trị kịp thời xử lý, giảm thiểu rủi ro gián đoạn dịch vụ.</li>
          <li class="animated-list-item"><b>Quản lý theo tầng/lớp logic:</b> Tối ưu cho tòa nhà nhiều tầng hoặc hệ thống mạng phức tạp, bạn có thể dễ dàng chọn tầng và theo dõi thiết bị tương ứng.</li>
          <li class="animated-list-item"><b>Lưu trữ log và thống kê kệ lịch sử:</b> Hỗ trợ phân tích dài hạn và báo cáo hiệu suất hệ thống, từ đó đưa ra các quyết định nâng cấp và tối ưu hạ tầng.</li>
          <li class="animated-list-item"><b>Tương thích linh hoạt:</b> Hệ thống hỗ trợ chuẩn giao tiếp SNMP và REST API, dễ dàng tích hợp với các thiết bị mạng phổ biến và phần mềm giám sát khác.</li>
          <li class="animated-list-item"><b>Bảo mật cao:</b> Mọi kết nối và trao đổi dữ liệu đều được mã hóa và bảo vệ nghiêm ngặt, đảm bảo an toàn tuyệt đối cho hệ thống mạng của bạn.</li>
        </ul>
        <h3>CHATL dành cho ai?</h3>
        <ul>
          <li class="animated-list-item">Quản trị viên mạng trong các tòa nhà văn phòng, khách sạn, khu công nghiệp, trường học...</li>
          <li class="animated-list-item">Các tổ chức muốn có cái nhìn toàn diện và chủ động về hệ thống hạ tầng CNTT của mình.</li>
          <li class="animated-list-item">Những đội ngũ kỹ thuật muốn triển khai công cụ giám sát nhanh chóng, hiệu quả và dễ tùy chỉnh.</li>
        </ul>
        <p>Hãy cùng CHATL xây dựng một hệ thống mạng ổn định - an toàn - hiệu quả.<br>Bắt đầu hành trình quản lý chuyên nghiệp và thông minh ngay hôm nay!</p>
      </div>
    `,
    "Giới thiệu": `
      <h2>Hệ thống Quản lý Mạng CHATL – Giải pháp toàn diện cho giám sát hạ tầng số</h2>
      <div class="card">
        <p>Trong thời đại số hóa ngày càng mạnh mẽ, việc đảm bảo sự ổn định, an toàn và hiệu quả của hạ tầng mạng trở thành một yêu cầu tất yếu đối với mọi tổ chức, doanh nghiệp và cơ sở công nghệ. Hiểu rõ điều đó, chúng tôi đã phát triển CHATL – một nền tảng quản lý mạng hiện đại, thông minh và mạnh mẽ, giúp bạn kiểm soát toàn bộ hệ thống mạng trong tầm tay.</p>
        <p>CHATL không đơn thuần là một công cụ giám sát, mà là một trợ lý kỹ thuật số toàn năng, mang lại cho bạn một cái nhìn toàn cảnh về trạng thái vận hành của thiết bị mạng – từ hiệu suất phần cứng như CPU, RAM đến trạng thái hoạt động, cảnh báo lỗi, và phân tích dữ liệu lịch sử. Dù bạn đang vận hành một tòa nhà văn phòng 30 tầng, một hệ thống trường học hay một mạng lưới doanh nghiệp phức tạp, CHATL đều có thể tùy biến linh hoạt để đáp ứng mọi nhu cầu quản lý.</p>
        <h3>Những tính năng nổi bật của CHATL:</h3>
        <ul>
          <li class="animated-list-item">🔍 <b>Giám sát theo thời gian thực</b><br>Toàn bộ thiết bị mạng được hiển thị sinh động và trực quan, giúp bạn nắm bắt nhanh chóng tình trạng hoạt động hiện tại. Biểu đồ thống kê hiệu suất được cập nhật liên tục, hỗ trợ đưa ra các quyết định kịp thời và chính xác.</li>
          <li class="animated-list-item">📊 <b>Phân tích hiệu suất & thống kê dữ liệu lịch sử</b><br>CHATL không chỉ dừng lại ở hiện tại. Hệ thống hỗ trợ lưu trữ và phân tích dữ liệu dài hạn, giúp bạn đánh giá xu hướng sử dụng tài nguyên mạng, từ đó tối ưu hóa hoạt động và dự đoán các sự cố tiềm ẩn.</li>
          <li class="animated-list-item">🚨 <b>Cảnh báo và xử lý sự cố thông minh</b><br>Với hệ thống cảnh báo linh hoạt theo ngưỡng (threshold), CHATL sẽ tự động thông báo khi phát hiện dấu hiệu bất thường – từ việc CPU vượt mức, RAM bị tràn, cho đến thiết bị mất kết nối. Điều này cho phép bạn phản ứng nhanh, giảm thiểu rủi ro và thời gian gián đoạn.</li>
          <li class="animated-list-item">🏢 <b>Quản lý phân tầng – phù hợp với tòa nhà lớn hoặc hệ thống nhiều khu vực</b><br>Mỗi tầng, mỗi khu vực có thể được quản lý riêng biệt nhưng vẫn đồng bộ trong hệ thống chung. Việc này giúp cho các tổ chức có cấu trúc phức tạp dễ dàng kiểm soát và phân quyền vận hành.</li>
          <li class="animated-list-item">🔗 <b>Tích hợp linh hoạt và bảo mật mạnh mẽ</b><br>Hệ thống hỗ trợ SNMP, REST API và nhiều chuẩn công nghiệp khác, dễ dàng tích hợp với các phần mềm quản lý hiện có. Bên cạnh đó, CHATL được thiết kế với các cơ chế bảo mật chặt chẽ, đảm bảo an toàn tuyệt đối cho dữ liệu mạng và người dùng.</li>
        </ul>
        <h3>CHATL – Người bạn đồng hành tin cậy của quản trị viên mạng</h3>
        <p>Với phương châm "Chủ động – Chính xác – Chuyên nghiệp", CHATL được phát triển bởi đội ngũ kỹ thuật trẻ, giàu tâm huyết, mong muốn mang đến một sản phẩm không chỉ vận hành tốt mà còn dễ sử dụng, dễ triển khai và dễ mở rộng. Mọi chi tiết giao diện đều được thiết kế thân thiện, tối ưu trải nghiệm người dùng. Mọi tính năng đều hướng đến sự tự động hóa, thông minh và tiết kiệm thời gian.</p>
        <h3>Bắt đầu hành trình số hóa và kiểm soát mạng toàn diện cùng CHATL</h3>
        <p>Chúng tôi tin rằng, mỗi tổ chức đều xứng đáng có một công cụ giám sát mạng đẳng cấp – và đó chính là lý do CHATL ra đời. Hãy để CHATL trở thành "trung tâm điều phối thông minh" cho hạ tầng mạng của bạn.<br>Dù bạn là kỹ sư IT, quản trị viên mạng hay lãnh đạo doanh nghiệp, CHATL luôn sẵn sàng đồng hành cùng bạn – trên hành trình xây dựng hệ thống mạng ổn định – an toàn – hiện đại.</p>
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
        <div class="time-period-selector">
          <button class="time-btn active" data-period="day">24 giờ</button>
          <button class="time-btn" data-period="week">7 ngày</button>
          <button class="time-btn" data-period="month">30 ngày</button>
        </div>
        <ul>
          <li>Băng thông sử dụng: <span class="bandwidth-value">75%</span></li>
          <li>Thời gian hoạt động: <span class="uptime-value">99.8%</span></li>
          <li>Cảnh báo: <span class="alerts-value">2</span></li>
          <li>Sự cố đang xử lý: <span class="issues-value">1</span></li>
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
                  <td class="cpu-value">${(Math.random() * 30 + 20).toFixed(1)}%</td>
                  <td class="ram-value">${(Math.random() * 30 + 50).toFixed(1)}%</td>
                  <td class="bandwidth-value">${(Math.random() * 40 + 30).toFixed(1)}%</td>
                  <td class="status-value">${Math.random() > 0.2 ? '✅ Ổn định' : '⚠ Cảnh báo'}</td>
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
        <div class="time-period-selector">
          <button class="time-btn active" data-period="day">24 giờ</button>
          <button class="time-btn" data-period="week">7 ngày</button>
          <button class="time-btn" data-period="month">30 ngày</button>
        </div>
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
              <td class="status-value">Online</td>
              <td class="uptime-value">15 ngày</td>
            </tr>
            <tr>
              <td>Switch tầng 1</td>
              <td>192.168.1.2</td>
              <td>Tầng 1</td>
              <td class="status-value">Online</td>
              <td class="uptime-value">12 ngày</td>
            </tr>
            <tr>
              <td>Access Point tầng 1</td>
              <td>192.168.1.3</td>
              <td>Tầng 1</td>
              <td class="status-value">Offline</td>
              <td class="uptime-value">0 giờ</td>
            </tr>
            ${[...Array(27).keys()].map(i => {
              const floor = i + 2;
              return `
                <tr>
                  <td>Switch tầng ${floor}</td>
                  <td>192.168.${floor}.1</td>
                  <td>Tầng ${floor}</td>
                  <td class="status-value">Online</td>
                  <td class="uptime-value">${Math.floor(Math.random() * 10) + 1} ngày</td>
                </tr>
                <tr>
                  <td>Access Point tầng ${floor}</td>
                  <td>192.168.${floor}.2</td>
                  <td>Tầng ${floor}</td>
                  <td class="status-value">Online</td>
                  <td class="uptime-value">${Math.floor(Math.random() * 10) + 1} ngày</td>
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
    `,
    "Đăng ký": `
      <h2>Đăng ký tài khoản</h2>
      <form id="registerForm" class="card" style="max-width:400px">
        <div class="form-group">
          <label for="reg-username">Tên đăng nhập:</label>
          <input type="text" id="reg-username" required>
        </div>
        <div class="form-group">
          <label for="reg-password">Mật khẩu:</label>
          <input type="password" id="reg-password" required>
        </div>
        <button type="submit" class="btn-submit">Đăng ký</button>
        <div id="registerMsg"></div>
      </form>
    `,
    "Đăng nhập": `
      <h2>Đăng nhập</h2>
      <form id="loginForm" class="card" style="max-width:400px">
        <div class="form-group">
          <label for="login-username">Tên đăng nhập:</label>
          <input type="text" id="login-username" required>
        </div>
        <div class="form-group">
          <label for="login-password">Mật khẩu:</label>
          <input type="password" id="login-password" required>
        </div>
        <button type="submit" class="btn-submit">Đăng nhập</button>
        <div id="loginMsg"></div>
      </form>
    `
  };

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Xóa active ở tất cả menu
      menuLinks.forEach(l => l.classList.remove("active"));
      // Thêm active cho menu được bấm
      this.classList.add("active");
      const selected = this.textContent.trim();
      if (pages[selected]) {
        if (selected === "Trang chủ" || selected === "Giới thiệu") {
          content.innerHTML = `<div class="animated-content">${pages[selected]}</div>`;
        } else {
          content.innerHTML = pages[selected];
        }
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
  menuLinks[0].classList.add("active");
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

  // Hàm lấy dữ liệu từ API
  async function fetchData(endpoint) {
    try {
      const response = await fetch(`http://localhost:3000/api/${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  // Hàm cập nhật dữ liệu thiết bị
  async function updateDevicesData() {
    const devices = await fetchData('devices');
    const devicesTable = document.querySelector('.devices-table tbody');
    if (devices && devices.length > 0) {
      devicesTable.innerHTML = devices.map(device => `
        <tr>
          <td>${device.name}</td>
          <td>${device.ip || device.ipAddress || ''}</td>
          <td>${device.location}</td>
          <td class="status-value">${device.status}</td>
          <td class="uptime-value">${device.uptime || ''}</td>
        </tr>
      `).join('');
    } else {
      devicesTable.innerHTML = `<tr><td colspan="5" style="text-align:center">Dữ liệu đang được cập nhật...</td></tr>`;
    }
  }

  // Hàm cập nhật dữ liệu hiệu suất
  async function updatePerformanceData(floor, period) {
    const performance = await fetchData(`performance/${floor}?period=${period}`);
    const chartContainer = document.getElementById('performanceChart');
    if (performance && performance.length > 0 && chartContainer) {
      const ctx = chartContainer.getContext('2d');
      const labels = performance.map(p => new Date(p.timestamp).toLocaleTimeString());
      const cpuData = performance.map(p => p.cpu || p.cpuUsage);
      const ramData = performance.map(p => p.ram || p.memoryUsage);
      const bandwidthData = performance.map(p => p.bandwidth || p.networkUsage);

      if (window.performanceChart) {
        window.performanceChart.destroy();
      }

      window.performanceChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "CPU trung bình (%)",
              data: cpuData,
              borderColor: "#0074D9",
              fill: false
            },
            {
              label: "RAM trung bình (%)",
              data: ramData,
              borderColor: "#FF4136",
              fill: false
            },
            {
              label: "Băng thông (%)",
              data: bandwidthData,
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
              text: `Hiệu suất tầng ${floor} ${period === 'day' ? '24 giờ qua' : period === 'week' ? '7 ngày qua' : '30 ngày qua'}`
            }
          }
        }
      });
    } else if (chartContainer) {
      chartContainer.parentElement.innerHTML = '<div style="text-align:center;padding:32px 0;">Dữ liệu đang được cập nhật...</div>';
    }
  }

  // Hàm cập nhật cảnh báo
  async function updateAlerts() {
    const alerts = await fetchData('alerts');
    const alertsContainer = document.querySelector('.alerts-container');
    if (alertsContainer) {
      if (alerts && alerts.length > 0) {
        alertsContainer.innerHTML = alerts.map(alert => `
          <div class="alert-item">
            <h4>${alert.type}</h4>
            <p><strong>Thời gian:</strong> ${new Date(alert.timestamp).toLocaleString()}</p>
            <p><strong>Mức độ:</strong> ${alert.severity}</p>
            <p><strong>Mô tả:</strong> ${alert.message}</p>
          </div>
        `).join('');
      } else {
        alertsContainer.innerHTML = '<div style="text-align:center;padding:32px 0;">Dữ liệu đang được cập nhật...</div>';
      }
    }
  }

  // Cập nhật hàm updateTimePeriod
  async function updateTimePeriod(period) {
    // Cập nhật dữ liệu thiết bị
    await updateDevicesData();
    
    // Cập nhật dữ liệu hiệu suất cho tất cả các tầng
    for (let floor = 1; floor <= 30; floor++) {
      await updatePerformanceData(floor, period);
    }
    
    // Cập nhật cảnh báo
    await updateAlerts();
  }

  // Thêm sự kiện click cho các nút thời gian
  document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('time-btn')) {
      document.querySelectorAll('.time-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      await updateTimePeriod(e.target.dataset.period);
    }
  });

  // Khởi tạo dữ liệu khi trang được tải
  document.addEventListener('DOMContentLoaded', async function() {
    await updateTimePeriod('day');
  });

  // Xử lý submit form đăng ký/đăng nhập
  document.addEventListener('submit', async function(e) {
    if (e.target && e.target.id === 'registerForm') {
      e.preventDefault();
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;
      const msg = document.getElementById('registerMsg');
      msg.textContent = 'Đang xử lý...';
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      msg.textContent = data.message || 'Có lỗi xảy ra!';
      msg.style.color = res.ok ? 'green' : 'red';
    }
    if (e.target && e.target.id === 'loginForm') {
      e.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      const msg = document.getElementById('loginMsg');
      msg.textContent = 'Đang xử lý...';
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      msg.textContent = data.message || 'Có lỗi xảy ra!';
      msg.style.color = res.ok ? 'green' : 'red';
    }
  });

  // Thêm modal đăng nhập/đăng ký và logic kiểm tra đăng nhập
  function showAuthModal() {
    let modal = document.getElementById('auth-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'auth-modal';
      modal.innerHTML = `
        <div class="auth-modal-content">
          <div class="auth-logo">CHATL</div>
          <div id="auth-tabs">
            <button id="show-login" class="auth-tab active">Đăng nhập</button>
            <button id="show-register" class="auth-tab">Đăng ký</button>
          </div>
          <div id="auth-form-container"></div>
        </div>
        <div class="auth-modal-backdrop"></div>
      `;
      document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
    document.querySelector('.container').style.display = 'none';
    renderLoginForm();
    document.getElementById('show-login').onclick = () => {
      setActiveTab('login');
      renderLoginForm();
    };
    document.getElementById('show-register').onclick = () => {
      setActiveTab('register');
      renderRegisterForm();
    };
  }
  function hideAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
  }
  function setActiveTab(tab) {
    document.getElementById('show-login').classList.toggle('active', tab === 'login');
    document.getElementById('show-register').classList.toggle('active', tab === 'register');
  }
  function renderLoginForm() {
    document.getElementById('auth-form-container').innerHTML = `
      <form id="loginFormModal" class="card" style="max-width:400px">
        <div class="form-group">
          <label for="login-emailOrPhone">Email hoặc Số điện thoại:</label>
          <input type="text" id="login-emailOrPhone" required>
        </div>
        <div class="form-group">
          <label for="login-password">Mật khẩu:</label>
          <input type="password" id="login-password" required>
        </div>
        <button type="submit" class="btn-submit">Đăng nhập</button>
        <div id="loginMsgModal"></div>
      </form>
    `;
  }
  function renderRegisterForm() {
    document.getElementById('auth-form-container').innerHTML = `
      <form id="registerFormModal" class="card" style="max-width:400px">
        <div class="form-group">
          <label for="reg-email">Email:</label>
          <input type="email" id="reg-email">
        </div>
        <div class="form-group">
          <label for="reg-phone">Số điện thoại:</label>
          <input type="text" id="reg-phone">
        </div>
        <div class="form-group">
          <label for="reg-password">Mật khẩu:</label>
          <input type="password" id="reg-password" required>
        </div>
        <button type="submit" class="btn-submit">Đăng ký</button>
        <div id="registerMsgModal"></div>
      </form>
    `;
  }
  function checkAuth() {
    if (!localStorage.getItem('chatl_user')) {
      showAuthModal();
    } else {
      hideAuthModal();
    }
  }
  // Xử lý submit modal
  document.addEventListener('submit', async function(e) {
    if (e.target && e.target.id === 'registerFormModal') {
      e.preventDefault();
      const email = document.getElementById('reg-email').value;
      const phone = document.getElementById('reg-phone').value;
      const password = document.getElementById('reg-password').value;
      const msg = document.getElementById('registerMsgModal');
      msg.textContent = 'Đang xử lý...';
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, password })
      });
      const data = await res.json();
      msg.textContent = data.message || 'Có lỗi xảy ra!';
      msg.style.color = res.ok ? 'green' : 'red';
      if (res.ok) setTimeout(() => { setActiveTab('login'); renderLoginForm(); }, 1000);
    }
    if (e.target && e.target.id === 'loginFormModal') {
      e.preventDefault();
      const emailOrPhone = document.getElementById('login-emailOrPhone').value;
      const password = document.getElementById('login-password').value;
      const msg = document.getElementById('loginMsgModal');
      msg.textContent = 'Đang xử lý...';
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrPhone, password })
      });
      const data = await res.json();
      msg.textContent = data.message || 'Có lỗi xảy ra!';
      msg.style.color = res.ok ? 'green' : 'red';
      if (res.ok) {
        localStorage.setItem('chatl_user', JSON.stringify({ emailOrPhone, isAdmin: data.isAdmin }));
        setTimeout(() => { hideAuthModal(); location.reload(); }, 1000);
      }
    }
  });
  // Đăng xuất
  function logout() {
    localStorage.removeItem('chatl_user');
    location.reload();
  }
  // Thêm nút đăng xuất vào menu nếu đã đăng nhập
  function addLogoutMenu() {
    const aside = document.querySelector('aside ul');
    if (!document.getElementById('logout-menu')) {
      const li = document.createElement('li');
      li.innerHTML = '<a href="#" id="logout-menu">Đăng xuất</a>';
      aside.appendChild(li);
      document.getElementById('logout-menu').onclick = function(e) { e.preventDefault(); logout(); };
    }
  }
  // Ẩn menu Đăng ký/Đăng nhập khi đã đăng nhập
  function hideAuthMenus() {
    document.querySelectorAll('aside ul li a').forEach(a => {
      if (a.textContent.trim() === 'Đăng ký' || a.textContent.trim() === 'Đăng nhập') {
        a.parentElement.style.display = 'none';
      }
    });
  }
  // Khi load trang
  window.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    if (localStorage.getItem('chatl_user')) {
      addLogoutMenu();
      hideAuthMenus();
    }
  });
});