export interface EventItem {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  price_range: string; 
  image_url: string;
  tags: string[];     
  isFavorite?: boolean;
}

export interface EventState {
  events: EventItem[];
  favorites: number[];
  loading: boolean;
  error: string | null;
}