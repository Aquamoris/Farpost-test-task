const db = require('../db');

class BulletinController {
    async createBulletin(req, res) {
        const newBulletin = await db.query(`INSERT INTO bulletin 
                                            (publishDate, publishDateString, ownerId, ownerLogin, bulletinSubject, bulletinText, bulletinImages) 
                                            VALUES 
                                            (1234567890, '16:30, сегодня', 123455, 'Wiliam', 'UI/UX Designer (Владивосток)', 'Мы — команда разработки. Используя современные технологии и стандарты мы создаем продукт для анализа рынка ценных бумаг и эффективного управления портфелем. Мы стремимся ежедневно добавлять в наш продукт значимый функционал, выполняя строгие требования к его качеству и быстродействию. Мы ценим честность, дисциплину и ответственность, сами планируем свою работу и организуем процесс, стремимся выдерживать сроки без переработок и вести работу прозрачно для коллег и заказчика. У нас есть веб-версия, мобильные приложения (android, ios) и телеграм-бот. Это разнообразие стоит на процессах TDD, Continious Integration и конечно же на нашей команде. Все работают удаленно (+- 2 часовых пояса от Москвы). К себе в команду мы ищем профессионала, который умеет решать задачи пользователя в веб и мобильных девайсах. Еще встречаются такие названия этой роли: Продуктовый- дизайнер, UI / UX Designer, Дизайнер Интерфейсов, Проектировщик интерфейсов и т.п., чтобы все эти слова не значили.', '{"https://static.baza.farpost.ru/v/1510541224458_hugeBlock", "https://static.baza.farpost.ru/v/1510541224458_hugeBlock"}')`);
        res.json(newBulletin.rows[0]);
    }

    async getAllBulletins(req, res){
        const bulletins = await db.query(`SELECT * FROM bulletin`);
        res.json(bulletins.rows);
    }

    async getBulletin(req, res) {
        res.json('ok');
    }
}

module.exports = new BulletinController();