export interface CategoryCardProps {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  _count: {
    gears: number;
  };
}

export interface ICategoryProps {
  success: boolean;
  message: string;
  statusCode: number;
  data: CategoryCardProps[];
}
