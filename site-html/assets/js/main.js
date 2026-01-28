// ============================================
// VITRINE CONSULTING - JavaScript Principal
// ============================================

// Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Active Navigation Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Video Controls
function initVideoControls() {
    const videoSection = document.querySelector('.video-section');
    if (!videoSection) return;
    
    const video = videoSection.querySelector('video');
    const playButton = videoSection.querySelector('.video-controls');
    
    if (video && playButton) {
        playButton.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playButton.innerHTML = '⏸';
            } else {
                video.pause();
                playButton.innerHTML = '▶';
            }
        });
        
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playButton.innerHTML = '⏸';
            } else {
                video.pause();
                playButton.innerHTML = '▶';
            }
        });
    }
}

// Animate on Scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section, .project-card, .metric-card').forEach(el => {
        observer.observe(el);
    });
}

// Lightbox Gallery
function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);
    
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    // Open lightbox
    document.querySelectorAll('[data-lightbox]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href') || this.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Project Filter
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
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
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.getAttribute('data-suffix') || '';
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = formatNumber(target) + suffix;
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(start)) + suffix;
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// Initialize counters when in view
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    initVideoControls();
    initScrollAnimations();
    initLightbox();
    initProjectFilter();
    initSmoothScroll();
    initCounters();
    initLanguageSwitcher();
});

// =============================
// Internationalisation (FR/EN/DE)
// =============================

