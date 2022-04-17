import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import s from "./Heading.module.scss";

const Heading = ({
    level = 1,
    className,
    black = false,
    children,
    backLine,
}) => {
    const el = `h${level}`;
    return React.createElement(
        el,
        {
            className: cn(s.root, className, s[`level${level}`], {
                [s.colorBlack]: black,
                [s.backline]: backLine,
            }),
        },
        children
    );
};

Heading.defaultProps = {
    level: 1,
    black: false,
};

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    className: PropTypes.string,
    black: PropTypes.bool,
    children: PropTypes.node,
    backLine: PropTypes.bool,
};

export default Heading;
