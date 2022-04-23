import cn from "classnames";

import s from "./Button.module.scss";

const Button = ({ className, black, children, onClick }) => {
    return (
        <div className={s.root}>
            <button
                onClick={onClick}
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
