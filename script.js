// Дані про транспорт
const vehicles = [
    { 
        id: "TK001", 
        type: "Вантажівка", 
        status: "Активний", 
        location: "Київ", 
        route: "Київ - Львів", 
        cargo: "Електроніка",
        coordinates: [50.4501, 30.5234]
    },
    { 
        id: "TK002", 
        type: "Фура", 
        status: "В дорозі", 
        location: "Одеса", 
        route: "Одеса - Харків", 
        cargo: "Продукти",
        coordinates: [46.4825, 30.7233]
    },
    { 
        id: "TK003", 
        type: "Мікроавтобус", 
        status: "На технічному", 
        location: "Дніпро", 
        route: "-", 
        cargo: "-",
        coordinates: [48.4647, 35.0462]
    },
    { 
        id: "TK004", 
        type: "Вантажівка", 
        status: "Активний", 
        location: "Львів", 
        route: "Львів - Тернопіль", 
        cargo: "Меблі",
        coordinates: [49.8397, 24.0297]
    },
    { 
        id: "TK005", 
        type: "Фура", 
        status: "В дорозі", 
        location: "Харків", 
        route: "Харків - Полтава", 
        cargo: "Будматеріали",
        coordinates: [49.9935, 36.2304]
    }
];

// Дані про замовлення
const orders = {
    active: [
        { id: "ORD001", status: "В обробці", from: "Київ", to: "Львів", created: "2024-03-20", cargo: "Електроніка", price: "15000" },
        { id: "ORD002", status: "В дорозі", from: "Одеса", to: "Харків", created: "2024-03-20", cargo: "Продукти", price: "12000" },
        { id: "ORD003", status: "В обробці", from: "Дніпро", to: "Запоріжжя", created: "2024-03-21", cargo: "Меблі", price: "8000" }
    ],
    completed: [
        { id: "ORD004", status: "Виконано", from: "Львів", to: "Тернопіль", created: "2024-03-19", cargo: "Техніка", price: "10000" },
        { id: "ORD005", status: "Виконано", from: "Харків", to: "Полтава", created: "2024-03-18", cargo: "Будматеріали", price: "18000" }
    ]
};

// Ініціалізація графіків
function initCharts() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const textColor = isDarkTheme ? '#ffffff' : '#666666';
    const gridColor = isDarkTheme ? '#3d3d3d' : '#e0e0e0';
    
    Chart.defaults.color = textColor;
    Chart.defaults.borderColor = gridColor;
    
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: gridColor
                },
                ticks: {
                    color: textColor
                }
            },
            y: {
                grid: {
                    color: gridColor
                },
                ticks: {
                    color: textColor
                }
            }
        }
    };

    // Графік активних транспортних засобів
    new Chart(document.getElementById('activeVehiclesChart'), {
        type: 'line',
        data: {
            labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'],
            datasets: [{
                label: 'Активні ТЗ',
                data: [15, 18, 20, 22, 25, 23],
                borderColor: '#007bff',
                backgroundColor: isDarkTheme ? 'rgba(0, 123, 255, 0.2)' : 'rgba(0, 123, 255, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: commonOptions
    });

    // Графік типів транспорту
    new Chart(document.getElementById('vehicleTypesChart'), {
        type: 'doughnut',
        data: {
            labels: ['Вантажівки', 'Фури', 'Мікроавтобуси'],
            datasets: [{
                data: [8, 5, 3],
                backgroundColor: ['#28a745', '#007bff', '#ffc107']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: textColor
                    }
                }
            }
        }
    });

    // Графік виконаних замовлень
    new Chart(document.getElementById('completedOrdersChart'), {
        type: 'bar',
        data: {
            labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
            datasets: [{
                label: 'Замовлення',
                data: [12, 19, 15, 17, 14],
                backgroundColor: isDarkTheme ? 'rgba(40, 167, 69, 0.2)' : 'rgba(40, 167, 69, 0.1)',
                borderColor: '#28a745',
                borderWidth: 1
            }]
        },
        options: commonOptions
    });

    // Графік середньої відстані
    new Chart(document.getElementById('averageDistanceChart'), {
        type: 'line',
        data: {
            labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень'],
            datasets: [{
                label: 'Відстань (км)',
                data: [350, 420, 380, 450, 400],
                borderColor: '#dc3545',
                backgroundColor: isDarkTheme ? 'rgba(220, 53, 69, 0.2)' : 'rgba(220, 53, 69, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: commonOptions
    });
}

// Функція для роботи з темою
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        initCharts();
    });

    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
            }
            initCharts();
        }
    });
}

