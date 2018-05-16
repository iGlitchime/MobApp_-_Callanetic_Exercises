"use strict";

var datePicker;
var LN = "en";
var tabDay = "Today";
var Randomizer;
var snd_list_page;
var snd_notif;
var snd_check;
var snd_sec;
var snd_endTimer;
var numberTraining;
var ProgramId;
var trainingId;
var refreshId;
var convertedMilsc, convertedTime;
var relaxWait;
var progressBar;
var intId;
function statisticBlock(){
    document.getElementsByClassName('statistic_list')[0].style.display = "block";
}


function ready() {
    StorageTest();
    swiperObj.init();
    snd_list_page = new Sound("snd/list_page.mp3");
    snd_notif = new Sound("snd/notification.mp3");
    snd_check = new Sound("snd/check.mp3");
    snd_sec = new Sound("snd/counter.mp3");
    snd_endTimer = new Sound("snd/endTimer.mp3");
    JSAPI.keepScreenOn();
    switches.test();

    var soundSW = document.getElementById("soundSW");
    new Tap(soundSW);

    soundSW.addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        switches.call(this);
    }, false);
    soundSW.addEventListener('swipe', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.detail.direction=='left'){
            switches.off(this);
        } else if(e.detail.direction=='right'){
            switches.on(this);
        }
    }, false);

    var notifSW = document.getElementById('notifSW');
    new Tap(notifSW);
    notifSW.addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        switches.call(this);
    }, false);
    notifSW.addEventListener('swipe', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.detail.direction=='left'){
            switches.off(this);
        } else if(e.detail.direction=='right'){
            switches.on(this);
        }
    }, false);

    setTimeout(function(){
        page.open("second");
        Segments.openProgr(document.getElementById("Trainings_0"));
    }, 2500);
    var pages = document.getElementsByClassName("page");
    
    window.addEventListener("appMaximizeEvent",function(e){
        e.preventDefault();
        e.stopPropagation();
        StorageTest();
    },false);
    
    for(var i=0;i<pages.length;i++){
        pages[i].addEventListener('webkitAnimationStart', function(e){
            e.preventDefault();
            e.stopPropagation();
        },false);

        pages[i].addEventListener('webkitAnimationEnd', function(e){
            e.preventDefault();
            e.stopPropagation();
            if((this.classList.contains("moveLeft"))||(this.classList.contains("moveRight"))){
                this.style.visibility = "hidden";
                this.classList.remove("hold");
            }
             else if((this.classList.contains("moveFromLeft"))||(this.classList.contains("moveFromRight"))){
                 this.classList.add("hold");
            }       
            this.classList.remove("moveLeft");
            this.classList.remove("moveRight");
            this.classList.remove("moveFromLeft");
            this.classList.remove("moveFromRight");
            page.busy = true;
        }, false);
    }
    new Tap("Statistics_0").addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        showStatisticsInfo.loadLastTime(e.detail.cTarget);
        statisticBlock();
        snd_list_page.play();
        Segments.openStat(this);
    }, false);
    
    new Tap("Trainings_0").addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        snd_list_page.play();
        Segments.openProgr(this);
    }, false);
    
    new Tap("goSettings").addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        snd_list_page.play();
        page.open("seventh");
    }, false);
    
    var back_buttons = document.getElementsByClassName('leftNavButton')
    for(var i = 0; i < back_buttons.length; i++){
        new Tap(back_buttons[i]).addEventListener('tap', function(e){
            e.preventDefault();
            e.stopPropagation();
            page.open(this.dataset.back);
            snd_list_page.play();
        }, false);
    }
    new Tap("programmList", "buttonProgramm").addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!e.detail.cTarget.classList.contains("buttonProgramm")){
            return;
        }
        programms.loadcontent(e.detail.cTarget);
        document.getElementById('programmStart').dataset.numberProgram = e.detail.cTarget.dataset.progr;
        timerLeo.programm = e.detail.cTarget.dataset.progr;
        snd_list_page.play();
        page.open("fourth");
    })
    new Tap("programmStart").addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        DrawTrainings(document.getElementById('programmStart').dataset.numberProgram);
        for(var i=0; i<8; i++){
            delete timerLeo['progressBar' + i];
        }
        snd_list_page.play();
        page.open("fifth");
    })
    new Tap("statisticList", "buttonProgramm").addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(!e.detail.cTarget.classList.contains("buttonProgramm")){
            return;
        }
        showStatisticsInfo.loadEveryDay(e.detail.cTarget.dataset.stat);
        snd_list_page.play();
        page.open("sixth");
    })
    new Tap("alertYes"),addEventListener('tap', function(e){
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('alertActivity').style.display = "none";
        relaxWait = 0;
        clearTimeout(timerLeo.RelaxTimeOut);

        convertedTime = (words.Programms[timerLeo.programm].training.training_timer[timerLeo.trainingId]) * 1000; // берем объект из content.js и переводим его в секунды
        timerLeo.startTimer(convertedTime);
    })
    
    
    var asd = document.getElementsByClassName("parentElement");
    for(var i=0; i<asd.length; i++){
        document.getElementById('statisticList').children[i*1].addEventListener("swipe", function(e){
            e.preventDefault();
            e.stopPropagation();
            if(e.detail.direction == "left"){
                this.classList.add("swipeLeft");
            } else if(e.detail.direction == "right"){
                this.classList.remove("swipeLeft");
            }
            })
        new Tap(document.getElementById('stat-' + i*1).lastElementChild).addEventListener('tap', function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.parentElement.style.display = "none";
            var allStats = JSON.parse(localStorage.getItem('allStats'));
            var todayStat = JSON.parse(localStorage.getItem('todayStat'));
                for(var j = 0; j<allStats.length; j++){
                    if(j == this.dataset.dely){
                        allStats[j] = [];
                        todayStat[j] = [{},{},{},{},{},{},{},{}];

                    }
                }
                localStorage.setItem("todayStat", JSON.stringify(todayStat));
                localStorage.setItem("allStats", JSON.stringify(allStats));
            }, false);
    }     
};

