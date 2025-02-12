export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  ukr: Ukr;
}

export interface Ukr {
  official: string;
  common: string;
}

export interface Currencies {
  UAH: Uah;
}

export interface Uah {
  name: string;
  symbol: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  ukr: string;
}

export type LanguageCode =
  | 'ara'
  | 'bre'
  | 'ces'
  | 'cym'
  | 'deu'
  | 'est'
  | 'fin'
  | 'fra'
  | 'hrv'
  | 'hun'
  | 'ita'
  | 'jpn'
  | 'kor'
  | 'nld'
  | 'per'
  | 'pol'
  | 'por'
  | 'rus'
  | 'slk'
  | 'spa'
  | 'srp'
  | 'swe'
  | 'tur'
  | 'urd'
  | 'zho';

export interface Translation {
  official: string;
  common: string;
}

export type Translations = Record<LanguageCode, Translation>;

export interface Demonyms {
  eng: Eng;
  fra: Fra2;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Fra2 {
  f: string;
  m: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  '2019': number;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}
