/**
 * FlissiDigital — i18n engine (FR / EN / AR)
 * Supersedes translations.js
 */

// ─── Country → language mapping ────────────────────────────────────────────

const ARABIC_COUNTRIES = new Set([
  // Maghreb
  'DZ','MA','TN','LY','MR',
  // Gulf + Middle East
  'SA','AE','QA','KW','BH','OM','IQ','JO','EG','SY','LB','YE','PS','SD','SO','DJ','KM'
]);

const FRENCH_COUNTRIES = new Set([
  'FR','BE','CH','CA','LU','MC','SN','ML','CI','CM','BF','NE','TG','BJ',
  'MG','GN','GA','CG','CD','BI','RW','HT','PF','NC','MU','SC','GQ','CF','TD'
]);

// ─── Translation dictionary ─────────────────────────────────────────────────

const T = {
  fr: {
    /* ── META ── */
    'meta.title.index':    'FlissiDigital — Templates Excel Professionnels',
    'meta.title.products': 'Produits — FlissiDigital',
    'meta.title.about':    'À propos — FlissiDigital',
    'meta.title.contact':  'Contact — FlissiDigital',

    /* ── NAVBAR ── */
    'nav.home':        'Accueil',
    'nav.products':    'Produits',
    'nav.about':       'À propos',
    'nav.contact':     'Contact',
    'nav.cta':         'Voir les templates',
    'nav.cta.contact': 'Devis sur mesure',

    /* ── BANNER ── */
    'banner': '🌍 Site affiché en français selon votre localisation',

    /* ── FOOTER ── */
    'footer.desc':      'Templates Excel professionnels conçus par un expert en audit et finance pour vous aider à piloter votre activité avec précision.',
    'footer.col.nav':   'Navigation',
    'footer.col.prod':  'Produits',
    'footer.col.buy':   'Acheter',
    'footer.prod.risk': 'Gestion des risques',
    'footer.prod.fin':  'Contrôle financier',
    'footer.prod.log':  'Transport & logistique',
    'footer.support':   'Support',
    'footer.custom':    'Devis sur mesure',
    'footer.legal':     'Mentions légales',
    'footer.cgv':       'CGV',
    'footer.privacy':   'Politique de confidentialité',
    'footer.copy':      '© 2024 FlissiDigital — Mourad Flissi. Tous droits réservés.',

    /* ── HERO ── */
    'hero.eyebrow': 'Templates Excel Pro',
    'hero.title':   'Des outils Excel pour<br><span class="highlight">piloter votre activité</span><br>avec précision',
    'hero.desc':    "FlissiDigital crée des templates Excel professionnels clé en main, conçus par un expert en audit et finance. Téléchargement immédiat — prêts à l'emploi.",
    'hero.btn1':    'Découvrir les templates',
    'hero.btn2':    'En savoir plus',
    'hero.stat1':   'Templates professionnels',
    'hero.stat2':   "Domaines d'expertise",
    'hero.stat3':   'Excel natif',

    /* ── MOCKUP ── */
    'kpi.risks':    'Risques critiques',
    'kpi.control':  'Score de contrôle',
    'kpi.budget':   'Budget maîtrisé',
    'kpi.delivery': 'Taux livraison',
    'kpi.trend1':   '▼ 2 vs mois dernier',
    'kpi.trend2':   '▲ +3 pts',
    'kpi.trend3':   '▲ +1.4 pts',
    'kpi.trend4':   '▲ +0.3 pts',
    'badge1.sub':   'Nouveau template',
    'badge1.main':  'Contrôle budgétaire',
    'badge2.sub':   'Téléchargement',
    'badge2.main':  'Immédiat',

    /* ── TRUST BAND ── */
    'trust.1': 'Templates professionnels',
    'trust.2': 'Langues disponibles',
    'trust.3': "Ans d'expérience",
    'trust.4': 'Professionnels accompagnés',

    /* ── FEATURES ── */
    'feat.badge':    'Pourquoi FlissiDigital ?',
    'feat.title':    'Conçu par un professionnel,<br>pour des professionnels',
    'feat.subtitle': "Chaque template est le fruit d'une expérience terrain en audit, finance et gestion opérationnelle.",
    'feat.1.title':  "Prêt à l'emploi immédiatement",
    'feat.1.desc':   "Téléchargez, ouvrez et commencez à travailler. Chaque template est livré avec des données d'exemple et une notice d'utilisation intégrée.",
    'feat.2.title':  'Entièrement personnalisable',
    'feat.2.desc':   'Aucune macro complexe cachée. Vos données, vos couleurs, votre logo. Adaptez librement chaque outil à votre contexte métier.',
    'feat.3.title':  'Expertise audit & finance',
    'feat.3.desc':   "Conçus par Mourad Flissi, professionnel de l'audit et du contrôle financier. Chaque formule et structure respecte les bonnes pratiques sectorielles.",
    'feat.4.title':  'Compatible tous supports',
    'feat.4.desc':   'Optimisé pour Excel 2016 et versions ultérieures, ainsi que Microsoft 365. Fonctionne sur PC, Mac et tablette.',
    'feat.5.title':  'Achat unique, à vie',
    'feat.5.desc':   'Payez une fois, utilisez pour toujours. Aucun abonnement, aucune licence récurrente. Téléchargement sécurisé via Gumroad ou Payhip.',
    'feat.6.title':  'Mises à jour incluses',
    'feat.6.desc':   'Vos templates évoluent avec vos besoins. Les améliorations et corrections sont téléchargeables gratuitement pour les acheteurs existants.',

    /* ── PRODUCTS (INDEX) ── */
    'prod.badge':    'Nos produits phares',
    'prod.title':    'Les templates les plus<br>demandés par nos clients',
    'prod.subtitle': "Trois domaines d'expertise, des dizaines d'heures de conception pour vous faire gagner du temps dès aujourd'hui.",
    'prod.btn.all':  'Voir tous les templates',
    'prod.btn.detail': 'Voir le détail',
    'prod.price.once': 'achat unique',
    'prod.cat.risk': 'Gestion des risques',
    'prod.cat.fin':  'Contrôle financier',
    'prod.cat.log':  'Transport & Logistique',
    'prod.1.title':  'Registre des Risques & Tableau de Bord',
    'prod.1.desc':   'Identifiez, évaluez et suivez vos risques opérationnels avec une matrice de criticité dynamique et des graphiques automatisés.',
    'prod.1.f1': 'Matrice de risques 5×5 interactive',
    'prod.1.f2': 'Scoring automatique des risques',
    'prod.1.f3': "Plan d'action intégré",
    'prod.1.f4': 'Tableaux de bord KPI prêts',
    'prod.2.title':  'Suivi Budgétaire & Contrôle des Écarts',
    'prod.2.desc':   'Pilotez votre budget en temps réel. Comparez prévu vs réalisé, analysez les écarts et construisez vos reportings financiers en quelques clics.',
    'prod.2.f1': 'Tableau réalisé / prévu / écart',
    'prod.2.f2': 'Graphiques de tendance automatiques',
    'prod.2.f3': 'Alertes seuil configurables',
    'prod.2.f4': 'Export PDF intégré',
    'prod.3.title':  'Tableau de Bord Transport & Livraisons',
    'prod.3.desc':   'Supervisez vos flux logistiques, suivez vos transporteurs et optimisez vos coûts de transport avec un outil complet et visuel.',
    'prod.3.f1': 'Suivi des livraisons en temps réel',
    'prod.3.f2': 'KPIs transporteurs automatisés',
    'prod.3.f3': 'Analyse des coûts par route',
    'prod.3.f4': 'Taux de service et ponctualité',

    /* ── TESTIMONIALS ── */
    'testi.badge':    'Témoignages',
    'testi.title':    'Ce que disent nos clients',
    'testi.subtitle': 'Des professionnels qui ont transformé leur façon de travailler grâce aux templates FlissiDigital.',
    'testi.1.text':   "Le registre des risques m'a fait gagner plusieurs heures par semaine. La structure est parfaite pour mes reportings mensuels au comité de direction.",
    'testi.1.role':   'Risk Manager — Secteur bancaire',
    'testi.2.text':   "Exactement ce dont j'avais besoin pour mes clients PME. Le template budgétaire est clair, bien structuré et vraiment opérationnel dès la première utilisation.",
    'testi.2.role':   'Expert-comptable indépendant',
    'testi.3.text':   "Nous avons déployé le tableau de bord transport dans toute notre équipe logistique. Le rapport qualité-prix est imbattable comparé aux solutions SaaS du marché.",
    'testi.3.role':   'Responsable Supply Chain',

    /* ── CTA ── */
    'cta.badge':  "Commencez aujourd'hui",
    'cta.title':  'Prêt à professionnaliser<br>votre gestion avec Excel ?',
    'cta.desc':   "Téléchargez votre premier template et voyez la différence en moins d'une heure. Achat sécurisé, satisfaction garantie.",
    'cta.btn1':   'Voir les templates',
    'cta.btn2':   'Nous contacter',

    /* ── PRODUCTS PAGE ── */
    'ppage.hero.badge':    'Catalogue complet',
    'ppage.hero.title':    'Tous nos templates Excel',
    'ppage.hero.desc':     'Des outils professionnels pour chaque besoin métier. Téléchargez et utilisez immédiatement.',
    'ppage.filter.all':    'Tous les templates',
    'ppage.filter.risk':   '🛡️ Gestion des risques',
    'ppage.filter.fin':    '📊 Contrôle financier',
    'ppage.filter.log':    '🚛 Transport & logistique',
    'ppage.risk.badge':    'Gestion des risques',
    'ppage.risk.title':    'Templates Risques',
    'ppage.fin.badge':     'Contrôle financier',
    'ppage.fin.title':     'Templates Finance',
    'ppage.log.badge':     'Transport & logistique',
    'ppage.log.title':     'Templates Logistique',
    'ppage.buy.gumroad':   '⬇ Gumroad',
    'ppage.buy.payhip':    '⬇ Payhip',
    'pp.r1.title': 'Registre des Risques & Tableau de Bord',
    'pp.r1.desc':  'Le template complet pour identifier, évaluer, prioriser et suivre tous vos risques opérationnels. Matrice dynamique et alertes automatiques.',
    'pp.r1.f1': 'Matrice de criticité 5×5 interactive',
    'pp.r1.f2': 'Scoring automatique (probabilité × impact)',
    'pp.r1.f3': "Plan d'actions correctives intégré",
    'pp.r1.f4': 'Dashboard KPI avec graphiques',
    'pp.r1.f5': 'Export rapport PDF',
    'pp.r2.title': "Plan de Continuité d'Activité (PCA)",
    'pp.r2.desc':  "Structurez et documentez votre PCA : analyse d'impact, scénarios de crise et procédures de reprise.",
    'pp.r2.f1': 'Analyse BIA (Business Impact Analysis)',
    'pp.r2.f2': 'Fiches scénarios de crise',
    'pp.r2.f3': 'Procédures de reprise documentées',
    'pp.r2.f4': 'Calendrier de tests PCA',
    'pp.r3.title': "Audit Interne — Grille d'Évaluation",
    'pp.r3.desc':  "Outillez vos missions d'audit interne avec des grilles de contrôle et un scoring de maturité.",
    'pp.r3.f1': 'Grilles de contrôle par domaine',
    'pp.r3.f2': 'Notation de maturité des contrôles',
    'pp.r3.f3': 'Fiches observations & recommandations',
    'pp.r3.f4': "Rapport d'audit automatisé",
    'pp.f1.title': 'Suivi Budgétaire & Contrôle des Écarts',
    'pp.f1.desc':  'Pilotez votre budget mensuel avec une vue comparative Prévu / Réalisé / Écart.',
    'pp.f1.f1': 'Tableau réalisé / prévu / écart',
    'pp.f1.f2': 'Graphiques de tendance automatiques',
    'pp.f1.f3': 'Alertes seuil configurables (couleur)',
    'pp.f1.f4': 'Synthèse mensuelle et annuelle',
    'pp.f1.f5': 'Compatible multi-centres de coûts',
    'pp.f2.title': 'Tableau de Trésorerie Prévisionnelle',
    'pp.f2.desc':  'Anticipez vos besoins de financement avec un prévisionnel de trésorerie glissant sur 12 mois.',
    'pp.f2.f1': 'Prévisionnel 12 mois glissants',
    'pp.f2.f2': '3 scénarios comparatifs',
    'pp.f2.f3': 'Gestion des décalages de paiement',
    'pp.f2.f4': 'Graphique solde cumulé',
    'pp.f3.title': 'Reporting Financier Mensuel',
    'pp.f3.desc':  'Générez automatiquement vos reportings mensuels : compte de résultat et indicateurs financiers clés.',
    'pp.f3.f1': 'Compte de résultat synthétique',
    'pp.f3.f2': 'Ratios financiers automatiques',
    'pp.f3.f3': 'Graphiques pour comité de direction',
    'pp.f3.f4': 'Comparaison N / N-1',
    'pp.l1.title': 'Tableau de Bord Transport & Livraisons',
    'pp.l1.desc':  'Supervisez tous vos flux transport, suivez vos transporteurs et analysez vos coûts.',
    'pp.l1.f1': 'Suivi des livraisons et statuts',
    'pp.l1.f2': 'KPIs transporteurs automatisés',
    'pp.l1.f3': 'Analyse des coûts par route',
    'pp.l1.f4': 'Taux de service et ponctualité',
    'pp.l1.f5': 'Alertes retards configurables',
    'pp.l2.title': 'Gestion des Stocks & Inventaire',
    'pp.l2.desc':  'Gérez votre stock en temps réel : entrées/sorties, valorisation et alertes de réapprovisionnement.',
    'pp.l2.f1': 'Fiche article avec historique mouvements',
    'pp.l2.f2': 'Valorisation FIFO / CMUP',
    'pp.l2.f3': 'Alertes stock minimum',
    'pp.l2.f4': 'Tableau de bord stock global',
    'pp.l3.title': 'Plan de Tournées & Optimisation',
    'pp.l3.desc':  'Planifiez et optimisez vos tournées de livraison : affectation, km, coûts et rentabilité.',
    'pp.l3.f1': 'Planning des tournées hebdomadaire',
    'pp.l3.f2': 'Affectation véhicule / chauffeur',
    'pp.l3.f3': 'Suivi kilométrique et carburant',
    'pp.l3.f4': 'Analyse coût par livraison',
    'ppage.cta.badge': 'Besoin spécifique ?',
    'ppage.cta.title': 'Vous avez un besoin sur mesure ?',
    'ppage.cta.desc':  'Je peux créer un template Excel personnalisé pour votre secteur. Contactez-moi pour un devis.',
    'ppage.cta.btn1':  'Demander un devis',
    'ppage.cta.btn2':  'Découvrir mon expertise',

    /* ── ABOUT PAGE ── */
    'about.hero.badge':  'À propos',
    'about.hero.title':  'Derrière FlissiDigital',
    'about.hero.desc':   'Un expert de terrain qui transforme son expérience en outils concrets pour les professionnels.',
    'about.profile.title': 'Expert Audit & Finance · Fondateur',
    'about.profile.stat1': "Ans d'expérience",
    'about.profile.stat2': 'Templates créés',
    'about.profile.stat3': 'Domaines clés',
    'about.profile.stat4': 'Satisfaction',
    'about.profile.l1':  'Envoyer un message',
    'about.profile.l2':  'LinkedIn',
    'about.profile.l3':  'Voir mes templates',
    'about.bio.h1':      'Qui suis-je ?',
    'about.bio.p1':      "Je m'appelle <strong>Mourad Flissi</strong>, professionnel de l'audit interne et du contrôle financier avec plus de 10 ans d'expérience dans des environnements exigeants — industrie, services et transport.",
    'about.bio.p2':      "Tout au long de ma carrière, j'ai constaté que les équipes finance, risques et opérations passent un temps considérable à (re)créer des outils de pilotage dans Excel.",
    'about.bio.p3':      "J'ai donc décidé de capitaliser sur mon expérience pour créer <strong>FlissiDigital</strong> : une boutique de templates Excel professionnels, rigoureux et directement opérationnels.",
    'about.exp.h':       "Mes domaines d'expertise",
    'about.exp.1.name':  'Gestion des risques',
    'about.exp.1.desc':  'Cartographie, évaluation, plan de traitement',
    'about.exp.2.name':  'Contrôle financier',
    'about.exp.2.desc':  'Budget, reporting, analyse des écarts',
    'about.exp.3.name':  'Transport & logistique',
    'about.exp.3.desc':  'KPIs transport, stocks, tournées',
    'about.exp.4.name':  'Audit interne',
    'about.exp.4.desc':  'Grilles de contrôle, missions, rapports',
    'about.timeline.h':  'Mon parcours',
    'about.tl.1.title':  'Fondateur — FlissiDigital',
    'about.tl.1.co':     'Création et vente de templates Excel professionnels',
    'about.tl.2.title':  'Responsable Contrôle Interne & Risques',
    'about.tl.2.co':     'Groupe industriel — Secteur transport & logistique',
    'about.tl.3.title':  'Auditeur Financier Senior',
    'about.tl.3.co':     "Cabinet d'audit — Clientèle PME/ETI",
    'about.tl.4.title':  'Contrôleur de Gestion',
    'about.tl.4.co':     'Entreprise de distribution — Périmètre multi-sites',
    'about.values.h':    'Mes valeurs',
    'about.val.1.title': 'Rigueur',
    'about.val.1.desc':  'Chaque formule est testée, chaque structure validée par des années de pratique terrain.',
    'about.val.2.title': 'Praticité',
    'about.val.2.desc':  "Des outils qu'on ouvre et utilise immédiatement, sans formation ni paramétrage complexe.",
    'about.val.3.title': 'Accessibilité',
    'about.val.3.desc':  "Des prix justes pour que chaque professionnel, quelle que soit sa structure, puisse s'équiper.",
    'about.cta.badge':   'Travaillons ensemble',
    'about.cta.title':   'Un projet sur mesure ?<br>Parlons-en.',
    'about.cta.desc':    'Je peux développer des outils Excel adaptés à votre contexte spécifique. Audit, finance, logistique — contactez-moi.',
    'about.cta.btn1':    'Me contacter',
    'about.cta.btn2':    'Voir les templates',

    /* ── CONTACT PAGE ── */
    'contact.hero.badge':  'Contact',
    'contact.hero.title':  'Parlons de votre projet',
    'contact.hero.desc':   'Question sur un template, besoin sur mesure ou support technique — je vous réponds sous 24h.',
    'contact.info.1.title': 'Email',
    'contact.info.1.val':   'Réponse sous 24h ouvrées',
    'contact.info.2.title': 'LinkedIn',
    'contact.info.2.val':   'Pour les projets professionnels',
    'contact.info.3.title': 'Support acheteurs',
    'contact.info.3.val':   "Vous avez acheté un template et besoin d'aide ? Contactez-moi directement via Gumroad ou Payhip.",
    'contact.info.4.title': 'Templates sur mesure',
    'contact.info.4.val':   "Besoin d'un outil Excel spécifique ? Je développe des solutions personnalisées pour votre secteur.",
    'contact.faq.title': 'Questions fréquentes',
    'contact.faq.1.q': 'Comment recevoir mon template ?',
    'contact.faq.1.a': 'Après paiement sur Gumroad ou Payhip, vous recevez immédiatement un lien de téléchargement par email. Le fichier est au format .xlsx.',
    'contact.faq.2.q': 'Les templates fonctionnent-ils sur Mac ?',
    'contact.faq.2.a': 'Oui, tous les templates sont compatibles avec Excel sur Mac (Excel 2016+, Microsoft 365).',
    'contact.faq.3.q': 'Puis-je utiliser le template pour plusieurs entreprises ?',
    'contact.faq.3.a': 'La licence est personnelle (usage individuel). Pour un usage multi-entreprises, contactez-moi pour une licence professionnelle.',
    'contact.faq.4.q': 'Y a-t-il une politique de remboursement ?',
    'contact.faq.4.a': 'Oui, remboursement sous 7 jours si le template ne correspond pas à la description. Contactez-moi directement.',
    'contact.form.title':    'Envoyez-moi un message',
    'contact.form.subtitle': 'Toutes les réponses dans les 24h ouvrées.',
    'contact.form.firstname': 'Prénom',
    'contact.form.lastname':  'Nom',
    'contact.form.email':     'Email',
    'contact.form.company':   'Entreprise / Organisation',
    'contact.form.subject':   'Objet',
    'contact.form.message':   'Message',
    'contact.form.ph.fn':     'Mourad',
    'contact.form.ph.ln':     'Flissi',
    'contact.form.ph.email':  'votre@email.com',
    'contact.form.ph.co':     'Nom de votre entreprise (optionnel)',
    'contact.form.ph.msg':    'Décrivez votre besoin ou votre question en détail…',
    'contact.form.sel.default': 'Sélectionnez un objet',
    'contact.form.sel.1': 'Question sur un template',
    'contact.form.sel.2': 'Support technique',
    'contact.form.sel.3': 'Demande de template sur mesure',
    'contact.form.sel.4': 'Licence professionnelle / équipe',
    'contact.form.sel.5': 'Remboursement',
    'contact.form.sel.6': 'Autre',
    'contact.form.privacy': "J'accepte que mes données soient traitées dans le cadre de cette demande de contact, conformément à la <a href=\"#\" style=\"color:var(--emerald-dark);font-weight:600\">politique de confidentialité</a>.",
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sent':   '✓ Message envoyé !',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    /* ── META ── */
    'meta.title.index':    'FlissiDigital — Professional Excel Templates',
    'meta.title.products': 'Products — FlissiDigital',
    'meta.title.about':    'About — FlissiDigital',
    'meta.title.contact':  'Contact — FlissiDigital',

    /* ── NAVBAR ── */
    'nav.home':        'Home',
    'nav.products':    'Products',
    'nav.about':       'About',
    'nav.contact':     'Contact',
    'nav.cta':         'View Templates',
    'nav.cta.contact': 'Custom Quote',

    /* ── BANNER ── */
    'banner': '🌍 Site displayed in English based on your location',

    /* ── FOOTER ── */
    'footer.desc':      'Professional Excel templates designed by an audit and finance expert to help you drive your business with precision.',
    'footer.col.nav':   'Navigation',
    'footer.col.prod':  'Products',
    'footer.col.buy':   'Purchase',
    'footer.prod.risk': 'Risk Management',
    'footer.prod.fin':  'Financial Control',
    'footer.prod.log':  'Transport & Logistics',
    'footer.support':   'Support',
    'footer.custom':    'Custom Quote',
    'footer.legal':     'Legal Notice',
    'footer.cgv':       'Terms of Sale',
    'footer.privacy':   'Privacy Policy',
    'footer.copy':      '© 2024 FlissiDigital — Mourad Flissi. All rights reserved.',

    /* ── HERO ── */
    'hero.eyebrow': 'Professional Excel Templates',
    'hero.title':   'Excel Tools to Drive<br><span class="highlight">Your Business</span><br>with Precision',
    'hero.desc':    'FlissiDigital creates professional Excel templates, designed by an audit and finance expert. Instant download — ready to use.',
    'hero.btn1':    'Discover Templates',
    'hero.btn2':    'Learn More',
    'hero.stat1':   'Professional Templates',
    'hero.stat2':   'Expertise Domains',
    'hero.stat3':   'Native Excel',

    /* ── MOCKUP ── */
    'kpi.risks':    'Critical Risks',
    'kpi.control':  'Control Score',
    'kpi.budget':   'Budget Managed',
    'kpi.delivery': 'Delivery Rate',
    'kpi.trend1':   '▼ 2 vs last month',
    'kpi.trend2':   '▲ +3 pts',
    'kpi.trend3':   '▲ +1.4 pts',
    'kpi.trend4':   '▲ +0.3 pts',
    'badge1.sub':   'New template',
    'badge1.main':  'Budget Control',
    'badge2.sub':   'Download',
    'badge2.main':  'Instant',

    /* ── TRUST BAND ── */
    'trust.1': 'Professional Templates',
    'trust.2': 'Languages Available',
    'trust.3': 'Years of Experience',
    'trust.4': 'Satisfied Professionals',

    /* ── FEATURES ── */
    'feat.badge':    'Why FlissiDigital?',
    'feat.title':    'Built by a Professional,<br>for Professionals',
    'feat.subtitle': 'Each template is the result of hands-on experience in audit, finance and operational management.',
    'feat.1.title':  'Ready to Use Immediately',
    'feat.1.desc':   'Download, open and start working. Each template comes with sample data and an integrated user guide.',
    'feat.2.title':  'Fully Customizable',
    'feat.2.desc':   'No hidden complex macros. Your data, your colors, your logo. Freely adapt each tool to your business context.',
    'feat.3.title':  'Audit & Finance Expertise',
    'feat.3.desc':   'Designed by Mourad Flissi, an audit and financial control professional. Each formula and structure follows industry best practices.',
    'feat.4.title':  'Compatible with All Platforms',
    'feat.4.desc':   'Optimized for Excel 2016 and later versions, as well as Microsoft 365. Works on PC, Mac and tablet.',
    'feat.5.title':  'One-Time Purchase, Forever',
    'feat.5.desc':   'Pay once, use forever. No subscription, no recurring license. Secure download via Gumroad or Payhip.',
    'feat.6.title':  'Updates Included',
    'feat.6.desc':   'Your templates evolve with your needs. Improvements and fixes are downloadable for free for existing buyers.',

    /* ── PRODUCTS (INDEX) ── */
    'prod.badge':    'Our Featured Products',
    'prod.title':    'The Most Requested<br>Templates by Our Clients',
    'prod.subtitle': 'Three areas of expertise, dozens of design hours to save you time starting today.',
    'prod.btn.all':  'View All Templates',
    'prod.btn.detail': 'View Details',
    'prod.price.once': 'one-time purchase',
    'prod.cat.risk': 'Risk Management',
    'prod.cat.fin':  'Financial Control',
    'prod.cat.log':  'Transport & Logistics',
    'prod.1.title':  'Risk Register & Dashboard',
    'prod.1.desc':   'Identify, assess and track your operational risks with a dynamic criticality matrix and automated charts.',
    'prod.1.f1': 'Interactive 5×5 risk matrix',
    'prod.1.f2': 'Automatic risk scoring',
    'prod.1.f3': 'Integrated action plan',
    'prod.1.f4': 'Ready-made KPI dashboards',
    'prod.2.title':  'Budget Tracking & Variance Control',
    'prod.2.desc':   'Monitor your budget in real time. Compare planned vs actual, analyze variances and build financial reports in a few clicks.',
    'prod.2.f1': 'Actual / planned / variance table',
    'prod.2.f2': 'Automatic trend charts',
    'prod.2.f3': 'Configurable threshold alerts',
    'prod.2.f4': 'Integrated PDF export',
    'prod.3.title':  'Transport & Delivery Dashboard',
    'prod.3.desc':   'Monitor your logistics flows, track your carriers and optimize transport costs with a comprehensive visual tool.',
    'prod.3.f1': 'Real-time delivery tracking',
    'prod.3.f2': 'Automated carrier KPIs',
    'prod.3.f3': 'Cost analysis by route',
    'prod.3.f4': 'Service rate and punctuality',

    /* ── TESTIMONIALS ── */
    'testi.badge':    'Testimonials',
    'testi.title':    'What Our Clients Say',
    'testi.subtitle': 'Professionals who transformed the way they work with FlissiDigital templates.',
    'testi.1.text':   'The risk register saved me several hours a week. The structure is perfect for my monthly reports to the board of directors.',
    'testi.1.role':   'Risk Manager — Banking Sector',
    'testi.2.text':   'Exactly what I needed for my SME clients. The budget template is clear, well-structured and truly operational from first use.',
    'testi.2.role':   'Independent Chartered Accountant',
    'testi.3.text':   'We deployed the transport dashboard across our entire logistics team. The value for money is unbeatable compared to SaaS solutions on the market.',
    'testi.3.role':   'Supply Chain Manager',

    /* ── CTA ── */
    'cta.badge':  'Start Today',
    'cta.title':  'Ready to Professionalize<br>Your Management with Excel?',
    'cta.desc':   'Download your first template and see the difference in under an hour. Secure purchase, satisfaction guaranteed.',
    'cta.btn1':   'View Templates',
    'cta.btn2':   'Contact Us',

    /* ── PRODUCTS PAGE ── */
    'ppage.hero.badge':    'Full Catalog',
    'ppage.hero.title':    'All Our Excel Templates',
    'ppage.hero.desc':     'Professional tools for every business need. Download and use immediately.',
    'ppage.filter.all':    'All Templates',
    'ppage.filter.risk':   '🛡️ Risk Management',
    'ppage.filter.fin':    '📊 Financial Control',
    'ppage.filter.log':    '🚛 Transport & Logistics',
    'ppage.risk.badge':    'Risk Management',
    'ppage.risk.title':    'Risk Templates',
    'ppage.fin.badge':     'Financial Control',
    'ppage.fin.title':     'Finance Templates',
    'ppage.log.badge':     'Transport & Logistics',
    'ppage.log.title':     'Logistics Templates',
    'ppage.buy.gumroad':   '⬇ Gumroad',
    'ppage.buy.payhip':    '⬇ Payhip',
    'pp.r1.title': 'Risk Register & Dashboard',
    'pp.r1.desc':  'The complete template to identify, assess, prioritize and track all your operational risks. Dynamic matrix and automatic alerts.',
    'pp.r1.f1': 'Interactive 5×5 criticality matrix',
    'pp.r1.f2': 'Automatic scoring (probability × impact)',
    'pp.r1.f3': 'Integrated corrective action plan',
    'pp.r1.f4': 'KPI dashboard with charts',
    'pp.r1.f5': 'PDF report export',
    'pp.r2.title': 'Business Continuity Plan (BCP)',
    'pp.r2.desc':  'Structure and document your BCP: impact analysis, crisis scenarios, recovery procedures and test tracking.',
    'pp.r2.f1': 'Business Impact Analysis (BIA)',
    'pp.r2.f2': 'Crisis scenario sheets',
    'pp.r2.f3': 'Documented recovery procedures',
    'pp.r2.f4': 'BCP test calendar',
    'pp.r3.title': 'Internal Audit — Evaluation Grid',
    'pp.r3.desc':  'Equip your internal audit missions with control grids, maturity scoring and standardized observation sheets.',
    'pp.r3.f1': 'Control grids by domain',
    'pp.r3.f2': 'Control maturity rating',
    'pp.r3.f3': 'Observation & recommendation sheets',
    'pp.r3.f4': 'Automated audit report',
    'pp.f1.title': 'Budget Tracking & Variance Control',
    'pp.f1.desc':  'Monitor your monthly budget with a comparative Planned / Actual / Variance view. Automatic alerts and dynamic charts included.',
    'pp.f1.f1': 'Actual / planned / variance table',
    'pp.f1.f2': 'Automatic trend charts',
    'pp.f1.f3': 'Configurable threshold alerts (color)',
    'pp.f1.f4': 'Monthly and annual summary',
    'pp.f1.f5': 'Multi-cost center compatible',
    'pp.f2.title': 'Cash Flow Forecast',
    'pp.f2.desc':  'Anticipate your financing needs with a rolling 12-month cash flow forecast. Optimistic / pessimistic scenarios included.',
    'pp.f2.f1': 'Rolling 12-month forecast',
    'pp.f2.f2': '3 comparative scenarios',
    'pp.f2.f3': 'Payment delay management',
    'pp.f2.f4': 'Cumulative balance chart',
    'pp.f3.title': 'Monthly Financial Reporting',
    'pp.f3.desc':  'Automatically generate your monthly reports: income statement, key financial indicators and management tables.',
    'pp.f3.f1': 'Condensed income statement',
    'pp.f3.f2': 'Automatic financial ratios',
    'pp.f3.f3': 'Charts for board of directors',
    'pp.f3.f4': 'Year-on-year comparison',
    'pp.l1.title': 'Transport & Delivery Dashboard',
    'pp.l1.desc':  'Monitor all your transport flows, track your carriers and analyze your costs by route and month.',
    'pp.l1.f1': 'Delivery and status tracking',
    'pp.l1.f2': 'Automated carrier KPIs',
    'pp.l1.f3': 'Cost analysis by route',
    'pp.l1.f4': 'Service rate and punctuality',
    'pp.l1.f5': 'Configurable delay alerts',
    'pp.l2.title': 'Inventory & Stock Management',
    'pp.l2.desc':  'Manage your stock in real time: ins/outs, valuation, reorder alerts and rotating inventory.',
    'pp.l2.f1': 'Item card with movement history',
    'pp.l2.f2': 'FIFO / weighted average valuation',
    'pp.l2.f3': 'Minimum stock alerts',
    'pp.l2.f4': 'Global stock dashboard',
    'pp.l3.title': 'Route Planning & Optimization',
    'pp.l3.desc':  'Plan and optimize your delivery routes: vehicle allocation, km tracking, costs and profitability analysis.',
    'pp.l3.f1': 'Weekly route planning',
    'pp.l3.f2': 'Vehicle / driver assignment',
    'pp.l3.f3': 'Mileage and fuel tracking',
    'pp.l3.f4': 'Cost per delivery analysis',
    'ppage.cta.badge': 'Specific Need?',
    'ppage.cta.title': 'Do You Have a Custom Need?',
    'ppage.cta.desc':  'I can create a customized Excel template for your sector or internal processes. Contact me for a quote.',
    'ppage.cta.btn1':  'Request a Quote',
    'ppage.cta.btn2':  'Discover My Expertise',

    /* ── ABOUT PAGE ── */
    'about.hero.badge':  'About',
    'about.hero.title':  'Behind FlissiDigital',
    'about.hero.desc':   'A field expert who transforms experience into concrete tools for professionals.',
    'about.profile.title': 'Audit & Finance Expert · Founder',
    'about.profile.stat1': 'Years of Experience',
    'about.profile.stat2': 'Templates Created',
    'about.profile.stat3': 'Key Domains',
    'about.profile.stat4': 'Satisfaction',
    'about.profile.l1':  'Send a Message',
    'about.profile.l2':  'LinkedIn',
    'about.profile.l3':  'View My Templates',
    'about.bio.h1':      'Who Am I?',
    'about.bio.p1':      'My name is <strong>Mourad Flissi</strong>, an internal audit and financial control professional with over 10 years of experience in demanding environments — industry, services and transport.',
    'about.bio.p2':      'Throughout my career, I noticed that finance, risk and operations teams spend considerable time (re)creating management tools in Excel. Improvised dashboards, unstructured risk registers, inconsistent budget tracking.',
    'about.bio.p3':      'I therefore decided to leverage my experience to create <strong>FlissiDigital</strong>: a shop of professional, rigorous Excel templates that are directly operational. Each tool is designed to meet real needs, tested in the field.',
    'about.exp.h':       'My Areas of Expertise',
    'about.exp.1.name':  'Risk Management',
    'about.exp.1.desc':  'Mapping, assessment, treatment plan',
    'about.exp.2.name':  'Financial Control',
    'about.exp.2.desc':  'Budget, reporting, variance analysis',
    'about.exp.3.name':  'Transport & Logistics',
    'about.exp.3.desc':  'Transport KPIs, inventory, routes',
    'about.exp.4.name':  'Internal Audit',
    'about.exp.4.desc':  'Control grids, missions, reports',
    'about.timeline.h':  'My Career Path',
    'about.tl.1.title':  'Founder — FlissiDigital',
    'about.tl.1.co':     'Creation and sale of professional Excel templates',
    'about.tl.2.title':  'Head of Internal Control & Risk',
    'about.tl.2.co':     'Industrial group — Transport & logistics sector',
    'about.tl.3.title':  'Senior Financial Auditor',
    'about.tl.3.co':     'Audit firm — SME / mid-market clientele',
    'about.tl.4.title':  'Management Controller',
    'about.tl.4.co':     'Distribution company — Multi-site scope',
    'about.values.h':    'My Values',
    'about.val.1.title': 'Rigor',
    'about.val.1.desc':  'Every formula is tested, every structure validated by years of field practice.',
    'about.val.2.title': 'Practicality',
    'about.val.2.desc':  'Tools you open and use immediately, without complex training or configuration.',
    'about.val.3.title': 'Accessibility',
    'about.val.3.desc':  'Fair prices so every professional, regardless of organization size, can equip themselves.',
    'about.cta.badge':   "Let's Work Together",
    'about.cta.title':   'A Custom Project?<br>Let\'s Talk.',
    'about.cta.desc':    'I can develop Excel tools tailored to your specific context. Audit, finance, logistics — contact me to discuss your needs.',
    'about.cta.btn1':    'Contact Me',
    'about.cta.btn2':    'View Templates',

    /* ── CONTACT PAGE ── */
    'contact.hero.badge':  'Contact',
    'contact.hero.title':  "Let's Talk About Your Project",
    'contact.hero.desc':   'Question about a template, custom need or technical support — I reply within 24 hours.',
    'contact.info.1.title': 'Email',
    'contact.info.1.val':   'Reply within 24 business hours',
    'contact.info.2.title': 'LinkedIn',
    'contact.info.2.val':   'For professional projects',
    'contact.info.3.title': 'Buyer Support',
    'contact.info.3.val':   'Did you buy a template and need help? Contact me directly via Gumroad or Payhip.',
    'contact.info.4.title': 'Custom Templates',
    'contact.info.4.val':   'Need a specific Excel tool? I develop customized solutions for your sector.',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.1.q': 'How do I receive my template?',
    'contact.faq.1.a': 'After payment on Gumroad or Payhip, you immediately receive a download link by email. The file is in .xlsx format.',
    'contact.faq.2.q': 'Do the templates work on Mac?',
    'contact.faq.2.a': 'Yes, all templates are compatible with Excel on Mac (Excel 2016+, Microsoft 365). Some formatting may differ slightly.',
    'contact.faq.3.q': 'Can I use the template for multiple companies?',
    'contact.faq.3.a': 'The license is personal (individual use). For multi-company or team use, contact me for a professional license.',
    'contact.faq.4.q': 'Is there a refund policy?',
    'contact.faq.4.a': 'Yes, if the template does not match the description or has a defect, I offer a refund within 7 days. Contact me directly.',
    'contact.form.title':    'Send Me a Message',
    'contact.form.subtitle': 'All replies within 24 business hours.',
    'contact.form.firstname': 'First Name',
    'contact.form.lastname':  'Last Name',
    'contact.form.email':     'Email',
    'contact.form.company':   'Company / Organization',
    'contact.form.subject':   'Subject',
    'contact.form.message':   'Message',
    'contact.form.ph.fn':     'Mourad',
    'contact.form.ph.ln':     'Flissi',
    'contact.form.ph.email':  'your@email.com',
    'contact.form.ph.co':     'Your company name (optional)',
    'contact.form.ph.msg':    'Describe your need or question in detail…',
    'contact.form.sel.default': 'Select a subject',
    'contact.form.sel.1': 'Question about a template',
    'contact.form.sel.2': 'Technical support',
    'contact.form.sel.3': 'Custom template request',
    'contact.form.sel.4': 'Professional / team license',
    'contact.form.sel.5': 'Refund',
    'contact.form.sel.6': 'Other',
    'contact.form.privacy': 'I agree that my data will be processed in the context of this contact request, in accordance with the <a href="#" style="color:var(--emerald-dark);font-weight:600">privacy policy</a>.',
    'contact.form.submit': 'Send Message',
    'contact.form.sent':   '✓ Message sent!',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  ar: {
    /* ── META ── */
    'meta.title.index':    'FlissiDigital — قوالب Excel الاحترافية',
    'meta.title.products': 'المنتجات — FlissiDigital',
    'meta.title.about':    'من نحن — FlissiDigital',
    'meta.title.contact':  'اتصل بنا — FlissiDigital',

    /* ── NAVBAR ── */
    'nav.home':        'الرئيسية',
    'nav.products':    'المنتجات',
    'nav.about':       'من نحن',
    'nav.contact':     'اتصل بنا',
    'nav.cta':         'عرض القوالب',
    'nav.cta.contact': 'عرض مخصص',

    /* ── BANNER ── */
    'banner': 'يتم عرض الموقع باللغة العربية بناءً على موقعك 🌍',

    /* ── FOOTER ── */
    'footer.desc':      'قوالب Excel احترافية صمّمها خبير في التدقيق والمالية لمساعدتك على قيادة نشاطك بدقة واحترافية.',
    'footer.col.nav':   'التنقل',
    'footer.col.prod':  'المنتجات',
    'footer.col.buy':   'الشراء',
    'footer.prod.risk': 'إدارة المخاطر',
    'footer.prod.fin':  'الرقابة المالية',
    'footer.prod.log':  'النقل والخدمات اللوجستية',
    'footer.support':   'الدعم الفني',
    'footer.custom':    'عرض مخصص',
    'footer.legal':     'الشروط القانونية',
    'footer.cgv':       'شروط البيع',
    'footer.privacy':   'سياسة الخصوصية',
    'footer.copy':      '© 2024 FlissiDigital — موراد فليسي. جميع الحقوق محفوظة.',

    /* ── HERO ── */
    'hero.eyebrow': 'قوالب Excel احترافية',
    'hero.title':   'أدوات Excel لقيادة<br><span class="highlight">أعمالك</span><br>بدقة احترافية',
    'hero.desc':    'تُنشئ FlissiDigital قوالب Excel احترافية، صمّمها خبير في التدقيق والمالية. تحميل فوري — جاهزة للاستخدام فوراً.',
    'hero.btn1':    'اكتشف القوالب',
    'hero.btn2':    'اعرف المزيد',
    'hero.stat1':   'قالب احترافي',
    'hero.stat2':   'مجالات تخصص',
    'hero.stat3':   'Excel أصلي',

    /* ── MOCKUP ── */
    'kpi.risks':    'المخاطر الحرجة',
    'kpi.control':  'درجة التحكم',
    'kpi.budget':   'الميزانية المُدارة',
    'kpi.delivery': 'معدل التسليم',
    'kpi.trend1':   '▼ 2 مقارنة بالشهر السابق',
    'kpi.trend2':   '▲ +3 نقاط',
    'kpi.trend3':   '▲ +1.4 نقاط',
    'kpi.trend4':   '▲ +0.3 نقاط',
    'badge1.sub':   'قالب جديد',
    'badge1.main':  'مراقبة الميزانية',
    'badge2.sub':   'تحميل',
    'badge2.main':  'فوري',

    /* ── TRUST BAND ── */
    'trust.1': 'قالب احترافي',
    'trust.2': 'لغات متاحة',
    'trust.3': 'سنة خبرة',
    'trust.4': 'متخصص مُستفيد',

    /* ── FEATURES ── */
    'feat.badge':    'لماذا FlissiDigital؟',
    'feat.title':    'صُمّمت من قِبَل محترف،<br>للمحترفين',
    'feat.subtitle': 'كل قالب هو نتاج خبرة ميدانية في التدقيق والمالية والإدارة التشغيلية.',
    'feat.1.title':  'جاهز للاستخدام فوراً',
    'feat.1.desc':   'قم بالتحميل، افتح الملف وابدأ العمل. كل قالب يأتي مع بيانات نموذجية ودليل استخدام مدمج.',
    'feat.2.title':  'قابل للتخصيص بالكامل',
    'feat.2.desc':   'لا ماكرو معقدة مخفية. بياناتك، ألوانك، شعارك. كيّف كل أداة بحرية لسياقك المهني.',
    'feat.3.title':  'خبرة التدقيق والمالية',
    'feat.3.desc':   'صُمّمت من قِبَل موراد فليسي، خبير في التدقيق والرقابة المالية. كل معادلة وهيكل يحترم أفضل الممارسات القطاعية.',
    'feat.4.title':  'متوافق مع جميع الأجهزة',
    'feat.4.desc':   'مُحسَّن لـ Excel 2016 والإصدارات اللاحقة، وكذلك Microsoft 365. يعمل على الحاسوب والماك والجهاز اللوحي.',
    'feat.5.title':  'شراء مرة واحدة، مدى الحياة',
    'feat.5.desc':   'ادفع مرة واحدة، استخدم للأبد. لا اشتراكات، لا رسوم متكررة. تحميل آمن عبر Gumroad أو Payhip.',
    'feat.6.title':  'التحديثات مشمولة',
    'feat.6.desc':   'تتطور قوالبك مع احتياجاتك. التحسينات والتصحيحات متاحة للتحميل مجاناً للمشترين الحاليين.',

    /* ── PRODUCTS (INDEX) ── */
    'prod.badge':    'منتجاتنا المميزة',
    'prod.title':    'القوالب الأكثر طلباً<br>من قِبَل عملائنا',
    'prod.subtitle': 'ثلاثة مجالات تخصص وعشرات ساعات التصميم لتوفير وقتك ابتداءً من اليوم.',
    'prod.btn.all':  'عرض جميع القوالب',
    'prod.btn.detail': 'عرض التفاصيل',
    'prod.price.once': 'شراء مرة واحدة',
    'prod.cat.risk': 'إدارة المخاطر',
    'prod.cat.fin':  'الرقابة المالية',
    'prod.cat.log':  'النقل والخدمات اللوجستية',
    'prod.1.title':  'سجل المخاطر ولوحة المؤشرات',
    'prod.1.desc':   'حدّد وقيّم وتابع مخاطرك التشغيلية بمصفوفة حرجية ديناميكية ورسوم بيانية آلية.',
    'prod.1.f1': 'مصفوفة مخاطر 5×5 تفاعلية',
    'prod.1.f2': 'تسجيل تلقائي للمخاطر',
    'prod.1.f3': 'خطة عمل مدمجة',
    'prod.1.f4': 'لوحات KPI جاهزة',
    'prod.2.title':  'متابعة الميزانية ومراقبة الانحرافات',
    'prod.2.desc':   'تابع ميزانيتك في الوقت الفعلي. قارن المخطط بالفعلي، حلّل الانحرافات وأنشئ تقاريرك المالية بنقرات.',
    'prod.2.f1': 'جدول الفعلي / المخطط / الانحراف',
    'prod.2.f2': 'رسوم بيانية للاتجاهات آلية',
    'prod.2.f3': 'تنبيهات العتبات قابلة للضبط',
    'prod.2.f4': 'تصدير PDF مدمج',
    'prod.3.title':  'لوحة تحكم النقل والتسليمات',
    'prod.3.desc':   'راقب تدفقاتك اللوجستية، تابع ناقليك وحسّن تكاليف النقل بأداة متكاملة وبصرية.',
    'prod.3.f1': 'متابعة التسليمات في الوقت الفعلي',
    'prod.3.f2': 'مؤشرات الناقلين آلية',
    'prod.3.f3': 'تحليل التكاليف حسب المسار',
    'prod.3.f4': 'معدل الخدمة والالتزام بالمواعيد',

    /* ── TESTIMONIALS ── */
    'testi.badge':    'آراء العملاء',
    'testi.title':    'ماذا يقول عملاؤنا',
    'testi.subtitle': 'محترفون غيّروا طريقة عملهم بفضل قوالب FlissiDigital.',
    'testi.1.text':   'سجل المخاطر وفّر لي عدة ساعات في الأسبوع. الهيكل مثالي لتقاريري الشهرية أمام لجنة الإدارة.',
    'testi.1.role':   'مدير المخاطر — القطاع المصرفي',
    'testi.2.text':   'بالضبط ما كنت أحتاجه لعملائي من المؤسسات الصغيرة والمتوسطة. قالب الميزانية واضح ومنظم وعملي منذ الاستخدام الأول.',
    'testi.2.role':   'محاسب قانوني مستقل',
    'testi.3.text':   'نشرنا لوحة تحكم النقل على كامل فريقنا اللوجستي. نسبة الجودة إلى السعر لا تُضاهى مقارنة بحلول SaaS في السوق.',
    'testi.3.role':   'مسؤولة سلسلة التوريد',

    /* ── CTA ── */
    'cta.badge':  'ابدأ اليوم',
    'cta.title':  'هل أنت مستعد لاحتراف<br>إدارتك مع Excel؟',
    'cta.desc':   'حمّل قالبك الأول وشاهد الفرق في أقل من ساعة. شراء آمن وضمان الرضا.',
    'cta.btn1':   'عرض القوالب',
    'cta.btn2':   'اتصل بنا',

    /* ── PRODUCTS PAGE ── */
    'ppage.hero.badge':    'الكتالوج الكامل',
    'ppage.hero.title':    'جميع قوالب Excel لدينا',
    'ppage.hero.desc':     'أدوات احترافية لكل احتياج مهني. حمّل واستخدم فوراً.',
    'ppage.filter.all':    'جميع القوالب',
    'ppage.filter.risk':   '🛡️ إدارة المخاطر',
    'ppage.filter.fin':    '📊 الرقابة المالية',
    'ppage.filter.log':    '🚛 النقل والخدمات اللوجستية',
    'ppage.risk.badge':    'إدارة المخاطر',
    'ppage.risk.title':    'قوالب المخاطر',
    'ppage.fin.badge':     'الرقابة المالية',
    'ppage.fin.title':     'القوالب المالية',
    'ppage.log.badge':     'النقل والخدمات اللوجستية',
    'ppage.log.title':     'قوالب الخدمات اللوجستية',
    'ppage.buy.gumroad':   '⬇ Gumroad',
    'ppage.buy.payhip':    '⬇ Payhip',
    'pp.r1.title': 'سجل المخاطر ولوحة المؤشرات',
    'pp.r1.desc':  'القالب الشامل لتحديد وتقييم وترتيب أولويات ومتابعة جميع مخاطرك التشغيلية. مصفوفة ديناميكية وتنبيهات آلية.',
    'pp.r1.f1': 'مصفوفة حرجية 5×5 تفاعلية',
    'pp.r1.f2': 'تسجيل تلقائي (احتمالية × تأثير)',
    'pp.r1.f3': 'خطة الإجراءات التصحيحية مدمجة',
    'pp.r1.f4': 'لوحة KPI مع رسوم بيانية',
    'pp.r1.f5': 'تصدير تقرير PDF',
    'pp.r2.title': 'خطة استمرارية الأعمال (BCP)',
    'pp.r2.desc':  'هيكل ووثّق خطة استمرارية أعمالك: تحليل الأثر، سيناريوهات الأزمات وإجراءات الاستعادة.',
    'pp.r2.f1': 'تحليل أثر الأعمال (BIA)',
    'pp.r2.f2': 'بطاقات سيناريوهات الأزمات',
    'pp.r2.f3': 'إجراءات الاستعادة موثقة',
    'pp.r2.f4': 'جدول اختبارات BCP',
    'pp.r3.title': 'التدقيق الداخلي — شبكة التقييم',
    'pp.r3.desc':  'جهّز مهام التدقيق الداخلي بشبكات ضبط وتقييم النضج وبطاقات ملاحظات موحدة.',
    'pp.r3.f1': 'شبكات ضبط حسب المجال',
    'pp.r3.f2': 'تقييم نضج الضوابط',
    'pp.r3.f3': 'بطاقات ملاحظات وتوصيات',
    'pp.r3.f4': 'تقرير تدقيق آلي',
    'pp.f1.title': 'متابعة الميزانية ومراقبة الانحرافات',
    'pp.f1.desc':  'راقب ميزانيتك الشهرية بعرض مقارن مخطط / فعلي / انحراف. تنبيهات آلية ورسوم بيانية ديناميكية.',
    'pp.f1.f1': 'جدول الفعلي / المخطط / الانحراف',
    'pp.f1.f2': 'رسوم بيانية للاتجاهات آلية',
    'pp.f1.f3': 'تنبيهات العتبات قابلة للضبط (بالألوان)',
    'pp.f1.f4': 'ملخص شهري وسنوي',
    'pp.f1.f5': 'متوافق مع مراكز التكلفة المتعددة',
    'pp.f2.title': 'جدول التدفق النقدي التوقعي',
    'pp.f2.desc':  'توقع احتياجاتك التمويلية بتدفق نقدي متجدد لـ 12 شهراً. سيناريوهات متفائلة / متشائمة مدمجة.',
    'pp.f2.f1': 'توقعات 12 شهراً متجددة',
    'pp.f2.f2': '3 سيناريوهات مقارنة',
    'pp.f2.f3': 'إدارة تأخيرات الدفع',
    'pp.f2.f4': 'رسم بياني للرصيد التراكمي',
    'pp.f3.title': 'التقرير المالي الشهري',
    'pp.f3.desc':  'أنشئ تقاريرك الشهرية آلياً: حساب النتائج، مؤشرات مالية رئيسية وجداول لإدارتك العليا.',
    'pp.f3.f1': 'حساب النتائج الموجز',
    'pp.f3.f2': 'نسب مالية آلية',
    'pp.f3.f3': 'رسوم بيانية لمجلس الإدارة',
    'pp.f3.f4': 'مقارنة السنة الحالية / السابقة',
    'pp.l1.title': 'لوحة تحكم النقل والتسليمات',
    'pp.l1.desc':  'راقب جميع تدفقات النقل، تابع ناقليك وحلّل تكاليفك حسب المسار والشهر.',
    'pp.l1.f1': 'متابعة التسليمات والحالات',
    'pp.l1.f2': 'مؤشرات الناقلين آلية',
    'pp.l1.f3': 'تحليل التكاليف حسب المسار',
    'pp.l1.f4': 'معدل الخدمة والالتزام بالمواعيد',
    'pp.l1.f5': 'تنبيهات التأخير قابلة للضبط',
    'pp.l2.title': 'إدارة المخزون والجرد',
    'pp.l2.desc':  'أدر مخزونك في الوقت الفعلي: المداخل والمخارج، التقييم وتنبيهات إعادة التموين.',
    'pp.l2.f1': 'بطاقة المنتج مع سجل الحركات',
    'pp.l2.f2': 'تقييم FIFO / المتوسط المرجح',
    'pp.l2.f3': 'تنبيهات الحد الأدنى للمخزون',
    'pp.l2.f4': 'لوحة تحكم المخزون الإجمالي',
    'pp.l3.title': 'خطة الجولات والتحسين',
    'pp.l3.desc':  'خطط وحسّن جولات التسليم: تخصيص المركبات، متابعة الكيلومترات والتكاليف وتحليل الربحية.',
    'pp.l3.f1': 'تخطيط الجولات الأسبوعية',
    'pp.l3.f2': 'تخصيص المركبة / السائق',
    'pp.l3.f3': 'متابعة الكيلومترات والوقود',
    'pp.l3.f4': 'تحليل التكلفة لكل تسليم',
    'ppage.cta.badge': 'احتياج خاص؟',
    'ppage.cta.title': 'هل لديك احتياج مخصص؟',
    'ppage.cta.desc':  'أستطيع إنشاء قالب Excel مخصص لقطاعك أو عملياتك الداخلية. اتصل بي للحصول على عرض سعر.',
    'ppage.cta.btn1':  'طلب عرض سعر',
    'ppage.cta.btn2':  'اكتشف خبرتي',

    /* ── ABOUT PAGE ── */
    'about.hero.badge':  'من نحن',
    'about.hero.title':  'خلف FlissiDigital',
    'about.hero.desc':   'خبير ميداني يحوّل تجربته إلى أدوات ملموسة للمحترفين.',
    'about.profile.title': 'خبير التدقيق والمالية · المؤسس',
    'about.profile.stat1': 'سنوات خبرة',
    'about.profile.stat2': 'قالب مُنشأ',
    'about.profile.stat3': 'مجالات رئيسية',
    'about.profile.stat4': 'رضا العملاء',
    'about.profile.l1':  'إرسال رسالة',
    'about.profile.l2':  'LinkedIn',
    'about.profile.l3':  'عرض قوالبي',
    'about.bio.h1':      'من أنا؟',
    'about.bio.p1':      'اسمي <strong>موراد فليسي</strong>، متخصص في التدقيق الداخلي والرقابة المالية بخبرة تتجاوز 10 سنوات في بيئات متطلبة — الصناعة والخدمات والنقل.',
    'about.bio.p2':      'على مدار مسيرتي، لاحظت أن فرق المالية والمخاطر والعمليات تقضي وقتاً طويلاً في (إعادة) إنشاء أدوات قيادة في Excel. لوحات تحكم مرتجلة وسجلات مخاطر غير منظمة ومتابعات ميزانية متضاربة.',
    'about.bio.p3':      'لذا قررت الاستفادة من خبرتي لإنشاء <strong>FlissiDigital</strong>: متجر قوالب Excel احترافية صارمة وجاهزة للعمل مباشرة. كل أداة مصممة لتلبية احتياجات حقيقية ومُختبرة ميدانياً.',
    'about.exp.h':       'مجالات خبرتي',
    'about.exp.1.name':  'إدارة المخاطر',
    'about.exp.1.desc':  'رسم الخرائط، التقييم، خطة المعالجة',
    'about.exp.2.name':  'الرقابة المالية',
    'about.exp.2.desc':  'الميزانية، التقارير، تحليل الانحرافات',
    'about.exp.3.name':  'النقل والخدمات اللوجستية',
    'about.exp.3.desc':  'مؤشرات النقل، المخزون، الجولات',
    'about.exp.4.name':  'التدقيق الداخلي',
    'about.exp.4.desc':  'شبكات الضبط، المهام، التقارير',
    'about.timeline.h':  'مساري المهني',
    'about.tl.1.title':  'المؤسس — FlissiDigital',
    'about.tl.1.co':     'إنشاء وبيع قوالب Excel الاحترافية',
    'about.tl.2.title':  'مسؤول الرقابة الداخلية والمخاطر',
    'about.tl.2.co':     'مجموعة صناعية — قطاع النقل والخدمات اللوجستية',
    'about.tl.3.title':  'مدقق مالي أول',
    'about.tl.3.co':     'مكتب تدقيق — عملاء من المؤسسات الصغيرة والمتوسطة',
    'about.tl.4.title':  'مراقب مالي',
    'about.tl.4.co':     'شركة توزيع — نطاق متعدد المواقع',
    'about.values.h':    'قيمي',
    'about.val.1.title': 'الدقة',
    'about.val.1.desc':  'كل معادلة مُختبرة وكل هيكل مُصادق عليه بسنوات من الممارسة الميدانية.',
    'about.val.2.title': 'العملية',
    'about.val.2.desc':  'أدوات تفتحها وتستخدمها فوراً دون تدريب أو إعداد معقد.',
    'about.val.3.title': 'إمكانية الوصول',
    'about.val.3.desc':  'أسعار عادلة لكي يتمكن كل محترف، مهما كان حجم هيكله، من التجهيز.',
    'about.cta.badge':   'لنعمل معاً',
    'about.cta.title':   'مشروع مخصص؟<br>تحدّث معي.',
    'about.cta.desc':    'أستطيع تطوير أدوات Excel مكيّفة لسياقك المحدد. التدقيق، المالية، الخدمات اللوجستية — اتصل بي.',
    'about.cta.btn1':    'اتصل بي',
    'about.cta.btn2':    'عرض القوالب',

    /* ── CONTACT PAGE ── */
    'contact.hero.badge':  'اتصل بنا',
    'contact.hero.title':  'لنتحدث عن مشروعك',
    'contact.hero.desc':   'سؤال عن قالب أو احتياج مخصص أو دعم تقني — أرد عليك خلال 24 ساعة.',
    'contact.info.1.title': 'البريد الإلكتروني',
    'contact.info.1.val':   'رد خلال 24 ساعة عمل',
    'contact.info.2.title': 'LinkedIn',
    'contact.info.2.val':   'للمشاريع المهنية',
    'contact.info.3.title': 'دعم المشترين',
    'contact.info.3.val':   'هل اشتريت قالباً وتحتاج مساعدة؟ تواصل معي مباشرة عبر Gumroad أو Payhip.',
    'contact.info.4.title': 'قوالب مخصصة',
    'contact.info.4.val':   'هل تحتاج أداة Excel محددة؟ أطوّر حلولاً مخصصة لقطاعك.',
    'contact.faq.title': 'الأسئلة الشائعة',
    'contact.faq.1.q': 'كيف أستلم القالب؟',
    'contact.faq.1.a': 'بعد الدفع على Gumroad أو Payhip، تتلقى فوراً رابط تحميل عبر البريد الإلكتروني. الملف بصيغة .xlsx.',
    'contact.faq.2.q': 'هل القوالب تعمل على Mac؟',
    'contact.faq.2.a': 'نعم، جميع القوالب متوافقة مع Excel على Mac (Excel 2016+، Microsoft 365). بعض التنسيقات قد تختلف قليلاً.',
    'contact.faq.3.q': 'هل يمكنني استخدام القالب لعدة شركات؟',
    'contact.faq.3.a': 'الترخيص شخصي (استخدام فردي). للاستخدام متعدد الشركات أو من قِبَل فريق، تواصل معي للحصول على ترخيص مهني.',
    'contact.faq.4.q': 'هل هناك سياسة استرداد؟',
    'contact.faq.4.a': 'نعم، إذا لم يتطابق القالب مع الوصف أو كان به خلل، أقدم استرداداً كاملاً خلال 7 أيام. تواصل معي مباشرة.',
    'contact.form.title':    'أرسل لي رسالة',
    'contact.form.subtitle': 'جميع الردود خلال 24 ساعة عمل.',
    'contact.form.firstname': 'الاسم الأول',
    'contact.form.lastname':  'اسم العائلة',
    'contact.form.email':     'البريد الإلكتروني',
    'contact.form.company':   'الشركة / المؤسسة',
    'contact.form.subject':   'الموضوع',
    'contact.form.message':   'الرسالة',
    'contact.form.ph.fn':     'موراد',
    'contact.form.ph.ln':     'فليسي',
    'contact.form.ph.email':  'بريدك@الإلكتروني.com',
    'contact.form.ph.co':     'اسم شركتك (اختياري)',
    'contact.form.ph.msg':    'صف احتياجك أو سؤالك بالتفصيل…',
    'contact.form.sel.default': 'اختر موضوعاً',
    'contact.form.sel.1': 'سؤال عن قالب',
    'contact.form.sel.2': 'دعم تقني',
    'contact.form.sel.3': 'طلب قالب مخصص',
    'contact.form.sel.4': 'ترخيص مهني / فريق',
    'contact.form.sel.5': 'استرداد',
    'contact.form.sel.6': 'أخرى',
    'contact.form.privacy': 'أوافق على معالجة بياناتي في إطار طلب التواصل هذا، وفقاً لـ<a href="#" style="color:var(--emerald-dark);font-weight:600">سياسة الخصوصية</a>.',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.sent':   '✓ تم إرسال الرسالة!',
  }
};

// ─── Core engine ────────────────────────────────────────────────────────────

const STORAGE_KEY = 'xldashboard_lang';

function getLang() {
  return localStorage.getItem(STORAGE_KEY) || null;
}

function saveLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

function applyLang(lang) {
  const t = T[lang];
  if (!t) return;

  // Dir + lang on <html>
  const isRTL = lang === 'ar';
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  document.body.classList.toggle('rtl', isRTL);

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  // HTML nodes
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v !== undefined) el.setAttribute('placeholder', v);
  });

  // Select options
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const v = t[el.dataset.i18nOpt];
    if (v !== undefined) el.textContent = v;
  });

  // Page title
  const page = document.body.dataset.page || 'index';
  const titleKey = `meta.title.${page}`;
  if (t[titleKey]) document.title = t[titleKey];

  // Switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function switchLanguage(lang) {
  saveLang(lang);
  applyLang(lang);
  hideBanner(); // manual override hides banner
}

