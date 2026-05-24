export type Company = {
  name: string;
  area: string;
  address: string;
  managementStatus: string;
  tags: string[];
};

export const companies: Company[] = [
  {
    name: '東信興業株式会社',
    area: '田無エリア',
    address: '東京都西東京市田無町3-1-16 矢ヶ崎ビル',
    managementStatus: '管理対応あり（詳細確認中）',
    tags: ['賃貸管理', '田無駅', '地域密着'],
  },
  {
    name: '株式会社塩月産業',
    area: '保谷エリア',
    address: '東京都西東京市東町3-11-27',
    managementStatus: '管理対応あり（巡回・入居対応）',
    tags: ['管理物件あり', '保谷駅', '地場企業'],
  },
  {
    name: 'ハウステーションプロパティマネジメント 田無店',
    area: '田無エリア',
    address: '東京都西東京市田無町4-2-11 Aビル1F',
    managementStatus: '管理対応あり（PM業務）',
    tags: ['プロパティマネジメント', '田無駅', '駅近'],
  },
  {
    name: 'ピタットハウス田無店 株式会社S.T.C',
    area: '田無エリア',
    address: '東京都西東京市南町5-5-13 田無丸八ビル',
    managementStatus: '管理対応あり（賃貸仲介・管理）',
    tags: ['ピタットハウス', '田無駅', 'フランチャイズ'],
  },
  {
    name: '菊池不動産株式会社',
    area: 'ひばりヶ丘エリア',
    address: '東京都西東京市ひばりが丘北3-3-16',
    managementStatus: '管理対応あり（詳細確認中）',
    tags: ['賃貸管理', 'ひばりヶ丘駅', '老舗'],
  },
];
