import { RouteSeoData } from './seo.types';

export const seoRoutes: RouteSeoData[] = [
  {
    path: '',
    sectionId: 'home',
    primaryKeyword: '2 BHK & 3 BHK Luxury Flats',
    title: '2 BHK & 3 BHK Luxury Flats | Nature Green | Pune',
    description:
      'Nature Green is a Ready to Move Residential Project in Bavdhan Pune with 2 BHK flats, Amenities, floor plans, gallery, pricing, and contact details now.'
  },
  {
    path: 'about',
    sectionId: 'about',
    primaryKeyword: 'Residential Project',
    title: 'Residential Project in Bavdhan | Nature Green | Pune',
    description:
      'Learn about Nature Green, a Ready to Move Residential Project in Bavdhan Pune with 2 BHK flats, Amenities, green surroundings, RERA details, and pricing.'
  },
  {
    path: 'highlights',
    sectionId: 'highlights',
    primaryKeyword: 'Ready to Move 2 BHK Flats',
    title: 'Ready to Move 2 BHK Flats | Nature Green | Pune',
    description:
      'Explore Nature Green highlights, a Ready to Move Residential Project in Bavdhan Pune with 2 BHK flats, Amenities, parking, safety, and nearby connectivity.'
  },
  {
    path: 'gallery',
    sectionId: 'gallery',
    primaryKeyword: '2 BHK Flat Gallery',
    title: '2 BHK Flat Gallery | Nature Green | Pune',
    description:
      'View Nature Green gallery for a Ready to Move Residential Project in Bavdhan Pune with 2 BHK flats, Amenities, facade views, parking, plans, and rooms.'
  },
  {
    path: 'floor-plans',
    sectionId: 'floor-plans',
    primaryKeyword: '2 BHK Floor Plans',
    title: '2 BHK Floor Plans | Nature Green | Pune',
    description:
      'See Nature Green 2 BHK floor plans for a Ready to Move Residential Project in Bavdhan Pune with 760 sq.ft carpet area, Amenities, pricing, and brochure.'
  },
  {
    path: 'amenities',
    sectionId: 'amenities',
    primaryKeyword: 'Project Amenities',
    title: 'Project Amenities | Nature Green | Pune',
    description:
      'Discover Nature Green Amenities including solar systems, CCTV, video door phone, fire safety, and parking at a Ready to Move Residential Project in Pune.'
  },
  {
    path: 'location',
    sectionId: 'nearby',
    primaryKeyword: 'Flats in Bavdhan Pune',
    title: 'Flats in Bavdhan Pune | Nature Green | Pune',
    description:
      'Check Nature Green location near schools, hospitals, highway, malls, and banks for a Ready to Move Residential Project with 2 BHK flats and Amenities.'
  },
  {
    path: 'contact',
    sectionId: 'contact',
    primaryKeyword: 'Ready to Move Flats Contact',
    title: 'Ready to Move Flats Contact | Nature Green | Pune',
    description:
      'Contact Avani Construction for Nature Green, a Ready to Move Residential Project in Bavdhan Pune with 2 BHK flats, Amenities, brochure, and site visits.'
  }
];

export const routeSeoByPath = new Map(seoRoutes.map((route) => [route.path, route]));
