import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Car from '../infra/typeorm/entities/Car';
import ICarsRepository from '../repositories/ICarsRepository';

interface IRequest {
  car_id: string;
}

@injectable()
class DeleteCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  public async execute({ car_id }: IRequest): Promise<Car | undefined> {
    const car = this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Car not found');
    }

    return car;
  }
}

export default DeleteCarService;
