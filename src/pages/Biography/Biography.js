import { BIO } from "../../bio/bio";

import Button from "../../components/Button/Button";

import s from "./Biography.module.scss";

const Biography = ({ id, onBack }) => {
    const handleBackClick = () => {
        onBack();
    };

    return (
        <div className={s.root}>
            <Button onClick={handleBackClick} black>
                Go Back!
            </Button>
        </div>
    );
};

export default Biography;
