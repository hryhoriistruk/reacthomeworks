import { ICarWithAuthModel } from "./ICarWithAuthModel";

export interface ICarPaginatedModel {
  total_item: number;
  total_pages: number;
  prev: number;
  next: number;
  items: ICarWithAuthModel[];
}