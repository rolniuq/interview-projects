import {render} from '@testing-library/react-native';
import React from 'react';
import {usePaginatedStories} from '../src/hooks/Paginated';
import StoryBody from '../src/pages/Body';
import NewStories from '../src/pages/NewStories';

jest.mock('../src/hooks/Paginated');
jest.mock('../src/pages/Body');

describe('NewStories Component', () => {
  const mockSetPage = jest.fn();
  const mockSetValue = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (usePaginatedStories as jest.Mock).mockReturnValue({
      stories: [
        {
          id: 1,
          title: 'Story 1',
          by: 'Author 1',
          time: 1610000000,
          score: 100,
          url: '',
          kids: [],
          descendants: 0,
          type: 'story',
        },
        {
          id: 2,
          title: 'Story 2',
          by: 'Author 2',
          time: 1620000000,
          score: 200,
          url: '',
          kids: [],
          descendants: 0,
          type: 'story',
        },
      ],
      isLoading: false,
      hasMore: true,
      setPage: mockSetPage,
    });
  });

  it('passes the correct props to StoryBody', () => {
    render(<NewStories value="newStory" setValue={mockSetValue} />);

    expect(StoryBody).toHaveBeenCalledWith(
      expect.objectContaining({
        selectedStoryId: 0,
        setSelectedStoryId: expect.any(Function),
        hasMore: true,
        isLoading: false,
        setPage: mockSetPage,
        value: 'newStory',
        setValue: mockSetValue,
        stories: [
          {
            id: 1,
            title: 'Story 1',
            by: 'Author 1',
            time: 1610000000,
            score: 100,
            url: '',
            kids: [],
            descendants: 0,
            type: 'story',
          },
          {
            id: 2,
            title: 'Story 2',
            by: 'Author 2',
            time: 1620000000,
            score: 200,
            url: '',
            kids: [],
            descendants: 0,
            type: 'story',
          },
        ],
      }),
      {},
    );
  });
});
