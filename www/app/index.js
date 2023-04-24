//set initial counts
const startingBeginDay = 0;
const starting1stBreak = 0;
const startingLunch = 0;
const starting2ndBreak = 0;
const startingCoaching = 0;
const startingMeeting = 0;
const startingMeetingFB = 0;
const startingTraining = 0;
const startingTrainingFB = 0;
const count = 0;

//set initial count
let timeBeginDay = startingBeginDay * 60;
let time1stBreak = starting1stBreak * 60;
let timeLunch = startingLunch * 60;
let time2ndBreak = starting2ndBreak * 60;
let timeCoaching = startingCoaching * 60;
let timeMeeting = startingMeeting * 60;
let timeMeetingFB = startingMeetingFB * 60;
let timeTraining = startingTraining * 60;
let timeTrainingFB = startingTrainingFB * 60;


//set Interval count
let IdleBeginDayIntervalID;
let ClearIdleBeginDayIntervalID;
let SLIntervalID;
let BDintervalID;
let EBDintervalID;
let FBintervalID;
let EFBintervalID;
let LintervalID;
let ELintervalID;
let SBintervalID;
let ESBintervalID;
let CintervalID;
let ECintervalID;
let MintervalID;
let EMintervalID;
let MintervalIDFB;
let EMintervalIDFB;
let TintervalID;
let ETintervalID;
let TintervalIDFB;
let ETintervalIDFB;

//set alert pop if allowed in zendesk
let checkSL;
let checkBD;
let checkED;
let checkFB;
let checkFFB;
let checkLB;
let checkFLB;
let checkSB;
let checkFSB;
let checkC;
let checkFC;
let checkM;
let checkFM;
let checkMFB;
let checkFMFB;
let checkT;
let checkFT;
let checkTFB;
let checkETFB;

//for using the time button punched in
let todayBD;
let dateBD;
let timeBD;
let todayFB;
let dateFB;
let timeFB;
let todayEFB;
let dateEFB;
let timeEFB;
let todayLB;
let dateLB;
let timeLB;
let todayELB;
let dateELB;
let timeELB;
let todaySB;
let dateSB;
let timeSB;
let todayESB;
let dateESB;
let timeESB;
let todayEBD;
let dateEBD;
let timeEBD;
let todayC;
let dateC;
let timeC;
let todayEC;
let dateEC;
let timeEC;
let todayM;
let dateM;
let timeM;
let todayEM;
let dateEM;
let timeEM;
let todayMFB;
let dateMFB;
let timeMFB;
let todayEMFB;
let dateEMFB;
let timeEMFB;
let todayT;
let dateT;
let timeT;
let todayET;
let dateET;
let timeET;
let todayTFB;
let dateTFB;
let timeTFB;
let todayETFB;
let dateETFB;
let timeETFB;
let dataBD;
let dataBT;

////


let get_Begin;
let get_FB;
let get_EFB;
let get_L;
let get_ELB;
let get_SB;
let get_ESB;
let get_C;
let get_EC;
let get_M;
let get_EM;
let get_MFB;
let get_EMFB;
let get_T;
let get_ET;
let get_TFB;
let get_ETFB;
let get_End;

////
let get_DurationBegin;



//set initial count for timer
const countdownShortLogin = document.getElementById('valueShortLogin');
var inputTextSLClicking = document.getElementById('SLClicking').value;
const showshort_login = document.getElementById('valueShortShow');
const showshort_login_save = document.getElementById('valueShortShowSave');
const reloadValue = document.getElementById('valueReload');
const storeBDDuration = document.getElementById('durationBeginDay');
const storeFBDuration = document.getElementById('durationFirstBreak');
const storeLBDuration = document.getElementById('durationLunchBreak');
const storeSBDuration = document.getElementById('durationSecondBreak');
const storeCDuration = document.getElementById('durationCoaching');
const storeMDuration = document.getElementById('durationMeeting');
const storeMTPDuration = document.getElementById('durationMeetingTP');
const storeTDuration = document.getElementById('durationTraining');
const storeTTPDuration = document.getElementById('durationTrainingTP');
////
const countdownBeginDay = document.getElementById('valueBeginDay');
const countdown1stBreak = document.getElementById('value1stBreak');
const countdownLunch = document.getElementById('valueLunch');
const countdown2ndBreak = document.getElementById('value2ndBreak');
const countdownCoaching = document.getElementById('valueCoaching');
const countdownCoachingFB = document.getElementById('valueCoachingFB');
const countdownMeeting = document.getElementById('valueMeeting');
const countdownMeetingFB = document.getElementById('valueMeetingFB');
const countdownTraining = document.getElementById('valueTraining');
const countdownTrainingFB = document.getElementById('valueTrainingFB');
const countdownEndDay = document.getElementById('BDstpclicking');
const countdownEnd1stBreak = document.getElementById('FBstpclicking');
const countdownEndLunch = document.getElementById('LBstpclicking');
const countdownEnd2ndBreak = document.getElementById('SBstpclicking');
const countdownEndCoaching = document.getElementById('Cstpclicking');
const countdownEndCoachingFB = document.getElementById('CstpclickingFB');
const countdownEndMeeting = document.getElementById('Mstpclicking');
const countdownEndMeetingFB = document.getElementById('MstpclickingFB');
const countdownEndTraining = document.getElementById('Tstpclicking');
const countdownEndTrainingFB = document.getElementById('TstpclickingFB');
//

const BeginDayShow = document.getElementById('valueBeginDayShow');
const c1stBreakShow = document.getElementById('value1stBreakShow');
const LunchShow = document.getElementById('valueLunchShow');
const c2ndBreakShow = document.getElementById('value2ndBreakShow');
const CoachingShow = document.getElementById('valueCoachingShow');
const CoachingFBShow = document.getElementById('valueCoachingFBShow');
const MeetingShow = document.getElementById('valueMeetingShow');
const MeetingFBShow = document.getElementById('valueMeetingFBShow');
const TrainingShow = document.getElementById('valueTrainingShow');
const TrainingFBShow = document.getElementById('valueTrainingFBShow');
const EndedDayShow = document.getElementById('valueEndDayShow');
const EndLunchShow = document.getElementById('valueEndLunchShow');
const End1stBreakShow = document.getElementById('valueEnd1stBreakShow');
const End2ndBreakShow = document.getElementById('valueEnd2ndBreakShow');
const EndCoachingShow = document.getElementById('valueEndCoachingShow');
const EndCoachingFBShow = document.getElementById('valueEndCoachingFBShow');
const EndMeetingShow = document.getElementById('valueEndMeetingShow');
const EndMeetingFBShow = document.getElementById('valueEndMeetingFBShow');
const EndTrainingShow = document.getElementById('valueEndTrainingShow');
const EndTrainingFBShow = document.getElementById('valueEndTrainingFBShow');
//


//select value and buttons
const valueSL = document.querySelector("#valueShortLogin");
const valueBD = document.querySelector("#valueBeginDay");
const value1B = document.querySelector("#value1stBreak");
const valueL = document.querySelector("#valueLunch");
const value2B = document.querySelector("#value2ndBreak");
const valueC = document.querySelector("#valueCoaching");
const valueM = document.querySelector("#valueMeeting");
const valueMFB = document.querySelector("#valueMeetingFB");
const valueT = document.querySelector("#valueTraining");
const valueTFB = document.querySelector("#valueTrainingFB"); //

