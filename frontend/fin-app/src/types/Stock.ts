
export type Stock = {
  company_name: string,
  ticker: number,
  sector: Sector,
  address?: string,
  employee?: number,
  capital?: number,
}

export type StockPriceData = {
  'datetime': string[],
  'stock_price': number[]
}

export type Sector = `水産・農林業` |
  `卸売業` |
  `建設業` |
  `非鉄金属` |
  `鉱業` |
  `機械` |
  `サービス業` |
  `金属製品` |
  `情報・通信` |
  `食料品` |
  `医薬品` |
  `不動産業` |
  `陸運業` |
  `その他金融業` |
  `小売業` |
  `その他製品` |
  `REIT銘柄一覧` |
  `繊維製品` |
  `電気機器` |
  `ガラス・土石製品` |
  `証券業` |
  `輸送用機器` |
  `石油・石炭製品` |
  `化学` |
  `パルプ・紙` |
  `精密機器` |
  `ゴム製品` |
  `鉄鋼` |
  `銀行業` |
  `保険業` |
  `倉庫・運輸関連業` |
  `海運業` |
  `空運業` |
  `電気・ガス業`;
