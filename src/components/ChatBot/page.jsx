"use client";
import { React, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
const ChatBot = () => {
  const chatRef = useRef(null);
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
          <p className="font-haetten text-[#172AAF] dark:text-[#080E3A] text-[23px] ">
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
          <style jsx>
            {`
              .custom-scrollbar::-webkit-scrollbar {
                height: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #edf9b4;
                border-radius: 5px;
              }

              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #172aaf;
                border-radius: 5px;
              }
              :global(.dark) .custom-scrollbar::-webkit-scrollbar-track {
                background: #8b95d7;
                border-radius: 5px;
              }
              :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #080e3a;
                border-radius: 5px;
              }
            `}
          </style>
          {FAQs.map((FAQ, index) => (
            <div
              key={index}
              className="min-h-13 rounded-[13px] bg-[#F2FAFD] pr-3 pl-3 pt-1 pb-1 mb-2 flex-none w-38.5 dark:bg-[#8B95D7] "
            >
              <p className=" text-[#33363A] font-consolas text-[11px] dark:[#00072A] ">
                {FAQ}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  const questionRef = useRef(null);
  const [showQuestions, setShowQuestions] = useState(true);
  const [showBot, setShowBot] = useState(false);

  const [questionResponse, setQuestionResponse] = useState([]);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [questionResponse]);
  function askQuestion() {
    const value = questionRef.current.value;
    questionRef.current.value = "";
    setShowQuestions(false);
    let result = {};
    result.question = value;
    result.response =
      " doloremque! Reprehenderit, aliquid itaque molestias numquam similique ea obcaecati aliquam?";
    setQuestionResponse([...questionResponse, result]);
  }
  function handleEnterKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      askQuestion();
    }
  }
  return (
    <div className="justify-end flex">
      <div className="  justify-end">
        <button
          className="bg-[#C8ED1F]  rounded-[22px] h-14.5 items-center gap-x-6.5 flex flex-row pr-5 pl-5 w-57 cursor-pointer "
          onClick={() => setShowBot(true)}
        >
          <p className="text-[#172AAF] text-[24px] font-haetten ">
            Chat with Cissou
          </p>
          <Image
            src="/assets/cissou.svg"
            height={28}
            width={31}
            alt="cissou icon"
          />
        </button>
        {showBot && (
          <div className="fixed w-190 h-140 bg-[#EDF9B4] dark:bg-[#6471CA] z-50 rounded-[30px] right-20 mt-4.5 flex flex-col pb-4 content-between ">
            <div className="flex flex-row justify-between w-full items-start ">
              <Image
                src="/assets/top-left bot.svg"
                alt="img"
                height={190}
                width={167}
                className={`${questionResponse.length === 0 ? "" : "opacity-65"}`}
              />
              <X
                className="cursor-pointer mr-6.5 mt-4.5"
                height={24}
                width={24}
                color="#23313A"
                onClick={() => setShowBot(false)}
              />
            </div>
            {questionResponse.length === 0 ? (
              <div className="flex flex-row justify-center  z-50 -mt-15">
                <div className="w-77.5 flex flex-col items-center  ">
                  <Image
                    src="/assets/cissou2.svg"
                    alt="cissou"
                    height={64}
                    width={69}
                  />
                  <p className="text-[32px] text-[#172AAF]  font-haetten">
                    <span className="text-[#A7C61A]  dark:text-[#00072A]">
                      Hey there ,
                    </span>{" "}
                    I’m Cissou !
                  </p>
                  <p className="text-[#00072A] text-[18px] font-consolas">
                    What would you like to know ?{" "}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className=" z-50 -mt-30 overflow-y-scroll h-full custom-scrollbar1 mr-2.5"
                ref={chatRef}
              >
                <style jsx>
                  {`
                    .custom-scrollbar1::-webkit-scrollbar {
                      width: 5px;
                    }
                    .custom-scrollbar1::-webkit-scrollbar-track {
                      background: #d1f044;
                      border-radius: 2px;
                    }
                    .custom-scrollbar1::-webkit-scrollbar-thumb {
                      background: #434f0a;
                      border-radius: 2px;
                    }

                    :global(.dark) .custom-scrollbar1::-webkit-scrollbar-track {
                      background: #3e4ebc;
                      border-radius: 2px;
                    }
                    :global(.dark) .custom-scrollbar1::-webkit-scrollbar-thumb {
                      background: #172aaf;
                      border-radius: 2px;
                    }
                  `}
                </style>

                {questionResponse.map((res, index) => (
                  <div key={index} className="mb-8">
                    <div className="w-full flex justify-end pr-5">
                      <div className="rounded-t-[15px] rounded-bl-[15px] bg-[#FFFFFF] pt-2.5 pb-2.5 pr-2.5 pl-5 w-fit dark:bg-[#8B95D7]  ">
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
                      <div className="rounded-b-[15px] dark:bg-[#3E4EBC] rounded-tr-[15px] bg-[#DAF36A] pt-2.5 pb-2.5 pr-2.5 pl-5 w-116  ml-10">
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

                <div className=" bg-[#C8ED1F] rounded-[17px] pr-7.5 pl-7.5 pt-3.75 pb-3.75 flex flex-row justify-between items-center dark:bg-[#3E4EBC] ">
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
    </div>
  );
};

export default ChatBot;
