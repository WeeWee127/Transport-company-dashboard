/* Базові стилі */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
    transition: background-color 0.3s, color 0.3s;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

/* Заголовки */
h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #2c3e50;
    font-size: 2rem;
}

h2 {
    margin-bottom: 20px;
    color: #34495e;
    font-size: 1.5rem;
}

h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.2rem;
}

/* Секції */
section {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Графіки */
.charts-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

.chart {
    background: white;
    padding: 15px;
    border-radius: 8px;
    height: 300px;
    position: relative;
}

.chart canvas {
    width: 100% !important;
    height: 100% !important;
}

/* Таблиці */
.tables-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

th {
    background-color: #f8f9fa;
    font-weight: 500;
}

tr:hover {
    background-color: #f8f9fa;
}

/* Статуси */
.status-активний { color: #28a745; }
.status-в-дорозі { color: #007bff; }
.status-на-технічному { color: #dc3545; }
.status-в-обробці { color: #ffc107; }
.status-виконано { color: #28a745; }

/* Вкладки замовлень */
.orders-tabs {
    margin-bottom: 15px;
}

.tab-button {
    padding: 8px 16px;
    border: none;
    background: #f8f9fa;
    cursor: pointer;
    border-radius: 4px;
    margin-right: 10px;
}

.tab-button:hover {
    background: #e9ecef;
}

.tab-button.active {
    background: #007bff;
    color: white;
}

/* Карта */
.map-section {
    padding: 0;
}

.map-controls {
    padding: 20px;
    border-bottom: 1px solid #eee;
}

.map-filters {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.filter-button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: #f8f9fa;
    color: #2c3e50;
}

.filter-button:hover {
    background: #e9ecef;
}

.filter-button.active {
    background: #007bff;
    color: white;
}

#map {
    height: 500px;
    width: 100%;
}

/* Стилі для перемикача теми */
.theme-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
    background: #f0f0f0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    background: #e0e0e0;
}

.dark-icon {
    display: none;
}

/* Темна тема */
body.dark-theme {
    background-color: #1a1a1a;
    color: #ffffff;
}

body.dark-theme header h1 {
    color: #ffffff;
}

body.dark-theme section {
    background: #2d2d2d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

body.dark-theme .chart {
    background: #2d2d2d;
}

body.dark-theme table th {
    background-color: #3d3d3d;
    color: #ffffff;
}

body.dark-theme table td {
    border-bottom: 1px solid #3d3d3d;
}

body.dark-theme tr:hover {
    background-color: #3d3d3d;
}

body.dark-theme .tab-button {
    background: #3d3d3d;
    color: #ffffff;
}

body.dark-theme .tab-button:hover {
    background: #4d4d4d;
}

body.dark-theme .tab-button.active {
    background: #007bff;
}

body.dark-theme .filter-button {
    background: #3d3d3d;
    color: #ffffff;
}

body.dark-theme .filter-button:hover {
    background: #4d4d4d;
}

body.dark-theme .filter-button.active {
    background: #007bff;
}

body.dark-theme .map-legend {
    background: #2d2d2d;
    color: #ffffff;
}

body.dark-theme .theme-toggle {
    background: #3d3d3d;
    color: #ffffff;
}

body.dark-theme .theme-toggle:hover {
    background: #4d4d4d;
}

body.dark-theme .light-icon {
    display: none;
}

body.dark-theme .dark-icon {
    display: block;
}

/* Адаптивність */
@media (max-width: 1200px) {
    .tables-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .container { padding: 10px; }
    .charts-container { grid-template-columns: 1fr; }
    .chart { height: 250px; }
    .map-controls {
        flex-direction: column;
        align-items: flex-start;
    }
    .map-filters {
        flex-wrap: wrap;
    }
    #map { height: 400px; }
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.2rem; }
    h3 { font-size: 1rem; }
}
