import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Car from '../infra/typeorm/entities/Car';
import ICarsRepository from '../repositories/ICarsRepository';

@injectable()
class ListAllCars {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(): Promise<Car[] | undefined> {
    const cars = this.carsRepository.readAll();

    if (!cars) {
      throw new AppError('There is not any car');
    }

    return cars;
  }
}

export default ListAllCars;
