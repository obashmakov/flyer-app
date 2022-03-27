export interface FlyerProps {
  id: number;
  title: string;
  retailer_id: number;
  start_date: string;
  end_date: string;
  is_published: number;
  asset: string;
  category_id: number;
  category_name?: string;
  retailer_name?: string;
}

export type LikeButtonProps = Pick<FlyerProps, 'id' | 'title'>
export interface SelectedFiltersProps {
  id: number;
  name: string;
  filterType: string;
}

export interface FilterProps {
  isOpen: boolean;
  name: string;
  filters: {
    id: number;
    name: string;
  }[];
  selectedFilters?: SelectedFiltersProps[];
}

export interface ActionProps {
  type: string;
  payload: FlyerProps[];
  filterType: string;
}
