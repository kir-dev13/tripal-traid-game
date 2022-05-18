import cn from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Input/";
import Button from "../../components/Button/";

import logoPng from "../../assets/logo.png";
import { ReactComponent as Toggle } from "../../assets/toggle.svg";
import s from "./Login.module.scss";

const Login = () => {
    const [registration, setRegistration] = useState(false);

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [registrationForm, setRegistrationForm] = useState({
        email: "",
        password: "",
        passwordRepeat: "",
    });

    const handleChangeLoginForm = (e) => {
        setLoginForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleChangeRegistrationForm = (e) => {
        setRegistrationForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginForm);
        setLoginForm({
            email: "",
            password: "",
        });
    };
    const handleRegistration = (e) => {
        e.preventDefault();

        if (registrationForm.password === registrationForm.passwordRepeat) {
            console.log(registrationForm);
            setRegistrationForm({
                email: "",
                password: "",
                passwordRepeat: "",
            });
        } else {
            console.log("пароли не совпадают");
        }
    };

    const handleToggleRegistration = () => {
        setRegistration((prevState) => !prevState);
    };

    return (
        <div className={s.root}>
            <Link to="/">
                <div className={s.headerLogo}>
                    <img src={logoPng} alt="Logo"></img>
                </div>
            </Link>
            <div
                className={cn(s.container, {
                    [s.active]: registration,
                })}
            >
                <div className={s.card}></div>
                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <form>
                        <Input
                            className={s.inputContainer}
                            name="email"
                            onChange={handleChangeLoginForm}
                            value={loginForm.email}
                            type="email"
                            id="#email"
                            required="required"
                        />
                        <Input
                            className={s.inputContainer}
                            name="password"
                            onChange={handleChangeLoginForm}
                            value={loginForm.password}
                            type="password"
                            id="#password"
                            required="required"
                        />
                        <div className={s.buttonContainer}>
                            <Button onClick={handleLogin}>
                                <span>Go</span>
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={cn(s.card, s.alt)}>
                    <div
                        onClick={handleToggleRegistration}
                        className={s.toggle}
                    >
                        {registration ? null : <Toggle />}
                    </div>
                    <h1 className={s.title}>
                        Register
                        <div
                            onClick={handleToggleRegistration}
                            className={s.close}
                        ></div>
                    </h1>
                    <form>
                        <Input
                            className={s.inputContainer}
                            name="email"
                            onChange={handleChangeRegistrationForm}
                            value={registrationForm.email}
                            type="email"
                            id="#signup-email"
                            required="required"
                        />
                        <Input
                            className={s.inputContainer}
                            name="password"
                            onChange={handleChangeRegistrationForm}
                            value={registrationForm.password}
                            type="password"
                            id="#signup-password"
                            required="required"
                        />
                        <Input
                            className={s.inputContainer}
                            name="passwordRepeat"
                            onChange={handleChangeRegistrationForm}
                            value={registrationForm.passwordRepeat}
                            type="password"
                            id="#signup-repeat-password"
                            required="required"
                        />
                        <div className={s.buttonContainer}>
                            <Button onClick={handleRegistration}>
                                <span>Register</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
