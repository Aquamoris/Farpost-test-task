import styles from './ReasonForm.module.scss';

interface Props {
    value: string,
    handler: (e: React.FormEvent<HTMLTextAreaElement>) => void,
    setActive: (arg0: boolean) => void,
}

function ReasonForm({ handler, value, setActive }: Props) {
    return (
        <div className={styles.form}>
            <h3>Введите причину отклонения/примечание</h3>
            <p>Нажмите 'Enter' для продолжения</p>
            <textarea className='textarea' value={value} onChange={handler}/>
            <button className='button' onClick={() => setActive(false)}>Отправить</button>
        </div>
    );
}

export default ReasonForm;