export const projects = [
  {
    slug: 'house-of-blue-hours',
    title: 'House of Blue Hours',
    city: 'Alibaug',
    room: 'Living',
    type: 'Family house',
    year: '2024',
    sqft: '4200 sq ft',
    featured_image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    constraint_line: 'Coastal humidity. No false ceilings allowed.',
    is_featured: true,
    case_study: {
      problem_brief: 'The original room felt enclosed, dated and disconnected from the coastal setting. Low ceilings, heavy woodwork and an inefficient layout limited light, flow and a sense of calm. Our redesign opens the space visually, reconnects it to the view, and layers texture, light and custom furniture to create a restful, lived-in luxury.',
      before_image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', // generic interior placeholder
      design_strategy: {
        floor_plan: { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', caption: 'Reconfigured for flow, openness and connection to the view.' },
        material_palette: { img: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80', caption: 'Earthy, tactile materials with a restrained coastal palette.' },
        furniture_edit: { img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80', caption: 'Removed bulky, ornate pieces. Focused on low, custom forms.', is_rejected: true },
        finished_space: { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', caption: 'Calm, layered and refined. A space that feels like a deep breath.' }
      },
      rooms: [
        { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80', caption: 'The main living area, anchored by custom low-profile seating.' },
        { img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80', caption: 'The dining space transitions seamlessly to the outdoor deck.' },
        { img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80', caption: 'Evening light highlights the tactile plaster walls.' }
      ],
      materials: [
        { name: 'Walnut', img: '/assets/mat-1.jpg' },
        { name: 'Linen', img: '/assets/mat-2.jpg' },
        { name: 'Plaster', img: '/assets/mat-3.jpg' }
      ],
      facts: [
        '14 weeks on site',
        'Built by local Alibaug craftsmen',
        'Structural columns exposed and celebrated'
      ],
      residue_quote: '“It is the first room that made the city feel quiet. We sit down and stop looking for the television.”'
    }
  },
  {
    slug: 'the-long-kitchen',
    title: 'The Long Kitchen',
    city: 'Bengaluru',
    room: 'Kitchen',
    type: 'Apartment',
    year: '2023',
    sqft: '850 sq ft',
    featured_image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80',
    constraint_line: 'Linear layout. Zero natural light at the rear.',
    case_study: {
      problem_brief: 'A narrow, deep galley kitchen that felt like a corridor. The clients love to cook together but the layout forced them into a single-file line. We stripped the unnecessary upper cabinets, introduced a continuous reflective backsplash, and designed a custom floating island to break the linearity.',
      before_image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
      design_strategy: {
        floor_plan: { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', caption: 'Broke the corridor effect with a staggered island.' },
        material_palette: { img: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80', caption: 'Matte black fenix against warm oak veneers.' },
        furniture_edit: { img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', caption: 'Eliminated heavy overhead cabinetry.', is_rejected: true },
        finished_space: { img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80', caption: 'A bright, social space despite the deep plan.' }
      },
      rooms: [
        { img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80', caption: 'The monolithic island anchors the activity.' },
        { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80', caption: 'Hidden appliances maintain the minimal aesthetic.' }
      ],
      materials: [
        { name: 'Fenix Black', img: '/assets/mat-1.jpg' },
        { name: 'Oak Veneer', img: '/assets/mat-2.jpg' }
      ],
      facts: [
        '8 weeks on site',
        'Built with modular precision partners',
        'Plumbing rerouted to enable the central island'
      ],
      residue_quote: '“The island became the only table we use.”'
    }
  },
  {
    slug: 'quiet-wing',
    title: 'Quiet Wing',
    city: 'Pune',
    room: 'Bedroom',
    type: 'Family house',
    year: '2024',
    sqft: '1200 sq ft',
    featured_image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80',
    constraint_line: 'South-facing windows. Intense afternoon glare.',
    case_study: {
      problem_brief: 'The master suite suffered from blinding afternoon sun and lacked acoustic separation from the rest of the busy family home. We treated the entire wing as a sanctuary, introducing deep window reveals, heavy linen drapery, and acoustic paneling disguised as architectural details.',
      before_image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80',
      design_strategy: {
        floor_plan: { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', caption: 'Added an acoustic buffer zone at the entry.' },
        material_palette: { img: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80', caption: 'Soft, sound-absorbing materials in muted tones.' },
        furniture_edit: { img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', caption: 'Removed the high-gloss built-ins.', is_rejected: true },
        finished_space: { img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80', caption: 'A cocoon of comfort and silence.' }
      },
      rooms: [
        { img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80', caption: 'The bed is positioned to catch morning light, avoiding the afternoon glare.' },
        { img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=80', caption: 'Custom acoustic paneling behind the headboard.' }
      ],
      materials: [
        { name: 'Heavy Linen', img: '/assets/mat-2.jpg' },
        { name: 'Fluted Wood', img: '/assets/mat-3.jpg' }
      ],
      facts: [
        '10 weeks on site',
        'Built by specialist acoustic joiners',
        'Windows upgraded to double-glazed units'
      ],
      residue_quote: '“We sleep through the monsoon storms now.”'
    }
  },
  {
    slug: '12-foot-kitchen',
    title: 'A 12-foot kitchen',
    city: 'Pune',
    room: 'Kitchen',
    type: 'Apartment',
    year: '2025',
    sqft: '400 sq ft',
    featured_image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
    constraint_line: '12-foot frontage. No extra window.',
    case_study: {
      problem_brief: 'A classic tight builder-grade kitchen with limited light and cramped counters. The challenge was fitting full-sized appliances without making the space feel like a utility closet. We used a unified material language and stripped the hardware to reduce visual noise.',
      before_image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
      design_strategy: {
        floor_plan: { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', caption: 'Maximized the single 12-foot wall for all core functions.' },
        material_palette: { img: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80', caption: 'Light, reflective surfaces to bounce the limited natural light.' },
        furniture_edit: { img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', caption: 'Removed the bulky extraction hood for a sleek downdraft.', is_rejected: true },
        finished_space: { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', caption: 'Seamless, handle-less geometry.' }
      },
      rooms: [
        { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80', caption: 'The unbroken 12-foot counter.' },
        { img: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1600&q=80', caption: 'Integrated lighting replaces the need for extra windows.' }
      ],
      materials: [
        { name: 'Calacatta Marble', img: '/assets/mat-1.jpg' },
        { name: 'Matte White Lacquer', img: '/assets/mat-3.jpg' }
      ],
      facts: [
        '6 weeks on site',
        'Built with imported hardware systems',
        'Total rewiring required for the new appliance layout'
      ],
      residue_quote: '“It feels twice as large, even though we didn’t move a single wall.”'
    }
  }
];
