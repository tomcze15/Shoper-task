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
  limit: number;
}

export interface IResponse {
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
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

export interface IInputButtonProps {
  placeholder?: string;
  onChange?: (e: string) => void;
}
