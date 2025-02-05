// JavaScript code for dashboard functionality



// Logout Functionality
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
});

// Toggle Dark Mode
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.textContent = body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});

// Notifications Badge
const notificationsBadge = document.querySelector('.badge');
const bellIcon = document.querySelector('.bell-icon');

bellIcon.addEventListener('click', () => {
  notificationsBadge.style.display = 'none';
});

// Chart.js: Line Chart and Pie Chart
const lineChartCtx = document.getElementById('line-chart').getContext('2d');
const pieChartCtx = document.getElementById('pie-chart').getContext('2d');

// Line Chart
new Chart(lineChartCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Visitors',
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  },
});

// Pie Chart
new Chart(pieChartCtx, {
  type: 'pie',
  data: {
    labels: ['UI Design', 'Web Design', 'Illustrations', 'Dynamic Effects'],
    datasets: [
      {
        data: [30, 40, 20, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
    },
  },
});

// Calendar Widget Initialization
const calendarWidget = document.getElementById('calendar-widget');
const calendarDate = new Date();
calendarWidget.textContent = `Today's Date: ${calendarDate.toDateString()}`;

// Feedback Form Submission
const feedbackForm = document.querySelector('.feedback form');
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  feedbackForm.reset();
});
