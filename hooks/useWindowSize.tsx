import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Gọi handleResize ngay khi hook được gọi
    handleResize();

    // Lắng nghe sự kiện resize để cập nhật kích thước
    window.addEventListener('resize', handleResize);

    // Cleanup event khi component bị unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
