exports.githubResponseToJson = (stringGithubResponse) => {
  const arrayGithubResponse = stringGithubResponse.split("&");

  accessToken = arrayGithubResponse[0].split("=")[1];
  tokenType = arrayGithubResponse[2].split("=")[1];

  const githubResponse = {
    accessToken,
    tokenType,
  };

  return githubResponse;
};
