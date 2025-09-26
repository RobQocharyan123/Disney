import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import GlobalApi from '../Services/GlobalApi';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const screenWidth = window.innerWidth;
  const elementRef = useRef();

  useEffect(() => {
    const handleGetTrendingMovies = async () => {
      try {
        const res = await GlobalApi.getTrendingVideos();
        setMovieList(res?.data?.results || []);
        console.log(res?.data?.results);
      } catch (err) {
        console.error(err);
      }
    };

    handleGetTrendingMovies();
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <>
      <div>
        <HiChevronLeft
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full px-16 py-4 no-scrollbar scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={item?.id || index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </>
  );
}

export default Slider;
