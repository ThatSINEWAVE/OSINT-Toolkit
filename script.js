const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
});