window.CHEATSHEETS = {
  math: {
    sections: [
      {
        icon: "📐",
        title: "นิยามและสัญลักษณ์เซต",
        content: `เซต (Set) = กลุ่มของสิ่งต่างๆ ที่กำหนดได้ชัดเจน
สมาชิก (Element/Member) = สิ่งที่อยู่ในเซต
เขียนแทนด้วย: A = {1, 2, 3} หรือ A = {x | เงื่อนไข}

สัญลักษณ์สำคัญ:
∈ = เป็นสมาชิกของ       ∉ = ไม่เป็นสมาชิกของ
⊂ = เป็นสับเซตของ       ⊄ = ไม่เป็นสับเซตของ
∅ หรือ {} = เซตว่าง     n(A) = จำนวนสมาชิกของ A
U = เอกภพสัมพัทธ์       P(A) = เพาเวอร์เซตของ A`
      },
      {
        icon: "🔢",
        title: "จำนวนสับเซตและเพาเวอร์เซต",
        content: `ถ้า n(A) = n (จำนวนสมาชิก)
→ จำนวนสับเซตทั้งหมด = 2ⁿ
→ จำนวนสับเซตแท้ = 2ⁿ - 1 (ไม่รวมตัวเอง)
→ n(P(A)) = 2ⁿ (เพาเวอร์เซตมี 2ⁿ สมาชิก)

ตัวอย่าง: A = {1, 2, 3} → n = 3
จำนวนสับเซต = 2³ = 8
P(A) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}}`,
        formulas: `จำนวนสับเซต = 2ⁿ
จำนวนสับเซตแท้ = 2ⁿ - 1
n(P(A)) = 2^n(A)`
      },
      {
        icon: "🔵",
        title: "การดำเนินการระหว่างเซต",
        content: `ยูเนียน (Union): A ∪ B = {x | x ∈ A หรือ x ∈ B}
อินเตอร์เซกชัน (Intersection): A ∩ B = {x | x ∈ A และ x ∈ B}
คอมพลีเมนต์ (Complement): A' = U - A = {x ∈ U | x ∉ A}
ผลต่าง (Difference): A - B = {x | x ∈ A และ x ∉ B}
ผลต่างสมมาตร: A △ B = (A-B) ∪ (B-A)

กฎสำคัญ:
• ถ้า A ⊂ B → A ∩ B = A และ A ∪ B = B
• A ∩ A' = ∅    A ∪ A' = U
• (A')' = A     (A ∪ B)' = A' ∩ B' (De Morgan)
• (A ∩ B)' = A' ∪ B' (De Morgan)`
      },
      {
        icon: "🔢",
        title: "สูตรโจทย์ปัญหาเซต",
        content: `2 เซต:
n(A ∪ B) = n(A) + n(B) - n(A ∩ B)

3 เซต:
n(A∪B∪C) = n(A)+n(B)+n(C)-n(A∩B)-n(A∩C)-n(B∩C)+n(A∩B∩C)

เฉพาะ A เท่านั้น = n(A) - n(A∩B) - n(A∩C) + n(A∩B∩C)

ไม่อยู่ในเซตใดเลย = n(U) - n(A∪B∪C)`,
        formulas: `n(A∪B) = n(A) + n(B) - n(A∩B)
n(A∪B∪C) = n(A)+n(B)+n(C)-n(A∩B)-n(A∩C)-n(B∩C)+n(A∩B∩C)`
      }
    ]
  },

  thai: {
    sections: [
      {
        icon: "📝",
        title: "องค์ประกอบการสื่อสาร",
        content: `การสื่อสาร = กระบวนการส่งข้อมูลจากผู้หนึ่งไปยังอีกผู้หนึ่ง

องค์ประกอบ 4+1 ส่วน:
1. ผู้ส่งสาร (Sender/Encoder)
2. สาร (Message) = เนื้อหาที่ต้องการสื่อ
3. ช่องทาง (Channel/Medium) = วิธีส่ง
4. ผู้รับสาร (Receiver/Decoder)
5. ผลป้อนกลับ (Feedback) = การตอบสนอง

อุปสรรค (Noise): ทุกสิ่งที่ขัดขวางการสื่อสาร
• ทางกายภาพ: เสียง ระยะทาง
• ทางจิตใจ: อคติ อารมณ์
• ทางภาษา: ใช้คำไม่ตรงกัน`
      },
      {
        icon: "📖",
        title: "ระดับภาษาไทย",
        content: `ระดับที่ 1 ภาษาแบบแผน (Formal): พิธีการ ราชการ
  ใช้ศัพท์สุภาพ ราชาศัพท์ โครงสร้างสมบูรณ์
  เช่น: "ข้าพเจ้าขอกราบเรียนท่านอธิการบดี..."

ระดับที่ 2 ภาษากึ่งแบบแผน: ธุรกิจ วิชาการ
  เป็นทางการแต่ไม่เคร่งครัดมาก

ระดับที่ 3 ภาษาสนทนา (Informal): สนทนาทั่วไป
  ใช้คำสุภาพ ไม่ใช้คำหยาบ

ระดับที่ 4 ภาษาปาก (Colloquial): เพื่อนสนิท
  ใช้คำย่อ สแลง คำไม่เป็นทางการ

ระดับที่ 5 ภาษาหยาบ: ใช้คำหยาบคาย ไม่สุภาพ`
      },
      {
        icon: "🌟",
        title: "โวหารภาพพจน์",
        content: `อุปมา (Simile): เปรียบโดยใช้คำเชื่อม เหมือน ราวกับ ดุจ ดัง
  เช่น: "ใจเธอแข็งเหมือนหิน"

อุปลักษณ์ (Metaphor): เปรียบโดยตรง ไม่ใช้คำเชื่อม
  เช่น: "ใจเธอเป็นหิน"

บุคลาธิษฐาน (Personification): ให้สิ่งไม่มีชีวิตแสดงกิริยามนุษย์
  เช่น: "ลมกระซิบบอกความลับ"

อธิพจน์/อติพจน์ (Hyperbole): เกินความจริง
  เช่น: "กินข้าวเป็นภูเขา"

สัทพจน์ (Onomatopoeia): ใช้เสียงแทนความหมาย
  เช่น: "เสียงแกะๆ กุกๆ"

นามนัย (Metonymy): ใช้สิ่งแทนสิ่งอื่น
  เช่น: "มงกุฎ" แทน กษัตริย์`
      },
      {
        icon: "📚",
        title: "ราชาศัพท์ที่ควรรู้",
        content: `กิน → เสวย (พระมหากษัตริย์) / รับประทาน (สุภาพ)
นอน → บรรทม
เดิน → เสด็จ
พูด → ตรัส
ตาย → สวรรคต (กษัตริย์) / ถึงแก่กรรม (ขุนนาง)
ขา → พระบาท
มือ → พระหัตถ์
ตา → พระเนตร
หัว → พระเศียร
ลูก → พระราชโอรส (ชาย) / พระราชธิดา (หญิง)`
      }
    ]
  },

  english: {
    sections: [
      {
        icon: "⏰",
        title: "Tenses Summary",
        content: `PRESENT:
• Simple Present: She works daily (routine/habit)
• Present Continuous: She is working now
• Present Perfect: She has worked here for 3 years
• Present Perfect Continuous: She has been working since 9am

PAST:
• Simple Past: She worked yesterday
• Past Continuous: She was working when I called
• Past Perfect: She had worked before I arrived

FUTURE:
• Simple Future: She will work tomorrow
• Future Continuous: She will be working at 9am
• Future Perfect: She will have worked 10 years by then`,
        formulas: `Simple Present: V/V+s (he/she/it)
Past Simple: V2 (regular: +ed, irregular: memorize)
Present Perfect: have/has + V3
Future: will + V1`
      },
      {
        icon: "📌",
        title: "Prepositions of Time",
        content: `AT: specific time
• at 3pm, at noon, at midnight, at night

ON: days and dates
• on Monday, on July 4th, on weekends

IN: months, years, seasons, periods
• in July, in 2024, in summer, in the morning

FOR: duration
• for 3 hours, for a long time

SINCE: starting point
• since 2020, since Monday

DURING: throughout a period
• during the meeting, during summer`,
        formulas: `AT = time (at 5pm)
ON = day/date (on Monday)
IN = month/year (in March)`
      },
      {
        icon: "📋",
        title: "Modal Verbs",
        content: `OBLIGATION/NECESSITY:
must = strong obligation (law, strong opinion)
have to = external obligation
should = advice/recommendation

POSSIBILITY/PROBABILITY:
will = certainty (future)
would = hypothetical/polite
may = possibility (~50%)
might = less possibility (~30%)
could = past ability / possibility

ABILITY:
can = ability (present)
could = ability (past) / polite request

PERMISSION:
can/may = permission
must not = prohibition`,
        formulas: `must > have to > should > may/might > could
Modal + base verb (no -s, no -ed, no -ing)`
      },
      {
        icon: "🔧",
        title: "Articles (a, an, the)",
        content: `A/AN (Indefinite Article):
• First mention: I saw a dog.
• Non-specific: I want a book (any book)
• A + consonant sound: a university, a European
• AN + vowel sound: an apple, an hour

THE (Definite Article):
• Already known: The dog I saw was brown
• Unique nouns: the sun, the moon, the earth
• Superlatives: the best, the most beautiful
• Specific: The book on the table

NO ARTICLE:
• General/uncountable: I like music
• Countries, languages: Thailand, English
• Meals: at breakfast, after dinner`
      }
    ]
  },

  biology: {
    sections: [
      {
        icon: "🧬",
        title: "สารชีวโมเลกุล",
        content: `1. คาร์โบไฮเดรต (Carbohydrates)
   โมโนเมอร์: น้ำตาลโมเลกุลเดี่ยว (กลูโคส ฟรักโตส)
   ตัวอย่าง: แป้ง (Starch), เซลลูโลส, ไกลโคเจน
   หน้าที่: พลังงานหลัก (4 kcal/g)

2. โปรตีน (Proteins)
   โมโนเมอร์: กรดอะมิโน (20 ชนิด)
   ตัวอย่าง: เอนไซม์ ฮีโมโกลบิน แอนติบอดี
   หน้าที่: สร้างโครงสร้าง เร่งปฏิกิริยา ภูมิคุ้มกัน

3. ไขมัน (Lipids)
   โมโนเมอร์: กรดไขมัน + กลีเซอรอล
   ตัวอย่าง: ไตรกลีเซอไรด์ ฟอสโฟลิปิด
   หน้าที่: พลังงานสำรอง (9 kcal/g) เยื่อหุ้มเซลล์

4. กรดนิวคลีอิก (Nucleic Acids)
   โมโนเมอร์: นิวคลีโอไทด์
   ตัวอย่าง: DNA, RNA
   หน้าที่: เก็บและถ่ายทอดข้อมูลพันธุกรรม`,
        formulas: `พลังงาน: คาร์โบ=4, โปรตีน=4, ไขมัน=9 kcal/g
DNA: A-T, G-C | RNA: A-U, G-C`
      },
      {
        icon: "⚗️",
        title: "เอนไซม์ (Enzymes)",
        content: `เอนไซม์ = ตัวเร่งปฏิกิริยาชีวภาพ (ส่วนใหญ่เป็นโปรตีน)

คุณสมบัติ:
• ลด Activation Energy
• ไม่ถูกใช้หมดไป (Reusable)
• จำเพาะต่อสารตั้งต้น (Substrate Specificity)
• ทำงานที่ Active Site

ปัจจัยที่มีผลต่อเอนไซม์:
• อุณหภูมิ: สูงเกิน → Denaturation (~40°C)
• pH: ค่าเหมาะสมต่างกันตามเอนไซม์
• ความเข้มข้นสารตั้งต้น: เพิ่มอัตราถึงจุดอิ่มตัว
• สารยับยั้ง (Inhibitor): Competitive/Non-competitive`,
        formulas: `Optimum temp ≈ 37°C (ร่างกายมนุษย์)
อุณหภูมิ > 40°C → Denaturation
Enzyme + Substrate → Enzyme-Substrate Complex → Products`
      },
      {
        icon: "🌿",
        title: "เมแทบอลิซึม",
        content: `การสังเคราะห์ด้วยแสง (Photosynthesis):
6CO2 + 6H2O + แสง → C6H12O6 + 6O2
• ปฏิกิริยาแสง → Thylakoid (ผลิต ATP, NADPH, O2)
• Calvin Cycle → Stroma (ผลิตน้ำตาล G3P)

การหายใจระดับเซลล์ (Cellular Respiration):
C6H12O6 + 6O2 → 6CO2 + 6H2O + 36-38 ATP

ขั้นตอน:
1. Glycolysis → Cytoplasm → 2 ATP
2. Pyruvate Oxidation → Matrix
3. Krebs Cycle → Matrix → 2 ATP
4. ETC → Inner membrane → 32-34 ATP`,
        formulas: `สังเคราะห์แสง: 6CO2 + 6H2O + แสง → C6H12O6 + 6O2
หายใจ: C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP
ATP รวม: ~36-38 ATP/กลูโคส`
      },
      {
        icon: "🔬",
        title: "การแบ่งเซลล์",
        content: `ไมโทซิส (Mitosis):
• เกิดใน: Somatic cells (เซลล์ร่างกาย)
• ผลลัพธ์: 2 เซลล์ลูก (2n) เหมือนเซลล์แม่
• เพื่อ: การเจริญเติบโต ซ่อมแซม สืบพันธุ์แบบไม่อาศัยเพศ
• ระยะ: Prophase → Metaphase → Anaphase → Telophase

ไมโอซิส (Meiosis):
• เกิดใน: Reproductive organs (อวัยวะสืบพันธุ์)
• ผลลัพธ์: 4 เซลล์ลูก (n) ต่างจากเซลล์แม่
• เพื่อ: สร้างเซลล์สืบพันธุ์ (gametes)
• ระยะ: Meiosis I + Meiosis II (แบ่ง 2 รอบ)

วัฏจักรเซลล์: G1 → S (DNA จำลอง) → G2 → M`,
        formulas: `ไมโทซิส: 2n → 2n (2 เซลล์)
ไมโอซิส: 2n → n (4 เซลล์)`
      }
    ]
  },

  chemistry: {
    sections: [
      {
        icon: "⚛️",
        title: "แบบจำลองอะตอม",
        content: `ลำดับแบบจำลอง:
1. Dalton (1803): อะตอมทรงกลมแบ่งไม่ได้
2. Thomson (1904): Plum Pudding - ทรงกลมบวก มีอิเล็กตรอน
3. Rutherford (1911): มีนิวเคลียสขนาดเล็กอยู่กลาง (Gold foil)
4. Bohr (1913): อิเล็กตรอนโคจรเป็นวงชั้น n=1,2,3...
5. Schrödinger/Quantum Mechanical (1926): กลุ่มหมอก ออร์บิทัล

อนุภาคในอะตอม:
• โปรตอน (p): +1, 1 amu, ในนิวเคลียส
• นิวตรอน (n): 0, 1 amu, ในนิวเคลียส
• อิเล็กตรอน (e⁻): -1, 1/1836 amu, นอกนิวเคลียส`,
        formulas: `เลขอะตอม (Z) = จำนวนโปรตอน
เลขมวล (A) = โปรตอน + นิวตรอน
นิวตรอน = A - Z`
      },
      {
        icon: "📊",
        title: "แนวโน้มในตารางธาตุ",
        content: `ขนาดอะตอม:
→ ตามคาบ: ลดลง (Zeff เพิ่ม)
↓ ตามหมู่: เพิ่มขึ้น (วงโคจรเพิ่ม)

Ionization Energy (IE):
→ ตามคาบ: เพิ่มขึ้น
↓ ตามหมู่: ลดลง
สูงสุด: He, Ne, Ar (Noble gases)

Electronegativity:
→ ตามคาบ: เพิ่มขึ้น
↓ ตามหมู่: ลดลง
สูงสุด: F (3.98) > O (3.44) > N (3.04)

Electron Affinity: คาบ→ เพิ่ม | หมู่↓ ลด`,
        formulas: `จำง่าย: สิ่งที่ "เพิ่ม" ตามคาบ (→): Zeff, IE, EN, Electron Affinity
สิ่งที่ "ลด" ตามคาบ (→): ขนาดอะตอม, ขนาดไอออน`
      },
      {
        icon: "☢️",
        title: "กัมมันตรังสี",
        content: `รังสี Alpha (α): ⁴₂He
• ประจุ: +2
• ทะลุทะลวง: ต่ำ (กระดาษหยุดได้)
• A ลด 4, Z ลด 2

รังสี Beta (β⁻): ⁰₋₁e
• ประจุ: -1
• ทะลุทะลวง: กลาง (อลูมิเนียมหยุดได้)
• A คงที่, Z เพิ่ม 1 (n→p)

รังสี Gamma (γ):
• ประจุ: 0
• ทะลุทะลวง: สูงสุด (ต้องตะกั่วหนา)
• A และ Z ไม่เปลี่ยน`,
        formulas: `N = N₀ × (½)^(t/t½)
t½ = ครึ่งชีวิต
Alpha: Z-2, A-4 | Beta⁻: Z+1, A เท่าเดิม`
      },
      {
        icon: "🧪",
        title: "โมล (Mole) และสมการเคมี",
        content: `เลขอาโวกาโดร: Nₐ = 6.022 × 10²³ อนุภาค/mol

ความสัมพันธ์:
n (โมล) = m (มวล, g) / M (มวลโมลาร์, g/mol)
n = N (จำนวนอนุภาค) / Nₐ
n = V (ปริมาตร, L) / 22.4 (ที่ STP)

มวลโมลาร์: ผลรวมมวลอะตอมในสูตร
H2O = 2(1) + 16 = 18 g/mol
CO2 = 12 + 2(16) = 44 g/mol
NaCl = 23 + 35.5 = 58.5 g/mol`,
        formulas: `n = m/M
n = N/Nₐ
n = V/22.4 (STP)
Nₐ = 6.022 × 10²³`
      }
    ]
  },

  physics: {
    sections: [
      {
        icon: "📏",
        title: "การวัดและเลขนัยสำคัญ",
        content: `เลขนัยสำคัญ (Significant Figures, SF):
นับ:
✅ เลขที่ไม่ใช่ศูนย์ทุกตัว (1-9)
✅ เลขศูนย์ระหว่างตัวเลข เช่น 305 (3SF)
✅ เลขศูนย์ท้ายตัวเลขทศนิยม เช่น 3.50 (3SF)
❌ เลขศูนย์นำหน้า เช่น 0.005 (1SF)
❌ เลขศูนย์ท้ายจำนวนเต็ม เช่น 300 (1SF หรือมากกว่า)

การคำนวณ:
• คูณ/หาร: ใช้ SF น้อยสุด
• บวก/ลบ: ใช้ทศนิยมน้อยสุด

หน่วย SI พื้นฐาน:
ความยาว: m | มวล: kg | เวลา: s | กระแส: A
อุณหภูมิ: K | ปริมาณสาร: mol | ความเข้มแสง: cd`,
        formulas: `คูณ/หาร: SF ผลลัพธ์ = SF น้อยสุด
บวก/ลบ: ตำแหน่งทศนิยมน้อยสุด`
      },
      {
        icon: "🚀",
        title: "สมการจลศาสตร์",
        content: `สมการการเคลื่อนที่แนวตรงสม่ำเสมอ (a = คงที่):

v = u + at
s = ut + ½at²
v² = u² + 2as
s = (u + v)t / 2

ตัวย่อ:
u = ความเร็วต้น (m/s)
v = ความเร็วปลาย (m/s)
a = ความเร่ง (m/s²)
t = เวลา (s)
s = ระยะกระจัด (m)

การตกอิสระ: u = 0, a = g ≈ 10 m/s²
s = ½gt² | v = gt | v² = 2gs`,
        formulas: `v = u + at
s = ut + ½at²
v² = u² + 2as
s = ½(u+v)t`
      },
      {
        icon: "⚖️",
        title: "กฎของนิวตัน",
        content: `กฎข้อที่ 1 (ความเฉื่อย/Inertia):
ΣF = 0 → ความเร็วคงที่ (หยุดนิ่งหรือเคลื่อนที่สม่ำเสมอ)

กฎข้อที่ 2 (F = ma):
ΣF = ma
F = แรงสุทธิ (N) | m = มวล (kg) | a = ความเร่ง (m/s²)

กฎข้อที่ 3 (Action-Reaction):
F_AB = -F_BA
คู่แรงเท่ากัน ทิศตรงข้าม คนละวัตถุ

แรงเสียดทาน:
f = μN
f_s(สถิตย์) = μs·N | f_k(จลน์) = μk·N
μs > μk เสมอ`,
        formulas: `F = ma
f = μN (พื้นราบ: N = mg)
W = mg (น้ำหนัก)`
      },
      {
        icon: "⚡",
        title: "งาน พลังงาน กำลัง",
        content: `งาน (Work): W = F·d·cosθ
• θ = มุมระหว่างแรงกับทิศเคลื่อนที่
• θ = 90° → W = 0
• หน่วย: Joule (J) = N·m

พลังงานจลน์ (KE): KE = ½mv²
พลังงานศักย์โน้มถ่วง (PE): PE = mgh

กฎอนุรักษ์พลังงานกล (ไม่มีแรงเสียดทาน):
KE + PE = คงที่
½mv₁² + mgh₁ = ½mv₂² + mgh₂

กำลัง (Power): P = W/t = F·v
• หน่วย: Watt (W) = J/s
• 1 HP = 746 W`,
        formulas: `W = Fd cosθ (หน่วย: J)
KE = ½mv² | PE = mgh
P = W/t = Fv (หน่วย: W)`
      }
    ]
  }
};