// Карта
const statusColors = {
    'Активний': '#28a745',
    'В дорозі': '#007bff',
    'На технічному': '#dc3545'
};

let map;
let markers = [];

function createCustomMarker(vehicle) {
    const color = statusColors[vehicle.status];
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background-color: ${color};
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 4px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [15, 15],
        iconAnchor: [7, 7],
        popupAnchor: [0, -7]
    });
}

function updateMarkers(filter = 'all') {
    markers.forEach(marker => marker.remove());
    markers = [];

    const filteredVehicles = vehicles.filter(vehicle => {
        if (filter === 'all') return true;
        if (filter === 'active') return vehicle.status === 'Активний';
        if (filter === 'in-transit') return vehicle.status === 'В дорозі';
        if (filter === 'maintenance') return vehicle.status === 'На технічному';
        return true;
    });

    filteredVehicles.forEach(vehicle => {
        const marker = L.marker(vehicle.coordinates, {
            icon: createCustomMarker(vehicle)
        }).bindPopup(`
            <div class="map-popup">
                <h3>${vehicle.id}</h3>
                <p><strong>Тип:</strong> ${vehicle.type}</p>
                <p><strong>Статус:</strong> <span class="status-${vehicle.status.toLowerCase().replace(/\s+/g, '-')}">${vehicle.status}</span></p>
                <p><strong>Локація:</strong> ${vehicle.location}</p>
                <p><strong>Маршрут:</strong> ${vehicle.route}</p>
                <p><strong>Вантаж:</strong> ${vehicle.cargo}</p>
            </div>
        `);
        
        marker.addTo(map);
        markers.push(marker);
    });
}

function initMap() {
    try {
        map = L.map('map').setView([49.0384, 31.4513], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        updateMarkers();

        document.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-button').forEach(btn => 
                    btn.classList.remove('active'));
                e.target.classList.add('active');
                updateMarkers(e.target.dataset.filter);
            });
        });

    } catch (error) {
        console.error('Помилка при ініціалізації карти:', error);
        document.getElementById('map').innerHTML = `
            <div class="map-error">
                <p>Помилка завантаження карти: ${error.message}</p>
            </div>
        `;
    }
}

// Таблиці
function populateVehiclesTable() {
    const tbody = document.querySelector('#vehiclesTable tbody');
    tbody.innerHTML = vehicles.map(vehicle => `
        <tr>
            <td>${vehicle.id}</td>
            <td>${vehicle.type}</td>
            <td class="status-${vehicle.status.toLowerCase().replace(/\s+/g, '-')}">${vehicle.status}</td>
            <td>${vehicle.location}</td>
            <td>${vehicle.route}</td>
            <td>${vehicle.cargo}</td>
        </tr>
    `).join('');
}

function populateOrdersTable(type = 'active') {
    const tbody = document.querySelector('#ordersTable tbody');
    tbody.innerHTML = orders[type].map(order => `
        <tr>
            <td>${order.id}</td>
            <td class="status-${order.status.toLowerCase().replace(/\s+/g, '-')}">${order.status}</td>
            <td>${order.from}</td>
            <td>${order.to}</td>
            <td>${order.created}</td>
            <td>${order.cargo}</td>
            <td>${order.price} грн</td>
        </tr>
    `).join('');
}

// Ініціалізація додатку
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCharts();
    initMap();
    populateVehiclesTable();
    populateOrdersTable('active');

    // Обробники для вкладок замовлень
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-button').forEach(btn => 
                btn.classList.remove('active'));
            e.target.classList.add('active');
            populateOrdersTable(e.target.dataset.tab);
        });
    });
});
