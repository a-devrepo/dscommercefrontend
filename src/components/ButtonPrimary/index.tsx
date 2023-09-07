import './styles.css';

type Props = {
    name: string;
}

export default function ButtonPrimary({ name: text }: Props) {
    return (<div className="dsc-btn dsc-btn-blue">
        {text}
    </div>);
}