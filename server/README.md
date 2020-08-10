# -- Refactored to a lib for gen use --
https://github.com/jnpco98/GqlServer.git

# Ukiyonovels

### TODO
---
[x] User and token context hooks

[x] Implement costs

[x] Implement complexity for each field / connection / query

[ ] Implement hourly rates

[x] Clean up with codemaid

[x] Pageinfo fix

[x] Require first or last && before is not used with after

[x] Cursor decoded guard

[x] Remove graphql-relay

[x] Add types for cursors and stuff

[x] Better types

[x] Error classes

[x] Fix build

[x] Create export types

[ ] Dataloader

[ ] CICD

[ ] Testing

[x] JSDOCS

[ ] Logging service

[ ] Deployment

[x] Update Base{Entity}{Action}Resolver to be a function that could accept a context hook

[ ] Refactor abstract resolvers to have an apply function instead of a context hook.

[ ] Merge the rest of the resolvers as one class 
      ex: all other resolvers other than the ones that inherit from the base resolvers will all be in the ${Entity}Resolver class

---
### Prettier config
```
prettier --print-width 100 --semi true --single-quote --trailing-comma none --write **/*.ts
```
