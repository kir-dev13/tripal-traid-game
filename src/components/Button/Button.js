import cn from "classnames";
import PropTypes from "prop-types";

import s from "./Button.module.scss";

const Button = ({ className, color, children, onClick }) => {
    const handleClick = (e) => {
        onClick && onClick(e);
    };

    return (
        <button
            onClick={handleClick}
            className={cn(s.root, className, s[color])}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "default",
};

Button.prototypes = {
    color: PropTypes.oneOf(["default", "black"]),
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Button;
