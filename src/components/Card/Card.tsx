import React from "react";

export interface propsType {
    title: string;
}

const Card = (props: propsType) => {
    const {title} = props
    
    return <div style={containerStyle}>{title}</div>
};

const containerStyle = {
    display: "flex",
    padding: "1.5rem",
    backgroundColor: "white",
    fontSize: "1rem"
}

export default Card;