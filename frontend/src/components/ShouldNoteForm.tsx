interface Props {
    change: (arg0: boolean) => void,
    setActive: (arg0: boolean) => void,
}

function ShouldNoteForm({change, setActive}: Props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
            <h3>Оставить примечание для старшего модератора?</h3>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <button onClick={() => change(true)}>Да</button>
                <button onClick={() => {
                    change(true);
                    setActive(false);
                }}>Нет</button>
            </div>
        </div>
    );
}

export default ShouldNoteForm;