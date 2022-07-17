
export const queryRepositories = `
  query user($login: String!) {
    user(login: $login) {
      avatarUrl
      repositories(first: 50, isFork: false) {
        nodes {
          name
          description
          createdAt
          isPrivate
          url
        }
      }
    }
  }
`;