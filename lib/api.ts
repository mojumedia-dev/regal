const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://regal-homes-price-tool-production-0d02.up.railway.app';

export interface Community {
  id: number;
  name: string;
  slug: string;
  phone: string;
  website: string;
  sales_office_address: string;
  sales_office_city: string;
  sales_office_hours: string;
  sales_manager_name: string;
  sales_manager_phone: string;
  sales_manager_email: string;
}

export interface Plan {
  id: number;
  name: string;
  total_sqft: number;
  finished_sqft_range: string;
  floors: number;
  beds_range: string;
  baths_range: string;
  garage_range: string;
  base_price: number | null;
  sort_order: number;
  community_id?: number;
  community_name?: string;
  community_slug?: string;
}

export interface Homesite {
  id: number;
  lot_number: string;
  address: string | null;
  front_facing_direction: string;
  sqft: number | null;
  premium_price: number;
  sort_order: number;
}

export interface AvailableHome {
  id: number;
  plan_name: string;
  address: string;
  total_sqft: number;
  finished_sqft: number;
  beds: number;
  baths: number;
  garage: number;
  est_move_in: string;
  status: string;
  price: number;
  sort_order: number;
  community_name?: string;
  community_slug?: string;
}

export interface CommunityDetail extends Community {
  plans: Plan[];
  homesites: Homesite[];
  availableHomes: AvailableHome[];
}

export interface Stats {
  totalCommunities: number;
  totalPlans: number;
  totalHomesAvailable: number;
  totalHomesites: number;
  priceRange: {
    min_price: number;
    max_price: number;
  };
}

async function fetchAPI<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: 3600 } // ISR: 1 hour
    });
    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText}`);
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(`API fetch error for ${endpoint}:`, error);
    return null;
  }
}

export async function getCommunities(): Promise<Community[]> {
  const data = await fetchAPI<Community[]>('/api/public/communities');
  return data || [];
}

export async function getCommunity(slug: string): Promise<CommunityDetail | null> {
  return fetchAPI<CommunityDetail>(`/api/public/communities/${slug}`);
}

export async function getPlan(id: number): Promise<Plan | null> {
  return fetchAPI<Plan>(`/api/public/plans/${id}`);
}

export async function getAllAvailableHomes(): Promise<AvailableHome[]> {
  const data = await fetchAPI<AvailableHome[]>('/api/public/available-homes');
  return data || [];
}

export async function getStats(): Promise<Stats | null> {
  return fetchAPI<Stats>('/api/public/stats');
}

export function formatPrice(price: number | null): string {
  if (!price) return 'Contact for pricing';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatSqft(sqft: number | string | null): string {
  if (!sqft) return 'N/A';
  const num = typeof sqft === 'string' ? parseInt(sqft) : sqft;
  return new Intl.NumberFormat('en-US').format(num) + ' sq ft';
}
