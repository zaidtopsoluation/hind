// Content for the individual service pages (/services/[slug]) and the
// service-area pages (/locations/[slug]). Edit text here; the page templates
// read from this file, and the sitemap lists every entry automatically.
//
// Pricing: by request, no rupee amounts are published. Every page explains
// that the price depends on the AC and the fault and is confirmed before work.
//
// Icons must be one of the names in app/fonts/README.md (the icon font is a subset).

export type Faq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  name: string; // short name used in links and breadcrumbs
  icon: string;
  metaTitle: string; // layout appends " | Hind Cool Service"
  metaDescription: string;
  h1: string;
  intro: string[];
  signsTitle: string;
  signs: string[];
  included: string[];
  process: { title: string; text: string }[];
  acTypes: string[];
  faqs: Faq[];
  related: string[]; // other service slugs
};

export type AreaContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  intro: string[];
  localTitle: string;
  local: string[];
  neighbourhoods: string[];
  popular: string[]; // service slugs
  faqs: Faq[];
};

export const PHONE_DISPLAY = '+91 74083 81814';
export const PHONE_TEL = 'tel:+917408381814';

export const PRICING_NOTE =
  'The price depends on the type and capacity of your AC, the fault, and any parts needed. Our technician inspects the unit first and tells you the exact cost before starting any work, so there are no surprises. Call us for a free quote.';

