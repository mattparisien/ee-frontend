import React, {useEffect, useState} from "react";


function ConditionalWrapper({ condition, wrapper, children, timeout }) {



	return condition ? wrapper(children) : children;
}

export default ConditionalWrapper;
