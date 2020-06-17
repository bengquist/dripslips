export type Product = {
  id: string;
  modelId: string;
  title: string;
  description: string;
  price: number;
  type: string;
  gender: string;
  colorGroup: string;
  availableColors: string[];
  availableSizes: number[];
  images: string[];
};