export const services: ServiceContent[] = [
  {
    slug: 'ac-repair',
    name: 'AC Repair',
    icon: 'build',
    metaTitle: 'AC Repair Service in Mumbai',
    metaDescription:
      'AC not cooling, leaking water or making noise? Hind Cool Service repairs split, window, inverter, ductable and VRF ACs across Mumbai. Call +91 74083 81814.',
    h1: 'AC Repair Service in Mumbai',
    intro: [
      'When your air conditioner stops cooling in Mumbai heat, you need a technician who finds the real fault quickly and fixes it properly the first time. Hind Cool Service repairs split, window, inverter, cassette, ductable and VRF/VRV air conditioners for homes, offices, shops and restaurants across Mumbai, Thane and Navi Mumbai.',
      'Our technicians work from our Saki Naka base in Andheri East and carry the tools for on-site diagnosis: gauges for refrigerant pressure, clamp meters for electrical faults, and nitrogen kits for leak testing. Most common faults are fixed on the first visit.',
    ],
    signsTitle: 'Common AC problems we fix',
    signs: [
      'AC running but not cooling, or cooling very slowly',
      'Water dripping or leaking from the indoor unit',
      'Ice forming on the indoor coil or copper pipes',
      'Outdoor unit not starting, or tripping the MCB',
      'Loud rattling, buzzing or grinding noises',
      'Error code blinking on an inverter AC display',
      'Bad smell when the AC is switched on',
      'Remote or display panel not responding',
    ],
    included: [
      'Full diagnosis of electrical, refrigerant and airflow faults',
      'Capacitor, fan motor, relay and sensor replacement',
      'PCB and inverter board fault checks',
      'Gas leak detection and repair',
      'Drain pipe flushing for water leakage',
      'Test run and cooling check after every repair',
    ],
    process: [
      { title: 'Call or book', text: 'Tell us your AC type, brand if known, and what is happening.' },
      { title: 'Inspection', text: 'The technician checks the indoor and outdoor units and finds the fault.' },
      { title: 'Clear quote', text: 'You get the exact cost, including any parts, before work starts.' },
      { title: 'Repair and test', text: 'We fix the fault and test-run the AC to confirm it cools properly.' },
    ],
    acTypes: ['Split AC', 'Window AC', 'Inverter AC', 'Cassette AC', 'Ductable AC', 'VRF / VRV systems'],
    faqs: [
      {
        q: 'Why is my AC running but not cooling?',
        a: 'The most common causes are a very dirty filter or coil, low refrigerant gas because of a leak, a weak capacitor, or a faulty outdoor fan. A technician can tell which one it is with a pressure and electrical check. Cleaning the filter yourself is a good first step.',
      },
      {
        q: 'Why is water leaking from my indoor unit?',
        a: 'Usually the drain pipe is blocked with dirt or algae, or the indoor unit is not level. Low gas can also make the coil freeze and then drip as it melts. We flush the drain line and check the gas pressure to fix the cause, not just the symptom.',
      },
      {
        q: 'Do you repair inverter ACs?',
        a: 'Yes. Inverter ACs show error codes that point to the faulty part, such as a sensor, the outdoor PCB or the compressor drive. We read the code, test the part and repair or replace it.',
      },
      {
        q: 'Is it worth repairing an old AC?',
        a: 'If the compressor has failed on an older unit, replacing the AC can make more sense than repairing it. For most other faults, such as capacitors, fan motors, sensors or leaks, a repair is the better value. We will tell you honestly which option makes sense.',
      },
    ],
    related: ['ac-gas-refilling', 'ac-service', 'ac-amc'],
  },
  {
    slug: 'ac-service',
    name: 'AC Service & Jet Cleaning',
    icon: 'water_drop',
    metaTitle: 'AC Service & Jet Cleaning in Mumbai',
    metaDescription:
      'Deep AC service with jet-pump cleaning of the coil, filter, blower and drain for split and window ACs in Mumbai. Better cooling, lower bills. Call +91 74083 81814.',
    h1: 'AC Service & Jet Cleaning in Mumbai',
    intro: [
      'Mumbai dust, humidity and long running hours clog an AC faster than in most cities. A dirty coil makes the compressor work harder, cools less and raises your electricity bill. A proper service brings the cooling back and helps prevent breakdowns.',
      'Our deep service uses a jet pump and foam cleaner to wash the indoor coil, blower and drain tray, not just a quick filter wipe. The outdoor condenser is cleaned as well, so heat leaves the system properly.',
    ],
    signsTitle: 'Your AC needs a service if',
    signs: [
      'It has been more than 3–4 months of regular use since the last service',
      'Cooling feels weaker than it used to',
      'There is a musty or damp smell from the vents',
      'Black dust or spots appear near the air outlet',
      'Electricity bills have gone up without more use',
      'Water drips from the indoor unit',
    ],
    included: [
      'Filter cleaning and sanitising',
      'Jet-pump wash of the indoor coil and blower wheel',
      'Drain tray and drain pipe flushing',
      'Outdoor condenser coil cleaning',
      'Refrigerant pressure check',
      'Electrical connection and capacitor check',
      'Cooling temperature check after service',
    ],
    process: [
      { title: 'Cover and protect', text: 'We cover the wall and floor before washing the indoor unit.' },
      { title: 'Jet wash', text: 'Coil, blower and drain tray are washed with a jet pump and foam cleaner.' },
      { title: 'Outdoor unit', text: 'The condenser coil is cleaned so the AC can release heat properly.' },
      { title: 'Check and test', text: 'Gas pressure, electricals and cooling are checked before we leave.' },
    ],
    acTypes: ['Split AC', 'Window AC', 'Inverter AC', 'Cassette AC'],
    faqs: [
      {
        q: 'How often should an AC be serviced in Mumbai?',
        a: 'For an AC used daily, a deep service every 3–4 months is ideal because of Mumbai dust and humidity. For lighter use, at least twice a year, once before summer and once after the monsoon.',
      },
      {
        q: 'What is the difference between a normal service and a jet service?',
        a: 'A basic service cleans the filter and wipes the unit. A jet service uses a high-pressure water pump and foam cleaner to wash dirt out of the coil fins and blower, which is where most of the cooling loss comes from.',
      },
      {
        q: 'Does servicing include gas refilling?',
        a: 'No. A healthy AC is a sealed system and does not need gas topped up during a service. We check the gas pressure during every service, and if it is low, that means there is a leak which should be found and repaired first.',
      },
      {
        q: 'How long does an AC service take?',
        a: 'A deep service of one split AC usually takes about 45 minutes to an hour, depending on how dirty it is and how easy the outdoor unit is to reach.',
      },
    ],
    related: ['ac-amc', 'ac-repair', 'ac-gas-refilling'],
  },
  {
    slug: 'ac-gas-refilling',
    name: 'AC Gas Refilling',
    icon: 'propane',
    metaTitle: 'AC Gas Refilling & Leak Repair, Mumbai',
    metaDescription:
      'AC gas refilling with leak detection and repair for R32, R410A and R22 ACs in Mumbai. Nitrogen pressure testing and vacuuming. Call +91 74083 81814.',
    h1: 'AC Gas Refilling & Leak Repair in Mumbai',
    intro: [
      'An AC does not use up its gas. If the refrigerant is low, there is a leak somewhere, and simply topping up the gas means it will leak out again. That is why every gas refill we do starts with finding and fixing the leak.',
      'We test the system with nitrogen pressure to locate leaks at flare joints, copper pipes and coils, repair them by brazing or re-flaring, vacuum the system to remove moisture, and then charge the correct refrigerant to the manufacturer’s specification.',
    ],
    signsTitle: 'Signs your AC may be low on gas',
    signs: [
      'AC runs for a long time but the room never gets cool',
      'Ice on the indoor coil or the copper pipe at the outdoor unit',
      'Hissing sound near the pipes',
      'Air from the vents is only slightly cool',
      'Oily marks on pipe joints',
    ],
    included: [
      'Pressure check to confirm low refrigerant',
      'Nitrogen leak testing of joints, pipes and coils',
      'Leak repair by brazing or re-flaring',
      'Vacuuming to remove air and moisture',
      'Gas charging to the correct pressure and weight',
      'Cooling and current check after refilling',
    ],
    process: [
      { title: 'Confirm', text: 'We measure the gas pressure to confirm the refrigerant is actually low.' },
      { title: 'Find the leak', text: 'Nitrogen pressure testing locates the leak point.' },
      { title: 'Repair and vacuum', text: 'The leak is repaired and the system is vacuumed.' },
      { title: 'Charge and test', text: 'The correct gas is charged and cooling is tested.' },
    ],
    acTypes: ['R32 split and inverter ACs', 'R410A ACs', 'R22 older ACs', 'Window ACs', 'Ductable and package units'],
    faqs: [
      {
        q: 'How do I know which gas my AC uses?',
        a: 'The refrigerant type is printed on the sticker on the outdoor unit. Most newer inverter ACs use R32, many older split ACs use R22, and some use R410A. Different gases must never be mixed.',
      },
      {
        q: 'Why should a leak be repaired before refilling?',
        a: 'If the leak is not fixed, the new gas escapes again within days or weeks and you pay for a refill again. Fixing the leak first is cheaper in the long run.',
      },
      {
        q: 'Is a full gas charge or a top-up better?',
        a: 'It depends on the gas. R32 and R22 systems can often be topped up after the leak is fixed. R410A is a blended gas, so a full recharge is usually the correct method. We will explain what your AC needs.',
      },
      {
        q: 'How long does gas refilling take?',
        a: 'A refill with leak testing and repair usually takes one to two hours. If the leak is inside the indoor coil and the coil needs replacing, it may need a second visit.',
      },
    ],
    related: ['ac-repair', 'ac-service', 'ac-amc'],
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    icon: 'handyman',
    metaTitle: 'Split & Window AC Installation, Mumbai',
    metaDescription:
      'Professional split, window and inverter AC installation in Mumbai with proper copper piping, vacuuming, drain slope and outdoor stand. Call +91 74083 81814.',
    h1: 'Split & Window AC Installation in Mumbai',
    intro: [
      'A good AC installed badly will cool poorly, leak water and break down early. Correct installation matters as much as the brand you buy. We install split, window and inverter ACs for homes and offices across Mumbai, Thane and Navi Mumbai.',
      'Every installation includes leak-free flare joints, vacuuming of the copper lines, a correct drain slope and a secure outdoor unit placement with enough space for airflow. We also handle shifting an AC from one room or flat to another.',
    ],
    signsTitle: 'We can help when you',
    signs: [
      'Have bought a new split or window AC',
      'Are shifting to a new flat or office',
      'Want to move an AC to another room',
      'Need an outdoor unit moved to a better location',
      'Have an old installation that keeps leaking water',
    ],
    included: [
      'Site check for the best indoor and outdoor unit position',
      'Wall mounting and core drilling for pipes',
      'Copper pipe, drain pipe and cable connection',
      'Vacuuming of the system before gas release',
      'Outdoor unit stand or bracket fitting',
      'Leak test and cooling test after installation',
      'Uninstallation and re-installation when shifting',
    ],
    process: [
      { title: 'Site check', text: 'We plan the indoor unit, pipe route and outdoor unit position.' },
      { title: 'Mounting', text: 'The indoor unit and outdoor stand are fixed securely.' },
      { title: 'Piping', text: 'Copper, drain and electrical lines are connected and insulated.' },
      { title: 'Vacuum and test', text: 'The lines are vacuumed, the gas is released and cooling is tested.' },
    ],
    acTypes: ['Split AC', 'Inverter AC', 'Window AC', 'Cassette AC', 'Tower AC'],
    faqs: [
      {
        q: 'What is included in a standard split AC installation?',
        a: 'Mounting the indoor unit, placing the outdoor unit, connecting the copper pipes, drain pipe and cable, vacuuming and a test run. Extra copper pipe, a stand or bracket, and core cutting through thick walls may be charged separately depending on the site, and we tell you before starting.',
      },
      {
        q: 'Why is vacuuming important?',
        a: 'Vacuuming removes air and moisture from the copper lines. If it is skipped, moisture can damage the compressor and reduce cooling over time.',
      },
      {
        q: 'Can you shift my AC to a new flat?',
        a: 'Yes. We pump the gas down into the outdoor unit, uninstall safely, and reinstall at the new location with a leak test. If the gas is low after shifting, we check for leaks before topping up.',
      },
      {
        q: 'Where should the outdoor unit be placed?',
        a: 'In a spot with open airflow, away from direct afternoon sun if possible, and close enough to the indoor unit to keep the pipe length short. Cramped balconies and enclosed ducts reduce cooling.',
      },
    ],
    related: ['ac-service', 'ac-amc', 'vrf-vrv-installation'],
  },
  {
    slug: 'ac-amc',
    name: 'AC AMC',
    icon: 'verified_user',
    metaTitle: 'AC AMC (Annual Maintenance) in Mumbai',
    metaDescription:
      'Annual Maintenance Contracts for home and office ACs in Mumbai: scheduled deep services, priority breakdown support and no labour charges on repairs. Call +91 74083 81814.',
    h1: 'AC AMC (Annual Maintenance Contract) in Mumbai',
    intro: [
      'An Annual Maintenance Contract keeps your ACs serviced on schedule, so you don’t have to remember to book, and gives you priority support when something goes wrong. It suits homes with several ACs, offices, clinics, shops and restaurants that cannot afford downtime.',
      'Our AMC plans include 3–4 routine deep jet services a year, priority emergency breakdown support, and zero labour charges on repairs. Plans are customised to the number and type of ACs you have.',
    ],
    signsTitle: 'An AMC makes sense if you',
    signs: [
      'Have three or more ACs at home or work',
      'Run ACs for long hours every day',
      'Manage an office, clinic, shop, restaurant or server room',
      'Want breakdowns handled with priority',
      'Prefer one fixed yearly plan to booking each visit',
    ],
    included: [
      '3–4 scheduled deep jet services per year',
      '24/7 priority emergency breakdown support',
      'Free service visits for breakdowns',
      'Zero labour charges on repairs',
      'Gas pressure and electrical checks at every visit',
      'Service record for each AC',
    ],
    process: [
      { title: 'Survey', text: 'We note the number, type and condition of your ACs.' },
      { title: 'Custom plan', text: 'You get a plan and quote for your exact set-up.' },
      { title: 'Scheduled visits', text: 'We contact you when each service is due.' },
      { title: 'Priority support', text: 'Breakdowns under AMC are attended with priority.' },
    ],
    acTypes: ['Split and window ACs', 'Inverter ACs', 'Cassette ACs', 'Ductable ACs', 'Package units', 'VRF / VRV systems'],
    faqs: [
      {
        q: 'What is the difference between comprehensive and non-comprehensive AMC?',
        a: 'A non-comprehensive AMC covers services and labour, while spare parts are charged separately. A comprehensive AMC also covers listed parts. We will explain which parts are covered before you sign.',
      },
      {
        q: 'How many services are included in a year?',
        a: 'Our plans include 3–4 routine deep jet services a year, depending on how heavily the ACs are used.',
      },
      {
        q: 'Do you offer AMC for offices and commercial sites?',
        a: 'Yes. We maintain split, cassette, ductable, package and VRF/VRV systems for offices, shops, restaurants and other commercial spaces across Mumbai.',
      },
      {
        q: 'Can I take an AMC for an AC that is already old?',
        a: 'Yes. We inspect the AC first. If it needs a repair before the contract starts, we tell you upfront.',
      },
    ],
    related: ['ac-service', 'ac-repair', 'ductable-ac'],
  },
  {
    slug: 'vrf-vrv-installation',
    name: 'VRF / VRV Systems',
    icon: 'hvac',
    metaTitle: 'VRF / VRV AC Installation in Mumbai',
    metaDescription:
      'VRF/VRV air conditioning design, installation and maintenance for offices, villas and commercial buildings in Mumbai. Zoned cooling, lower energy use. Call +91 74083 81814.',
    h1: 'VRF / VRV System Installation & Service in Mumbai',
    intro: [
      'Variable Refrigerant Flow (VRF), also called VRV, connects many indoor units to one outdoor system and adjusts cooling room by room. It is a strong choice for offices, multi-floor homes, hotels, clinics and showrooms where different areas need different temperatures.',
      'We plan the system with load calculation, size the outdoor and indoor units, design the refrigerant piping, and install, commission and maintain the system. We also service and repair existing VRF/VRV installations.',
    ],
    signsTitle: 'VRF/VRV is a good fit when',
    signs: [
      'Many rooms or zones need separate temperature control',
      'There is limited space for many outdoor units',
      'Energy efficiency over long running hours matters',
      'You want a clean look with concealed or cassette indoor units',
      'An existing VRF system shows error codes or uneven cooling',
    ],
    included: [
      'Heat load calculation for every zone',
      'System design and equipment sizing',
      'Refrigerant piping, branching and insulation',
      'Indoor unit installation (cassette, ducted, wall-mounted)',
      'Pressure testing, vacuuming and commissioning',
      'Preventive maintenance and fault repair',
    ],
    process: [
      { title: 'Site survey', text: 'We measure the space and calculate the cooling load.' },
      { title: 'Design', text: 'Outdoor units, indoor units and piping are planned.' },
      { title: 'Installation', text: 'Piping, units and controls are installed and pressure-tested.' },
      { title: 'Commissioning', text: 'The system is charged, tested zone by zone and handed over.' },
    ],
    acTypes: ['VRF / VRV outdoor systems', 'Cassette indoor units', 'Ducted indoor units', 'Hi-wall indoor units'],
    faqs: [
      {
        q: 'What is the difference between VRF and VRV?',
        a: 'They are the same technology. VRV is a trademark of one manufacturer, while VRF is the general industry name.',
      },
      {
        q: 'Is VRF better than many split ACs?',
        a: 'For large spaces with many rooms, VRF usually uses less energy over long running hours, needs fewer outdoor units and gives better zone control. For one or two rooms, split ACs are simpler and cheaper.',
      },
      {
        q: 'Do you service VRF systems you did not install?',
        a: 'Yes. We service and repair existing VRF/VRV systems, including reading error codes, leak testing and cleaning indoor units.',
      },
      {
        q: 'How long does a VRF installation take?',
        a: 'It depends on the size of the building and the number of indoor units. We give a timeline after the site survey.',
      },
    ],
    related: ['ductable-ac', 'ac-amc', 'ac-installation'],
  },
  {
    slug: 'ductable-ac',
    name: 'Ductable AC',
    icon: 'air',
    metaTitle: 'Ductable AC Installation & Service Mumbai',
    metaDescription:
      'Ductable AC installation, duct design, servicing and repair for offices, shops, restaurants and large homes in Mumbai. Call +91 74083 81814.',
    h1: 'Ductable AC Installation & Service in Mumbai',
    intro: [
      'A ductable AC hides the indoor unit above the false ceiling and sends cool air through ducts and grilles, giving even cooling across a large hall, shop floor or open office without units on the walls.',
      'We handle duct routing, load calculation, grille placement and installation, along with regular servicing and repair of existing ductable and package units for commercial and residential spaces.',
    ],
    signsTitle: 'Ductable AC is a good fit for',
    signs: [
      'Open offices and showrooms',
      'Restaurants, banquet halls and gyms',
      'Large living rooms and duplex homes',
      'Spaces where wall-mounted units would spoil the interior',
      'Existing ductable units with weak or uneven airflow',
    ],
    included: [
      'Cooling load calculation for the space',
      'Duct design, fabrication and insulation',
      'Indoor and outdoor unit installation',
      'Supply and return grille placement',
      'Filter, coil and blower servicing',
      'Airflow balancing and fault repair',
    ],
    process: [
      { title: 'Survey', text: 'We study the layout, ceiling height and cooling load.' },
      { title: 'Duct design', text: 'Duct routes and grille positions are planned for even airflow.' },
      { title: 'Installation', text: 'Units, ducts and grilles are installed and insulated.' },
      { title: 'Balance and test', text: 'Airflow is balanced and cooling is tested at every grille.' },
    ],
    acTypes: ['Ductable split ACs', 'Package AC units', 'Ducted VRF indoor units'],
    faqs: [
      {
        q: 'How often should a ductable AC be serviced?',
        a: 'Every 3 months for commercial spaces with long running hours, and at least twice a year for homes. Filters in busy commercial spaces may need cleaning more often.',
      },
      {
        q: 'Why is one area of my ductable AC cooling less?',
        a: 'Common causes are blocked filters, a damaged or leaking duct, closed dampers, or a duct design that does not balance the airflow. We inspect the ducts and balance the airflow.',
      },
      {
        q: 'Ductable AC or VRF: which should I choose?',
        a: 'Ductable suits one large open area with a single temperature. VRF suits many rooms that need separate control. We recommend the right option after a site survey.',
      },
      {
        q: 'Can ductable ACs be installed in an existing office?',
        a: 'Yes, if there is enough space above the false ceiling for the indoor unit and ducts. We check this during the site survey.',
      },
    ],
    related: ['vrf-vrv-installation', 'ac-amc', 'ac-repair'],
  },
];

