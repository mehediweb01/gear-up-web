export interface IProviderGear {
  id: string;
  title: string;
  description: string | null;
  brand: string;
  pricePerDay: number;
  stock: number;
  image: string;
  isAvailable: boolean;
  providerId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;

  categories: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };

  provider: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: "PROVIDER";
    status: "ACTIVE" | "SUSPENDS";
    createdAt: string;
    updatedAt: string;
  };

  rentals: {
    id: string;
    quantity: number;
    totalPrice: number;
    startDate: string;
    endDate: string;
    status: "PLACED" | "PAID" | "RETURNED" | "CANCELLED" | "CONFIRMED";
    customerId: string;
    gearId: string;
    createdAt: string;
    updatedAt: string;

    customer: {
      id: string;
      name: string;
      email: string;
      phone: string;
      address: string;
    };
  }[];

  reviews: {
    id: string;
    comment: string;
    rating: number;
    customerId: string;
    gearId: string;
    createdAt: string;
    updatedAt: string;

    customer: {
      id: string;
      name: string;
      email: string;
      phone: string;
      address: string;
    };
  }[];

  _count: {
    rentals: number;
    reviews: number;
  };
}
