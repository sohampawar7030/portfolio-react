export const createContact = /* GraphQL */ `
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
      fullName
      email
      mobile
      subject
      message
    }
  }
`;
