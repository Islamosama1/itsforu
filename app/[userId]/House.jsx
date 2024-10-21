"use client";
import ProfilePic from "./components/ProfilePic";
import UserInfo from "./components/UserInfo";
import BgDiv from "./components/BgDiv";
import MyLinks from "./components/MyLinks";
import SupportBanner from "./components/SupportBanner";
import React, { useEffect, useState } from "react";
import { fetchUserData } from "@/lib/fetch data/fetchUserData";
import { fireApp } from "@/important/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import SensitiveWarning from "./components/SensitiveWarning";
import { toast } from "react-hot-toast";
import { useTimer } from "react-cool-timer";
import dynamic from "next/dynamic";
const CountDownTimer = dynamic(
  () => import("countdown-timer-mui").then((mod) => mod.CountDownTimer),
  { ssr: false }
);
export const HouseContext = React.createContext();

export default function House({ userId }) {
  const [sensitiveWarning, setSensitiveWarning] = useState(null);
  const [hasSensitiveContent, setHasSensitiveContent] = useState(false);
  const [sensitiveType, setSensitiveType] = useState(false);

  const { timeLeft } = useTimer({
    onEndReached: () => console.log("Reached end"),
    timeInterval: 20,
  });

  useEffect(() => {
    async function fetchProfilePicture() {
      const currentUser = await fetchUserData(userId);
      const collectionRef = collection(fireApp, "AccountData");
      const docRef = doc(collectionRef, `${currentUser}`);
      const getDocRef = await getDoc(docRef);

      if (getDocRef.exists()) {
        const { sensitiveStatus, sensitivetype } = getDocRef.data();
        setSensitiveWarning(sensitiveStatus ? sensitiveStatus : false);
        setHasSensitiveContent(sensitiveStatus ? sensitiveStatus : false);
        setSensitiveType(sensitivetype ? sensitivetype : 3);
      }
    }
    fetchProfilePicture();
  }, [userId]);

  useEffect(() => {
    // قائمة بأسماء المشتركين المحتملين
    var participants = [
      "أحمد",
      "محمد",
      "علي",
      "فاطمة",
      "سارة",
      "ياسمين",
      "عبدالله",
      "ريم",
      "نور",
      "رامي",
      "مريم",
      "خالد",
      "جمال",
      "دينا",
      "أمير",
      "نادين",
      "ليلى",
      "حسين",
      "صفاء",
      "عمر",
      "جميلة",
      "حنان",
      "عائشة",
      "محسن",
      "لمى",
      "زينب",
      "رائد",
      "غادة",
      "طارق",
      "حبيبة",
      "طلال",
      "هديل",
      "عادل",
      "رنا",
      "عبير",
      "سعيد",
      "صباح",
      "إيمان",
      "أحلام",
      "سلمى",
      "سعود",
      "حصة",
      "ماجد",
      "دلال",
      "فهد",
      "صالح",
      "سميرة",
      "رشا",
      "محمود",
      "جود",
      "مها",
      "محمد",
      "فيصل",
      "رياض",
      "صبا",
      "بدر",
      "عبدالعزيز",
      "حسام",
      "فاتن",
      "عماد",
      "مروان",
      "عائل",
      "هالة",
      "باسل",
      "داليا",
      "مروة",
      "رامز",
      "سوسن",
      "خلود",
      "شهد",
      "منى",
      "فادي",
      "صفوان",
      "زياد",
      "لينا",
      "عمار",
      "وسام",
      "رجاء",
      "ريان",
      "مازن",
      "فيروز",
      "ريما",
      "زكريا",
      "بشرى",
      "حيدر",
      "دانا",
      "عبدالله",
      "نهى",
      "أسامة",
      "مرام",
      "وفاء",
      "خلف",
      "عزت",
      "منير",
      "سعاد",
      "سمير",
      "لمياء",
      "ندى",
      "زهير",
      "جلال",
      "مهند",
      "فوزية",
      "سامر",
      "غدير",
      "نزار",
      "مهاب",
      "إلهام",
      "سوزان",
      "سليمان",
      "هاجر",
      "أمجد",
      "مروج",
      "فائز",
      "نبيل",
      "سناء",
      "أيمن",
      "ياسر",
      "فارس",
      "ناصر",
      "عادلة",
      "جميل",
      "زينة",
      "سهام",
      "نورهان",
      "عصام",
      "نهاد",
      "مريم",
      "عماد",
      "رانيا",
      "مجدي",
      "رضا",
      "ميساء",
      "مؤمن",
      "هدير",
      "أشرف",
      "عائشة",
      "إياد",
      "صبحي",
      "فتحي",
      "سهى",
      "عزام",
      "عبير",
      "حياة",
      "محمد",
      "إيهاب",
      "شذى",
      "فداء",
      "تامر",
      "فريدة",
      "وسيم",
      "هالة",
      "نوران",
      "حسين",
      "مهاجر",
      "عمران",
      "أدهم",
      "فوزي",
      "خضر",
      "شيرين",
      "أسيل",
      "بلال",
      "ألاء",
      "جعفر",
      "وجدي",
      "غسان",
      "سلوى",
      "عصام",
      "إسراء",
      "غيث",
      "عبدالمجيد",
      "نسيم",
      "إسرار",
      "إسلام",
      "عمارة",
      "شادي",
      "زين",
      "فدوى",
      "غانم",
      "نورس",
      "عدلي",
      "حسينة",
      "أمل",
      "زهراء",
      "يوسف",
      "نعيم",
      "إلهان",
      "ماهر",
      "حميدة",
      "نادر",
      "وعد",
      "مجد",
      "فتحية",
      "هناء",
      "حسن",
      "عادلة",
      "حسني",
      "لطفي",
      "حنان",
      "حاتم",
      "مؤنس",
      "هبة",
      "ناهد",
      "لطيفة",
      "هدى",
      "فضيل",
      "مصطفى",
      "حسناء",
      "صابر",
      "أنيس",
      "غالب",
      "جابر",
      "سماح",
      "مشير",
      "منال",
      "يعقوب",
      "عبادة",
      "صهيب",
      "مراد",
      "عبيدة",
      "خالدة",
      "صابرة",
      "شمس",
      "حافظ",
      "صفية",
      "حازم",
      "عيسى",
      "خضير",
      "شيماء",
      "محمد",
      "توفيق",
      "ياسمينة",
      "يونس",
      "خالد",
      "صالح",
      "فاروق",
      "ناظم",
      "صلاح",
      "حسيب",
      "صالحة",
      "مازن",
      "جواد",
      "محمود",
      "نورا",
      "مشعل",
      "بشير",
      "عمادة",
      "أسماء",
      "سليم",
      "حكيم",
      "أسماء",
      "أنور",
      "سنان",
      "فؤاد",
      "نجوان",
      "سعدي",
      "صادق",
      "جومانا",
      "صالح",
      "فراس",
      "جليل",
      "بلقيس",
      "عمر",
      "إسلام",
      "خيري",
      "بهاء",
      "غدير",
      "مريم",
      "تيسير",
      "مصطفى",
      "محمد",
      "حسام",
      "شادية",
      "جلال",
      "أمير",
      "حسين",
      "زكية",
      "رشاد",
      "محيي",
      "عيسى",
      "فيصل",
      "رشيد",
      "أنيسة",
      "نوال",
      "حسان",
      "سوزان",
      "إسماعيل",
      "مشرف",
      "هشام",
      "مالك",
      "عيسى",
      "جميلة",
      "سمير",
      "سهر",
      "مراد",
      "أمل",
      "فرح",
      "أيوب",
      "هاجر",
      "رضوان",
      "أحمد",
      "جمانة",
      "شيماء",
      "حمادة",
      "رحمة",
      "عبدالله",
      "حبيب",
      "محمد",
      "أديب",
      "عزت",
      "إياد",
      "خليل",
      "فارس",
      "حياة",
      "رزان",
      "فوزي",
      "أشرف",
      "ميسرة",
      "رؤوف",
      "زينة",
      "إبراهيم",
      "نصير",
      "زينب",
      "بلال",
      "شريف",
      "عادلة",
      "فارس",
      "فوزية",
      "مروان",
      "أحلام",
      "يوسف",
      "زكريا",
      "سلوى",
      "أماني",
      "فراس",
      "أديب",
      "فوزي",
      "جمال",
      "رائد",
      "نصر",
      "عادل",
      "زهراء",
      "سلمان",
      "شهرزاد",
      "سامي",
      "نضال",
      "أماني",
      "إلهام",
      "أسامة",
      "نجاة",
      "أيوب",
      "حسين",
      "حمزة",
      "بسمة",
      "سعدي",
      "فادي",
      "موسى",
      "فداء",
      "حلمي",
      "جميلة",
      "نهاد",
      "أيمن",
      "أميرة",
      "بسام",
      "جميلة",
      "سلمى",
      "أديب",
      "محمد",
      "رياض",
      "فتحية",
      "إسراء",
      "بهاء",
      "مريم",
      "حلمي",
      "خالد",
      "فيصل",
      "باسل",
      "هشام",
      "رنا",
      "عمر",
      "سليم",
      "أنس",
      "جمال",
      "فائز",
      "خضر",
      "أمل",
      "فيروز",
      "زينة",
      "حبيب",
      "حبيبة",
      "سلمى",
      "رضا",
      "نجوى",
      "حميد",
      "فاطمة",
      "رياض",
      "مجدي",
      "محمود",
      "معاذ",
      "ريم",
      "علياء",
      "لطفي",
      "نبيلة",
      "عبير",
      "علي",
      "حسن",
      "رشيد",
      "منصور",
      "حسام",
      "أدهم",
      "عمار",
      "أنور",
      "إبراهيم",
      "محمود",
      "إبراهيم",
      "نوران",
      "مصطفى",
      "جميل",
      "نبيل",
      "ندى",
      "سمية",
      "عزت",
      "أمل",
      "حبيبة",
      "نسيبة",
      "رشاد",
      "فاتن",
      "سنية",
      "فتحي",
      "سهير",
      "جوان",
      "سليمان",
      "نادية",
      "منى",
      "سعيد",
      "لين",
      "فيصل",
      "أحمد",
      "أسامة",
      "سوسن",
      "حسن",
      "عادل",
      "جميلة",
      "فريد",
      "جمانة",
      "عاصم",
      "علي",
      "إسراء",
      "أسامة",
      "غادة",
      "أسامة",
      "فوزي",
      "مروة",
      "سمية",
      "علياء",
      "علي",
      "منى",
      "لينا",
      "أحمد",
      "زينب",
      "إبراهيم",
      "فارس",
      "عمرو",
      "جميل",
      "حسن",
      "إلهام",
      "رشا",
      "باسم",
      "سوزان",
      "إبراهيم",
      "حسن",
      "نور",
      "سلامة",
      "فاطمة",
      "فاروق",
      "سامي",
      "سهى",
      "علياء",
      "محمود",
      "نورا",
      "أمل",
      "زهير",
      "سمية",
      "خضر",
      "مصطفى",
      "صفاء",
      "محمود",
      "نورا",
      "حازم",
      "نهاد",
      "علاء",
      "جميل",
      "سماح",
      "أدهم",
      "عبدالله",
      "سوسن",
      "رامي",
      "محمود",
      "هاشم",
      "منال",
      "جمانة",
      "محمود",
      "زينب",
      "رشاد",
      "جميلة",
      "أشرف",
      "رشيد",
      "علاء",
      "إسراء",
      "أسامة",
      "نسيم",
      "عادل",
      "فؤاد",
      "أسماء",
      "فوزي",
      "هاجر",
      "أشرف",
      "زياد",
      "سارة",
      "فاطمة",
      "صفاء",
      "محمود",
      "جميل",
      "ريم",
      "فاطمة",
      "سعيد",
      "إلهام",
      "جميل",
      "أحمد",
      "جمال",
      "فوزي",
      "منى",
      "سوزان",
      "رانيا",
      "حسين",
      "سمير",
      "فاطمة",
      "حسن",
      "مروة",
      "سارة",
      "منير",
      "عادل",
      "مروان",
      "فتحية",
      "أمير",
      "سوزان",
      "سهام",
      "صفوان",
      "أسامة",
      "نسرين",
      "أحمد",
      "علياء",
      "فواز",
      "عبير",
      "حسام",
      "فوزية",
      "عماد",
      "أحمد",
      "أمل",
      "أسامة",
      "فتحية",
      "خالد",
      "سماح",
      "جميلة",
      "سلمى",
      "نبيل",
      "أسامة",
      "منير",
      "نهاد",
      "جمال",
      "أمل",
      "زكريا",
      "فاطمة",
      "إياد",
      "رشيد",
      "عبدالله",
      "حسين",
      "علاء",
      "ندى",
      "رشاد",
      "سهى",
      "فوزي",
      "أدهم",
      "ماجد",
      "علياء",
      "جلال",
      "مصطفى",
      "نهاد",
      "هديل",
      "مروة",
      "صباح",
      "نهاد",
      "فؤاد",
      "أشرف",
      "فوزي",
      "جمال",
      "جمانة",
      "سلمى",
      "إياد",
      "فاطمة",
      "عادل",
      "رشيد",
      "ريم",
      "مروة",
      "سارة",
      "صابر",
      "رشيد",
      "أحمد",
      "أنيسة",
      "حسن",
      "صالح",
      "سلمان",
      "جمانة",
      "عادل",
      "رنا",
      "نهاد",
      "فيروز",
      "عادل",
      "جميل",
      "جمال",
      "رنا",
      "سارة",
      "سامي",
      "رضا",
      "نبيل",
      "رشاد",
      "منى",
      "فوزي",
      "فيروز",
      "جمانة",
      "أحمد",
      "عادل",
      "جمال",
      "رنا",
      "سارة",
      "سامي",
      "رضا",
      "نبيل",
      "رشاد",
      "منى",
      "فوزي",
      "فيروز",
      "جمانة",
    ];
    // دالة لتوليد رقم عشوائي بين الحد الأدنى والأقصى
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // دالة لاختيار اسم عشوائي من قائمة المشتركين
    function getRandomParticipant() {
      var randomIndex = getRandomNumber(0, participants.length - 1);
      return participants[randomIndex];
    }

    // دالة لاختيار جملة عشوائية من بين الجمل المتاحة
    function createRandomMessage() {
      var participant = getRandomParticipant();

      // قائمة الجمل العشوائية
      var messages = [
        "تم تسجيل " + participant + " كمشترك في المسابقة",
        participant + " حصل على هدية إنترنت مجاني",
        participant + " حصل على هدية مكالمات محلية",
      ];

      // اختيار رسالة عشوائية من القائمة
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];

      return randomMessage;
    }

    // مصفوفة لتخزين الرسائل
    var messages = [];

    // إنشاء 50 رسالة عشوائية وتخزينها في المصفوفة
    for (var i = 0; i < 50; i++) {
      messages.push(createRandomMessage());
    }

    // العرض الدوري للرسائل
    var index = 0;
    const interval = setInterval(function () {
      toast.success(messages[index], {
        position: "top-right",
        duration: 2000,
      });
      index = (index + 1) % messages.length;
    }, 2000); // كل ثانية (2000 مللي ثانية = 1 ثانية)

    // // Set an interval to display the toast repeatedly
    // const interval = setInterval(() => {
    //   toast.error("This account has sensitive content.", {
    //     position: "top-center",
    //     duration: 10000,
    //   });
    // }, 3000); // Repeat every 15 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <HouseContext.Provider value={{ setSensitiveWarning, sensitiveType }}>
      {!sensitiveWarning ? (
        <>
          <BgDiv userId={userId} />

          <div className="relative z-20 md:w-[50rem] w-full flex flex-col items-center h-full mx-auto">
            <div className="flex flex-col items-center flex-1 overflow-auto p-12">
              <div className="flex flex-col items-center flex-1 overflow-auto bg-slate-200 bg-opacity-80 rounded-3xl border-2 border-dashed border-gray-400">
                <ProfilePic userId={userId} />
                <UserInfo
                  userId={userId}
                  hasSensitiveContent={hasSensitiveContent}
                />
                <MyLinks
                  userId={userId}
                  hasSensitiveContent={hasSensitiveContent}
                />
                <div className="flex flex-col gap-4 my-4 w-full px-5 py-1 items-center max-h-fit">
                  <CountDownTimer
                    display={true}
                    containerStyle={{
                      // height will be auto by default
                      padding: "0.5rem",
                      alignItems: "center",
                      height: "auto",
                    }}
                    targetDate={new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)}
                    daysType={"d"}
                    hoursType={"h"}
                    minutesType={"m"}
                    secondsType={"s"}
                    timerContainerStyles={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#0e8d0e",
                      padding: "0.5rem",
                      height: "auto",
                      // height will be auto by default
                    }}
                    timerFontStyles={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "white",
                      height: "auto",
                    }}
                    formatBetween={":"}
                    formatBetweenStyle={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "white",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <SupportBanner userId={userId} />
        </>
      ) : (
        <SensitiveWarning />
      )}
    </HouseContext.Provider>
  );
}