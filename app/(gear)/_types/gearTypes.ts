export type TGear = {
  id: string;
  title: string;
  description: string;
  brand: string;
  pricePerDay: number;
  stock: number;
  image: string;
  isAvailable: boolean;
  categories: {
    name: string;
    slug: string;
    description: string | null;
  };
  provider: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  reviews: Reviews[];
};

type Reviews = {
  comment: string;
  rating: number;
};

export interface IGear {
  success: boolean;
  statusCode: number;
  message: string;
  data: TGear[];
}

export type GearsProps = {
  gears: IGear;
};
