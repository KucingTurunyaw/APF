// Fletro Pro v6.1 | Main JavaScript for Static Deployment
// Author: Leo (based on Fletro Pro XML)
// Usage: Include in index.html, post.html, etc.

document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // 1. Toggle Mobile Menu
  // ==========================
  const navToggle = document.querySelector('#offNav');
  const mobileMenu = document.querySelector('.headM');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('change', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // ==========================
  // 2. Dark Mode Toggle
  // ==========================
  const darkToggle = document.querySelector('.tDL');
  const body = document.body;

  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      body.classList.toggle('drK');
      const mode = body.classList.contains('drK') ? 'darkmode' : 'lightmode';
      localStorage.setItem('mode', mode);
      updateDarkModeText(darkToggle, mode);
    });
  }

  // Update text on toggle (e.g., "Dark" → "Light")
  function updateDarkModeText(toggle, mode) {
    const isDark = mode === 'darkmode';
    toggle.textContent = isDark ? 'Light' : 'Dark';
    if (toggle.querySelector('svg')) {
      toggle.querySelector('svg').classList.toggle('d2', isDark);
    }
  }

  // Load saved mode on page load
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'darkmode') {
    body.classList.add('drK');
    if (darkToggle) updateDarkModeText(darkToggle, 'darkmode');
  }

  // ==========================
  // 3. Grid/List Mode Toggle
  // ==========================
  const gridToggle = document.querySelector('.tGr');
  const mainContainer = document.querySelector('#mainCont');

  if (gridToggle && mainContainer) {
    gridToggle.addEventListener('click', () => {
      mainContainer.classList.toggle('grD');
      const mode = mainContainer.classList.contains('grD') ? 'listmode' : 'gridmode';
      localStorage.setItem('list', mode);
      updateGridText(gridToggle, mode);
    });
  }

  function updateGridText(toggle, mode) {
    const isList = mode === 'listmode';
    toggle.textContent = isList ? 'Grid' : 'List';
    if (toggle.querySelector('svg')) {
      toggle.querySelector('svg').classList.toggle('d2', isList);
    }
  }

  // Load saved mode
  const savedGridMode = localStorage.getItem('list');
  if (savedGridMode === 'listmode') {
    mainContainer.classList.add('grD');
    if (gridToggle) updateGridText(gridToggle, 'listmode');
  }

  // ==========================
  // 4. Scroll to Top Button
  // ==========================
  const toTopBtn = document.querySelector('.toTopF');

  if (toTopBtn) {
    window.addEventListener('scroll', () => {
      toTopBtn.style.opacity = window.scrollY > 300 ? '1' : '0';
      toTopBtn.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
    });

    toTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================
  // 5. Smooth Scroll for Anchor Links
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================
  // 6. Font Size Toggle (Small/Default/Large)
  // ==========================
  const fontButtons = document.querySelectorAll('.fnC label');

  fontButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.body.classList.remove('fnt1', 'fnt2', 'fnt3');
      document.body.classList.add(`fnt${index + 1}`);
    });
  });

  // ==========================
  // 7. Comment Section Toggle (if exists)
  // ==========================
  const commentToggle = document.querySelector('#forComments');
  const commentSection = document.querySelector('.cmShw');

  if (commentToggle && commentSection) {
    commentToggle.addEventListener('change', () => {
      commentSection.style.display = commentToggle.checked ? 'block' : 'none';
    });
  }

  // ==========================
  // 8. Notification Close Button
  // ==========================
  const notifClose = document.querySelector('.ntfC .c');
  const notifInput = document.querySelector('.ntfI');

  if (notifClose && notifInput) {
    notifClose.addEventListener('click', () => {
      notifInput.checked = true;
    });
  }

  // ==========================
  // 9. Responsive Menu (Dropdown)
  // ==========================
  document.querySelectorAll('.mnMn .drp > .a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = item.closest('.drp');
      dropdown.classList.toggle('open');
    });
  });

  // ==========================
  // 10. Lazy Load Images (if needed)
  // ==========================
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img.lazy');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  }

  // ==========================
  // 11. WhatsApp Button Toggle (if exists)
  // ==========================
  const whatsappToggle = document.querySelector('.chat-menu');
  const whatsappChat = document.querySelector('.sticky-chat');

  if (whatsappToggle && whatsappChat) {
    whatsappToggle.addEventListener('change', () => {
      whatsappChat.style.opacity = whatsappToggle.checked ? '1' : '0';
      whatsappChat.style.visibility = whatsappToggle.checked ? 'visible' : 'hidden';
    });
  }

  // ==========================
  // 12. Accordion Toggle
  // ==========================
  document.querySelectorAll('details.ac').forEach(accordion => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('open');
    });
  });

  // ==========================
  // 13. Tab Switcher
  // ==========================
  document.querySelectorAll('.tbHd label').forEach(label => {
    label.addEventListener('click', () => {
      const target = label.getAttribute('for');
      document.querySelectorAll('.tbCn > div').forEach(tab => {
        tab.style.display = 'none';
      });
      document.querySelector(`.tbCn div[id="${target}"]`)?.style.display = 'block';
    });
  });

  // ==========================
  // 14. Font Size Input Toggle
  // ==========================
  const fontSizeToggle = document.querySelector('#forFont');
  const fontSizePanel = document.querySelector('.fnB');

  if (fontSizeToggle && fontSizePanel) {
    fontSizeToggle.addEventListener('change', () => {
      fontSizePanel.style.opacity = fontSizeToggle.checked ? '1' : '0';
      fontSizePanel.style.visibility = fontSizeToggle.checked ? 'visible' : 'hidden';
    });
  }

  // ==========================
  // 15. Initialize All
  // ==========================
  console.log('Fletro Pro v6.1 Initialized ✅');
});
