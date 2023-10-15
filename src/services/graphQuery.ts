import { gql } from "graphql-request";
export const GET_REP = gql`
  query SearchRepo(
    $name: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    search(
      query: $name
      type: REPOSITORY
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      edges {
        node {
          ... on Repository {
            name
            description
            url
            licenseInfo {
              name
            }
            stargazers {
              totalCount
            }
            languages(first: 10) {
              nodes {
                name
              }
            }
            forks {
              totalCount
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  committedDate
                }
              }
            }
          }
        }
        cursor
      }
      repositoryCount
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`;
