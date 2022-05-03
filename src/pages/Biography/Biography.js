import {
    useParams,
    useNavigate,
    Navigate,
    useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Button from "../../components/Button/Button";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { BIO } from "../../constantData/BIO";

import { ReactComponent as Anchor } from "../../assets/link_icon.svg";
import s from "./Biography.module.scss";

const Biography = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    // useEffect(() => {
    //     if (location.hash) {
    //         const elem = document
    //             .querySelectorAll("h2")
    //             .filter((item) => item.innerText.includes());
    //         elem.scrollIntoView({
    //             block: "center",
    //             behavior: "smooth",
    //         });
    //     }
    // });

    const handleGoBack = () => {
        navigate(-1, {
            replace: true,
            state: "123",
        });
    };

    const onAnchor = (e) => {
        const headingElement = e.target.closest("h2");
        const headingName = headingElement.innerText.replace(/\s/g, "_");

        // console.log(e.target.closest("h2").innerText.replace(/\s/g, "_"));
        navigate(`/characters/${id}#${headingName}`, {
            // state: e.target.closest("h2").innerText.replace(/\s/g, "_"),
            // state: headingName,
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
                            className={s.heading}
                            level={Number(bio.type.match(/\d+/)[0])}
                        >
                            {bio.text}
                            {bio.type === "h2" ? (
                                <Anchor
                                    onClick={onAnchor}
                                    className={s.anchorLink}
                                />
                            ) : null}
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
