interface Props {
    value: string,
    handler: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

function ReasonForm({ handler, value }: Props) {
    return (
        <div>
            <h3>Введите причину отклонения/примечание</h3>
            <p>Нажмите 'Enter' для продолжения</p>
            <textarea className='textarea' value={value} onChange={handler}/>
        </div>
    );
}

export default ReasonForm;