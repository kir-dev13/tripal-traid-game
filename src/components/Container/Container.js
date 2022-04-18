import cn from "classnames";
import s from "./Container.module.scss";

const Container = ({ children, className }) => {
    return <div className={cn(s.root, className)}>{children}</div>;
};

export default Container;
