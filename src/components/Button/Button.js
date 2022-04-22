import cn from "classnames";

import s from "./Button.module.scss";

const Button = ({ className, black, children }) => {
    return (
        <div className={s.root}>
            <button
                className={cn(s.button, className, {
                    [s.colorBlack]: black,
                })}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
