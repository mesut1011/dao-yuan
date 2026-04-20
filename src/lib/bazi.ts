// 天干
export const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']

// 地支
export const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']

// 天干地支对应的五行
export const TIAN_GAN_WU_XING: Record<string, string> = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水'
}

export const DI_ZHI_WU_XING: Record<string, string> = {
  '子': '水', '丑': '土', '寅': '木', '卯': '木',
  '辰': '土', '巳': '火', '午': '火', '未': '土',
  '申': '金', '酉': '金', '戌': '土', '亥': '水'
}

// 地支藏干
export const DI_ZHI_CANG_GAN: Record<string, string[]> = {
  '子': ['癸'],
  '丑': ['己', '癸', '辛'],
  '寅': ['甲', '丙', '戊'],
  '卯': ['乙'],
  '辰': ['戊', '乙', '癸'],
  '巳': ['丙', '庚', '戊'],
  '午': ['丁', '己'],
  '未': ['己', '丁', '乙'],
  '申': ['庚', '壬', '戊'],
  '酉': ['辛'],
  '戌': ['戊', '辛', '丁'],
  '亥': ['壬', '甲']
}

// 五行
export const WU_XING = ['木', '火', '土', '金', '水']

// 十神关系（克我者为官鬼，我克者为妻财）
export const SHI_SHEN: Record<string, string> = {
  '比': '比肩', '劫': '劫财',
  '食': '食神', '伤': '伤官',
  '财': '偏财', '才': '正财',
  '官': '七杀', '杀': '正官',
  '印': '偏印', '枭': '正印'
}

// 获取天干索引
function getTianGanIndex(tg: string): number {
  return TIAN_GAN.indexOf(tg)
}

// 获取地支索引
function getDiZhiIndex(dz: string): number {
  return DI_ZHI.indexOf(dz)
}

// 公历转儒略日
function gregorianToJulianDay(year: number, month: number, day: number, hour: number = 0): number {
  if (month <= 2) {
    year -= 1
    month += 12
  }
  const A = Math.floor(year / 100)
  const B = 2 - A + Math.floor(A / 4)
  const JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + hour / 24 + B - 1524.5
  return JD
}

// 儒略日转公历
function julianDayToGregorian(jd: number): { year: number, month: number, day: number, hour: number } {
  const Z = Math.floor(jd + 0.5)
  const F = jd + 0.5 - Z
  let A = Z
  if (Z >= 2299161) {
    const alpha = Math.floor((Z - 1867216.25) / 36524.25)
    A = Z + 1 + alpha - Math.floor(alpha / 4)
  }
  const B = A + 1524
  const C = Math.floor((B - 122.1) / 365.25)
  const D = Math.floor(365.25 * C)
  const E = Math.floor((B - D) / 30.6001)
  const day = B - D - Math.floor(30.6001 * E) + F
  const month = E < 14 ? E - 1 : E - 13
  const year = month > 2 ? C - 4716 : C - 4715
  const hour = (day - Math.floor(day)) * 24
  return { year, month, day: Math.floor(day), hour }
}

// 计算节气（简化版，返回接近日期的节气）
function getSolarTerm(year: number, month: number, day: number): string | null {
  // 节气表（每月两个节气，约在固定日期前后）
  const solarTerms: Record<string, number[]> = {
    '小寒': [1, 5], '大寒': [1, 20],
    '立春': [2, 4], '雨水': [2, 19],
    '惊蛰': [3, 6], '春分': [3, 21],
    '清明': [4, 5], '谷雨': [4, 20],
    '立夏': [5, 6], '小满': [5, 21],
    '芒种': [6, 6], '夏至': [6, 21],
    '小暑': [7, 7], '大暑': [7, 23],
    '立秋': [8, 8], '处暑': [8, 23],
    '白露': [9, 8], '秋分': [9, 23],
    '寒露': [10, 8], '霜降': [10, 23],
    '立冬': [11, 7], '小雪': [11, 22],
    '大雪': [12, 7], '冬至': [12, 22]
  }
  
  const monthKey = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', 
                    '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑',
                    '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']
  
  const termDay = solarTerms[monthKey[(month - 1) * 2]]?.[1] || 0
  const nextTermDay = solarTerms[monthKey[(month - 1) * 2 + 1]]?.[1] || 0
  
  if (day >= termDay && day < nextTermDay) {
    return monthKey[(month - 1) * 2]
  } else if (day >= nextTermDay || day < termDay) {
    if (day >= nextTermDay) return monthKey[(month - 1) * 2 + 1]
    return null
  }
  return null
}

