import { DataAPI } from "../types/mocksType/@type";

const mockData: DataAPI[] = [
    {
        id: 'ค่ายTrue',
        postLst: [
            {
                twiiterName: 'anyoungkiki',
                uid: '1',
                date: '2023-04-30T10:00:00.000Z',
                content: 'เน็ตทรู *** #เน็ตทรูล่ม',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบเครื่องโมเด็มและสาย Lan', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'punpuri_puri',
                uid: '2',
                date: '2023-04-29T08:30:00.000Z',
                content: 'true5G ที่วัดเพชรสมุทร หรือวัดบ้านแหลม สมุทรสงคราม ครับ เคยมาหลายครั้ง เน็ตทรูยังใช้งานดีถึงแม้จะควบรวมกับดีแทค',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 0, positive: 100 },
                    issue: 'ไม่มีปัญหา',
                    solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
            },
            {
                twiiterName: 'water_joongdunk',
                uid: '3',
                date: '2023-04-28T12:45:00.000Z',
                content: 'ต้องมีอะไรผิดพลาดตรงไหนไม่เข้าใจเลยสักครั้ง เป็นมาตลอด เสมอต้นเสมอปลายไม่เคยเปลี่ยน เปลี่ยนอุปกรณ์แล้ว เปลี่ยนสถานที่แล้ว เปลี่ยนคอนแล้ว เปลี่ยนแอคกดแล้ว เหลือเปลี่ยนจากเน็ตทรูไปซบอกเจ้าอื่นละนะ เซ็งมากเด้อ',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 100, positive: 0 },
                  issue: 'ระบบบริการช้า',
                  solveWays: ['ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
              },
              {
                twiiterName: 'JinnapatArunya1',
                uid: '4',
                date: '2023-04-27T09:15:00.000Z',
                content: 'เน็ตทรูโคตรกาก เราสมัคร20Mb unlimited ใช้ได้จริงอยู่300kb ขอร้องงง',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 70, positive: 30 },
                  issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                  solveWays: [
                    'ใช้อุปกรณ์ที่เชื่อมต่อกับ Wifi ได้ดีขึ้น',
                    'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น',
                    'ติดต่อ Call Center เพื่อขอความช่วยเหลือ',
                  ],
                },
              },
              {
                twiiterName: 'donutspec1al',
                uid: '5',
                date: '2023-04-26T14:20:00.000Z',
                content: 'บ้านนี่เน็ตทรูยังแรงเป็นปกติ เห็นข้างบ้านบอกใช้ดีแทคก็ดีขึ้นเหมือนกัน',
                emotion: 'POSITIVE',
                solveThis: {
                  eachEmotion: { negative: 0, positive: 100 },
                  issue: 'ไม่มีปัญหา',
                  solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
              },
              {
                twiiterName: 'johnniqx',
                uid: '6',
                date: '2023-04-25T17:30:00.000Z',
                content: 'เน็ตทรูล่มใช่มั้ย นี่จะเล่นเกมเปิดไมค์ไปด้วยยังยาก',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 90, positive: 10 },
                  issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                  solveWays: [
                    'ติดต่อ Call Center เพื่อขอความช่วยเหลือ',
                    'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่',
                    'ตรวจสอบเครื่องโมเด็มและสาย Lan',
                  ],
                },
              },
              {
                twiiterName: 'Np24mmYCcrAjJ3y',
                uid: '7',
                date: '2023-04-24T21:50:00.000Z',
                content: 'เน็ตทรูยังไว้ใจได้เสมอ ถึงแม้จะรวมกับดีแทคแล้ว แต่ไม่กระทบของผมแน่นอน ดีเหมือนเดิม',
                emotion: 'POSITIVE',
                solveThis: {
                  eachEmotion: { negative: 0, positive: 100 },
                  issue: 'ไม่มีปัญหา',
                  solveWays: ['ไม่ต้องแก้ไขใด ๆ'],
                },
              },
              {
                twiiterName: '_mimitiff',
                uid: '8',
                date: '2023-04-23T23:00:00.000Z',
                content: 'เน็ตทรูตายห่าไปแล้วเหรอ ล่มตั้งแต่เช้าตอนนี้ก็ยังใช้ไม่ได้',
                emotion: 'NEGATIVE',
                solveThis: {
                  eachEmotion: { negative: 80, positive: 20 },
                  issue: 'ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้',
                  solveWays: ['ตรวจสอบสัญญาณที่ใช้งาน', 'ตรวจสอบเบอร์ที่กำลังโทร', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
              },
              {
                twiiterName: 'maewyearbkeyboard',
                uid: '9',
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
                  twiiterName: 'jklmxxd',
                    uid: '10',
                  date: '2023-04-22T16:45:00.000Z',
                  content: 'อีเน็ตทรู ***ล่มมา 2 วันกว่าแล้ว ไม่มีแอคชั่นใดใดโทรไปมันบอกเวลาที่จะใช้ได้แบบผลัดไปเรื่อยๆ จนแม่งตั้งข้อความเสียงอัตโนมัติใส่ ***เจอแน่กุยกเลิกแน่*** ไม่ใช่แค่เน็ตบ้าน ออฟฟิส เน็ตมือถือก็ง่อยด้วยตอนนี้ อิเวง',
                  emotion: 'NEGATIVE',
                  solveThis: {
                  eachEmotion: { negative: 100, positive: 0 },
                  issue: 'ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้',
                  solveWays: ['ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                  },
                  },
                  ],
                  summaryAnalyticData: { negative: 55, positive: 45 },
    },
    {
        id: 'ค่ายเขียว',
        postLst: [
            {
                twiiterName: 'kae_rodjana',
                uid: '11',
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
                twiiterName: 'maimysone',
                uid: '12',
                date: '2023-04-30T09:15:00.000Z',
                content: 'ais เน็ตเน่ามาก เมื่อก่อนไม่เป็นแบบนี้หนิ เล่นrovปิง200 ทำไรไม่ได้เลย ****มากนะ เป็นทุกวัน เป็นอะไรนักหนาอ่ะ',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 70, positive: 30 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: [
                        'ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสียรกหรือไม่',
                        'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่',
                        'ซื้อแพ็กเกจที่มีปริมาณข้อมูลมากกว่าเดิม',
                        'ติดต่อ Call Center เพื่อขอความช่วยเหลือ',
                    ],
                },
            },
            {
                twiiterName: '55lifeisok',
                uid: '13',
                date: '2023-04-30T14:30:00.000Z',
                content: 'ถ้าชีวิตหวังพึ่งเน็ตมือถือ คงไม่ต้องทำอะไร เน็ตช้า สัญญาณหาย ไก่กาชิบ ais',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 80, positive: 20 },
                issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                solveWays: ['ตรวจสอบว่ายังไม่ได้ใช้อินเทอร์เต็มที่ของความเร็วสูงสุด', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'pplawhal',
                uid: '14',
                date: '2023-04-29T11:00:00.000Z',
                content: 'เน็ต ais บนทางด่วนแย่มาก จากที่ชนะชั้นแพ้เพราะตีป้อมไม่ได้อะ โอ้ยจวยๆๆๆๆๆๆๆ คือลงแร้งด้วยไง',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 90, positive: 10 },
                issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
                },
                {
                twiiterName: 'chacharlotte21',
                uid: '15',
                date: '2023-04-28T13:15:00.000Z',
                content: 'ทุกคน 2-3วันนี้เน็ตใครช้าบ้าง ช้าแบบมากกว่าจะโหลด',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 80, positive: 20 },
                issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'momo59915680',
                uid: '16',
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
                twiiterName: 'dear4fourth',
                uid: '17',
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
                twiiterName: 'bambeamii',
                uid: '18',
                date: '2023-04-25T17:30:00.000Z',
                content: 'AIS ************สุดๆ ใช้มาเป็น10ปี ภักดีต่อแบรนด์ขนาดไหน ฝนตกทีสัญญาณหายตลอด แล้วหายทั้งวัน กด1175จะแจ้งปัญหาก็ให้กรอกลิงก์ ***เถอะ เน็ตไม่วิ่งแบบนี้จะกดลิงก์ไปหรอ ***ยย',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 90, positive: 10 },
                issue: 'เน็ตช้าและไม่ได้สัญญาณ',
                solveWays: ['ตรวจสอบเครื่องโมเด็มและสาย Lan', 'ตรวจสอบสัญญาณที่ใช้งาน', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'iamchon41',
                uid: '19',
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
                twiiterName: '_Faiiiiii_',
                uid: '20',
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
                twiiterName: 'paneemo0',
                uid: '21',
                date: '2023-04-22T13:30:00.000Z',
                content: 'คือเพึ่งเติมเน็ตรายอาทิตย์ไปได้ประมาณ5ชั่วโมงแล้วอยู่ดีๆก็มีsmsส่งมาว่าเน็ตหมดคืออะไรคะคุนพี่',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 90, positive: 10 },
                issue: 'เบอร์โทรศัพท์ไม่สามารถใช้งานอินเทอร์เน็ตได้',
                solveWays: ['ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                {
                twiiterName: 'SJames0110',
                uid: '22',
                date: '2023-04-21T16:45:00.000Z',
                content: 'ล่าสุดเปลี่ยนค่ายแล้วค่ะ ไม่ทนละ เพิ่งจ่ายไปมาตัดเน็ตเฉย ติดต่อคอลเซ็นเตอร์ไม่ได้สักคน ห่วยมากกก  แล้วอยู่ข้างนอกติดต่อใครไม่ได้ต้องขอใช้ไวไฟร้านอาหาร ',
                emotion: 'NEGATIVE',
                solveThis: {
                eachEmotion: { negative: 100, positive: 0 },
                issue: 'ไม่ได้รับการชำระเงินแต่ถูกตัดบริการ',
                solveWays: ['ตรวจสอบการชำระเงิน', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
                },
                // ],
                // summaryAnalyticData: { negative: 50, positive: 50 },
                // },
                // ];
        ],
        summaryAnalyticData: { negative: 65, positive: 35 },
    },
    {
        id: 'เน็ตทีโอที',
        postLst: [
            {
                twiiterName: 'YoruMinto',
                uid: '23',
                date: '2023-04-30T20:10:00.000Z',
                content: 'เน็ตใช้ไม่ได้ โทรติดก็ยาก จนท.ตอบแบบมะนาวไม่มีน้ำไปอีก บอกไม่ได้ว่าจะใช้ได้กี่โมงเพราะช่างไม่ได้แจ้ง',
                emotion: 'POSITIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'เบอร์โทรศัพท์ไม่สามารถใช้งานอินเทอร์เน็ตได้',
                    solveWays: ['ติดต่อ Call Center เพื่อขอความช่วยเหลือ', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', ],
                },
            },
            {
                twiiterName: 'Chocobowy',
                uid: '24',
                date: '2023-04-29T12:30:00.000Z',
                content: 'เน็ต TOT ใครล่มบ้าง',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'สัญญาณอินเทอร์เน็ตล่ม',
                    solveWays: ['ตรวจสอบการติดตั้ง Router และสาย Lan', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
        ],
        summaryAnalyticData: { negative: 100, positive: 0 },
    },
    {
        id: 'AIS',
        postLst: [
            {
                twiiterName: 'Ppphkkkk',
                uid: '25',
                date: '2023-04-29T14:50:00.000Z',
                content: 'ช่วงนี้สัญญาณกากมากครับเปลี่ยนค่ายดีกว่า',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'b920930',
                uid: '26',
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
                twiiterName: 'fxern2542',
                uid: '27',
                date: '2023-04-29T21:15:00.000Z',
                content: 'dtac เน็ตช้ามาก ๆ แก้ไขยังไงดี',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 90, positive: 10 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
            },
            {
                twiiterName: 'DreamKwamfun',
                uid: '28',
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
    
        {
        id: 'เน็ตทรูกาก',
        postLst: [
            {
                twiiterName: 'blacktist',
                uid: '29',
                date: '2022-09-29T21:12:00.000Z',
                content: 'เน็ตทรูกากมาก เล่นไรไม่ได้เลย',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['เชื่อมต่อกับ Wifi ที่เร็วขึ้น', 'ซื้อแพ็กเกจเน็ตที่เร็วขึ้น', 'ตรวจสอบเครื่องโมเด็มและสาย Lan'],
                },
            },
            {
                twiiterName: 'rainmabel',
                uid: '30',
                date: '2023-04-3T15:00:00.000Z',
                content: 'บริการของ True แย่มากจริงๆค่ะ ปัญหาของเราคารังคาซังมา 2-3 เดือนแล้วยังไม่จบเลยค่ะ ถ้ามีตัวเลือกอื่นให้ใข้ อย่าใช้ทรูเด็ดขาดค่ะ ',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
                        {
                twiiterName: 'SWS_NCh',
                uid: '31',
                date: '2021-10-20T10:00:00.000Z',
                content: 'ตอนนี้ใช้เน็ตทรูอยู่ เล่นอะไรไม่ได้เลย ดูยูทูปยังกระตุก',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'asaneep',
                uid: '32',
                date: '2022-14-10T18:00:00.000Z',
                content: 'เน็ตแม่งกากชห',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'pinkiigirl',
                uid: '33',
                date: '2023-12-10T18:00:00.000Z',
                content: 'อยู่บ้านเน็ตทรูกระจอกมาก มากรุงเทพเน็ตไอเอเอสกากเว่อ ดีนะมีทั้งสองค่าย เห้อ',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'kr0172',
                uid: '34',
                date: '2024-15-10T18:00:00.000Z',
                content: 'นิยามเน็ตทรู กาก จ่ายแพง ล่มบ่อย ขยันทวง',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'real__aurora',
                uid: '35',
                date: '2019-30-10T18:00:00.000Z',
                content: 'เน็ตบ้านมีค่ายไหนดีๆบ้างที่ไม่ใช่ทรู อืด ช้า กาก เล่นเกมเกมก็โหลดเข้าไม่ได้ ยิ่งออนไลน์คือตกแมพไปเลยเซ็ง',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
            {
                twiiterName: 'R_Alisa_39',
                uid: '36',
                date: '2018-01-10T18:00:00.000Z',
                content: 'ช่วงเวลานี้เน็ตทรูก็คือ กากสุดๆ  จะเป็นช่วงเวลานี้ตลอด ไม่รู้ทำไม หงุดหงิดอะ',
                emotion: 'NEGATIVE',
                solveThis: {
                    eachEmotion: { negative: 100, positive: 0 },
                    issue: 'สัญญาณอินเทอร์เน็ตไม่มีความเสถียร',
                    solveWays: ['ตรวจสอบสถานที่ที่เชื่อมต่ออินเทอร์เน็ตว่ามีความเสถียรหรือไม่', 'ตรวจสอบสัญญาณที่อุปกรณ์ที่ทำการเชื่อมต่อว่าสามารถรับสัญญาณได้หรือไม่', 'ติดต่อ Call Center เพื่อขอความช่วยเหลือ'],
                },
            },
        ],
        summaryAnalyticData: { negative: 100, positive: 0 },
    },
    
];



export {
    mockData
}