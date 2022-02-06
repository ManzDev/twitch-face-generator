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

      .sad.mouth {
        border-radius: var(--mouth-angle) var(--mouth-angle) 0 0;
      }

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

      .teeth.gold::after {
        content: "";
        display: inline-block;
        background: linear-gradient(to bottom, #e2ac17 25%, #fbbe15 25%);
        width: 20px;
        height: 100%;
        transform: translateX(200%);
      }

      .teeth.bottom.gold::after {
        background: linear-gradient(to top, #e2ac17 25%, #fbbe15 25%);
      }

      .tongue {
        width: 35px;
        height: 22px;
        border-radius: 20px 20px 0 0;
        background: #eb2760;
        position: absolute;
        bottom: 0;
      }

      .hide {
        opacity: 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceMouth.styles}</style>
    <div class="container">
      <div class="mouth">
        <div class="top teeth gold"></div>
        <div class="tongue"></div>
        <div class="bottom teeth"></div>
      </div>
    </div>`;
  }
}

customElements.define("face-mouth", FaceMouth);
