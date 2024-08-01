import {render} from '@testing-library/react-native';
import React from 'react';
import {useQueryGetCommentByIds} from '../src/apis/HttpServices';
import Comments from '../src/components/Comments';

jest.mock('../src/apis/HttpServices', () => ({
  useQueryGetCommentByIds: jest.fn(),
}));

describe('Comments Component', () => {
  it('renders comments correctly', () => {
    const commentsData = [
      {id: 1, by: 'author1', text: 'comment1', time: 1610000000},
      {id: 2, by: 'author2', text: 'comment2', time: 1620000000},
    ];

    (useQueryGetCommentByIds as jest.Mock).mockReturnValue({
      data: commentsData,
      isFetching: false,
    });

    const {getByText} = render(
      <Comments testID="Comments" commentIds={[1, 2, 3]} />,
    );

    expect(getByText('Author: author1')).toBeTruthy();
    expect(getByText('comment1')).toBeTruthy();
    expect(getByText('Created At: 07/01/2021')).toBeTruthy();

    expect(getByText('Author: author2')).toBeTruthy();
    expect(getByText('comment2')).toBeTruthy();
    expect(getByText('Created At: 03/05/2021')).toBeTruthy();
  });
});
