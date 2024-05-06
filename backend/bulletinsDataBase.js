const bulletinsToModerate = [
    {
        id: 1,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Lexus RX350, 2022 год во Владивостоке',
        bulletinText: 'Состояние нового автомобиля! Начало эксплуатации конец 2023 года. Находился в теплом паркинге.\n' +
            'Машины полностью обклеена дорогой броне пленкой.\n' +
            'Установлены оригинальные резиновые коврики.\n' +
            'Красивый номер 222 в подарок покупателю!\n' +
            'Реальному покупателю торг возле автомобиля!',
        bulletinImages: ["https://s1.auto.drom.ru/photo/iqVV2nHPGrxcmfo-Aat1rUq-KcqI-qitlcQzd8h5-nYZSpWG04t9E-OTIgPzxvmCAbWrKKD-o4QaEB4-j0vmp9U9T5SFXECm.jpg", "https://s1.auto.drom.ru/photo/UkhGaYqRnA91uYysucbWddobcxWCgWrRdBuFUWvFe4HxHvHaFb_ip3XArgrbCMeI46fYvBQRqzOl90QtQs9YbY_zr27f__ix.jpg", "https://s1.auto.drom.ru/photo/xzoXgIrKoHsHtryqp-s7S4GBSP3NLn_D-EVJFDy01u54h8KGc1tVt0eRXmmNG4QrhKur9fAlhMz0NSXtCxggkfIKFuMPerpO.jpg", "https://s1.auto.drom.ru/photo/A0VQIK9bQQqbYYc2Qc3MLz6d02iHBL33GhZp2wxpsv7ukG7uOl_jz-fGdxNPAbCJJ6jOFWIJ16jC25gFrFiE3AF7eL4Z70jm.jpg"]
    },
    {
        id: 2,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 1,
        ownerLogin: 'Незнакомец',
        bulletinSubject: 'Кухня на заказ за 7 дней Дизайн проект Мебель на заказ Шкаф во Владивостоке',
        bulletinText: 'Фабрика мебели «MODERNA» это первоклассный сервис, собственное производство, большой ассортимент уникальных дизайнерских решений, индивидуальный подход и возможность реализовать абсолютно любой проект.\n' +
            '\n' +
            'Рейтинг Фабрики мебели "MODERNA"\n' +
            'Vl.ru 5 Звезд\n' +
            '2GIS 5 Звезд\n' +
            'Яндекс 4.8 Звезд\n' +
            'Zoon 5 Звезд',
        bulletinImages: ["https://static.baza.farpost.ru/v/1510541224458_hugeBlock", "https://static.baza.farpost.ru/v/1510541224458_hugeBlock"]
    },
    {
        id: 3,
        publishDate: 1234567890,
        publishDateString: '09:31, сегодня',
        ownerId: 1,
        ownerLogin: 'Незнакомец',
        bulletinSubject: 'Кухни на заказ Модерна Изготовление мебели Шкафы купе Гардеробные во Владивостоке',
        bulletinText: 'СТОЛЕЩНИЦА ИЗ КВАРЦА В ПОДАРОК!!!! При заказе кухни до конца Мая!!\n' +
            'Условия Акции уточняйте у наших менеджеров в салонах!\n' +
            '\n' +
            'Фабрика мебели «MODERNA» это первоклассный сервис, собственное производство, большой ассортимент уникальных дизайнерских решений, индивидуальный подход и возможность реализовать абсолютно любой проект.',
        bulletinImages: ["https://static.baza.farpost.ru/v/1691713808234_bulletin", "https://static.baza.farpost.ru/v/1670844631993_bulletin"]
    },
    {
        id: 4,
        publishDate: 1234567890,
        publishDateString: '09:31, сегодня',
        ownerId: 1,
        ownerLogin: 'Незнакомец',
        bulletinSubject: 'Кухни на заказ Модерна Изготовление мебели Шкафы купе Гардеробные во Владивостоке',
        bulletinText: 'СТОЛЕЩНИЦА ИЗ КВАРЦА В ПОДАРОК!!!! При заказе кухни до конца Мая!!\n' +
            'Условия Акции уточняйте у наших менеджеров в салонах!\n' +
            '\n' +
            'Фабрика мебели «MODERNA» это первоклассный сервис, собственное производство, большой ассортимент уникальных дизайнерских решений, индивидуальный подход и возможность реализовать абсолютно любой проект.',
        bulletinImages: ["https://static.baza.farpost.ru/v/1691713808234_bulletin", "https://static.baza.farpost.ru/v/1670844631993_bulletin"]
    },
    {
        id: 5,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 2,
        ownerLogin: 'JavaScript',
        bulletinSubject: 'Внимание!',
        bulletinText: 'Спасибо за внимание!',
        bulletinImages: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"]
    },
    {
        id: 6,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 2,
        ownerLogin: 'JavaScript',
        bulletinSubject: 'Внимание!',
        bulletinText: 'Спасибо за внимание!',
        bulletinImages: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"]
    },
    {
        id: 7,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 2,
        ownerLogin: 'JavaScript',
        bulletinSubject: 'Спасибо за внимание!',
        bulletinText: 'Внимание!',
        bulletinImages: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"]
    },
    {
        id: 8,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 2,
        ownerLogin: 'JavaScript',
        bulletinSubject: 'Спасибо за внимание!',
        bulletinText: 'Внимание!',
        bulletinImages: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"]
    },
    {
        id: 9,
        publishDate: 1234567890,
        publishDateString: '09:31, сегодня',
        ownerId: 1,
        ownerLogin: 'Незнакомец',
        bulletinSubject: 'Кухни на заказ Модерна Изготовление мебели Шкафы купе Гардеробные во Владивостоке',
        bulletinText: 'СТОЛЕЩНИЦА ИЗ КВАРЦА В ПОДАРОК!!!! При заказе кухни до конца Мая!!\n' +
            'Условия Акции уточняйте у наших менеджеров в салонах!\n' +
            '\n' +
            'Фабрика мебели «MODERNA» это первоклассный сервис, собственное производство, большой ассортимент уникальных дизайнерских решений, индивидуальный подход и возможность реализовать абсолютно любой проект.',
        bulletinImages: ["https://static.baza.farpost.ru/v/1691713808234_bulletin", "https://static.baza.farpost.ru/v/1670844631993_bulletin"]
    },
    {
        id: 10,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Honda Vezel, 2023 год в Уссурийске',
        bulletinText: 'Абсолютно новый автомобиль!\n' +
            'Уплачен коммерческий утилизационный сбор 306.000.\n' +
            '\n' +
            'ЭПТС действующий.\n' +
            'Любые проверки.\n' +
            '\n' +
            'Активный круиз.\n' +
            'Удержание в полосе.\n' +
            'Парктроники.\n' +
            'Камера заднего вида.\n' +
            'Автоматический дальний свет.\n' +
            '\n' +
            'В наличии 2 шт.\n' +
            'Обмен не интересен!\nе',
        bulletinImages: ["https://s1.auto.drom.ru/photo/7XGIXo_WfKuEANIRDxag8szD4InGX3KVI6eBCkDitVSfHYTZgvsx75n2Geb_210AE1ZPluWt8p2M_ge1czPMRWMjQfD66w.jpg"]
    },
    {
        id: 11,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Nissan NP300, 2013 год в Уссурийске',
        bulletinText: 'Отличное состояние. По лесам не ездил. Пробег родной, состояние автомобиля этому подтверждение. Установлено: шнорхель, силовые бампера, лебедки Ironman спереди и сзади на кивларовых тросах, дополнительное освещение, в кузове пластиковый вкладыш, кузов закрывается алюминиевой крышкой с петлями для крепления груза и уплотнительной резинкой, установлен компрессор (запускается с кнопки из салона), радиостанция, багажник на крыше, защита днища, тюненые передние рычаги подвески, поднят на 2, 5 дюйма, амортизаторы Ironman, дорогая резина с хорошим остатком. Задний мост повышенного трения(LSD). Установлен предпусковой автономный подогреватель двигателя(запуск с пульта автосигнализации и с пульта управления в салоне). Машина обслужена полностью, состояние отличное, без гнили. Кузов в родной краске, без всякого раптора и прочее. Салон весь целый, чистый и опрятный. Передние сидения с подогревом, модельные резиновые ковры на полу. Дорогие видеорегистраторы перед-зад.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/qyh78qIDHMUSuaIllGqBaoecLJCcvLTEkx6QAbCAjWaMjab_3WYbQbWDTN4fd_l0ZAH5xplrk4d9y0uVNP5D1QP_hfpVEkTa.jpg", "https://s1.auto.drom.ru/photo/DPYDS40WTC8vLN3PxjGnNy99Mhu5Ze3Wo_IElnwsfXmSYy_zM3DSl9Zm6M_LXPb9HHV8lWxSTFPdO9Fg6s6wysUPyTuBCp7x.jpg", "https://s1.auto.drom.ru/photo/0HnffBqAUw7lGYis3326kVnawLSB8ayBYupt9VMILIMNsXIygVP0o0AEeJztCP582PuzWHDyoFqTS9PdLqgj-1PmZ6g81BNn.jpg"]
    },
    {
        id: 12,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Toyota Land Cruiser, 2008 год в Находке',
        bulletinText: 'Продам шикарный подготовленный крузер.\n' +
            'Итак, автомобиль прошёл полный ребилд и подготовку в компании "Крузак 25"\n' +
            'За полный ребилд я заплатил около 2 млн. Рублей.\n' +
            '1. Полный ремонт двс с заменой форсунок, ремонтом тнвд, заменой турбин, заменой масленных насосов, заменой грм, поршневой, клапанов и всех прокладок и сальников. Сейчас двигатель прошёл обкатку и великолепно себя чувствует, также отключили ЕГР, Двигатель находится на гарантии в компании ещё на 10.000км (фото прилагаю)\n' +
            '2. Ребилд автомата, его разобрали, почистили, заменили в нем какие то запчасти, залили новое масло и новый фильтр, стал переключаться быстрее и плавнее без пинков.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/Y0mif_Eo1qN9LEA5tH4Z0pBjG-94bZdvVsC945dhZRWWJxyAMvz43iGLBixQs8Xltzs-RdC08nXvRHVR4lem4IByw3pDew.jpg"]
    },
    {
        id: 13,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Делем мебел под заказ',
        bulletinText: 'Это очень крутое объявление',
        bulletinImages: ["https://static.baza.farpost.ru/v/1510541224458_hugeBlock", "https://static.baza.farpost.ru/v/1510541224458_hugeBlock"]
    },
    {
        id: 14,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Honda Vezel, 2023 год в Уссурийске',
        bulletinText: 'Абсолютно новый автомобиль!\n' +
            'Уплачен коммерческий утилизационный сбор 306.000.\n' +
            '\n' +
            'ЭПТС действующий.\n' +
            'Любые проверки.\n' +
            '\n' +
            'Активный круиз.\n' +
            'Удержание в полосе.\n' +
            'Парктроники.\n' +
            'Камера заднего вида.\n' +
            'Автоматический дальний свет.\n' +
            '\n' +
            'В наличии 2 шт.\n' +
            'Обмен не интересен!\nе',
        bulletinImages: ["https://s1.auto.drom.ru/photo/7XGIXo_WfKuEANIRDxag8szD4InGX3KVI6eBCkDitVSfHYTZgvsx75n2Geb_210AE1ZPluWt8p2M_ge1czPMRWMjQfD66w.jpg"]
    },
    {
        id: 15,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Honda Vezel, 2023 год в Уссурийске',
        bulletinText: 'Абсолютно новый автомобиль!\n' +
            'Уплачен коммерческий утилизационный сбор 306.000.\n' +
            '\n' +
            'ЭПТС действующий.\n' +
            'Любые проверки.\n' +
            '\n' +
            'Активный круиз.\n' +
            'Удержание в полосе.\n' +
            'Парктроники.\n' +
            'Камера заднего вида.\n' +
            'Автоматический дальний свет.\n' +
            '\n' +
            'В наличии 2 шт.\n' +
            'Обмен не интересен!\nе',
        bulletinImages: ["https://s1.auto.drom.ru/photo/7XGIXo_WfKuEANIRDxag8szD4InGX3KVI6eBCkDitVSfHYTZgvsx75n2Geb_210AE1ZPluWt8p2M_ge1czPMRWMjQfD66w.jpg"]
    },
    {
        id: 16,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Toyota Land Cruiser, 2008 год в Находке',
        bulletinText: 'Продам шикарный подготовленный крузер.\n' +
            'Итак, автомобиль прошёл полный ребилд и подготовку в компании "Крузак 25"\n' +
            'За полный ребилд я заплатил около 2 млн. Рублей.\n' +
            '1. Полный ремонт двс с заменой форсунок, ремонтом тнвд, заменой турбин, заменой масленных насосов, заменой грм, поршневой, клапанов и всех прокладок и сальников. Сейчас двигатель прошёл обкатку и великолепно себя чувствует, также отключили ЕГР, Двигатель находится на гарантии в компании ещё на 10.000км (фото прилагаю)\n' +
            '2. Ребилд автомата, его разобрали, почистили, заменили в нем какие то запчасти, залили новое масло и новый фильтр, стал переключаться быстрее и плавнее без пинков.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/Y0mif_Eo1qN9LEA5tH4Z0pBjG-94bZdvVsC945dhZRWWJxyAMvz43iGLBixQs8Xltzs-RdC08nXvRHVR4lem4IByw3pDew.jpg"]
    },
    {
        id: 17,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Toyota Land Cruiser, 2008 год в Находке',
        bulletinText: 'Продам шикарный подготовленный крузер.\n' +
            'Итак, автомобиль прошёл полный ребилд и подготовку в компании "Крузак 25"\n' +
            'За полный ребилд я заплатил около 2 млн. Рублей.\n' +
            '1. Полный ремонт двс с заменой форсунок, ремонтом тнвд, заменой турбин, заменой масленных насосов, заменой грм, поршневой, клапанов и всех прокладок и сальников. Сейчас двигатель прошёл обкатку и великолепно себя чувствует, также отключили ЕГР, Двигатель находится на гарантии в компании ещё на 10.000км (фото прилагаю)\n' +
            '2. Ребилд автомата, его разобрали, почистили, заменили в нем какие то запчасти, залили новое масло и новый фильтр, стал переключаться быстрее и плавнее без пинков.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/Y0mif_Eo1qN9LEA5tH4Z0pBjG-94bZdvVsC945dhZRWWJxyAMvz43iGLBixQs8Xltzs-RdC08nXvRHVR4lem4IByw3pDew.jpg"]
    },
    {
        id: 18,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Toyota Land Cruiser, 2008 год в Находке',
        bulletinText: 'Продам шикарный подготовленный крузер.\n' +
            'Итак, автомобиль прошёл полный ребилд и подготовку в компании "Крузак 25"\n' +
            'За полный ребилд я заплатил около 2 млн. Рублей.\n' +
            '1. Полный ремонт двс с заменой форсунок, ремонтом тнвд, заменой турбин, заменой масленных насосов, заменой грм, поршневой, клапанов и всех прокладок и сальников. Сейчас двигатель прошёл обкатку и великолепно себя чувствует, также отключили ЕГР, Двигатель находится на гарантии в компании ещё на 10.000км (фото прилагаю)\n' +
            '2. Ребилд автомата, его разобрали, почистили, заменили в нем какие то запчасти, залили новое масло и новый фильтр, стал переключаться быстрее и плавнее без пинков.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/Y0mif_Eo1qN9LEA5tH4Z0pBjG-94bZdvVsC945dhZRWWJxyAMvz43iGLBixQs8Xltzs-RdC08nXvRHVR4lem4IByw3pDew.jpg"]
    },
    {
        id: 19,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Toyota Land Cruiser, 2008 год в Находке',
        bulletinText: 'Продам шикарный подготовленный крузер.\n' +
            'Итак, автомобиль прошёл полный ребилд и подготовку в компании "Крузак 25"\n' +
            'За полный ребилд я заплатил около 2 млн. Рублей.\n' +
            '1. Полный ремонт двс с заменой форсунок, ремонтом тнвд, заменой турбин, заменой масленных насосов, заменой грм, поршневой, клапанов и всех прокладок и сальников. Сейчас двигатель прошёл обкатку и великолепно себя чувствует, также отключили ЕГР, Двигатель находится на гарантии в компании ещё на 10.000км (фото прилагаю)\n' +
            '2. Ребилд автомата, его разобрали, почистили, заменили в нем какие то запчасти, залили новое масло и новый фильтр, стал переключаться быстрее и плавнее без пинков.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/Y0mif_Eo1qN9LEA5tH4Z0pBjG-94bZdvVsC945dhZRWWJxyAMvz43iGLBixQs8Xltzs-RdC08nXvRHVR4lem4IByw3pDew.jpg"]
    },
    {
        id: 20,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 3,
        ownerLogin: 'Drom',
        bulletinSubject: 'Продажа Toyota Land Cruiser, 2008 год в Находке',
        bulletinText: 'Продам шикарный подготовленный крузер.\n' +
            'Итак, автомобиль прошёл полный ребилд и подготовку в компании "Крузак 25"\n' +
            'За полный ребилд я заплатил около 2 млн. Рублей.\n' +
            '1. Полный ремонт двс с заменой форсунок, ремонтом тнвд, заменой турбин, заменой масленных насосов, заменой грм, поршневой, клапанов и всех прокладок и сальников. Сейчас двигатель прошёл обкатку и великолепно себя чувствует, также отключили ЕГР, Двигатель находится на гарантии в компании ещё на 10.000км (фото прилагаю)\n' +
            '2. Ребилд автомата, его разобрали, почистили, заменили в нем какие то запчасти, залили новое масло и новый фильтр, стал переключаться быстрее и плавнее без пинков.',
        bulletinImages: ["https://s1.auto.drom.ru/photo/Y0mif_Eo1qN9LEA5tH4Z0pBjG-94bZdvVsC945dhZRWWJxyAMvz43iGLBixQs8Xltzs-RdC08nXvRHVR4lem4IByw3pDew.jpg"]
    },
    {
        id: 21,
        publishDate: 1234567890,
        publishDateString: '20:21, сегодня',
        ownerId: 2,
        ownerLogin: 'JavaScript',
        bulletinSubject: 'Внимание!',
        bulletinText: 'Спасибо за внимание!',
        bulletinImages: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"]
    },
]

module.exports = bulletinsToModerate