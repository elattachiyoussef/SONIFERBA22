export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
} 