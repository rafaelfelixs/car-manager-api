import { Request, Response } from 'express';

import { container } from 'tsyringe';

import UpdateCarPictureService from '@modules/cars/services/UpdateCarPictureService';

export default class CarPictureController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateCarPicture = container.resolve(UpdateCarPictureService);

    const car = await updateCarPicture.execute({
      car_id: request.user.id,
      pictureFilename: request.file.filename,
    });

    return response.json(car);
  }
}
