// Design Center Selection Data — extracted from BuilderTrend
// Bristol Farms 103 - Cotham (Regal Homes Spec)

export interface Choice {
  name: string;
  price: number;
  status: 'SELECTED' | 'DECLINED' | 'PENDING';
  isUpgrade: boolean; // items marked with * in BT
  hasPhoto: boolean;
}

export interface Selection {
  id: string;
  title: string;
  location: string;
  choices: Choice[];
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  selections: Selection[];
  isBuyerFacing: boolean; // false for structural/technical categories
}

export const designCenterCategories: Category[] = [
  {
    id: '0200',
    name: 'Exterior',
    displayName: 'Exterior',
    icon: '🏠',
    isBuyerFacing: true,
    selections: [
      {
        id: '0201', title: 'Exterior Color Scheme', location: 'Exterior Color Scheme',
        choices: [
          { name: 'Cotham', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0209', title: 'Exterior Railing', location: 'Exterior Railing',
        choices: [
          { name: 'Matte Black Cinch Iron w/Vertical Balusters', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0213', title: 'Front Door', location: 'Exterior Doors',
        choices: [
          { name: '3 Panel Craftsman', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0214', title: 'Front Door Hardware', location: 'Hardware',
        choices: [
          { name: 'Amador (Satin Nickel)', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '0300',
    name: 'Garage Door',
    displayName: 'Garage',
    icon: '🚗',
    isBuyerFacing: true,
    selections: [
      {
        id: '0311', title: 'Garage Door Style', location: 'Garage',
        choices: [
          { name: 'Long Panel (T50L)', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0312', title: 'Garage Door Color', location: 'Garage',
        choices: [
          { name: 'Standard White', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0315', title: 'Garage Door Windows', location: 'Garage',
        choices: [
          { name: 'Madison 611', price: 949.05, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
          { name: 'Plain Long', price: 949.05, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '0400',
    name: 'Windows',
    displayName: 'Windows',
    icon: '🪟',
    isBuyerFacing: true,
    selections: [
      {
        id: '0401', title: 'Window Style', location: 'Windows',
        choices: [
          { name: 'Amsco Studio Series with Front Grids', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0402', title: 'Window Color', location: 'Windows',
        choices: [
          { name: 'White Interior w/White Exterior', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '0404', title: 'Window Options', location: 'Structural',
        choices: [
          { name: 'Primary Bedroom Optional Window', price: 968.80, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Add 12080 OXXO in Nook', price: 6794.00, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
    ]
  },
  {
    id: '1200',
    name: 'Interior Doors',
    displayName: 'Interior Doors',
    icon: '🚪',
    isBuyerFacing: true,
    selections: [
      {
        id: '1201', title: 'Interior Door Style', location: 'Interior Doors',
        choices: [
          { name: 'Rockport 5 Panel', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '1205', title: 'Optional Doors', location: 'Interior Doors',
        choices: [
          { name: 'Add Barn Door Leading into Primary Bath', price: 2311.50, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '1300',
    name: 'Door Hardware',
    displayName: 'Door Hardware',
    icon: '🔑',
    isBuyerFacing: true,
    selections: [
      {
        id: '1301', title: 'Interior Door Hardware', location: 'Hardware',
        choices: [
          { name: 'Cove Knob (Satin Nickel)', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '1400',
    name: 'Finish Carpentry',
    displayName: 'Trim & Carpentry',
    icon: '🪵',
    isBuyerFacing: true,
    selections: [
      {
        id: '1401', title: 'Base & Casing', location: 'Finish Carpentry & Interior Stair Rail',
        choices: [
          { name: 'Level 1 (5" Baseboard, 3" Casing)', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '1403', title: 'Mudroom Bench', location: 'Finish Carpentry & Interior Stair Rail',
        choices: [
          { name: 'Mudroom Bench', price: 343.47, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
          { name: 'Bench with Cubbies and Coat Hook', price: 980.88, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '1405', title: 'Crown Molding', location: 'Finish Carpentry & Interior Stair Rail',
        choices: [
          { name: '5-7/8 Cove Crown Paint Grade (per LF)', price: 14.43, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: '5-1/4 Colonial Crown Paint Grade (per LF)', price: 14.57, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1406', title: 'Optional Shelves', location: 'Finish Carpentry & Interior Stair Rail',
        choices: [
          { name: 'Office Board & Batten', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
          { name: 'Appliance Shelf', price: 195.03, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
    ]
  },
  {
    id: '1500',
    name: 'Kitchen',
    displayName: 'Kitchen',
    icon: '🍳',
    isBuyerFacing: true,
    selections: [
      {
        id: '1501', title: 'Kitchen Layout', location: 'Cabinets',
        choices: [
          { name: 'Kitchen 2', price: 6205.20, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '1502', title: 'Kitchen Island', location: 'Cabinets',
        choices: [
          { name: "1' Extension on Island", price: 1855.00, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1504', title: 'Kitchen Perimeter Cabinets', location: 'Cabinets',
        choices: [
          { name: 'Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '1506', title: 'Kitchen Island Cabinets', location: 'Cabinets',
        choices: [
          { name: 'Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '1517', title: 'Kitchen Cabinet Options', location: 'Cabinets',
        choices: [
          { name: 'Tray Divider (EA)', price: 216.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Bank of Drawers (EA)', price: 241.06, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Glass - Clear (EA)', price: 432.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Roll out Tray (EA)', price: 604.50, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Double Garbage Pullout (EA)', price: 690.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Glass - Frosted (EA)', price: 690.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Soft Close Door & Drawers w/Dovetail Drawer Boxes', price: 2429.91, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Decorative End Panels', price: 3254.41, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1550', title: 'Kitchen Cabinet Hardware', location: 'Cabinets',
        choices: [
          { name: 'Standard Cabinet Hardware', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '1551', title: 'Countertop Slab Fee', location: 'Countertops',
        choices: [
          { name: 'Slab Fee - One Color Selected', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1552', title: 'Kitchen Perimeter Countertop', location: 'Countertops',
        choices: [
          { name: 'Standard (2cm)', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '1553', title: 'Kitchen Perimeter Edge', location: 'Countertops',
        choices: [
          { name: '4cm Mitered', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1556', title: 'Kitchen Island Countertop', location: 'Countertops',
        choices: [
          { name: 'Standard (2cm)', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '1558', title: 'Kitchen Island Edge', location: 'Countertops',
        choices: [
          { name: '4cm Mitered', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1561', title: 'Kitchen Sink', location: 'Countertops',
        choices: [
          { name: 'Stainless Steel LB-400 (Single Bowl)', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '1565', title: 'Kitchen Faucet', location: 'Plumbing',
        choices: [
          { name: 'Kitchen Faucet', price: 42.97, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '1566', title: 'Kitchen Plumbing Options', location: 'Plumbing',
        choices: [
          { name: 'Air Switch (EA)', price: 328.25, status: 'DECLINED', isUpgrade: true, hasPhoto: false },
          { name: 'Reverse Osmosis Drinking System', price: 1389.75, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Upgraded Reverse Osmosis Drinking System', price: 1714.75, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
    ]
  },
  {
    id: '1600',
    name: 'Appliances',
    displayName: 'Appliances',
    icon: '🍽️',
    isBuyerFacing: true,
    selections: [
      {
        id: '1602', title: 'Appliance Package', location: 'Appliances',
        choices: [
          { name: 'Stainless Steel Appliances w/Standard Hood', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '1700',
    name: 'Flooring',
    displayName: 'Flooring',
    icon: '🏗️',
    isBuyerFacing: true,
    selections: [
      {
        id: '1701', title: 'Main/Upper Level Flooring Plan', location: 'All Floors',
        choices: [
          { name: 'Extended Laminate/LVP/Engineered + Living Room', price: 1923.56, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '1705', title: 'Main Level Laminate/LVP', location: 'Flooring',
        choices: [
          { name: 'Laminate Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: false },
        ]
      },
    ]
  },
  {
    id: '1900',
    name: 'Interior Railing',
    displayName: 'Interior Railing',
    icon: '🪜',
    isBuyerFacing: true,
    selections: [
      {
        id: '1902', title: 'Interior Railing Style', location: 'Interior Railing',
        choices: [
          { name: 'Indrani Vertical Baluster Iron Rail', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '2000',
    name: 'Primary Bathroom',
    displayName: 'Primary Bathroom',
    icon: '🛁',
    isBuyerFacing: true,
    selections: [
      {
        id: '2001', title: 'Primary Bath Tub', location: 'Plumbing',
        choices: [
          { name: 'Grand Bath w/White 42x60 Soaker Tub', price: 3500.00, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2002', title: 'Primary Bath Cabinets', location: 'Cabinets',
        choices: [
          { name: 'Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2003', title: 'Primary Bath Cabinet Options', location: 'Cabinets',
        choices: [
          { name: 'Bank of Drawers (EA)', price: 241.06, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Soft Close Door & Drawers w/Dovetail Drawer Boxes', price: 433.91, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '2013', title: 'Primary Bath Cabinet Hardware', location: 'Cabinets',
        choices: [
          { name: 'Standard Cabinet Hardware', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2025', title: 'Primary Bath Countertop', location: 'Countertops',
        choices: [
          { name: 'Standard (2cm)', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2026', title: 'Primary Bath Counter Edge', location: 'Countertops',
        choices: [
          { name: '2cm Flat Polished', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '2030', title: 'Primary Bath Sink', location: 'Countertops',
        choices: [
          { name: 'White Undermount Oval LS-1916', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2031', title: 'Primary Bath Floor Tile', location: 'Flooring',
        choices: [
          { name: 'Tile Standard with Standard Pattern', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2032', title: 'Primary Shower Wall Tile', location: 'Tile',
        choices: [
          { name: 'Standard Tile with Standard Pattern', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2033', title: 'Primary Shower Floor Tile', location: 'Tile',
        choices: [
          { name: 'Level 1 Shower Floor Tile', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2034', title: 'Primary Shower Accessories', location: 'Tile',
        choices: [
          { name: '1 Glass Corner Shampoo Shelf', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
          { name: '1 Tile Corner Shampoo Shelf', price: 0, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: '2 Tile Corner Shampoo Shelves', price: 49.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: '2 Glass Corner Shampoo Shelves', price: 78.63, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Rectangle Niche', price: 350.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Square Niche', price: 350.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Corner Bench', price: 449.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Rectangle Bench', price: 599.00, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '2041', title: 'Primary Bath Fixtures', location: 'Plumbing',
        choices: [
          { name: 'Gibson - Center Set (Brushed Nickel)', price: 250.84, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2044', title: 'Primary Bath Plumbing Options', location: 'Plumbing',
        choices: [
          { name: 'Upgrade Shower/Tub Drain Color', price: 260.00, status: 'DECLINED', isUpgrade: true, hasPhoto: false },
          { name: 'Rain Shower with Second Valve', price: 1883.55, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Handheld Shower with Second Valve', price: 2110.26, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '2047', title: 'Primary Bath Toilet', location: 'Plumbing',
        choices: [
          { name: 'White Gerber Maxwell Elongated', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2048', title: 'Primary Shower Enclosure', location: 'Mirrors and Shower Enclosure',
        choices: [
          { name: 'Full Euro (Approximately 72" High) Upgrade Finish', price: 1250.25, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2050', title: 'Primary Bath Mirror', location: 'Mirrors and Shower Enclosure',
        choices: [
          { name: 'Standard Square Glass Mirror', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2052', title: 'Primary Bath Hardware', location: 'Hardware',
        choices: [
          { name: 'Triva (Brushed Nickel)', price: 38.14, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '2100',
    name: 'Bathroom 2',
    displayName: 'Bathroom 2',
    icon: '🚿',
    isBuyerFacing: true,
    selections: [
      {
        id: '2101', title: 'Bath 2 Tub/Shower', location: 'Plumbing',
        choices: [
          { name: 'Full Bath with 1 Piece Fiberglass Insert (Subway)', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2102', title: 'Bath 2 Cabinets', location: 'Cabinets',
        choices: [
          { name: 'Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2113', title: 'Bath 2 Cabinet Hardware', location: 'Cabinets',
        choices: [
          { name: 'Standard Cabinet Hardware', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2125', title: 'Bath 2 Countertop', location: 'Countertops',
        choices: [
          { name: 'Standard (2cm)', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2126', title: 'Bath 2 Counter Edge', location: 'Countertops',
        choices: [
          { name: '2cm Flat Polished', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '2129', title: 'Bath 2 Sink', location: 'Countertops',
        choices: [
          { name: 'White Undermount Oval LS-1916', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2131', title: 'Bath 2 Flooring', location: 'Flooring',
        choices: [
          { name: 'Luxury Vinyl Tile Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '2138', title: 'Bath 2 Fixtures', location: 'Plumbing',
        choices: [
          { name: 'Gibson - Center Set (Brushed Nickel)', price: 124.05, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2140', title: 'Bath 2 Plumbing Options', location: 'Plumbing',
        choices: [
          { name: 'Upgrade Shower/Tub Drain Color', price: 260.00, status: 'DECLINED', isUpgrade: true, hasPhoto: false },
          { name: 'Rain Shower with Second Valve (EA)', price: 1883.55, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Handheld Shower with Second Valve (EA)', price: 2110.26, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
        ]
      },
      {
        id: '2143', title: 'Bath 2 Toilet', location: 'Plumbing',
        choices: [
          { name: 'White Gerber Maxwell Elongated', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2145', title: 'Bath 2 Mirror', location: 'Mirrors and Shower Enclosure',
        choices: [
          { name: 'Standard Square Glass Mirror', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2146', title: 'Bath 2 Hardware', location: 'Hardware',
        choices: [
          { name: 'Triva (Brushed Nickel)', price: 30.79, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '2400',
    name: 'Powder Bathroom',
    displayName: 'Powder Room',
    icon: '🪞',
    isBuyerFacing: true,
    selections: [
      {
        id: '2401', title: 'Powder Bath Pedestal', location: 'Plumbing',
        choices: [
          { name: '22-504 Gerber Maxwell Petite', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2402', title: 'Powder Bath Flooring', location: 'Flooring',
        choices: [
          { name: 'Luxury Vinyl Plank Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: false },
        ]
      },
      {
        id: '2403', title: 'Powder Bath Faucet', location: 'Plumbing',
        choices: [
          { name: 'Gibson - Center Set (Brushed Nickel)', price: 41.77, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2405', title: 'Powder Bath Toilet', location: 'Plumbing',
        choices: [
          { name: 'White Gerber Maxwell Elongated', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2406', title: 'Powder Bath Mirror', location: 'Mirrors and Shower Enclosure',
        choices: [
          { name: 'Oval Mirror (Approx 24" x 36")', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2407', title: 'Powder Bath Hardware', location: 'Hardware',
        choices: [
          { name: 'Triva (Brushed Nickel)', price: 12.87, status: 'SELECTED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '2500',
    name: 'Laundry',
    displayName: 'Laundry',
    icon: '👕',
    isBuyerFacing: true,
    selections: [
      {
        id: '2501', title: 'Laundry Options', location: 'Cabinets',
        choices: [
          { name: 'Add Cabinets and Countertop', price: 1761.38, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
          { name: 'Add Cabinets and Countertop with Sink', price: 3383.07, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
          { name: 'Add Cabinets and Countertop with Sink w/Shelf', price: 6023.57, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
        ]
      },
      {
        id: '2530', title: 'Laundry Flooring', location: 'Flooring',
        choices: [
          { name: 'Luxury Vinyl Tile Standard', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '3000',
    name: 'Carpet',
    displayName: 'Carpet',
    icon: '🧶',
    isBuyerFacing: true,
    selections: [
      {
        id: '3003', title: 'Main/Upper Level Carpet', location: 'Carpet and Padding',
        choices: [
          { name: 'Level 1', price: 1238.26, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
      {
        id: '3008', title: 'Carpet Pad', location: 'Carpet and Padding',
        choices: [
          { name: '8lb 7/16"', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
        ]
      },
    ]
  },
  {
    id: '3300',
    name: 'Painting',
    displayName: 'Paint',
    icon: '🎨',
    isBuyerFacing: true,
    selections: [
      {
        id: '3301', title: 'Interior Paint', location: 'Painting',
        choices: [
          { name: '1-Tone Paint', price: 0, status: 'SELECTED', isUpgrade: true, hasPhoto: true },
        ]
      },
    ]
  },
  // Non-buyer-facing categories (structural/technical)
  {
    id: '0100',
    name: 'Preconstruction',
    displayName: 'Structural Options',
    icon: '🏗️',
    isBuyerFacing: false,
    selections: [
      {
        id: '0101', title: 'Finished Area', location: 'Structural',
        choices: [{ name: 'No Basement', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false }]
      },
      {
        id: '0102', title: 'Garage', location: 'Structural',
        choices: [{ name: '3 Car Garage', price: 29227.11, status: 'SELECTED', isUpgrade: true, hasPhoto: false }]
      },
      {
        id: '0107', title: 'Dining Room/Office', location: 'Structural',
        choices: [{ name: 'Office with French Doors', price: 2265.39, status: 'SELECTED', isUpgrade: false, hasPhoto: false }]
      },
      {
        id: '0109', title: 'Fireplace', location: 'Structural',
        choices: [{ name: 'Fireplace', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false }]
      },
      {
        id: '0112', title: 'Stairs', location: 'Structural',
        choices: [{ name: 'Curved', price: 27058.69, status: 'SELECTED', isUpgrade: false, hasPhoto: true }]
      },
    ]
  },
  {
    id: '0700',
    name: 'Plumbing',
    displayName: 'Plumbing',
    icon: '🔧',
    isBuyerFacing: false,
    selections: [
      {
        id: '0702', title: 'Water Heater', location: 'Plumbing',
        choices: [{ name: 'Rheem RTGH-95DVLN Tankless Water Heater', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: true }]
      },
      {
        id: '0703', title: 'Water Softener', location: 'Plumbing',
        choices: [
          { name: 'Rough for Future Water Softener (Hose Bibs Only)', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false },
          { name: 'Rough for Future Water Softener (Whole Home)', price: 797.50, status: 'DECLINED', isUpgrade: false, hasPhoto: false },
          { name: 'Complete Reionator Pro Water Softener (RX10)', price: 3638.75, status: 'DECLINED', isUpgrade: false, hasPhoto: true },
        ]
      },
    ]
  },
  {
    id: '0800',
    name: 'HVAC',
    displayName: 'Heating & Air',
    icon: '❄️',
    isBuyerFacing: false,
    selections: [
      {
        id: '0801', title: 'Furnace/AC', location: 'Heating & Air',
        choices: [{ name: 'Standard Series Furnace/AC', price: 0, status: 'SELECTED', isUpgrade: false, hasPhoto: false }]
      },
      {
        id: '0802', title: 'Gas Line Options', location: 'Heating & Air',
        choices: [
          { name: 'Gas Line Furnace/Water Heater and Range', price: 0, status: 'PENDING', isUpgrade: false, hasPhoto: false },
          { name: 'Additional Gas Line (EA)', price: 580.00, status: 'PENDING', isUpgrade: true, hasPhoto: false },
        ]
      },
    ]
  },
];

// Helper to get only buyer-facing categories
export const getBuyerFacingCategories = () =>
  designCenterCategories.filter(c => c.isBuyerFacing);

// Helper to get total upgrade cost for all selected items
export const getTotalSelectedUpgrades = () =>
  designCenterCategories
    .flatMap(c => c.selections)
    .flatMap(s => s.choices)
    .filter(c => c.status === 'SELECTED' && c.price > 0)
    .reduce((sum, c) => sum + c.price, 0);