const valueBDShow = document.querySelector("#valueBeginDayShow");
const valueEDShow = document.querySelector("#valueEndDayShow");
const value1BShow = document.querySelector("#value1stBreakShow");
const valueE1BShow = document.querySelector("#valueEnd1stBreakShow");
const valueLShow = document.querySelector("#valueLunchShow");
const valueELShow = document.querySelector("#valueEndLunchShow");
const value2BShow = document.querySelector("#value2ndBreakShow");
const valueE2BShow = document.querySelector("#valueEnd2ndBreakShow");

const valueCShow = document.querySelector("#valueCoachingShow");
const valueECShow = document.querySelector("#valueEndCoachingShow");
const valueMShow = document.querySelector("#valueMeetingShow");
const valueEMShow = document.querySelector("#valueEndMeetingShow");
const valueMFBShow = document.querySelector("#valueMeetingFBShow");
const valueEMFBShow = document.querySelector("#valueEndMeetingFBShow");
const valueTShow = document.querySelector("#valueTrainingShow");
const valueETShow = document.querySelector("#valueEndTrainingShow");
const valueTFBShow = document.querySelector("#valueTrainingFBShow");
const valueETFBShow = document.querySelector("#valueEndTrainingFBShow");

const btns = document.querySelectorAll(".btn");

//
let confirm_short;
let get_Short;
let IdlewindowPopup;
let ClearidlewindowPopup;
//

//jquery desktop app funtion starts

$(function() {
    start();
    $(window).bind('beforeunload', function(e) {
        e.preventDefault();
        return "Unloading this page may lose data. What do you want to do..."
    });
});


//The logic of timer in JS

