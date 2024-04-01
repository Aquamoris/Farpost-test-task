import styles from './OperationsMenu.module.scss';

type MenuItemType = {
    command: string;
    color?: string;
    hotKey: string;
}

function OperationsMenu() {
    const data: MenuItemType[] = [
        {command: 'Одобрить', color: '#88BD35', hotKey: 'Пробел'},
        {command: 'Отклонить', color: '#F7882E', hotKey: 'Esc'},
        {command: 'Эскалация', color: '#1764CC', hotKey: 'Shift + Enter'},
        {command: 'Сохранить', hotKey: 'F7'},
    ]

    return (
        <div className={styles.wrapper}>
            {
                data.map(e => (
                    <div className={styles.menuItem} key={e.command}>
                        <div>
                            {e.command}
                        </div>
                        <div className={styles.menuItemEllipse} style={{backgroundColor: `${e.color}`}}></div>
                        <div className={styles.menuItemHotKey}>
                            {e.hotKey}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default OperationsMenu;