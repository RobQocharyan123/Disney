import React from 'react';

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-[10px] text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon className="w-[15px] h-[15px]" />

      <h2 className=" m-0 p-0 text-[15px] font-semibold ">{name}</h2>
    </div>
  );
}

export default HeaderItem;
