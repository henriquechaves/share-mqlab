## A GraphQL example.

### Setup

```
npm install
npm start
```


mutation {
  changeName(name: "Henrique Chaves") {
    active
    name
    email
    years
  }
}

mutation {
  passYear {
    name,
      years
  }
}
