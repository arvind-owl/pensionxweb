import React, { useState, useEffect } from "react";
import Link from 'next/link';
export default function CustomEvent (props) {
    return (
        <div>
            <Link href={props && props.linkhref} ><a>{props.title}</a></Link>
        </div>
    );
}