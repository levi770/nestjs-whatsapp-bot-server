;[
    {
        type: 'command',
        name: 'маца',
        next: 'forWhom',
        preText:
            '"Добро пожаловать в Еврейский центр Казахстана ""Хабад Любавич"".\nС Вами беседует бот (автоматический помощник). Я помогу Вам подать заявку на получение мацы в 2021 (5781) году. \n\n_Если Вы допустите ошибку или что-то пойдет не так и наше общение остановится, напишите слово *Отмена* и начните все заново._"\n',
        postText:
            '"Для кого Вы подаете заявку на праздничный набор для Песаха?\nЕсли для себя, напишите *Cебе*\nЕсли для другого человека, напишите *Другому*"\n',
        actions: '',
    },
    {
        type: 'command',
        name: 'отмена',
        next: '',
        preText: 'Если Вы хотите начать процесс подачи заявки сначала, напишите *Маца*\n',
        postText: '',
        actions: [{ CANCEL: 'true' }],
    },
    {
        type: 'command',
        name: 'сначала',
        next: '',
        preText:
            '"Добро пожаловать в Еврейский центр Казахстана ""Хабад Любавич"".\nС Вами беседует бот (автоматический помощник). Я помогу Вам подать заявку на получение мацы в 2021 (5781) году. \n\n_Если Вы допустите ошибку или что-то пойдет не так и наше общение остановится, напишите слово *Отмена* и начните все заново._"\n',
        postText:
            '"Для кого Вы подаете заявку на праздничный набор для Песаха?\nЕсли для себя, напишите *Cебе*\nЕсли для другого человека, напишите *Другому*"\n',
        actions: [{ CANCEL: 'true' }],
    },
    {
        type: 'command',
        name: '1',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { city: 'алматы', anotherCity: 'false', almaty: 'true' } }],
    },
    {
        type: 'command',
        name: '2',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { city: 'караганда', noServiceCity: 'true', anotherCity: 'false', Karaganda: 'true' } }],
    },
    {
        type: 'command',
        name: '3',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { city: 'костанай', noServiceCity: 'true', anotherCity: 'false', Kostanai: 'true' } }],
    },
    {
        type: 'command',
        name: '4',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { city: 'нур-Султан', noServiceCity: 'true', anotherCity: 'false', NurSultan: 'true' } }],
    },
    {
        type: 'command',
        name: '5',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { city: 'павлодар', noServiceCity: 'true', anotherCity: 'false', Pavlodar: 'true' } }],
    },
    {
        type: 'command',
        name: '6',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [
            { SETDATA: { city: 'усть-Каменогорск', noServiceCity: 'true', anotherCity: 'false', ustKamen: 'true' } },
        ],
    },
    {
        type: 'command',
        name: '7',
        next: 'secondName',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { city: 'шымкент', noServiceCity: 'true', anotherCity: 'false', Chimkent: 'true' } }],
    },
    {
        type: 'command',
        name: '8',
        next: 'city',
        preText: 'Напишите Вашу фамилию\n',
        postText: '',
        actions: [{ SETDATA: { noServiceCity: 'true', anotherCity: 'true' } }],
    },
    {
        type: 'command',
        name: 'себе',
        next: 'city',
        preText:
            '"Из какого Вы города?\n*1* Алматы\n*2* Караганда\n*3* Костанай\n*4* Нур-Султан\n*5* Павлодар\n*6* Усть-Каменогорск\n*7* Шымкент\n*8* Другой\n\nВведите цифру *1*, чтобы выбрать город Алматы; *2*, чтобы выбрать Караганда, и т. д."\n',
        postText: '',
        actions: [{ SETDATA: { forWhom: 'себе', whoHave: 'false' } }],
    },
    {
        type: 'command',
        name: 'другому',
        next: 'city',
        preText:
            '"Из какого Вы города?\n*1* Алматы\n*2* Караганда\n*3* Костанай\n*4* Нур-Султан\n*5* Павлодар\n*6* Усть-Каменогорск\n*7* Шымкент\n*8* Другой\n\nВведите цифру *1*, чтобы выбрать город Алматы; *2*, чтобы выбрать Караганда, и т. д."\n',
        postText: '',
        actions: [{ SETDATA: { forWhom: 'другому' } }],
    },
    {
        type: 'command',
        name: 'песах',
        next: '',
        preText:
            'По этим ссылкам Вы можете найти подробную информацию о празднике Песах:\n\nКраткое описание седера - https://bit.ly/3ept6qg\n\nПодготовка к седеру - https://bit.ly/3cfl4xz\n\nПроведение седера - https://bit.ly/3epm4Ss\n\nВидео "Что такое пасхальный седер?" - https://bit.ly/3cn7uZk\n\nВидео "Показательный седер" - https://bit.ly/3v93yDY\n\nПасхальный седер в одиночестве - https://bit.ly/38oX3Df\n\nЗаконы о кануне Песаха, который приходится на Шабат - https://bit.ly/3eYnTpO\n\n',
        postText: '',
        actions: '',
    },
    {
        type: 'command',
        name: 'седер',
        next: '',
        preText:
            'Пасхальный седер, с Б-жьей помощью, пройдет в синагоге по адресу: пр. Райымбека, 206-Е \nвечером в субботу, 27.03.2021, и вечером в воскресенье, 28.03.2021.\nЧтобы принять участие в седере, зарегистрируйтесь по ссылке:\nhttps://docs.google.com/forms/d/e/1FAIpQLScNZKU8WzhhNQ-_skKQblqR_qcnLTL6nL_31i75b-Uu9-M9Dg/viewform?usp=sf_link\n',
        postText: '',
        actions: '',
    },
    {
        type: 'command',
        name: 'регистрация',
        next: 'whoJew',
        preText: 'Кто из Ваших родителей является евреем?\n',
        postText: '',
        actions: '',
    },
    {
        type: 'command',
        name: 'уже',
        next: 'IinCopy',
        preText:
            'Отправьте фото Вашего удостоверения личности. После проверки с Вами свяжутся сотрудники Еврейского центра.\n',
        postText: '',
        actions: '',
    },
    {
        type: 'command',
        name: 'да',
        next: 'pickFrom',
        preText:
            'Укажите, где Вы планируете получить праздничный набор:\n\n*А*. Синагога: пр. Райымбека, 206-Е, ежедневно, кроме субботы, с 10:00 до 17:00\n*Б*. Школа: ул. Клочкова, 28, в понедельник, вторник и четверг с 14:00 до 17:00 (спросить Алису или Полину)\n*В*. Бейт Хабад: ул. Кабанбай батыра, 68, в понедельник и четверг с 10:00 до 17:00, во вторник и среду с 14:00 до 20:00\n\nВведите *А* или *Б* или *В*\n',
        postText: '',
        actions: [{ SETDATA: { canСome: 'true' } }],
    },
    {
        type: 'command',
        name: 'нет',
        next: 'addressCorrect',
        preText: 'Мы не гарантируем, но постараемся с Б-жьей помощью организовать доставку праздничного набора.\n',
        postText:
            '\nВы зарегистрированы в общине по этому адресу.\n- Если набор можно отправить по этому адресу, напишите *Верный*\n- Если набор можно отправить по этому адресу, но в адресе допущена ошибка, напишите *Изменить* \n- Если Вы хотите получить набор по другому адресу, напишите *Другой*\n',
        actions: [
            { GETDATA: [{ source: 'external', key: 'address', where: 'iin', action: 'send' }] },
            { SETDATA: { canСome: 'false', delivery: 'true' } },
        ],
    },
    {
        type: 'command',
        name: 'верный',
        next: 'district',
        preText: 'Пожалуйста, напишите в каком районе города находится этот адрес.\n',
        postText: '',
        actions: [
            { GETDATA: [{ source: 'external', key: 'address', where: 'iin', action: 'set' }] },
            { SETDATA: { addressCorrect: 'true', address: 'data' } },
        ],
    },
    {
        type: 'command',
        name: 'изменить',
        next: 'address',
        preText:
            'Напишите Ваш точный адрес, отделяя элементы пробелами:\nпочтовый_индекс город улица дом квартира\n(пример: 050000 Алматы Райымбека 206е 1)\n',
        postText: '',
        actions: [{ SETDATA: { addressCorrect: 'false' } }],
    },
    {
        type: 'command',
        name: 'другой',
        next: 'address',
        preText:
            'Напишите Ваш точный адрес, отделяя элементы пробелами:\nпочтовый_индекс город улица дом квартира\n(пример: 050000 Алматы Райымбека 206е 1)\n',
        postText: '',
        actions: [{ SETDATA: { addressCorrect: 'true', anotherAdress: 'true' } }],
    },
    {
        type: 'command',
        name: 'б',
        next: '',
        preText:
            'Ваша заявка оформлена.\nИмя и номер телефона лица, ответственного за выдачу мацы в выбранном Вами пункте распространения:\n\nhttps://go.2gis.com/t0xcf\n+77073612111⁩, Алиса\n',
        postText:
            '"- Чтобы подать заявку для другого человека, напишите *Другому* \n- Чтобы начать процесс подачи заявки сначала напишите *Сначала* (это удалит вашу предыдущую заявку!!!)\n- Чтобы получить общую информацию о Песахе, напишите *Песах*\n- Для получения информации об общинном пасхальном седере, напишите *Седер*\n\nПо дополнительным вопросам Вы можете связаться с секретариатом Еврейского центра по телефону с 9:00 до 17:00 или через WhatsApp."\n\nЕврейский центр Казахстана "Хабад Любавич" желает Вам кашерного и счастливого Песаха!\n',
        actions: [{ SETDATA: { pickFrom: 'школа', Shkola: 'true' } }, { CANCEL: 'true' }, { EXPORT: [] }],
    },
    {
        type: 'command',
        name: 'в',
        next: '',
        preText:
            'Ваша заявка оформлена.\nИмя и номер телефона лица, ответственного за выдачу мацы в выбранном Вами пункте распространения:\n\nhttps://go.2gis.com/nm83tg\n+77015137791, раввин Мордехай\n',
        postText:
            '"- Чтобы подать заявку для другого человека, напишите *Другому* \n- Чтобы начать процесс подачи заявки сначала напишите *Сначала* (это удалит вашу предыдущую заявку!!!)\n- Чтобы получить общую информацию о Песахе, напишите *Песах*\n- Для получения информации об общинном пасхальном седере, напишите *Седер*\n\nПо дополнительным вопросам Вы можете связаться с секретариатом Еврейского центра по телефону с 9:00 до 17:00 или через WhatsApp."\n\nЕврейский центр Казахстана "Хабад Любавич" желает Вам кашерного и счастливого Песаха!\n',
        actions: [{ SETDATA: { pickFrom: 'БХ', BeisHabad: 'true' } }, { CANCEL: 'true' }, { EXPORT: [] }],
    },
    {
        type: 'command',
        name: 'использовать',
        next: '',
        preText: 'Ваша заявка оформлена. \n',
        postText:
            '"- Чтобы подать заявку для другого человека, напишите *Другому* \n- Чтобы начать процесс подачи заявки сначала напишите *Сначала* (это удалит вашу предыдущую заявку!!!)\n- Чтобы получить общую информацию о Песахе, напишите *Песах*\n- Для получения информации об общинном пасхальном седере, напишите *Седер*\n\nПо дополнительным вопросам Вы можете связаться с секретариатом Еврейского центра по телефону с 9:00 до 17:00 или через WhatsApp."\n\nЕврейский центр Казахстана "Хабад Любавич" желает Вам кашерного и счастливого Песаха!\n',
        actions: [{ SETDATA: { phoneForCurier: 'senderPhone' } }, { CANCEL: 'true' }],
    },
    {
        type: 'command',
        name: 'казахстан',
        next: 'phoneForCurier',
        preText: 'Напишите Ваш ИИН\n',
        postText: '',
        actions: '',
    },
    {
        type: 'command',
        name: 'другая',
        next: 'anotherCountry',
        preText: 'Гражданином какой страны Вы являетесь?\n',
        postText: '',
        actions: '',
    },
    {
        type: 'question',
        name: 'forWhom',
        next: '',
        preText: '',
        postText: 'Напишите *себе* или *другому*\nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "себе" && command !== "другому"' }],
    },
    {
        type: 'question',
        name: 'canСome',
        next: '',
        preText: '',
        postText: 'Напишите *да* или *нет*\nЕсли вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "да" && command !== "нет”' }],
    },
    {
        type: 'question',
        name: 'addressCorrect',
        next: '',
        preText: '',
        postText:
            'Напишите *верный*, *изменить* или *другой* \nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "верный" && command !== "изменить”' }],
    },
    {
        type: 'question',
        name: 'pickFrom',
        next: '',
        preText: '',
        postText: 'Напишите *А*, *Б* или *В* \nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: '”command !== "а" && command !== "б" && command !== "в”' }],
    },
    {
        type: 'question',
        name: 'registration',
        next: '',
        preText: '',
        postText:
            'Напишите *регистрация* или *уже в общине* \nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "регистрация" && command !== "уже”' }],
    },
    {
        type: 'question',
        name: 'iinCheck',
        next: '',
        preText: '',
        postText:
            'Пожалуйста, дождитесь проверки Ваших данных.\nМы обязательно Вам ответим.\nИли напишите *Отмена*, чтобы отменить Вашу заявку.\n',
        actions: [
            {
                CONDITION:
                    'command !== "другому" && command !== "песах" && command !== "седер" && data.messages[i].type !== "image"',
            },
        ],
    },
    {
        type: 'question',
        name: 'country',
        next: '',
        preText: '',
        postText:
            'Напишите *Казахстан* или *Другая*\nЕсли Вы хотите остановить процес подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "казахстан" && command !== "другая”' }],
    },
    {
        type: 'question',
        name: 'city',
        next: '',
        preText: '',
        postText: 'Напишите Ваше имя\n',
        actions: [
            { GETDATA: [{ source: 'internal', key: 'anotherCity', where: 'msgLog', action: 'condition' }] },
            { SETDATA: { city: 'msgBody' } },
            { CONDITION: 'actionData === "true”' },
        ],
    },
    {
        type: 'question',
        name: 'city',
        next: '',
        preText: '',
        postText:
            'Введите одну цифру, соответствующую Вашему городу: от *1* до *8*. \nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [
            {
                CONDITION:
                    'command !== "1" && command !== "2" && command !== "3" && command !== "4" && command !== "5" && command !== "6" && command !== "7" && command !== "8”',
            },
        ],
    },
    {
        type: 'question',
        name: 'useNumber',
        next: '',
        preText: '',
        postText:
            'Напишите *Использовать этот* или *Указать другой* \nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "использовать" && command !== "указать"' }],
    },
    {
        type: 'question',
        name: 'iinCopy',
        next: '',
        preText: '',
        postText:
            'Отправьте фото Вашего удостоверения личности так, чтобы был виден ИИН. \nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'data.messages[i].type !== "image"' }],
    },
    {
        type: 'question',
        name: 'iinCopy',
        next: 'iinCheck',
        preText: '',
        postText: 'Спасибо. Наш представитель проверит Ваш ИИН и свяжется с Вами.\n',
        actions: [
            { SETDATA: { iinCopy: 'true', levi: 'true' } },
            { CONDITION: 'data.messages[i].type === "image"' },
            { MAKEURL: 'true' },
            { FORWARD: 'true' },
        ],
    },
    {
        type: 'question',
        name: 'forWhom',
        next: '',
        preText: '',
        postText: 'Напишите *себе* или *другому*\nЕсли Вы хотите остановить процесс подачи заявки, напишите *Отмена*\n',
        actions: [{ CONDITION: 'command !== "себе" && command !== "другому"' }],
    },
    {
        type: 'question',
        name: 'whoJew',
        next: '',
        preText: '',
        postText:
            'Благодарим за обращение в Еврейский центр Казахстана "Хабад Любавич".\nЯ передам номер Вашего телефона раввину в Вашем городе, он свяжется с Вами.\n',
        actions: [
            { GETDATA: [{ source: 'internal', key: 'noServiceCity', where: 'msgLog', action: 'condition' }] },
            { SETDATA: { whoJew: 'msgBody' } },
            { CONDITION: 'actionData[0] === "true”' },
            { CANCEL: 'true' },
            { EXPORT: [] },
        ],
    },
    {
        type: 'question',
        name: 'iinCheck',
        next: '',
        preText: '',
        postText:
            'Пожалуйста, дождитесь проверки Ваших данных.\nМы обязательно Вам ответим.\nИли напишите *Отмена*, чтобы отменить Вашу заявку.\n',
        actions: [{ CONDITION: 'command !== "другому" && data.messages[i].type !== "image"' }],
    },
    {
        type: 'question',
        name: 'iinCheck',
        next: '',
        preText: '',
        postText: 'Спасибо. Наш представитель проверит Ваш ИИН и свяжется с Вами.\n',
        actions: [{ CONDITION: 'data.messages[i].type === "image"' }, { MAKEURL: 'true' }, { FORWARD: 'true' }],
    },
    {
        type: 'question',
        name: 'iin',
        next: '',
        preText: '',
        postText:
            'Благодарим за обращение в Еврейский центр Казахстана "Хабад Любавич".\nК сожалению, мы не можем доставить мацу в Ваш город.\nНадеемся, что в скором будущем такая возможность появится.\nВы можете зарегистрироваться на сайте http://matza.kz \n',
        actions: [
            {
                GETDATA: [
                    { source: 'internal', key: 'noServiceCity', where: 'msgLog', action: 'condition' },
                    { source: 'internal', key: 'anotherCity', where: 'msgLog', action: 'condition' },
                ],
            },
            { CONDITION: 'actionData[0] === "true" && actionData[1] === "true”' },
            { SETDATA: { iin: 'msgBody' } },
            { EXPORT: [] },
            { CANCEL: 'true' },
        ],
    },
    {
        type: 'question',
        name: 'iin',
        next: 'whoJew',
        preText: '',
        postText: 'Кто из Ваших родителей является евреем?\n',
        actions: [
            {
                GETDATA: [
                    { source: 'internal', key: 'noServiceCity', where: 'msgLog', action: 'condition' },
                    { source: 'internal', key: 'anotherCity', where: 'msgLog', action: 'condition' },
                ],
            },
            { CONDITION: 'actionData[0] === "true" && actionData[1] === "false"' },
            { SETDATA: { iin: 'msgBody' } },
            { EXPORT: [] },
            { PROCESS: 'iinCheck' },
        ],
    },
    {
        type: 'question',
        name: 'iin',
        next: '',
        preText: '',
        postText: '',
        actions: [{ PROCESS: 'iinCheck' }],
    },
    {
        type: 'question',
        name: 'whoHave',
        next: '',
        preText: '',
        postText:
            'Благодарим за обращение в Еврейский центр Казахстана "Хабад Любавич".\nК сожалению, мы не можем доставить мацу в Ваш город.\nНадеемся, что в скором будущем такая возможность появится.\nВы можете зарегистрироваться на сайте http://matza.kz \n',
        actions: [
            {
                GETDATA: [
                    { source: 'internal', key: 'noServiceCity', where: 'msgLog', action: 'condition' },
                    { source: 'internal', key: 'anotherCity', where: 'msgLog', action: 'condition' },
                ],
            },
            { CONDITION: 'actionData[0] === "true" && actionData[1] === "true"' },
            { SETDATA: { iin: 'msgBody' } },
            { EXPORT: [] },
            { CANCEL: 'true' },
        ],
    },
    {
        type: 'question',
        name: 'whoHave',
        next: 'whoJew',
        preText: '',
        postText:
            'Благодарим за обращение в Еврейский центр Казахстана "Хабад Любавич".\nК сожалению, мы не можем доставить мацу в Ваш город.\nНадеемся, что в скором будущем такая возможность появится.\nВы можете зарегистрироваться на сайте http://matza.kz \n',
        actions: [
            {
                GETDATA: [
                    { source: 'internal', key: 'noServiceCity', where: 'msgLog', action: 'condition' },
                    { source: 'internal', key: 'anotherCity', where: 'msgLog', action: 'condition' },
                ],
            },
            { CONDITION: 'actionData[0] === "true" && actionData[1] === "false"' },
            { SETDATA: { iin: 'msgBody' } },
            { EXPORT: [] },
            { CANCEL: 'true' },
        ],
    },
    {
        type: 'question',
        name: 'whoHave',
        next: '',
        preText: '',
        postText: '',
        actions: [{ PROCESS: 'registrationCheck' }],
    },
    {
        type: 'command',
        name: 'а',
        next: '',
        preText:
            'Ваша заявка оформлена.\nИмя и номер телефона лица, ответственного за выдачу мацы в выбранном Вами пункте распространения:\n\nhttps://go.2gis.com/sfjvq\n',
        postText:
            '"- Чтобы подать заявку для другого человека, напишите *Другому* \n- Чтобы начать процесс подачи заявки сначала напишите *Сначала* (это удалит вашу предыдущую заявку!!!)\n- Чтобы получить общую информацию о Песахе, напишите *Песах*\n- Для получения информации об общинном пасхальном седере, напишите *Седер*\n\nПо дополнительным вопросам Вы можете связаться с секретариатом Еврейского центра по телефону с 9:00 до 17:00 или через WhatsApp."\n\nЕврейский центр Казахстана "Хабад Любавич" желает Вам кашерного и счастливого Песаха!\n',
        actions: [{ SETDATA: { pickFrom: 'синагога', Synagoga: 'true' } }, { CANCEL: 'true' }, { EXPORT: [] }],
    },
]
