export interface FlyerProps {
  id: number;
  title: string;
  retailer_id: number;
  start_date: string;
  end_date: string;
  is_published: number;
  asset: string;
  category_id: number;
}

export type LikeButtonProps = Pick<FlyerProps, 'id' | 'title'>

export interface ActionProps {
  type: string;
  payload: FlyerProps[];
}