// 公历转干支历
export function gregorianToGanZhi(
  year: number, 
  month: number, 
  day: number, 
  hour: number = 12
): { yearGanZhi: string, monthGanZhi: string, dayGanZhi: string, hourGanZhi: string } {
  // 计算儒略日
  const jd = gregorianToJulianDay(year, month, day, hour)
  
  // 基准日期：1984年2月4日（甲子年立春）为2445705.5
  const baseJD = 2445705.5
  const daysDiff = Math.floor(jd - baseJD)
  
  // 年柱：1984年是甲子年
  let yearIndex = (daysDiff + 10) % 10
  if (yearIndex < 0) yearIndex += 10
  let yearGan = TIAN_GAN[yearIndex]
  
  let yearZhiIndex = (daysDiff + 6) % 12
  if (yearZhiIndex < 0) yearZhiIndex += 12
  let yearZhi = DI_ZHI[yearZhiIndex]
  
  // 月柱：起算立春
  const baseYear = 1984
  const baseMonth = 2
  const baseDay = 4
  
  let yearOffset = year - baseYear
  if (year < baseYear || (year === baseYear && (month < baseMonth || (month === baseMonth && day < baseDay)))) {
    yearOffset--
  }
  
  let monthIndex = (yearOffset * 12 + (month - 2 + 12) % 12 + 10) % 10
  let monthGan = TIAN_GAN[monthIndex]
  
  let monthZhiIndex = (month + 2) % 12
  if (monthZhiIndex === 0) monthZhiIndex = 12
  let monthZhi = DI_ZHI[monthZhiIndex - 1]
  
  // 日柱：1984年1月1日是甲子日
  const baseDayJD = 2445702.5
  const dayDiff = Math.floor(jd - baseDayJD + 0.5) % 60
  const dayIndex = dayDiff >= 0 ? dayDiff : dayDiff + 60
  
  let dayGanIndex = dayIndex % 10
  let dayGan = TIAN_GAN[dayGanIndex]
  
  let dayZhiIndex = dayIndex % 12
  let dayZhi = DI_ZHI[dayZhiIndex]
  
  // 时柱：五鼠遁（甲己日起甲子时）
  const dayGanZhiKey = dayGan + dayZhi
  const hourZhiIndex = Math.floor(hour / 2) % 12
  let hourZhi = DI_ZHI[hourZhiIndex]
  
  // 五鼠遁口诀：甲己还生甲，乙庚丙作初，丙辛从戊起，丁壬庚子居，戊癸何方发，壬子是真途
  let hourGanIndex = 0
  if (dayGanIndex === 0 || dayGanIndex === 5) { // 甲或己
    hourGanIndex = Math.floor(hour / 2) % 10
  } else if (dayGanIndex === 1 || dayGanIndex === 6) { // 乙或庚
    hourGanIndex = (2 + Math.floor(hour / 2)) % 10
  } else if (dayGanIndex === 2 || dayGanIndex === 7) { // 丙或辛
    hourGanIndex = (4 + Math.floor(hour / 2)) % 10
  } else if (dayGanIndex === 3 || dayGanIndex === 8) { // 丁或壬
    hourGanIndex = (6 + Math.floor(hour / 2)) % 10
  } else { // 戊或癸
    hourGanIndex = (8 + Math.floor(hour / 2)) % 10
  }
  let hourGan = TIAN_GAN[hourGanIndex]
  
  return {
    yearGanZhi: yearGan + yearZhi,
    monthGanZhi: monthGan + monthZhi,
    dayGanZhi: dayGan + dayZhi,
    hourGanZhi: hourGan + hourZhi
  }
}

