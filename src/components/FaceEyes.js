import "./FaceGlasses.js";

class FaceEyes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 190px;
        --height: 75px;
        --eye-width: 20px;
        --eye-height: 40px;
        --pupil-color: #040202;
        --pupil-border: 25px;

        display: flex;
        justify-content: center;
        width: var(--width);
        height: var(--height);
      }

      .container {
        display: flex;
        width: 90%;
        justify-content: space-around;
        padding: 15px 0;
      }

      /* eyebrow */
      .eye::before {
        content: "";
        display: inline-block;
        width: calc(var(--eye-width) * 2);
        height: calc(var(--eye-width) / 1.25);
        background-color: var(--hair-color);
        background-image: radial-gradient(ellipse 80% 50% at 50% 30%, #fff4 15%, #0004 30%);
        box-shadow:
          0 -5px 2px #0004 inset,
          0 5px 0 #0002;
        border-radius: 25px;
        transform: translate(-25%, -125%);
      }

      .eye {
        width: var(--eye-width);
        height: var(--eye-height);
        background-color: var(--pupil-color);
        border-radius: var(--pupil-border);
      }

      .eye.patch::after {
        content: "";
        display: inline-block;
        background: #000;
        width: 75px;
        height: 50px;
        position: absolute;
        transform: translate(-20px, -20px) rotate(15deg);
        display: none;
        /* Pendiente */
      }

      :host(.baggy) .eye {
        box-shadow: 0 8px 0 #0003;
      }

      face-glasses {
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceEyes.styles}</style>
    <div class="container">
      <div class="eye patch"></div>
      <div class="eye"></div>
      <face-glasses></face-glasses>
    </div>`;
  }
}

customElements.define("face-eyes", FaceEyes);
