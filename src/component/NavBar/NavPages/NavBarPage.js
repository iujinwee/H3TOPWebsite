import React from "react";

const NavBarPage = (props) => {
  return (
    <li class="flex-auto">
      <a class='text-center block border
                hover:bg-purple-800
                border-purple-400 rounded h-18 w-28 px-3 py-2
                bg-purple-600  text-white'
              > {/* include href for referencing*/}
                {props.name}
              </a>
    </li>
  );
};

export default NavBarPage;
