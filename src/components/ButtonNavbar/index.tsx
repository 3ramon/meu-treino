import "./style.css";

type ButtonProps = {
    name: String;
    onClick: () => void;
};

export function ButtonNavBar({ name, onClick }: ButtonProps) {

    return (
        <>
            <button
                    className="nav__btn"
                    onClick={() => onClick()}
                >
                    {name}
                </button>
        </>
    );
}