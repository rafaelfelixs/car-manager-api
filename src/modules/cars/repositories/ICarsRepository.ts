import Car from '../infra/typeorm/entities/Car';
import ICreateCarDTO from '../dtos/ICreateCarDTO';
import IFindAllCarsByOwnerDTO from '../dtos/IFindAllCarsByOwnerDTO';
import IFindAllCarsByBrandDTO from '../dtos/IFindAllCarsByBrandDTO';
import IFindAllCarsByYearDTO from '../dtos/IFindAllCarsByYearDTO';

export default interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  save(car: Car): Promise<Car>;
  findAllCarsByOwner(data: IFindAllCarsByOwnerDTO): Promise<Car[]>;
  findAllCarsByBrand(data: IFindAllCarsByBrandDTO): Promise<Car[]>;
  findAllCarsByYear(data: IFindAllCarsByYearDTO): Promise<Car[]>;
  findById(id: string): Promise<Car | undefined>;
  // deleteById(id: string): Promise<Car>;
}
