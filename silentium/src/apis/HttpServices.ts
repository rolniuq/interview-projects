import {useQuery} from '@tanstack/react-query';
import {Comment} from '../types/Comment';
import {Pagination} from '../types/Pagination';
import {Story} from '../types/Story';
import {getPaginatedElements} from '../utils';
import {
  Best_Stories_Key,
  Comments_Key,
  End_Points,
  New_Stories_Key,
  Story_Key,
  Top_Stories_Key,
} from './Constants';
import {httpClient} from './HttpClient';

const storyHandler = async (
  listIds: number[],
  p: Pagination,
): Promise<Story[]> => {
  const ids: number[] = getPaginatedElements(listIds, p.page, p.limit);
  const stories = await Promise.all(ids.map(id => getStoryById(id)));

  return stories.map(story => story.data);
};

export const getTopStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.topStories);

  return storyHandler(res.data, p);
};

export const getBestStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.bestStories);

  return storyHandler(res.data, p);
};

export const getNewStories = async (p: Pagination): Promise<Story[]> => {
  const res = await httpClient.get(End_Points.newStories);

  return storyHandler(res.data, p);
};

export const getStoryById = async (id: number) => {
  return httpClient.get(`item/${id}.json`);
};

const getCommentById = async (id: number) => {
  return httpClient.get(`item/${id}.json`);
};

export const getComments = async (ids: number[]): Promise<Comment[]> => {
  const comments = await Promise.all(ids.map(id => getCommentById(id)));

  return comments.map(comment => comment.data);
};

export const useQueryGetNewStories = (p: Pagination) => {
  return useQuery({
    queryKey: [New_Stories_Key],
    queryFn: () => getNewStories(p),
  });
};

export const useQueryGetTopStories = (p: Pagination) => {
  return useQuery({
    queryKey: [Top_Stories_Key],
    queryFn: () => getTopStories(p),
  });
};

export const useQueryGetBestStories = (p: Pagination) => {
  return useQuery({
    queryKey: [Best_Stories_Key],
    queryFn: () => getBestStories(p),
  });
};

export const useQueryGetStoryById = (id: number) => {
  return useQuery({
    queryKey: [Story_Key],
    queryFn: () => getStoryById(id),
  });
};

export const useQueryGetCommentByIds = (ids: number[]) => {
  return useQuery({
    queryKey: [Comments_Key],
    queryFn: () => getComments(ids),
  });
};
