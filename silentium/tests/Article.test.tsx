import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';
import {useQueryGetStoryById} from '../src/apis/HttpServices';
import Article from '../src/components/Article';
import {TestID} from '../src/constants/Test';
import {Story} from '../src/types/Story';
import {getDate} from '../src/utils';

jest.mock('../src/apis/HttpServices', () => ({
  useQueryGetStoryById: jest.fn(),
}));

jest.mock('../src/components/Comments', () => 'Comments');
jest.mock('../src/components/Spinner', () => 'Spinner');

const mockStory: {data: Story} = {
  data: {
    title: 'Mock Title',
    score: 123,
    time: 1672531199000,
    url: 'https://example.com',
    by: 'Mock Author',
    kids: [1, 2],
    id: 1,
    descendants: 0,
    type: 'story',
  },
};

describe('Article Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Spinner while fetching article', () => {
    (useQueryGetStoryById as jest.Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });

    render(<Article testID={TestID.article} storyId={1} back={() => {}} />);

    expect(screen.getByTestId('Spinner')).toBeTruthy();
  });

  it('renders article details correctly', () => {
    (useQueryGetStoryById as jest.Mock).mockReturnValue({
      data: mockStory,
      isFetching: false,
    });

    render(<Article testID={TestID.article} storyId={1} back={() => {}} />);

    expect(screen.getByText(`Title: ${mockStory.data.title}`)).toBeTruthy();
    expect(screen.getByText(`Score: ${mockStory.data.score}`)).toBeTruthy();
    expect(
      screen.getByText(`Time: ${getDate(mockStory.data.time)}`),
    ).toBeTruthy();
    expect(screen.getByText(`URL: ${mockStory.data.url}`)).toBeTruthy();
    expect(screen.getByText(`Author: ${mockStory.data.by}`)).toBeTruthy();
    expect(screen.getByText('Comments:')).toBeTruthy();
    expect(screen.getByTestId('Comments')).toBeTruthy();
  });

  it('calls back function when back button is pressed', () => {
    const mockBack = jest.fn();
    (useQueryGetStoryById as jest.Mock).mockReturnValue({
      data: mockStory,
      isFetching: false,
    });

    render(<Article testID={TestID.article} storyId={1} back={mockBack} />);

    fireEvent.press(screen.getByText('← Back'));
    expect(mockBack).toHaveBeenCalled();
  });
});