var switches = {

    lStrage: {
        notifSW: "true",
        soundSW: "true"
    },
    call:function(el){
        if(this.lStrage[el.id] =='true'){
            this.off(el);
        } else {
            this.on(el);
        }
        snd_check.play();
    },
    on:function(el){
        switch(el.id){
            case "soundSW":
                snd_check.volume(0.5);
                snd_list_page.volume(0.5);
                snd_notif.volume(0.5);
                snd_sec.volume(0.5);
                snd_endTimer.volume(0.5);
                this.lStrage.soundSW = 'true';
            break;
            case "notifSW":
                this.lStrage.notifSW = 'true';
                var dateNow = new Date();
                var dateToSave = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                var date = dateToSave.valueOf();
                var innerDate = parseInt(date) + 60*60*10*1000; // 10 a.m.
                for(var i=0; i<5; i++){
                    innerDate += 60*60*24*1000;
                    JSAPI.createUnitNotif(0, parseInt(innerDate), i, words.other[8], 'Title Notification', 'Text Notification', 1000, snd_notif);
                };
            break;
            default:
            break;
        }
        el.classList.add('switched');
        this.recordArray();
    },
    off:function(el){
        switch(el.id){
            case "soundSW":
                snd_check.volume(0);
                snd_list_page.volume(0);
                snd_notif.volume(0);
                this.lStrage.soundSW = 'false';
            break;
            case "notifSW":
                this.lStrage.notifSW = 'false';
                for(var i=0; i<5; i++){
                    JSAPI.cancelNotif(i);
                };
            break;
            default:
            break;
        }
        el.classList.remove('switched');
        this.recordArray();
    },
    test:function(){
        var data = JSON.parse(localStorage.getItem("settings")); 
        if(data == null){
            localStorage.setItem("settings", JSON.stringify(this.lStrage));
        }
        else{
            this.lStrage = data;
        }
        if(JSON.parse(localStorage.getItem('settings')).soundSW=='true'){
            this.on(document.getElementById('soundSW'));
        } else {
            this.off(document.getElementById('soundSW'));
        }
        if(JSON.parse(localStorage.getItem('settings')).notifSW=='true'){
            document.getElementById('notifSW').classList.add('switched');
        } else {
            document.getElementById('notifSW').classList.remove('switched');
        }
    },
    recordArray: function(){
        localStorage.setItem("settings", JSON.stringify(this.lStrage));
    }
}

