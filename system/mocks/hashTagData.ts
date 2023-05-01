import { DataAPI } from "../types/mocksType/@type";

const mockData: DataAPI[] = [
    {
        id: 'ค่ายTrue',
        postLst: [
            {
                twiiterName: 'user1',
                date: '2023-04-30T10:00:00.000Z',
                content: 'เน็ตช้ามากๆ เลยอ่ะ ต้องทำยังไงดี',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'เน็ตช้า',
                    solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
            },
            {
                twiiterName: 'user2',
                date: '2023-04-29T08:30:00.000Z',
                content: 'ค่าย True ให้บริการดีมากๆ เลยค่ะ',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 0, positive: 100 },
                    issue: 'ไม่มีปัญหา',
                    solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
            },
            {
                twiiterName: 'user3',
                date: '2023-04-28T12:45:00.000Z',
                content: 'ระบบบริการช้ามากๆ ไม่สามารถเข้าใช้งานได้',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 100, positive: 0 },
                  issue: 'ระบบบริการช้า',
                  solveWays: ['ติดต่อ Call Center เพื่อขอความช่วยเหลือ', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
              },
              {
                twiiterName: 'user4',
                date: '2023-04-27T09:15:00.000Z',
                content: 'ต้องการเน็ตเร็วขึ้น แต่แพ็กเกจไม่เพียงพอ',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 70, positive: 30 },
                  issue: 'แพ็กเกจไม่เพียงพอ',
                  solveWays: [
                    'เชื่อมต่อกับ Wifi ที่เร็วขึ้น',
                    'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น',
                    'ติดต่อ Call Center เพื่อขอความช่วยเหลือ',
                  ],
                },
              },
              {
                twiiterName: 'user5',
                date: '2023-04-26T14:20:00.000Z',
                content: 'True เป็นค่ายโทรศัพท์ที่ให้บริการดีมากๆ เลยครับ',
                emotion: 'POSITIVE',
                solveThis: {
                  eachEmotion: { negative: 0, positive: 100 },
                  issue: 'ไม่มีปัญหา',
                  solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
              },
              {
                twiiterName: 'user6',
                date: '2023-04-25T17:30:00.000Z',
                content: 'ค่าย True บริการแย่มาก ๆ เลย ช้า ๆ ไม่มีสัญญาณ',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 90, positive: 10 },
                  issue: 'บริการแย่',
                  solveWays: [
                    'ติดต่อ Call Center เพื่อขอความช่วยเหลือ',
                    'ตรวจสอบเครื่องโมเด็มและสาย Lan',
                  ],
                },
              },
              {
                twiiterName: 'user7',
                date: '2023-04-24T21:50:00.000Z',
                content: 'เน็ตไวมากๆ ใช้ True ดีมากๆ',
                emotion: 'POSITIVE',
                solveThis: {
                  eachEmotion: { negative: 0, positive: 100 },
                  issue: 'ไม่มีปัญหา',
                  solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
              },
              {
                twiiterName: 'user8',
                date: '2023-04-23T23:00:00.000Z',
                content: 'ไม่สามารถโทรออกได้ ต้องแก้ยังไงคะ',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 80, positive: 20 },
                  issue: 'ไม่สามารถโทรออกได้',
                  solveWays: ['ตรวจสอบสัญญาณที่ใช้งาน', 'ตรวจสอบเบอร์ที่กำลังโทร', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
              },
              {
                twiiterName: 'user9',
                date: '2023-04-23T11:20:00.000Z',
                content: 'True มีบริการดีมากๆ ทั้งเน็ตและโทรศัพท์',
                emotion: 'POSITIVE',
                solveThis: {
                  eachEmotion: { negative: 0, positive : 100 },
                  issue: 'ไม่มีปัญหา',
                  solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                  },
                  },
                  {
                  twiiterName: 'user10',
                  date: '2023-04-22T16:45:00.000Z',
                  content: 'เล่นเน็ตไม่ได้เลย ต้องแก้ยังไงดีคะ',
                  emotion: 'NEGATIVE',
                  solveThis: {
                  eachEmotion: { negative: 90, positive: 10 },
                  issue: 'ไม่สามารถใช้งานเน็ตได้',
                  solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                  },
                  },
                  ],
                  summaryAnalyticData: { negative: 55, positive: 45 },
    },
    {
        id: 'ค่ายเขียว',
        postLst: [
            {
                twiiterName: 'user3',
                date: '2023-04-30T15:45:00.000Z',
                content: 'เน็ตมันได้ไวมาก ๆ ค่ายเขียวดีจริงๆ',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 0, positive: 100 },
                    issue: 'ไม่มีปัญหา',
                    solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
            },
            {
                twiiterName: 'user4',
                date: '2023-04-30T09:15:00.000Z',
                content: 'เน็ตไม่เป็นไปตามแพ็กเกจที่ซื้อ ทำให้ค่าใช้จ่ายเยอะมาก',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 70, positive: 30 },
                    issue: 'เน็ตไม่เป็นไปตามแพ็กเกจที่ซื้อ',
                    solveWays: [
                        'ติดเน็ตเพิ่มเติมเพื่อให้เหลือกับแพ็กเกจ',
                        'ซื้อแพ็กเกจที่มีปริมาณข้อมูลมากกว่าเดิม',
                        'ติดต่อ Call Center เพื่อขอความช่วยเหลือ',
                    ],
                },
            },
            {
                twiiterName: 'user1',
                date: '2023-04-30T14:30:00.000Z',
                content: 'ซื้อแพ็กเกจเน็ตแต่ไม่ได้เลย แก้ยังไงดีครับ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 80, positive: 20 },
                issue: 'ไม่ได้เน็ตตามแพ็กเกจ',
                solveWays: ['ตรวจสอบว่ายังไม่ได้ใช้จ่ายเต็มวงเงิน', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'user2',
                date: '2023-04-29T11:00:00.000Z',
                content: 'เน็ตช้ามากๆ เลย ต้องแก้ยังไงดีคะ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 90, positive: 10 },
                issue: 'เน็ตช้า',
                solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
                },
                {
                twiiterName: 'user3',
                date: '2023-04-28T13:15:00.000Z',
                content: 'ไม่ได้รับ SMS ยืนยัน ต้องแก้ยังไงคะ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 80, positive: 20 },
                issue: 'ไม่ได้รับ SMS ยืนยัน',
                solveWays: ['ตรวจสอบเบอร์โทรศัพท์ที่ลงทะเบียน', 'ตรวจสอบกล่องข้อความรับ', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'user4',
                date: '2023-04-27T08:45:00.000Z',
                content: 'ค่ายเขียวให้บริการดีมากๆ เน็ตแรง ๆ',
                emotion: 'POSITIVE',
                solveThis: {
                eachEmotion: { negative: 0, positive: 100 },
                issue: 'ไม่มีปัญหา',
                solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
                },
                {
                twiiterName: 'user5',
                date: '2023-04-26T14:20:00.000Z',
                content: 'ค่ายเขียวให้บริการดีมากๆ เลยครับ',
                emotion: 'POSITIVE',
                solveThis: {
                eachEmotion: { negative: 0, positive: 100 },
                issue: 'ไม่มีปัญหา',
                solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
                },
                {
                twiiterName: 'user6',
                date: '2023-04-25T17:30:00.000Z',
                content: 'เน็ตช้ามาก ๆ ไม่ได้สัญญาณ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 90, positive: 10 },
                issue: 'เน็ตช้าและไม่ได้สัญญาณ',
                solveWays: ['ตรวจสอบเครื่องโมเด็มและสาย Lan', 'ตรวจสอบสัญญาณที่ใช้งาน', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'user7',
                date: '2023-04-24T21:50:00.000Z',
                content: 'ค่ายเขียวบริการดีมาก ๆ เลยครับ',
                emotion: 'POSITIVE',
                solveThis: {
                eachEmotion: { negative: 0, positive: 100 },
                issue: 'ไม่มีปัญหา',
                solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
                },
                {
                twiiterName: 'user8',
                date: '2023-04-23T07:15:00.000Z',
                content: 'เน็ตดีมาก ๆ ไม่มีปัญหาเลย',
                emotion: 'POSITIVE',
                solveThis: {
                eachEmotion: { negative: 0, positive: 100 },
                issue: 'ไม่มีปัญหา',
                solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
                },
                {
                twiiterName: 'user9',
                date: '2023-04-22T13:30:00.000Z',
                content: 'เบอร์โทรศัพท์ไม่สามารถใช้งานได้ แก้ยังไงดีคะ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 90, positive: 10 },
                issue: 'เบอร์โทรศัพท์ไม่สามารถใช้งานได้',
                solveWays: ['ตรวจสอบเครื่องโทรศัพท์และสัญญาณ', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'user10',
                date: '2023-04-21T16:45:00.000Z',
                content: 'ไม่ได้รับการชำระเงินแต่ยังถูกตัดบริการ แก้ยังไงดีคะ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 80, positive: 20 },
                issue: 'ไม่ได้รับการชำระเงินแต่ถูกตัดบริการ',
                solveWays: ['ตรวจสอบการชำระเงิน', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                // ],
                // summaryAnalyticData: { negative: 50, positive: 50 },
                // },
                // ];
        ],
        summaryAnalyticData: { negative: 50, positive: 50 },
    },
    {
        id: 'สายเทา',
        postLst: [
            {
                twiiterName: 'user5',
                date: '2023-04-30T20:10:00.000Z',
                content: 'ชอบแพ็กเกจสายเทาเพราะราคาถูก',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 0, positive: 100 },
                    issue: 'ไม่มีปัญหา',
                    solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
            },
            {
                twiiterName: 'user6',
                date: '2023-04-29T12:30:00.000Z',
                content: 'สัญญาณมันไม่ค่อยดีเลย ช้า ๆ อ่ะ',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'สัญญาณไม่ดี',
                    solveWays: ['เชื่อมต่อ Wifi ที่เร็วขึ้น', 'ตรวจสอบการติดตั้ง Router และสาย Lan', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
        ],
        summaryAnalyticData: { negative: 45, positive: 55 },
    },
    {
        id: 'AIS',
        postLst: [
            {
                twiiterName: 'user7',
                date: '2023-04-29T14:50:00.000Z',
                content: 'AIS เน็ตช้ามาก ๆ ยังไงดี',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'เน็ตช้า',
                    solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
            },
            {
                twiiterName: 'user8',
                date: '2023-04-30T07:20:00.000Z',
                content: 'เน็ตเร็วมาก ๆ ใช้ AIS จะไม่ผิดหวังเลย',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 0, positive: 100 },
                    issue: 'ไม่มีปัญหา',
                    solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
            },
        ],
        summaryAnalyticData: { negative: 45, positive: 55 },
    },
    {
        id: 'dtac',
        postLst: [
            {
                twiiterName: 'user9',
                date: '2023-04-29T21:15:00.000Z',
                content: 'dtac เน็ตช้ามาก ๆ แก้ไขยังไงดี',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'เน็ตช้า',
                    solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
            },
            {
                twiiterName: 'user10',
                date: '2023-04-30T18:00:00.000Z',
                content: 'เน็ตเร็วมาก ๆ ใช้ dtac นี้เลย',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 0, positive: 100 },
                    issue: 'ไม่มีปัญหา',
                    solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
            },
        ],
        summaryAnalyticData: { negative: 45, positive: 55 },
    },
];



export {
    mockData
}