import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCarService from '@modules/cars/services/CreateCarService';
import ShowCarService from '@modules/cars/services/ShowCarService';
import UpdateCarService from '@modules/cars/services/UpdateCarService';

export default class CarsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { model, brand, price, year, country, gas_capacity, color } =
      request.body;

    const createCar = container.resolve(CreateCarService);

    const car = await createCar.execute({
      model,
      brand,
      price,
      year,
      country,
      gas_capacity,
      color,
    });

    return response.json(car);
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { car_id } = request.body;

    const showCar = container.resolve(ShowCarService);

    const car = await showCar.execute({
      car_id,
    });

    return response.json(car);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { car_id, price, country, gas_capacity, color } = request.body;

    const updateCar = container.resolve(UpdateCarService);

    const car = await updateCar.execute({
      car_id,
      price,
      country,
      gas_capacity,
      color,
    });

    return response.json(car);
  }
}
