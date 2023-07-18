import {
  ITranslationService,
  Translation,
} from '@omegup-school/translate-service-port';

export class TranslationService implements ITranslationService {
  constructor(private translation: Translation) {}

  translateTo(path: string) {
    return this.translation.translate(path);
  }
  changeLanguage(path: string) {
    return this.translation.changeLanguage(path);
  }
  currentLanguage = this.translation.currentLanguage;
}
