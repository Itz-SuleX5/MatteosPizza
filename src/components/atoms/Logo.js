import React from "react";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

const Logo =({className = ""}) =>(
    <div className={`bg-red-500 rounded-full w-10 h-10 flex items-center justify-center text-white`}>
            <LocalPizzaIcon/>
          </div>
);

export default Logo;