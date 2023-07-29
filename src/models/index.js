// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HealthcareProvider, OperatingHours, Address } = initSchema(schema);

export {
  HealthcareProvider,
  OperatingHours,
  Address
};