import "./style.css";

type ButtonProps = {
    name: String;
    onClick: () => void;
    disabledButton: boolean;
};

export function ButtonNavBar({ name, onClick, disabledButton }: ButtonProps) {

    return (
        <>
            <button
                className="nav__btn"
                onClick={() => onClick()}
                disabled={disabledButton}
            >
                {name}
            </button>
        </>
    );
}