function start() {
    btns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const styles = e.currentTarget.classList;

            var inputTextSLClicking = document.getElementById('SLClicking').value;

            if (styles.contains('Startshortlogin') && inputTextSLClicking) {
                checkSL = confirm("Are you sure you have entered the correct Short_Login?") ?
                    (SLIntervalID = updateShortLogin(),
                        valueSL.style.color = '#800080',
                        shortloginFunc(),
                        document.getElementById("SLClicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("SLClicking").disabled = true,
                        document.getElementById("SLSaveClicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("SLSaveClicking").disabled = true) :
                    document.getElementById("SLClicking").removeAttribute('disabled');

            } else if (styles.contains('beginDay') && checkSL) {
                checkBD = confirm("Are you ready to Begin your day?") ?
                    (BDintervalID = setInterval(updateBeginDay, 1000),
                        valueBD.style.color = '#800080',
                        storeLocalBD(),
                        document.getElementById("BDclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("BDclicking").disabled = true) :
                    EBDintervalID = clearInterval(BDintervalID);

            } else if (styles.contains('1stbreak') && BDintervalID) {
                checkFB = confirm("Are you ready for the 1st break? ") ?
                    (FBintervalID = setInterval(update1stBreak, 1000),
                        storeLocalFB(),
                        ECintervalID = clearInterval(CintervalID),
                        EMintervalID = clearInterval(MintervalID),
                        EMintervalIDFB = clearInterval(MintervalIDFB),
                        ETintervalID = clearInterval(TintervalID),
                        ETintervalIDFB = clearInterval(TintervalIDFB),
                        document.getElementById("FBclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("SBclicking").disabled = true,
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("Cstpclicking").disabled = true,
                        document.getElementById("Mstpclicking").disabled = true,
                        document.getElementById("MstpclickingFB").disabled = true,
                        document.getElementById("Tstpclicking").disabled = true,
                        document.getElementById("TstpclickingFB").disabled = true,
                        document.getElementById("FBclicking").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true) :
                    EFBintervalID = clearInterval(FBintervalID);

            } else if (styles.contains('StopFB') && FBintervalID) {
                checkFFB = confirm("Are you sure to finish your 1st break? ") ?
                    (EFBintervalID = clearInterval(FBintervalID),
                        storeLocalEFB(),
                        document.getElementById("FBstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("LBclicking").removeAttribute('disabled'),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("FBstpclicking").disabled = true,
                        storeLocalFBDuration()) :
                    document.getElementById("FBstpclicking").removeAttribute('disabled');

            } else if (styles.contains('lunch') && FBintervalID) {
                checkLB = confirm("Are you ready for the Lunch break? ") ?
                    (LintervalID = setInterval(updateLunch, 1000),
                        storeLocalLB(),
                        ECintervalID = clearInterval(CintervalID),
                        EMintervalID = clearInterval(MintervalID),
                        EMintervalIDFB = clearInterval(MintervalIDFB),
                        ETintervalID = clearInterval(TintervalID),
                        ETintervalIDFB = clearInterval(TintervalIDFB),
                        document.getElementById("LBclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("SBclicking").disabled = true,
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("Cstpclicking").disabled = true,
                        document.getElementById("Mstpclicking").disabled = true,
                        document.getElementById("MstpclickingFB").disabled = true,
                        document.getElementById("Tstpclicking").disabled = true,
                        document.getElementById("TstpclickingFB").disabled = true,
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true) :
                    ELintervalID = clearInterval(LintervalID);

            } else if (styles.contains('StopLB') && LintervalID) {
                checkFLB = confirm("Are you sure to finish your Lunch break? ") ?
                    (ELintervalID = clearInterval(LintervalID),
                        storeLocalELB(),
                        document.getElementById("LBstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("SBclicking").removeAttribute('disabled'),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("LBstpclicking").disabled = true,
                        storeLocalLBDuration()) :
                    document.getElementById("LBstpclicking").removeAttribute('disabled');

            } else if (styles.contains('2ndbreak') && LintervalID) {
                checkSB = confirm("Are you ready for the 2nd break? ") ?
                    (SBintervalID = setInterval(update2ndBreak, 1000),
                        storeLocalSB(),
                        ECintervalID = clearInterval(CintervalID),
                        EMintervalID = clearInterval(MintervalID),
                        EMintervalIDFB = clearInterval(MintervalIDFB),
                        ETintervalID = clearInterval(TintervalID),
                        ETintervalIDFB = clearInterval(TintervalIDFB),
                        document.getElementById("SBclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("Cstpclicking").disabled = true,
                        document.getElementById("Mstpclicking").disabled = true,
                        document.getElementById("MstpclickingFB").disabled = true,
                        document.getElementById("Tstpclicking").disabled = true,
                        document.getElementById("TstpclickingFB").disabled = true,
                        document.getElementById("SBclicking").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true) :
                    ESBintervalID = clearInterval(SBintervalID);

            } else if (styles.contains('StopSB') && SBintervalID) {
                checkFSB = confirm("Are you sure to finish your 2nd Break") ?
                    (ESBintervalID = clearInterval(SBintervalID),
                        storeLocalESB(),
                        document.getElementById("SBstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("SBstpclicking").disabled = true,
                        storeLocalSBDuration()) :
                    document.getElementById("SBstpclicking").removeAttribute('disabled');

            } else if (styles.contains('coaching') && BDintervalID) {
                checkC = confirm("Are you ready for the Coaching? ") ?
                    (CintervalID = setInterval(updateCoaching, 1000),
                        storeLocalC(),
                        valueC.style.color = 'purple',
                        document.getElementById("Cstpclicking").removeAttribute('disabled'),
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true,
                        document.getElementById("FBclicking").disabled = true,
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("SBclicking").disabled = true) :
                    ECintervalID = clearInterval(CintervalID);

            } else if (styles.contains('StopCoaching') && CintervalID) {
                checkFC = confirm("Are you ready to finish your Coaching? ") ?
                    (ECintervalID = clearInterval(CintervalID),
                        storeLocalEC(),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("Cstpclicking").disabled = true,
                        ((FBintervalID) ? document.getElementById("FBclicking").disabled = true :
                            document.getElementById("FBclicking").removeAttribute('disabled')),
                        ((LintervalID) ? document.getElementById("LBclicking").disabled = true :
                            document.getElementById("LBclicking").removeAttribute('disabled')),
                        ((SBintervalID) ? document.getElementById("SBclicking").disabled = true :
                            document.getElementById("SBclicking").removeAttribute('disabled')),
                        storeLocalCDuration()) :
                    document.getElementById("Cstpclicking").removeAttribute('disabled');

            } else if (styles.contains('meeting') && BDintervalID) {
                checkM = confirm("Are you ready for the Meeting? ") ?
                    (MintervalID = setInterval(updateMeeting, 1000),
                        storeLocalM(),
                        valueM.style.color = 'purple',
                        document.getElementById("Mstpclicking").removeAttribute('disabled'),
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true,
                        document.getElementById("FBclicking").disabled = true,
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("SBclicking").disabled = true) :
                    EMintervalID = clearInterval(MintervalID);

            } else if (styles.contains('StopMeeting') && MintervalID) {
                checkFM = confirm("Are you ready to finish your Meeting? ") ?
                    (EMintervalID = clearInterval(MintervalID),
                        storeLocalEM(),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("Mstpclicking").disabled = true,
                        ((FBintervalID) ? document.getElementById("FBclicking").disabled = true :
                            document.getElementById("FBclicking").removeAttribute('disabled')),
                        ((LintervalID) ? document.getElementById("LBclicking").disabled = true :
                            document.getElementById("LBclicking").removeAttribute('disabled')),
                        ((SBintervalID) ? document.getElementById("SBclicking").disabled = true :
                            document.getElementById("SBclicking").removeAttribute('disabled')),
                        storeLocalMDuration()) :
                    document.getElementById("Mstpclicking").removeAttribute('disabled');

            } else if (styles.contains('meetingFB') && BDintervalID) {
                checkMFB = confirm("Are you ready for the TP Meeting? ") ?
                    (MintervalIDFB = setInterval(updateMeetingFB, 1000),
                        storeLocalMFB(),
                        valueMFB.style.color = 'purple',
                        document.getElementById("MstpclickingFB").removeAttribute('disabled'),
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true,
                        document.getElementById("FBclicking").disabled = true,
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("SBclicking").disabled = true) :
                    EMintervalIDFB = clearInterval(MintervalIDFB);

            } else if (styles.contains('StopMeetingFB') && MintervalIDFB) {
                checkFMFB = confirm("Are you ready to finish your TP Meeting? ") ?
                    (EMintervalIDFB = clearInterval(MintervalIDFB),
                        storeLocalEMFB(),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("MstpclickingFB").disabled = true,
                        ((FBintervalID) ? document.getElementById("FBclicking").disabled = true :
                            document.getElementById("FBclicking").removeAttribute('disabled')),
                        ((LintervalID) ? document.getElementById("LBclicking").disabled = true :
                            document.getElementById("LBclicking").removeAttribute('disabled')),
                        ((SBintervalID) ? document.getElementById("SBclicking").disabled = true :
                            document.getElementById("SBclicking").removeAttribute('disabled')),
                        storeLocalMTPDuration()) :
                    document.getElementById("MstpclickingFB").removeAttribute('disabled');

            } else if (styles.contains('training') && BDintervalID) {
                checkT = confirm("Are you ready for the Training? ") ?
                    (TintervalID = setInterval(updateTraining, 1000),
                        storeLocalT(),
                        valueT.style.color = "purple",
                        document.getElementById("Tstpclicking").removeAttribute('disabled'),
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true,
                        document.getElementById("FBclicking").disabled = true,
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("SBclicking").disabled = true) :
                    ETintervalID = clearInterval(TintervalID);

            } else if (styles.contains('StopTraining') && TintervalID) {
                checkFT = confirm("Are you ready to finish your Training? ") ?
                    (ETintervalID = clearInterval(TintervalID),
                        storeLocalET(),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("Tstpclicking").disabled = true,
                        ((FBintervalID) ? document.getElementById("FBclicking").disabled = true :
                            document.getElementById("FBclicking").removeAttribute('disabled')),
                        ((LintervalID) ? document.getElementById("LBclicking").disabled = true :
                            document.getElementById("LBclicking").removeAttribute('disabled')),
                        ((SBintervalID) ? document.getElementById("SBclicking").disabled = true :
                            document.getElementById("SBclicking").removeAttribute('disabled')),
                        storeLocalTDuration()) :
                    document.getElementById("Tstpclicking").removeAttribute('disabled');

            } else if (styles.contains('trainingFB') && BDintervalID) {
                checkTFB = confirm("Are you ready for the TP Training? ") ?
                    (TintervalIDFB = setInterval(updateTrainingFB, 1000),
                        storeLocalTFB(),
                        valueTFB.style.color = 'purple',
                        document.getElementById("TstpclickingFB").removeAttribute('disabled'),
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("BDstpclicking").disabled = true,
                        document.getElementById("FBclicking").disabled = true,
                        document.getElementById("LBclicking").disabled = true,
                        document.getElementById("SBclicking").disabled = true) :
                    ETintervalIDFB = clearInterval(TintervalIDFB);

            } else if (styles.contains('StopTrainingFB') && TintervalIDFB) {
                checkETFB = confirm("Are you ready to finish your TP Training? ") ?
                    (ETintervalIDFB = clearInterval(TintervalIDFB),
                        storeLocalETFB(),
                        document.getElementById("Cclicking").removeAttribute('disabled'),
                        document.getElementById("Mclicking").removeAttribute('disabled'),
                        document.getElementById("MclickingFB").removeAttribute('disabled'),
                        document.getElementById("Tclicking").removeAttribute('disabled'),
                        document.getElementById("TclickingFB").removeAttribute('disabled'),
                        document.getElementById("BDstpclicking").removeAttribute('disabled'),
                        document.getElementById("TstpclickingFB").disabled = true,
                        ((FBintervalID) ? document.getElementById("FBclicking").disabled = true :
                            document.getElementById("FBclicking").removeAttribute('disabled')),
                        ((LintervalID) ? document.getElementById("LBclicking").disabled = true :
                            document.getElementById("LBclicking").removeAttribute('disabled')),
                        ((SBintervalID) ? document.getElementById("SBclicking").disabled = true :
                            document.getElementById("SBclicking").removeAttribute('disabled')),
                        storeLocalTTPDuration()) :
                    document.getElementById("TstpclickingFB").removeAttribute('disabled');

            } else if (styles.contains('StopBD') && SBintervalID) {
                checkED = confirm("Are you sure to finish your day? ") ?
                    (EBDintervalID = clearInterval(BDintervalID),
                        storeLocalED(),
                        ECintervalID = clearInterval(CintervalID),
                        EMintervalID = clearInterval(MintervalID),
                        EMintervalIDFB = clearInterval(MintervalIDFB),
                        ETintervalID = clearInterval(TintervalID),
                        ETintervalIDFB = clearInterval(TintervalIDFB),
                        document.getElementById("BDstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Cclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Cstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Mclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Mstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("MclickingFB").setAttribute("style", "color: #ccc"),
                        document.getElementById("MstpclickingFB").setAttribute("style", "color: #ccc"),
                        document.getElementById("Tclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("Tstpclicking").setAttribute("style", "color: #ccc"),
                        document.getElementById("TclickingFB").setAttribute("style", "color: #ccc"),
                        document.getElementById("TstpclickingFB").setAttribute("style", "color: #ccc"),
                        document.getElementById("BDstpclicking").disabled = true,
                        document.getElementById("Cclicking").disabled = true,
                        document.getElementById("Cstpclicking").disabled = true,
                        document.getElementById("Mclicking").disabled = true,
                        document.getElementById("Mstpclicking").disabled = true,
                        document.getElementById("MclickingFB").disabled = true,
                        document.getElementById("MstpclickingFB").disabled = true,
                        document.getElementById("Tclicking").disabled = true,
                        document.getElementById("Tstpclicking").disabled = true,
                        document.getElementById("TclickingFB").disabled = true,
                        document.getElementById("TstpclickingFB").disabled = true,
                        storeLocalBDDuration()) :
                    document.getElementById("BDstpclicking").removeAttribute('disabled');

            }
        });
    });
};


//Setting of intervals looping here

function updateShortLogin() {
    var inputTextSLClicking = document.getElementById('SLClicking').value;
    countdownShortLogin.innerHTML = `${inputTextSLClicking}`;
}

function updateBeginDay() {
    let hoursBeginDay = Math.floor(timeBeginDay / 3600) % 24;
    let minutesBeginDay = Math.floor(timeBeginDay / 60) % 60;
    let secondBeginDay = Math.floor(timeBeginDay % 60);
    hoursBeginDay = hoursBeginDay < 10 ? '0' + hoursBeginDay : hoursBeginDay;
    minutesBeginDay = minutesBeginDay < 10 ? '0' + minutesBeginDay : minutesBeginDay;
    secondBeginDay = secondBeginDay < 10 ? '0' + secondBeginDay : secondBeginDay;
    countdownBeginDay.innerHTML = `${hoursBeginDay}:${minutesBeginDay}:${secondBeginDay}`;
    timeBeginDay++;

}


function update1stBreak() {
    let hours1stBreak = Math.floor(time1stBreak / 3600) % 24;
    let minutes1stBreak = Math.floor(time1stBreak / 60) % 60;
    let second1stBreak = Math.floor(time1stBreak % 60);
    hours1stBreak = hours1stBreak < 10 ? '0' + hours1stBreak : hours1stBreak;
    minutes1stBreak = minutes1stBreak < 10 ? '0' + minutes1stBreak : minutes1stBreak;
    second1stBreak = second1stBreak < 10 ? '0' + second1stBreak : second1stBreak;
    if (minutes1stBreak <= 13) {
        document.getElementById('value1stBreak').setAttribute("style", "color: #006400");
    } else if (minutes1stBreak > 13 && minutes1stBreak < 15) {
        document.getElementById('value1stBreak').setAttribute("style", "color: #eda600");
    } else {
        document.getElementById('value1stBreak').setAttribute("style", "color: #fc3200");
    }
    countdown1stBreak.innerHTML = `${hours1stBreak}:${minutes1stBreak}:${second1stBreak}`;
    time1stBreak++;
}

function updateLunch() {
    let hoursLunch = Math.floor(timeLunch / 3600) % 24;
    let minutesLunch = Math.floor(timeLunch / 60) % 60;
    let secondLunch = Math.floor(timeLunch % 60);
    hoursLunch = hoursLunch < 10 ? '0' + hoursLunch : hoursLunch;
    minutesLunch = minutesLunch < 10 ? '0' + minutesLunch : minutesLunch;
    secondLunch = secondLunch < 10 ? '0' + secondLunch : secondLunch;
    if (minutesLunch <= 55) {
        document.getElementById('valueLunch').setAttribute("style", "color: #006400");
    } else if (minutesLunch > 55 && minutesLunch < 60) {
        document.getElementById('valueLunch').setAttribute("style", "color: #eda600");
    } else {
        document.getElementById('valueLunch').setAttribute("style", "color: #fc3200");
    }
    countdownLunch.innerHTML = `${hoursLunch}:${minutesLunch}:${secondLunch}`;
    timeLunch++;
}

function update2ndBreak() {
    let hours2ndBreak = Math.floor(time2ndBreak / 3600) % 24;
    let minutes2ndBreak = Math.floor(time2ndBreak / 60) % 60;
    let second2ndBreak = Math.floor(time2ndBreak % 60);
    hours2ndBreak = hours2ndBreak < 10 ? '0' + hours2ndBreak : hours2ndBreak;
    minutes2ndBreak = minutes2ndBreak < 10 ? '0' + minutes2ndBreak : minutes2ndBreak;
    second2ndBreak = second2ndBreak < 10 ? '0' + second2ndBreak : second2ndBreak;
    if (minutes2ndBreak <= 13) {
        document.getElementById('value2ndBreak').setAttribute("style", "color: #006400");
    } else if (minutes2ndBreak > 13 && minutes2ndBreak < 15) {
        document.getElementById('value2ndBreak').setAttribute("style", "color: #eda600");
    } else {
        document.getElementById('value2ndBreak').setAttribute("style", "color: #fc3200");
    }
    countdown2ndBreak.innerHTML = `${hours2ndBreak}:${minutes2ndBreak}:${second2ndBreak}`;
    time2ndBreak++;
}

function updateCoaching() {
    let hoursCoaching = Math.floor(timeCoaching / 3600) % 24;
    let minutesCoaching = Math.floor(timeCoaching / 60) % 60;
    let secondCoaching = Math.floor(timeCoaching % 60);
    hoursCoaching = hoursCoaching < 10 ? '0' + hoursCoaching : hoursCoaching;
    minutesCoaching = minutesCoaching < 10 ? '0' + minutesCoaching : minutesCoaching;
    secondCoaching = secondCoaching < 10 ? '0' + secondCoaching : secondCoaching;
    countdownCoaching.innerHTML = `${hoursCoaching}:${minutesCoaching}:${secondCoaching}`;
    timeCoaching++;
}

function updateMeeting() {
    let hoursMeeting = Math.floor(timeMeeting / 3600) % 24;
    let minutesMeeting = Math.floor(timeMeeting / 60) % 60;
    let secondMeeting = Math.floor(timeMeeting % 60);
    hoursMeeting = hoursMeeting < 10 ? '0' + hoursMeeting : hoursMeeting;
    minutesMeeting = minutesMeeting < 10 ? '0' + minutesMeeting : minutesMeeting;
    secondMeeting = secondMeeting < 10 ? '0' + secondMeeting : secondMeeting;
    countdownMeeting.innerHTML = `${hoursMeeting}:${minutesMeeting}:${secondMeeting}`;
    timeMeeting++;
}

function updateMeetingFB() {
    let hoursMeetingFB = Math.floor(timeMeetingFB / 3600) % 24;
    let minutesMeetingFB = Math.floor(timeMeetingFB / 60) % 60;
    let secondMeetingFB = Math.floor(timeMeetingFB % 60);
    hoursMeetingFB = hoursMeetingFB < 10 ? '0' + hoursMeetingFB : hoursMeetingFB;
    minutesMeetingFB = minutesMeetingFB < 10 ? '0' + minutesMeetingFB : minutesMeetingFB;
    secondMeetingFB = secondMeetingFB < 10 ? '0' + secondMeetingFB : secondMeetingFB;
    countdownMeetingFB.innerHTML = `${hoursMeetingFB}:${minutesMeetingFB}:${secondMeetingFB}`;
    timeMeetingFB++;
}

function updateTraining() {
    let hoursTraining = Math.floor(timeTraining / 3600) % 24;
    let minutesTraining = Math.floor(timeTraining / 60) % 60;
    let secondTraining = Math.floor(timeTraining % 60);
    hoursTraining = hoursTraining < 10 ? '0' + hoursTraining : hoursTraining;
    minutesTraining = minutesTraining < 10 ? '0' + minutesTraining : minutesTraining;
    secondTraining = secondTraining < 10 ? '0' + secondTraining : secondTraining;
    countdownTraining.innerHTML = `${hoursTraining}:${minutesTraining}:${secondTraining}`;
    timeTraining++;
}

function updateTrainingFB() {
    let hoursTrainingFB = Math.floor(timeTrainingFB / 3600) % 24;
    let minutesTrainingFB = Math.floor(timeTrainingFB / 60) % 60;
    let secondTrainingFB = Math.floor(timeTrainingFB % 60);
    hoursTrainingFB = hoursTrainingFB < 10 ? '0' + hoursTrainingFB : hoursTrainingFB;
    minutesTrainingFB = minutesTrainingFB < 10 ? '0' + minutesTrainingFB : minutesTrainingFB;
    secondTrainingFB = secondTrainingFB < 10 ? '0' + secondTrainingFB : secondTrainingFB;
    countdownTrainingFB.innerHTML = `${hoursTrainingFB}:${minutesTrainingFB}:${secondTrainingFB}`;
    timeTrainingFB++;
}


/////////////////////////////////// store Data in the localStorage ///////////////////////////////////

function shortloginFunc() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        console.log("Short_login_is: ", inputTextSLClicking);
        get_Short = localStorage.setItem(inputTextSLClicking + " : " + "Short_login_is: ", inputTextSLClicking);
        showshort_login.innerHTML = "Short_login_is: " + `${inputTextSLClicking}`;
        showshort_login_save.innerHTML = `${inputTextSLClicking}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?sl=" + showshort_login_save.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Short_login_is: " + encodeURIComponent(get_Short));

    }
}

function storeLocalBD() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayBD = new Date();
        dateBD = (todayBD.getDate() < 10 ? '0' + todayBD.getDate() : todayBD.getDate()) + '-' + ((todayBD.getMonth() + 1) < 10 ? '0' + (todayBD.getMonth() + 1) : (todayBD.getMonth() + 1)) + '-' + todayBD.getFullYear();
        timeBD = (todayBD.getHours() < 10 ? '0' + todayBD.getHours() : todayBD.getHours()) + ":" + (todayBD.getMinutes() < 10 ? '0' + todayBD.getMinutes() : todayBD.getMinutes()) + ":" + (todayBD.getSeconds() < 10 ? '0' + todayBD.getSeconds() : todayBD.getSeconds());
        console.log("Started_Shift_at: ", dateBD, timeBD);
        get_Begin = localStorage.setItem(inputTextSLClicking + " : " + "Started_Shift_at: " + dateBD, timeBD);
        BeginDayShow.innerHTML = inputTextSLClicking + " : " + "Started_Shift_at: " + `${dateBD} : ${timeBD}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?bd=" + BeginDayShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_Shift_at: " + encodeURIComponent(get_Begin));

    }
}


function storeLocalFB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayFB = new Date();
        dateFB = (todayFB.getDate() < 10 ? '0' + todayFB.getDate() : todayFB.getDate()) + '-' + ((todayFB.getMonth() + 1) < 10 ? '0' + (todayFB.getMonth() + 1) : (todayFB.getMonth() + 1)) + '-' + todayFB.getFullYear();
        timeFB = (todayFB.getHours() < 10 ? '0' + todayFB.getHours() : todayFB.getHours()) + ":" + (todayFB.getMinutes() < 10 ? '0' + todayFB.getMinutes() : todayFB.getMinutes()) + ":" + (todayFB.getSeconds() < 10 ? '0' + todayFB.getSeconds() : todayFB.getSeconds());
        console.log("Started_1st_Break at: ", dateFB, timeFB);
        get_FB = localStorage.setItem(inputTextSLClicking + " : " + "Started_1st_Break_at: " + dateFB, timeFB);
        c1stBreakShow.innerHTML = inputTextSLClicking + " : " + "Started_1st_Break_at: " + `${dateFB} : ${timeFB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?fb=" + c1stBreakShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_1st_Break_at: " + encodeURIComponent(get_FB));

    }
}


function storeLocalEFB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayEFB = new Date();
        dateEFB = (todayEFB.getDate() < 10 ? '0' + todayEFB.getDate() : todayEFB.getDate()) + '-' + ((todayEFB.getMonth() + 1) < 10 ? '0' + (todayEFB.getMonth() + 1) : (todayEFB.getMonth() + 1)) + '-' + todayEFB.getFullYear();
        timeEFB = (todayEFB.getHours() < 10 ? '0' + todayEFB.getHours() : todayEFB.getHours()) + ":" + (todayEFB.getMinutes() < 10 ? '0' + todayEFB.getMinutes() : todayEFB.getMinutes()) + ":" + (todayEFB.getSeconds() < 10 ? '0' + todayEFB.getSeconds() : todayEFB.getSeconds());
        console.log("Ended_1st_Break_at: ", dateEFB, timeEFB);
        get_EFB = localStorage.setItem(inputTextSLClicking + " : " + "Ended_1st_Break_at: " + dateEFB, timeEFB);
        End1stBreakShow.innerHTML = inputTextSLClicking + " : " + "Ended_1st_Break_at: " + `${dateEFB} : ${timeEFB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?efb=" + End1stBreakShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_1st_Break_at: " + encodeURIComponent(get_EFB));

    }
}


function storeLocalLB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayLB = new Date();
        dateLB = (todayLB.getDate() < 10 ? '0' + todayLB.getDate() : todayLB.getDate()) + '-' + ((todayLB.getMonth() + 1) < 10 ? '0' + (todayLB.getMonth() + 1) : (todayLB.getMonth() + 1)) + '-' + todayLB.getFullYear();
        timeLB = (todayLB.getHours() < 10 ? '0' + todayLB.getHours() : todayLB.getHours()) + ":" + (todayLB.getMinutes() < 10 ? '0' + todayLB.getMinutes() : todayLB.getMinutes()) + ":" + (todayLB.getSeconds() < 10 ? '0' + todayLB.getSeconds() : todayLB.getSeconds());
        console.log("Started_lunch_Break_at: ", dateLB, timeLB);
        get_L = localStorage.setItem(inputTextSLClicking + " : " + "Started_lunch_Break_at: " + dateLB, timeLB);
        LunchShow.innerHTML = inputTextSLClicking + " : " + "Started_lunch_Break_at: " + `${dateLB} : ${timeLB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?lb=" + LunchShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_lunch_Break_at: " + encodeURIComponent(get_L));

    }
}


function storeLocalELB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayELB = new Date();
        dateELB = (todayELB.getDate() < 10 ? '0' + todayELB.getDate() : todayELB.getDate()) + '-' + ((todayELB.getMonth() + 1) < 10 ? '0' + (todayELB.getMonth() + 1) : (todayELB.getMonth() + 1)) + '-' + todayELB.getFullYear();
        timeELB = (todayELB.getHours() < 10 ? '0' + todayELB.getHours() : todayELB.getHours()) + ":" + (todayELB.getMinutes() < 10 ? '0' + todayELB.getMinutes() : todayELB.getMinutes()) + ":" + (todayELB.getSeconds() < 10 ? '0' + todayELB.getSeconds() : todayELB.getSeconds());
        console.log("Ended_lunch_Break_at: ", dateELB, timeELB);
        get_ELB = localStorage.setItem(inputTextSLClicking + " : " + "Ended_lunch_Break_at: " + dateELB, timeELB);
        EndLunchShow.innerHTML = inputTextSLClicking + " : " + "Ended_lunch_Break_at: " + `${dateELB} : ${timeELB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?elb=" + EndLunchShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_lunch_Break_at: " + encodeURIComponent(get_ELB));

    }
}


function storeLocalSB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todaySB = new Date();
        dateSB = (todaySB.getDate() < 10 ? '0' + todaySB.getDate() : todaySB.getDate()) + '-' + ((todaySB.getMonth() + 1) < 10 ? '0' + (todaySB.getMonth() + 1) : (todaySB.getMonth() + 1)) + '-' + todaySB.getFullYear();
        timeSB = (todaySB.getHours() < 10 ? '0' + todaySB.getHours() : todaySB.getHours()) + ":" + (todaySB.getMinutes() < 10 ? '0' + todaySB.getMinutes() : todaySB.getMinutes()) + ":" + (todaySB.getSeconds() < 10 ? '0' + todaySB.getSeconds() : todaySB.getSeconds());
        console.log("Started_2nd_Break_at: ", dateSB, timeSB);
        get_SB = localStorage.setItem(inputTextSLClicking + " : " + "Started_2nd_Break_at: " + dateSB, timeSB);
        c2ndBreakShow.innerHTML = inputTextSLClicking + " : " + "Started_2nd_Break_at: " + `${dateSB} : ${timeSB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?sb=" + c2ndBreakShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_2nd_Break_at: " + encodeURIComponent(get_SB));

    }
}


function storeLocalESB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayESB = new Date();
        dateESB = (todayESB.getDate() < 10 ? '0' + todayESB.getDate() : todayESB.getDate()) + '-' + ((todayESB.getMonth() + 1) < 10 ? '0' + (todayESB.getMonth() + 1) : (todayESB.getMonth() + 1)) + '-' + todayESB.getFullYear();
        timeESB = (todayESB.getHours() < 10 ? '0' + todayESB.getHours() : todayESB.getHours()) + ":" + (todayESB.getMinutes() < 10 ? '0' + todayESB.getMinutes() : todayESB.getMinutes()) + ":" + (todayESB.getSeconds() < 10 ? '0' + todayESB.getSeconds() : todayESB.getSeconds());
        console.log("Ended_2nd_Break_at: ", dateESB, timeESB);
        get_ESB = localStorage.setItem(inputTextSLClicking + " : " + "Ended_2nd_Break_at: " + dateESB, timeESB);
        End2ndBreakShow.innerHTML = inputTextSLClicking + " : " + "Ended_2nd_Break_at: " + `${dateESB} : ${timeESB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?esb=" + End2ndBreakShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_2nd_Break_at: " + encodeURIComponent(get_ESB));

    }
}


