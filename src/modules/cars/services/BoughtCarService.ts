import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import Car from '@modules/cars/infra/typeorm/entities/Car';
import AppError from '@shared/errors/AppError';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  car_id: string;
  owner_id: string;
  price: number;
  purchase_date: Date;
}

@injectable()
class BoughtCarService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    car_id,
    owner_id,
    purchase_date,
  }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Car not found.');
    }

    const user = await this.usersRepository.findById(owner_id);

    if (!user) {
      throw new AppError(
        'Only authenticated users can change car picture.',
        401,
      );
    }

    if (car.purchase_date) {
      throw new AppError('Car was already purchased.');
    }

    car.purchase_date = purchase_date;

    await this.carsRepository.save(car);

    return car;
  }
}

export default BoughtCarService;
