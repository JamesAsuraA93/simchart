import { create } from 'zustand'
import { useStoreDataProp } from '../types/data/seachDataType'

const useStoreData = create<useStoreDataProp>((set) => ({
    searchList: [
        'ค่ายTrue',
        'ค่ายเขียว',
        'สายเทา',
        'AIS',
        'dtac',
    ],
    setSearchList: (searchList) => set({ searchList }),
}))





export {
    useStoreData
}