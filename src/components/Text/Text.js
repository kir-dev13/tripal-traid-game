import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import s from "./Text.module.css";

const Text = ({ el, className, strong, italic, disabled, children }) => {
    console.log(el, className, strong, italic, disabled, children);
    return React.createElement(
        el,
        {
            className: cn(s.root, className, {
                [s.strong]: strong,
                [s.italic]: italic,
                [s.disabled]: disabled,
            }),
        },
        children
    );
};

Text.defaultProps = {
    el: "span",
    strong: false,
    italic: false,
    disabled: false,
};

Text.propTypes = {
    el: PropTypes.oneOf("div", "p", "span").isRequired,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export default Text;
