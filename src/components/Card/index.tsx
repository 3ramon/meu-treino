import "./style.css";

type cardProps = {
    imageFull: string;
    name: string;
    title: string;
};

export function CardLol({ imageFull, name, title }: cardProps) {

    
    return (
        <div className="cardContainerLol">
            <div className="name">{name}</div>
            
            <div className="title">ola</div>
        </div>
    );
}
