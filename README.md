# Пошуковик волонтера - UI

Based on algolia react-instantsearch e-commerce demo

---

## Links

- InstantSearch [URL routing](https://www.algolia.com/doc/guides/building-search-ui/going-further/routing-urls/react/).
- Multiple InstantSearch widgets: [refinementList](https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/), [RangeSlider](https://www.algolia.com/doc/api-reference/widgets/range-slider/react/), [toggleRefinement](https://www.algolia.com/doc/api-reference/widgets/toggle-refinement/react/), and more. 
- [Access the demo](https://codesandbox.io/s/github/algolia/doc-code-samples/tree/master/React%20InstantSearch/e-commerce)

## How to run

You may use both `npm` or `yarn`

First of all, edit `.env` file

To run local typesense:

```sh
yarn typesenseServer
```

To populate sample index:

```sh
yarn populateTypesenseIndex
```

To start:

```sh
yarn
yarn start
```
