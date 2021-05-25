import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Car from '../infra/typeorm/entities/Car';
import ICarsRepository from '../repositories/ICarsRepository';

interface IRequest {
  model: string;
  brand: string;
  price: number;
  year: string;
  country?: string;
  gas_capacity?: number;
  color?: string;
}

@injectable()
class CreateCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({
    model,
    brand,
    price,
    year,
    country,
    gas_capacity,
    color,
  }: IRequest): Promise<Car> {
    if (!model || !brand || !price || !year) {
      throw new AppError('Missing properties to create a car, try again.');
    }

    const car = this.carsRepository.create({
      model,
      brand,
      price,
      year,
      country,
      gas_capacity,
      color,
    });

    return car;
  }
}

export default CreateCarService;
