export interface RangeSliderProps {
  className?: string;
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  onChangePriceFrom: (price: number) => void;
  onChangePriceTo: (price: number) => void;
}
