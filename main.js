/**
 * AI Automation Portfolio - Main JavaScript
 * Systems/Flow-based aesthetic with interactive project filtering
 */

// Project Data - All 60 Projects from Final Projects Audit
const projectsData = [
  { id: '01', name: 'portfolio-devtools', category: 'Portfolios', description: 'Developer tools portfolio with terminal aesthetic' },
  { id: '02', name: 'portfolio-fullstack', category: 'Portfolios', description: 'Fullstack product builder portfolio' },
  { id: '03', name: 'portfolio-frontend', category: 'Portfolios', description: 'Motion-first frontend engineer portfolio' },
  { id: '04', name: 'portfolio-backend', category: 'Portfolios', description: 'Backend systems editorial portfolio' },
  { id: '05', name: 'portfolio-frontend-ai', category: 'Portfolios', description: 'AI lab futuristic portfolio' },
  { id: '06', name: 'portfolio-senior-frontend', category: 'Portfolios', description: 'Swiss minimal senior frontend portfolio' },
  { id: '07', name: 'portfolio-indie-saas', category: 'Portfolios', description: 'Indie hacker authentic portfolio' },
  { id: '08', name: 'portfolio-ai-automation', category: 'Portfolios', description: 'Systems flow-based automation portfolio' },
  { id: '09', name: 'web-geographic-explorer', category: 'Web Apps', description: 'Interactive geographic data visualization' },
  { id: '10', name: 'web-time-display', category: 'Web Apps', description: 'Advanced time display with multiple zones' },
  { id: '11', name: 'web-keyboard-practice', category: 'Web Apps', description: 'Typing practice and keyboard training' },
  { id: '12', name: 'web-editorial-blog', category: 'Web Apps', description: 'Editorial-style blog platform' },
  { id: '13', name: 'web-brutalist-content', category: 'Web Apps', description: 'Brutalist design content showcase' },
  { id: '14', name: 'web-ai-research', category: 'Web Apps', description: 'AI research and documentation hub' },
  { id: '15', name: 'web-luxury-boutique', category: 'Web Apps', description: 'Luxury e-commerce boutique' },
  { id: '16', name: 'web-editorial-layouts', category: 'Web Apps', description: 'Editorial layout experiments' },
  { id: '17', name: 'web-culinary-discovery', category: 'Web Apps', description: 'Culinary discovery and recipe platform' },
  { id: '18', name: 'web-atmospheric-dashboard', category: 'Web Apps', description: 'Atmospheric weather dashboard' },
  { id: '19', name: 'web-viral-creator', category: 'Web Apps', description: 'Viral content creation tools' },
  { id: '20', name: 'web-career-navigator', category: 'Web Apps', description: 'Career navigation and job search' },
  { id: '21', name: 'web-enterprise-input', category: 'Web Apps', description: 'Enterprise form input system' },
  { id: '22', name: 'web-professional-showcase', category: 'Web Apps', description: 'Professional portfolio showcase' },
  { id: '23', name: 'web-financial-printing', category: 'Web Apps', description: 'Financial document printing system' },
  { id: '24', name: 'web-sketch-studio', category: 'Web Apps', description: 'Digital sketching and drawing studio' },
  { id: '25', name: 'game-neon-highway', category: 'Games', description: 'Neon-themed racing arcade game' },
  { id: '26', name: 'game-retro-vault', category: 'Games', description: 'Retro game collection vault' },
  { id: '27', name: 'game-world-net', category: 'Games', description: 'Network-based world exploration game' },
  { id: '28', name: 'game-squid-net', category: 'Games', description: 'Squid-inspired network challenge' },
  { id: '29', name: 'game-snake-net', category: 'Games', description: 'Network multiplayer snake game' },
  { id: '30', name: 'game-dragon-surge', category: 'Games', description: 'Dragon-themed action arcade' },
  { id: '31', name: 'game-maze-net', category: 'Games', description: 'Networked maze exploration' },
  { id: '32', name: 'game-flux-arcade', category: 'Games', description: 'Flux arcade game collection' },
  { id: '33', name: 'game-aptitude-nexus', category: 'Games', description: 'Aptitude testing puzzle game' },
  { id: '34', name: 'game-sigma-nexus', category: 'Games', description: 'Sigma strategy challenge game' },
  { id: '35', name: 'tool-quizflow-pdf-quiz-generator', category: 'Tools', description: 'PDF quiz generation workflow' },
  { id: '36', name: 'tool-vaultpass-secure-password-generator', category: 'Tools', description: 'Secure password generation tool' },
  { id: '37', name: 'tool-text-to-speech', category: 'Tools', description: 'Text to speech conversion utility' },
  { id: '38', name: 'tool-firebase-file-uploader', category: 'Tools', description: 'Firebase file upload automation' },
  { id: '39', name: 'tool-firebase-image-uploader', category: 'Tools', description: 'Firebase image upload workflow' },
  { id: '40', name: 'tool-react-image-uploader', category: 'Tools', description: 'React image upload component' },
  { id: '41', name: 'tool-firebase-auth', category: 'Tools', description: 'Firebase authentication system' },
  { id: '42', name: 'tool-facebook-login-ui', category: 'Tools', description: 'Facebook login UI component' },
  { id: '43', name: 'tool-agency-website-clone', category: 'Tools', description: 'Agency website cloning tool' },
  { id: '44', name: 'tool-github-desktop-guide', category: 'Tools', description: 'GitHub Desktop workflow guide' },
  { id: '45', name: 'starter-react-vercel', category: 'Starters', description: 'React Vercel deployment starter' },
  { id: '46', name: 'starter-ionic-react', category: 'Starters', description: 'Ionic React mobile starter' },
  { id: '47', name: 'starter-django', category: 'Starters', description: 'Django backend starter' },
  { id: '48', name: 'starter-flask', category: 'Starters', description: 'Flask microservice starter' },
  { id: '49', name: 'starter-jamstack-blog', category: 'Starters', description: 'JAMstack blog starter' },
  { id: '50', name: 'starter-react-boilerplate', category: 'Starters', description: 'React boilerplate template' },
  { id: '51', name: 'starter-codesandbox', category: 'Starters', description: 'CodeSandbox environment starter' },
  { id: '52', name: 'starter-hugo-blog', category: 'Starters', description: 'Hugo static blog starter' },
  { id: '53', name: 'starter-docusaurus-docs', category: 'Starters', description: 'Docusaurus documentation starter' },
  { id: '54', name: 'starter-gatsby-blog', category: 'Starters', description: 'Gatsby blog starter' },
  { id: '55', name: 'starter-angular-web', category: 'Starters', description: 'Angular web application starter' },
  { id: '56', name: 'starter-electron-desktop', category: 'Starters', description: 'Electron desktop app starter' },
  { id: '57', name: 'starter-python-practice', category: 'Starters', description: 'Python practice exercises' },
  { id: '58', name: 'starter-python-examples', category: 'Starters', description: 'Python code examples collection' },
  { id: '59', name: 'starter-repo-demo', category: 'Starters', description: 'Repository demonstration template' },
  { id: '60', name: 'starter-cadwork-internship', category: 'Starters', description: 'CAD work internship project' },
];

