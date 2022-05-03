import { useParams, useNavigate, Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { BIO } from "../../constantData/BIO";
import s from "./Biography.module.scss";

const Biography = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1, {
            replace: true,
            state: "123",
        });
    };

    if (!BIO[id]) {
        return <Navigate to="/characters" replace />;
    }

    return (
        <div className={s.root}>
            <div className={s.btnWrap}>
                <Button className={s.btn} color="black" onClick={handleGoBack}>
                    GoBack
                </Button>
            </div>
            {BIO[id].map((bio, index) => {
                if (bio.type.match(/h\d+/)) {
                    return (
                        <Heading
                            key={index}
                            className={s.text}
                            level={Number(bio.type.match(/\d+/)[0])}
                        >
                            {bio.text}
                        </Heading>
                    );
                } else if (bio.type === "paragraph") {
                    return (
                        <Text key={index} className={s.text}>
                            {bio.text}
                        </Text>
                    );
                } else if (bio.type === "img") {
                    return (
                        <div key={index} className={s.imgWrap}>
                            <img src={bio.src} alt="biography" />
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Biography;
