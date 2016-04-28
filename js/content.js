var words = {
    month: {"en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "ru": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    },
    other: {"en": ["Settings","Notifications","Sounds","Last Date", "Last Time", "h", "m", "s", "Callanetic Workout", "Start Training to see your training statistics", "Refresh the data?", "Take a break","Version 1.0"],
            "ru": ["Настройки","Напоминание","Звуки","Дата", "Время", "ч", "м", "с", "Калланетика Фитнес", "Начните тренироваться, чтобы увидеть статистику Ваших тренировок", "Сбросить данные?","Сделай перерыв", "Версия 1.0"]
    },
    Programms:[
            {
                title: {"en": "Abdominal and core",
                        "ru": "Пресс и мышцы кора"},
                img: "css/img/Programm_0.jpg",
                txt: {
                    "en": "Forget about boring basic crunches! Vary your ABS routine with these unusual static exercises. The program helps to properly work your six-pack, prevent back pain, boost your agility, and increase your flexibility. The main rule of this workout is quality over quantity! Get the most out of each exercise and enjoy the result. ",
                    "ru": "Забудьте о скучных скручиваниях для пресса! Разнообразьте вашу тренировку на пресс необычными статическими упражнениями. Данная тренировка помогает качественно проработать мышцы пресса, предотвратить боли в спине, развить подвижность и гибкость. Главное правило этой тренировки: качество важнее количества! Получите максимум от каждого повторения и наслаждайтесь результатом."},
                training:{
                    training_title: {"en":["Plank with a chair","No-Motions Push Ups","Legs Up!","Triangle", "Back Stretching", "Forearms Stretching", "Hanging", "Move the wall"],
                                     "ru":["Планка со Стулом", "Статические Отжимания", "Ноги Вверх!", "Треугольник", "Спина", "Предплечья", "Висим в Воздухе", "Сдвинь Стену"]
                                    },
                    training_icons: [
                        ["css/img/icons/programm1_Training1_0.svg", "css/img/icons/programm1_Training1_1.svg"],
                        ["css/img/icons/programm1_Training2_0.svg", "css/img/icons/programm1_Training2_1.svg"],
                        ["css/img/icons/programm1_Training3_0.svg", "css/img/icons/programm1_Training3_1.svg"],
                        ["css/img/icons/programm1_Training4_0.svg", "css/img/icons/programm1_Training4_1.svg"],
                        ["css/img/icons/programm1_Training5_0.svg", "css/img/icons/programm1_Training5_1.svg"],
                        ["css/img/icons/programm1_Training6_0.svg", "css/img/icons/programm1_Training6_1.svg"],
                        ["css/img/icons/programm1_Training7_0.svg", "css/img/icons/programm1_Training7_1.svg"],
                        ["css/img/icons/programm1_Training8_0.svg", "css/img/icons/programm1_Training8_1.svg"]
                        ],
                    training_txt: {
                        "en": ["Lower yourself down onto your forearms, pull your abdominals in tight (belly button to spine) with back flat; create a straight line from head to heels.",
                               "Create a flat back from head to heels (similar to plank position), pulling your abdominals in tight. Lower your body, bending arms until elbows are at 90 degrees. Keep for 12 seconds and push up to your starting position. Repeat 4 times.",
                               "Sit on a chair, keep your back straight. Lift your feet off the floor. Keep the position for 15 seconds and release.",
                               "Simultaneously lift your legs toward the ceiling.  Keep the position for 15 seconds. Gradually return to the neutral position. Repeat 3 times.",
                               "Slowly bend forward, holding the chair. Feel the stretching in your lower back muscles. Keep for 20 seconds and repeat.",
                               "Switch the weight on your arms and hold the position for 10 seconds. Repeat 3 times.","Lean on your arms and hang for 10 seconds. Repeat.",
                               "Lean on a wall and try to move it forward, tightening your arm muscles. Count till 10, then release. Repeat 4 times."
                         ],
                         "ru":["Опуститесь на предплечья, напрягите мышцы пресса и подтяните живот. Ваше тело должно представлять собой прямую линию от ступней до головы.",
                               "Ваше тело должно представлять собой прямую линию от ступней до головы (как и в упражнении «Планка»). Опуститесь ниже, сгибая руки в локтях на 90º, задержитесь в этой позе на 12 секунд и выпрямите руки до исходного положения. Повторите 4 раза.",
                               "Сядьте на стул, держите спину прямо. Поднимите ступни от пола. Задержитесь в этом положении на 10 счетов и расслабьтесь.",
                               "Одновременно поднимите ноги к потолку. Задержитесь в этой позе на 10 секунд. Медленно вернитесь в исходное положение. Повторите 3 раза.",
                               "Встаньте напротив стула. Медленно наклонитесь вперед, держась прямыми руками за спинку стула. Отведите бедра назад и почувствуйте натяжение в нижней части спины.",
                               "Перенесите вес на руки и задержитесь в этом положении на 10 секунд. Повторите 3 раза.",
                               "Перенесите весь вес на руки и повисните между опорами, подняв ноги. ",
                               "Упритесь руками в стену, как будто вы стараетесь ее сдвинуть. Напрягайте мышцы рук. Сосчитайте до 10, затем расслабьтесь. Повторите 4 раза."
                         ]
                    },
                    training_count: [2,4,4,3,2,3,4,4],
                    training_timer: [12,12,15,15,20,10,10,10]
                }
            },
            {
                title: {"en": "Arms and shoulders",
                        "ru": "Руки и плечи"},
                img: "css/img/Programm_1.jpg",
                txt: {
                    "en": "This exercise combination provides you with high intensity in shorter time. Show off your glorious shoulders wearing short sleeves and bathing suits! This program helps you contour your arms and shoulders and make them stronger. Repeat the whole circuit every 2 or 3 days to achieve the best results!",
                    "ru": "Эта комбинация упражнений даст вам высокую эффективность и впечатляющий результат в кратчайший срок. Продемонстрируйте ваши красивые плечи, надев открытый топ или купальник! Эта тренировка поможет очертить контуры мышц и увеличит силу и выносливость."
                },
                training:{
                    training_title: {"en": ["Hand Squeeze Exercise", "Blades Stretch", "Hands Back", "Palms Pressure", "Forearms Stretching", "Hanging", "No-Motions Push Ups", "Move the wall"],
                                     "ru": ["Сжатие Ладоней", "Лопатки", "Руки Назад", "Замок", "Предплечья", "Висим в Воздухе", "Статические Отжимания", "Сдвинь Стену"]
                    },
                    training_icons: [["css/img/icons/programm2_Training1_0.svg", "css/img/icons/programm2_Training1_1.svg"],
                                    ["css/img/icons/programm2_Training2_0.svg", "css/img/icons/programm2_Training2_1.svg"],
                                    ["css/img/icons/programm2_Training3_0.svg", "css/img/icons/programm2_Training3_1.svg"],
                                    ["css/img/icons/programm2_Training4_0.svg", "css/img/icons/programm2_Training4_1.svg"],
                                    ["css/img/icons/programm2_Training5_0.svg", "css/img/icons/programm2_Training5_1.svg"],
                                    ["css/img/icons/programm2_Training6_0.svg", "css/img/icons/programm2_Training6_1.svg"],
                                    ["css/img/icons/programm2_Training7_0.svg", "css/img/icons/programm2_Training7_1.svg"],
                                    ["css/img/icons/programm2_Training8_0.svg", "css/img/icons/programm2_Training8_1.svg"]
                    ],
                    training_txt: {
                        "en": ["Flex your core muscles. Look forward and raise your chin slightly, in order to keep a neutral, relaxed neck position. Press your hands firmly together until your upper and lower arms are flexed. Hold the position for 12 seconds. Repeat.",
                               "Stand tall, feet slightly wider than shoulder-width apart, knees slightly bent. Interlock your fingers and push your hands as high as possible, allowing your upper back to relax.",
                               "Lift your hands as high as you possibly can and hold the position for 15 seconds. Repeat.","Simultaneously press your palms on each other. Count till 15 and repeat.",
                               "Switch the weight on your arms and hold the position. Repeat 2 times.",
                               "Lean on your arms and hang for 10 seconds. Repeat 4 times.",
                               "Create a flat back from head to heels (similar to plank position), pulling your abdominals in tight. Lower your body, bending arms until elbows are at 90 degrees. Keep for 10 seconds and push up to your starting position. Repeat 3 times.",
                               "Lean on a wall and try to move it forward, tightening your arm muscles. Count till 10, then release. Repeat 4 times."
                        ],
                        "ru": ["Смотрите прямо, мышцы шей расслаблены. Вытяните руки перед собой и сожмите кулаки.    ",
                               "Соедините и скрестите пальцы рук за спиной, поднимите руки как можно выше. Почувствуйте, как расслабляется верхняя часть спины.",
                               "Отведите руки назад поднимите как можно выше. Задержитесь в этой позиции.",
                               "Соедините ладони перед собой и сильно сожмите их.",
                               "Перенесите вес на руки и задержитесь в этом положении на 10 секунд. Повторите 3 раза.",
                               "Перенесите весь вес на руки и повисните между опорами, подняв ноги.",
                               "Ваше тело должно представлять собой прямую линию от ступней до головы ( как и в упражнении «Планка»). Опуститесь ниже, сгибая руки в локтях на 90º, задержитесь в этой позе на 12 секунд и выпрямите руки до исходного положения. Повторите 4 раза.",
                               "Упритесь руками в стену, как будто вы стараетесь ее сдвинуть. Напрягайте мышцы рук. Сосчитайте до 10, затем расслабьтесь. Повторите 4 раза."
                        ]
                    },
                    training_count: [2,4,4,3,2,3,4,4],
                    training_timer: [12,12,15,15,20,10,10,10]
                }
            },
            {
                title: {"en": "Buttocks and hips",
                        "ru": "Ягодицы и бедра"},
                img: "css/img/Programm_2.jpg",
                txt: {"en": "Buttocks and hips are usually a trouble zone, which needs more of your attention. Work your lower part from every angle. Train the deepest muscles of your buttocks and thighs to get perfect curves. These simple exercises are able to fire up your fat-burning and build lean muscle at the same time! ",
                      "ru": "Ягодицы и бедра часто являются проблемной зоной и требуют больше внимания. Проработайте нижнюю часть тела со всех сторон. Тренируйте самые глубокие мышцы, чтобы добиться идеальных форм. Эти простые упражнения способны запустить процесс жиросжигания, а также помогут привести мышцы в тонус!"} ,
                training:{
                    training_title: {
                        "en":["Squats with the wall","Motionless Lunges","Leg Extension","Motionless Squat Exercise","Gluteus Stretching","Triangle","Legs Up!","Hips and Thighs Stretch"],
                        "ru": ["Приседы у Стены","Статические Выпады","Выпрямление Ног","Статические Приседы","Ягодицы", "Треугольник","Ноги Вверх!","Бедра и Ноги"]
                    },
                    training_icons: [
                        ["css/img/icons/programm3_Training1_0.svg", "css/img/icons/programm3_Training1_1.svg"],
                        ["css/img/icons/programm3_Training2_0.svg", "css/img/icons/programm3_Training2_1.svg"],
                        ["css/img/icons/programm3_Training3_0.svg", "css/img/icons/programm3_Training3_1.svg"],
                        ["css/img/icons/programm3_Training4_0.svg", "css/img/icons/programm3_Training4_1.svg"],
                        ["css/img/icons/programm3_Training5_0.svg", "css/img/icons/programm3_Training5_1.svg"],
                        ["css/img/icons/programm3_Training6_0.svg", "css/img/icons/programm3_Training6_1.svg"],
                        ["css/img/icons/programm3_Training7_0.svg", "css/img/icons/programm3_Training7_1.svg"],
                        ["css/img/icons/programm3_Training8_0.svg", "css/img/icons/programm3_Training8_1.svg"]
                    ],
                    training_txt: {
                        "en": ["Lean against a wall. Push your body weight against your back as you move your feet 2 feet (0.6 m) away from the wall. Slide down the wall till your thighs are at a 90 degree angle with your shins. Hold the position for 12 seconds and repeat.",
                               "Perform a lunge, switch your weight on the front leg and keep the position for 12 seconds.",
                               "Keep your back straight. Lift the leg as high as you can and count till 15. Release and repeat for the other leg.",
                               "Slowly squat with your hands straight. Keep your back straight. Hold the position for 15 seconds and release.",
                               "Take a pose, find the balance and keep the position for 20 seconds. Repeat for the other leg.",
                               "Simultaneously lift your legs toward the ceiling.  Keep the position for 10 seconds. Gradually return to the neutral position. Repeat 3 times.",
                               "Sit on a chair, keep your back straight. Lift your feet off the floor. Keep the position and release.",
                               "Bend the right leg so that the right thigh is parallel with the ground and the right lower leg is vertical. Gradually lower the body and hold for 12-15 seconds. Repeat by turning and facing to the left."],
                        "ru": ["Прислонитесь спиной к стене и сделайте 2 шага вперед. Скользите вниз по стене, пока колени не образуют угол 90º. Задержитесь в этой позе на 12 счетов и повторите.",
                               "Выполните выпад, перенесите вес на переднюю ногу и задержитесь в этой позиции.",
                               "Держите спину прямо. Поднимите ногу как можно выше и сосчитайте до 15. Расслабьтесь и повторите, подняв противоположную ногу.",
                               "Медленно опуститесь в приседе. Держите руки перед собой, а спину прямо. Задержитесь на 15 секунд и повторите.",
                               "Медленно наклоняйтесь вперед, поднимая ногу до параллели с полом. Почувствуйте равновесие и задержитесь в этой позиции. Повторите с противоположной ногой.",
                               "Одновременно поднимите ноги к потолку. Задержитесь в этой позе на 10 секунд. Медленно вернитесь в исходное положение. Повторите 3 раза.",
                               "Сядьте на стул, держите спину прямо. Поднимите ступни от пола. Задержитесь в этом положении на 10 счетов и расслабьтесь.",
                               "Встаньте прямо, ноги широко расставлены. Согните левую ногу в колени таким образом, чтобы правое бедро было параллельно полу. Постепенно опускайтесь ниже. Повторите, сменив сторону."]
                    },
                    training_count: [2,4,4,3,2,3,4,4],
                    training_timer: [12,12,15,15,20,10,10,10]
                }
            },
            {
                title: {"en": "Stretching",
                        "ru": "Растяжка"
                },
                img: "css/img/Programm_3.jpg",
                txt: {
                    "en": "Stretching is extremely important to improve your joint range of motion, which helps to improve your athletic performance and decrease your risk of injury. It’s used to prepare your body for an active workout and make it more effective. Don’t forget to stretch after your exercises to help your muscles recover faster. Use it as a daily morning exercises to increase blood flow to the muscle and let your body wake up.",
                    "ru": "Растяжка особенно полезна для развития гибкости, что поможет гораздо быстрее прийти в форму и снизить риск травм при занятиях спортом. Упражнения на растяжку используются для подготовки тела к физической нагрузке, что сделает основную тренировку еще эффективнее. Не забудьте потянуться для завершения тренировки, это поможет мышцам быстрее восстановиться. Тренировка на растяжку также может использоваться как легкая утренняя гимнастика."
                },
                training:{
                    training_title: {
                        "en": ["Blades Stretch","Calf Stretch","Hips and Thighs Stretch","Grab Your Hand","Back Stretching","Hands Back","Motionless Lunges","Gluteus Stretching"],
                        "ru": ["Лопатки","Голени","Бедра и Ноги","Трицепс","Спина","Руки Назад","Статические Выпады","Ягодицы"]
                    },
                    training_icons: [["css/img/icons/programm4_Training1_0.svg", "css/img/icons/programm4_Training1_1.svg"],
                                    ["css/img/icons/programm4_Training2_0.svg", "css/img/icons/programm4_Training2_1.svg"],
                                    ["css/img/icons/programm4_Training3_0.svg", "css/img/icons/programm4_Training3_1.svg"],
                                    ["css/img/icons/programm4_Training4_0.svg", "css/img/icons/programm4_Training4_1.svg"],
                                    ["css/img/icons/programm4_Training5_0.svg", "css/img/icons/programm4_Training5_1.svg"],
                                    ["css/img/icons/programm4_Training6_0.svg", "css/img/icons/programm4_Training6_1.svg"],
                                    ["css/img/icons/programm4_Training7_0.svg", "css/img/icons/programm4_Training7_1.svg"],
                                    ["css/img/icons/programm4_Training8_0.svg", "css/img/icons/programm4_Training8_1.svg"]
                    ],
                    training_txt: {
                        "en": ["Interlock your fingers and push your hands as high as possible, allowing your upper back to relax.",
                               "Lean against the wall, slightly bend your right knee and keep your left leg straight. Try to touch the floor with your left heel. Switch the legs.",
                               "Bend the right leg so that the right thigh is parallel with the ground and the right lower leg is vertical. Gradually lower the body and hold for 12-15 seconds. Repeat by turning and facing to the left.",
                               "Try to catch your hand behind your back. Keep the position for 20 sec. and release. Repeat with the other hand.",
                               "Slowly bend forward, holding the chair. Feel the stretching in your lower back muscles.",
                               "Lift your hands as high as you possibly can and hold the position.",
                               "Perform a lunge, switch your weight on the front leg and keep the position.",
                               "Slowly bend forward and keep your leg parallel to the floor. Find the balance and keep the position. Repeat for the other leg."],
                        "ru": ["Соедините и скрестите пальцы рук за спиной, поднимите руки как можно выше. Почувствуйте, как расслабляется верхняя часть спины.",
                               "Встаньте напротив стены и упритесь в нее руками. Вытяните одну ноги по направлению к стене, противоположное колено немного согните. Повторите для другой ноги.",
                               "Встаньте прямо, ноги широко расставлены. Согните левую ногу в колене таким образом, чтобы правое бедро было параллельно полу. Постепенно опускайтесь ниже. Повторите, сменив сторону. ",
                               "Поднимите правую руку и согните в локте. Предплечье должно оказаться за головой и между лопатками. Возьмитесь левой рукой за правый локоть и потяните вниз.",
                               "Встаньте напротив стула. Медленно наклонитесь вперед, держась прямыми руками за спинку стула. Отведите бедра назад и почувствуйте натяжение в нижней части спины.",
                               "Отведите руки назад и поднимите как можно выше. Задержитесь в этой позиции.",
                               "Выполните выпад, перенесите вес на переднюю ногу и задержитесь в этой позиции.",
                               "Медленно наклоняйтесь вперед, поднимая ногу до параллели с полом. Почувствуйте равновесие и задержитесь в этой позиции. Повторите с противоположной ногой. "]
                    },
                    training_count: [2,4,4,3,2,3,4,4],
                    training_timer: [12,12,15,15,20,10,10,10]
                }
            },
            {
                title: {"en": "All - around",
                        "ru": "Комплексная тренировка"
                },
                img: "css/img/Programm_4.jpg",
                txt: {
                    "en": "It’s a full-body workout that won’t take a long time and a lot of efforts. Suitable for beginners or sportsmen, who just want to try a new fitness trend. From arms to legs - «all in one» combination. Remember: quality over quantity! Hew to this rule to achieve the best results.",
                    "ru": "Эта тренировка охватывает все мышцы тела, не займет много времени и не потребует больших усилий. Подходит для новичков, а также для продвинутых спортсменов. Попробуйте новое направление в фитнесе! От рук и плеч до ног - тренировка «все в одном». Помните: качество важнее количества! Следуйте этому правилу, чтобы получить наилучший результат. "
                },
                training:{
                    training_title: {
                        "en":["Back Stretching","Hips and Thighs Stretch","Hands Back","Move the wall","Plank with a chair","Triangle","Motionless Squat Exercise","Motionless Lunges"],
                        "ru":["Спина","Бедра и Ноги","Руки Назад","Сдвинь Стену","Планка со Стулом","Треугольник","Статические Приседы","Статические Выпады"]
                    },
                    training_icons: [["css/img/icons/programm5_Training1_0.svg", "css/img/icons/programm5_Training1_1.svg"],
                                    ["css/img/icons/programm5_Training2_0.svg", "css/img/icons/programm5_Training2_1.svg"],
                                    ["css/img/icons/programm5_Training3_0.svg", "css/img/icons/programm5_Training3_1.svg"],
                                    ["css/img/icons/programm5_Training4_0.svg", "css/img/icons/programm5_Training4_1.svg"],
                                    ["css/img/icons/programm5_Training5_0.svg", "css/img/icons/programm5_Training5_1.svg"],
                                    ["css/img/icons/programm5_Training6_0.svg", "css/img/icons/programm5_Training6_1.svg"],
                                    ["css/img/icons/programm5_Training7_0.svg", "css/img/icons/programm5_Training7_1.svg"],
                                    ["css/img/icons/programm5_Training8_0.svg", "css/img/icons/programm5_Training8_1.svg"]
                    ],
                    training_txt: {
                        "en":[
                            "Slowly bend forward. Hold the chair if you need. Feel the stretching in your lower back muscles. Keep for 12 seconds and repeat.",
                            "Stand tall with your feet approximately two shoulder widths apart. Turn the feet and face to the right. Bend the right leg and gradually lower the body. Repeat for the other side.",
                            "Lift your hands as high as you possibly can and hold the position for 15 seconds. Repeat 4 times.",
                            "Lean on a wall and try to move it forward, tightening your arm muscles. Count till 15, then release. Repeat 3 times.",
                            "Lower yourself down onto your forearms, pull your abdominals in tight (belly button to spine) with back flat; create a straight line from head to heels. Hold for 20 and repeat.",
                            "Simultaneously lift your legs toward the ceiling.  Keep the position for 10 seconds. Gradually return to the neutral position. Repeat 3 times.",
                            "Slowly squat with your hands straight. Keep your back straight. Hold the position for 10 seconds and release. Repeat 4 times.",
                            "Perform a lunge, switch your weight on the front leg and keep the position for 10 seconds. Repeat for the other leg."
                        ],
                        "ru":["Встаньте напротив стула. Медленно наклонитесь вперед, держась прямыми руками за спинку стула. Отведите бедра назад и почувствуйте натяжение в нижней части спины.",
                              "Встаньте прямо, ноги широко расставлены. Согните левую ногу в колене таким образом, чтобы правое бедро было параллельно полу. Постепенно опускайтесь ниже. Повторите, сменив сторону.",
                              "Отведите руки назад поднимите как можно выше. Задержитесь в этой позиции.",
                              "Упритесь руками в стену, как будто вы стараетесь ее сдвинуть. Напрягайте мышцы рук. Сосчитайте до 10, затем расслабьтесь. Повторите 4 раза.",
                              "Опуститесь на предплечья, напрягите мышцы пресса и подтяните живот. Ваше тело должно представлять собой прямую линию от ступней до головы.",
                              "Одновременно поднимите ноги к потолку. Задержитесь в этой позе на 10 секунд. Медленно вернитесь в исходное положение. Повторите 3 раза.",
                              "Медленно опуститесь в приседе. Держите руки прямо перед собой, а спину прямо. Задержитесь на 15 секунд и повторите.",
                              "Выполните выпад, перенесите вес на переднюю ногу и задержитесь в этой позиции."]
                    },
                    training_count: [2,4,4,3,2,3,4,4],
                    training_timer: [12,12,15,15,20,10,10,10]
                }
            }
    ],
    langs:{
		"en":"",
		"ru":""
	}
};
var lang = navigator.language.substr(0,2); //в каждом броаузере есть навигатор, берем данные из текущего файла и обрезаем первые два символа (на андроиде берем первые 2 символа ru-RU)
	var flag = 0;
	for(var keys in words.langs){ // берем объект words.langs по ключам которого пробегаем
		if(keys==lang){
			flag++;
		}
	} 
	if(flag==0){ //если не нашел, то выставляет варик EN 
		lang = "en";
	}