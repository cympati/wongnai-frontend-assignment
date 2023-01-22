# Frontend Assignment 2022

[English version](README-eng.md)

## แบบทดสอบ "สั่งอะไรดี"

### Task 1 API-Gateway

เนื่องจาก Software Engineer, Frontend ที่ LINE MAN Wongnai นั้น โดยปกติแล้วเราจะรับผิดชอบตั้งแต่ Web Application จนไปถึง API-Gateway ซึ่งเป็นส่วนที่เป็นจุดศูนย์รวมข้อมูลจาก microservice ต่าง ๆ ในวงใน

ซึ่งใน task นี้เราจะต้องสร้าง API Gateway Server ที่ใช้ดึงข้อมูลจาก JSON Data ที่ถูกจัดเตรียมไว้ให้ โดยมี requirement ที่จะกล่าวใน section ถัดไป

**การสร้าง API-Gateway Server เขียนด้วยภาษา Typescript**

#### Requirements

- [ ] สร้าง endpoint ต่างๆ และส่งข้อมูลกลับมาให้เว็บสามารถแสดงผลตามดีไซน์ที่กำหนดไว้ได้อย่างถูกต้อง
- [ ] เขียน unit test ของแต่ละ endpoint ที่สร้างขึ้นมา เพื่อที่จะมั่นใจได้ว่า endpoint แต่ละเส้นจะสามารถใช้งานได้เสมอ และทำงานอย่างถูกต้อง

#### Extra Requirements

- [ ] มั่นใจว่า endpoint แต่ละเส้นจะมี performance ที่ดี สามารถ response กลับมาได้อย่างรวดเร็ว

#### JSON Data Spec

- Restaurant `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId.json`

```
{
 "name": string
 "id": number
 "coverImage": string
 "menus: string[]
 "activeTimePeriod": {
    open: string
    close: string
  }
}
```

| ชื่อ field             | คำอธิบาย                 |
| ---------------------- | ------------------------ |
| name                   | ชื่อร้านอาหาร            |
| id                     | id ของร้าน               |
| coverImage             | รูปปกของร้าน             |
| menus                  | ชื่อเมนูทั้งหมดที่ร้านมี |
| activeTimePeriod.open  | เวลาร้านเปิด             |
| activeTimePeriod.close | เวลาร้านปิด              |

- Short Menu `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId/menus/:menuName/short.json`

```
{
 "name": string
 "id": string
 "thumbnailImage"?: string
 "fullPrice": number
 "discountedPercent": number
 "discountedTimePeriod"?: {
    "begin": string
    "end": string
  }
 "sold": number
 "totalInStock": number
}
```

| ชื่อ field                 | คำอธิบาย                      |
| -------------------------- | ----------------------------- |
| name                       | ชื่อเมนู                      |
| id                         | id ของเมนู                    |
| thumbnailImage             | รูปปกเมนู                     |
| fullPrice                  | ราคาเต็ม                      |
| discountedPercent          | เปอร์เซ็นที่ลดราคาจากราคาเต็ม |
| discountedTimePeriod.begin | ช่วงเวลาที่เริ่มลดราคา        |
| discountedTimePeriod.end   | ช่วงเวลาที่จบลดราคา           |
| sold                       | จำนวนที่ขายออก                |
| totalInStock               | จำนวนคงเหลือในร้าน            |

- Full Menu `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId/menus/:menuName/full.json`

```
{
 "name": string
 "id": string
 "thumbnailImage"?: string
 "fullPrice": number
 "discountedPercent": number
 "discountedTimePeriod"?: {
    "begin": string
    "end": string
  }
 "sold": number
 "totalInStock": number
 "largeImage"?: string
 "options": {
    "label": string
    "choices": {
      "label": string
    }[]
  }[]
}
```

| ชื่อ field                 | คำอธิบาย                                                        |
| -------------------------- | --------------------------------------------------------------- |
| name                       | ชื่อเมนู                                                        |
| id                         | id ของเมนู                                                      |
| thumbnailImage             | รูปปกเมนู                                                       |
| fullPrice                  | ราคาเต็ม                                                        |
| discountedPercent          | เปอร์เซ็นที่ลดราคาจากราคาเต็ม                                   |
| discountedTimePeriod.begin | ช่วงเวลาที่เริ่มลดราคา                                          |
| discountedTimePeriod.end   | ช่วงเวลาที่จบลดราคา                                             |
| sold                       | จำนวนที่ขายออก                                                  |
| totalInStock               | จำนวนคงเหลือในร้าน                                              |
| largeImage                 | รูปเมนูขนาดใหญ่                                                 |
| options[].label            | ชื่อของหัวข้อการปรับแต่งเมนู เช่น เลือกเนื้อสัตว์, เลือกไข่     |
| options[].choices[].label  | ชื่อของตัวเลือกสำหรับการปรับแต่งเมนูของหัวข้อนั้น เช่น หมู, ไก่ |

ซึ่งเราได้เตรียม API Server สำหรับทดสอบ API-Gateway ว่าสามารถใช้งานได้ไหมอยู่ที่ https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api

โดยมีร้านสำหรับทดสอบ 2 ร้านที่มี id ดังต่อไปนี้:

