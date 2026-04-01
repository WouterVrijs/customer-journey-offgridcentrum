import { useState } from "react";

const phases = [
  {
    id: "awareness",
    label: "Bewustwording",
    icon: "💡",
    color: "#F59E0B",
    bgLight: "#FEF3C7",
    description: "Klant realiseert behoefte aan energie-onafhankelijkheid",
    touchpoints: [
      // --- Betaalde kanalen ---
      { name: "Meta Ads — Instagram & Facebook campagnes", type: "paid", status: "active", priority: "high" },
      { name: "Google Ads (Search & Display)", type: "paid", status: "missing", priority: "high" },
      { name: "YouTube Ads (pre-roll / in-stream)", type: "paid", status: "missing", priority: "medium" },
      // --- Organische kanalen ---
      { name: "SEO — blogartikelen & landingspagina's in Google", type: "organic_digital", status: "active", priority: "high" },
      { name: "Kennisbank / Blog (19+ artikelen op site)", type: "content", status: "active", priority: "high" },
      { name: "YouTube kanaal (@Offgridcentrum)", type: "content", status: "active", priority: "medium" },
      { name: "Instagram profiel (@offgridcentrum)", type: "social", status: "active", priority: "medium" },
      { name: "Facebook pagina (offgridcentrum)", type: "social", status: "active", priority: "medium" },
      // --- Earned & referral ---
      { name: "Google Reviews (4.7/5, 41+ reviews)", type: "earned", status: "active", priority: "high" },
      { name: "Mond-tot-mond / klantverwijzingen", type: "earned", status: "active", priority: "high" },
      { name: "Ambassadeursprogramma (bestaande klanten)", type: "referral", status: "active", priority: "medium" },
      { name: "Affiliate / partnerprogramma", type: "referral", status: "active", priority: "low" },
      // --- Trigger events (externe motivatie) ---
      { name: "Nieuwsberichten over saldering stopt 2027", type: "trigger", status: "passive", priority: "high" },
      { name: "Stroomuitval / netcongestie in de regio", type: "trigger", status: "passive", priority: "high" },
      { name: "Stijgende energieprijzen / EPEX pieken", type: "trigger", status: "passive", priority: "medium" },
      // --- Ontbrekende kanalen ---
      { name: "Google Business Profile (lokale vindbaarheid)", type: "local", status: "missing", priority: "high" },
      { name: "LinkedIn (B2B: bedrijfspanden, agrarisch)", type: "social", status: "missing", priority: "medium" },
      { name: "TikTok (korte video: installatie-timelapses)", type: "social", status: "missing", priority: "low" },
      { name: "PR / media (vakbladen, duurzaamheidsplatforms)", type: "earned", status: "missing", priority: "medium" },
      { name: "Beurzen & events (Vakbeurs Energie, Solar Solutions)", type: "offline", status: "missing", priority: "medium" },
      { name: "Showroom als walk-in touchpoint (Wierden)", type: "offline", status: "active", priority: "medium" },
      { name: "Retargeting Meta Pixel (websitebezoekers)", type: "paid", status: "missing", priority: "high" },
    ],
    emotions: "Bezorgd over energieprijzen, nieuwsgierig naar onafhankelijkheid, getriggerd door nieuws of stroomuitval",
    klantVraag: "\"Hoe afhankelijk ben ik eigenlijk? Kan ik zelf iets doen aan stijgende energieprijzen en netuitval?\"",
    kpiLabel: "KPI's om te tracken",
    kpis: ["Organisch verkeer per blogartikel", "CTR op Meta Ads", "Bounce rate landingspagina's", "Nieuwe vs terugkerende bezoekers", "Kosten per websitebezoek per kanaal", "Social media bereik & engagement", "Google Business impressies"],
    gaps: [
      "Geen GA4 / analytics tracking — onbekend welke kanalen converteren en wat de CAC is per kanaal",
      "Geen Google Ads — concurrent pakt betaalde zoekposities op 'thuisbatterij kopen', 'victron installateur'",
      "Geen Meta Pixel retargeting — bezoekers die afhaken worden niet opnieuw bereikt",
      "Google Business Profile onbekend of geoptimaliseerd — cruciaal voor lokale vindbaarheid showroom Wierden",
      "Geen LinkedIn aanwezigheid voor B2B segment (bedrijfspanden, agrarisch, peak shaving)",
      "YouTube kanaal bestaat maar onduidelijk hoe actief met nieuwe video content",
      "Geen PR/media strategie — Off-Gridcentrum komt niet voor in vakbladen of duurzaamheidsplatforms",
    ],
    opportunities: [
      "SEO uitbreiden: 'saldering stopt 2027', 'thuisbatterij kosten', 'noodstroom woning' zijn high-intent zoekwoorden",
      "Google Ads op branded + non-branded zoektermen met hoge koopintentie",
      "Meta retargeting: websitebezoekers die calculator of systeempagina's bezochten opnieuw bereiken",
      "Video content strategie: installatie-timelapses, klantcases, 'een dag met onze monteurs'",
      "Google Business Profile optimaliseren met foto's showroom, reviews, en posts",
      "LinkedIn voor B2B: peak shaving cases bij bedrijven delen, netcongestie-problematiek adresseren",
      "Trigger-based content: snel reageren op stroomuitvallen of energienieuws met social posts en blogartikelen",
      "PR: 'saldering stopt' expert-quotes aanbieden aan Tweakers, Bright, RTL Nieuws",
    ],
  },
  {
    id: "education",
    label: "Orientatie & Educatie",
    icon: "📚",
    color: "#3B82F6",
    bgLight: "#DBEAFE",
    description: "Klant leert over systeemtypes en mogelijkheden",
    touchpoints: [
      // --- Systeemuitleg pagina's ---
      { name: "Thuisbatterij Systemen pagina (prijsindicaties per tier)", type: "content", status: "active", priority: "high" },
      { name: "Off-Grid Systemen pagina", type: "content", status: "active", priority: "high" },
      { name: "Noodstroom Systemen pagina", type: "content", status: "active", priority: "high" },
      { name: "Dynamisch Handelen pagina (EPEX-koppeling)", type: "content", status: "active", priority: "medium" },
      { name: "Peak Shaving pagina (piekbelasting optimalisatie)", type: "content", status: "active", priority: "medium" },
      { name: "Victron Energy uitlegpagina (waarom Victron)", type: "content", status: "active", priority: "medium" },
      // --- Homepage educatie-elementen ---
      { name: "Homepage: 'Hoe afhankelijk ben jij?' sectie (4 risico's)", type: "content", status: "active", priority: "high" },
      { name: "Homepage: systeemoverzicht (off-grid, hybride, noodstroom, peak shaving, dynamisch)", type: "content", status: "active", priority: "high" },
      { name: "Homepage: Victron vs standaard batterijsysteem vergelijking", type: "content", status: "active", priority: "medium" },
      { name: "Homepage: adviestraject uitleg (3 stappen: advies → offerte → installatie)", type: "content", status: "active", priority: "high" },
      // --- Kenniscontent ---
      { name: "Blog / Kennisbank (19+ educatieve artikelen)", type: "content", status: "active", priority: "high" },
      { name: "Veelgestelde vragen pagina (kosten, levensduur, off-grid NL)", type: "content", status: "active", priority: "medium" },
      // --- Social proof & vertrouwen ---
      { name: "Projecten / cases pagina (8+ gedetailleerde installaties)", type: "social_proof", status: "active", priority: "high" },
      { name: "Google Reviews op homepage (4.7/5, namen + details)", type: "social_proof", status: "active", priority: "high" },
      { name: "Cijfers op homepage (800+ installaties, 8+ MWh, 98% tevredenheid)", type: "social_proof", status: "active", priority: "medium" },
      { name: "Officiele Victron Energy partner status", type: "trust", status: "active", priority: "medium" },
      // --- Productcatalogus ---
      { name: "Webshop: complete sets met specificaties (1-fase / 3-fase)", type: "catalog", status: "active", priority: "medium" },
      { name: "Productcategorieen (accu's, omvormers, monitoring, etc.)", type: "catalog", status: "active", priority: "medium" },
      // --- Persoonlijk contact ---
      { name: "Telefonisch advies (085 00 126 50, ma-vr 08:30-17:00)", type: "service", status: "active", priority: "high" },
      { name: "E-mail contact (info@offgridcentrum.nl)", type: "service", status: "active", priority: "medium" },
      { name: "Showroom Wierden (systemen live bekijken & testen)", type: "offline", status: "active", priority: "medium" },
      // --- Ontbrekende educatie touchpoints ---
      { name: "Vergelijkingstabel: alle systeemtypes naast elkaar", type: "content", status: "missing", priority: "high" },
      { name: "Interactieve keuzehulp voor systeemtype (voor calculator)", type: "tool", status: "missing", priority: "high" },
      { name: "WhatsApp Business / live chat op site", type: "service", status: "missing", priority: "high" },
      { name: "Video uitleg per systeemtype (korte explainers)", type: "content", status: "missing", priority: "medium" },
      { name: "Downloadbare gids: 'Alles over thuisbatterijen in NL' (lead magnet PDF)", type: "content", status: "missing", priority: "high" },
      { name: "Webinar / live Q&A sessies", type: "event", status: "missing", priority: "low" },
      { name: "Kosten & terugverdientijd pagina (met rekenvoorbeelden)", type: "content", status: "missing", priority: "high" },
      { name: "E-mail nurture na eerste websitebezoek", type: "automation", status: "missing", priority: "medium" },
      { name: "Retargeting ads met educatieve content (niet direct sales)", type: "paid", status: "missing", priority: "medium" },
    ],
    emotions: "Informatiezoekend, vergelijkend, overweldigd door opties, wil begrijpen wat past bij eigen situatie",
    klantVraag: "\"Wat is het verschil tussen off-grid, hybride en noodstroom? Wat kost het en hoe snel verdien ik het terug?\"",
    kpiLabel: "KPI's om te tracken",
    kpis: ["Tijd op systeempagina's", "Scroll-diepte per pagina", "Pagina's per sessie", "Calculator start-rate vanuit systeempagina's", "Blog artikelen gelezen voor conversie", "Telefoon/e-mail aanvragen vanuit educatie-content", "PDF downloads (toekomstig)"],
    gaps: [
      "Geen directe vergelijkingstabel — klant moet 4+ pagina's bezoeken om systeemtypes te vergelijken",
      "Geen interactieve keuzehulp — klant moet zelf bepalen welk type relevant is voor de calculator",
      "Geen WhatsApp/live chat — hoge drempel om te bellen, laagdrempelig kanaal ontbreekt",
      "Geen downloadbare lead magnet — geen manier om e-mailadres te vangen van orienterende bezoeker",
      "Geen expliciete kosten/terugverdientijd pagina — klant moet zelf prijzen bij elkaar zoeken",
      "Geen video-uitleg per systeemtype — tekst-heavy pagina's kunnen overweldigen",
      "Geen e-mail nurture flow — bezoekers die orienteren maar nog niet klaar zijn worden niet gevolgd",
    ],
    opportunities: [
      "Vergelijkingspagina: off-grid vs hybride vs noodstroom vs peak shaving in een overzichtelijke tabel",
      "Lead magnet PDF: 'De complete gids thuisbatterijen in Nederland 2026' → e-mail capture",
      "WhatsApp Business knop op alle systeempagina's: 'Stel direct je vraag'",
      "Interactieve keuzehulp: 3-5 vragen → aanbeveling systeemtype → doorlink naar calculator",
      "Kosten & terugverdientijd pagina met concrete rekenvoorbeelden per situatie",
      "Korte video per systeemtype (60-90 sec): 'Wat is een hybride systeem?' met animatie",
      "E-mail nurture: bezoeker downloadt PDF → dag 2 case study → dag 5 calculator uitnodiging → dag 10 adviesgesprek CTA",
      "Retargeting: bezoeker leest blog over noodstroom → ziet Meta ad met noodstroom case study",
    ],
  },
  {
    id: "calculator",
    label: "Calculator & Configuratie",
    icon: "🔧",
    color: "#8B5CF6",
    bgLight: "#EDE9FE",
    description: "Klant berekent welk systeem bij zijn situatie past",
    touchpoints: [
      // --- Calculator flow (5 stappen) ---
      { name: "Stap 1: Functie systeem (zelfconsumptie / handelen / noodstroom)", type: "tool", status: "active", priority: "high" },
      { name: "Stap 2: Stroomverbruik (jaarverbruik & dagverbruik)", type: "tool", status: "active", priority: "high" },
      { name: "Stap 3: Stroomopwekking (zonnepanelen, WP, opwek)", type: "tool", status: "active", priority: "high" },
      { name: "Stap 4: Overige info (woonsituatie, fase-aansluiting)", type: "tool", status: "active", priority: "high" },
      { name: "Stap 5: Jouw advies (systeemaanbeveling + prijsindicatie)", type: "tool", status: "active", priority: "high" },
      // --- Vertrouwenssignalen in calculator ---
      { name: "Social proof in calculator (800+ installaties, 10 jaar garantie, 4.8/5)", type: "trust", status: "active", priority: "medium" },
      { name: "Victron Partner badge in calculator", type: "trust", status: "active", priority: "medium" },
      // --- Resultaat & aanbevelingen ---
      { name: "Voorbeeldsystemen met prijsindicatie (Starter / Comfort / Maximaal)", type: "content", status: "active", priority: "high" },
      { name: "CTA's na resultaat: 'Offerte aanvragen' / 'Adviesgesprek plannen'", type: "conversion", status: "active", priority: "high" },
      // --- Webshop als alternatief configuratiepad ---
      { name: "Webshop: 1-fase thuisbatterij sets (5+ varianten met specs)", type: "catalog", status: "active", priority: "medium" },
      { name: "Webshop: 3-fase thuisbatterij sets", type: "catalog", status: "active", priority: "medium" },
      { name: "Webshop: complete sets categorie (alle kant-en-klare pakketten)", type: "catalog", status: "active", priority: "medium" },
      { name: "Webshop: losse componenten (accu's, omvormers, monitoring)", type: "catalog", status: "active", priority: "low" },
      { name: "Productpagina's met technische specificaties", type: "catalog", status: "active", priority: "medium" },
      { name: "Productzoekfunctie op site", type: "tool", status: "active", priority: "medium" },
      // --- Persoonlijk advies parallel pad ---
      { name: "Telefonisch advies (085 00 126 50)", type: "service", status: "active", priority: "high" },
      { name: "E-mail adviesaanvraag (info@offgridcentrum.nl)", type: "service", status: "active", priority: "medium" },
      { name: "Offerte aanvragen pagina (direct, zonder calculator)", type: "conversion", status: "active", priority: "high" },
      // --- Ontbrekende touchpoints ---
      { name: "E-mail lead capture na calculator-resultaat", type: "automation", status: "missing", priority: "high" },
      { name: "Abandoned calculator flow (herinnering bij niet-afronden)", type: "automation", status: "missing", priority: "high" },
      { name: "Calculator-resultaat opslaan & delen (link/PDF)", type: "tool", status: "missing", priority: "high" },
      { name: "Calculator-resultaat → directe match met webshop set", type: "tool", status: "missing", priority: "high" },
      { name: "Terugverdientijd berekening in calculator output", type: "tool", status: "missing", priority: "medium" },
      { name: "WhatsApp knop bij calculator-resultaat ('Bespreek je resultaat')", type: "service", status: "missing", priority: "medium" },
      { name: "Vergelijking eigen resultaat met vergelijkbare klantcase", type: "social_proof", status: "missing", priority: "medium" },
      { name: "Prijsvergelijking met maandelijkse energiekosten zonder systeem", type: "content", status: "missing", priority: "medium" },
      { name: "Subsidie/financiering info bij calculator-resultaat", type: "content", status: "missing", priority: "medium" },
      { name: "Live voorraad/levertijd indicatie bij aanbevolen sets", type: "digital", status: "missing", priority: "low" },
    ],
    emotions: "Betrokken, concreet aan het worden, wil duidelijkheid over kosten en terugverdientijd",
    klantVraag: "\"Hoeveel kWh heb ik nodig? Wat kost dit precies? Wanneer heb ik mijn investering terugverdiend?\"",
    kpiLabel: "KPI's om te tracken",
    kpis: ["Calculator start rate", "Calculator completion rate", "Drop-off per stap (1→5)", "Conversie naar offerte/afspraak", "Conversie naar webshop set", "Tijd in calculator", "Resultaat → lead capture rate", "Herhaald calculator gebruik"],
    gaps: [
      "Geen lead capture na calculator — bezoeker krijgt resultaat maar kan anoniem vertrekken",
      "Geen abandoned calculator flow — 60-70% start maar rondt niet af, die worden niet teruggehaald",
      "Calculator-resultaat niet opslaanbaar — bezoeker kan resultaat niet bewaren of delen met partner",
      "Geen directe koppeling resultaat → matching webshop set — klant moet zelf zoeken",
      "Geen terugverdientijd berekening — de belangrijkste vraag bij high-ticket aankopen blijft onbeantwoord",
      "Geen subsidie/financiering informatie bij resultaat — klant weet niet welke regelingen beschikbaar zijn",
      "Geen vergelijking met echte klantcase — gemiste kans voor social proof op het moment van hoogste betrokkenheid",
    ],
    opportunities: [
      "Lead capture aan einde calculator: 'Ontvang je persoonlijk systeemadvies per e-mail' met naam + e-mail",
      "Abandoned calculator flow: cookie-based herinnering + retargeting ad na 24 uur",
      "Resultaat opslaanbaar als PDF / deelbare link — klant kan bespreken met partner",
      "Directe match: calculator-resultaat koppelen aan beste webshop set + verschil met maatwerk tonen",
      "Terugverdientijd module: 'Met jouw verbruik bespaar je €X/maand, terugverdiend in Y jaar'",
      "Vergelijkbare case tonen: 'Sander uit Brabant had een vergelijkbare situatie — bekijk zijn installatie'",
      "Subsidiewijzer: automatisch tonen welke regelingen van toepassing zijn (ISDE, btw-voordeel)",
      "WhatsApp CTA bij resultaat: 'Vragen over je resultaat? Stuur ons direct een bericht'",
      "Financieringsoptie tonen: '€X per maand bij gespreide betaling' naast totaalprijs",
    ],
  },
  {
    id: "consultation",
    label: "Advies & Offerte",
    icon: "🤝",
    color: "#10B981",
    bgLight: "#D1FAE5",
    description: "Persoonlijk adviesgesprek en maatwerk offerte",
    touchpoints: [
      // --- Eerste contact & aanvraag ---
      { name: "Offerte aanvragen formulier op website", type: "conversion", status: "active", priority: "high" },
      { name: "Telefonisch advies (085 00 126 50, ma-vr 08:30-17:00)", type: "service", status: "active", priority: "high" },
      { name: "E-mail adviesaanvraag (info@offgridcentrum.nl)", type: "service", status: "active", priority: "medium" },
      { name: "CTA's vanuit calculator-resultaat naar offerte", type: "conversion", status: "active", priority: "high" },
      { name: "CTA's vanuit systeempagina's naar offerte", type: "conversion", status: "active", priority: "medium" },
      { name: "Bevestigingsmail na offerte-aanvraag", type: "automation", status: "active", priority: "high" },
      // --- Showroom ervaring ---
      { name: "Showroom afspraak boeken (€60, retour bij aankoop)", type: "service", status: "active", priority: "high" },
      { name: "Showroom: werkende systemen live bekijken & testen", type: "offline", status: "active", priority: "high" },
      { name: "Showroom: 1-op-1 begeleiding door specialist (60-90 min)", type: "service", status: "active", priority: "high" },
      { name: "Showroom: live demonstraties van Victron systemen", type: "offline", status: "active", priority: "medium" },
      // --- Adviesgesprek & offerte ---
      { name: "Persoonlijk adviesgesprek (situatieanalyse klant)", type: "service", status: "active", priority: "high" },
      { name: "Maatwerk offerte met rendementsprognose", type: "service", status: "active", priority: "high" },
      { name: "Technische systeemconfiguratie op maat", type: "service", status: "active", priority: "high" },
      // --- Vertrouwenssignalen in deze fase ---
      { name: "Officiele Victron Energy partner status", type: "trust", status: "active", priority: "high" },
      { name: "Eigen gecertificeerde installateurs (geen onderaannemers)", type: "trust", status: "active", priority: "high" },
      { name: "1000+ installaties track record", type: "trust", status: "active", priority: "medium" },
      { name: "10 jaar garantie", type: "trust", status: "active", priority: "high" },
      { name: "Service en garantie na oplevering", type: "trust", status: "active", priority: "medium" },
      { name: "Google Reviews (4.7/5) zichtbaar op site", type: "trust", status: "active", priority: "medium" },
      // --- Beslissingsondersteuning (partner/gezin) ---
      { name: "Offertebespreking met partner/gezin (beslisperiode)", type: "lifecycle", status: "passive", priority: "high" },
      { name: "Second opinion zoeken bij concurrenten", type: "lifecycle", status: "passive", priority: "high" },
      // --- Webshop als direct aankooppad ---
      { name: "Webshop: directe aankoop complete set (zonder adviestraject)", type: "conversion", status: "active", priority: "medium" },
      { name: "Winkelwagen & checkout flow (Medusa)", type: "digital", status: "active", priority: "medium" },
      // --- Ontbrekende touchpoints ---
      { name: "Offerte follow-up e-mailflow (geautomatiseerd)", type: "automation", status: "missing", priority: "high" },
      { name: "Offerte reminder na 7 / 14 / 21 dagen", type: "automation", status: "missing", priority: "high" },
      { name: "After-showroom e-mail (samenvatting + offerte)", type: "automation", status: "missing", priority: "high" },
      { name: "WhatsApp follow-up na adviesgesprek", type: "service", status: "missing", priority: "medium" },
      { name: "Offerte als interactief online document (ipv alleen PDF)", type: "tool", status: "missing", priority: "medium" },
      { name: "Vergelijkbare klantcase meesturen bij offerte", type: "social_proof", status: "missing", priority: "medium" },
      { name: "Financieringsopties in offerte (gespreide betaling)", type: "content", status: "missing", priority: "medium" },
      { name: "Subsidiecheck meesturen bij offerte (ISDE, btw-voordeel)", type: "content", status: "missing", priority: "medium" },
      { name: "Exit-survey bij afgewezen offerte ('Waarom niet?')", type: "feedback", status: "missing", priority: "medium" },
      { name: "Retargeting ad voor openstaande offertes", type: "paid", status: "missing", priority: "low" },
      { name: "Referentie-gesprek regelen met bestaande klant", type: "social_proof", status: "missing", priority: "low" },
      { name: "ROI / terugverdientijd simulatie bij offerte", type: "tool", status: "missing", priority: "high" },
    ],
    emotions: "Serieus geinteresseerd maar voorzichtig, wil vertrouwen opbouwen, bespreekt met partner, vergelijkt met concurrenten",
    klantVraag: "\"Kan ik deze mensen vertrouwen? Is €60 voor een adviesgesprek het waard? Hoe verhoudt dit zich tot de concurrent? Wanneer is mijn investering terugverdiend?\"",
    kpiLabel: "KPI's om te tracken",
    kpis: ["Offerte-aanvragen per maand", "Showroom afspraken per maand", "Offerte → klant conversie %", "Gem. doorlooptijd offerte → beslissing", "Gem. offertewaarde", "Redenen voor afwijzing", "Bron van offerte-aanvraag (calculator / telefoon / direct)", "Showroom no-show rate"],
    gaps: [
      "Geen geautomatiseerde follow-up na verstuurde offerte — prospect wordt aan lot overgelaten tijdens beslisperiode",
      "Geen offerte-reminders — bij high-ticket aankopen duurt beslissing 2-6 weken, in die tijd verlies je momentum",
      "Geen after-showroom e-mail — geen samenvatting van wat besproken is, prospect moet alles onthouden",
      "Geen inzicht in redenen voor afwijzing — onbekend waarom prospects afhaken (prijs? concurrent? timing?)",
      "Geen financieringsopties in offerte — €15.000+ ineens is voor veel huishoudens een drempel",
      "Geen subsidie-informatie bij offerte — klant weet niet welke regelingen de netto-investering verlagen",
      "Geen ROI/terugverdientijd simulatie — het sterkste verkoopargument wordt niet geconcretiseerd in de offerte",
      "Offerte alleen als statische PDF — geen interactief document waarin klant opties kan aanpassen",
    ],
    opportunities: [
      "Offerte follow-up e-mailflow: dag 3 = vergelijkbare case study, dag 7 = FAQ's & bezwaren, dag 14 = bel-herinnering specialist",
      "After-showroom e-mail: automatische samenvatting gesprek + persoonlijke offerte + contactgegevens specialist",
      "ROI-module in offerte: concrete terugverdientijd op basis van klant's verbruik en energieprijzen",
      "Subsidiewijzer meesturen: ISDE, btw-voordeel, eventuele gemeentelijke regelingen automatisch bepalen",
      "Financieringspartner integreren: 'Vanaf €X per maand' naast totaalprijs in offerte",
      "Exit-survey bij afgewezen offertes: korte vragenlijst → verbetert aanbod en verkoopproces",
      "Interactieve offerte: online document waar klant opties kan toevoegen/verwijderen en direct de prijs ziet veranderen",
      "Referentiegesprek aanbieden: 'Wil je praten met een klant in een vergelijkbare situatie?'",
      "WhatsApp follow-up: laagdrempelig kanaal om vragen te beantwoorden tijdens beslisperiode",
    ],
  },
  {
    id: "installation",
    label: "Installatie & Oplevering",
    icon: "⚡",
    color: "#F97316",
    bgLight: "#FFF7ED",
    description: "Professionele installatie en systeem in gebruik nemen",
    touchpoints: [
      // --- Pre-installatie (wachttijd na akkoord) ---
      { name: "Orderbevestiging e-mail na akkoord offerte", type: "automation", status: "active", priority: "high" },
      { name: "Aanbetaling / betaling regelen", type: "digital", status: "active", priority: "high" },
      { name: "Wachttijd: levering componenten (Victron, accu's, panelen)", type: "lifecycle", status: "passive", priority: "high" },
      { name: "Planning installatie: datum prikken met klant", type: "service", status: "active", priority: "high" },
      { name: "Pre-installatie communicatie (wat te verwachten)", type: "automation", status: "missing", priority: "high" },
      { name: "Voorbereiding klant: 'Zorg dat X en Y toegankelijk zijn'", type: "content", status: "missing", priority: "medium" },
      // --- Installatiedag ---
      { name: "Installatie door eigen gecertificeerde monteurs", type: "service", status: "active", priority: "high" },
      { name: "Montage componenten (omvormers, accu's, bekabeling)", type: "service", status: "active", priority: "high" },
      { name: "Aansluiting op meterkast / bestaande installatie", type: "service", status: "active", priority: "high" },
      { name: "Aansluiting zonnepanelen (indien onderdeel van systeem)", type: "service", status: "active", priority: "medium" },
      { name: "Systeem configuratie & inbedrijfstelling", type: "service", status: "active", priority: "high" },
      { name: "Victron VRM portaal koppelen & inrichten", type: "service", status: "active", priority: "high" },
      { name: "ESS / Dynamic ESS configuratie (indien van toepassing)", type: "service", status: "active", priority: "medium" },
      { name: "Testen: noodstroom-omschakeling, laad/ontlaadcyclus", type: "service", status: "active", priority: "high" },
      // --- Oplevering & overdracht ---
      { name: "Oplevering: uitleg werking systeem aan klant", type: "service", status: "active", priority: "high" },
      { name: "Demonstratie Victron VRM app (monitoring op telefoon)", type: "service", status: "active", priority: "high" },
      { name: "Uitleg: wat te doen bij storing / wie te bellen", type: "service", status: "active", priority: "medium" },
      { name: "Opleverdocument / foto's van installatie", type: "content", status: "missing", priority: "medium" },
      { name: "Garantiecertificaat overhandigen (10 jaar)", type: "content", status: "active", priority: "medium" },
      // --- Direct na oplevering ---
      { name: "Serviceabonnement aanbod (doorlopende monitoring & onderhoud)", type: "service", status: "active", priority: "high" },
      { name: "Klantenservice beschikbaar (085 00 126 50)", type: "service", status: "active", priority: "high" },
      { name: "Klant monitort eigen systeem via Victron VRM", type: "digital", status: "active", priority: "high" },
      // --- Webshop componenten (zelf besteld) ---
      { name: "Webshop: track & trace bij losse componentbestellingen", type: "digital", status: "active", priority: "medium" },
      { name: "Verzendpagina met informatie over levertijden", type: "content", status: "active", priority: "low" },
      { name: "Retourbeleid pagina", type: "content", status: "active", priority: "low" },
      // --- Ontbrekende touchpoints ---
      { name: "Pre-installatie e-mailflow (tijdlijn, verwachtingen, voorbereiding)", type: "automation", status: "missing", priority: "high" },
      { name: "Wachttijd updates ('Jouw componenten zijn binnen / installatie over X dagen')", type: "automation", status: "missing", priority: "high" },
      { name: "Post-installatie welkom e-mail (dag 0: gefeliciteerd + VRM tips)", type: "automation", status: "missing", priority: "high" },
      { name: "Onboarding e-mailflow dag 1-30 (tips, optimalisatie, FAQ's)", type: "automation", status: "missing", priority: "high" },
      { name: "Quick-start guide per systeemtype (digitaal, PDF of video)", type: "content", status: "missing", priority: "high" },
      { name: "Video handleiding: 'Jouw eerste week met Victron' per systeemtype", type: "content", status: "missing", priority: "medium" },
      { name: "Proactieve check-in call/mail na 2 weken", type: "service", status: "missing", priority: "high" },
      { name: "Opleverfoto's delen op social media (met toestemming klant)", type: "social", status: "missing", priority: "medium" },
      { name: "Klant uitnodigen voor projectenpagina (case study worden)", type: "social_proof", status: "missing", priority: "medium" },
      { name: "SMS/WhatsApp bevestiging installatiedatum", type: "automation", status: "missing", priority: "medium" },
      { name: "Digitaal opleverdossier (foto's, configuratie, garantie, contactgegevens)", type: "content", status: "missing", priority: "medium" },
      { name: "VRM monitoring alert setup (klant krijgt melding bij afwijkingen)", type: "digital", status: "missing", priority: "medium" },
      { name: "Tevredenheidsenquete na 1 week", type: "feedback", status: "missing", priority: "medium" },
      { name: "Kennisbank link: 'Veelgestelde vragen na installatie'", type: "content", status: "missing", priority: "low" },
    ],
    emotions: "Enthousiast maar ongeduldig tijdens wachttijd, opgetogen op installatiedag, trots maar soms overweldigd daarna",
    klantVraag: "\"Wanneer wordt het geinstalleerd? Hoe lang duurt het? Hoe werkt het VRM portaal? Wat doe ik als er iets misgaat?\"",
    kpiLabel: "KPI's om te tracken",
    kpis: ["Doorlooptijd akkoord → installatie", "Installatietevredenheid (NPS)", "Support tickets eerste 30 dagen", "Serviceabonnement conversie %", "VRM activatiepercentage", "Onboarding e-mail engagement", "Terugbelverzoeken eerste maand", "Case study conversie (klant → project op site)"],
    gaps: [
      "Geen pre-installatie communicatie — klant weet na akkoord niet wat de tijdlijn is of wat hij moet voorbereiden",
      "Geen wachttijd-updates — bij weken wachttijd op componenten ontstaat onzekerheid en frustratie",
      "Geen geautomatiseerde onboarding e-mailflow na installatie — klant wordt losgelaten met een complex systeem",
      "Geen quick-start guide of video per systeemtype — klant moet zelf uitzoeken hoe VRM, ESS, etc. werkt",
      "Geen proactieve check-in na installatie — problemen worden pas ontdekt als klant zelf belt",
      "Geen digitaal opleverdossier — foto's, configuratie en garantie niet centraal beschikbaar voor klant",
      "Geen tevredenheidsmeting — geen data om installatieproces te verbeteren",
      "Klant wordt niet uitgenodigd als case study — gemiste content voor projectenpagina en social proof",
    ],
    opportunities: [
      "Pre-installatie e-mailflow: dag 1 na akkoord = tijdlijn, week voor installatie = voorbereidingslijst, dag voor installatie = bevestiging",
      "Wachttijd updates: automatische statusmail bij ontvangst componenten en bij planning installatiedatum",
      "Post-installatie onboarding: dag 0 = welkom + VRM app setup, dag 3 = optimalisatietips, dag 7 = 'gaat alles goed?', dag 14 = check-in call",
      "Quick-start guide per systeemtype: visuele PDF + korte video (3-5 min) 'Zo werkt jouw Victron systeem'",
      "Digitaal opleverdossier: online portaal met foto's, systeemconfiguratie, garantiedocumenten, handleidingen, contactgegevens",
      "Proactieve check-in call na 2 weken: klanttevredenheid meten + serviceabonnement aanbieden + problemen opvangen",
      "Case study uitnodiging na 4 weken: 'Mogen wij jouw installatie delen op onze projectenpagina?'",
      "VRM monitoring alerts instellen: klant en Off-Gridcentrum krijgen melding bij systeemafwijkingen → proactieve service",
      "Opleverfoto's als social content: met toestemming klant delen op Instagram/Facebook → organisch bereik",
    ],
  },
  {
    id: "retention",
    label: "Retentie & Ambassadeurschap",
    icon: "🌟",
    color: "#EC4899",
    bgLight: "#FCE7F3",
    description: "Klant wordt terugkerende klant en ambassadeur",
    touchpoints: [
      // --- Doorlopende service & ondersteuning ---
      { name: "Serviceabonnement (monitoring, onderhoud, updates)", type: "service", status: "active", priority: "high" },
      { name: "Klantenservice (085 00 126 50)", type: "service", status: "active", priority: "high" },
      { name: "Klachtenafhandeling (klachtenpagina op site)", type: "service", status: "active", priority: "medium" },
      { name: "Retourbeleid (retourneren pagina op site)", type: "service", status: "active", priority: "low" },
      { name: "Garantie-afhandeling (10 jaar garantie)", type: "service", status: "active", priority: "medium" },
      // --- Monitoring & systeembeheer ---
      { name: "Klant monitort systeem via Victron VRM portaal", type: "digital", status: "active", priority: "high" },
      { name: "Victron VRM remote monitoring (door Off-Gridcentrum)", type: "digital", status: "missing", priority: "high" },
      { name: "Proactieve storingsdetectie via VRM alerts", type: "automation", status: "missing", priority: "high" },
      { name: "Periodieke systeem health-check (remote of on-site)", type: "service", status: "missing", priority: "medium" },
      { name: "Firmware updates Victron componenten", type: "service", status: "missing", priority: "medium" },
      // --- Reviews & social proof ---
      { name: "Google Reviews (4.7/5, 41+ reviews)", type: "social_proof", status: "active", priority: "high" },
      { name: "Klantcases op projectenpagina (8+ met foto's & specs)", type: "social_proof", status: "active", priority: "high" },
      { name: "Klantquotes op homepage (Ton, Mismieter, Helene)", type: "social_proof", status: "active", priority: "medium" },
      { name: "Automatisch review-verzoek na installatie", type: "automation", status: "missing", priority: "high" },
      { name: "Video-testimonials van klanten", type: "social_proof", status: "missing", priority: "medium" },
      { name: "Review-response strategie (reageren op alle Google Reviews)", type: "social_proof", status: "missing", priority: "medium" },
      // --- Ambassadeurs & referrals ---
      { name: "Off-Grid Ambassadeursprogramma (pagina op site)", type: "program", status: "active", priority: "medium" },
      { name: "Ambassadeur worden pagina (aanmeldflow)", type: "program", status: "active", priority: "medium" },
      { name: "Affiliate / partnerprogramma", type: "program", status: "active", priority: "low" },
      { name: "Solarge partnership", type: "partner", status: "active", priority: "low" },
      { name: "Solum Energy partnership", type: "partner", status: "active", priority: "low" },
      { name: "Klant-naar-klant referral beloning", type: "program", status: "missing", priority: "high" },
      { name: "Ambassadeur activatie & engagement (content, events)", type: "program", status: "missing", priority: "medium" },
      // --- Content & community ---
      { name: "Nieuwsbrief (aanmeldformulier op blog)", type: "content", status: "active", priority: "medium" },
      { name: "Blog / kennisbank (19+ artikelen)", type: "content", status: "active", priority: "medium" },
      { name: "Instagram (@offgridcentrum)", type: "social", status: "active", priority: "medium" },
      { name: "Facebook (offgridcentrum)", type: "social", status: "active", priority: "medium" },
      { name: "YouTube (@Offgridcentrum)", type: "social", status: "active", priority: "medium" },
      { name: "Klant spotlight op social media (installatiefoto's delen)", type: "social", status: "missing", priority: "medium" },
      { name: "Klant community (Facebook groep / forum)", type: "social", status: "missing", priority: "medium" },
      // --- Cross-sell & uitbreiding ---
      { name: "Webshop: losse componenten & uitbreidingen", type: "catalog", status: "active", priority: "medium" },
      { name: "Webshop: opruiming / aanbiedingen", type: "catalog", status: "active", priority: "low" },
      { name: "Cross-sell e-mail na installatie (extra accu's, monitoring, panelen)", type: "automation", status: "missing", priority: "high" },
      { name: "Seizoensgebonden upsell (winter = noodstroom upgrade, zomer = panelen)", type: "automation", status: "missing", priority: "medium" },
      { name: "Uitbreidingsadvies op basis van VRM data (verbruikspatroon analyse)", type: "tool", status: "missing", priority: "medium" },
      { name: "Jaarlijkse systeem-review met uitbreidingsvoorstel", type: "service", status: "missing", priority: "medium" },
      // --- Lifecycle communicatie ---
      { name: "Verjaardag systeem: '1 jaar energie-onafhankelijk!' e-mail", type: "automation", status: "missing", priority: "low" },
      { name: "Jaarlijks rendementoverzicht e-mail (besparingen, opbrengst)", type: "automation", status: "missing", priority: "high" },
      { name: "Beleidswijzigingen alert (saldering, subsidies, netcongestie)", type: "content", status: "missing", priority: "medium" },
      { name: "Productnieuws (nieuwe Victron modellen, firmware features)", type: "content", status: "missing", priority: "low" },
      // --- Heractivatie (slapende klanten) ---
      { name: "Win-back campagne inactieve klanten", type: "automation", status: "missing", priority: "low" },
      { name: "Onderhoudsherinnering (batterij health check na 2-3 jaar)", type: "automation", status: "missing", priority: "medium" },
    ],
    emotions: "Trots op systeem, wil delen met vrienden/buren, geinteresseerd in optimalisatie en uitbreiding, voelt zich deel van off-grid community",
    klantVraag: "\"Hoe haal ik het maximale uit mijn systeem? Kan ik uitbreiden? Hoe deel ik mijn ervaring? Wat verandert er in energiebeleid dat mij raakt?\"",
    kpiLabel: "KPI's om te tracken",
    kpis: ["Google Review score & maandelijkse groei", "Ambassadeur aanmeldingen & activiteit", "Nieuwsbrief abonnees & open rate", "Uitbreiding/herhaalaankoop %", "Customer Lifetime Value", "Referral conversie %", "Serviceabonnement retentie %", "NPS score", "Churn rate (inactieve klanten)", "Cross-sell omzet per bestaande klant"],
    gaps: [
      "Geen automatisch review-verzoek — met 1000+ installaties maar 41 reviews wordt <5% van het potentieel benut",
      "Geen cross-sell/upsell strategie — bestaande klanten krijgen geen proactief uitbreidingsaanbod",
      "Geen jaarlijks rendementoverzicht — klant weet niet hoeveel zijn systeem heeft opgeleverd (sterkste retentie-tool)",
      "Geen VRM remote monitoring door Off-Gridcentrum — storingen worden pas ontdekt als klant belt",
      "Geen klant-naar-klant referral beloning — mond-tot-mond wordt niet actief gestimuleerd",
      "Ambassadeursprogramma bestaat maar activatie en engagement onduidelijk",
      "Geen klant community — off-grid enthousiastelingen hebben geen plek om ervaringen te delen",
      "Geen review-response strategie — reacties op Google Reviews versterken vertrouwen voor nieuwe klanten",
      "Geen lifecycle communicatie — na installatie stopt de relatie tot klant zelf contact opneemt",
      "Geen data-gedreven uitbreidingsadvies — VRM data wordt niet gebruikt voor proactieve upsell",
    ],
    opportunities: [
      "Automatisch review-verzoek: e-mail + SMS 14 dagen na installatie → realistisch doel: 200+ reviews binnen 12 maanden",
      "Jaarlijks rendementoverzicht: 'Dit jaar bespaarde je €X, je systeem produceerde Y kWh' → sterkste retentie-tool + deelbaar op social",
      "Cross-sell flow 6 maanden na installatie: 'Je systeem draait goed — klaar voor de volgende stap?' met specifieke uitbreidingsopties",
      "VRM remote monitoring als premium service: proactieve storingdetectie → klant hoeft zich geen zorgen te maken",
      "Referral programma: 'Verwijs een vriend → ontvang €100 korting op uitbreiding' met unieke referral link",
      "Klant community: besloten Facebook groep of forum waar klanten tips delen, vragen stellen, foto's plaatsen",
      "Ambassadeur activatie: kwartaalevent (online of in showroom), exclusieve previews, vroege toegang tot nieuwe producten",
      "Seizoensgebonden nieuwsbrief: winter = noodstroom & dynamisch handelen tips, zomer = zonnepanelen uitbreiding, herfst = systeem winterklaar maken",
      "VRM data-analyse: automatisch signaleren wanneer klant baat heeft bij extra opslagcapaciteit → persoonlijk uitbreidingsvoorstel",
      "Review-response: reageer op elke Google Review (positief én negatief) → verhoogt vertrouwen voor nieuwe bezoekers",
      "Systeem verjaardag e-mail: '1 jaar off-grid!' met besparingscijfers + social share knop + cross-sell CTA",
    ],
  },
];

