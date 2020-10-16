import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/orphanage';
import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanageRepository = getRepository(Orphanage);

  const orphanage = orphanageRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanageRepository.save(orphanage);

  return response.status(201).json(orphanage);
});

app.listen(3333);
