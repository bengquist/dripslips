export default (error: string) => {
  return error.replace("GraphQL error: ", "");
};
