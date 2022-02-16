class FaceMouth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --mouth-width: 80px;
        --mouth-height: 40px;
        --mouth-angle: 50px;
      }

      .container {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .mouth {
        width: var(--mouth-width);
        height: var(--mouth-height);
        background-color: #ae1237;
        background-image: radial-gradient(circle, #4b0116 55%, transparent 60%);
        border-radius: 0 0 var(--mouth-angle) var(--mouth-angle);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        transform: scaleY(1);
        transition: transform 0.5s;
      }

      :host(.surprise) .mouth {
        width: var(--mouth-height);
        height: var(--mouth-height);
        border-radius: 50%;
      }

      :host(.scared) .mouth {
        width: var(--mouth-height);
        height: var(--mouth-height);
        border-radius: 5%;
      }

      :host(.sad) .mouth {
        border-radius: var(--mouth-angle) var(--mouth-angle) 0 0;
      }

      /* Teeth */

      .teeth {
        height: 15px;
        background-color: #fff;
        background-image: linear-gradient(to bottom, #ddd 25%, #fff 25%);
        z-index: 5;
      }

      .top.teeth {
        width: calc(100% - 10px);
        border-radius: 0 0 5px 5px;
      }

      .bottom.teeth {
        width: 100%;
        border-radius: 0;
        background-image: linear-gradient(to top, #ddd 25%, #fff 25%);
      }

      /* Gold Tooth */

      :host(.goldtooth) .top.teeth::after {
        content: "";
        display: inline-block;
        background: linear-gradient(to bottom, #e2ac17 25%, #fbbe15 25%);
        width: 20px;
        height: 100%;
        transform: translateX(200%);
      }

      /* Without teeth */

      :host(.woteeth) .teeth {
        display: none;
      }

      :host(.wobottomteeth) .top.teeth {
        display: none;
      }

      /* Tongue */

      .tongue {
        width: 35px;
        height: 22px;
        border-radius: 20px 20px 0 0;
        background: #eb2760;
        position: absolute;
        bottom: -3px;
      }
    `;
  }

  setRandom() {
    const n = Math.floor(Math.random() * 5);
    if (n === 0) {
      this.classList.add("goldtooth");
    }

    const TEETH_OPTIONS = ["", "woteeth", "wobottomteeth"];
    const teethOption = TEETH_OPTIONS[Math.floor(Math.random() * TEETH_OPTIONS.length)];
    if (teethOption) {
      this.classList.add(teethOption);
    }

    const MOUTH_OPTIONS = ["", "surprise", "sad", "scared"];
    const mouthOption = MOUTH_OPTIONS[Math.floor(Math.random() * MOUTH_OPTIONS.length)];
    if (mouthOption) {
      this.classList.add(mouthOption);
    }
  }

  connectedCallback() {
    this.render();
    this.setRandom();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceMouth.styles}</style>
    <div class="container">
      <div class="mouth">
        <div class="top teeth"></div>
        <div class="tongue"></div>
        <div class="bottom teeth"></div>
      </div>
    </div>`;
  }
}

customElements.define("face-mouth", FaceMouth);
