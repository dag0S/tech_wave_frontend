export interface DeviceData {
  name: string;
  description: string;
  price: number;
  viewsCount: number;
  categoryId: number;
  brandId: number;
}

export type IDevice = DeviceData & { id: number };

export interface ResponseDeviceData {
  devicesCount: number;
  devices: IDevice[];
}

export interface IParams {
  brandId?: number;
  categoryId?: number;
  priceFrom?: number;
  priceTo?: number;
}