var page = {
    busy:true,
    prevpage: 'first',
    curTap: 'Trainings_0',
    open: function(id){
        if(id == this.prevpage){
            return false;
        } else if(this.busy){
            this.busy = false;
            switch(id){       
                case 'first':
                break;
                case 'second':
                    this.curTap = "Trainings_0";
                    showStatisticsInfo.loadLastTime(this);
                break;
            }
            if(document.getElementById(this.prevpage)){
                this.animationHandlerCall(id);
            } 
            this.prevpage = id;
        }
    },
    animationHandlerCall:function(id){
        document.getElementById(id).style.visibility = "visible"; //
        if(document.getElementById(id).dataset.n*1 < document.getElementById(this.prevpage).dataset.n*1){
            document.getElementById(this.prevpage).classList.add('moveRight');
            document.getElementById(id).classList.add('moveFromLeft');
        } else {
            document.getElementById(this.prevpage).classList.add('moveLeft');
            document.getElementById(id).classList.add('moveFromRight');
        }
    }
}

var programms = {
    loadcontent: function(el){
        document.getElementById('fourth_title').innerHTML = words.Programms[el.dataset.progr*1].title[lang];
        document.getElementById('programmInfo').firstElementChild.style.background = "url(" + words.Programms[el.dataset.progr*1].img + ") no-repeat";
        document.getElementById('programmInfo').firstElementChild.style.backgroundPosition = "center";
        document.getElementById('programmInfo').firstElementChild.style.backgroundSize = "cover";
        document.getElementById('programmInfo').lastElementChild.previousElementSibling.innerHTML =  words.Programms[el.dataset.progr*1].txt[lang];
        snd_list_page.play();
        page.open("fourth");
    }
}

var swiperObj = {   
    init:function () {
        this.s = new Swiper('.swiper-container', {
            pagination: ".swiper-pagination"
            });   
    }
}

function DrawTrainings(k){
    swiperObj.s.removeAllSlides();
    var ArraySlides = [];
    for (var i = 0; i < 8; i++){
        var A = '<div class="swiper-slide">\
                    <div class="NavBar shrink">\
                        <div class="NavBarTitle" id="slide-'+ i +'">'+ words.Programms[k*1].training.training_title[lang][i] + '</div>\
                        <div class="refresh" id="refresh' + i +'" data-refr="'+ i +'"></div>\
                    </div>\
                    <div class="content flex col">\
                        <div class="chosen training flex">\
                            <div class="TrainingIconsBlock">\
                                <div class="training_icons" id="TrainingIcon1" style="background:url(' + words.Programms[k*1].training.training_icons[i][0] + ') no-repeat; background-position: center; background-size: cover;"></div>\
                                <div class="training_icons" id="TrainingIcon2" style="background:url(' + words.Programms[k*1].training.training_icons[i][1] + ') no-repeat; background-position: center; background-size: cover;"></div>\
                            </div>\
                            <div class="training_text" id="TrainingText">' + words.Programms[k*1].training.training_txt[lang][i] + '</div>\
                            <div class="training_clock" id="progressBar'+ i +'">\
                                <div class="clockElements"></div>\
                                <div class="TrainingTimer" id="TrainingTimer' + i +'" data-timer="'+ i +'"></div>\
                                <div class="numberCountdown" id="numberCountdown' + i +'"></div>\
                                <div class="pauseButton" id="pauseButton' + i +'" data-timer="'+ i +'"></div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
        ArraySlides.push(A);
    };
    swiperObj.s.appendSlide(ArraySlides);
    
    var TrainingTimer = document.querySelectorAll('.TrainingTimer');
    var PauseButtonTimer = document.querySelectorAll('.pauseButton');
    var RefreshButton = document.querySelectorAll('.refresh');
    for(var i = TrainingTimer.length; --i >= 0;){
        
        new Tap(TrainingTimer[i]);
        TrainingTimer[i].addEventListener('tap', function(e){
            e.preventDefault();
            e.stopPropagation();
            this.style.visibility = "hidden";

            for( var j = 0; j<TrainingTimer.length; j++) {
                TrainingTimer[j].style.pointerEvents = "none";
                RefreshButton[j].style.pointerEvents = "none";
            }

            var pauseId = "pauseButton" + this.dataset.timer;
            document.getElementById(pauseId).style.visibility = "visible";

            trainingId = "numberCountdown" + this.dataset.timer;
            refreshId = "refresh" + this.dataset.timer;
            document.getElementById(refreshId).style.opacity = "0.5";
            document.getElementById(trainingId).style.visibility = "visible";

            startCountdown(this.dataset.timer);

        }, false);

        new Tap(PauseButtonTimer[i]);
        PauseButtonTimer[i].addEventListener('tap', function(e){
            e.preventDefault();
            e.stopPropagation();
            timerLeo.stopTimer(this.dataset.timer);

            for( var j = 0; j<TrainingTimer.length; j++) {
                TrainingTimer[j].style.pointerEvents = "auto";
                RefreshButton[j].style.pointerEvents = "auto";
            }

            var startId = "TrainingTimer" + this.dataset.timer;
            document.getElementById(startId).style.visibility = "visible";
            this.style.visibility = "hidden";
            trainingId = "numberCountdown" + this.dataset.timer;
            refreshId = "refresh" + this.dataset.timer;
            document.getElementById(refreshId).style.opacity = "1";
            document.getElementById(trainingId).style.visibility = "hidden";

            swiperObj.s.unlockSwipes();
        }, false);
        
        new Tap(RefreshButton[i]);
        RefreshButton[i].addEventListener('tap', function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($confirm (words.other[lang][10])) {
                var todayStat = JSON.parse(localStorage.getItem('todayStat'));
                var allStats = JSON.parse(localStorage.getItem('allStats'));

                localStorage.setItem("allStats", JSON.stringify(allStats));
                todayStat[k][this.dataset.refr] = {};
                localStorage.setItem("todayStat", JSON.stringify(todayStat));
                DrawTrainings(document.getElementById('programmStart').dataset.numberProgram);

                for(var i=0; i<8; i++){
                    delete timerLeo['progressBar' + i];
                }
            }
        }, false);
    }
}

