export interface Translation {
  translate: (path: string) => string;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}
export interface ITranslationService {
  translateTo: (term: string) => string;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}