// Top 8 Featured Projects for AI Automation Lens
const featuredProjects = [
  {
    id: '01',
    name: 'AI-VIBE-Automation',
    category: 'Automation',
    description: 'Core workflow orchestration engine for the AI-VIBE-ECOSYSTEM. Multi-agent pipeline with error handling and retry logic.',
    tech: ['n8n', 'Node.js', 'Python'],
    outcome: '60+ workflows deployed',
    github: 'https://github.com/mk-knight23/AI-VIBE-Automation',
  },
  {
    id: '02',
    name: 'AI-VIBE-CLI',
    category: 'DevTools',
    description: 'Command-line interface for multi-agent orchestration. Terminal-based workflow management and monitoring.',
    tech: ['TypeScript', 'Node.js', 'CLI'],
    outcome: 'Developer productivity +40%',
    github: 'https://github.com/mk-knight23/AI-VIBE-CLI',
  },
  {
    id: '35',
    name: 'QuizFlow PDF Generator',
    category: 'Automation',
    description: 'Automated PDF quiz generation pipeline. Converts content to interactive quizzes with answer keys.',
    tech: ['Python', 'PDFKit', 'Automation'],
    outcome: 'Quiz creation time -80%',
    github: 'https://github.com/mk-knight23/tool-quizflow-pdf-quiz-generator',
  },
  {
    id: '51',
    name: 'CodeSandbox Starter',
    category: 'Starters',
    description: 'Pre-configured CodeSandbox environments for rapid prototyping. Automated dependency management.',
    tech: ['CodeSandbox', 'JavaScript', 'Templates'],
    outcome: 'Setup time reduced to seconds',
    github: 'https://github.com/mk-knight23/starter-codesandbox',
  },
  {
    id: '44',
    name: 'GitHub Desktop Guide',
    category: 'Tools',
    description: 'Interactive Git workflow guide for teams. Visual Git operations and branch management.',
    tech: ['Git', 'GitHub', 'Documentation'],
    outcome: 'Onboarding time -50%',
    github: 'https://github.com/mk-knight23/tool-github-desktop-guide',
  },
  {
    id: '21',
    name: 'Enterprise Input System',
    category: 'Web Apps',
    description: 'Enterprise-grade form validation and input processing. Real-time validation with error handling.',
    tech: ['React', 'TypeScript', 'Validation'],
    outcome: 'Form errors -90%',
    github: 'https://github.com/mk-knight23/web-enterprise-input',
  },
  {
    id: '33',
    name: 'Aptitude Nexus',
    category: 'Games',
    description: 'Gamified aptitude testing platform. Automated scoring and progress tracking system.',
    tech: ['JavaScript', 'Game Logic', 'Analytics'],
    outcome: 'Assessment automation',
    github: 'https://github.com/mk-knight23/game-aptitude-nexus',
  },
  {
    id: '08',
    name: 'Portfolio AI Automation',
    category: 'Portfolios',
    description: 'This portfolio - Systems/Flow-based design showcasing automation expertise.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    outcome: 'Self-referential showcase',
    github: 'https://github.com/mk-knight23/08-portfolio-ai-automation',
  },
];

