import {render} from '@testing-library/react-native';
import React from 'react';
import Story from '../src/components/Story';
import {Story as IStory} from '../src/types/Story';

describe('Story', () => {
  const story: IStory = {
    by: 'Test Author',
    descendants: 71,
    id: 8863,
    kids: [8952, 9224, 8917],
    score: 111,
    time: 1175714200,
    title: 'Test Story',
    type: 'story',
    url: 'http://www.getdropbox.com/u/2/screencast.html',
  };

  it('renders the story title', () => {
    const {getByText} = render(<Story story={story} />);
    expect(getByText('Title: Test Story')).toBeTruthy();
  });

  it('renders the story author', () => {
    const {getByText} = render(<Story story={story} />);
    expect(getByText('Author: Test Author')).toBeTruthy();
  });
});
