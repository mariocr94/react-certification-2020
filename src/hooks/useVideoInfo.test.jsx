import { renderHook } from '@testing-library/react-hooks';
import useVideoInfo from './useVideoInfo';

describe('testing useVideoInfo ', () => {
  it('should get new values', () => {
    const { result } = renderHook(() => useVideoInfo(''));
    console.log(result.current);
  });
});
