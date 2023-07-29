/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHealthcareProvider = /* GraphQL */ `
  query GetHealthcareProvider($id: ID!) {
    getHealthcareProvider(id: $id) {
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
export const listHealthcareProviders = /* GraphQL */ `
  query ListHealthcareProviders(
    $filter: ModelHealthcareProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHealthcareProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
