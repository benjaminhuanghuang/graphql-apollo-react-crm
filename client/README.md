## Client 
- setup
```
  create-react-app .

  npm i -S react-router react-router-dom
```
- setup apollo

  https://www.apollographql.com/docs/react/essentials/get-started.html
```
  npm i -S apollo-boost react-apollo graphql graphql-tag
```
  - apollo-boost: Package containing everything you need to set up Apollo Client
  - react-apollo: View layer integration for React
  - graphql: Also parses your GraphQL queries


## Dev tools
- Apollo Client Developer Tools
- React Developer Tools



## Bind Apollo with component
```
import { gql, graphql } from 'react-apollo';

const Contacts = ({ data: { loading, error, contacts }}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <ul>
      { contacts.map( item => 
      (<li key={item.id}>{item.firstName} {item.lastName}</li>)
      )}
    </ul>
  );
}

export const contactsListQuery = gql`
  query ContactsQuery {
    contacts {
      id
      firstName
      lastName
    }
  }
`;

export default graphql(contactsListQuery)(Contacts);
```