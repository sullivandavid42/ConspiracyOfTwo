// Loading screen functionality
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen functionality
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after animation completes
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800);
    }, 4000); // Total animation duration: 4 seconds


// Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification(t('form.required'), 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification(t('form.email.invalid'), 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = t('form.sending');
            submitButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                showNotification(t('form.success'), 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature, .wine-card, .story-content, .contact-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const brandTitle = document.querySelector('.nav-brand h1');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        brandTitle.style.color = '#000000'; // Noir sur fond blanc
    } else {
        header.style.background = '#000000';
        header.style.backdropFilter = 'none';
        brandTitle.style.color = '#FFFFFF'; // Blanc sur fond noir
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-placeholder');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});

// Gallery functionality for team section
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullImageSrc = this.getAttribute('data-full');
            const member = this.closest('.team-member');
            const mainImage = member.querySelector('.gallery-main-image');
            
            // Update main image
            mainImage.src = fullImageSrc;
            
            // Update active thumbnail
            const allThumbnails = member.querySelectorAll('.thumbnail');
            allThumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
            
            // Add fade effect
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 150);
        });
    });
});

// Lightbox functionality for gallery images
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-main-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            createLightbox(this.src, this.alt);
        });
    });
});

function createLightbox(imageSrc, imageAlt) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="${imageAlt}" class="lightbox-image">
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    // Add styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    lightboxContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    lightboxImage.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    const closeButton = lightbox.querySelector('.lightbox-close');
    closeButton.style.cssText = `
        position: absolute;
        top: -40px;
        right: -40px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Close functionality
    function closeLightbox() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        }, 300);
    }
    
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Section Navigator
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navigator = document.getElementById('sectionNavigator');
    let currentSectionIndex = 0;

    if (navigator && sections.length > 0) {
        navigator.addEventListener('click', function() {
            currentSectionIndex = (currentSectionIndex + 1) % sections.length;
            sections[currentSectionIndex].scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });

        // Update current section on scroll
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                
                sections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSectionIndex = index;
                    }
                });
            }, 100);
        });
    }
});

// Initialize language system// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen functionality
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after animation completes
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 4000); // Total animation duration: 4 seconds
    }
    // Initialize language system
    if (typeof initializeLanguageSystem === 'function') {
        initializeLanguageSystem();
    }
});

// Add CSS for focused form groups
const style = document.createElement('style');
style.textContent = `
    .form-group.focused label {
        color: var(--primary-color);
        transform: translateY(-2px);
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    // Funding toggle buttons for mobile
    const fundingToggleBtns = document.querySelectorAll('.funding-toggle-btn');
    
    fundingToggleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const card = this.closest('.funding-card');
            card.classList.toggle('expanded');
            
            // Update button text
            const currentLang = localStorage.getItem('conspiracyoftwo-language') || 'fr';
            let seeMoreText = 'Voir +';
            let seeLessText = 'Voir -';
            
            if (currentLang === 'en') {
                seeMoreText = 'See more';
                seeLessText = 'See less';
            } else if (currentLang === 'nl') {
                seeMoreText = 'Meer zien';
                seeLessText = 'Minder zien';
            }
            
            if (card.classList.contains('expanded')) {
                this.textContent = seeLessText;
            } else {
                this.textContent = seeMoreText;
            }
        });
    });

    // Funding cards click to scroll to contact form
    const fundingCards = document.querySelectorAll('.funding-card');
    const contactSection = document.getElementById('contact');
    const messageTextarea = document.getElementById('message');
        
    if (fundingCards.length > 0 && contactSection && messageTextarea) {
        fundingCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                // Don't scroll if clicking on toggle button
                if (e.target.classList.contains('funding-toggle-btn')) {
                    return;
                }
                // Get the pack name from the card
                const packNameElement = card.querySelector('.funding-name');
                if (packNameElement) {
                    const packName = packNameElement.textContent.trim();
                    
                    // Get current language
                    const currentLang = localStorage.getItem('conspiracyoftwo-language') || 'fr';
                    
                    // Set message based on language
                    let message = '';
                    if (currentLang === 'fr') {
                        message = `Je suis intéressé par le pack "${packName}".\n\n`;
                    } else if (currentLang === 'en') {
                        message = `I am interested in the "${packName}" package.\n\n`;
                    } else if (currentLang === 'nl') {
                        message = `Ik ben geïnteresseerd in het "${packName}" pakket.\n\n`;
                    }
                    
                    messageTextarea.value = message;
                }
                
                // Scroll to contact section
                contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus on the message textarea after scroll
                setTimeout(() => {
                    messageTextarea.focus();
                    // Move cursor to end of text
                    messageTextarea.setSelectionRange(messageTextarea.value.length, messageTextarea.value.length);
                }, 800);
            });
        });
    }

    // Crowdfunding contact button scroll to contact section
    const crowdfundingContactBtn = document.querySelector('.crowdfunding-contact');
    
    if (crowdfundingContactBtn) {
        crowdfundingContactBtn.addEventListener('click', function() {
            const contactSectionTarget = document.getElementById('contact');
            if (contactSectionTarget) {
                contactSectionTarget.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Contact form submission with Web3Forms
    const contactForm = document.getElementById('contactForm');
    const contactFormMessage = document.getElementById('contactFormMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('.form-submit');
            
            // Disable button during submission
            submitButton.disabled = true;
            submitButton.textContent = '...';
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    contactFormMessage.textContent = t('newsletter.success'); // Réutilise la traduction
                    contactFormMessage.className = 'form-message success';
                    contactForm.reset();
                } else {
                    contactFormMessage.textContent = t('newsletter.error');
                    contactFormMessage.className = 'form-message error';
                }
            } catch (error) {
                contactFormMessage.textContent = t('newsletter.error');
                contactFormMessage.className = 'form-message error';
            }
            
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = t('contact.form.submit');
            
            // Clear message after 5 seconds
            setTimeout(() => {
                contactFormMessage.textContent = '';
                contactFormMessage.className = 'form-message';
            }, 5000);
        });
    }

    // Newsletter form submission with Web3Forms
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(newsletterForm);
            const submitButton = newsletterForm.querySelector('.newsletter-button');
            
            // Disable button during submission
            submitButton.disabled = true;
            const originalText = submitButton.textContent;
            submitButton.textContent = '...';
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    newsletterMessage.textContent = t('newsletter.success');
                    newsletterMessage.className = 'newsletter-message success';
                    newsletterForm.reset();
                } else {
                    newsletterMessage.textContent = t('newsletter.error');
                    newsletterMessage.className = 'newsletter-message error';
                }
            } catch (error) {
                newsletterMessage.textContent = t('newsletter.error');
                newsletterMessage.className = 'newsletter-message error';
            }
            
            // Re-enable button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Clear message after 5 seconds
            setTimeout(() => {
                newsletterMessage.textContent = '';
                newsletterMessage.className = 'newsletter-message';
            }, 5000);
        });
    }
});