- 567051 (ร้านลืมเคี้ยว)
- 227018 (Ekkamai Macchiato - Home Brewer)

### Task 2 React Web Application

![](https://i.imgur.com/Xb7v6YT.png)

การสร้าง web application คืองานหลักที่เหล่า Software Engineer, Frontend ที่ LINE MAN Wongnai นั้นโปรดปราณสุด ๆ โดย web technology หลักของเราก็คือ React

ใน task นี้ เราจะต้องสร้าง React web application สำหรับการอ่านเมนูเวลาไปนั่งที่ร้านอาหาร เพื่อช่วยเหลือ user ของเราให้สามารถสั่งอาหารที่ร้านได้ โดยปราศจากการสัมผัสสมุดเมนูที่ร้านอาหาร ลดความเสี่ยงในการแพร่กระจายของเชื้อ COVID-19

เพื่อความลื่นไหลในการใช้งาน เราจะต้องคำนึงถึง User Experience (UX) ที่ดีเสมอ โดยอนุญาตให้เพิ่มเติมและแก้ไข web application ให้แตกต่างไปจาก Design ที่เตรียมไว้ให้ เพื่อพัฒนา UX/UI ของ website ให้ดียิ่งขึ้น

**การสร้าง Web Application เขียนด้วย React ภาษา Typescript**

#### Requirements

สร้าง web application สำหรับแสดงผลเมนูต่าง ๆ ที่คำนึงถึง UX ที่ดี โดย user จะรู้สึกได้ว่าการใช้งานเมนูผ่าน website นี้สะดวกสบายยิ่งกว่าการใช้สมุดเมนูแบบเล่มบนโต๊ะอาหาร โดยเชื่อมต่อกับ API-Gateway ที่เราสร้างขึ้นในข้อ 1 เพื่อนำข้อมูลมาแสดงผล และสร้างสรรค์ feature ต่าง ๆ ตามที่กำหนดให้

โดย web application จะต้องสามารถทำทุก feature ดังต่อไปนี้ได้

- [ ] แสดงรายละเอียดของเมนูแต่ละเมนูได้อย่างครบถ้วน
- [ ] แสดงรายละเอียดของร้านอาหารได้อย่างครบถ้วน
- [ ] สามารถใช้งานได้ดีบนทุกขนาดหน้าจอ เช่น Desktop, Tablet หรือ Smartphone

และเพื่อควบคุมคุณภาพของโค้ดที่จะถูกส่งออกไปให้กับ user เราจึงจะต้องทำสิ่งต่อไปนี้

- [ ] เขียน unit test เพื่อมั่นใจได้ว่า website ที่ user ใช้งานจะสามารถทำงานได้อย่างถูกต้องตาม feature ข้างต้น

หัวใจหลักของเราคือการมอบความสะดวกสบายให้กับ user ผู้สมัครสามารถเพิ่มเติม feature อื่นที่นอกเหนือจาก feature ที่กล่าวมาข้างต้นได้อย่างอิสระ เพื่อสร้างประสบการณ์ใช้งานที่สะดวกสบายต่อ user และเพิ่มยอดขายให้แก่ร้านที่มาใช้เมนูบน website นี้

#### Extra Requirements

ในส่วนนี้เป็นส่วนที่ถ้าเราทำเพิ่มขึ้นมาจะช่วยให้ UX ดียิ่งขึ้น

- [ ] แสดงผล UI ส่วนลดตามช่วงเวลา เพื่อเพิ่มแรงจูงใจในการตัดสินใจซื้อของ user
- [ ] แสดงผล UI เมนูยอดขายสูงสุด เป็นเมนูยอดนิยม เพื่อเพิ่มแรงจูงใจในการตัดสินใจซื้อของ user
- [ ] ทำให้ website แสดงผลได้อย่างรวดเร็ว แม้จะมีรูป และข้อมูลที่จะต้องถูกโหลดเป็นจำนวนมาก

### Grading Criteria

- [ ] Website สามารถทำงานได้ถูกต้องตาม requirement ทั้งหมดที่กล่าวมา
- [ ] ความชำนาญในด้าน Javascript, Typescript และ React
- [ ] Good Developer Experience โค้ดที่เขียนมาสามารถนำไปพัฒนาต่อได้ยากไหม
- [ ] ประสิทธิภาพการทำงานของ website
- [ ] Website มี UX/UI ที่ดี user สามารถใช้งาน website ได้อย่างลื่นไหล

### Run project

เราได้ทำการสร้างโปรเจคเริ่มต้นทั้ง api-gateway และ web ไว้ให้แล้ว ผู้ทำแบบทดสอบจะต้อง develop api-gateway และ web ตาม task ทั้งหมดที่ได้กล่าวมาข้างต้น โดยท้ายที่สุด script ดังต่อไปนี้จะต้องสามารถ run ทั้งสอง project พร้อมกันได้ที่ root folder อย่างถูกต้อง

1. install all dependencies

```
yarn
```

2. run web and api-gateway in parallel

```
npx lerna run dev --parallel
```

### Assignment Period

สำหรับแบบทดสอบนี้มีระยะเวลาในการทำทั้งสิ้น 3 วัน นับจากวันที่ผู้สมัครได้รับแบบทดสอบผ่านทางอีเมล
