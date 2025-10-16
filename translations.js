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
        'hero.title': 'Aucune règle, juste l\'expression',
        'hero.subtitle': 'vins de Vincent Pontet & Rianne Ogink',
        'hero.cta.discover': 'Explorer',
        'hero.cta.contact': 'Nous contacter',
        
        // About Section
        'about.title': 'CONSPIRACY OF TWO',
        'about.subtitle': 'Quand deux chemins se croisent, le vin conspire',
        'about.text1': 'Conspiracy Of Two naît de la rencontre de deux passions et de deux cultures. Lui, français, elle, néerlandaise, unis par l\'amour du vin et l\'envie de créer quelque chose d\'exceptionnel.',
        'about.text2': 'Notre mission est de vinifier des vins d\'exception en Afrique du Sud, en alliant les techniques traditionnelles européennes aux terroirs uniques de cette région viticole remarquable.',
        
        // Team Section
        'team.title': 'Nos Fondateurs',
        'team.subtitle': 'Deux passionnés unis par l\'amour du vin et l\'excellence',
        'team.vincent.title': 'Vincent Pontet',
        'team.vincent.description': 'Né et élevé à Condrieu (France), Vincent a appris son métier dans des caves de classe mondiale — d\'E. Guigal dans le Rhône à Joseph Drouhin en Bourgogne, Giesen en Nouvelle-Zélande, Bimbadgen en Australie et Boekenhoutskloof en Afrique du Sud. Aujourd\'hui, il partage ses connaissances à travers Lyon Winetours et son bar à vins Les Enfants du Rhône. Son coup de cœur ? Le Viognier bien sûr.',
        'team.rianne.title': 'Rianne Ogink',
        'team.rianne.description': 'Ancienne sommelière au restaurant étoilé Michelin Zoldering à Amsterdam. Rianne a voyagé à travers le monde pour explorer les régions viticoles tout en obtenant son diplôme WSET (niveau 4). Après une expérience pratique au Château Smith Haut Lafitte, Château Palmer à Bordeaux, et Damascene en Afrique du Sud, elle a travaillé (jusqu\'à récemment) comme assistante vigneronne au célèbre domaine Georges Vernay à Condrieu. Sa passion ? La Syrah des coteaux escarpés.',
        
        // Conspiracy of Many Section
        'conspiracy.title': 'CONSPIRACY OF MANY',
        'conspiracy.subtitle': 'Une conspiration que vous voudrez rejoindre',
        'conspiracy.intro': 'Faites partie de notre conspiration !',
        'conspiracy.text1': 'Le vin, c\'est plus qu\'une boisson – ce sont des gens, un lieu et un moment. Ce sont des souvenirs et des rêves capturés dans une bouteille. Conspiracy of Two est notre façon de nous exprimer à travers le vin.',
        'conspiracy.text2': 'Après des années d\'apprentissage, de dégustation et de travail dans différents coins du monde viticole, nous sommes prêts à franchir la prochaine étape : créer des vins qui reflètent notre propre vision. Pour nous, il s\'agit de liberté, de créativité et surtout de vin de qualité que nous aimons boire.',
        'conspiracy.text3': 'En janvier 2026, nous partons pour la région renommée du Swartland en Afrique du Sud. Là, nous nous approvisionnerons en Chenin Blanc, Viognier et Syrah de haute qualité auprès de vignerons de confiance pour élaborer notre premier millésime. Un an plus tard, nous serons de retour pour la mise en bouteille. Peu après, au printemps 2027, nous serons prêts à partager les vins avec vous !',
        'conspiracy.text4': 'C\'est un long voyage avant que les premières gorgées puissent être prises, mais cela en vaudra la peine. Avec votre soutien, nous pouvons donner vie à Conspiracy of Two. Voici comment vous pouvez nous aider :',
        'conspiracy.support.title': 'SOUTENEZ-NOUS PAR DONATION',
        'conspiracy.support.description': 'Cet argent sera dépensé pour les raisins, la location de cave, les fûts, etc.',
        'conspiracy.support.disclaimer': 'Avertissement : Les vins seront disponibles au printemps 2027',
        'conspiracy.toast.title': 'Un toast de loin',
        'conspiracy.toast.description': 'Chaque euro est une grande aide ! Votre nom sera noté sur l\'un de nos fûts. Vous recevrez des mises à jour exclusives et des images en coulisses par e-mail.',
        'conspiracy.necessities.title': 'Nécessités de conspiration',
        'conspiracy.necessities.description': 'Porte-clés, tire-bouchon, sac en lin, T-shirt',
        'conspiracy.preorder.title': 'PRÉ-COMMANDEZ NOS BOUTEILLES',
        'conspiracy.firstpour.title': 'Le pack première dégustation',
        'conspiracy.firstpour.description': 'Avec explication',
        'conspiracy.firstpour.mix3': 'Caisse mixte 3 bouteilles',
        'conspiracy.firstpour.mix6': 'Caisse mixte 6 bouteilles',
        'conspiracy.firstpour.mix12': 'Caisse mixte 12 bouteilles',
        'conspiracy.experience.title': 'VIVEZ LA CONSPIRATION',
        'conspiracy.winemakers.title': 'Le pack vignerons',
        'conspiracy.winemakers.day': 'Passez une journée à visiter avec nous à Condrieu, France, pour découvrir la version européenne du Viognier et de la Syrah. Déjeuner et transport depuis Lyon inclus.',
        'conspiracy.winemakers.tour': 'Passez 5 jours en visite privée avec nous. Nous découvrirons les régions viticoles d\'Afrique du Sud pour découvrir nos cépages à travers différentes dégustations et visites, hôtel, transport et déjeuners inclus (billets d\'avion exclus).',
        'conspiracy.sommeliers.title': 'Le pack sommeliers',
        'conspiracy.sommeliers.description': 'Profitez d\'un dîner exclusif avec nous à Condrieu (France) ou en Afrique du Sud (frais de voyage non inclus) avec des vins exclusifs de Viognier, Chenin Blanc et Syrah. Maximum 6 personnes par réservation',
        'conspiracy.barrel.title': 'SOYEZ LA CONSPIRATION',
        'conspiracy.barrel.description': 'Achetez votre fût (environ 250 bouteilles de vin au choix) et obtenez votre bouteille avec caisse spécialisée',
        'conspiracy.creative.title': 'FAÇONS CRÉATIVES DE REJOINDRE LA CONSPIRATION',
        'conspiracy.creative.description': 'Il pourrait y avoir une autre façon de nous aider. Pensez par exemple à :',
        'conspiracy.creative.list1': 'Présenter nos vins à vos amis',
        'conspiracy.creative.list2': 'Importer nos vins',
        'conspiracy.creative.list3': 'Écrire sur notre parcours de conspiration viticole',
        'conspiracy.creative.list4': 'Montage professionnel d\'images et de vidéos',
        'conspiracy.creative.list5': 'Conseils juridiques/comptables',
        'conspiracy.shipping': '*Tous les vins seront expédiés avec assurance et suivi, frais d\'expédition non inclus',
        'conspiracy.cta': 'Veuillez cliquer sur votre façon préférée de soutenir et laisser vos coordonnées pour que nous puissions vous contacter !',
        
        // Wines Section
        'wines.title': 'NOS VINS',
        'wines.tagline': 'Chenin Blanc, Viognier et Syrah élaborés en Afrique du Sud, conspiré à travers le monde',
        'wines.coming.title': 'Bientôt révélés',
        'wines.coming.description': 'Voulez-vous être les premiers à savoir ? Suivez le journal de nos vignerons \'Fresh Conspiracies\'',
        'wines.journal.btn': 'Fresh Conspiracies',
        'wines.claim.btn': 'Réclamez vos bouteilles',
        
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
        'contact.form.funding': 'Option de financement participatif',
        'contact.form.funding.choose': 'Sélectionnez une option (optionnel)',
        'contact.form.funding.toast': 'Un toast de loin (€montant libre)',
        'contact.form.funding.necessities': 'Nécessités de conspiration (€50)',
        'contact.form.funding.mix3': 'Pack première dégustation - 3 bouteilles (€120)',
        'contact.form.funding.mix6': 'Pack première dégustation - 6 bouteilles (€200)',
        'contact.form.funding.mix12': 'Pack première dégustation - 12 bouteilles (€370)',
        'contact.form.funding.winemakers-day': 'Pack vignerons - Journée Condrieu (€450 p.p.)',
        'contact.form.funding.winemakers-tour': 'Pack vignerons - 5 jours Afrique du Sud (€5000 p.p.)',
        'contact.form.funding.sommeliers': 'Pack sommeliers - Dîner exclusif (€200 p.p.)',
        'contact.form.funding.barrel': 'Achat de fût complet (€6900)',
        
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
        'hero.title': 'No rules, just expression',
        'hero.subtitle': 'wines by Vincent Pontet & Rianne Ogink',
        'hero.cta.discover': 'Explore',
        'hero.cta.contact': 'Get in touch',
        
        // About Section
        'about.title': 'CONSPIRACY OF TWO',
        'about.subtitle': 'When two paths cross, the wine conspires',
        'about.text1': 'Conspiracy Of Two was born from the meeting of two passions and two cultures. He, French, she, Dutch, united by their love of wine and the desire to create something exceptional.',
        'about.text2': 'Our mission is to craft exceptional wines in South Africa, combining traditional European techniques with the unique terroirs of this remarkable wine region.',
        
        // Team Section
        'team.title': 'Our Founders',
        'team.subtitle': 'Two passionate individuals united by love of wine and excellence',
        'team.vincent.title': 'Vincent Pontet',
        'team.vincent.description': 'Born and raised in Condrieu (France), Vincent learned his craft in world-class cellars — from E. Guigal in the Rhône to Joseph Drouhin in Burgundy, Giesen in New Zealand, Bimbadgen in Australia and Boekenhoutskloof in South Africa. Today, he shares his knowledge through Lyon Winetours and his wine bar Les Enfants du Rhône. His coup de coeur? Viognier of coarse.',
        'team.rianne.title': 'Rianne Ogink',
        'team.rianne.description': 'Former sommelier at Michelin-starred wine restaurant Zoldering in Amsterdam. Rianne has traveled the world to explore wine regions while gaining her WSET Diploma (level 4). After hands-on experience at Château Smith Haut Lafitte, Château Palmer in Bordeaux, and Damascene in South Africa, she worked up (untill recently) as assistant winemaker at the famous domaine Georges Vernay in Condrieu. Her passion? Syrah from the steep slopes.',
        
        // Conspiracy of Many Section
        'conspiracy.title': 'CONSPIRACY OF MANY',
        'conspiracy.subtitle': 'A Conspiracy you\'ll want to join',
        'conspiracy.intro': 'Be part of our conspiracy!',
        'conspiracy.text1': 'Wine is more than a drink – it\'s people, a place, and a moment. It\'s memories and dreams captured in a bottle. Conspiracy of Two is our way of expressing ourselves through wine.',
        'conspiracy.text2': 'After years of learning, tasting, and working in different corners of the wine world, we\'re ready to take the next step: creating wines that reflect our own vision. For us, it\'s about freedom, creativity, and above all, quality wine that we love to drink.',
        'conspiracy.text3': 'In January 2026 we depart to the renowned Swartland region of South Africa. There, we\'ll source top-quality Chenin Blanc, Viognier, and Syrah from trusted growers to craft our first vintage. A year later, we\'ll be back for bottling. Soon after, spring 2027, we\'ll be ready to share the wines with you!',
        'conspiracy.text4': 'It\'s a long journey before the first sips can be taken, but it will be worth it. With your support, we can bring Conspiracy of Two to life. This is how you can help us:',
        'conspiracy.support.title': 'SUPPORT US BY DONATION',
        'conspiracy.support.description': 'This money will be spend on grapes, cellar rent, barrels etc',
        'conspiracy.support.disclaimer': 'Disclaimer: Wines will be available spring 2027',
        'conspiracy.toast.title': 'A toast from afar',
        'conspiracy.toast.description': 'Every euro is a big help! Your name will be noted on one of our barrels. You\'ll get exclusive updates and behind the scenes images via email.',
        'conspiracy.necessities.title': 'Conspiracy neccesities',
        'conspiracy.necessities.description': 'Key chain, cork screw, linnen bag, Tshirt',
        'conspiracy.preorder.title': 'PRE-ORDER OUR BOTTLES',
        'conspiracy.firstpour.title': 'The first pour pack',
        'conspiracy.firstpour.description': 'Including explanation',
        'conspiracy.firstpour.mix3': 'Mix case 3 bottles',
        'conspiracy.firstpour.mix6': 'Mix case 6 bottles',
        'conspiracy.firstpour.mix12': 'Mix case 12 bottles',
        'conspiracy.experience.title': 'EXPERIENCE THE CONSPIRACY',
        'conspiracy.winemakers.title': 'The winemakers pack',
        'conspiracy.winemakers.day': 'Spend one day touring with us in Condrieu, France, to discover the European version of Viognier and Syrah. Lunch and transport from Lyon included.',
        'conspiracy.winemakers.tour': 'Spend 5 days on a private tour with us. We\'ll discover the South Africa wine regions to discover our grapevarieties through different tastings and visits, hotel, transport and lunches included (flight tickets excluded).',
        'conspiracy.sommeliers.title': 'The sommeliers pack',
        'conspiracy.sommeliers.description': 'Enjoy an exclusive dinner with us in Condrieu (France) or South Africa (travel costs not included) with exclusive Viognier-, Chenin Blanc-, and Syrah wines. Maximum 6 people per reservation',
        'conspiracy.barrel.title': 'BE THE CONSPIRACY',
        'conspiracy.barrel.description': 'Buy your barrel (roughly 250 bottles of wine by choice) and get your bottle with specialized case',
        'conspiracy.creative.title': 'CREATIVE WAYS TO JOIN THE CONSPIRACY',
        'conspiracy.creative.description': 'There might be another way you can help us. Think about for example:',
        'conspiracy.creative.list1': 'Introducing wines to your friends',
        'conspiracy.creative.list2': 'Importing our wines',
        'conspiracy.creative.list3': 'Write about our wine conspiracy journey',
        'conspiracy.creative.list4': 'Professional editing of images and video\'s',
        'conspiracy.creative.list5': 'Legal/accounting advice',
        'conspiracy.shipping': '*All wines will be shipped with insurance and tracking, shipping cost not included',
        'conspiracy.cta': 'Please click your preferred way of support and leave your details so we can reach out to you!',
        
        // Wines Section
        'wines.title': 'OUR WINES',
        'wines.tagline': 'Chenin Blanc, Viognier and Syrah crafted in South Africa, conspired across the world',
        'wines.coming.title': 'Soon to be revealed',
        'wines.coming.description': 'Do you want to be the first to know? Follow our winemaker\'s journal \'Fresh Conspiracies\'',
        'wines.journal.btn': 'Fresh Conspiracies',
        'wines.claim.btn': 'Claim your bottles',
        
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
        'contact.form.funding': 'Crowdfunding option',
        'contact.form.funding.choose': 'Select an option (optional)',
        'contact.form.funding.toast': 'A toast from afar (€free amount)',
        'contact.form.funding.necessities': 'Conspiracy necessities (€50)',
        'contact.form.funding.mix3': 'First pour pack - 3 bottles (€120)',
        'contact.form.funding.mix6': 'First pour pack - 6 bottles (€200)',
        'contact.form.funding.mix12': 'First pour pack - 12 bottles (€370)',
        'contact.form.funding.winemakers-day': 'Winemakers pack - Condrieu day (€450 p.p.)',
        'contact.form.funding.winemakers-tour': 'Winemakers pack - 5 days South Africa (€5000 p.p.)',
        'contact.form.funding.sommeliers': 'Sommeliers pack - Exclusive dinner (€200 p.p.)',
        'contact.form.funding.barrel': 'Complete barrel purchase (€6900)',
        
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
        'hero.title': 'Geen regels, alleen expressie',
        'hero.subtitle': 'wijnen van Vincent Pontet & Rianne Ogink',
        'hero.cta.discover': 'Verkennen',
        'hero.cta.contact': 'Contact opnemen',
        
        // About Section
        'about.title': 'CONSPIRACY OF TWO',
        'about.subtitle': 'Wanneer twee paden kruisen, samenzweert de wijn',
        'about.text1': 'Conspiracy Of Two ontstond uit de ontmoeting van twee passies en twee culturen. Hij, Frans, zij, Nederlands, verenigd door hun liefde voor wijn en de wens om iets uitzonderlijks te creëren.',
        'about.text2': 'Onze missie is het maken van uitzonderlijke wijnen in Zuid-Afrika, door traditionele Europese technieken te combineren met de unieke terroirs van deze opmerkelijke wijnstreek.',
        
        // Team Section
        'team.title': 'Onze Oprichters',
        'team.subtitle': 'Twee gepassioneerde individuen verenigd door liefde voor wijn en excellentie',
        'team.vincent.title': 'Vincent Pontet',
        'team.vincent.description': 'Geboren en opgegroeid in Condrieu (Frankrijk), leerde Vincent zijn vak in kelders van wereldklasse — van E. Guigal in de Rhône tot Joseph Drouhin in Bourgondië, Giesen in Nieuw-Zeeland, Bimbadgen in Australië en Boekenhoutskloof in Zuid-Afrika. Vandaag deelt hij zijn kennis via Lyon Winetours en zijn wijnbar Les Enfants du Rhône. Zijn coup de coeur? Viognier natuurlijk.',
        'team.rianne.title': 'Rianne Ogink',
        'team.rianne.description': 'Voormalig sommelier bij het Michelin-sterrenrestaurant Zoldering in Amsterdam. Rianne heeft de wereld bereisd om wijngebieden te verkennen terwijl ze haar WSET Diploma (niveau 4) behaalde. Na praktijkervaring bij Château Smith Haut Lafitte, Château Palmer in Bordeaux, en Damascene in Zuid-Afrika, werkte ze (tot voor kort) als assistent-wijnmaker bij het beroemde domaine Georges Vernay in Condrieu. Haar passie? Syrah van de steile hellingen.',
        
        // Conspiracy of Many Section
        'conspiracy.title': 'CONSPIRACY OF MANY',
        'conspiracy.subtitle': 'Een samenzwering waar je bij wilt horen',
        'conspiracy.intro': 'Word onderdeel van onze samenzwering!',
        'conspiracy.text1': 'Wijn is meer dan een drankje – het zijn mensen, een plek en een moment. Het zijn herinneringen en dromen gevangen in een fles. Conspiracy of Two is onze manier om onszelf uit te drukken door wijn.',
        'conspiracy.text2': 'Na jaren van leren, proeven en werken in verschillende hoeken van de wijnwereld, zijn we klaar voor de volgende stap: wijnen maken die onze eigen visie weerspiegelen. Voor ons gaat het om vrijheid, creativiteit en vooral kwaliteitswijn waar we van houden.',
        'conspiracy.text3': 'In januari 2026 vertrekken we naar de beroemde Swartland-regio van Zuid-Afrika. Daar zullen we topkwaliteit Chenin Blanc, Viognier en Syrah van vertrouwde telers betrekken om onze eerste vintage te maken. Een jaar later zijn we terug voor het bottelen. Kort daarna, lente 2027, zijn we klaar om de wijnen met jullie te delen!',
        'conspiracy.text4': 'Het is een lange reis voordat de eerste slokken genomen kunnen worden, maar het zal het waard zijn. Met jullie steun kunnen we Conspiracy of Two tot leven brengen. Zo kunnen jullie ons helpen:',
        'conspiracy.support.title': 'STEUN ONS DOOR DONATIE',
        'conspiracy.support.description': 'Dit geld wordt besteed aan druiven, kellerhuur, vaten etc.',
        'conspiracy.support.disclaimer': 'Disclaimer: Wijnen zullen beschikbaar zijn lente 2027',
        'conspiracy.toast.title': 'Een toast van ver',
        'conspiracy.toast.description': '€open bedrag – Elke euro is een grote hulp! Je naam wordt genoteerd op een van onze vaten. Je krijgt exclusieve updates en behind-the-scenes beelden via e-mail.',
        'conspiracy.necessities.title': 'Samenzwering benodigdheden',
        'conspiracy.necessities.description': '€50 - Sleutelhanger, kurkentrekker, linnen tas, T-shirt',
        'conspiracy.preorder.title': 'BESTEL ONZE FLESSEN VOORAF',
        'conspiracy.firstpour.title': 'Het eerste schenk pakket',
        'conspiracy.firstpour.description': 'Inclusief uitleg',
        'conspiracy.firstpour.mix3': 'Mix kist 3 flessen',
        'conspiracy.firstpour.mix6': 'Mix kist 6 flessen',
        'conspiracy.firstpour.mix12': 'Mix kist 12 flessen',
        'conspiracy.experience.title': 'ERVAAR DE SAMENZWERING',
        'conspiracy.winemakers.title': 'Het wijnmakers pakket',
        'conspiracy.winemakers.day': 'Breng een dag door met rondleiden bij ons in Condrieu, Frankrijk, om de Europese versie van Viognier en Syrah te ontdekken. Lunch en vervoer vanuit Lyon inbegrepen.',
        'conspiracy.winemakers.tour': 'Breng 5 dagen door op een privétour met ons. We ontdekken de Zuid-Afrikaanse wijnregio\'s om onze druivenrassen te ontdekken door verschillende proeverijen en bezoeken, hotel, vervoer en lunches inbegrepen (vliegtickets uitgesloten).',
        'conspiracy.sommeliers.title': 'Het sommeliers pakket',
        'conspiracy.sommeliers.description': 'Geniet van een exclusief diner met ons in Condrieu (Frankrijk) of Zuid-Afrika (reiskosten niet inbegrepen) met exclusieve Viognier-, Chenin Blanc- en Syrah-wijnen. Maximaal 6 personen per reservering',
        'conspiracy.barrel.title': 'WEES DE SAMENZWERING',
        'conspiracy.barrel.description': 'Koop je vat (ongeveer 250 flessen wijn naar keuze) en krijg je fles met gespecialiseerde kist',
        'conspiracy.creative.title': 'CREATIEVE MANIEREN OM DE SAMENZWERING TE VERVOEGEN',
        'conspiracy.creative.description': 'Er kan een andere manier zijn waarop je ons kunt helpen. Denk bijvoorbeeld aan:',
        'conspiracy.creative.list1': 'Wijnen introduceren aan je vrienden',
        'conspiracy.creative.list2': 'Onze wijnen importeren',
        'conspiracy.creative.list3': 'Schrijven over onze wijn samenzwering reis',
        'conspiracy.creative.list4': 'Professionele bewerking van beelden en video\'s',
        
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
        'contact.form.funding': 'Crowdfunding optie',
        'contact.form.funding.choose': 'Selecteer een optie (optioneel)',
        'contact.form.funding.toast': 'Een toast van ver (€vrij bedrag)',
        'contact.form.funding.necessities': 'Conspiracy benodigdheden (€50)',
        'contact.form.funding.mix3': 'Eerste proef pakket - 3 flessen (€120)',
        'contact.form.funding.mix6': 'Eerste proef pakket - 6 flessen (€200)',
        'contact.form.funding.mix12': 'Eerste proef pakket - 12 flessen (€370)',
        'contact.form.funding.winemakers-day': 'Wijnmakers pakket - Condrieu dag (€450 p.p.)',
        'contact.form.funding.winemakers-tour': 'Wijnmakers pakket - 5 dagen Zuid-Afrika (€5000 p.p.)',
        'contact.form.funding.sommeliers': 'Sommeliers pakket - Exclusief diner (€200 p.p.)',
        'contact.form.funding.barrel': 'Compleet vat aankoop (€6900)',
        
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

// Function to detect user's preferred language
function detectUserLanguage() {
    // 1. Check URL parameter (?lang=en) - highest priority for testing
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) {
        return urlLang;
    }
    
    // 2. Detect browser language - priority over saved preference for new users
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    
    for (let browserLang of browserLanguages) {
        // Extract language code (e.g., 'en-US' -> 'en')
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Check if we support this language
        if (translations[langCode]) {
            return langCode;
        }
        
        // Special cases for specific regions
        if (browserLang.toLowerCase().includes('en')) {
            return 'en'; // English variants
        }
        if (browserLang.toLowerCase().includes('nl') || browserLang.toLowerCase().includes('be')) {
            return 'nl'; // Dutch/Belgian
        }
        if (browserLang.toLowerCase().includes('fr') || browserLang.toLowerCase().includes('ca')) {
            return 'fr'; // French/Canadian French
        }
    }
    
    // 3. Check if language is stored in localStorage (user preference) - fallback
    const savedLanguage = localStorage.getItem('conspiracyoftwo-language');
    if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
    }
    
    // 4. Default to English if no match found
    return 'en';
}

// Current language state
let currentLanguage = detectUserLanguage();

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
