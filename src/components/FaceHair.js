class FaceHair extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .container {
        width: var(--face-width);
        height: var(--face-height);
        transform: translate(0, -50%);
        background: var(--hair-color);
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceHair.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("face-hair", FaceHair);
