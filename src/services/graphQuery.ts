import { gql } from "graphql-request";

export const GET_REP = gql`
  query SearchRepo($name: String!, $first: Int = 100) {
    search(query: $name, type: REPOSITORY, first: $first) {
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
      }
    }
  }
`;