const statusConfig = {
  active: { label: "Actief", color: "#10B981", bg: "#D1FAE5" },
  in_progress: { label: "In ontwikkeling", color: "#F59E0B", bg: "#FEF3C7" },
  missing: { label: "Ontbreekt", color: "#EF4444", bg: "#FEE2E2" },
  passive: { label: "Passief", color: "#6B7280", bg: "#F3F4F6" },
  unknown: { label: "Onbekend", color: "#6B7280", bg: "#F3F4F6" },
};

const priorityConfig = {
  high: { label: "Hoog", color: "#EF4444" },
  medium: { label: "Medium", color: "#F59E0B" },
  low: { label: "Laag", color: "#6B7280" },
};

function PhaseCard({ phase, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "14px 12px",
        borderRadius: "12px",
        border: isSelected ? `2px solid ${phase.color}` : "2px solid #E5E7EB",
        backgroundColor: isSelected ? phase.bgLight : "#FFFFFF",
        cursor: "pointer",
        transition: "all 0.2s ease",
        minWidth: "120px",
        textAlign: "center",
        boxShadow: isSelected ? `0 4px 12px ${phase.color}33` : "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ fontSize: "24px", marginBottom: "4px" }}>{phase.icon}</div>
      <div style={{ fontWeight: 700, fontSize: "11px", color: phase.color, lineHeight: "1.3" }}>{phase.label}</div>
    </div>
  );
}

