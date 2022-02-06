class FaceNose extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --nose-width: 35px;
        --nose-hole-size: 10px;
        --nose-color: #0004;

        display: flex;
        justify-content: center;
      }

      .container {
        display: flex;
        justify-content: space-between;
        width: var(--nose-width);
      }

      .hole {
        width: var(--nose-hole-size);
        height: var(--nose-hole-size);
        background-color: var(--nose-color);
        border-radius: 50%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceNose.styles}</style>
    <div class="container">
      <div class="left hole"></div>
      <div class="right hole"></div>
    </div>`;
  }
}

customElements.define("face-nose", FaceNose);
