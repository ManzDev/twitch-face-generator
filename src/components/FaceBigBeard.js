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

      .beard {
        width: var(--beard-width);
        height: var(--beard-height);
        background-color: var(--hair-color);
        background-image: linear-gradient(#fff3, #fff3);
        box-shadow: 0 -35px 0 #0004 inset;
        border-radius: 0 0 50px 50px;
        position: relative;
      }

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

  connectedCallback() {
    this.render();
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
