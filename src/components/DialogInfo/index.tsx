import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string;
    onDialogClose: Function;
}

export default function DialogInfo({ message, onDialogClose }: Props) {
    return (

        <div className="dsc-dialog-background">
            <div className="dsc-dialog-box">
                <h2>{message}</h2>
                <ButtonPrimary name="Ok" />
            </div>
        </div>
    )
}