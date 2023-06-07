interface History {
  push(path: string): void;
}

export class NavigationService {
  constructor(private history: History) {}

  navigateTo(path: string) {
    this.history.push(path);
  }
}