function storeLocalED() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayEBD = new Date();
        dateEBD = (todayEBD.getDate() < 10 ? '0' + todayEBD.getDate() : todayEBD.getDate()) + '-' + ((todayEBD.getMonth() + 1) < 10 ? '0' + (todayEBD.getMonth() + 1) : (todayEBD.getMonth() + 1)) + '-' + todayEBD.getFullYear();
        timeEBD = (todayEBD.getHours() < 10 ? '0' + todayEBD.getHours() : todayEBD.getHours()) + ":" + (todayEBD.getMinutes() < 10 ? '0' + todayEBD.getMinutes() : todayEBD.getMinutes()) + ":" + (todayEBD.getSeconds() < 10 ? '0' + todayEBD.getSeconds() : todayEBD.getSeconds());
        console.log("Ended_Shift_at: ", dateEBD, timeEBD);
        get_End = localStorage.setItem(inputTextSLClicking + " : " + "Ended_Shift_at: " + dateEBD, timeEBD);
        EndedDayShow.innerHTML = inputTextSLClicking + " : " + "Ended_Shift_at: " + `${dateEBD} : ${timeEBD}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?ed=" + EndedDayShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_Shift_at: " + encodeURIComponent(get_End));

    }
}


function storeLocalC() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayC = new Date();
        dateC = (todayC.getDate() < 10 ? '0' + todayC.getDate() : todayC.getDate()) + '-' + ((todayC.getMonth() + 1) < 10 ? '0' + (todayC.getMonth() + 1) : (todayC.getMonth() + 1)) + '-' + todayC.getFullYear();
        timeC = (todayC.getHours() < 10 ? '0' + todayC.getHours() : todayC.getHours()) + ":" + (todayC.getMinutes() < 10 ? '0' + todayC.getMinutes() : todayC.getMinutes()) + ":" + (todayC.getSeconds() < 10 ? '0' + todayC.getSeconds() : todayC.getSeconds());
        console.log("Started_Coaching_at: ", dateC, timeC);
        get_C = localStorage.setItem(inputTextSLClicking + " : " + "Started_Coaching_at: " + dateC, timeC);
        CoachingShow.innerHTML = inputTextSLClicking + " : " + "Started_Coaching_at: " + `${dateC} : ${timeC}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?c=" + CoachingShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_Coaching_at: " + encodeURIComponent(get_C));

    }
}