function msToTime(duration){
    var convTime = "";
    var milliseconds = parseInt((duration%1000)/100),
        seconds = parseInt((duration/1000)%60),
        minutes = parseInt((duration/(1000*60))%60), 
        hours = parseInt((duration/(1000*60*60))%24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    if(hours <=0){
        convTime = minutes + ":" + seconds;
    } else if(hours <=0 && minutes <= 0){
        convTime = seconds;
    } else if(hours <=0 && minutes <= 0 && seconds <= 0){
        convTime = "0";
    }else {
        convTime = hours + ":" + minutes + ":" + seconds;
    }
    return convTime;
}

function convertToShow(el){
    var showDuration = "";
    var parsingTime = el.split(':');
    if(parsingTime.length<=1){
        showDuration = parsingTime + words.other[lang][7];
    }else if(parsingTime.length<=2){
        showDuration = parsingTime[0] + words.other[lang][6] + " " + parsingTime[1] + words.other[lang][7];
    }else{
        showDuration = parsingTime[0] + words.other[lang][5] + " " + parsingTime[1] + words.other[lang][6] + " " + parsingTime[3] + words.other[lang][7];
    }
    return showDuration;
}

function ConvertDateToShow(el){
    var ShowDate = "";
    var parsingDate = el.split('/');
    if(parsingDate[1].length<2 && parsingDate[2].length<2){
        ShowDate = "0" + parsingDate[2] + "." + "0" + parsingDate[1] + "." + parsingDate[0];
    }else if(parsingDate[1].length == 2 && parsingDate[2].length<2){
        ShowDate =  "0" + parsingDate[2] + "." + parsingDate[1] + "." + parsingDate[0];
    }else if(parsingDate[1].length<2 && parsingDate[2].length == 2){
        ShowDate =  parsingDate[2] + "." +  "0" + parsingDate[1] + "." + parsingDate[0];
    } else{
        ShowDate =  parsingDate[2] + "." + parsingDate[1] + "." + parsingDate[0];
    }
    return ShowDate;
}


function startCountdown(dataTime){
    var id = 'progressBar' + dataTime;

    var duration = (words.Programms[timerLeo.programm].training.training_timer[dataTime]) * 1000;
    convertedTime = duration;

    if(!timerLeo[id]){
        timerLeo[id] = new ProgressBar.Circle(document.getElementById(id), {
        duration: 200,
        color: "#FF7F67",
        strokeWidth: 10,
        svgStyle: {
            position: "absolute",
            display: 'block',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: {
                    prefix: true,
                    value: 'translate(-50%, -50%)',
                }
        }
    });
    }
    
        
    timerLeo.repeats = words.Programms[timerLeo.programm].training.training_count[dataTime];
    timerLeo.trainingId = dataTime;
    if(JSON.parse(localStorage.getItem('todayStat'))[timerLeo.programm][dataTime].left == null){
        timerLeo.repeatCounts = 0;
    }else{
        timerLeo.repeatCounts = JSON.parse(localStorage.getItem('todayStat'))[timerLeo.programm][dataTime].repeatCounts;
        convertedTime = JSON.parse(localStorage.getItem('todayStat'))[timerLeo.programm][dataTime].left;

    }
    timerLeo.startTimer(convertedTime);
}

function waitingTimer(){
    if((relaxWait - 1000) >= 0){
        relaxWait = relaxWait - 1000;
        document.getElementById('alertActivity').style.display = "block";
        var reTakeTime = msToTime(relaxWait);
        document.getElementById('alertMessage').innerHTML = words.other[lang][11] + '<br>' + reTakeTime;
       
        setTimeout(waitingTimer,1000);
    }
}

var timerLeo = {
    repeatCounts: 0,
    repeats: 0,
    programm: 0,
    trainingId: 0,
    passedTime:0,
    duration: 0,
    trainingDone: function(trainingId){
        document.getElementById(trainingId).nextElementSibling.style.display = "none";
        document.getElementById(trainingId).style.top = "38%";
        document.getElementById(trainingId).style.left = "49%";
        document.getElementById(trainingId).style.fontSize = "35px";
        document.getElementById(trainingId).innerHTML = "Done";
        var TrainingTimer = document.querySelectorAll('.TrainingTimer');
        var RefreshButton = document.querySelectorAll('.refresh');
        for( var j = 0; j<TrainingTimer.length; j++) {
            TrainingTimer[j].style.pointerEvents = "auto";
            RefreshButton[j].style.pointerEvents = "auto";
            RefreshButton[j].style.opacity = "1";
        }
        swiperObj.s.unlockSwipes();
        var todayStat = JSON.parse(localStorage.getItem('todayStat'));
        todayStat[timerLeo.programm][timerLeo.trainingId].left = 0;
        localStorage.setItem('todayStat',JSON.stringify(todayStat));

    },
    startTimer: function(convertedTime){
        var BackBTN = document.querySelectorAll('.backFromSlide');
        BackBTN[0].style.pointerEvents = "none";
        BackBTN[0].style.opacity = "0.5";
        var allTime = (words.Programms[timerLeo.programm].training.training_timer[(trainingId.slice(-1)*1)])*1000;
        document.getElementById(trainingId).innerHTML = msToTime(convertedTime);

        intId = setInterval(function(){

            if(timerLeo.repeatCounts == timerLeo.repeats){
                var todayStat = JSON.parse(localStorage.getItem('todayStat'));
                todayStat[timerLeo.programm][timerLeo.trainingId].left = 0;
                localStorage.setItem('todayStat',JSON.stringify(todayStat));

                timerLeo.trainingDone(trainingId);
                timerLeo.stopTimer(timerLeo.trainingId);
            } else if(convertedTime > 0){
                snd_sec.play();


                convertedTime -= 1000;
                timerLeo.passedTime = allTime - convertedTime;
                timerLeo.duration += 1000;
                document.getElementById(trainingId).innerHTML = msToTime(convertedTime);

                timerLeo['progressBar' + trainingId.slice(-1)].animate(timerLeo.passedTime / allTime);
            }else if(timerLeo.passedTime = 0 && timerLeo.repeatCounts != timerLeo.repeats){

                var todayStat = JSON.parse(localStorage.getItem('todayStat'));
                todayStat[timerLeo.programm][timerLeo.trainingId].left = 0;
                localStorage.setItem('todayStat',JSON.stringify(todayStat));

                timerLeo.repeatCounts ++;
                snd_endTimer.play();
                timerLeo.stopTimer(timerLeo.trainingId);
                timerLeo['progressBar' + trainingId.slice(-1)].animate(0);

                timerLeo.relaxTime(trainingId);
            } else{
                timerLeo.repeatCounts ++;
                snd_endTimer.play();
                timerLeo.stopTimer(timerLeo.trainingId);
                timerLeo['progressBar' + trainingId.slice(-1)].animate(0);
                timerLeo.relaxTime(trainingId);
            }
        },1000)
        swiperObj.s.lockSwipes();
    },
    relaxTime: function(trainingId){
        if(timerLeo.repeatCounts < timerLeo.repeats){
            relaxWait = 60000;

            waitingTimer();
            
            this.RelaxTimeOut = setTimeout(function(){
                document.getElementById('alertActivity').style.display = "none";
                relaxWait = 0;

                convertedTime = (words.Programms[timerLeo.programm].training.training_timer[timerLeo.trainingId]) * 1000; // берем объект из content.js и переводим его в секунды
                timerLeo.startTimer(convertedTime);
            }, 60000)
        } else {
            timerLeo.trainingDone(trainingId);
        }
    },
    stopTimer: function(n){
        clearInterval(intId);
        statistics.save(this.programm*1, n);
        timerLeo.duration = 0;
        var BackBTN = document.querySelectorAll('.backFromSlide');
        BackBTN[0].style.pointerEvents = "auto";
        BackBTN[0].style.opacity = "1";

        swiperObj.s.unlockSwipes();
    }
}

var statistics = {
    save: function(Nprogr, Ntraining){
        var todayStat = JSON.parse(localStorage.getItem('todayStat'));
        var allTime = (words.Programms[timerLeo.programm].training.training_timer[(trainingId.slice(-1)*1)])*1000;
        var leftTime = allTime - timerLeo.passedTime;
        todayStat[Nprogr][Ntraining].left = leftTime;
        todayStat[Nprogr][Ntraining].repeatCounts = timerLeo.repeatCounts*1;

        localStorage.setItem('todayStat',JSON.stringify(todayStat));

        var trainingDate = new Date().getFullYear() + "/" + (new Date().getMonth()+1) + "/" + new Date().getDate();
        var allStats = JSON.parse(localStorage.getItem('allStats'));
        if(this.checkLocStorStat(Nprogr, trainingDate)){
            var C = allStats[Nprogr * 1];
            C.forEach(function (item, i, r) {
                if (trainingDate == item.trainingDate) {
                    item.duration += timerLeo.duration;
                }
            });

        } else {
            var dayStat = {
                trainingDate: trainingDate,
                duration: timerLeo.duration
            };
            allStats[Nprogr*1].push(dayStat);
            allStats[Nprogr*1].sort(sortbyTrainingDate);
        }
        localStorage.setItem('allStats',JSON.stringify(allStats));
    },
    checkLocStorStat: function(Nprogr, trainingDate){
        var A = JSON.parse(localStorage.getItem('allStats'))[Nprogr*1];
        var b = false;
        A.forEach(function(item, i, r){
            if(trainingDate == item.trainingDate){
                b = true;
            }
        });
        return b;
    }
}

function sortbyTrainingDate(a, b){
    if ( new Date(a.trainingDate).getTime() > new Date(b.trainingDate).getTime())
        return -1;
    else if (new Date(a.trainingDate).getTime() < new Date(b.trainingDate).getTime())
        return 1;
    else 
        return 0;
}

function StorageTest() {
    var today = new Date().getDate();
    if(JSON.parse(localStorage.getItem('today')) == null){
        var todayStat = [[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}]];
        var allStats = [[],[],[],[],[]];
        localStorage.setItem('todayStat', JSON.stringify(todayStat));
        localStorage.setItem('allStats', JSON.stringify(allStats));
        localStorage.setItem('today', JSON.stringify(today));

    } else if (today != JSON.parse(localStorage.getItem('today'))){
        var todayStat = [[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{}]];
        localStorage.setItem('todayStat', JSON.stringify(todayStat));
        localStorage.setItem('today', JSON.stringify(today));
    }
}

