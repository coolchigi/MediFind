import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerOperatingHours = {
  readonly dayOfWeek: string;
  readonly openTime: string;
  readonly closeTime: string;
}

type LazyOperatingHours = {
  readonly dayOfWeek: string;
  readonly openTime: string;
  readonly closeTime: string;
}

export declare type OperatingHours = LazyLoading extends LazyLoadingDisabled ? EagerOperatingHours : LazyOperatingHours

export declare const OperatingHours: (new (init: ModelInit<OperatingHours>) => OperatingHours)

type EagerAddress = {
  readonly street: string;
  readonly postalCode: string;
  readonly city: string;
  readonly province: string;
  readonly country: string;
}

type LazyAddress = {
  readonly street: string;
  readonly postalCode: string;
  readonly city: string;
  readonly province: string;
  readonly country: string;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerHealthcareProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HealthcareProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly website: string;
  readonly contact: string;
  readonly hoursOfOperation: OperatingHours[];
  readonly speciality: string;
  readonly address: Address;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHealthcareProvider = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HealthcareProvider, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly website: string;
  readonly contact: string;
  readonly hoursOfOperation: OperatingHours[];
  readonly speciality: string;
  readonly address: Address;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HealthcareProvider = LazyLoading extends LazyLoadingDisabled ? EagerHealthcareProvider : LazyHealthcareProvider

export declare const HealthcareProvider: (new (init: ModelInit<HealthcareProvider>) => HealthcareProvider) & {
  copyOf(source: HealthcareProvider, mutator: (draft: MutableModel<HealthcareProvider>) => MutableModel<HealthcareProvider> | void): HealthcareProvider;
}