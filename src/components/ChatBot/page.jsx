"use client";
import { React, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const CISSOU_API_URL =
  "https://cissou-cse-hxfdhebzewhphsev.spaincentral-01.azurewebsites.net";

const ChatBot = ({ className = "" }) => {
  const chatRef = useRef(null);
  const questionRef = useRef(null);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showBot, setShowBot] = useState(false);
  const [questionResponse, setQuestionResponse] = useState([]);
  // Tracks the backend's session_id across turns so follow-up questions
  // ("what about 2nd year?") have real conversation memory, instead of
  // every message starting a fresh session.
  const [sessionId, setSessionId] = useState(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [questionResponse]);

  function Questions() {
    const FAQs = [
      "What is student life at ESI really like beyond the classroom?",
      "How can I balance classes, projects, clubs, and my personal life?",
      "How can I get involved in the ESI community and meet new people?",
      "How can I get involved in the ESI community and meet new people?",
      "How can I get involved in the ESI community and meet new people?",
      "How can I get involved in the ESI community and meet new people?",
      "How can I make the most of my years at ESI?",
    ];
    return (
      <div className="bg-[#DAF36A] dark:bg-[#3E4EBC] rounded-[17px] pr-2 pl-4 pt-2 pb-2">
        <div className="flex flex-row  items-center justify-between">
          <p className="font-haetten text-primary-500 dark:text-primary-900 text-[23px] ">
            Questions you May Ask !
          </p>
          <X
            className="cursor-pointer"
            height={24}
            width={24}
            color="#00072A"
            onClick={() => setShowQuestions(false)}
          />
        </div>
        <div className="flex flex-row overflow-x-scroll gap-x-1  custom-scrollbar">
          {FAQs.map((FAQ, index) => (
            <div
              key={index}
              className="min-h-13 rounded-[13px] bg-[#F2FAFD] pr-3 pl-3 pt-1 pb-1 mb-2 flex-none w-38.5 dark:bg-[#8B95D7] cursor-pointer "
              onClick={() => askQuestion(FAQ)}
            >
              <p className=" text-[#33363A] font-consolas text-[11px] dark:text-[#00072A]">
                {FAQ}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  async function askQuestion(question) {
    let value = "";
    if (question === undefined) {
      value = questionRef.current.value;
      questionRef.current.value = "";
    } else {
      value = question;
    }
    if (!value.trim()) return;

    setShowQuestions(false);

    // Show the question immediately with a "thinking" placeholder, so the
    // chat feels responsive while the real answer is still in flight
    // (a real LLM call typically takes a few seconds).
    setQuestionResponse((prev) => [
      ...prev,
      { question: value, response: "…", pending: true },
    ]);

    try {
            const res = await fetch(`${CISSOU_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: value,
          ...(sessionId ? { session_id: sessionId } : {}),
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      const reply =
        data.reply ||
        data.response ||
        data.message ||
        "Sorry, I couldn't come up with an answer for that.";

      if (data.session_id) {
        setSessionId(data.session_id);
      }

      setQuestionResponse((prev) =>
        prev.map((entry, i) =>
          i === prev.length - 1
            ? { ...entry, response: reply, pending: false }
            : entry
        )
      );
    } catch (err) {
      setQuestionResponse((prev) =>
        prev.map((entry, i) =>
          i === prev.length - 1
            ? {
                ...entry,
                response:
                  "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
                pending: false,
              }
            : entry
        )
      );
    }
  }
  function handleEnterKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      askQuestion();
    }
  }
  return (
    <div className={className}>
      <button
        className="bg-secondary-500 rounded-[15px] h-full w-full items-center justify-center gap-x-[0.6em] flex flex-row px-[1em] cursor-pointer"
        onClick={() => setShowBot(true)}
      >
        <p className="text-primary-500 font-haetten text-[clamp(0.9rem,1.4vw,1.5rem)] whitespace-nowrap max-[420px]:hidden">
          Chat with Cissou
        </p>
        <Image
          src="/assets/cissou.svg"
          height={28}
          width={31}
          alt="cissou icon"
          className="h-[60%] w-auto"
        />
      </button>

      {showBot && (
        <div
          className="fixed bottom-4 right-20 w-190 max-md:w-full max-md:right-0 max-md:top-0
md:h-140 max-md:h-full bg-[#EDF9B4] dark:bg-[#6471CA] z-50
md:rounded-[30px] flex flex-col pb-4 content-between"
        >
          <div className="flex flex-row justify-between w-full md:items-start  max-md:items-center max-md:mt-7.5  max-md:pr-6 max-md:pl-6">
            <Image
              src="/assets/cissou.svg"
              alt="img"
              height={35}
              width={35}
              className="md:hidden  "
            />
            <Image
              src="/assets/top-left bot.svg"
              alt="img"
              height={190}
              width={167}
              className={`${questionResponse.length === 0 ? "" : "opacity-65"} max-md:hidden  `}
            />
            <X
              className="cursor-pointer md:mr-6.5 md:mt-4.5 "
              height={24}
              width={24}
              color="#23313A"
              onClick={() => setShowBot(false)}
            />
          </div>
          {questionResponse.length === 0 ? (
            <div className="flex flex-row justify-center  z-50 md:-mt-15 max-md:mt-65 ">
              <div className="w-77.5 flex flex-col items-center  ">
                <Image
                  src="/assets/cissou2.svg"
                  alt="cissou"
                  height={64}
                  width={69}
                />
                <p className="text-[32px] text-primary-500  font-haetten">
                  <span className="text-secondary-500 dark:text-[#00072A]">
                    Hey there ,
                  </span>{" "}
                  I'm Cissou !
                </p>
                <p className="text-[#00072A] text-[18px] font-consolas">
                  What would you like to know ?{" "}
                </p>
              </div>
            </div>
          ) : (
            <div
              className=" z-50 md:-mt-30 overflow-y-scroll h-full custom-scrollbar1 mr-2.5 max-md:mt-8 "
              ref={chatRef}
            >
              {questionResponse.map((res, index) => (
                <div key={index} className="mb-8 ">
                  <div className="w-full flex justify-end pr-5">
                    <div
                      className="rounded-t-[15px] rounded-bl-[15px] bg-[#FFFFFF] pt-2.5 pb-2.5 pr-2.5 pl-5 
                   dark:bg-[#8B95D7] md:w-100 min-[522px]:w-80 max-[522px]:w-66 "
                    >
                      <p className="text-[#00072A]  text-[16px] font-consolas dark:text-[#00072A] ">
                        {res.question}
                      </p>{" "}
                    </div>
                  </div>
                  <div className="pl-3">
                    <Image
                      src="/assets/cissou.svg"
                      height={28}
                      width={32}
                      alt="cissou"
                      className=""
                    />
                    <div
                      className="rounded-b-[15px] dark:bg-[#3E4EBC] rounded-tr-[15px] bg-[#DAF36A] pt-2.5 pb-2.5 pr-2.5 pl-5 
                 ml-10  md:w-116 min-[522px]:w-80 max-[522px]:w-69  "
                    >
                      <p className="text-[#00072A]  text-[16px] font-consolas dark:text-[#F2FAFD] ">
                        {res.response}
                      </p>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className={`flex flex-col  ${questionResponse.length === 0 ? "h-full" : ""}`}
          >
            <div className="w-full pr-4 pl-4  flex flex-col  gap-y-3 mt-auto  ">
              {showQuestions && <Questions />}

              <div className=" bg-secondary-500 rounded-[17px] pr-7.5 pl-7.5 pt-3.75 pb-3.75 flex flex-row justify-between items-center dark:bg-[#3E4EBC] ">
                <textarea
                  className="outline-0  w-full scrollbar-none h-6 resize-none   text-[17px] font-consolas  placeholder:opacity-100 placeholder:text-[#00072A] dark:placeholder:text-[#EFEFF0] "
                  placeholder="Ask Cissou here"
                  ref={questionRef}
                  onKeyDown={handleEnterKey}
                ></textarea>
                <Image
                  src="/assets/send.svg"
                  alt="send"
                  height={26}
                  width={26}
                  className="cursor-pointer"
                  onClick={() => askQuestion()}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
