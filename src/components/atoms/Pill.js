import React from "react";
import { getColorStatus } from "../../utils/colorUtils";

const Pill = ({name}) => {

    

    const [bgClass, textClass] = getColorStatus(name)

    return (

        <button className={`px-2 rounded-full ${bgClass} ${textClass}`}>
            {name}
        </button>

    );
}

export default Pill