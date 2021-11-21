import { ReactElement } from "react";
import StyleVariables from "../../../styles/variables.module";

export const Title: React.FC = (): ReactElement => {
    return (<h1 {...{ style }} >Schoolyard</h1>);
}

const style: React.CSSProperties = {
    fontSize: 70,
    fontFamily: StyleVariables.titleFont,
    color: StyleVariables.titleColor
}