// DOM Elements
const featuredGrid = document.getElementById('featured-grid');
const projectsGrid = document.getElementById('projects-grid');
const categoryFilters = document.getElementById('category-filters');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderFeaturedProjects();
  renderProjects('all');
  initAnimations();
  initNavigation();
  initMobileMenu();
  initSmoothScroll();
});

// Render Featured Projects
function renderFeaturedProjects() {
  if (!featuredGrid) return;

  featuredGrid.innerHTML = featuredProjects.map((project, index) => `
    <div class="workflow-card group" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-blueprint-500/10 flex items-center justify-center">
            <i data-lucide="${getIconForCategory(project.category)}" class="w-5 h-5 text-blueprint-400"></i>
          </div>
          <div>
            <h3 class="font-semibold text-slate-200 group-hover:text-blueprint-400 transition-colors">
              ${project.name}
            </h3>
            <span class="text-xs text-slate-500">${project.category}</span>
          </div>
        </div>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer"
           class="text-slate-500 hover:text-blueprint-400 transition-colors">
          <i data-lucide="github" class="w-5 h-5"></i>
        </a>
      </div>

      <p class="text-slate-400 text-sm mb-4 leading-relaxed">
        ${project.description}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tech.map(t => `
          <span class="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded font-mono">${t}</span>
        `).join('')}
      </div>

      <div class="flex items-center gap-2 pt-4 border-t border-slate-800">
        <i data-lucide="check-circle" class="w-4 h-4 text-green-400"></i>
        <span class="text-sm text-green-400">${project.outcome}</span>
      </div>
    </div>
  `).join('');

  // Re-initialize icons for dynamically added content
  lucide.createIcons();
}

