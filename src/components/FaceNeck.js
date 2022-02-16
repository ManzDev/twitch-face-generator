class FaceNeck extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --neck-width: calc(var(--face-width) * 0.5);
      }

      .container {
        display: grid;
        justify-items: center;
        transform: translateY(-25%);
        position: relative;
        z-index: -1;
      }

      .neck {
        width: var(--neck-width);
        height: 100px;
        background: var(--skin-color);
      }

      :host(.tattoo) .neck::after {
        content: "I ❤ IE";
        letter-spacing: -2px;
        font-weight: bold;
        font-size: 1.1rem;
        display: inline-block;
        color: #0009;
        transform: translate(50px, 20px) rotate(-20deg);
      }

      .neck::before {
        content: "";
        display: inline-block;
        background: #0004;
        width: 100%;
        height: 50%;
        transform: translate(0, 40%);
        border-radius: 0 0 50% 50% / 0 0 40% 40%;
      }

      .body {
        background: #a22;
        width: calc(1.5 * var(--neck-width));
        height: 40px;
        border-radius: 5px 5px 0 0;
      }
    `;
  }

  setRandom() {
    const randomTattoo = Math.floor(Math.random() * 5);
    if (randomTattoo === 0) {
      this.classList.add("tattoo");
    }
  }

  connectedCallback() {
    this.render();
    this.setRandom();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceNeck.styles}</style>
    <div class="container">
      <div class="neck"></div>
      <div class="body"></div>
    </div>`;
  }
}

customElements.define("face-neck", FaceNeck);
