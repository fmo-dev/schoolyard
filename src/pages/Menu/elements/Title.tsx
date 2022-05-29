import { ReactElement } from "react";
import { Link } from "react-router-dom";
import StyleVariables from "../../../styles/variables.module";

export const Title: React.FC = (): ReactElement => {
    return (<Link to="/"><h1  {...{ style }} >Schoolyard</h1></Link>);
}

const style: React.CSSProperties = {
    fontSize: 70,
    fontFamily: StyleVariables.titleFont,
    color: StyleVariables.titleColor,
    margin: 0,
    textDecoration: "none"
}