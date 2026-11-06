// Personal site nav — mark active link by current path
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.startsWith(href) && href !== '/laar61400/teaching/laar61400/') {
      link.classList.add('active');
    }
    if (href === '/laar61400/teaching/laar61400/' && (path === '/laar61400/teaching/laar61400/' || path === 'https://zihaozhang.cc/index.html')) {
      link.classList.add('active');
    }
  });
});