// 计算十神
export function calculateShiShen(dayGan: string, otherGan: string): string {
  const dayIndex = getTianGanIndex(dayGan)
  const otherIndex = getTianGanIndex(otherGan)
  
  // 天干相生相克关系
  // 克我者为官鬼，我克者为妻财
  // 我生者为食伤，生我者为印绶
  // 同我者为比劫
  
  const relations: Record<number, string[]> = {
    // 甲乙（木）
    0: ['金', '金', '水', '水', '木', '木', '火', '火', '土', '土'], // 甲
    1: ['金', '金', '水', '水', '木', '木', '火', '火', '土', '土'], // 乙
    // 丙丁（火）
    2: ['水', '水', '木', '木', '火', '火', '土', '土', '金', '金'], // 丙
    3: ['水', '水', '木', '木', '火', '火', '土', '土', '金', '金'], // 丁
    // 戊己（土）
    4: ['火', '火', '土', '土', '金', '金', '水', '水', '木', '木'], // 戊
    5: ['火', '火', '土', '土', '金', '金', '水', '水', '木', '木'], // 己
    // 庚辛（金）
    6: ['土', '土', '金', '金', '水', '水', '木', '木', '火', '火'], // 庚
    7: ['土', '土', '金', '金', '水', '水', '木', '木', '火', '火'], // 辛
    // 壬癸（水）
    8: ['木', '木', '水', '水', '土', '土', '金', '金', '火', '火'], // 壬
    9: ['木', '木', '水', '水', '土', '土', '金', '金', '火', '火'], // 癸
  }
  
  const relation = relations[dayIndex][otherIndex]
  
  // 判断十神
  if (otherIndex === dayIndex) return '比' // 比肩
  if ((otherIndex - dayIndex + 10) % 10 === 5) return '劫' // 劫财
  
  const wuXingRelation: Record<string, string[]> = {
    '木': ['食', '伤'], // 我生者为食伤
    '火': ['食', '伤'],
    '土': ['食', '伤'],
    '金': ['食', '伤'],
    '水': ['食', '伤'],
  }
  
  const targetWuXing = TIAN_GAN_WU_XING[otherGan]
  const dayWuXing = TIAN_GAN_WU_XING[dayGan]
  
  // 克我者为官鬼
  if ((targetWuXing === '金' && dayWuXing === '木') ||
      (targetWuXing === '木' && dayWuXing === '土') ||
      (targetWuXing === '水' && dayWuXing === '火') ||
      (targetWuXing === '火' && dayWuXing === '金') ||
      (targetWuXing === '土' && dayWuXing === '水')) {
    return otherIndex % 2 === 0 ? '杀' : '官'
  }
  
  // 我克者为妻财
  if ((dayWuXing === '木' && targetWuXing === '土') ||
      (dayWuXing === '火' && targetWuXing === '金') ||
      (dayWuXing === '土' && targetWuXing === '水') ||
      (dayWuXing === '金' && targetWuXing === '木') ||
      (dayWuXing === '水' && targetWuXing === '火')) {
    return otherIndex % 2 === 0 ? '财' : '才'
  }
  
  // 我生者为食伤
  if ((dayWuXing === '木' && targetWuXing === '火') ||
      (dayWuXing === '火' && targetWuXing === '土') ||
      (dayWuXing === '土' && targetWuXing === '金') ||
      (dayWuXing === '金' && targetWuXing === '水') ||
      (dayWuXing === '水' && targetWuXing === '木')) {
    return otherIndex % 2 === 0 ? '食' : '伤'
  }
  
  // 生我者为印绶
  if ((targetWuXing === '水' && dayWuXing === '木') ||
      (targetWuXing === '木' && dayWuXing === '火') ||
      (targetWuXing === '火' && dayWuXing === '土') ||
      (targetWuXing === '土' && dayWuXing === '金') ||
      (targetWuXing === '金' && dayWuXing === '水')) {
    return otherIndex % 2 === 0 ? '枭' : '印'
  }
  
  return ''
}

// 计算五行数量
export function countWuXing(ganZhiData: {
  yearGanZhi: string
  monthGanZhi: string
  dayGanZhi: string
  hourGanZhi: string
}): Record<string, number> {
  const counts: Record<string, number> = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 }
  
  const gans = [
    ganZhiData.yearGanZhi[0],
    ganZhiData.monthGanZhi[0],
    ganZhiData.dayGanZhi[0],
    ganZhiData.hourGanZhi[0]
  ]
  
  const zhis = [
    ganZhiData.yearGanZhi[1],
    ganZhiData.monthGanZhi[1],
    ganZhiData.dayGanZhi[1],
    ganZhiData.hourGanZhi[1]
  ]
  
  gans.forEach(gan => {
    const wuXing = TIAN_GAN_WU_XING[gan]
    if (wuXing) counts[wuXing]++
  })
  
  zhis.forEach(zhi => {
    const wuXing = DI_ZHI_WU_XING[zhi]
    if (wuXing) counts[wuXing]++
    // 地支藏干也要计算
    const cangGans = DI_ZHI_CANG_GAN[zhi]
    if (cangGans) {
      cangGans.forEach(cg => {
        const cw = TIAN_GAN_WU_XING[cg]
        if (cw) counts[cw]++
      })
    }
  })
  
  return counts
}

// 完整的八字命盘
export interface BaZiResult {
  name: string
  gender: string
  birthDate: string
  birthTime: string
  birthPlace: string
  ganZhi: {
    year: string
    month: string
    day: string
    hour: string
  }
  wuXing: Record<string, number>
  shiShen: {
    year: string
    month: string
    day: string
    hour: string
  }
  naYin: string // 纳音五行
}