function storeLocalEC() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayEC = new Date();
        dateEC = (todayEC.getDate() < 10 ? '0' + todayEC.getDate() : todayEC.getDate()) + '-' + ((todayEC.getMonth() + 1) < 10 ? '0' + (todayEC.getMonth() + 1) : (todayEC.getMonth() + 1)) + '-' + todayEC.getFullYear();
        timeEC = (todayEC.getHours() < 10 ? '0' + todayEC.getHours() : todayEC.getHours()) + ":" + (todayEC.getMinutes() < 10 ? '0' + todayEC.getMinutes() : todayEC.getMinutes()) + ":" + (todayEC.getSeconds() < 10 ? '0' + todayEC.getSeconds() : todayEC.getSeconds());
        console.log("Ended_Coaching_at: ", dateEC, timeEC);
        get_EC = localStorage.setItem(inputTextSLClicking + " : " + "Ended_Coaching_at: " + dateEC, timeEC);
        EndCoachingShow.innerHTML = inputTextSLClicking + " : " + "Ended_Coaching_at: " + `${dateEC} : ${timeEC}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?ec=" + EndCoachingShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_Coaching_at: " + encodeURIComponent(get_EC));

    }
}


function storeLocalM() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayM = new Date();
        dateM = (todayM.getDate() < 10 ? '0' + todayM.getDate() : todayM.getDate()) + '-' + ((todayM.getMonth() + 1) < 10 ? '0' + (todayM.getMonth() + 1) : (todayM.getMonth() + 1)) + '-' + todayM.getFullYear();
        timeM = (todayM.getHours() < 10 ? '0' + todayM.getHours() : todayM.getHours()) + ":" + (todayM.getMinutes() < 10 ? '0' + todayM.getMinutes() : todayM.getMinutes()) + ":" + (todayM.getSeconds() < 10 ? '0' + todayM.getSeconds() : todayM.getSeconds());
        console.log("Started_Meeting_at: ", dateM, timeM);
        get_M = localStorage.setItem(inputTextSLClicking + " : " + "Started_Meeting_at: " + dateM, timeM);
        MeetingShow.innerHTML = inputTextSLClicking + " : " + "Started_Meeting_at: " + `${dateM} : ${timeM}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?m=" + MeetingShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_Meeting_at: " + encodeURIComponent(get_M));

    }
}


