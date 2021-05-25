import { container } from 'tsyringe';

import '@modules/users/providers';

import '@shared/container/providers';

// import IProjectsRepository from '@modules/projects/repositories/IProjectsRepository';
// import ProjectsRepository from '@modules/projects/infra/typeorm/repositories/ProjectsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import ICarsRepository from '@modules/cars/repositories/ICarsRepository';
import CarsRepository from '@modules/cars/infra/typeorm/repositories/CarsRepository';

/* container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository,
); */

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
