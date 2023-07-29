/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHealthcareProvider = /* GraphQL */ `
  mutation CreateHealthcareProvider(
    $input: CreateHealthcareProviderInput!
    $condition: ModelHealthcareProviderConditionInput
  ) {
    createHealthcareProvider(input: $input, condition: $condition) {
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
export const updateHealthcareProvider = /* GraphQL */ `
  mutation UpdateHealthcareProvider(
    $input: UpdateHealthcareProviderInput!
    $condition: ModelHealthcareProviderConditionInput
  ) {
    updateHealthcareProvider(input: $input, condition: $condition) {
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
export const deleteHealthcareProvider = /* GraphQL */ `
  mutation DeleteHealthcareProvider(
    $input: DeleteHealthcareProviderInput!
    $condition: ModelHealthcareProviderConditionInput
  ) {
    deleteHealthcareProvider(input: $input, condition: $condition) {
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
