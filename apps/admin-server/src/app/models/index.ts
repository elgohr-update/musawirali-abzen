import { Variation } from '../models/Variation';
import { Goal, ExperimentGoal } from '../models/Goal';
import { Experiment } from '../models/Experiment';
import { Project } from '../models/Project';
import { User } from '../models/User';

export * from '../models/Variation';
export * from '../models/Goal';
export * from '../models/Experiment';
export * from '../models/Project';
export * from '../models/User';

export const models = [
  User,
  Project,
  Experiment,
  Variation,
  Goal,
  ExperimentGoal,
];