import ReasonForm from "./ReasonForm.tsx";
import ShouldNoteForm from "./ShouldNoteForm.tsx";
import {useEffect, useState} from "react";

interface Props {
    value: string,
    handler: (e: React.FormEvent<HTMLTextAreaElement>) => void,
    setActive: (arg0: boolean) => void,
    operation: 'decline' | 'escalate' | null,
}

function NoteChose({ operation, handler, value, setActive }: Props) {
    const [changeForm, setChangeForm] = useState<boolean>(false);

    useEffect(() => {
        setChangeForm(operation === 'decline');
    }, [operation]);

    return (
        <>
            {
                changeForm
                    ? <ReasonForm value={value} handler={handler} setActive={setActive}/>
                    : <ShouldNoteForm change={setChangeForm} setActive={setActive}/>
            }
        </>


    );
}

export default NoteChose;