import teacher1 from "../assets/images/pop-teacher-1.jpg"
import teacher2 from "../assets/images/pop-teacher-5.jpg"
import teacher3 from "../assets/images/pop-teacher-3.jpg"
import teacher4 from "../assets/images/pop-teacher-4.jpg"
import teacher5 from "../assets/images/tacher-1.png"
import teacher6 from "../assets/images/tacher-2.png"
import teacher7 from "../assets/images/tacher-3.png"
import teacher8 from "../assets/images/tacher-4.png"
import teacher9 from "../assets/images/team-3.png"
import teacher10 from "../assets/images/team-4.png"
import teacher13 from "../assets/images/team-3.png"
import teacher14 from "../assets/images/team-1.png"
import teacher18 from "../assets/images/team-1.png"

export const teachers = [
    {
        id: 1,
        name: 'محمد صبحى محمد',
        subjects: ["اللغة الإنجليزية", "الرياضيات", "التاريخ"],
        grades: ["الصف الخامس", "الصف الرابع"],
        rate: 4.3,
        ratingno: 412,
        gender: "ذكر",
        country: "المملكة العربية السعودية",
        city: "الرياض",
        location: "التعاون",
        image: teacher1,
        Introduction: "أنا مدرس متمرس ولدي شغف بتعليم الطلاب بطريقة مبسطة وفعالة. أحمل خبرة تزيد عن عشر سنوات في تدريس المواد الأساسية وأحرص دائمًا على تحقيق تقدم ملحوظ في مستوى الطلاب.",
        experience: [
            {
                title: "مدرس لغة إنجليزية",
                school: "مدرسة الريادة الدولية",
                desc: "تدريس مادة اللغة الإنجليزية وإعداد الطلاب للامتحانات الرسمية مع تحقيق نتائج متميزة.",
                startDate: "فبراير 2010",
                endDate: "يناير 2015",
            },
            {
                title: "مدرس تاريخ",
                school: "مدرسة القمة الوطنية",
                desc: "تدريس التاريخ مع التركيز على تفاعل الطلاب وإشراكهم في الأنشطة التعليمية.",
                startDate: "فبراير 2015",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 2,
        name: 'محمد مسعد خالد',
        subjects: ["اللغة الإنجليزية", "الرياضيات", "العلوم"],
        grades: ["الصف الخامس", "الصف الثالث"],
        rate: 4.5,
        ratingno: 512,
        gender: "ذكر",
        country: "المملكة العربية السعودية",
        city: "جدة",
        location: "حي النزهة",
        image: teacher2,
        Introduction: "مدرس متخصص في التعليم الابتدائي مع خبرة واسعة في تعزيز مهارات الطلاب الأكاديمية من خلال أساليب مبتكرة.",
        experience: [
            {
                title: "مدرس رياضيات",
                school: "مدرسة الأمل النموذجية",
                desc: "إعداد الطلاب للمسابقات التعليمية وتقديم منهج رياضي متكامل.",
                startDate: "يناير 2014",
                endDate: "مارس 2017",
            },
            {
                title: "مدرس علوم",
                school: "مدرسة المستقبل الدولية",
                desc: "تدريس العلوم باستخدام تقنيات حديثة وأساليب تعليم تفاعلية.",
                startDate: "أبريل 2017",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 3,
        name: 'محمد عبد الرازق',
        subjects: ["اللغة الإنجليزية", "التاريخ"],
        grades: ["الصف الرابع", "الصف الأول"],
        rate: 4.1,
        ratingno: 380,
        gender: "ذكر",
        country: "مصر",
        city: "القاهرة",
        location: "مدينة نصر",
        image: teacher3,
        Introduction: "مدرس متحمس ومختص في تدريس اللغات مع خبرة واسعة في تحسين قدرات الطلاب اللغوية.",
        experience: [
            {
                title: "مدرس لغة إنجليزية",
                school: "مدرسة النيل الدولية",
                desc: "تدريس اللغة الإنجليزية للصفوف الابتدائية وتطوير مناهج جديدة.",
                startDate: "سبتمبر 2013",
                endDate: "يوليو 2018",
            }
        ]
    },
    {
        id: 4,
        name: 'أحمد عصام محمود',
        subjects: ["الرياضيات", "العلوم"],
        grades: ["الصف الثالث", "الصف السادس"],
        rate: 4.7,
        ratingno: 215,
        gender: "ذكر",
        country: "الأردن",
        city: "عمان",
        location: "العبدلي",
        image: teacher4,
        Introduction: "مدرس رياضيات متخصص يهتم بتقديم الدروس بأساليب حديثة ومبتكرة لتعزيز الفهم لدى الطلاب.",
        experience: [
            {
                title: "مدرس رياضيات",
                school: "مدرسة السلام الدولية",
                desc: "تدريس الرياضيات وإعداد الطلاب للاختبارات الدولية.",
                startDate: "أكتوبر 2015",
                endDate: "ديسمبر 2019",
            },
            {
                title: "مدرس علوم",
                school: "مدرسة النخبة الوطنية",
                desc: "تدريس العلوم بأسلوب مبسط مع التركيز على التجارب العملية.",
                startDate: "يناير 2020",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 5,
        name: 'سارة خالد محمد',
        subjects: ["اللغة العربية", "الدراسات الاجتماعية"],
        grades: ["الصف الثاني", "الصف الخامس"],
        rate: 4.2,
        ratingno: 345,
        gender: "أنثى",
        country: "الإمارات العربية المتحدة",
        city: "دبي",
        location: "البرشاء",
        image: teacher5,
        Introduction: "معلمة ذات خبرة كبيرة في تدريس اللغة العربية، تهدف إلى تطوير مهارات الطلاب اللغوية والتعبيرية.",
        experience: [
            {
                title: "مدرسة لغة عربية",
                school: "مدرسة الوردية",
                desc: "تدريس اللغة العربية بأسلوب مشوق وتفاعلي.",
                startDate: "سبتمبر 2011",
                endDate: "يونيو 2016",
            },
            {
                title: "مدرسة دراسات اجتماعية",
                school: "مدرسة الجيل الجديد",
                desc: "إعداد دروس في التاريخ والجغرافيا مع استخدام وسائل تعليم حديثة.",
                startDate: "أغسطس 2016",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 6,
        name: 'ليلى ناصر أحمد',
        subjects: ["العلوم", "الرياضيات"],
        grades: ["الصف الرابع", "الصف الخامس"],
        rate: 4.6,
        ratingno: 290,
        gender: "أنثى",
        country: "مصر",
        city: "الإسكندرية",
        location: "سموحة",
        image: teacher6,
        Introduction: "معلمة مبدعة في تدريس العلوم والرياضيات، تركز على إشراك الطلاب في الأنشطة التفاعلية.",
        experience: [
            {
                title: "مدرسة علوم",
                school: "مدرسة النور الدولية",
                desc: "تدريس مادة العلوم مع تنظيم تجارب علمية.",
                startDate: "يناير 2013",
                endDate: "مايو 2018",
            },
            {
                title: "مدرسة رياضيات",
                school: "مدرسة الشروق",
                desc: "تقديم دروس رياضيات تفاعلية.",
                startDate: "يونيو 2018",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 7,
        name: 'حسن علي محمود',
        subjects: ["الرياضيات", "الفيزياء"],
        grades: ["الصف السادس", "الصف السابع"],
        rate: 4.8,
        ratingno: 550,
        gender: "ذكر",
        country: "المملكة العربية السعودية",
        city: "الدمام",
        location: "حي الفيصلية",
        image: teacher7,
        Introduction: "مدرس ذو خبرة طويلة في تدريس الرياضيات والفيزياء بأسلوب يجعل المواد ممتعة وسهلة الفهم.",
        experience: [
            {
                title: "مدرس رياضيات",
                school: "مدرسة الهدى الدولية",
                desc: "تدريس الرياضيات وتبسيط المفاهيم الرياضية المعقدة.",
                startDate: "مارس 2012",
                endDate: "أبريل 2017",
            },
            {
                title: "مدرس فيزياء",
                school: "مدرسة النخبة للعلوم",
                desc: "تقديم تجارب عملية تفاعلية لتبسيط مفاهيم الفيزياء.",
                startDate: "مايو 2017",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 8,
        name: 'رنا يوسف عبد الله',
        subjects: ["اللغة العربية", "القرآن الكريم"],
        grades: ["الصف الأول", "الصف الثالث"],
        rate: 4.4,
        ratingno: 410,
        gender: "أنثى",
        country: "مصر",
        city: "القاهرة",
        location: "المعادي",
        image: teacher8,
        Introduction: "متخصصة في تدريس اللغة العربية والقرآن الكريم للأطفال بأسلوب ممتع وسلس.",
        experience: [
            {
                title: "مدرسة لغة عربية",
                school: "مدرسة دار العلوم",
                desc: "تدريس اللغة العربية وتعليم القواعد بطريقة مبسطة.",
                startDate: "سبتمبر 2014",
                endDate: "يونيو 2019",
            },
            {
                title: "مدرسة قرآن كريم",
                school: "مدرسة الفتح لتحفيظ القرآن",
                desc: "تحفيظ القرآن وتجويده للأطفال بأسلوب تفاعلي.",
                startDate: "يوليو 2019",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 9,
        name: 'علياء محمد أحمد',
        subjects: ["العلوم", "الكيمياء"],
        grades: ["الصف الرابع", "الصف الخامس"],
        rate: 4.3,
        ratingno: 270,
        gender: "أنثى",
        country: "الأردن",
        city: "عمان",
        location: "شارع المدينة",
        image: teacher9,
        Introduction: "معلمة متخصصة في العلوم والكيمياء، تركز على إشراك الطلاب في تجارب علمية مثيرة.",
        experience: [
            {
                title: "مدرسة علوم",
                school: "مدرسة الأمل الجديد",
                desc: "تدريس مادة العلوم بطريقة تفاعلية.",
                startDate: "فبراير 2015",
                endDate: "أبريل 2018",
            },
            {
                title: "مدرسة كيمياء",
                school: "مدرسة النخبة الدولية",
                desc: "تدريس الكيمياء مع تنظيم أنشطة تجريبية.",
                startDate: "مايو 2018",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 10,
        name: 'أحمد جمال الدين',
        subjects: ["اللغة الإنجليزية", "التاريخ"],
        grades: ["الصف السادس", "الصف السابع"],
        rate: 4.1,
        ratingno: 185,
        gender: "ذكر",
        country: "الكويت",
        city: "الكويت",
        location: "السالمية",
        image: teacher10,
        Introduction: "مدرس لغة إنجليزية وتاريخ يحب إشراك الطلاب في محادثات ودروس تفاعلية.",
        experience: [
            {
                title: "مدرس لغة إنجليزية",
                school: "مدرسة الأفق الدولية",
                desc: "تقديم دروس تفاعلية لتعزيز مهارات اللغة الإنجليزية.",
                startDate: "يناير 2016",
                endDate: "ديسمبر 2020",
            },
            {
                title: "مدرس تاريخ",
                school: "مدرسة القمة",
                desc: "تدريس التاريخ مع أنشطة تتضمن مناقشات وأبحاث.",
                startDate: "يناير 2021",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 11,
        name: 'سلمى سعيد محمد',
        subjects: ["الرياضيات", "الإحصاء"],
        grades: ["الصف الخامس", "الصف الثامن"],
        rate: 4.5,
        ratingno: 220,
        gender: "أنثى",
        country: "البحرين",
        city: "المنامة",
        location: "مدينة عيسى",
        image: teacher5,
        Introduction: "مدرسة متخصصة في تدريس الرياضيات والإحصاء، تعتمد على طرق تدريس حديثة ومبتكرة.",
        experience: [
            {
                title: "مدرسة رياضيات",
                school: "مدرسة النور النموذجية",
                desc: "تقديم دروس رياضيات مبسطة مع الأنشطة التفاعلية.",
                startDate: "سبتمبر 2013",
                endDate: "مايو 2018",
            },
            {
                title: "مدرسة إحصاء",
                school: "مدرسة المستقبل",
                desc: "تدريس مادة الإحصاء بطريقة تفاعلية ومبسطة.",
                startDate: "يونيو 2018",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 12,
        name: 'خالد فوزي أحمد',
        subjects: ["العلوم", "الرياضيات"],
        grades: ["الصف الرابع", "الصف الثالث"],
        rate: 4.7,
        ratingno: 390,
        gender: "ذكر",
        country: "العراق",
        city: "بغداد",
        location: "حي الكرادة",
        image: teacher3,
        Introduction: "مدرس ماهر في تدريس العلوم والرياضيات مع خبرة في تبسيط المناهج لطلاب المرحلة الابتدائية.",
        experience: [
            {
                title: "مدرس علوم",
                school: "مدرسة بغداد الدولية",
                desc: "إعطاء دروس عملية تساعد الطلاب على فهم المواد العلمية.",
                startDate: "فبراير 2014",
                endDate: "يوليو 2019",
            },
            {
                title: "مدرس رياضيات",
                school: "مدرسة العلم النموذجية",
                desc: "تقديم دروس رياضيات مشوقة.",
                startDate: "أغسطس 2019",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 13,
        name: 'منال حسن صالح',
        subjects: ["اللغة العربية", "التربية الإسلامية"],
        grades: ["الصف الأول", "الصف الرابع"],
        rate: 4.3,
        ratingno: 300,
        gender: "أنثى",
        country: "السعودية",
        city: "المدينة المنورة",
        location: "العوالي",
        image: teacher13,
        Introduction: "معلمة متميزة في تدريس اللغة العربية والتربية الإسلامية، تهدف إلى تعزيز الفهم الثقافي والديني.",
        experience: [
            {
                title: "مدرسة لغة عربية",
                school: "مدرسة الروابي",
                desc: "تقديم دروس متقدمة في النحو والقراءة.",
                startDate: "يناير 2011",
                endDate: "مارس 2015",
            },
            {
                title: "مدرسة تربية إسلامية",
                school: "مدرسة الفلاح",
                desc: "تدريس القيم الإسلامية وتاريخ الفقه.",
                startDate: "أبريل 2015",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 14,
        name: 'يوسف أحمد منصور',
        subjects: ["الفيزياء", "الرياضيات"],
        grades: ["الصف السابع", "الصف الثامن"],
        rate: 4.6,
        ratingno: 350,
        gender: "ذكر",
        country: "الإمارات",
        city: "الشارقة",
        location: "النهدة",
        image: teacher14,
        Introduction: "معلم فيزياء ورياضي شغوف، يستخدم تقنيات متقدمة لتبسيط المواد وتوضيح الأفكار المعقدة.",
        experience: [
            {
                title: "مدرس فيزياء",
                school: "مدرسة الشارقة الدولية",
                desc: "تقديم دروس تفاعلية ومختبرية.",
                startDate: "أبريل 2016",
                endDate: "أغسطس 2020",
            },
            {
                title: "مدرس رياضيات",
                school: "مدرسة النخبة",
                desc: "تدريس الرياضيات بطرق مشوقة.",
                startDate: "سبتمبر 2020",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 15,
        name: 'هدى علي إبراهيم',
        subjects: ["اللغة الإنجليزية", "التاريخ"],
        grades: ["الصف السادس", "الصف التاسع"],
        rate: 4.2,
        ratingno: 250,
        gender: "أنثى",
        country: "لبنان",
        city: "بيروت",
        location: "الحمرا",
        image: '',
        Introduction: "مدرسة إنجليزية وتاريخ تساعد الطلاب على فهم اللغة واكتشاف التاريخ بأسلوب شيق.",
        experience: [
            {
                title: "مدرسة لغة إنجليزية",
                school: "مدرسة بيروت النموذجية",
                desc: "تدريس الإنجليزية مع تعزيز المحادثة.",
                startDate: "فبراير 2013",
                endDate: "يوليو 2017",
            },
            {
                title: "مدرسة تاريخ",
                school: "مدرسة الريادة",
                desc: "تنظيم رحلات تعليمية لتعزيز التعلم.",
                startDate: "أغسطس 2017",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 16,
        name: 'سامر طارق حسن',
        subjects: ["العلوم", "الفيزياء"],
        grades: ["الصف الخامس", "الصف الثامن"],
        rate: 4.8,
        ratingno: 580,
        gender: "ذكر",
        country: "فلسطين",
        city: "القدس",
        location: "بيت حنينا",
        image: '',
        Introduction: "معلم متفاني في العلوم والفيزياء، يسعى لإبراز حب الاستكشاف والابتكار لدى الطلاب.",
        experience: [
            {
                title: "مدرس علوم",
                school: "مدرسة النور",
                desc: "تقديم منهج متكامل يدمج بين التعليم النظري والتطبيقي.",
                startDate: "يونيو 2010",
                endDate: "أكتوبر 2015",
            },
            {
                title: "مدرس فيزياء",
                school: "مدرسة القدس الدولية",
                desc: "تدريس مبادئ الفيزياء عبر تجارب علمية.",
                startDate: "نوفمبر 2015",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 17,
        name: 'ليلى محمد عبد الرحمن',
        subjects: ["الرياضيات", "الإحصاء"],
        grades: ["الصف السادس", "الصف التاسع"],
        rate: 4.4,
        ratingno: 320,
        gender: "أنثى",
        country: "مصر",
        city: "الإسكندرية",
        location: "سيدي بشر",
        image: teacher7,
        Introduction: "معلمة متمرسة في الرياضيات والإحصاء، تهتم بتبسيط المفاهيم الرياضية للطلاب من مختلف المراحل.",
        experience: [
            {
                title: "مدرسة رياضيات",
                school: "مدرسة المستقبل",
                desc: "تدريس الرياضيات بأسلوب يعتمد على التفاعل مع الطلاب.",
                startDate: "أبريل 2011",
                endDate: "أغسطس 2016",
            },
            {
                title: "مدرسة إحصاء",
                school: "مدرسة النيل الحديثة",
                desc: "إعطاء دروس في الإحصاء وشرح التطبيقات العملية.",
                startDate: "سبتمبر 2016",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 18,
        name: 'محمود حسن سليمان',
        subjects: ["التربية الإسلامية", "اللغة العربية"],
        grades: ["الصف الأول", "الصف الثاني"],
        rate: 4.5,
        ratingno: 410,
        gender: "ذكر",
        country: "السودان",
        city: "الخرطوم",
        location: "بحري",
        image: teacher18,
        Introduction: "مدرس تربية إسلامية ولغة عربية يهدف إلى غرس القيم الأخلاقية وفهم اللغة في نفوس الطلاب.",
        experience: [
            {
                title: "مدرس تربية إسلامية",
                school: "مدرسة النور",
                desc: "تدريس القيم والمبادئ الإسلامية.",
                startDate: "فبراير 2012",
                endDate: "ديسمبر 2017",
            },
            {
                title: "مدرس لغة عربية",
                school: "مدرسة النيل الأزرق",
                desc: "تدريس قواعد اللغة العربية والقراءة.",
                startDate: "يناير 2018",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 19,
        name: 'نورا عبد الكريم الصالح',
        subjects: ["الكيمياء", "الأحياء"],
        grades: ["الصف السابع", "الصف العاشر"],
        rate: 4.6,
        ratingno: 290,
        gender: "أنثى",
        country: "السعودية",
        city: "جدة",
        location: "حي الروضة",
        image: '',
        Introduction: "معلمة شغوفة بالكيمياء والأحياء، تركز على تعزيز التجارب المعملية لفهم النظريات العلمية.",
        experience: [
            {
                title: "مدرسة كيمياء",
                school: "مدرسة الفيصل",
                desc: "شرح المفاهيم الكيميائية بطرق عملية.",
                startDate: "مارس 2014",
                endDate: "يوليو 2019",
            },
            {
                title: "مدرسة أحياء",
                school: "مدرسة العلم النافع",
                desc: "تدريس الأحياء مع أنشطة مختبرية تفاعلية.",
                startDate: "أغسطس 2019",
                endDate: "الآن",
            }
        ]
    },
    {
        id: 20,
        name: 'فاطمة عمر الهاشمي',
        subjects: ["اللغة الإنجليزية", "الجغرافيا"],
        grades: ["الصف الثامن", "الصف الحادي عشر"],
        rate: 4.7,
        ratingno: 370,
        gender: "أنثى",
        country: "الإمارات",
        city: "دبي",
        location: "البرشاء",
        image: '',
        Introduction: "مدرسة متميزة في تدريس اللغة الإنجليزية والجغرافيا، تستخدم أساليب تعليمية حديثة لرفع مستوى الطلاب.",
        experience: [
            {
                title: "مدرسة لغة إنجليزية",
                school: "مدرسة الأمل",
                desc: "تدريس مهارات اللغة من قراءة وكتابة.",
                startDate: "يونيو 2015",
                endDate: "أبريل 2020",
            },
            {
                title: "مدرسة جغرافيا",
                school: "مدرسة الحكمة",
                desc: "إعطاء دروس في الجغرافيا مع استخدام وسائل تعليمية حديثة.",
                startDate: "مايو 2020",
                endDate: "الآن",
            }
        ]
    }
]