// ─── Welcome banner ─────────────────────────────────────────────────────────

let bannerTimer = null;

function showBanner(lang) {
  const banner = document.getElementById('lang-banner');
  const text = document.getElementById('lang-banner-text');
  if (!banner || !text) return;
  const msg = T[lang] && T[lang]['banner'];
  if (!msg) return;
  text.textContent = msg;
  banner.style.display = 'flex';
  banner.classList.remove('banner-hiding');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(hideBanner, 3000);
}

function hideBanner() {
  const banner = document.getElementById('lang-banner');
  if (!banner) return;
  banner.classList.add('banner-hiding');
  setTimeout(() => { banner.style.display = 'none'; banner.classList.remove('banner-hiding'); }, 400);
}

// ─── Auto-detect via IP ──────────────────────────────────────────────────────

async function detectLangByIP() {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
    const data = await res.json();
    const country = (data.country_code || '').toUpperCase();
    if (ARABIC_COUNTRIES.has(country)) return 'ar';
    if (FRENCH_COUNTRIES.has(country)) return 'fr';
    return 'en';
  } catch {
    return 'fr'; // fallback
  }
}

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Wire up all lang buttons (desktop + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });

  // Banner close button
  const bannerClose = document.getElementById('lang-banner-close');
  if (bannerClose) bannerClose.addEventListener('click', hideBanner);

  const saved = getLang();

  if (saved) {
    // User previously chose a language — apply silently
    applyLang(saved);
  } else {
    // First visit — detect by IP, show banner
    applyLang('fr'); // optimistic default while fetching
    detectLangByIP().then(lang => {
      saveLang(lang);
      applyLang(lang);
      showBanner(lang);
    });
  }
});