function storeLocalEM() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayEM = new Date();
        dateEM = (todayEM.getDate() < 10 ? '0' + todayEM.getDate() : todayEM.getDate()) + '-' + ((todayEM.getMonth() + 1) < 10 ? '0' + (todayEM.getMonth() + 1) : (todayEM.getMonth() + 1)) + '-' + todayEM.getFullYear();
        timeEM = (todayEM.getHours() < 10 ? '0' + todayEM.getHours() : todayEM.getHours()) + ":" + (todayEM.getMinutes() < 10 ? '0' + todayEM.getMinutes() : todayEM.getMinutes()) + ":" + (todayEM.getSeconds() < 10 ? '0' + todayEM.getSeconds() : todayEM.getSeconds());
        console.log("Ended_Meeting_at: ", dateEM, timeEM);
        get_EM = localStorage.setItem(inputTextSLClicking + " : " + "Ended_Meeting_at: " + dateEM, timeEM);
        EndMeetingShow.innerHTML = inputTextSLClicking + " : " + "Ended_Meeting_at: " + `${dateEM} : ${timeEM}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?em=" + EndMeetingShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_Meeting_at: " + encodeURIComponent(get_EM));

    }
}


function storeLocalMFB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayMFB = new Date();
        dateMFB = (todayMFB.getDate() < 10 ? '0' + todayMFB.getDate() : todayMFB.getDate()) + '-' + ((todayMFB.getMonth() + 1) < 10 ? '0' + (todayMFB.getMonth() + 1) : (todayMFB.getMonth() + 1)) + '-' + todayMFB.getFullYear();
        timeMFB = (todayMFB.getHours() < 10 ? '0' + todayMFB.getHours() : todayMFB.getHours()) + ":" + (todayMFB.getMinutes() < 10 ? '0' + todayMFB.getMinutes() : todayMFB.getMinutes()) + ":" + (todayMFB.getSeconds() < 10 ? '0' + todayMFB.getSeconds() : todayMFB.getSeconds());
        console.log("Started_Meeting_TP_at: ", dateMFB, timeMFB);
        get_MFB = localStorage.setItem(inputTextSLClicking + " : " + "Started_Meeting_TP_at: " + dateMFB, timeMFB);
        MeetingFBShow.innerHTML = inputTextSLClicking + " : " + "Started_Meeting_TP_at: " + `${dateMFB} : ${timeMFB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?mfb=" + MeetingFBShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_Meeting_TP_at: " + encodeURIComponent(get_MFB));

    }
}


