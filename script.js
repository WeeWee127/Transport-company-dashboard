// Всі попередні дані (vehicles та orders) залишаються без змін...

// Ініціалізація графіків
function initCharts() {
    // Отримуємо поточну тему
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const textColor = isDarkTheme ? '#ffffff' : '#666666';
    
    // Загальні налаштування для всіх графіків
    Chart.defaults.color = textColor;
    Chart.defaults.borderColor = isDarkTheme ? '#3d3d3d' : '#e0e0e0';

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

    // Інші графіки залишаються без змін...
}

// Функція для роботи з темою
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Перевіряємо збережену тему
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Обробник кліку по кнопці
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Зберігаємо вибір користувача
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        // Оновлюємо графіки при зміні теми
        initCharts();
    });

    // Слухаємо системні налаштування
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

// Кольори для різних статусів
const statusColors = {
    'Активний': '#28a745',
    'В дорозі': '#007bff',
    'На технічному': '#dc3545'
};

// Глобальні змінні для карти і маркерів
let map;
let markers = [];

// Всі інші функції (createCustomMarker, updateMarkers, initMap, 
// populateVehiclesTable, populateOrdersTable) залишаються без змін...

// Ініціалізація додатку
document.addEventListener('DOMContentLoaded', () => {
    initTheme(); // Додали ініціалізацію теми першою
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
