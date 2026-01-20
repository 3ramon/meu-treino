import "./style.css";

type ButtonProps = {
    name: String;
    onClick: () => void;
};

export function Button({ name, onClick }: ButtonProps) {

    return (
        <>
            <button className="btn__lol" onClick={onClick}>
                {name}
            </button>
        </>
    );
}
