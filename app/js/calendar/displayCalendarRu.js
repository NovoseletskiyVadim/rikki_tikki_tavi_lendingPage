
$(function(){
    var data = [
        { "date": "2019-08-24 09:00:00", "title": "День независимости Украины. Поздравляем всех с общим объединяющим праздником нации!", "description": "", "url": "" },
        { "date": "2019-08-27 08:00:00", "title": "Возобновление деятельности детского садика полного дня пребывания 'Рикки-Тикки-Тави'. Начало деятельности в 8:00.", "description": "", "url": "" },
        { "date": "2019-09-01 09:00:20", "title": "День Знаний. Поздравляем наших выпускников с новым учебным годом в школе!", "description": "", "url": "" },
        { "date": "2019-09-02 11:00:00", "title": "Приглашаем детей-школьников на встречу с дошкольниками детского садика 'Рикки-Тикки-Тави' в 11:30 для приветствия, беседы, эстафеты", "description": "", "url": "" },
    ];
    $('#eventCalendar').eventCalendar({
        jsonData: data,
        eventsjson: 'data.json',
        jsonDateFormat: 'human',
        startWeekOnMonday: true,
        openEventInNewWindow: true,
        dateFormat: 'DD-MM-YYYY',
        showDescription: false,
        locales: {
            locale: "ru",
            txt_noEvents: "Нет запланированных событий",
            txt_SpecificEvents_prev: "",
            txt_SpecificEvents_after: ":",
            txt_NextEvents: "Ближайшее событие:",
            txt_GoToEventUrl: "Смотреть ",
            moment: {
                "months" : [ "Январь","Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                "monthsShort" : [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                "weekdays" : [ "Воскресение", "Понедельник","Вторник","Среда","Четверг",
                "Пятница","Суббота" ],
                "weekdaysShort" : [ "Вс","Пн","Вт","Ср","Чт",
                "Пт","Сб" ],
                "weekdaysMin" : [ "Вс","Пн","Вт","Ср","Чт",
                "Пт","Сб" ]
            }
        }
    });
});