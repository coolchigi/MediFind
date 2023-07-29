/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHealthcareProvider = /* GraphQL */ `
  subscription OnCreateHealthcareProvider(
    $filter: ModelSubscriptionHealthcareProviderFilterInput
  ) {
    onCreateHealthcareProvider(filter: $filter) {
      id
      name
      website
      contact
      hoursOfOperation {
        dayOfWeek
        openTime
        closeTime
        __typename
      }
      speciality
      address {
        street
        postalCode
        city
        province
        country
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateHealthcareProvider = /* GraphQL */ `
  subscription OnUpdateHealthcareProvider(
    $filter: ModelSubscriptionHealthcareProviderFilterInput
  ) {
    onUpdateHealthcareProvider(filter: $filter) {
      id
      name
      website
      contact
      hoursOfOperation {
        dayOfWeek
        openTime
        closeTime
        __typename
      }
      speciality
      address {
        street
        postalCode
        city
        province
        country
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteHealthcareProvider = /* GraphQL */ `
  subscription OnDeleteHealthcareProvider(
    $filter: ModelSubscriptionHealthcareProviderFilterInput
  ) {
    onDeleteHealthcareProvider(filter: $filter) {
      id
      name
      website
      contact
      hoursOfOperation {
        dayOfWeek
        openTime
        closeTime
        __typename
      }
      speciality
      address {
        street
        postalCode
        city
        province
        country
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
