import Heading from "../../components/Heading";
import s from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={s.root}>
            <Heading>Not found 404</Heading>
        </div>
    );
};

export default NotFound;