function StatusBadge({ status }) {
  const config = statusConfig[status];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "9999px",
        fontSize: "11px",
        fontWeight: 600,
        color: config.color,
        backgroundColor: config.bg,
        whiteSpace: "nowrap",
      }}
    >
      {config.label}
    </span>
  );
}

function PriorityDot({ priority }) {
  const config = priorityConfig[priority];
  return (
    <span
      title={`Prioriteit: ${config.label}`}
      style={{
        display: "inline-block",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: config.color,
        marginRight: "6px",
        flexShrink: 0,
      }}
    />
  );
}

function SummaryBar() {
  let totalTouchpoints = 0;
  let counts = { active: 0, in_progress: 0, missing: 0, passive: 0, unknown: 0 };
  phases.forEach((p) =>
    p.touchpoints.forEach((t) => {
      totalTouchpoints++;
      counts[t.status]++;
    })
  );
  const items = [
    { label: "Totaal touchpoints", value: totalTouchpoints, color: "#1F2937" },
    { label: "Actief", value: counts.active, color: "#10B981" },
    { label: "In ontwikkeling", value: counts.in_progress, color: "#F59E0B" },
    { label: "Ontbreekt", value: counts.missing, color: "#EF4444" },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        padding: "16px 24px",
        backgroundColor: "#F9FAFB",
        borderRadius: "12px",
        marginBottom: "24px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {items.map((item) => (
        <div key={item.label} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "24px", fontWeight: 800, color: item.color }}>{item.value}</div>
          <div style={{ fontSize: "11px", color: "#6B7280", fontWeight: 500 }}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontSize: "14px", fontWeight: 700, color: color, marginBottom: "10px", margin: "0 0 10px 0" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function CustomerJourney() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const phase = phases[selectedPhase];

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", maxWidth: "960px", margin: "0 auto", padding: "24px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#1F2937", margin: "0 0 4px 0" }}>
          Customer Journey Map
        </h1>
        <p style={{ fontSize: "15px", color: "#6B7280", margin: "0 0 2px 0" }}>Off-Gridcentrum — Maart 2026</p>
        <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>Consultatie & installatie model · Victron Energy specialist · High-ticket (€3.000 – €15.000+)</p>
      </div>

      {/* Summary */}
      <SummaryBar />

      {/* Phase selector */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginBottom: "32px",
          overflowX: "auto",
          paddingBottom: "4px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {phases.map((p, i) => (
          <div key={p.id} style={{ display: "flex", alignItems: "center" }}>
            <PhaseCard phase={p} isSelected={selectedPhase === i} onClick={() => setSelectedPhase(i)} />
            {i < phases.length - 1 && (
              <div style={{ color: "#D1D5DB", fontSize: "18px", margin: "0 2px", flexShrink: 0 }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* Phase detail */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          border: `2px solid ${phase.color}22`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Phase header */}
        <div style={{ padding: "24px", backgroundColor: phase.bgLight, borderBottom: `2px solid ${phase.color}22` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "32px" }}>{phase.icon}</span>
            <div>
              <h2 style={{ fontSize: "22px", fontWeight: 800, color: phase.color, margin: 0 }}>
                {phase.label}
              </h2>
              <p style={{ fontSize: "14px", color: "#4B5563", margin: "2px 0 0 0" }}>{phase.description}</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "12px",
              padding: "10px 16px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              borderLeft: `4px solid ${phase.color}`,
            }}
          >
            <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "2px" }}>De klant denkt:</div>
            <div style={{ fontSize: "15px", fontStyle: "italic", color: "#1F2937", fontWeight: 500 }}>
              {phase.klantVraag}
            </div>
            <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>
              Emotie: {phase.emotions}
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Left column: Touchpoints */}
          <div>
            <Section title="Touchpoints" color={phase.color}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {phase.touchpoints.map((tp, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      backgroundColor: "#F9FAFB",
                      borderRadius: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", minWidth: 0, flex: 1, marginRight: "8px" }}>
                      <PriorityDot priority={tp.priority} />
                      <span style={{ color: "#1F2937", overflow: "hidden", textOverflow: "ellipsis" }}>{tp.name}</span>
                    </div>
                    <StatusBadge status={tp.status} />
                  </div>
                ))}
              </div>
            </Section>

            <Section title={phase.kpiLabel} color={phase.color}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {phase.kpis.map((kpi, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "4px 10px",
                      backgroundColor: phase.bgLight,
                      borderRadius: "6px",
                      fontSize: "12px",
                      color: phase.color,
                      fontWeight: 500,
                    }}
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            </Section>
          </div>

          {/* Right column: Gaps & Opportunities */}
          <div>
            <Section title="Knelpunten & Gaps" color="#EF4444">
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {phase.gaps.map((gap, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      padding: "8px 12px",
                      backgroundColor: "#FEF2F2",
                      borderRadius: "8px",
                      fontSize: "13px",
                      color: "#991B1B",
                      lineHeight: "1.4",
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>!</span>
                    <span>{gap}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Kansen & Quick Wins" color="#10B981">
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {phase.opportunities.map((opp, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      padding: "8px 12px",
                      backgroundColor: "#F0FDF4",
                      borderRadius: "8px",
                      fontSize: "13px",
                      color: "#166534",
                      lineHeight: "1.4",
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>+</span>
                    <span>{opp}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap",
          fontSize: "12px",
          color: "#6B7280",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#EF4444", display: "inline-block" }} />
          Hoge prioriteit
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#F59E0B", display: "inline-block" }} />
          Medium prioriteit
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#6B7280", display: "inline-block" }} />
          Lage prioriteit
        </div>
      </div>
    </div>
  );
}
