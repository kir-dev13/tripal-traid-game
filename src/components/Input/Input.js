import cn from "classnames";
import s from "./Input.module.scss";

const Input = ({ className, name, ...inputProps }) => {
    return (
        <div className={cn(s.root, className)}>
            <input name={name} {...inputProps} />
            <label htmlFor={name}>
                {name[0].toUpperCase() + name.slice(1)}
            </label>
            <div className={s.bar}></div>
        </div>
    );
};

export default Input;
