class FaceFrontHair extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host .container {
        display: none;
      }

      :host(.bang) .container {
        display: block;
        width: calc(var(--face-width) / 2);
        height: calc(var(--face-height) / 5);
        border-radius: 50% 0 50% 0 / 75% 0 75% 0;
      }

      .container {
        width: var(--face-width);
        height: var(--face-height);
        background: var(--hair-color);
        position: absolute;
      }
    `;
  }

  connectedCallback() {
    this.render();
    // this.classList.add("bang");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceFrontHair.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("face-front-hair", FaceFrontHair);
