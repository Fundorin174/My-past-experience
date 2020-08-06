import liceistIconImg from './../img/warrior/shcool.png';
import fsoIconImg from './../img/warrior/fso.png';
import troopsIconImg from './../img/warrior/troops.png';
import baumanaIconImg from './../img/warrior/Baumana.png';
import sheduleIconImg from './../img/warrior/schedule.png';
import chiefHelperIconImg from './../img/warrior/chief_helper.png';
import magistrIconImg from './../img/warrior/magistr.png';
import teacherIconImg from './../img/warrior/teacher.png';

import shcool1 from './../img/warrior/shcool/shcool1.jpg';
import shcool2 from './../img/warrior/shcool/shcool2.jpg';
import shcool3 from './../img/warrior/shcool/shcool3.jpg';
import shcool4 from './../img/warrior/shcool/shcool4.jpg';
import shcool5 from './../img/warrior/shcool/shcool5.jpg';
import shcool6 from './../img/warrior/shcool/shcool6.jpg';

import academy1 from './../img/warrior/academy/academy1.jpg';
import academy2 from './../img/warrior/academy/academy2.jpg';
import academy3 from './../img/warrior/academy/academy3.jpg';
import academy4 from './../img/warrior/academy/academy4.jpg';
import academy5 from './../img/warrior/academy/academy5.jpg';
import academy6 from './../img/warrior/academy/academy6.jpg';
import academy7 from './../img/warrior/academy/academy7.jpg';
import academy8 from './../img/warrior/academy/academy8.jpg';
import academy9 from './../img/warrior/academy/academy9.jpg';
import academy10 from './../img/warrior/academy/academy10.jpg';

import troops1 from './../img/warrior/troops/1.jpg';
import troops2 from './../img/warrior/troops/2.jpg';
import troops3 from './../img/warrior/troops/3.jpg';
import troops4 from './../img/warrior/troops/4.jpg';
import troops5 from './../img/warrior/troops/5.jpg';
import troops6 from './../img/warrior/troops/6.jpg';
import troops7 from './../img/warrior/troops/7.jpg';

import schedule1 from './../img/warrior/Schedule/1.jpg';
import schedule2 from './../img/warrior/Schedule/2.jpg';
import schedule3 from './../img/warrior/Schedule/3.jpg';
import schedule4 from './../img/warrior/Schedule/4.jpg';
import schedule5 from './../img/warrior/Schedule/5.jpg';
import schedule6 from './../img/warrior/Schedule/6.jpg';
import schedule7 from './../img/warrior/Schedule/7.jpg';

import baumana1 from './../img/warrior/Baumana/1.jpg';
import baumana2 from './../img/warrior/Baumana/2.jpg';
import baumana3 from './../img/warrior/Baumana/3.jpg';
import baumana4 from './../img/warrior/Baumana/4.jpg';
import baumana5 from './../img/warrior/Baumana/5.jpg';
import baumana6 from './../img/warrior/Baumana/6.jpg';

import chiefHelper1 from './../img/warrior/chief_helper/1.jpg';
import chiefHelper2 from './../img/warrior/chief_helper/2.jpg';
import chiefHelper3 from './../img/warrior/chief_helper/3.jpg';
import chiefHelper4 from './../img/warrior/chief_helper/4.jpg';
import chiefHelper5 from './../img/warrior/chief_helper/5.jpg';
import chiefHelper6 from './../img/warrior/chief_helper/6.jpg'; 

import magistr1 from './../img/warrior/magistr/1.jpg';
import magistr2 from './../img/warrior/magistr/2.jpg';
import magistr3 from './../img/warrior/magistr/3.jpg';
import magistr4 from './../img/warrior/magistr/4.jpg';
import magistr5 from './../img/warrior/magistr/5.jpg';
import magistr6 from './../img/warrior/magistr/6.jpg';

import teacher1 from './../img/warrior/Teacher/1.jpg';
import teacher2 from './../img/warrior/Teacher/2.jpg';
import teacher3 from './../img/warrior/Teacher/3.jpg';
import teacher4 from './../img/warrior/Teacher/4.jpg';
import teacher5 from './../img/warrior/Teacher/5.jpg';
import teacher6 from './../img/warrior/Teacher/6.jpg';
import teacher7 from './../img/warrior/Teacher/7.jpg';


