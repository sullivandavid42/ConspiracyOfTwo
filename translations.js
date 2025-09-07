// Translation system for Conspiracy Of Two website
const translations = {
    fr: {
        // Navigation
        'nav.about': 'À Propos',
        'nav.team': 'Équipe',
        'nav.wines': 'Nos Vins',
        'nav.story': 'Notre Histoire',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'L\'Art de la Vinification',
        'hero.subtitle': 'Deux passions, un terroir d\'exception en Afrique du Sud',
        'hero.cta.discover': 'Découvrir',
        'hero.cta.contact': 'Nous Contacter',
        
        // About Section
        'about.title': 'À Propos de Conspiracy Of Two',
        'about.subtitle': 'Une alliance franco-néerlandaise au service de l\'excellence viticole',
        'about.text1': 'Conspiracy Of Two naît de la rencontre de deux passions et de deux cultures. Lui, français, elle, néerlandaise, unis par l\'amour du vin et l\'envie de créer quelque chose d\'exceptionnel.',
        'about.text2': 'Notre mission est de vinifier des vins d\'exception en Afrique du Sud, en alliant les techniques traditionnelles européennes aux terroirs uniques de cette région viticole remarquable.',
        'about.feature1.title': '🌍 Terroir Unique',
        'about.feature1.text': 'Les vignobles sud-africains offrent des conditions climatiques exceptionnelles',
        'about.feature2.title': '🤝 Savoir-Faire',
        'about.feature2.text': 'L\'alliance des traditions viticoles françaises et de l\'innovation',
        'about.feature3.title': '✨ Excellence',
        'about.feature3.text': 'Des vins haut de gamme pour les connaisseurs les plus exigeants',
        
        // Team Section
        'team.title': 'Nos Fondateurs',
        'team.subtitle': 'Deux passionnés unis par l\'amour du vin et l\'excellence',
        'team.vincent.title': 'Conspirateur',
        'team.vincent.description': 'Entrepreneur viticole expérimenté, Vincent a forgé son expertise dans les plus grands domaines : E. Guigal, Joseph Drouhin, Boekenhoutskloof en Afrique du Sud. Fondateur des "Enfants du Rhône" à Condrieu (800 références) et de Lyon-Winetours, il maîtrise tous les aspects de la filière viticole, de la vinification à la commercialisation internationale. Son expérience s\'étend sur trois continents avec des passages en Nouvelle-Zélande et Australie.',
        'team.rianne.title': 'Conspiratrice',
        'team.rianne.description': 'Diplômée en viticulture et œnologie de Bordeaux Sciences Agro, Rianne a forgé son expertise dans les plus prestigieux domaines : Château Palmer, Château Smith Haut Lafitte, et actuellement au Domaine Georges Vernay à Condrieu. Sommelière certifiée ASI (médaille d\'argent), elle combine parfaitement technique viticole et excellence commerciale, ayant travaillé au célèbre restaurant Zoldering d\'Amsterdam avant de se spécialiser dans la vinification.',
        'team.specialty.vinification': 'Vinification',
        'team.specialty.export': 'Export',
        'team.specialty.elevage': 'Élevage en fûts',
        'team.specialty.assemblage': 'Assemblage',
        'team.specialty.relations': 'Relations clients',
        'team.collaboration.title': 'Une Collaboration Exceptionnelle',
        'team.collaboration.text': 'La rencontre de Vincent et Rianne dans les vignobles de Stellenbosch a donné naissance à une synergie unique. Leurs compétences complémentaires et leur vision partagée de l\'excellence font de Conspiracy Of Two bien plus qu\'une simple entreprise viticole : c\'est l\'histoire d\'une amitié et d\'une passion communes pour créer des vins d\'exception.',
        
        // Wines Section
        'wines.title': 'Nos Vins',
        'wines.subtitle': 'Une sélection rigoureuse de cépages d\'exception',
        'wines.signature.title': 'Cuvée Signature',
        'wines.signature.description': 'Un assemblage unique de Cabernet Sauvignon et Merlot, élevé en fûts de chêne français.',
        'wines.blanc.title': 'Blanc de Prestige',
        'wines.blanc.description': 'Chardonnay et Sauvignon Blanc, vinifiés selon les méthodes traditionnelles champenoises.',
        'wines.rose.title': 'Rosé d\'Été',
        'wines.rose.description': 'Un rosé délicat aux notes florales, parfait pour les moments de convivialité.',
        
        // Story Section
        'story.title': 'Notre Histoire',
        'story.text1': 'Tout a commencé par une rencontre à Condrieu, dans la vallée du Rhône, où Vincent et Rianne ont découvert leur passion commune pour l\'excellence viticole. Ayant tous deux déjà travaillé en Afrique du Sud, ils ont été séduits par le potentiel extraordinaire des terroirs sud-africains.',
        'story.text2': 'Conspiracy Of Two naît de leur rêve partagé : créer ensemble un projet de vinification d\'exception en Afrique du Sud. Plus qu\'une entreprise, c\'est l\'union de deux expertises complémentaires et d\'une vision commune de l\'excellence.',
        'story.quote': 'Ensemble, nous transformons notre passion en vins d\'exception qui racontent l\'histoire de nos terroirs.',
        
        // Contact Section
        'contact.title': 'Contactez-Nous',
        'contact.subtitle': 'Nous serions ravis d\'échanger avec vous sur nos vins et notre passion',
        'contact.info.title': 'Informations',
        'contact.info.email': '📧 Email',
        'contact.info.phone': '📱 Téléphone',
        'contact.info.address': '📍 Adresse',
        'contact.info.address.text': 'Stellenbosch, Afrique du Sud<br>Bureau Europe : Paris, France',
        'contact.form.name': 'Nom',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Sujet',
        'contact.form.subject.choose': 'Choisissez un sujet',
        'contact.form.subject.info': 'Demande d\'information',
        'contact.form.subject.partnership': 'Partenariat',
        'contact.form.subject.distribution': 'Distribution',
        'contact.form.subject.other': 'Autre',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Envoyer le Message',
        
        // Footer
        'footer.description': 'L\'excellence viticole franco-néerlandaise en Afrique du Sud',
        'footer.links': 'Liens Rapides',
        'footer.social': 'Suivez-Nous',
        'footer.copyright': '© 2024 Conspiracy Of Two. Tous droits réservés. | L\'abus d\'alcool est dangereux pour la santé, à consommer avec modération.',
        
        // Form messages
        'form.required': 'Veuillez remplir tous les champs obligatoires.',
        'form.email.invalid': 'Veuillez entrer une adresse email valide.',
        'form.sending': 'Envoi en cours...',
        'form.success': 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
    },
    
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.team': 'Team',
        'nav.wines': 'Our Wines',
        'nav.story': 'Our Story',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'The Art of Winemaking',
        'hero.subtitle': 'Two passions, one exceptional terroir in South Africa',
        'hero.cta.discover': 'Discover',
        'hero.cta.contact': 'Contact Us',
        
        // About Section
        'about.title': 'About Conspiracy Of Two',
        'about.subtitle': 'A Franco-Dutch alliance in service of viticultural excellence',
        'about.text1': 'Conspiracy Of Two was born from the meeting of two passions and two cultures. He, French, she, Dutch, united by their love of wine and the desire to create something exceptional.',
        'about.text2': 'Our mission is to craft exceptional wines in South Africa, combining traditional European techniques with the unique terroirs of this remarkable wine region.',
        'about.feature1.title': '🌍 Unique Terroir',
        'about.feature1.text': 'South African vineyards offer exceptional climatic conditions',
        'about.feature2.title': '🤝 Expertise',
        'about.feature2.text': 'The alliance of French winemaking traditions and innovation',
        'about.feature3.title': '✨ Excellence',
        'about.feature3.text': 'Premium wines for the most discerning connoisseurs',
        
        // Team Section
        'team.title': 'Our Founders',
        'team.subtitle': 'Two passionate individuals united by love of wine and excellence',
        'team.vincent.title': 'Conspirator',
        'team.vincent.description': 'Experienced wine entrepreneur, Vincent has forged his expertise in the greatest estates: E. Guigal, Joseph Drouhin, Boekenhoutskloof in South Africa. Founder of "Les Enfants du Rhône" in Condrieu (800 references) and Lyon-Winetours, he masters all aspects of the wine industry, from winemaking to international marketing. His experience spans three continents with stints in New Zealand and Australia.',
        'team.rianne.title': 'Conspirator',
        'team.rianne.description': 'Graduate in viticulture and enology from Bordeaux Sciences Agro, Rianne has forged her expertise in the most prestigious estates: Château Palmer, Château Smith Haut Lafitte, and currently at Domaine Georges Vernay in Condrieu. ASI certified sommelier (silver medal), she perfectly combines viticultural technique and commercial excellence, having worked at the renowned Zoldering restaurant in Amsterdam before specializing in winemaking.',
        'team.specialty.vinification': 'Winemaking',
        'team.specialty.export': 'Export',
        'team.specialty.elevage': 'Barrel Aging',
        'team.specialty.assemblage': 'Blending',
        'team.specialty.relations': 'Client Relations',
        'team.collaboration.title': 'An Exceptional Collaboration',
        'team.collaboration.text': 'The meeting of Vincent and Rianne in the vineyards of Stellenbosch gave birth to a unique synergy. Their complementary skills and shared vision of excellence make Conspiracy Of Two much more than a simple wine company: it\'s the story of a friendship and common passion to create exceptional wines.',
        
        // Wines Section
        'wines.title': 'Our Wines',
        'wines.subtitle': 'A rigorous selection of exceptional grape varieties',
        'wines.signature.title': 'Signature Cuvée',
        'wines.signature.description': 'A unique blend of Cabernet Sauvignon and Merlot, aged in French oak barrels.',
        'wines.blanc.title': 'Prestige White',
        'wines.blanc.description': 'Chardonnay and Sauvignon Blanc, vinified according to traditional Champagne methods.',
        'wines.rose.title': 'Summer Rosé',
        'wines.rose.description': 'A delicate rosé with floral notes, perfect for convivial moments.',
        
        // Story Section
        'story.title': 'Our Story',
        'story.text1': 'It all began with a meeting in Condrieu, in the Rhône Valley, where Vincent and Rianne discovered their shared passion for viticultural excellence. Both having already worked in South Africa, they were captivated by the extraordinary potential of South African terroirs.',
        'story.text2': 'Conspiracy Of Two was born from their shared dream: to create together an exceptional winemaking project in South Africa. More than a company, it\'s the union of two complementary expertises and a common vision of excellence.',
        'story.quote': 'Together, we transform our passion into exceptional wines that tell the story of our terroirs.',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'We would be delighted to discuss our wines and passion with you',
        'contact.info.title': 'Information',
        'contact.info.email': '📧 Email',
        'contact.info.phone': '📱 Phone',
        'contact.info.address': '📍 Address',
        'contact.info.address.text': 'Stellenbosch, South Africa<br>European Office: Paris, France',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.subject.choose': 'Choose a subject',
        'contact.form.subject.info': 'Information request',
        'contact.form.subject.partnership': 'Partnership',
        'contact.form.subject.distribution': 'Distribution',
        'contact.form.subject.other': 'Other',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        
        // Footer
        'footer.description': 'Franco-Dutch viticultural excellence in South Africa',
        'footer.links': 'Quick Links',
        'footer.social': 'Follow Us',
        'footer.copyright': '© 2024 Conspiracy Of Two. All rights reserved. | Alcohol abuse is dangerous for health, consume in moderation.',
        
        // Form messages
        'form.required': 'Please fill in all required fields.',
        'form.email.invalid': 'Please enter a valid email address.',
        'form.sending': 'Sending...',
        'form.success': 'Thank you for your message! We will respond as soon as possible.'
    },
    
    nl: {
        // Navigation
        'nav.about': 'Over Ons',
        'nav.team': 'Team',
        'nav.wines': 'Onze Wijnen',
        'nav.story': 'Ons Verhaal',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'De Kunst van Wijnmaken',
        'hero.subtitle': 'Twee passies, één uitzonderlijk terroir in Zuid-Afrika',
        'hero.cta.discover': 'Ontdekken',
        'hero.cta.contact': 'Contact Opnemen',
        
        // About Section
        'about.title': 'Over Conspiracy Of Two',
        'about.subtitle': 'Een Frans-Nederlandse alliantie ten dienste van wijnbouwkundige excellentie',
        'about.text1': 'Conspiracy Of Two ontstond uit de ontmoeting van twee passies en twee culturen. Hij, Frans, zij, Nederlands, verenigd door hun liefde voor wijn en de wens om iets uitzonderlijks te creëren.',
        'about.text2': 'Onze missie is het maken van uitzonderlijke wijnen in Zuid-Afrika, door traditionele Europese technieken te combineren met de unieke terroirs van deze opmerkelijke wijnstreek.',
        'about.feature1.title': '🌍 Uniek Terroir',
        'about.feature1.text': 'Zuid-Afrikaanse wijngaarden bieden uitzonderlijke klimatologische omstandigheden',
        'about.feature2.title': '🤝 Vakmanschap',
        'about.feature2.text': 'De alliantie van Franse wijnbouwtradities en innovatie',
        'about.feature3.title': '✨ Excellentie',
        'about.feature3.text': 'Premium wijnen voor de meest veeleisende kenners',
        
        // Team Section
        'team.title': 'Onze Oprichters',
        'team.subtitle': 'Twee gepassioneerde individuen verenigd door liefde voor wijn en excellentie',
        'team.vincent.title': 'Samenzweerder',
        'team.vincent.description': 'Ervaren wijnondernemer, Vincent heeft zijn expertise opgebouwd in de grootste domeinen: E. Guigal, Joseph Drouhin, Boekenhoutskloof in Zuid-Afrika. Oprichter van "Les Enfants du Rhône" in Condrieu (800 referenties) en Lyon-Winetours, hij beheerst alle aspecten van de wijnindustrie, van wijnmaking tot internationale marketing. Zijn ervaring strekt zich uit over drie continenten met passages in Nieuw-Zeeland en Australië.',
        'team.rianne.title': 'Samenzweerster',
        'team.rianne.description': 'Afgestudeerd in wijnbouw en oenologie aan Bordeaux Sciences Agro, heeft Rianne haar expertise opgebouwd in de meest prestigieuze domeinen: Château Palmer, Château Smith Haut Lafitte, en momenteel bij Domaine Georges Vernay in Condrieu. ASI gecertificeerd sommelier (zilveren medaille), zij combineert perfect wijnbouwtechniek en commerciële excellentie, na gewerkt te hebben in het gerenommeerde restaurant Zoldering in Amsterdam voordat zij zich specialiseerde in wijnmaking.',
        'team.specialty.vinification': 'Wijnmaking',
        'team.specialty.export': 'Export',
        'team.specialty.elevage': 'Vatrijping',
        'team.specialty.assemblage': 'Assemblage',
        'team.specialty.relations': 'Klantrelaties',
        'team.collaboration.title': 'Een Uitzonderlijke Samenwerking',
        'team.collaboration.text': 'De ontmoeting van Vincent en Rianne in de wijngaarden van Stellenbosch gaf geboorte aan een unieke synergie. Hun complementaire vaardigheden en gedeelde visie op excellentie maken Conspiracy Of Two veel meer dan alleen een wijnbedrijf: het is het verhaal van een vriendschap en gemeenschappelijke passie om uitzonderlijke wijnen te creëren.',
        
        // Wines Section
        'wines.title': 'Onze Wijnen',
        'wines.subtitle': 'Een rigoureuze selectie van uitzonderlijke druivenrassen',
        'wines.signature.title': 'Signature Cuvée',
        'wines.signature.description': 'Een unieke blend van Cabernet Sauvignon en Merlot, gerijpt in Franse eiken vaten.',
        'wines.blanc.title': 'Prestige Wit',
        'wines.blanc.description': 'Chardonnay en Sauvignon Blanc, gevinifieerd volgens traditionele Champagne-methoden.',
        'wines.rose.title': 'Zomer Rosé',
        'wines.rose.description': 'Een delicate rosé met florale noten, perfect voor gezellige momenten.',
        
        // Story Section
        'story.title': 'Ons Verhaal',
        'story.text1': 'Het begon allemaal met een ontmoeting in Condrieu, in de Rhône-vallei, waar Vincent en Rianne hun gedeelde passie voor wijnbouwkundige excellentie ontdekten. Beiden hadden al in Zuid-Afrika gewerkt en waren gefascineerd door het buitengewone potentieel van Zuid-Afrikaanse terroirs.',
        'story.text2': 'Conspiracy Of Two ontstond uit hun gedeelde droom: samen een uitzonderlijk wijnmakingsproject creëren in Zuid-Afrika. Meer dan een bedrijf, het is de vereniging van twee complementaire expertises en een gemeenschappelijke visie op excellentie.',
        'story.quote': 'Samen transformeren we onze passie in uitzonderlijke wijnen die het verhaal van onze terroirs vertellen.',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': 'We zouden graag met u praten over onze wijnen en passie',
        'contact.info.title': 'Informatie',
        'contact.info.email': '📧 Email',
        'contact.info.phone': '📱 Telefoon',
        'contact.info.address': '📍 Adres',
        'contact.info.address.text': 'Stellenbosch, Zuid-Afrika<br>Europees Kantoor: Parijs, Frankrijk',
        'contact.form.name': 'Naam',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Onderwerp',
        'contact.form.subject.choose': 'Kies een onderwerp',
        'contact.form.subject.info': 'Informatieverzoek',
        'contact.form.subject.partnership': 'Partnerschap',
        'contact.form.subject.distribution': 'Distributie',
        'contact.form.subject.other': 'Anders',
        'contact.form.message': 'Bericht',
        'contact.form.submit': 'Bericht Verzenden',
        
        // Footer
        'footer.description': 'Frans-Nederlandse wijnbouwkundige excellentie in Zuid-Afrika',
        'footer.links': 'Snelle Links',
        'footer.social': 'Volg Ons',
        'footer.copyright': '© 2024 Conspiracy Of Two. Alle rechten voorbehouden. | Alcoholmisbruik is gevaarlijk voor de gezondheid, consumeer met mate.',
        
        // Form messages
        'form.required': 'Vul alle verplichte velden in.',
        'form.email.invalid': 'Voer een geldig emailadres in.',
        'form.sending': 'Verzenden...',
        'form.success': 'Bedankt voor uw bericht! We zullen zo snel mogelijk reageren.'
    }
};

// Current language state
let currentLanguage = 'fr';

// Translation function
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Change language function
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('conspiracyoftwo-language', lang);
        updatePageContent();
        updateLanguageSelector();
    }
}

// Update all page content
function updatePageContent() {
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translation;
        } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    });
    
    // Update document title
    document.title = `Conspiracy Of Two - ${t('hero.subtitle')}`;
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Update language selector active state
function updateLanguageSelector() {
    const selectors = document.querySelectorAll('.language-selector button');
    selectors.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Initialize language system
function initializeLanguageSystem() {
    // Get saved language or default to French
    const savedLanguage = localStorage.getItem('conspiracyoftwo-language') || 'fr';
    changeLanguage(savedLanguage);
    
    // Add event listeners to language selector buttons
    const languageButtons = document.querySelectorAll('.language-selector button');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, changeLanguage, initializeLanguageSystem };
}
