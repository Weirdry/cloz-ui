import React from "react";
import { jsx, css } from '@emotion/react'

export interface propsType {
    title: string;
}

const Card = (props: propsType) => {
    const {title} = props
    
    return <div css={containerStyle}>{title}</div>;
};

const containerStyle = css`
    display: flex;
    background-color: #ffffff;
    font-size: 1rem;
    color: #999999;
`


// display: "flex",
    // padding: "1.5rem",
    // backgroundColor: "white",
    // fontSize: "1rem"


export default Card;