let initialState = {
    pathName: 'warrior',
    navBarList: [
        {
            ID: 0,
            title: 'Лицеист',
            iconImgUrl: liceistIconImg,
            mainDescription: [' 1994 - 1997 годы',
                                'Уже после девятого класса я чётко определился с будущей профессией и поступил в Военный лицей № 27. Это, конечно, не суворовское училище, однако весь 10-й и 11-й классы мы ходили в форме, усиленно изучали физику и математику и готовились к поступлению в военный ВУЗ.',
                                'Помимо обычных занятий у нас была строевая подготовка, а также раз в неделю мы ходили на занятия по радиотехнике, физкультуре и огневой подготовке в воинскую часть № 28683, где в последствии мне довелось проходить большую часть своей службы.',
                                'Всего в Академию нас поступило 18 человек из класса. Это был хороший, дружный класс и многие из нас до сих пор друг друга поддерживают.'
                            ],
            photos: [
                {
                    title: '',
                    url: shcool1,
                    description: 'На этом фото четыре подполковника и одни полковник',
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: shcool2,
                    description: 'Самый младший сержант' ,
                    orientation: 'landscape'                
                },
                {
                    title: '',
                    url: shcool3,
                    description: 'И это за два года до первого курса' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: shcool4,
                    description: 'Между двух будущих полковников' ,
                    orientation: 'landscape'                
                },
                {
                    title: '',
                    url: shcool5,
                    description: 'Вместе в верхнем ряду! И так 20 лет!' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: shcool6,
                    description: 'Получение аттестата' ,
                    orientation: 'landscape'                
                },
                
            ]
        },
        {
            ID: 1,
            title: 'Курсант',
            iconImgUrl: fsoIconImg,
            mainDescription: ['1997 - 2002 годы',
                                'Успешно сдав выпускные экзамены в лицее, я без экзаменов поступил в Военный институт правительственной связи ФАПСИ. Именно там, вдали от родителей, я окончательно сформировался как личность.',
                                'Пять лет жизни и учёбы в городе Орле сделали меня офицером, дали мне верных друзей и познакомили с будущей женой. ',
                                'По окончании четвёртого курса мне как претенденту на диплом с отличием было присвоено первое офицерское звание "младший лейтенант". Это был отличный год-).',
                                "Закончив уже не институт, но Академию с красным дипломом, я попал по распределению в Воронеж, в подразделение, выполняющее боевые задачи по обеспечению связи высшему руководству страны"
                            ],
            photos: [
                {
                    title: '',
                    url: academy1,
                    description: 'Я, Фамилия Имя Отчество, торжественно присягаю... ',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: academy2,
                    description: 'Встреча Нового 1998 года!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: academy3,
                    description: 'Первокурсник всегда голодный!',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: academy4,
                    description: 'И почтальон сойдет с ума, разыскивая нас',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: academy5,
                    description: '174 группа!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: academy6,
                    description: 'Вы откуда? Мы из связи!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: academy7,
                    description: 'Первый закрытый канал, как первая любовь - не забывается! ',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: academy8,
                    description: 'Младший лейтенант - мальчик молодой... ',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: academy9,
                    description: 'Первый красный диплом в коллекцию ',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: academy10,
                    description: 'Вот и ВСЁ!!!!',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 2,
            title: 'Связист',
            iconImgUrl: troopsIconImg,
            mainDescription: ['2002-2005 годы',
                                'Распределившись в училище, я неожиданно оказался в боевом подразделении, выполнявшем совсем не учебные задачи.',
                                'Школа войск правительственной связи научила меня относиться к уровню своего профессионализма максимально серьезно и всегда быть готовым взять на себя отвественность за выполнение важных задач.  '
                                
                            ],
            photos: [
                {
                    title: '',
                    url: troops1,
                    description: 'Подразделение с боевыми задачами...',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: troops2,
                    description: 'Связь в воздухе звенит...',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: troops3,
                    description: 'Армейские учения',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: troops4,
                    description: 'Позвони мне, позвони...',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: troops5,
                    description: 'Главное - мачту не завалить!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: troops6,
                    description: 'Командарм остался доволен',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: troops7,
                    description: 'И в поле, и на плацу - лучшие!',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 3,
            title: 'Кандидат',
            iconImgUrl: baumanaIconImg,
            mainDescription: ['2004-2009 годы',
                                'Продолжая служить в группе узлов специальной связи, я, следуя своему жизненному кредо: "Совершенство не цель, но направление движения!", начал заниматься научной деятельностью.',
                                'Между первой научной статьёй по нелинейной радиолокации и защитой диссертации в МГТУ им. Н. Э. Баумана прошло пять долгих, плодотворных лет.',
                                'Моя научная работа не осталась незамеченной руководством училища, и мне предложили перейти в Учебный отдел.'
                            ],
            photos: [
                {
                    title: '',
                    url: baumana1,
                    description: 'Теория без практики мертва. Эксперимент...' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: baumana2,
                    description: 'Расчёты, расчёты' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: baumana3,
                    description: 'Модели, модели' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: baumana4,
                    description: 'Та самая БАУМАНКА' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: baumana5,
                    description: 'Чистовик готов!' ,
                    orientation: 'landscape'                
                },
                {
                    title: '',
                    url: baumana6,
                    description: 'Справка о том, что я не дурак-)' ,
                    orientation: 'portrait'                
                },
                
            ]
        },
        {
            ID: 4,
            title: 'Планер',
            iconImgUrl: sheduleIconImg,
            mainDescription: ['2005-2009 годы',
                                'Четыре года в отделении планирования и анализа научили меня вниманию к деталям и развили стратегическое мышление.',
                                'Именно там я научился декомпозировать одну сложную и важную задачу на ряд простых и небольших задач.',
                                'Я был первым в истории института, кто составил расписание на весь семестр к началу семестра! '
                            ],
            photos: [
                {
                    title: '',
                    url: schedule1,
                    description: 'Первое расписание на семестр готово!' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: schedule2,
                    description: 'После парада...' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: schedule3,
                    description: 'Что ни праздник, то спортивный ' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: schedule4,
                    description: 'Птица мира' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: schedule5,
                    description: 'День Победы - любимый праздник!' ,
                    orientation: 'portrait'                
                },
                {
                    title: '',
                    url: schedule6,
                    description: 'Молодым везде у нас дорога' ,
                    orientation: 'landscape'                
                },
                {
                    title: '',
                    url: schedule7,
                    description: 'Смену подготовил, пора на повышение!' ,
                    orientation: 'portrait'                
                },
                
            ]
        },
        {
            ID: 5,
            title: 'Старпом',
            iconImgUrl: chiefHelperIconImg,
            mainDescription: ['2009-2015 годы',
                                'После четырёх лет успешной работы в учебном отделе и защиты диссертации мне предложили должность старшего помощника начальника учебного отдела.',
                                'Я отвечал за такие направления деятельности института, как: служебно-боевая подготовка, дополнительное профессиональное образование, государственная итоговая аттестация, стажировка, рейтинги курсантов и многие-многие другие. ',
                                'Служба в руководстве института научила меня принимать важные решения, обосновывать их наобходимость руководству, а также нести ответственность за эти решения.',
                                'Также, работа в руководстве института позволила мне получить навыки делового общения с руководителями высшего звена.'
                            ],
            photos: [
                {
                    title: '',
                    url: chiefHelper1,
                    description: 'Любимый и дружный Учебный отдел!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: chiefHelper2,
                    description: 'Огневая - это наше всё!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: chiefHelper3,
                    description: 'Сам организовал, сам пострелял!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: chiefHelper4,
                    description: 'Это только с виду работа офисная-)',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: chiefHelper5,
                    description: 'Лучший старпом всех времён!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: chiefHelper6,
                    description: 'Было на кого опереться!',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 6,
            title: 'Магистр',
            iconImgUrl: magistrIconImg,
            mainDescription: ['2013-2015 годы',
                                'Работая в управлении института, я понимал, что для повышения эффективности моей работы необходимы управленческие навыки.',
                                'Образование магистра по направлению "Государственное и муниципальное управление" Воронежского государственного университета дало мне их в полном объёме.'
                            ],
            photos: [
                {
                    title: '',
                    url: magistr1,
                    description: 'Опять студент!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: magistr2,
                    description: 'ВГУ',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: magistr3,
                    description: 'Магистров-управленцев готовят здесь',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: magistr4,
                    description: 'Опять защита диссертации. Теперь магистерской ',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: magistr5,
                    description: 'Новая порция управленцев готова!',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: magistr6,
                    description: 'Еще один красненький в коллекцию',
                    orientation: 'portrait'                 
                },
                
            ]
        },
        {
            ID: 7,
            title: 'Преподаватель',
            iconImgUrl: teacherIconImg,
            mainDescription: ['2015 - 2020 ',
                                'Работая в штабе, я чувствовал, что начинаю забывать, что такое "Связь". Мне не хватало творческой составляющей в моей работе. Поэтому, когда мне предложили стать старшим преподавателем, согласился не раздумывая. ',
                                'За пять лет на кафедре я стал специалистом в области компьютерных и мультисервисных сетей, а также средств и систем радиосвязи. Помимо основного направления деятельности довелось разрабатывать и вести курсы повышения квалификации "Кладовщик" и "Начальник склада".',
                                'С января 2019-го года под моим непосредственным руководством было разработано и запущено на кафедре новое направление подготовки: "Электромонтёр охранно-пожарной сигнализации".',
                                'За годы преподавания мною разработано и зарегистрировано два инновационных метода, получено множество удостоверений на рационализаторские предложения и свидетельств о регистрации программ для ЭВМ. Разработано девять пособий и практикумов.'
                            ],
            photos: [
                {
                    title: '',
                    url: teacher1,
                    description: 'Мультисервисные сети строятся так..',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: teacher2,
                    description: 'Кто-то в классе, а мы - в полях... Учения ',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: teacher3,
                    description: 'Дослужился до начальника полка связи! Хоть и учебного',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: teacher4,
                    description: 'В Москве, на встрече лучших сотрудников с руководством ФСО России',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: teacher5,
                    description: 'Мало кто может похвастать фото, где он пьет в Александровском зале Кремля',
                    orientation: 'landscape'                 
                },
                {
                    title: '',
                    url: teacher6,
                    description: 'Семинар по системам безопасности объектов',
                    orientation: 'portrait'                 
                },
                {
                    title: '',
                    url: teacher7,
                    description: 'Осваиваем новое направление подготовки',
                    orientation: 'portrait'                 
                },
                
            ]
        },
    ]
};
  
export type wayOfWarriorInitialStateType = typeof initialState;

type ActionType = any;

const wayOfWarriorPageReducer = (state = initialState,
    action: ActionType): wayOfWarriorInitialStateType => {
        return state;
      };
  
  export default wayOfWarriorPageReducer;