// Render All Projects
function renderProjects(filter) {
  if (!projectsGrid) return;

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  projectsGrid.innerHTML = filteredProjects.map((project, index) => `
    <div class="project-card group" data-aos="fade-up" data-aos-delay="${(index % 6) * 50}">
      <div class="project-card__image">
        <div class="text-center">
          <i data-lucide="${getIconForCategory(project.category)}" class="w-8 h-8 mx-auto mb-2 text-slate-600"></i>
          <span class="text-xs text-slate-500 font-mono">${project.id}</span>
        </div>
      </div>
      <div class="project-card__content">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs text-blueprint-400 font-mono">${project.category}</span>
          <a href="https://github.com/mk-knight23/${project.name}"
             target="_blank" rel="noopener noreferrer"
             class="text-slate-500 hover:text-blueprint-400 transition-colors">
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        </div>
        <h3 class="font-medium text-slate-200 text-sm mb-1 group-hover:text-blueprint-400 transition-colors">
          ${formatProjectName(project.name)}
        </h3>
        <p class="text-xs text-slate-500 line-clamp-2">${project.description}</p>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Category Filter Handler
if (categoryFilters) {
  categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      // Update active state
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blueprint-600', 'text-white');
        btn.classList.add('bg-slate-800', 'text-slate-400');
      });
      e.target.classList.remove('bg-slate-800', 'text-slate-400');
      e.target.classList.add('active', 'bg-blueprint-600', 'text-white');

      // Filter projects
      const filter = e.target.dataset.filter;
      renderProjects(filter);
    }
  });
}

// Helper: Get Icon for Category
function getIconForCategory(category) {
  const icons = {
    'Portfolios': 'user',
    'Web Apps': 'globe',
    'Games': 'gamepad-2',
    'Tools': 'wrench',
    'Starters': 'rocket',
    'Automation': 'workflow',
    'DevTools': 'terminal',
  };
  return icons[category] || 'folder';
}

// Helper: Format Project Name
function formatProjectName(name) {
  return name
    .replace(/^(portfolio|web|game|tool|starter)-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

// Mobile Menu
function initMobileMenu() {
  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // Account for fixed header
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Navigation Active State
function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blueprint-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blueprint-400');
      }
    });
  });
}

// GSAP Animations
function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero content animation
  gsap.from('h1', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('h1 + p', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.4
  });

  // Section reveals
  gsap.utils.toArray('section').forEach((section, i) => {
    if (i === 0) return; // Skip hero

    gsap.from(section.querySelectorAll('h2, h3, p, .workflow-card, .project-card'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  });

  // Stats counter animation
  const stats = document.querySelectorAll('.text-blueprint-400.font-mono');
  stats.forEach(stat => {
    const value = stat.textContent;
    if (/^\d+/.test(value)) {
      const num = parseInt(value);
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 90%'
        },
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 1,
        onUpdate: function() {
          this.targets()[0].textContent = Math.ceil(this.targets()[0].textContent) + value.replace(/^\d+/, '');
        }
      });
    }
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.workflow-card, .project-card').forEach(el => {
    observer.observe(el);
  });
});

// Console Easter Egg
console.log('%c AI-VIBE-ECOSYSTEM v2.0 ', 'background: #0ea5e9; color: #020617; font-size: 20px; font-weight: bold; padding: 10px 20px;');
console.log('%c Automation Engineer Portfolio ', 'color: #0ea5e9; font-size: 14px;');
console.log('%c All systems operational. ', 'color: #10b981; font-size: 12px;');
