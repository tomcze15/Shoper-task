export interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
}

export interface IQueryFilter {
  brand: string;
  category: string;
}

export interface IResponse {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface ICardProps extends IProduct {}

export interface IButtonProps {
  onClick: () => void;
}

export interface ISelectBoxProps {
  title: string;
  options: string[];
  selected: string;
  setSelected: (newSelected: string) => void;
}