function storeLocalEMFB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayEMFB = new Date();
        dateEMFB = (todayEMFB.getDate() < 10 ? '0' + todayEMFB.getDate() : todayEMFB.getDate()) + '-' + ((todayEMFB.getMonth() + 1) < 10 ? '0' + (todayEMFB.getMonth() + 1) : (todayEMFB.getMonth() + 1)) + '-' + todayEMFB.getFullYear();
        timeEMFB = (todayEMFB.getHours() < 10 ? '0' + todayEMFB.getHours() : todayEMFB.getHours()) + ":" + (todayEMFB.getMinutes() < 10 ? '0' + todayEMFB.getMinutes() : todayEMFB.getMinutes()) + ":" + (todayEMFB.getSeconds() < 10 ? '0' + todayEMFB.getSeconds() : todayEMFB.getSeconds());
        console.log("Ended_Meeting_TP_at: ", dateEMFB, timeEMFB);
        get_EMFB = localStorage.setItem(inputTextSLClicking + " : " + "Ended_Meeting_TP_at: " + dateEMFB, timeEMFB);
        EndMeetingFBShow.innerHTML = inputTextSLClicking + " : " + "Ended_Meeting_TP_at: " + `${dateEMFB} : ${timeEMFB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?emfb=" + EndMeetingFBShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_Meeting_TP_at: " + encodeURIComponent(get_EMFB));

    }
}


function storeLocalT() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayT = new Date();
        dateT = (todayT.getDate() < 10 ? '0' + todayT.getDate() : todayT.getDate()) + '-' + ((todayT.getMonth() + 1) < 10 ? '0' + (todayT.getMonth() + 1) : (todayT.getMonth() + 1)) + '-' + todayT.getFullYear();
        timeT = (todayT.getHours() < 10 ? '0' + todayT.getHours() : todayT.getHours()) + ":" + (todayT.getMinutes() < 10 ? '0' + todayT.getMinutes() : todayT.getMinutes()) + ":" + (todayT.getSeconds() < 10 ? '0' + todayT.getSeconds() : todayT.getSeconds());
        console.log("Started_training_at: ", dateT, timeT);
        get_T = localStorage.setItem(inputTextSLClicking + " : " + "Started_training_at: " + dateT, timeT);
        TrainingShow.innerHTML = inputTextSLClicking + " : " + "Started_training_at: " + `${dateT} : ${timeT}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?t=" + TrainingShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_training_at: " + encodeURIComponent(get_T));

    }
}


function storeLocalET() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayET = new Date();
        dateET = (todayET.getDate() < 10 ? '0' + todayET.getDate() : todayET.getDate()) + '-' + ((todayET.getMonth() + 1) < 10 ? '0' + (todayET.getMonth() + 1) : (todayET.getMonth() + 1)) + '-' + todayET.getFullYear();
        timeET = (todayET.getHours() < 10 ? '0' + todayET.getHours() : todayET.getHours()) + ":" + (todayET.getMinutes() < 10 ? '0' + todayET.getMinutes() : todayET.getMinutes()) + ":" + (todayET.getSeconds() < 10 ? '0' + todayET.getSeconds() : todayET.getSeconds());
        console.log("Ended_training_at: ", dateET, timeET);
        get_ET = localStorage.setItem(inputTextSLClicking + " : " + "Ended_training_at: " + dateET, timeET);
        EndTrainingShow.innerHTML = inputTextSLClicking + " : " + "Ended_training_at: " + `${dateET} : ${timeET}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?et=" + EndTrainingShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_training_at: " + encodeURIComponent(get_ET));

    }
}


function storeLocalTFB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayTFB = new Date();
        dateTFB = (todayTFB.getDate() < 10 ? '0' + todayTFB.getDate() : todayTFB.getDate()) + '-' + ((todayTFB.getMonth() + 1) < 10 ? '0' + (todayTFB.getMonth() + 1) : (todayTFB.getMonth() + 1)) + '-' + todayTFB.getFullYear();
        timeTFB = (todayTFB.getHours() < 10 ? '0' + todayTFB.getHours() : todayTFB.getHours()) + ":" + (todayTFB.getMinutes() < 10 ? '0' + todayTFB.getMinutes() : todayTFB.getMinutes()) + ":" + (todayTFB.getSeconds() < 10 ? '0' + todayTFB.getSeconds() : todayTFB.getSeconds());
        console.log("Started_Training_TP_at: ", dateTFB, timeTFB);
        get_TFB = localStorage.setItem(inputTextSLClicking + " : " + "Started_Training_TP_at: " + dateTFB, timeTFB);
        TrainingFBShow.innerHTML = inputTextSLClicking + " : " + "Started_Training_TP_at: " + `${dateTFB} : ${timeTFB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?tfb=" + TrainingFBShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Started_Training_TP_at: " + encodeURIComponent(get_TFB));

    }
}


