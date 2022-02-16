class FaceBigBeard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --beard-width: calc(var(--face-width) * 1.05);
        --beard-multiplier: 0.5;
        --beard-height: calc(var(--face-height) * var(--beard-multiplier));

        position: absolute;
        left: -2.5%;
      }

      .container {
        display: flex;
        justify-content: center;
      }

      :host(.none) .container {
        display: none;
      }

      .beard {
        width: var(--beard-width);
        height: var(--beard-height);
        background-color: var(--hair-color);
        background-image: linear-gradient(#fff3, #fff3);
        box-shadow: 0 -35px 0 #0004 inset;
        border-radius: 0 0 50px 50px;
        position: relative;
      }

      /* Sideburn */

      .beard::before,
      .beard::after {
        content: "";
        display: inline-block;
        width: 30px;
        height: 25px;
        border-radius: 25%;
        background: var(--hair-color);
        background-image: linear-gradient(#fff3, #fff3);
        position: absolute;
        clip-path: polygon(0 0, 100% 100%, 0 100%);
        top: -15px;
      }

      .beard::after {
        right: 0;
        transform: scaleX(-1);
      }
    `;
  }

  setRandom() {
    const BEARD_SIZE_OPTIONS = [0, 0.4, 0.6, 1, 1.5];
    const beardMultiplier = BEARD_SIZE_OPTIONS[Math.floor(Math.random() * BEARD_SIZE_OPTIONS.length)];
    this.style.setProperty("--beard-multiplier", beardMultiplier);

    const BEARD_COLOR_OPTIONS = [
      "#d7bdff",
      "#CD5C5C",
      "#000000",
      "#3d03a3",
      "#222222",
      "#333333",
      "#DC75CC",
      "#770000",
      "#c3b711",
      "#3d1e09"
    ];
    const beardColor = BEARD_COLOR_OPTIONS[Math.floor(Math.random() * BEARD_COLOR_OPTIONS.length)];
    if (beardColor) {
      this.style.setProperty("--hair-color", beardColor);
    }

    const n = Math.floor(Math.random() * 2);
    if (n === 1) {
      this.classList.add("none");
    }
  }

  connectedCallback() {
    this.render();
    this.setRandom();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceBigBeard.styles}</style>
    <div class="container">
      <div class="beard"></div>
    </div>`;
  }
}

customElements.define("face-big-beard", FaceBigBeard);
