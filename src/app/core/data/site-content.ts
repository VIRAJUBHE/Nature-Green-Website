export interface NavItem {
  label: string;
  href: string;
}

export interface IconCard {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  title: string;
  category: string;
  src: string;
  alt: string;
  tall?: boolean;
  mediaType?: 'image' | 'video';
}

export interface SpecificationGroup {
  title: string;
  summary: string;
  points: string[];
}

export const siteContent = {
  site: {
    baseUrl: 'https://naturegreenpune.in',
    neighborhood: 'Bavdhan Khurd',
    city: 'Pune',
    postalCode: '411021',
    coordinates: {
      latitude: 18.5037528,
      longitude: 73.7644514
    },
    openingHours: ['Mo-Sa 10:00-19:00', 'Su 10:00-14:00']
  },
  brand: {
    companyName: 'Avani Construction',
    projectName: 'Nature Green',
    location: 'Aparajita Housing Society, Bavdhan Khurd, Pune',
    projectType: 'Residential Apartment',
    flatType: '2BHK',
    totalFloors: '7 Floors',
    totalFlats: '26 Flats',
    possessionStatus: 'Possession Ready',
    startingPrice: 'Rs. 78 Lakh',
    reraNumber: 'P52100076828',
    phone: '+91 91453 02404',
    phoneHref: 'tel:+919145302404',
    whatsappHref: 'https://wa.me/919145302404?text=Hello%20Avani%20Construction%2C%20I%20want%20to%20enquire%20about%20Nature%20Green.',
    email: 'vijayrubhe13679@gmail.com',
    emailHref: 'mailto:vijayrubhe13679@gmail.com?subject=Nature%20Green%20Enquiry',
    // logo: '/favicon.ico',
    logo:'/assets/images/avani-construction-logo-real.png',
    mark: '/assets/images/avani-mark-real.png'
  },
  assets: {
    hero: '/assets/images/hero-nature-green.webp',
    thumbnail: '/assets/images/Residence.png',
    about: '/assets/images/Residence.webp',
    brochure: '/assets/documents/nature-green-brochure.pdf',
    brochureCover: '/assets/images/Residence.webp',
    floorPlan: '/assets/images/Floor-Plan.webp'
  },
  navItems: [
    { label: 'About', href: 'about' },
    { label: 'Highlights', href: 'highlights' },
    { label: 'Gallery', href: 'gallery' },
    { label: 'Plans', href: 'floor-plans' },
    { label: 'Amenities', href: 'amenities' },
    { label: 'Contact', href: 'contact' }
  ] satisfies NavItem[],
  hero: {
    kicker: 'ELEVATED 2BHK LIVING IN BAVDHAN',
    title: 'Luxury 2 BHK Flats in Bavdhan, Pune',
    subtitle: 'Possession Ready Premium 2BHK Homes at Bavdhan, Pune',
    description:
      'Nature Green by Avani Construction is a possession ready premium 2BHK residential project located in the peaceful surroundings of Bavdhan, Pune. The project combines elegant architecture, green living, quality construction, and everyday convenience to create a comfortable and refined lifestyle experience.',
    stats: [
      { value: '2BHK', label: 'Apartment Type' },
      { value: '760', label: 'SQ.FT Carpet Area' },
      { value: 'Possession Ready', label: 'Status' },
      { value: 'Rs. 78 Lakh', label: 'Starting Package' }
    ]
  },
  about: {
    title: 'A Calm Urban Address With Everyday Convenience',
    body:
      'Nature Green by Avani Construction offers possession ready, thoughtfully designed 2BHK homes in Bavdhan, Pune, combining modern living, quality construction, green surroundings, premium amenities, excellent connectivity, and a starting package price of Rs. 78 Lakh for a comfortable urban lifestyle.',
    points: [
      'A 7-floor residential project with 26 thoughtfully planned flats.',
      'Possession ready homes for buyers looking to move ahead without construction-stage waiting.',
      'Strategically located near schools, hospitals, highways, malls, banks, and daily lifestyle essentials.',
      'MahaRERA registered project: P52100076828.'
    ],
    badges: ['Possession Ready', 'Peaceful Bavdhan Location', 'Modern Lifestyle Amenities', 'Starts From Rs. 78 Lakh']
  },
  highlights: [
    {
      title: 'Peaceful Green Surroundings',
      description: 'A calm Bavdhan address planned around comfort, openness, and a greener everyday setting.',
      icon: 'Leaf'
    },
    {
      title: 'Premium 2BHK Residences',
      description: 'Well-planned 2BHK homes designed for practical family living with refined finishes.',
      icon: 'Home'
    },
    {
      title: 'Modern Architectural Design',
      description: 'A contemporary residential elevation shaped for lasting appeal and everyday function.',
      icon: 'Building2'
    },
    {
      title: 'Excellent Connectivity',
      description: 'Convenient access to key roads, schools, hospitals, shopping, banks, and city essentials.',
      icon: 'MapPin'
    },
    {
      title: 'Comfortable Urban Living',
      description: 'A balanced lifestyle setting with safety, convenience, and daily comfort built in.',
      icon: 'Sofa'
    },
    {
      title: 'Thoughtfully Planned Spaces',
      description: 'Efficient layouts focused on natural ventilation, usable rooms, and smooth movement.',
      icon: 'LayoutTemplate'
    },
    {
      title: 'Quality Construction',
      description: 'Built with dependable planning, careful execution, and long-term residential use in mind.',
      icon: 'Check'
    },
    {
      title: 'MahaRERA Registered',
      description: 'Registered under MahaRERA with project number P52100076828 for buyer confidence.',
      icon: 'ShieldCheck'
    }
  ] satisfies IconCard[],
  gallery: [
    {
      title: 'Facade View',
      category: 'Premium Elevation View',
      src: '/assets/images/Fascade-View.webp',
      alt: 'Nature Green 2 BHK residential building facade in Bavdhan Pune',
      tall: true
    },
    // {
    //   title: 'Living Room',
    //   category: 'Interior',
    //   src: '/assets/images/gallery-living.webp',
    //   alt: 'Modern living room placeholder for a 2BHK apartment'
    // },
    // {
    //   title: 'Flat Layout',
    //   category: 'Spacious Interior Planning',
    //   src: '/assets/images/Flat-Plan.webp',
    //   alt: 'Modular kitchen placeholder for Nature Green'
    // },
    {
      title: '',
      category: '',
      src: '/assets/video/Site-Video.mp4',
      alt: 'Nature Green residential project site walkthrough in Bavdhan Pune',
      mediaType: 'video'
    },
    {
      title: 'Smart Rooftop Planning',
      category: 'TERRACE VIEW',
      src: '/assets/images/Top-View.webp',
      alt: 'Nature Green terrace view and rooftop planning in Bavdhan Pune'
    },
    {
      title: 'Flat Layout',
      category: 'Spacious Interior Planning',
      src: '/assets/images/Flat-Plan.webp',
      alt: 'Nature Green 2 BHK flat layout with living bedroom and kitchen planning'
    },
    
    {
      title: 'Smart Puzzle Parking',
      category: 'Utility',
      src: '/assets/images/Puzzle-Parking.webp',
      alt: 'Nature Green smart puzzle parking facility for residents'
    }
  ] satisfies GalleryImage[],
  floorPlan: {
    title: '2BHK Typical Plan',
    area: '760 SQ.FT',
    image: '/assets/images/Floor-Plan.webp',
    alt: 'Nature Green 2 BHK floor plan with 760 square feet carpet area',
    details: ['2 Spacious Bedrooms', 'Well-Planned Living & Dining Area', 'Functional Kitchen With Utility Space', 'Attached Balcony For Natural Ventilation', 'Efficiently Designed Bath & Toilet Layouts']
  },
  amenities: [
    { title: 'Smart Solar Energy System', description: 'Solar power support for efficient and environmentally conscious residential operations.', icon: 'SolarPanel' },
    { title: 'CCTV Security', description: 'Strategic surveillance coverage for safer movement through common areas.', icon: 'Cctv' },
    { title: 'Fire Fighting System', description: 'Fire safety infrastructure planned for responsible residential readiness.', icon: 'Flame' },
    { title: 'Solar Water Supply', description: 'Energy-conscious water support for routine residential comfort.', icon: 'Sun' },
    { title: 'Branded Elevators', description: 'Smooth vertical circulation with dependable elevator planning.', icon: 'Building2' },
    { title: 'Video Door Phone', description: 'Visitor verification layer for modern apartment security.', icon: 'Video' },
    { title: 'Premium Flooring', description: 'Durable finishes selected for daily use and a refined interior feel.', icon: 'Check' },
    { title: 'Puzzle Parking facility', description: 'Organized vehicle management planned for optimized space utilization and resident convenience.', icon: 'Car' }
  ] satisfies IconCard[],
  specifications: [
    {
      title: 'RCC',
      summary: 'Earthquake-resistant RCC framed structure.',
      points: ['Designed with structural safety in focus.', 'Quality-controlled concrete and reinforcement work.']
    },
    {
      title: 'Flooring',
      summary: 'Premium vitrified flooring for living areas.',
      points: ['Vitrified tiles in living, dining, and bedrooms.', 'Anti-skid flooring for wet areas where required.']
    },
    {
      title: 'Kitchen',
      summary: 'Functional kitchen platform and dado planning.',
      points: ['Granite platform with stainless-steel sink.', 'Ceramic tile dado above counter level.']
    },
    {
      title: 'Bathroom',
      summary: 'Quality sanitary ware and practical wet-zone finish.',
      points: ['Branded CP fittings and sanitary fixtures.', 'Designer dado tiles up to specified height.']
    },
    {
      title: 'Paint',
      summary: 'Durable interior and exterior paint systems.',
      points: ['Internal walls with smooth finish.', 'Weather-resistant exterior paint treatment.']
    },
    {
      title: 'Electrical',
      summary: 'Concealed copper wiring with modular switches.',
      points: ['Adequate points for daily appliances.', 'Provision for inverter and safety devices as applicable.']
    },
    {
      title: 'Plumbing',
      summary: 'Concealed plumbing with quality pipework.',
      points: ['Reliable water supply and drainage layout.', 'Thoughtful maintenance access wherever possible.']
    },
    {
      title: 'Doors and Windows',
      summary: 'Premium main door and durable window frames.',
      points: ['Decorative main door with safety lock.', 'Powder-coated or equivalent windows with clear ventilation.']
    }
  ] satisfies SpecificationGroup[],
  nearby: [
    { title: 'Schools', description: 'Nearby reputed educational institutions including Aryan International School and other leading schools.', icon: 'School', meta: '~1.5 KM' },
    { title: 'Hospitals', description: 'Quick access to Varad Hospital, Shatayu Hospital, and nearby healthcare facilities.', icon: 'Hospital', meta: '~2 KM' },
    { title: 'Highway', description: 'Fast connectivity to Mumbai–Bengaluru Highway for smooth daily commuting and travel.', icon: 'MapPin', meta: '~2 KM' },
    { title: 'Mall', description: 'Close to More Shopping Mall, Aditya Shagun Mall, and major lifestyle destinations.', icon: 'Building2', meta: '~3 KM' },
    { title: 'Banks', description: 'Convenient access to ICICI Bank, HDFC Bank, and State Bank of India nearby.', icon: 'Landmark', meta: '~1.5 KM' },
    { title: 'Airport', description: 'Well connected to Pune Airport through major city routes and highway access.', icon: 'Plane', meta: '~17 KM' }
  ],
  map: {
    title: 'Strategically Located In Bavdhan, Pune',
    embedUrl: 'https://www.google.com/maps?q=18.5037528,73.7644514&z=20&output=embed'
  },
  ongoingProject: {
    title: 'New Residence',
    location: 'Aparajita Housing Society, Bavdhan Khurd, Pune',
    image: '/assets/images/New-Residence.webp',
    mapHref: 'https://www.google.com/maps?q=18.502809,73.763717'
  },
  previousProjects: [
    { title: 'Swami Residency', image: '/assets/images/Swami-Residency.webp' },
    { title: 'Sadashiv Apartment', image: '/assets/images/Sadashiv-Apartment.webp' },
    { title: 'Paradise Inn', image: '/assets/images/Paradise-Inn.webp' },
    { title: 'Samarth Apartment', image: '/assets/images/Samarth-Apartment.webp' },
    { title: 'Nakshatra Green', image: '/assets/images/Nakshatra-Green.png' },
    { title: 'Woodland Villa', image: '/assets/images/Woodland-Villa.webp' }
  ],
  footerLinks: ['About', 'Highlights', 'Gallery', 'Plans', 'Amenities', 'Contact']
};