function storeLocalETFB() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        todayETFB = new Date();
        dateETFB = (todayETFB.getDate() < 10 ? '0' + todayETFB.getDate() : todayETFB.getDate()) + '-' + ((todayETFB.getMonth() + 1) < 10 ? '0' + (todayETFB.getMonth() + 1) : (todayETFB.getMonth() + 1)) + '-' + todayETFB.getFullYear();
        timeETFB = (todayETFB.getHours() < 10 ? '0' + todayETFB.getHours() : todayETFB.getHours()) + ":" + (todayETFB.getMinutes() < 10 ? '0' + todayETFB.getMinutes() : todayETFB.getMinutes()) + ":" + (todayETFB.getSeconds() < 10 ? '0' + todayETFB.getSeconds() : todayETFB.getSeconds());
        console.log("Ended_Training_TP_at: ", dateETFB, timeETFB);
        get_ETFB = localStorage.setItem(inputTextSLClicking + " : " + "Ended_Training_TP_at: " + dateETFB, timeETFB);
        EndTrainingFBShow.innerHTML = inputTextSLClicking + " : " + "Ended_Training_TP_at: " + `${dateETFB} : ${timeETFB}`;
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?etfb=" + EndTrainingFBShow.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Ended_Training_TP_at: " + encodeURIComponent(get_ETFB));

    }
}

///////////////////////Store the duration///////////////////////


function storeLocalBDDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeBDDuration.innerHTML = inputTextSLClicking + " : " + countdownBeginDay.innerHTML;
        let get_Duration_BD = localStorage.setItem(inputTextSLClicking + " : " + "Start_shift_duration_is: ", storeBDDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?BDduration=" + storeBDDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Start_shift_duration_is" + encodeURIComponent(get_Duration_BD));

    }
}


function storeLocalFBDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeFBDuration.innerHTML = inputTextSLClicking + " : " + countdown1stBreak.innerHTML;
        let get_Duration_FB = localStorage.setItem(inputTextSLClicking + " : " + "First_Break_duration_is: ", storeFBDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?FBduration=" + storeFBDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("First_Break_duration_is" + encodeURIComponent(get_Duration_FB));

    }
}


function storeLocalLBDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeLBDuration.innerHTML = inputTextSLClicking + " : " + countdownLunch.innerHTML;
        let get_Duration_LB = localStorage.setItem(inputTextSLClicking + " : " + "Lunch_Break_duration_is: ", storeLBDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?LBduration=" + storeLBDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Lunch_Break_duration_is" + encodeURIComponent(get_Duration_LB));

    }
}


function storeLocalSBDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeSBDuration.innerHTML = inputTextSLClicking + " : " + countdown2ndBreak.innerHTML;
        let get_Duration_SB = localStorage.setItem(inputTextSLClicking + " : " + "Second_Break_duration_is: ", storeSBDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?SBduration=" + storeSBDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Second_Break_duration_is" + encodeURIComponent(get_Duration_SB));

    }
}

function storeLocalCDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeCDuration.innerHTML = inputTextSLClicking + " : " + countdownCoaching.innerHTML;
        let get_Duration_C = localStorage.setItem(inputTextSLClicking + " : " + "Coaching_duration_is: ", storeCDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?Cduration=" + storeCDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Coaching_duration_is" + encodeURIComponent(get_Duration_C));

    }
}


function storeLocalMDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeMDuration.innerHTML = inputTextSLClicking + " : " + countdownMeeting.innerHTML;
        let get_Duration_M = localStorage.setItem(inputTextSLClicking + " : " + "Meeting_duration_is: ", storeMDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?Mduration=" + storeMDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Meeting_duration_is" + encodeURIComponent(get_Duration_M));

    }
}

function storeLocalMTPDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeMTPDuration.innerHTML = inputTextSLClicking + " : " + countdownMeetingFB.innerHTML;
        let get_Duration_MTP = localStorage.setItem(inputTextSLClicking + " : " + "Meeting_TP_duration_is: ", storeMTPDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?MTPduration=" + storeMTPDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Meeting_TP_duration_is" + encodeURIComponent(get_Duration_MTP));

    }
}

function storeLocalTDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeTDuration.innerHTML = inputTextSLClicking + " : " + countdownTraining.innerHTML;
        let get_Duration_T = localStorage.setItem(inputTextSLClicking + " : " + "Training_duration_is: ", storeTDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?Tduration=" + storeTDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Training_duration_is" + encodeURIComponent(get_Duration_T));

    }
}

function storeLocalTTPDuration() {
    if (typeof(Storage) != "undefined") {
        var inputTextSLClicking = document.getElementById('SLClicking').value;
        storeTTPDuration.innerHTML = inputTextSLClicking + " : " + countdownTrainingFB.innerHTML;
        let get_Duration_TTP = localStorage.setItem(inputTextSLClicking + " : " + "Training_TP_duration_is: ", storeTTPDuration.innerHTML);
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function() {
            if (oReq.readyState === 4) {
                if (oReq.status > 199 && oReq.status < 400) {
                    console.log("successful response");
                } else {
                    console.log("failed response: " + oReq.status);
                }
            }
        };
        oReq.open("GET", "../data/data.php?TTPduration=" + storeTTPDuration.innerHTML, true);
        oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        oReq.send("Training_TP_duration_is" + encodeURIComponent(get_Duration_TTP));

    }
}

///////////////////////////////// Reloadtimer saved (Security protocol of app) /////////////////////////////////

function updateReload() {
    if (window.addEventListener("beforeunload", function(e) {

            if (typeof(Storage) != "undefined") {
                var inputTextSLClicking = document.getElementById('SLClicking').value;
                let todayBDDur = new Date();
                let dateBDDur = (todayBDDur.getDate() < 10 ? '0' + todayBDDur.getDate() : todayBDDur.getDate()) + '-' + ((todayBDDur.getMonth() + 1) < 10 ? '0' + (todayBDDur.getMonth() + 1) : (todayBDDur.getMonth() + 1)) + '-' + todayBDDur.getFullYear();
                let timeBDDur = (todayBDDur.getHours() < 10 ? '0' + todayBDDur.getHours() : todayBDDur.getHours()) + ":" + (todayBDDur.getMinutes() < 10 ? '0' + todayBDDur.getMinutes() : todayBDDur.getMinutes()) + ":" + (todayBDDur.getSeconds() < 10 ? '0' + todayBDDur.getSeconds() : todayBDDur.getSeconds());
                console.log("Page_reloaded_closed_at: ", dateBDDur, timeBDDur);
                get_DurationBegin = localStorage.setItem(inputTextSLClicking + " : " + "Page_reloaded_closed_at: " + dateBDDur, timeBDDur);
                reloadValue.innerHTML = inputTextSLClicking + " : " + "Page_reload_attempted_at: " + `${dateBDDur} : ${timeBDDur}`;
                var oReq = new XMLHttpRequest();
                oReq.onreadystatechange = function() {
                    if (oReq.readyState === 4) {
                        if (oReq.status > 199 && oReq.status < 400) {
                            console.log("successful response");
                        } else {
                            console.log("failed response: " + oReq.status);
                        }
                    }
                };
                oReq.open("GET", "../data/data.php?Reload=" + reloadValue.innerHTML, true);
                oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                oReq.send("Page_reloaded_closed_at: " + encodeURIComponent(get_DurationBegin));
            }
            e.preventDefault();
            e.returnValue = "If you have not finished 9 hours, your timer data will be lost, please press cancel to resume timer!!!";

        }));
};

///////////////////////////////// Inactivity Vanilla JavaScript Window alert function(Without jQuery) /////////////////////////////////

function idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well      
    window.ontouchmove = resetTimer; // required by some devices 
    window.onclick = resetTimer; // catches touchpad clicks as well
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function yourFunction() {
        alert("You are about to get logged out, please click Ok to stay active. ")
            // your function for too long inactivity goes here e.g. window.location.href = 'logout.php';
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(yourFunction, 3000); // time is in milliseconds
    }
}