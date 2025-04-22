document.addEventListener("DOMContentLoaded", function() {
  // Khởi tạo biến toàn cục
  const app = {
    charts: {},
    intervals: {},
    currentPage: 'home',
    uptimeStart: Date.now(),
    vlans: [
      { id: 10, name: "Quản trị", ports: ["Gi0/1", "Gi0/2", "Gi0/3"], description: "VLAN quản trị hệ thống" },
      { id: 20, name: "Nhân viên", ports: ["Gi0/4-24"], description: "VLAN cho nhân viên" },
      { id: 30, name: "Khách", ports: ["Gi0/25-48"], description: "VLAN cho khách" },
      { id: 40, name: "Server", ports: ["Gi1/1-4"], description: "VLAN máy chủ" },
      { id: 50, name: "VoIP", ports: ["Gi1/5-8"], description: "VLAN điện thoại IP" }
    ]
  };

  // Cache DOM elements
  const dom = {
    menuToggle: document.getElementById('menuToggle'),
    sidebar: document.querySelector('aside'),
    content: document.querySelector('.content'),
    menuLinks: document.querySelectorAll('aside ul li a'),
    footer: document.querySelector('footer')
  };

  // Khởi tạo hệ thống
  function initSystem() {
    setupEventListeners();
    loadPage('home');
    updateUptime();
    setInterval(updateUptime, 1000);
  }

  // Thiết lập event listeners
  function setupEventListeners() {
    // Menu toggle cho mobile
    dom.menuToggle.addEventListener('click', toggleSidebar);

    // Xử lý click menu
    dom.menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        loadPage(page);
        toggleSidebar(false);
      });
    });

    // Xử lý resize window
    window.addEventListener('resize', handleResize);
  }

  // Hiển thị/ẩn sidebar trên mobile
  function toggleSidebar(show = null) {
    if (show === null) {
      dom.sidebar.classList.toggle('active');
    } else if (show) {
      dom.sidebar.classList.add('active');
    } else {
      dom.sidebar.classList.remove('active');
    }
  }

  // Xử lý thay đổi kích thước màn hình
  function handleResize() {
    if (window.innerWidth > 992) {
      dom.sidebar.classList.remove('active');
    }
  }

  // Cập nhật thời gian hoạt động
  function updateUptime() {
    const uptimeEl = document.getElementById('uptime');
    if (uptimeEl) {
      const seconds = Math.floor((Date.now() - app.uptimeStart) / 1000);
      const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      uptimeEl.textContent = `${hours}:${mins}:${secs}`;
    }
  }

  // Tải trang
  function loadPage(page) {
    if (app.currentPage === page) return;
    
    // Xóa interval cũ nếu có
    if (app.intervals[app.currentPage]) {
      clearInterval(app.intervals[app.currentPage]);
      delete app.intervals[app.currentPage];
    }

    // Xóa chart cũ nếu có
    if (app.charts[app.currentPage]) {
      app.charts[app.currentPage].destroy();
      delete app.charts[app.currentPage];
    }

    // Cập nhật menu active
    dom.menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });

    // Tải nội dung trang
    app.currentPage = page;
    dom.content.innerHTML = getPageContent(page);

    // Khởi tạo các thành phần đặc biệt cho trang
    initPageComponents(page);
  }

  // Lấy nội dung trang
  function getPageContent(page) {
    const pages = {
      home: `
        <div class="page-header">
          <h2>Trang chủ</h2>
          <div class="last-updated">Cập nhật: ${new Date().toLocaleString()}</div>
        </div>
        <div class="card">
          <p>Chào mừng bạn đến với hệ thống quản lý mạng <strong>CHATL</strong>. Đây là trung tâm giám sát và điều khiển mạng cho tòa nhà cao tầng, cung cấp công cụ hiện đại giúp theo dõi hiệu suất mạng và xử lý sự cố nhanh chóng.</p>
        </div>
        <div class="card">
          <h3>Thống kê nhanh</h3>
          <div class="quick-stats">
            <div class="stat-card">
              <i class="fas fa-server"></i>
              <div>
                <span class="stat-value">42</span>
                <span class="stat-label">Thiết bị</span>
              </div>
            </div>
            <div class="stat-card">
              <i class="fas fa-wifi"></i>
              <div>
                <span class="stat-value">18</span>
                <span class="stat-label">Access Point</span>
              </div>
            </div>
            <div class="stat-card">
              <i class="fas fa-exclamation-triangle"></i>
              <div>
                <span class="stat-value">3</span>
                <span class="stat-label">Cảnh báo</span>
              </div>
            </div>
          </div>
        </div>
      `,
      
      vlan: `
        <div class="page-header">
          <h2>Quản lý VLAN</h2>
          <button class="add-vlan-btn" onclick="app.showVlanModal()">
            <i class="fas fa-plus"></i> Thêm VLAN
          </button>
        </div>
        
        <div class="card">
          <div class="vlan-grid" id="vlanGrid"></div>
        </div>
      `,
      
      monitor: `
        <div class="page-header">
          <h2>Giám sát hiệu suất</h2>
          <div class="time-range">
            <button class="active">24h</button>
            <button>7 ngày</button>
            <button>30 ngày</button>
          </div>
        </div>
        
        <div class="card">
          <h3>Hiệu suất hệ thống</h3>
          <div class="chart-container">
            <canvas id="performanceChart"></canvas>
          </div>
        </div>
        
        <div class="card">
          <h3>Thống kê lưu lượng</h3>
          <div class="chart-container">
            <canvas id="trafficChart"></canvas>
          </div>
        </div>
      `,
      
      building: `
        <div class="page-header">
          <h2>Quản lý tòa nhà 30 tầng</h2>
          <div class="search-box">
            <input type="text" placeholder="Tìm kiếm tầng...">
            <i class="fas fa-search"></i>
          </div>
        </div>
        
        <div class="card">
          <div class="floor-grid">
            ${Array.from({length: 30}, (_, i) => 30 - i).map(floor => `
              <div class="floor-card">
                <div class="floor-header">
                  <h3>Tầng ${floor}</h3>
                  <span class="status-badge active">Hoạt động</span>
                </div>
                <div class="floor-info">
                  <div class="info-item">
                    <i class="fas fa-server"></i>
                    <span>3 Switch</span>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-wifi"></i>
                    <span>5 AP</span>
                  </div>
                </div>
                <button class="view-btn" onclick="app.showFloorDetails(${floor})">
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `,
      
      // Các trang khác...
      intro: `<div class="card"><h2>Giới thiệu</h2><p>Nội dung giới thiệu...</p></div>`,
      products: `<div class="card"><h2>Sản phẩm</h2><p>Danh sách sản phẩm...</p></div>`,
      devices: `<div class="card"><h2>Thiết bị mạng</h2><p>Danh sách thiết bị...</p></div>`,
      poe: `<div class="card"><h2>Switch PoE</h2><p>Quản lý switch PoE...</p></div>`,
      reports: `<div class="card"><h2>Báo cáo lỗi</h2><p>Danh sách lỗi...</p></div>`,
      contact: `<div class="card"><h2>Liên hệ</h2><p>Thông tin liên hệ...</p></div>`
    };

    return pages[page] || `
      <div class="page-header">
        <h2>Trang không tồn tại</h2>
      </div>
      <div class="card">
        <p>Nội dung bạn đang tìm kiếm không tồn tại hoặc đang được phát triển.</p>
      </div>
    `;
  }

  // Khởi tạo các thành phần đặc biệt cho từng trang
  function initPageComponents(page) {
    switch(page) {
      case 'monitor':
        initPerformanceCharts();
        break;
      case 'building':
        initBuildingSearch();
        break;
      case 'vlan':
        renderVlanList();
        break;
    }
  }

  // Khởi tạo biểu đồ hiệu suất
  function initPerformanceCharts() {
    // Biểu đồ hiệu suất
    const perfCtx = document.getElementById('performanceChart').getContext('2d');
    app.charts.performanceChart = new Chart(perfCtx, {
      type: 'line',
      data: {
        labels: Array.from({length: 24}, (_, i) => `${i}:00`),
        datasets: [
          {
            label: 'CPU Usage (%)',
            data: Array.from({length: 24}, () => Math.floor(Math.random() * 30) + 20),
            borderColor: '#70a1ff',
            backgroundColor: 'rgba(112, 161, 255, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          },
          {
            label: 'Memory Usage (%)',
            data: Array.from({length: 24}, () => Math.floor(Math.random() * 20) + 40),
            borderColor: '#ff7675',
            backgroundColor: 'rgba(255, 118, 117, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: getChartOptions('Hiệu suất hệ thống')
    });

    // Biểu đồ lưu lượng
    const trafficCtx = document.getElementById('trafficChart').getContext('2d');
    app.charts.trafficChart = new Chart(trafficCtx, {
      type: 'bar',
      data: {
        labels: ['Tầng 1-5', 'Tầng 6-10', 'Tầng 11-15', 'Tầng 16-20', 'Tầng 21-25', 'Tầng 26-30'],
        datasets: [
          {
            label: 'Lưu lượng vào (MB)',
            data: [120, 190, 150, 200, 180, 160],
            backgroundColor: 'rgba(54, 162, 235, 0.7)'
          },
          {
            label: 'Lưu lượng ra (MB)',
            data: [80, 120, 100, 140, 130, 110],
            backgroundColor: 'rgba(255, 99, 132, 0.7)'
          }
        ]
      },
      options: getChartOptions('Lưu lượng mạng theo khu vực')
    });

    // Cập nhật dữ liệu real-time
    app.intervals.monitor = setInterval(() => {
      updateChartData(app.charts.performanceChart);
      updateChartData(app.charts.trafficChart);
    }, 5000);
  }

  // Cấu hình chung cho biểu đồ
  function getChartOptions(title) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 12
            }
          }
        },
        title: {
          display: true,
          text: title,
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + (title.includes('%') ? '%' : ' MB');
            }
          }
        }
      },
      animation: {
        duration: 1000
      }
    };
  }

  // Cập nhật dữ liệu biểu đồ
  function updateChartData(chart) {
    if (!chart) return;

    chart.data.datasets.forEach(dataset => {
      const newValue = dataset.data.map(value => {
        const change = Math.floor(Math.random() * 10) - 4;
        return Math.max(0, Math.min(100, value + change));
      });
      dataset.data = newValue;
    });

    chart.update();
  }

  // Tìm kiếm tầng
  function initBuildingSearch() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const floorCards = document.querySelectorAll('.floor-card');
        
        floorCards.forEach(card => {
          const floorNum = card.querySelector('h3').textContent.toLowerCase();
          if (floorNum.includes(searchTerm)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }
  }

  // ========== VLAN Management ==========
  function renderVlanList() {
    const vlanGrid = document.getElementById('vlanGrid');
    if (!vlanGrid) return;

    vlanGrid.innerHTML = app.vlans.map(vlan => `
      <div class="vlan-card">
        <div class="vlan-id">VLAN ${vlan.id}</div>
        <div class="vlan-name">${vlan.name}</div>
        <p class="vlan-description">${vlan.description}</p>
        
        <div class="vlan-ports">
          <strong>Ports:</strong>
          ${vlan.ports.map(port => `<span class="port-tag">${port}</span>`).join('')}
        </div>
        
        <div class="vlan-actions">
          <button class="edit-btn" onclick="app.editVlan(${vlan.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick="app.deleteVlan(${vlan.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  app.showVlanModal = function(vlanId = null) {
    const isEdit = vlanId !== null;
    const vlan = isEdit ? app.vlans.find(v => v.id === vlanId) : null;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>${isEdit ? 'Chỉnh sửa' : 'Thêm mới'} VLAN</h3>
        
        <div class="form-group">
          <label>VLAN ID</label>
          <input type="number" id="vlanId" value="${vlan?.id || ''}" ${isEdit ? 'readonly' : ''}>
        </div>
        
        <div class="form-group">
          <label>Tên VLAN</label>
          <input type="text" id="vlanName" value="${vlan?.name || ''}">
        </div>
        
        <div class="form-group">
          <label>Ports (cách nhau bằng dấu phẩy)</label>
          <input type="text" id="vlanPorts" value="${vlan?.ports?.join(', ') || ''}">
        </div>
        
        <div class="form-group">
          <label>Mô tả</label>
          <textarea id="vlanDesc">${vlan?.description || ''}</textarea>
        </div>
        
        <div class="form-actions">
          <button class="cancel-btn" onclick="this.closest('.modal-overlay').remove()">Hủy</button>
          <button class="save-btn" onclick="app.saveVlan(${isEdit})">
            ${isEdit ? 'Cập nhật' : 'Lưu'}
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  };

  app.saveVlan = function(isEdit) {
    const vlanId = parseInt(document.getElementById('vlanId').value);
    const vlanName = document.getElementById('vlanName').value;
    const vlanPorts = document.getElementById('vlanPorts').value.split(',').map(p => p.trim());
    const vlanDesc = document.getElementById('vlanDesc').value;

    // Validate
    if (!vlanId || !vlanName || vlanPorts.length === 0) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    const newVlan = {
      id: vlanId,
      name: vlanName,
      ports: vlanPorts,
      description: vlanDesc
    };

    if (isEdit) {
      // Update existing VLAN
      const index = app.vlans.findIndex(v => v.id === vlanId);
      if (index !== -1) {
        app.vlans[index] = newVlan;
      }
    } else {
      // Add new VLAN
      if (app.vlans.some(v => v.id === vlanId)) {
        alert(`VLAN ID ${vlanId} đã tồn tại!`);
        return;
      }
      app.vlans.push(newVlan);
    }

    // Close modal and refresh list
    document.querySelector('.modal-overlay').remove();
    renderVlanList();
    
    // Show success message
    alert(`VLAN ${vlanId} đã được ${isEdit ? 'cập nhật' : 'tạo'} thành công!`);
  };

  app.editVlan = function(vlanId) {
    app.showVlanModal(vlanId);
  };

  app.deleteVlan = function(vlanId) {
    if (confirm(`Bạn có chắc chắn muốn xóa VLAN ${vlanId}?`)) {
      app.vlans = app.vlans.filter(v => v.id !== vlanId);
      renderVlanList();
      alert(`VLAN ${vlanId} đã được xóa!`);
    }
  };

  // Hiển thị chi tiết tầng
  app.showFloorDetails = function(floor) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>Chi tiết tầng ${floor}</h3>
          <button class="close-btn" onclick="this.closest('.modal-overlay').remove()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="floor-details">
            <div class="detail-item">
              <span class="label">Trạng thái:</span>
              <span class="value active">Hoạt động</span>
            </div>
            <div class="detail-item">
              <span class="label">Thiết bị:</span>
              <span class="value">3 Switch, 5 AP, 2 Router</span>
            </div>
            <div class="detail-item">
              <span class="label">Lưu lượng:</span>
              <span class="value">45 MB/s</span>
            </div>
          </div>
          <div class="chart-container">
            <canvas id="floorChart"></canvas>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Khởi tạo biểu đồ
    const ctx = modal.querySelector('#floorChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
        datasets: [{
          label: 'Lưu lượng tầng ' + floor,
          data: [20, 45, 30, 60, 50, 40],
          borderColor: '#70a1ff',
          backgroundColor: 'rgba(112, 161, 255, 0.1)',
          borderWidth: 2,
         