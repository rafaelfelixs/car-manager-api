export default interface ICreateCarDTO {
  model: string;
  brand: string;
  price: number;
  year: string;
  country?: string;
  gas_capacity?: number;
  color?: string;
}
