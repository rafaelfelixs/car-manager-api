import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Car from '../infra/typeorm/entities/Car';
import ICarsRepository from '../repositories/ICarsRepository';

interface IRequest {
  car_id: string;
  price?: number;
  country?: string;
  gas_capacity?: number;
  color?: string;
}

@injectable()
class UpdateCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({
    car_id,
    price,
    country,
    gas_capacity,
    color,
  }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Car not found');
    }

    if (price) {
      car.price = price;
    }
    if (country) {
      car.country = country;
    }
    if (gas_capacity) {
      car.gas_capacity = gas_capacity;
    }
    if (color) {
      car.color = color;
    }

    return this.carsRepository.save(car);
  }
}

export default UpdateCarService;
