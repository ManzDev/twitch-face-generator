import "./FaceEyes.js";
import "./FaceNose.js";
import "./FaceMouth.js";
import "./FaceHair.js";
import "./FaceNeck.js";
import "./FaceBigBeard.js";
import "./FaceEars.js";

class FaceGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --hair-color: #000; /* #ee4261;  /* Dolce color */
        --skin-color: #f69779;
        --chin-shadow: 0 -20px 0 #0002 inset;
        --forehead-shadow: 0 15px 0 #0002 inset;
        --face-width: 190px;
        --face-height: 250px;
        --face-shape: 100px;
      }

      .container {
        /*
        filter:
          drop-shadow(0 5px 0 #191950)
          drop-shadow(5px 0 0 #191950);
        */
      }

      .face {
        background-color: var(--skin-color);
        box-shadow:
          var(--chin-shadow),
          var(--forehead-shadow);
        width: var(--face-width);
        height: var(--face-height);
        border-radius: var(--face-shape);
        position: relative;
      }

      face-hair {
      }

      face-eyes {
        display: flex;
        transform: translate(0, 60px);
        z-index: 5;
        position: relative;
      }

      face-nose {
        display: flex;
        transform: translate(0, 60px);
      }

      face-mouth {
        display: flex;
        transform: translate(0, 75px);
      }

      face-ears {
        display: flex;
        transform: translate(0, 100px);
      }

      face-big-beard {
        display: flex;
        transform: translate(0, 65px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${FaceGenerator.styles}</style>
    <div class="container">
      <face-hair></face-hair>
      <face-ears></face-ears>
      <div class="face">
        <face-eyes class="baggy"></face-eyes>
        <face-nose></face-nose>
        <face-big-beard></face-big-beard>
        <face-mouth></face-mouth>
      </div>
      <face-neck class="tattoo"></face-neck>
    </div>`;
  }
}

customElements.define("face-generator", FaceGenerator);
