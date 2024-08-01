# API Documentation

## Summary:

API Provider: [Hacker API](https://github.com/HackerNews/API?tab=readme-ov-file#new-top-and-best-stories)

## Endpoints Used:

- topstories.json
- beststories.json
- newstories.json
- item/{id}.json

  Example:

  ```bash
  # get new stories from Hacker
  export const getTopStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.newStories);

  return storyHandler(res.data, p);
  };
  ```
