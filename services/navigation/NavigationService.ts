interface History {
  push(path: string): void;
}

class NavigationService {
  constructor(private history: History) {}

  navigateTo(path: string) {
    this.history.push(path);
  }
}
