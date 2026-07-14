class App {
  constructor() {
    this.serviceName = "lcoalhost";

    document
      .querySelector("button")
      .addEventListener("click", this.getservername.bind(this));
  }

  getservername() {
    console.log(this.serviceName);
  }
}

const app = new App();

// app.getservername();
