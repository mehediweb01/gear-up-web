export type ICategory = {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
  }[];
};
