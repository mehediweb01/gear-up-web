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
  rentals: Rental[];
  _count: {
    rentals: number;
    reviews: number;
  };
};

export type Reviews = {
  id: string;
  comment: string;
  rating: number;
  customerId: string;
  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
};

type Rental = {
  id: string;
  quantity: number;
  totalPrice: number;
  startDate: string;
  endDate: string;
  status: string;
  customerId: string;
  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  createdAt: string;
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
