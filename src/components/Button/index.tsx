import "./style.css";

type ButtonProps = {
    name: String;
    onClick: () => void;
};

export function Button({ name, onClick }: ButtonProps) {

    return (
        <>
            <button className="btnLol" onClick={onClick}>
                {name}
            </button>
        </>
    );
}
