export const gif = async (
  _: any,
  { term }: { term: string },
  { clients: { giphy } }: Context
) => {
  const { data } = await giphy.translate(term)

  return data.images.original.url;
}