export const areas: AreaContent[] = [
  {
    slug: 'powai',
    name: 'Powai',
    metaTitle: 'AC Repair & Service in Powai',
    metaDescription:
      'AC repair, service, gas refilling and installation in Powai, Hiranandani Gardens, Chandivali and Kanjurmarg from our nearby Saki Naka base. Call +91 74083 81814.',
    h1: 'AC Repair & Service in Powai',
    badge: 'Serving Powai, Hiranandani & Chandivali',
    intro: [
      'Powai is a short drive from our Saki Naka base, which makes it one of the easiest areas for us to reach. We repair, service and install split, inverter, cassette, ductable and VRF air conditioners for homes, offices and shops across Powai.',
    ],
    localTitle: 'AC care for Powai high-rises and offices',
    local: [
      'Many Powai homes are in high-rise towers where outdoor units sit in tight service ledges or balconies. Poor airflow around the outdoor unit and hard-to-reach drain lines are common reasons for weak cooling and water leakage, and our technicians are used to working in these spaces safely.',
      'Powai also has a large number of corporate offices, clinics and restaurants that run their ACs for long hours. For these, regular deep servicing and an AMC help prevent breakdowns during working hours.',
    ],
    neighbourhoods: ['Hiranandani Gardens', 'Powai Lake area', 'Chandivali', 'Raheja Vihar', 'IIT Powai area', 'Kanjurmarg West', 'Saki Vihar Road', 'Tunga Village'],
    popular: ['ac-repair', 'ac-service', 'ac-gas-refilling', 'ac-amc'],
    faqs: [
      {
        q: 'Do you provide AC service in Hiranandani Gardens?',
        a: 'Yes. We service, repair and install ACs across Hiranandani Gardens and the rest of Powai.',
      },
      {
        q: 'Can you service ACs in Powai offices?',
        a: 'Yes. We handle split, cassette, ductable and VRF systems for offices and commercial spaces in Powai, including AMC plans.',
      },
    ],
  },
  {
    slug: 'ghatkopar',
    name: 'Ghatkopar',
    metaTitle: 'AC Repair & Service in Ghatkopar',
    metaDescription:
      'AC repair, jet service, gas refilling and installation in Ghatkopar East and West, Vidyavihar and Asalpha. Fast visits from Saki Naka. Call +91 74083 81814.',
    h1: 'AC Repair & Service in Ghatkopar',
    badge: 'Serving Ghatkopar East & West',
    intro: [
      'Ghatkopar is directly connected to our Saki Naka base by the Andheri–Ghatkopar Link Road, so our technicians reach most of Ghatkopar quickly. We repair, service and install all types of ACs for homes, shops and offices in Ghatkopar East and West.',
    ],
    localTitle: 'AC service for Ghatkopar homes and shops',
    local: [
      'Ghatkopar has a mix of older housing societies and newer residential towers. Older buildings often have window ACs or split ACs with long pipe runs, which are more prone to gas leaks at the joints. Newer towers mostly have inverter split ACs, which need correct diagnosis of error codes.',
      'The busy markets and shops around the station keep ACs running all day. Dust from heavy traffic clogs filters and coils faster, so a deep jet service every few months keeps cooling strong and bills lower.',
    ],
    neighbourhoods: ['Ghatkopar East', 'Ghatkopar West', 'Pant Nagar', 'Garodia Nagar', 'Vidyavihar', 'Asalpha', 'Jagdusha Nagar', 'LBS Marg'],
    popular: ['ac-service', 'ac-repair', 'ac-gas-refilling', 'ac-installation'],
    faqs: [
      {
        q: 'Do you service window ACs in Ghatkopar?',
        a: 'Yes. We service and repair both window and split ACs, including older models that use R22 gas.',
      },
      {
        q: 'Can you install a new AC in Ghatkopar the same week?',
        a: 'Usually yes. Call us with your AC model and address and we will give you the earliest available slot.',
      },
    ],
  },
  {
    slug: 'chembur',
    name: 'Chembur',
    metaTitle: 'AC Repair & Service in Chembur',
    metaDescription:
      'AC repair, servicing, gas refilling and AMC in Chembur, Tilak Nagar, Govandi and Deonar for homes and businesses. Call +91 74083 81814.',
    h1: 'AC Repair & Service in Chembur',
    badge: 'Serving Chembur, Tilak Nagar & Deonar',
    intro: [
      'We provide AC repair, servicing, gas refilling and installation across Chembur and nearby areas, for split, inverter, window, cassette and ductable ACs in homes, shops, clinics and offices.',
    ],
    localTitle: 'Keeping ACs clean in Chembur',
    local: [
      'Parts of Chembur are close to busy highways and industrial zones, and airborne dust and fine particles settle on AC filters and coils quickly. When the coil is coated, cooling drops and the AC uses more power. Regular jet servicing washes this build-up out of the coil and blower.',
      'Chembur has many established housing societies alongside new towers. For older ACs, we check gas pressure and electrical parts during every service so small problems are caught before they become breakdowns.',
    ],
    neighbourhoods: ['Chembur East', 'Chembur West', 'Tilak Nagar', 'Diamond Garden', 'Deonar', 'Govandi', 'Sion–Trombay Road', 'RCF Colony area'],
    popular: ['ac-service', 'ac-repair', 'ac-amc', 'ac-gas-refilling'],
    faqs: [
      {
        q: 'How often should I service my AC in Chembur?',
        a: 'For daily use, every 3–4 months is a good routine, especially in dusty areas. At minimum, service before summer and after the monsoon.',
      },
      {
        q: 'Do you offer AMC for shops and clinics in Chembur?',
        a: 'Yes. Our AMC plans cover scheduled services and priority breakdown support for homes and businesses in Chembur.',
      },
    ],
  },
  {
    slug: 'thane',
    name: 'Thane',
    metaTitle: 'AC Repair & Service in Thane',
    metaDescription:
      'AC repair, service, gas refilling, installation and VRF work in Thane West, Ghodbunder Road, Majiwada and Kolshet. Call +91 74083 81814.',
    h1: 'AC Repair & Service in Thane',
    badge: 'Serving Thane West & Ghodbunder Road',
    intro: [
      'We serve homes, offices and commercial spaces across Thane with AC repair, deep servicing, gas refilling, new installations, and ductable and VRF work. Call us to check the earliest available slot for your area.',
    ],
    localTitle: 'AC service for Thane townships',
    local: [
      'Thane has many large residential townships and gated complexes, especially along Ghodbunder Road, where flats often have three or four split ACs. For homes like these, an AMC covering every AC with scheduled deep services is usually more convenient than booking each unit separately.',
      'Being inland, Thane can feel hotter on summer afternoons, so ACs run longer and harder. Clean coils and correct gas pressure make the biggest difference to cooling and electricity bills during peak summer.',
    ],
    neighbourhoods: ['Thane West', 'Ghodbunder Road', 'Majiwada', 'Kolshet Road', 'Vartak Nagar', 'Panchpakhadi', 'Naupada', 'Manpada'],
    popular: ['ac-amc', 'ac-service', 'ac-repair', 'ac-installation'],
    faqs: [
      {
        q: 'Do you cover Ghodbunder Road in Thane?',
        a: 'Yes. We serve Ghodbunder Road and the main areas of Thane West. Call to check the earliest slot for your location.',
      },
      {
        q: 'Can you service all the ACs in my flat in one visit?',
        a: 'Yes. Tell us how many ACs you have when you book, and we will plan the visit so all of them are serviced together.',
      },
    ],
  },
  {
    slug: 'navi-mumbai',
    name: 'Navi Mumbai',
    metaTitle: 'AC Repair & Service in Navi Mumbai',
    metaDescription:
      'AC repair, servicing, gas refilling and AMC in Vashi, Nerul, Belapur, Airoli and Kopar Khairane, Navi Mumbai, for homes and offices. Call +91 74083 81814.',
    h1: 'AC Repair & Service in Navi Mumbai',
    badge: 'Serving Vashi, Nerul, Belapur & Airoli',
    intro: [
      'We provide AC repair, deep servicing, gas refilling, installation and AMC across Navi Mumbai, for residential sectors as well as offices and commercial buildings.',
    ],
    localTitle: 'Protecting ACs from creek-side humidity',
    local: [
      'Many Navi Mumbai nodes sit close to Thane Creek, where humid, salty air can corrode outdoor units, copper joints and condenser fins over time. Corrosion leads to gas leaks and weaker cooling. During servicing we check the outdoor unit for rust and joint leaks, so problems are caught early.',
      'Navi Mumbai also has large office and IT parks, especially around Airoli and Belapur, where cassette, ductable and VRF systems are common. We service and maintain these systems under AMC as well.',
    ],
    neighbourhoods: ['Vashi', 'Nerul', 'CBD Belapur', 'Airoli', 'Kopar Khairane', 'Ghansoli', 'Sanpada', 'Seawoods'],
    popular: ['ac-service', 'ac-gas-refilling', 'ac-repair', 'vrf-vrv-installation'],
    faqs: [
      {
        q: 'Do you serve all of Navi Mumbai?',
        a: 'We serve the main nodes including Vashi, Nerul, Belapur, Airoli, Kopar Khairane, Ghansoli, Sanpada and Seawoods. Call to confirm the earliest slot for your sector.',
      },
      {
        q: 'Why does my outdoor unit keep leaking gas?',
        a: 'Near the creek, salty air can corrode copper joints and coils. We find the exact leak with nitrogen testing, repair it, and can suggest protective steps for the outdoor unit.',
      },
    ],
  },
  {
    slug: 'borivali',
    name: 'Borivali',
    metaTitle: 'AC Repair & Service in Borivali',
    metaDescription:
      'AC repair, jet service, gas refilling and installation in Borivali East and West, Kandivali and Dahisar. Call +91 74083 81814.',
    h1: 'AC Repair & Service in Borivali',
    badge: 'Serving Borivali, Kandivali & Dahisar',
    intro: [
      'We repair, service and install split, window, inverter and cassette ACs across Borivali and the nearby western suburbs, for homes, shops and offices. Call us to book a visit at a time that suits you.',
    ],
    localTitle: 'AC service for Borivali homes',
    local: [
      'Borivali has a large number of residential housing societies, many with ACs that have been in use for several years. Older ACs benefit most from regular deep cleaning and a gas pressure check, which restores cooling and helps avoid sudden breakdowns in May and June.',
      'Homes near the national park and greener pockets can see more insects and leaf dust around outdoor units. Keeping the outdoor coil clean and the drain line clear prevents overheating and water leakage.',
    ],
    neighbourhoods: ['Borivali West', 'Borivali East', 'Kandivali West', 'Kandivali East', 'Dahisar', 'IC Colony', 'Gorai', 'Magathane'],
    popular: ['ac-service', 'ac-repair', 'ac-installation', 'ac-gas-refilling'],
    faqs: [
      {
        q: 'Do you service ACs in Kandivali and Dahisar too?',
        a: 'Yes. We cover Borivali, Kandivali and Dahisar. Call to book a slot.',
      },
      {
        q: 'My old AC has stopped cooling. Should I repair or replace it?',
        a: 'Most faults, such as capacitors, fan motors, sensors and gas leaks, are worth repairing. If the compressor has failed on a very old unit, replacing it may be better value. Our technician will advise you honestly after checking it.',
      },
    ],
  },
];

// The three original hand-built area pages (app/locations/andheri etc.).
export const legacyAreas = [
  { slug: 'andheri', name: 'Andheri & Saki Naka' },
  { slug: 'bandra', name: 'Bandra & BKC' },
  { slug: 'juhu', name: 'Juhu & Vile Parle' },
];

export const allAreaLinks = [
  ...legacyAreas,
  ...areas.map((a) => ({ slug: a.slug, name: a.name })),
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
