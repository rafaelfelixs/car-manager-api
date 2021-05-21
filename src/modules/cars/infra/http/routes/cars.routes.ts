import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CarsController from '../controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.use(ensureAuthenticated);

carsRouter.post('/', carsController.create);

carsRouter.get('/', carsController.read);

carsRouter.put('/', carsController.update);

export default carsRouter;
