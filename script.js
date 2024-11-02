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
    },
    { 
        id: "TK006", 
        type: "Мікроавтобус", 
        status: "Активний", 
        location: "Запоріжжя", 
        route: "Запоріжжя - Дніпро", 
        cargo: "Пошта",
        coordinates: [47.8388, 35.1396]
    },
    { 
        id: "TK007", 
        type: "Вантажівка", 
        status: "На технічному", 
        location: "Вінниця", 
        route: "-", 
        cargo: "-",
        coordinates: [49.2331, 28.4682]
    },
    { 
        id: "TK008", 
        type: "Фура", 
        status: "В дорозі", 
        location: "Тернопіль", 
        route: "Тернопіль - Київ", 
        cargo: "Техніка",
        coordinates: [49.5535, 25.5948]
    },
    { 
        id: "TK009", 
        type: "Мікроавтобус", 
        status: "Активний", 
        location: "Полтава", 
        route: "Полтава - Суми", 
        cargo: "Продукти",
        coordinates: [49.5883, 34.5514]
    },
    { 
        id: "TK010", 
        type: "Вантажівка", 
        status: "Активний", 
        location: "Черкаси", 
        route: "Черкаси - Київ", 
        cargo: "Меблі",
        coordinates: [49.4444, 32.0598]
    }
];

// Дані про замовлення
const orders = {
    active: [
        { id: "ORD001", status: "В обробці", from: "Київ", to: "Львів", created: "2024-03-20", cargo: "Електроніка", price: "15000" },
        { id: "ORD002", status: "В дорозі", from: "Одеса", to: "Харків", created: "2024-03-20", cargo: "Продукти", price: "12000" },
        { id: "ORD003", status: "В обробці", from: "Дніпро", to: "Запоріжжя", created: "2024-03-21", cargo: "Меблі", price: "8000" },
        { id: "ORD004", status: "В дорозі", from: "Львів", to: "Тернопіль", created: "2024-03-21", cargo: "Техніка", price: "10000" },
        { id: "ORD005", status: "В обробці", from: "Харків", to: "Полтава", created: "2024-03-21", cargo: "Будматеріали", price: "18000" },
        { id: "ORD006", status: "В дорозі", from: "Вінниця", to: "Київ", created: "2024-03-22", cargo: "Продукти", price: "9000" },
        { id: "ORD007", status: "В обробці", from: "Черкаси", to: "Дніпро", created: "2024-03-22", cargo: "Пошта", price: "7000" }
    ],
    completed: [
        { id: "ORD008", status: "Виконано", from: "Дніпро", to: "Київ", created: "2024-03-19", cargo: "Будматеріали", price: "20000" },
        { id: "ORD009", status: "Виконано", from: "Харків", to: "Одеса", created: "2024-03-19", cargo: "Пошта", price: "8000" },
        { id: "ORD010", status: "Виконано", from: "Львів", to: "Харків", created: "2024-03-18", cargo: "Техніка", price: "25000" },
        { id: "ORD011", status: "Виконано", from: "Київ", to: "Запоріжжя", created: "2024-03-18", cargo: "Меблі", price: "15000" },
        { id: "ORD012", status: "Виконано", from: "Одеса", to: "Дніпро", created: "2024-03-17", cargo: "Продукти", price: "12000" },
        { id: "ORD013", status: "Виконано", from: "Тернопіль", to: "Вінниця", created: "2024-03-17", cargo: "Електроніка", price: "9000" },
        { id: "ORD014", status: "Виконано", from: "Полтава", to: "Черкаси", created: "2024-03-16", cargo: "Будматеріали", price: "11000" }
    ]
};

// Ініціалізація графіків
function initCharts() {
    // Графік активних транспортних засобів
    new Chart(document.getElementById('activeVehiclesChart'), {
        type: 'line',
        data: {
            labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'],
            datasets: [{
                label: 'Активні ТЗ',
                data: [15, 18, 20, 22, 25, 23],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });

    // Графік типів транспорту
    new Chart(document.getElementById('vehicleTypesChart'), {
        type: 'doughnut',
        data: {
            labels: ['Вантажівки', 'Фури', 'Мікроавтобуси'],
            datasets: [{
                data: [10, 8, 4],
                backgroundColor: [
                    'rgba(0, 123, 255, 0.8)',
                    'rgba(40, 167, 69, 0.8)',
                    'rgba(255, 193, 7, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Графік виконаних замовлень
    new Chart(document.getElementById('completedOrdersChart'), {
        type: 'bar',
        data: {
            labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'],
            datasets: [{
                label: 'Виконані замовлення',
                data: [150, 180, 200, 220, 240, 210],
                backgroundColor: 'rgba(40, 167, 69, 0.8)',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });

    // Графік середньої відстані
    new Chart(document.getElementById('averageDistanceChart'), {
        type: 'line',
        data: {
            labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'],
            datasets: [{
                label: 'Середня відстань (км)',
                data: [450, 480, 500, 520, 540, 510],
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });
}

// Кольори для різних статусів
const statusColors = {
    'Активний': '#28a745',      // зелений
    'В дорозі': '#007bff',      // синій
    'На технічному': '#dc3545'  // червоний
};

// Глобальні змінні для карти і маркерів
let map;
let markers = [];

// Створення кастомного маркера з кольором відповідно до статусу
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

// Оновлення маркерів на карті відповідно до фільтру
function updateMarkers(filter = 'all') {
    // Видаляємо всі поточні маркери
    markers.forEach(marker => marker.remove());
    markers = [];

    // Фільтруємо транспортні засоби
    const filteredVehicles = vehicles.filter(vehicle => {
        if (filter === 'all') return true;
        if (filter === 'active') return vehicle.status === 'Активний';
        if (filter === 'in-transit') return vehicle.status === 'В дорозі';
        if (filter === 'maintenance') return vehicle.status === 'На технічному';
        return true;
    });

    // Додаємо нові маркери
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

// Ініціалізація карти
function initMap() {
    try {
        // Створюємо карту
        map = L.map('map').setView([49.0384, 31.4513], 6);

        // Додаємо тайли карти
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Додаємо початкові маркери
        updateMarkers();

        // Додаємо обробники подій для кнопок фільтрації
        document.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', (e) => {
                // Оновлюємо активну кнопку
                document.querySelectorAll('.filter-button').forEach(btn => 
                    btn.classList.remove('active'));
                e.target.classList.add('active');

                // Оновлюємо маркери
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

// Заповнення таблиці транспортних засобів
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

// Заповнення таблиці замовлень
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