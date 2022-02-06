class FaceEars extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        position: relative;
      }

      .ear {
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--skin-color);
        background-image: radial-gradient(circle, #a008 30%, #a003 35%);
        position: absolute;
        z-index: -1;
      }

      .left {
        top: 42%;
        left: -13%;
      }

      .right {
        top: 42%;
        right: -13%;
      }

      .ear.ring::after {
        content: "";
        display: inline-block;
        background: gold;
        width: 5px;
        height: 20px;
        border-radius: 3px;
      }

      .ear.ring.right::after {
        transform: translate(35px, 40px);
      }

      .ear.ring.left::after {
        transform: translate(10px, 40px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceEars.styles}</style>
    <div class="container">
      <div class="left ear"></div>
      <div class="right ear ring"></div>
    </div>`;
  }
}

customElements.define("face-ears", FaceEars);
