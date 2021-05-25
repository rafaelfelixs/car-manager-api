import { getRepository, Repository } from 'typeorm';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';

import ICreateCarDTO from '@modules/cars/dtos/ICreateCarDTO';
// import IBoughtCarDTO from '@modules/cars/dtos/IBoughtCarDTO';
import IFindAllCarsByOwnerDTO from '@modules/cars/dtos/IFindAllCarsByOwnerDTO';
import IFindAllCarsByBrandDTO from '@modules/cars/dtos/IFindAllCarsByBrandDTO';
import IFindAllCarsByYearDTO from '@modules/cars/dtos/IFindAllCarsByYearDTO';

import Car from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;

  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async findById(id: string): Promise<Car | undefined> {
    const foundCar = await this.ormRepository.findOne(id);

    return foundCar;
  }

  public async findAllCarsByYear(year: IFindAllCarsByYearDTO): Promise<Car[]> {
    const carsFoundByYear = await this.ormRepository.find({
      where: { year },
    });

    return carsFoundByYear;
  }

  public async findAllCarsByBrand(
    brand: IFindAllCarsByBrandDTO,
  ): Promise<Car[]> {
    const carsFoundByBrand = await this.ormRepository.find({
      where: { brand },
    });

    return carsFoundByBrand;
  }

  public async findAllCarsByOwner(
    owner_id: IFindAllCarsByOwnerDTO,
  ): Promise<Car[]> {
    const carsFoundByOwner = await this.ormRepository.find({
      where: { owner_id },
    });

    return carsFoundByOwner;
  }

  public async create({
    model,
    brand,
    price,
    year,
    country,
    gas_capacity,
    color,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.ormRepository.create({
      model,
      brand,
      price,
      year,
      country,
      gas_capacity,
      color,
    });

    await this.ormRepository.save(car);

    return car;
  }

  public async save(car: Car): Promise<Car> {
    return this.ormRepository.save(car);
  }

  public async readAll(): Promise<Car[] | undefined> {
    return this.ormRepository.createQueryBuilder('cars').getRawMany();
  }

  public async deleteById(id: string): Promise<Car[] | undefined> {
    /* const car = this.ormRepository.findOne({
      where: { id },
    }); */

    await this.ormRepository
      .createQueryBuilder()
      .where('id = :id', { id })
      .execute();

    return this.ormRepository.createQueryBuilder('cars').getRawMany();
  }
}

export default CarsRepository;
