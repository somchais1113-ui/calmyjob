# Calculation model / คำอธิบายสูตรทั้งหมด

## 1) Base Salary / ปี

`Monthly Salary × Salary Months`

บริษัทเดิม: `182,000 × 12 = 2,184,000`
บริษัทใหม่: `220,000 × 12 = 2,640,000`

## 2) Guaranteed Bonus / ปี

`Monthly Salary × Fixed Bonus Months + Fixed Bonus Lump Sum`

บริษัทเดิม: `182,000 × 1 = 182,000`
บริษัทใหม่: `220,000 × 0 = 0`

## 3) Fixed Allowance / ปี

`(Transport Per Month × Months) + (Mobile Per Month × Months) + (Other Per Month × Months) + Other Annual`

บริษัทเดิม: `1,500 × 12 = 18,000`
บริษัทใหม่: `10,000 × 12 = 120,000`

## 4) Guaranteed Cash

`Base Salary + Fixed Bonus + Allowance`

บริษัทเดิม: `2,184,000 + 182,000 + 18,000 = 2,384,000`
บริษัทใหม่: `2,640,000 + 0 + 120,000 = 2,760,000`

## 5) Variable Bonus

มีตัวเลือก:

- แบบ `%`: `Bonus Eligible Salary Base × Bonus Rate / 100`
- แบบจำนวนเดือน: `Monthly Salary × Bonus Months`
- แบบจำนวนเงิน: `Annual Bonus Amount`
- ไม่มีโบนัส: `0`

หากตั้งค่า `%` ฐานเงินเดือนสามารถเป็น `Base Salary only` หรือ `Base Salary + Guaranteed Bonus` ตามเงื่อนไขบริษัท

**ตัวอย่างตามตารางเดิม:**

- บริษัทเดิม: `(2,184,000 + 182,000) × 18% = 425,880`
- บริษัทใหม่: `220,000 × 2 เดือน = 440,000`

## 6) Variable Cash & Total Cash

`Variable Cash = Variable Bonus + Commission + Incentive`

`Total Cash = Guaranteed Cash + Variable Cash`

- บริษัทเดิม: `2,384,000 + 425,880 = 2,809,880`
- บริษัทใหม่: `2,760,000 + 440,000 = 3,200,000`

## 7) Provident Fund (Employer Contribution)

`Monthly Salary × Contribution Months × Employer Rate / 100 × Vested Portion / 100`

- บริษัทเดิม: `182,000 × 12 × 10% = 218,400`
- บริษัทใหม่: `220,000 × 12 × 8% = 211,200`

ไม่นับเงินสะสม **ฝั่งพนักงาน** เป็นผลประโยชน์เพิ่มเติม เพราะหักจากรายได้ของพนักงานเอง

## 8) Health Insurance

สองโหมด:

1. **Source spreadsheet**: นับวงเงินประกันสุขภาพที่แสดงในต้นฉบับ (บริษัทเดิม 50,000 บริษัทใหม่ 20,000) — เพื่อให้ตรวจกลับกับต้นฉบับได้เท่านั้น
2. **Economic value**: นับค่าเบี้ยประกันโดยประมาณที่นายจ้างจ่ายแทน (ต้องกรอกเอง) — เหมาะกับการประเมินมากกว่า แต่ไม่ใช่เงินสด

> ไม่ควรถือว่าวงเงิน OPD/IPD 50,000 บาทเท่ากับเงินค่าจ้างเพิ่มขึ้น 50,000 บาท

## 9) Total Package / ปี

`Annual Total Cash + Employer PVD + Insurance Value + Other Benefits`

- บริษัทเดิม: `2,809,880 + 218,400 + 50,000 = 3,078,280`
- บริษัทใหม่: `3,200,000 + 211,200 + 20,000 = 3,431,200`

`Incremental % = (New − Old) ÷ Old × 100`

`(3,431,200 − 3,078,280) / 3,078,280 × 100 = 11.464...%`

## 10) Year 1 vs Recurring

`First-Year Package = Recurring Total Package + Signing Bonus (one-time)`

Signing Bonus เป็นเงินครั้งเดียว ไม่ควรบวกซ้ำในปีที่ 2 หรือ 3

## 11) Negotiation Target

`Target Total Package = Current Total Package × (1 + Target % / 100)`

Dashboard **แก้สมการย้อนกลับ** เพื่อหา `Monthly Salary` ที่ทำให้ Package ถึงเป้าหมาย โดยรักษารายการอื่นคงที่ แต่คำนวณโบนัสและ PVD ที่ผูกกับเงินเดือนใหม่

## 12) Quality of Life & Costs

แสดงวันลาและ WFH แยกออกจาก Total Cash เพื่อหลีกเลี่ยงการนับซ้ำ ช่วงวันทำงานต่อปี จำนวนวันที่เข้าออฟฟิศ และเวลาที่ใช้เดินทางเพิ่มเป็นค่าประมาณจากผู้ใช้

## Critical interpretation

- โบนัส Low/Base/High ไม่ใช่ความแน่นอนทางสัญญา
- Expected value เป็นค่าคาดหวังภายใต้การกำหนด Probability ด้วยตนเอง
- รายได้รวมก่อนภาษีไม่เท่ากับเงินเดือนสุทธิหลังหักภาษี
- Package ที่สูงกว่าไม่ได้รับประกันว่าเงินสดที่สามารถใช้จ่ายได้จะสูงกว่าทุกเดือน