const VitrineTranslations = {
    fr: {
        'video.label': "Présentation de l'agence et de nos projets",
        'nav.home': 'Accueil',
        'nav.agency': 'Agence',
        'nav.projects': 'Projets',
        'nav.gallery': 'Galerie',
        'nav.clients': 'Clients & Partenaires',
        'nav.contact': 'Contact',

        'hero.title': 'Transformons votre communication en <span class="brand-green">impact culturel</span>',
        'hero.subtitle': 'Où la stratégie rencontre la créativité. Votre vision, amplifiée par notre expertise dans le paysage médiatique camerounais.',
        'hero.cta_primary': 'Consultation Gratuite',
        'hero.cta_secondary': 'Voir nos réalisations',

        'metrics.visits': 'Visites',
        'metrics.audience': 'Audience',
        'metrics.projects': 'Projets',
        'metrics.partners': 'Partenaires',

        'featured.title': 'Projets en Vedette',

        'projects.icilabouf.category': 'Média Jeunesse',
        'projects.icilabouf.description': "Plateforme média innovante ciblant les jeunes camerounais avec du contenu culturel engageant et des événements immersifs qui créent des connexions authentiques.",

        'projects.afterbac.category': 'Éducation & Orientation',
        'projects.afterbac.description': "Solution complète d'orientation post-bac aidant les étudiants camerounais à naviguer leurs choix académiques avec confiance et clarté.",

        'projects.pme.category': 'Communication Corporate',
        'projects.pme.title': 'Campagne Stratégique PME',
        'projects.pme.description': "Transformation digitale complète pour une PME camerounaise, incluant stratégie de contenu, présence sociale et événements de lancement.",

        'mission.title': 'Notre Mission',
        'mission.paragraph1': 'Chez VITRINE CONSULTING, nous croyons que chaque marque a une histoire unique à raconter. Notre mission est de transformer ces histoires en expériences mémorables qui résonnent avec votre audience.',
        'mission.paragraph2': 'Nous combinons créativité, stratégie et expertise technique pour créer des solutions de communication qui génèrent un impact réel et mesurable.',

        'trust.title': 'Ils nous font confiance',

        'cta.title': 'Prêt à transformer votre communication ?',
        'cta.text': 'Discutons de votre projet et découvrons comment nous pouvons créer un impact ensemble.',
        'cta.button': 'Prendre contact',

        'footer.about': 'Transformons ensemble votre communication en impact culturel. Expertise stratégique et créative au service de votre vision.',
        'footer.navigation.title': 'Navigation',
        'footer.navigation.home': 'Accueil',
        'footer.navigation.agency': 'Agence / Services',
        'footer.navigation.projects': 'Projets',
        'footer.navigation.gallery': 'Galerie',
        'footer.navigation.clients': 'Clients & Partenaires',
        'footer.navigation.contact': 'Contact',
        'footer.legal.title': 'Légal',
        'footer.legal.mentions': 'Mentions Légales',
        'footer.legal.privacy': 'Politique de Confidentialité',
        'footer.copyright': '© 2026 VITRINE CONSULTING. Tous droits réservés.'
    },
    en: {
        'video.label': "Presentation of the agency and our projects",
        'nav.home': 'Home',
        'nav.agency': 'Agency',
        'nav.projects': 'Projects',
        'nav.gallery': 'Gallery',
        'nav.clients': 'Clients & Partners',
        'nav.contact': 'Contact',

        'hero.title': 'Let’s turn your communication into <span class="brand-green">cultural impact</span>',
        'hero.subtitle': 'Where strategy meets creativity. Your vision, amplified by our expertise in the Cameroonian media landscape.',
        'hero.cta_primary': 'Free Consultation',
        'hero.cta_secondary': 'See our work',

        'metrics.visits': 'Visits',
        'metrics.audience': 'Audience',
        'metrics.projects': 'Projects',
        'metrics.partners': 'Partners',

        'featured.title': 'Featured Projects',

        'projects.icilabouf.category': 'Youth Media',
        'projects.icilabouf.description': 'An innovative media platform targeting young Cameroonians with engaging cultural content and immersive events that create authentic connections.',

        'projects.afterbac.category': 'Education & Guidance',
        'projects.afterbac.description': 'A complete post‑baccalaureate guidance solution helping Cameroonian students navigate their academic choices with confidence and clarity.',

        'projects.pme.category': 'Corporate Communication',
        'projects.pme.title': 'Strategic SME Campaign',
        'projects.pme.description': 'End‑to‑end digital transformation for a Cameroonian SME, including content strategy, social presence, and launch events.',

        'mission.title': 'Our Mission',
        'mission.paragraph1': 'At VITRINE CONSULTING, we believe every brand has a unique story to tell. Our mission is to turn those stories into memorable experiences that resonate with your audience.',
        'mission.paragraph2': 'We combine creativity, strategy, and technical expertise to design communication solutions that create real, measurable impact.',

        'trust.title': 'They trust us',

        'cta.title': 'Ready to transform your communication?',
        'cta.text': 'Let’s talk about your project and discover how we can create impact together.',
        'cta.button': 'Get in touch',

        'footer.about': 'Let’s transform your communication into cultural impact. Strategic and creative expertise at the service of your vision.',
        'footer.navigation.title': 'Navigation',
        'footer.navigation.home': 'Home',
        'footer.navigation.agency': 'Agency / Services',
        'footer.navigation.projects': 'Projects',
        'footer.navigation.gallery': 'Gallery',
        'footer.navigation.clients': 'Clients & Partners',
        'footer.navigation.contact': 'Contact',
        'footer.legal.title': 'Legal',
        'footer.legal.mentions': 'Legal Notice',
        'footer.legal.privacy': 'Privacy Policy',
        'footer.copyright': '© 2026 VITRINE CONSULTING. All rights reserved.'
    },
    de: {
        'video.label': 'Präsentation der Agentur und unserer Projekte',
        'nav.home': 'Startseite',
        'nav.agency': 'Agentur',
        'nav.projects': 'Projekte',
        'nav.gallery': 'Galerie',
        'nav.clients': 'Kunden & Partner',
        'nav.contact': 'Kontakt',

        'hero.title': 'Wir verwandeln Ihre Kommunikation in <span class="brand-green">kulturelle Wirkung</span>',
        'hero.subtitle': 'Wo Strategie auf Kreativität trifft. Ihre Vision, verstärkt durch unsere Expertise in der kamerunischen Medienlandschaft.',
        'hero.cta_primary': 'Kostenlose Beratung',
        'hero.cta_secondary': 'Unsere Projekte ansehen',

        'metrics.visits': 'Besuche',
        'metrics.audience': 'Publikum',
        'metrics.projects': 'Projekte',
        'metrics.partners': 'Partner',

        'featured.title': 'Ausgewählte Projekte',

        'projects.icilabouf.category': 'Jugendmedien',
        'projects.icilabouf.description': 'Innovative Medienplattform für junge Menschen in Kamerun mit spannendem Kultur‑Content und immersiven Events, die echte Verbindungen schaffen.',

        'projects.afterbac.category': 'Bildung & Orientierung',
        'projects.afterbac.description': 'Umfassende Orientierungslösung nach dem Abitur, die kamerunischen Studierenden hilft, ihre akademischen Entscheidungen sicher und klar zu treffen.',

        'projects.pme.category': 'Unternehmenskommunikation',
        'projects.pme.title': 'Strategische KMU‑Kampagne',
        'projects.pme.description': 'Komplette digitale Transformation für ein kamerunisches KMU, inklusive Content‑Strategie, Social‑Media‑Präsenz und Launch‑Events.',

        'mission.title': 'Unsere Mission',
        'mission.paragraph1': 'Bei VITRINE CONSULTING glauben wir, dass jede Marke eine einzigartige Geschichte zu erzählen hat. Unsere Mission ist es, diese Geschichten in unvergessliche Erlebnisse zu verwandeln, die bei Ihrem Publikum Anklang finden.',
        'mission.paragraph2': 'Wir verbinden Kreativität, Strategie und technisches Know‑how, um Kommunikationslösungen zu entwickeln, die echte und messbare Wirkung erzielen.',

        'trust.title': 'Sie vertrauen uns',

        'cta.title': 'Bereit, Ihre Kommunikation zu verändern?',
        'cta.text': 'Lassen Sie uns über Ihr Projekt sprechen und herausfinden, wie wir gemeinsam Wirkung erzielen können.',
        'cta.button': 'Kontakt aufnehmen',

        'footer.about': 'Lassen Sie uns Ihre Kommunikation in kulturelle Wirkung verwandeln. Strategische und kreative Expertise im Dienst Ihrer Vision.',
        'footer.navigation.title': 'Navigation',
        'footer.navigation.home': 'Startseite',
        'footer.navigation.agency': 'Agentur / Services',
        'footer.navigation.projects': 'Projekte',
        'footer.navigation.gallery': 'Galerie',
        'footer.navigation.clients': 'Kunden & Partner',
        'footer.navigation.contact': 'Kontakt',
        'footer.legal.title': 'Rechtliches',
        'footer.legal.mentions': 'Impressum',
        'footer.legal.privacy': 'Datenschutzrichtlinie',
        'footer.copyright': '© 2026 VITRINE CONSULTING. Alle Rechte vorbehalten.'
    }
};

function applyTranslations(lang) {
    const dict = VitrineTranslations[lang] || VitrineTranslations.fr;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = dict[key];
        if (!value) return;

        // Autoriser du HTML pour certains textes (titre avec span, etc.)
        if (value.includes('<')) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });
}

function initLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    if (!buttons.length) {
        // Même sans boutons, appliquer la langue sauvegardée si besoin
        const savedLang = localStorage.getItem('vc_lang') || 'fr';
        applyTranslations(savedLang);
        return;
    }

    const savedLang = localStorage.getItem('vc_lang') || 'fr';

    function setLang(lang) {
        const finalLang = VitrineTranslations[lang] ? lang : 'fr';
        localStorage.setItem('vc_lang', finalLang);
        applyTranslations(finalLang);
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === finalLang);
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLang(btn.dataset.lang);
        });
    });

    setLang(savedLang);
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    // Email validation
    const email = form.querySelector('input[type="email"]');
    if (email && email.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            isValid = false;
            email.classList.add('error');
        }
    }
    
    return isValid;
}

// Export functions for use in other scripts
window.VitrineConsulting = {
    validateForm,
    animateCounter,
    formatNumber
};
