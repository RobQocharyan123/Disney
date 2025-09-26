import React, { useState } from 'react';
import logo from '../assets/images/disney.png';
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiMagnifyingGlass,
} from 'react-icons/hi2';
import HeaderItem from './HeaderItem';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';

function Header() {
  const menu = [
    { id: '1', name: 'HOME', icon: HiHome },
    { id: '2', name: 'SEARCH', icon: HiMagnifyingGlass },
    { id: '3', name: 'WATCH LIST', icon: HiPlus },
    { id: '4', name: 'ORIGINALS', icon: HiStar },
    { id: '5', name: 'MOVIES', icon: HiPlayCircle },
    { id: '6', name: 'SERIES', icon: HiTv },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex  items-center gap-[25px]">
        <img
          src={logo}
          alt={logo}
          className="w-[80px] md:w-[115px] object-cover"
          loading="lazy"
        />
        <div className="hidden md:flex gap-[8px]">
          {menu.map((item) => (
            <HeaderItem key={item?.id} name={item?.name} Icon={item?.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-[40px]">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={''} Icon={item?.icon} />
          )}

          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-3">
                {menu.map(
                  (item, index) =>
                    index > 3 && (
                      <HeaderItem name={item?.name} Icon={item?.icon} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        className="w-[40px] h-[40px] rounded-full"
        src={
          'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        }
      />
    </div>
  );
}

export default Header;
