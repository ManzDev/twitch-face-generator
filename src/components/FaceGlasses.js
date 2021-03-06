class FaceGlasses extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --crystal-width: var(--height);
        --crystal-height: var(--height);
        --side-support: 10px;
        --side-support: calc(calc(var(--width) - calc(2 * var(--crystal-width))) / 4);

        display: flex;
        width: 100%;
        height: var(--crystal-height);
      }

      :host(:is(.sunglasses, .glasses)) .container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        transform: translate(0, -15px);
      }

      /* GLASSES CRYSTAL */

      :host(:is(.sunglasses, .glasses)) .crystal {
        width: var(--crystal-width);
        height: var(--crystal-height);
        background-image: linear-gradient(45deg, #fff4 30%, #fff8 30% 60%, #fff4 60% 70%, #fff8 70% 100%);
        border: 3px solid #000;
        border-radius: 50% 50%;
        position: relative;
        box-shadow: 1px 4px 0 #0002;
      }

      /* SUNGLASSES CRYSTAL */

      :host(.sunglasses) .crystal {
        background-image: linear-gradient(145deg, #204a62 30%, #012438 31% 60%, #5188c8 61% 70%, #012438 71% 100%);
        border-radius: 0 0 50% 50% / 0 0 75% 75%;
        transform: translate(0, 50%);
        height: 65%;
      }

      /* height sunglasses handle */

      :host(.sunglasses) .crystal::before,
      :host(.sunglasses) .crystal::after {
        transform: translate(0, -300%);
      }

      /* glasses handle (common) */

      :host(:is(.glasses, .sunglasses)) .crystal::before,
      :host(:is(.glasses, .sunglasses)) .crystal::after {
        content: "";
        background: black;
        display: inline-block;
        border: 3px solid #000;
        position: absolute;
        top: 50%;
        width: var(--side-support);
      }

      :host(:is(.glasses, .sunglasses)) .crystal::before {
        left: calc(-1.25 * var(--side-support));
      }

      :host(:is(.glasses, .sunglasses)) .crystal::after {
        right: calc(-1.25 * var(--side-support));
      }
    `;
  }

  setRandom() {
    const OPTIONS = ["", "glasses", "sunglasses"];
    const option = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    if (option) {
      this.classList.add(option);
    }
  }

  connectedCallback() {
    this.render();
    this.setRandom();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceGlasses.styles}</style>
    <div class="container">
      <div class="left crystal"></div>
      <div class="right crystal"></div>
    </div>`;
  }
}

customElements.define("face-glasses", FaceGlasses);
