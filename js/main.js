// ─── Source unique de vérité pour les liens d'achat ─────────────────────────
const LIENS_ACHAT = {
  erm_toolkit: {
    gumroad: "https://flissidigital.gumroad.com/l/enterprise-risk-management-dashboard",
    payhip:  "https://payhip.com/b/sxrmq"
  },
  riskmap_pro: {
    gumroad: "https://flissidigital.gumroad.com/l/cartographiedesrisques",
    payhip:  null
  },
  trucking_cost: {
    gumroad: "https://flissidigital.gumroad.com/l/trucking-cost-per-mile-calculator",
    payhip:  "https://payhip.com/b/XxCUq"
  },
  micro_entrepreneur: {
    gumroad: "https://flissidigital.gumroad.com/l/tableau-de-bord-auto-entrepreneur",
    payhip:  null
  }
};
// Boutique complète (liens de repli footer) :
// Gumroad : https://flissidigital.gumroad.com/  |  Payhip : https://payhip.com/FlissiDigital

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// Animate bars in hero mockup
const bars = document.querySelectorAll('.bar');
if (bars.length) {
  const heights = [35, 55, 70, 45, 90, 60, 75, 50, 85, 65];
  bars.forEach((bar, i) => {
    bar.style.height = heights[i % heights.length] + '%';
  });

  let current = 4;
  setInterval(() => {
    bars.forEach(b => b.classList.remove('active'));
    current = (current + 1) % bars.length;
    bars[current].classList.add('active');
  }, 1200);
}

// Intersection Observer for fade-in animations
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
  });
});

// Add visible class via CSS
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// Contact form (for contact.html)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Message envoyé !';
    btn.style.background = '#4ade80';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3500);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