// 计算纳音五行
export function getNaYin(yearGanZhi: string): string {
  const naYinTable: Record<string, string> = {
    '甲子': '海中金', '乙丑': '海中金',
    '丙寅': '炉中火', '丁卯': '炉中火',
    '戊辰': '大林木', '己巳': '大林木',
    '庚午': '路旁土', '辛未': '路旁土',
    '壬申': '剑锋金', '癸酉': '剑锋金',
    '甲戌': '山头火', '乙亥': '山头火',
    '丙子': '涧下水', '丁丑': '涧下水',
    '戊寅': '城头土', '己卯': '城头土',
    '庚辰': '白蜡金', '辛巳': '白蜡金',
    '壬午': '杨柳木', '癸未': '杨柳木',
    '甲申': '井泉水', '乙酉': '井泉水',
    '丙戌': '屋上土', '丁亥': '屋上土',
    '戊子': '霹雳火', '己丑': '霹雳火',
    '庚寅': '松柏木', '辛卯': '松柏木',
    '壬辰': '长流水', '癸巳': '长流水',
    '甲午': '沙中金', '乙未': '沙中金',
    '丙申': '山下火', '丁酉': '山下火',
    '戊戌': '平地木', '己亥': '平地木',
    '庚子': '壁上土', '辛丑': '壁上土',
    '壬寅': '金箔金', '癸卯': '金箔金',
    '甲辰': '覆灯火', '乙巳': '覆灯火',
    '丙午': '天河水', '丁未': '天河水',
    '戊申': '大驿土', '己酉': '大驿土',
    '庚戌': '钗钏金', '辛亥': '钗钏金',
    '壬子': '桑柘木', '癸丑': '桑柘木',
    '甲寅': '大溪水', '乙卯': '大溪水',
    '丙辰': '沙中土', '丁巳': '沙中土',
    '戊午': '天上火', '己未': '天上火',
    '庚申': '石榴木', '辛酉': '石榴木',
    '壬戌': '大海水', '癸亥': '大海水'
  }
  
  return naYinTable[yearGanZhi] || ''
}

// 生成完整八字结果
export function generateBaZiResult(
  name: string,
  gender: string,
  birthDate: string,
  birthTime: string,
  birthPlace: string
): BaZiResult {
  // 解析日期时间
  const dateTime = new Date(birthDate + 'T' + birthTime)
  const year = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const hour = dateTime.getHours()
  
  // 计算干支
  const ganZhi = gregorianToGanZhi(year, month, day, hour)
  
  // 计算日干
  const dayGan = ganZhi.dayGanZhi[0]
  
  // 计算十神
  const shiShen = {
    year: calculateShiShen(dayGan, ganZhi.yearGanZhi[0]),
    month: calculateShiShen(dayGan, ganZhi.monthGanZhi[0]),
    day: '日主', // 日干本身
    hour: calculateShiShen(dayGan, ganZhi.hourGanZhi[0])
  }
  
  // 计算五行
  const wuXing = countWuXing(ganZhi)
  
  // 计算纳音
  const naYin = getNaYin(ganZhi.yearGanZhi)
  
  return {
    name,
    gender,
    birthDate,
    birthTime,
    birthPlace,
    ganZhi: {
      year: ganZhi.yearGanZhi,
      month: ganZhi.monthGanZhi,
      day: ganZhi.dayGanZhi,
      hour: ganZhi.hourGanZhi
    },
    wuXing,
    shiShen,
    naYin
  }
}

// 公历转农历（简化版）
export function gregorianToLunar(year: number, month: number, day: number): { year: number, month: number, day: number } {
  // 简化实现，实际项目中应该使用完整的农历转换库
  // 这里返回一个近似值
  const baseLunarYear = 1984
  const baseLunarDate = { year: 1984, month: 1, day: 15 } // 甲子年正月十五
  
  const daysDiff = Math.floor(
    gregorianToJulianDay(year, month, day, 12) - 
    gregorianToJulianDay(baseLunarDate.year, baseLunarDate.month, baseLunarDate.day, 12)
  )
  
  const lunarYear = baseLunarYear + Math.floor(daysDiff / 365)
  const remainingDays = daysDiff % 365
  const lunarMonth = Math.floor(remainingDays / 30) + 1
  const lunarDay = (remainingDays % 30) + 1
  
  return { year: lunarYear, month: lunarMonth, day: lunarDay }
}
