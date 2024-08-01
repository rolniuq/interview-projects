import {render} from '@testing-library/react-native';
import React from 'react';
import {TestID} from '../src/constants/Test';
import StoryBody from '../src/pages/Body';
import {Story as IStory} from '../src/types/Story';

jest.mock('../src/components/Navigator', () => 'Navigator');
jest.mock('../src/components/Article', () => 'Article');
jest.mock('../src/components/Spinner', () => 'Spinner');
jest.mock('../src/components/Story', () => 'Story');

describe('StoryBody Component', () => {
  const mockSetSelectedStoryId = jest.fn();
  const mockSetPage = jest.fn();
  const mockSetValue = jest.fn();

  const stories: IStory[] = [
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
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Navigator and stories correctly', () => {
    const {getByTestId} = render(
      <StoryBody
        testID={TestID.body}
        selectedStoryId={0}
        hasMore={true}
        isLoading={false}
        value="newStory"
        stories={stories}
        setPage={mockSetPage}
        setValue={mockSetValue}
        setSelectedStoryId={mockSetSelectedStoryId}
      />,
    );

    expect(getByTestId('Navigator')).toBeTruthy();
  });

  it('loads more stories on end reached', () => {
    const {getByTestId} = render(
      <StoryBody
        testID={TestID.body}
        selectedStoryId={0}
        hasMore={true}
        isLoading={false}
        value="newStory"
        stories={stories}
        setPage={mockSetPage}
        setValue={mockSetValue}
        setSelectedStoryId={mockSetSelectedStoryId}
      />,
    );

    expect(getByTestId('FlatList')).toBeTruthy();
  });

  it('renders Article component when selectedStoryId is not 0', () => {
    const {getByTestId} = render(
      <StoryBody
        testID={TestID.body}
        selectedStoryId={1}
        hasMore={true}
        isLoading={false}
        value="newStory"
        stories={stories}
        setPage={mockSetPage}
        setValue={mockSetValue}
        setSelectedStoryId={mockSetSelectedStoryId}
      />,
    );

    expect(getByTestId('Article')).toBeTruthy();
  });

  it('renders Spinner component when isLoading is true and stories length is 0', () => {
    const {getByTestId} = render(
      <StoryBody
        testID={TestID.body}
        selectedStoryId={0}
        hasMore={true}
        isLoading={true}
        value="newStory"
        stories={[]}
        setPage={mockSetPage}
        setValue={mockSetValue}
        setSelectedStoryId={mockSetSelectedStoryId}
      />,
    );

    expect(getByTestId('Spinner')).toBeTruthy();
  });
});
