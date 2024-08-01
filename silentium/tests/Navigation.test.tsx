import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Navigator from '../src/components/Navigator';
import {bestStory, newStory, topStory} from '../src/constants/Page';

describe('Navigator Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sets value to newStory when "New Stories" button is pressed', () => {
    const {getByText} = render(<Navigator value="" setValue={mockSetValue} />);

    fireEvent.press(getByText('New Stories'));

    expect(mockSetValue).toHaveBeenCalledWith(newStory);
  });

  it('sets value to bestStory when "Best Stories" button is pressed', () => {
    const {getByText} = render(<Navigator value="" setValue={mockSetValue} />);

    fireEvent.press(getByText('Best Stories'));

    expect(mockSetValue).toHaveBeenCalledWith(bestStory);
  });

  it('sets value to topStory when "Top Stories" button is pressed', () => {
    const {getByText} = render(<Navigator value="" setValue={mockSetValue} />);

    fireEvent.press(getByText('Top Stories'));

    expect(mockSetValue).toHaveBeenCalledWith(topStory);
  });
});
