## Reference 
- [Learning Apollo](https://www.linkedin.com/learning/learning-apollo/)
- https://medium.com/@jeffrey.allen.lewis/graphql-migrating-from-apollo-server-express-1-0-to-2-0-be80f5c61bee

## Apollo





## Query
```
  {
    __schema{
      types{
        name
      }
    }
  }
```
```
  {
    contacts
    {
      firstName,
      lastName
    }
  }
```
- add contact
```
  mutation{
    addContact(firstName:"ben",lastName:"huang"){
      id
      firstName
      lastName
    }
  }
```