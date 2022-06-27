export interface ICardProps {
  image: string;
  title: string;
  desc: string;
  price: number;
  brand: string;
  category: string;
}

export interface IButtonProps {
  onClick: () => void;
}
