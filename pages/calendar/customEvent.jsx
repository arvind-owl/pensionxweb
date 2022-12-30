import React, { useState, useEffect } from "react";
import Link from 'next/link';
 const CustomEvent = (props) => {
    return (
        <div>
            <Link href={props && props.linkhref} ><a>{props.title}</a></Link>
        </div>
    );
}
export default CustomEvent;