class FaceHair extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      /* Default */

      :host(.flattop) .container {
        background: var(--hair-color);
        transform: translate(0, -50%);
      }

      /* Punky */

      :host(.punky) {
        --hair-color: linear-gradient(#0a0, #030);

        display: flex;
        justify-content: center;
        transform: translate(0, -50%);
      }

      :host(.punky) .container {
        background: var(--hair-color);
        width: calc(var(--face-width) / 5);
        transform: translate(0, -50%);
      }

      /* Military */

      :host(.military) .container {
        height: calc(var(--face-height) * 1.10);
        background: var(--hair-color);
        transform: translateY(-15%);
        border-radius: 50% 50% 0 0 / 25% 25% 0 0;
        overflow: hidden;
      }

      :host(.military.goldbang) .container::after {
        content: "";
        background: #770;
        display: block;
        position: absolute;
        width: 10px;
        height: 150px;
        transform: translate(375%, 0%);
      }

      /* Default */

      .container {
        width: var(--face-width);
        height: var(--face-height);
        position: absolute;
      }
    `;
  }

  setRandom() {
    const OPTIONS = ["", "military", "punky", "flattop"];
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
    <style>${FaceHair.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("face-hair", FaceHair);
