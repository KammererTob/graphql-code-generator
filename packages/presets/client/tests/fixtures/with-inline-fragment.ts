/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-ignore
const Query = gql(/* GraphQL */ `
  query Foo {
    foo {
      id
      ...Foo
    }
  }
`);

//@ts-ignore
const NestedFragmentQuery = gql(/* GraphQL */ `
  query NestedFoo {
    foo {
      ...NestedFoo
    }
  }
`);

//@ts-ignore
const NestedInlineFragmentQuery = gql(/* GraphQL */ `
  query NestedInlineFoo {
    foo {
      ...FooBar
    }
  }
`);

//@ts-ignore
const FooFragment = gql(/* GraphQL */ `
  fragment Foo on Foo @inline {
    value
  }
`);

//@ts-ignore
const FooBarFragment = gql(/* GraphQL */ `
  fragment FooBar on Foo @inline {
    value
    ...Bar
  }
`);

//@ts-ignore
const BarFragment = gql(/* GraphQL */ `
  fragment Bar on Foo @inline {
    id
  }
`);

//@ts-ignore
const NestedFragment = gql(/* GraphQL */ `
  fragment NestedFoo on Foo {
    id
    ...FooBar
  }
`);
