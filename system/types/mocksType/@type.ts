type DataSearch = {
    lstHashTag: string[],
}

type EmotionWeightNumber = {
    negative: number,
    positive: number,
}


type AnalyticDataProps = {
    eachEmotion: EmotionWeightNumber,

    // how to solve this problem
    issue: string,
    solveWays: string[],
}

type EmotionMode = "POSITIVE" | "NEGATIVE" | "NEUTRAL" // export


type EachPostProps = {
    twiiterName:string,
    uid:string,
    date: string,
    content: string,
    emotion: EmotionMode,

    // for solve this function with each hashtag have way to solve
    solveThis:AnalyticDataProps
}



type DataAPI = {
    id: string, // equal id of dataSearch each hastTag
    postLst: EachPostProps[]
    
    summaryAnalyticData: EmotionWeightNumber,
}


export type {
    DataAPI,
    EmotionMode,
    AnalyticDataProps,
    EachPostProps,
    DataSearch,
}