import cn from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Input/Input";

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

        if (registrationForm.password === registration.passwordRepeat) {
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
                            name="email"
                            handleChange={handleChangeLoginForm}
                            value={loginForm.email}
                            type="email"
                            id="#email"
                            required="required"
                        />
                        <Input
                            name="password"
                            handleChange={handleChangeLoginForm}
                            value={loginForm.password}
                            type="password"
                            id="#password"
                            required="required"
                        />
                        <div className={s.buttonContainer}>
                            <button onClick={handleLogin}>
                                <span>Go</span>
                            </button>
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
                        <div className={s.inputContainer}>
                            <input />
                            <label htmlFor="#signup-email">Email</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.inputContainer}>
                            <input
                                name="password"
                                onChange={handleChangeRegistrationForm}
                                value={registrationForm.password}
                                type="password"
                                id="#signup-password"
                                required="required"
                            />
                            <label htmlFor="#signup-password">Password</label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.inputContainer}>
                            <input
                                name="passwordRepeat"
                                onChange={handleChangeRegistrationForm}
                                value={registrationForm.passwordRepeat}
                                type="password"
                                id="#signup-repeat-password"
                                required="required"
                            />
                            <label htmlFor="#signup-repeat-password">
                                Repeat Password
                            </label>
                            <div className={s.bar}></div>
                        </div>
                        <div className={s.buttonContainer}>
                            <button onClick={handleRegistration}>
                                <span>Register</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
