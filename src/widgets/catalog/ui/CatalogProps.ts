import { ResponseCategoryData } from "@/entities/category";

export interface CatalogProps {
  className?: string;
  data?: ResponseCategoryData[];
  isLoading: boolean;
  onSelect: (id: number) => void;
  selected?: number;
}