var showStatisticsInfo = {
    allStats: function() {
        return JSON.parse(localStorage.getItem('allStats'));
    },
    loadLastTime: function(el){
        var testLocStor = this.allStats();
        var lastTrainingTime = 0;
        var testArray = false;
       for (var D = 0; D<testLocStor.length; D++){
           if(testLocStor[D].length != 0){
               if(testLocStor[D][0].duration != 0){
                   testArray = true;
               } 
           }
       }
        if(testArray ==false) {
            document.getElementById("IF_NOTHING").style.display = "block";
            var KEK = document.getElementsByClassName('statistic_list');
            for(var C = 0; C< KEK.length; C++) {
                KEK[C].style.display = "none";
            }
        }else{
            for(var i=0; i<5; i++){
                var a = testLocStor[i*1];
                if(a.length == 0) {
                        document.getElementById('statisticList').children[i*1].style.display = "none";
                    document.getElementById("IF_NOTHING").style.display = "none";
                
                } else if(a.length !=0 ){
                    lastTrainingTime = this.allStats()[i][0];
                    document.getElementById("IF_NOTHING").style.display = "none";
                    document.getElementById('statisticList').children[i*1].style.display = "block";
                    document.getElementsByClassName('txt_stat_data')[i*1].innerHTML = ConvertDateToShow(lastTrainingTime.trainingDate); //вывод даты (проработать формат вывода)
                    document.getElementsByClassName('txt_stat_time')[i*1].innerHTML = convertToShow(msToTime(lastTrainingTime.duration)); //вывод времени последнего дня
                } else if(a[0].duration == 0) {
                    document.getElementById('statisticList').children[i*1].style.display = "none";
                }
                else {
                    lastTrainingTime = this.allStats()[i][0];
                    document.getElementById("IF_NOTHING").style.display = "none";
                    document.getElementById('statisticList').children[i*1].style.display = "block";
                    document.getElementsByClassName('txt_stat_data')[i*1].innerHTML = ConvertDateToShow(lastTrainingTime.trainingDate); //вывод даты (проработать формат вывода)
                    document.getElementsByClassName('txt_stat_time')[i*1].innerHTML = convertToShow(msToTime(lastTrainingTime.duration)); //вывод времени последнего дня
                }
            }
        }
    },
    loadEveryDay: function(n){
        document.getElementById('sixth_title').innerHTML = words.Programms[n*1].title[lang]; //при переходе на стату выбранной программы берем из контента заголовок-название программы
        //прописать все даты 
        var allDates = this.allStats()[n];
        var dayInfo = document.getElementById('DayInfo');
        dayInfo.innerHTML = "";
        var lastMonth = -1;
        var lastYear = 0;
        
        allDates.forEach(function (item, i, arr) {
            if (new Date(item.trainingDate).getMonth() != lastMonth || new Date(item.trainingDate).getFullYear() != lastYear) {
                var monthLine = document.createElement('div');
                lastMonth = new Date(item.trainingDate).getMonth();
                lastYear = new Date(item.trainingDate).getFullYear();
                
                monthLine.className = 'dateRow';
                monthLine.innerHTML = words.month[lang][lastMonth] +' '+ lastYear;
                if(dayInfo.children.length != 0) {
                    dayInfo.lastElementChild.style.marginLeft = "0";
                    dayInfo.lastElementChild.style.paddingLeft = "1em";
                }
                dayInfo.appendChild(monthLine);
            }
            
            
            var div = document.createElement('div');
            div.className = "containRowNote";
            div.innerHTML = '<div class="txt_stat">' + ConvertDateToShow(item.trainingDate) + '</div><div class="txt_stat_time">'+ convertToShow(msToTime(item.duration)) + '</div>';
            dayInfo.appendChild(div);
        });
    }
}

var Segments = {
    openStat: function(el){
        el.classList.add("buttonUpperActive");
        document.getElementById("Trainings_0").classList.remove("buttonUpperActive");
        document.getElementById("containerStatistics").style.webkitTransform = "translateX(0)";
        document.getElementById("containerProgramms").removeAttribute("style");
        showStatisticsInfo.loadLastTime(this);
    },
    openProgr: function(el){
        el.classList.add("buttonUpperActive");
        document.getElementById("Statistics_0").classList.remove("buttonUpperActive");
        document.getElementById("containerProgramms").style.webkitTransform = "translateX(0)";
        document.getElementById("containerStatistics").removeAttribute("style");
        var LA = document.getElementsByClassName("parentElement");
        for(var i = 0; i<LA.length; i++){
            LA[i].classList.remove("swipeLeft");
        }
        showStatisticsInfo.loadLastTime(this);
    }
};

document.addEventListener('DOMContentLoaded', ready, false);


