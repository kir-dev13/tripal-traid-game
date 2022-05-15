import s from "./Input.module.scss";

const Input = ({ name, handleChange, value, type, id, required }) => {
    return (
        <div className={s.root}>
            <input
                name={name}
                onChange={handleChange}
                value={value}
                type={type}
                id={id}
                required={required}
                // {...(required ? (required = "required") : null)}
            />
            <label htmlFor={id}>{name[0].toUpperCase() + name.slice(1)}</label>
            <div className={s.bar}></div>
        </div>
    );
};

export default Input;
