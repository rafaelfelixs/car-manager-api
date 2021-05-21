import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import Car from '@modules/cars/infra/typeorm/entities/Car';
import AppError from '@shared/errors/AppError';
import ICarsRepository from '@modules/cars/repositories/ICarsRepository';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  car_id: string;
  pictureFilename: string;
}

@injectable()
class UpdateCarPictureService {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ car_id, pictureFilename }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(car_id);

    if (!car) {
      throw new AppError('Car not found.');
    }

    if (car.picture) {
      // Deletar avatar anterior
      await this.storageProvider.deleteFile(car.picture);
    }

    const filename = await this.storageProvider.saveFile(pictureFilename);

    car.picture = filename;

    await this.carsRepository.save(car);

    return car;
  }
}

export default UpdateCarPictureService;
