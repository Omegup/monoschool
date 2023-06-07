
export class SignInPresenter {
  constructor(private handleError: (error: Error) => void) {
  }

  presentError(error: Error): void {
    this.handleError(error)
  }

}
