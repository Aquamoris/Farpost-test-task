import styles from './Bulletin.module.scss';
import {Link} from "react-router-dom";
import type {BulletinType} from "../utils/types/Bulletin.type.ts";
import classNames from 'classnames';

const Bulletin = (
    {
        id,
        // publishDate,
        publishDateString,
        ownerId,
        ownerLogin,
        bulletinSubject,
        bulletinText,
        bulletinImages,
        currentBulletin,
        index
    } : BulletinType
) => {
    return (
        <div className={classNames(styles.bulletin, {
            [styles.activeBulletin]: currentBulletin === index
        })}>
            <section className={styles.bulletinHeader}>
                <div className={styles.bulletinHeaderBlock}>
                    <Link to={`/${id}`}>
                        <div>
                            {id}
                        </div>
                    </Link>
                    <div>
                        &mdash; {publishDateString}
                    </div>
                </div>
                <div className={styles.bulletinHeaderBlock}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.719 9.12656L6.346 10.4749L6.345 10.474C6.045 10.7227 0 10.9178 0 15.4343C0 16.0588 2.5 17 8.5 17C14.5 17 17 16.0632 17 15.4343C17 10.9169 10.475 10.5867 10.372 10.5017L9.912 9.12568C9.912 9.12568 11.062 8.85098 11.498 7.44003C11.572 7.19846 11.644 6.92386 11.694 6.62593C12.11 6.56598 12.434 6.08282 12.434 5.48516C12.434 4.97697 12.197 4.5511 11.867 4.399C11.877 3.54098 11.837 2.82611 11.817 2.63285C11.773 2.20966 11.9 0.997277 10.993 0.831756C10.221 0.692183 10.068 1.07691 9.916 1.05543C9.916 1.05543 9.763 0.0515654 8.78 0.0399343C8.78 0.0399343 4.727 -0.487924 4.727 2.29461C4.705 2.49413 4.649 3.36377 4.645 4.36405C4.272 4.4741 3.995 4.93492 3.995 5.48516C3.995 6.09803 4.337 6.59462 4.767 6.63041C4.813 6.95697 4.878 7.25043 4.963 7.47411C5.346 8.54149 6.719 9.12656 6.719 9.12656Z" fill="#7189A9" />
                        </svg>
                    <Link to={`/${ownerId}`}>
                        <div>
                            {ownerLogin}
                        </div>
                    </Link>
                </div>
            </section>
            <section className={styles.bulletinTitle}>
                <h1>{bulletinSubject}</h1>
            </section>
            <section className={styles.bulletinBody}>
                <article>
                    {bulletinText}
                </article>
            </section>
            <section className={styles.bulletinImages}>
                    {
                        bulletinImages.map((image: string, index: number) => (
                            <div className={styles.imageWrapper} key={`Фото №${index}`}>
                                <img src={image} alt={`Фото №${index}`}/>
                            </div>
                        ))
                    }
            </section>
        </div>
    );
}

export default Bulletin;