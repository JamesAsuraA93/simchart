import React, { useEffect, useState } from "react";

import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { MetaFilter } from "@/pages/search/[tag]";
import { mockData } from "@/system/mocks/hashTagData";
import { EachPostProps } from "@/system/types/mocksType/@type";
import { useRouter } from "next/router";

type Props = {
  searchTagTopic: string;
  metaChoose: MetaFilter;

  uid: string;
};

Chart.register();

export default function SolveContent(Content: Props) {
  const router = useRouter();

  const [solveData, setSolveData] = useState<EachPostProps>();

  const [data, setData] = useState({
    labels: ["NEGATIVE", "POSITIVE"],
    datasets: [
      {
        label: "Emotional",
        data: [
          0, 0,

          // .flat()
          // .map((item, index) => {
          //     return item.
          // })
        ], // number []
        backgroundColor: [
          "#CC6363", // red
          "#3CC2C2", // good
        ],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    let temp = mockData
      .filter((item) => item.id == Content.searchTagTopic)
      .map((item) => {
        return item.postLst;
      })
      .flat()
      .filter((item) => item.uid == Content.uid);

    console.log(temp);

    setSolveData(temp[0]);
    try {
      setData({
        labels: ["NEGATIVE", "POSITIVE"],
        datasets: [
          {
            label: "Emotional",
            data: [
              temp[0].solveThis.eachEmotion.negative,
              temp[0].solveThis.eachEmotion.positive,

              // .flat()
              // .map((item, index) => {
              //     return item.
              // })
            ], // number []
            backgroundColor: [
              "#CC6363", // red
              "#3CC2C2", // good
            ],
            hoverOffset: 4,
          },
        ],
      });
    } catch (error) {
      router.push("/");
    }
  }, [Content, mockData]);

  return (
    <div className="space-y-3 min-h-[100vh]">
      <div className="flex justify-between items-end">
        <h1 className="text-[32px] text-black">#{Content.searchTagTopic}</h1>
      </div>

      <hr className="border-[1.5px] rounded-full border-[#ABABAB]" />
      <div className="p-10 space-y-4">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2">
            {data.labels.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row space-x-2 items-center"
                >
                  {/* Circle */}

                  <div
                    className={`w-10 h-10 rounded-full ${
                      index == 0 ? `bg-[#CC6363]` : `bg-[#3CC2C2]`
                    }`}
                  ></div>
                  {/* Text */}
                  <h2 className="text-lg">{item}</h2>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-row">

          <div className="h-[350px] flex w-[400px] justify-center">
            <Pie
              data={data}
              width={400}
              height={200}
              options={{
                  plugins: {
                      legend: {
                          display: false,
                        },
                    },
                    animation: { animateScale: true },
                }}
                />
          </div>

          <div className="flex flex-col space-y-3">

            <div className="text-lg">
                <h1 className="font-semibold">ข้อมูล</h1>

                <h2>
                    ชื่อ : {solveData?.twiiterName}
                </h2>
                <h2>
                    รายละเอียด : {solveData?.content}
                </h2>

                <h2>
                    เวลาโพสต์ : {solveData?.date.split("T")[0]}
                </h2>

                <h2 style={{
                    color: solveData?.emotion == "POSITIVE" ? "#3CC2C2" : "#CC6363"
                }} className="font-semibold">
                    KEY : {solveData?.emotion}
                </h2>

                
            </div>



            <div className="flex flex-row space-x-2 items-center">

                <h1 className="text-xl font-light">
                    ปัญหา : 
                </h1>

                <span className="text-xl font-semibold">
                {solveData?.solveThis.issue}                    
                </span>
            </div>

            <div className="flex flex-col">

                <h1 className="text-xl ">
                    แนวทางการแก้ไข
                </h1>

                {
                    solveData?.solveThis.solveWays.map((item, index) => {
                        return(
                            <div key={index} className="flex flex-row space-x-2 items-center">
                                <h1 className="text-xl font-light">
                                    {index+1} :
                                </h1>

                                <span className="text-xl font-semibold">
                                    {item}
                                </span>
                            </div>
                        )
                    })
                }
            </div>


          </div>
                </div>
        </div>

        {solveData && (
          <h1 className="text-2xl font-light text-center">
            {solveData?.solveThis.eachEmotion.negative ==
            solveData?.solveThis.eachEmotion.positive
              ? `this hashtag has negative equal to positive`
              : solveData?.solveThis.eachEmotion.negative >
                solveData?.solveThis.eachEmotion.positive
              ? `this hashtag has negative more than positive`
              : `this hashtag has positive more than negative`}
          </h1>
        )}
      </div>
    </div>
  );
}
