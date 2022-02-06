const g=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};g();class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --crystal-width: var(--height);
        --crystal-height: var(--height);
        --side-support: 10px;
        --side-support: calc(calc(var(--width) - calc(2 * var(--crystal-width))) / 4);

        display: flex;
        width: 100%;
        height: var(--crystal-height);
      }

      .container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        transform: translate(0, -15px);
      }

      .crystal {
        width: var(--crystal-width);
        height: var(--crystal-height);
        background-image: linear-gradient(45deg, #fff4 30%, #fff8 30% 60%, #fff4 60% 70%, #fff8 70% 100%);
        border: 3px solid #000;
        border-radius: 50% 50%;
        position: relative;
        box-shadow: 1px 4px 0 #0002;
      }

      :host(.sunglasses) .crystal {
        background-image: linear-gradient(145deg, #204a62 30%, #012438 31% 60%, #5188c8 61% 70%, #012438 71% 100%);
        border-radius: 0 0 50% 50% / 0 0 75% 75%;
        transform: translate(0, 50%);
        height: 65%;
      }

      :host(.sunglasses) .crystal::before,
      :host(.sunglasses) .crystal::after {
        transform: translate(0, -300%);
      }

      .crystal::before,
      .crystal::after {
        content: "";
        display: inline-block;
        border: 3px solid #000;
        position: absolute;
        top: 50%;
        width: var(--side-support);
      }

      .crystal::before {
        left: calc(-1.25 * var(--side-support));
      }

      .crystal::after {
        right: calc(-1.25 * var(--side-support));
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      <div class="left crystal"></div>
      <div class="right crystal"></div>
    </div>`}}customElements.define("face-glasses",s);class o extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 190px;
        --height: 75px;
        --eye-width: 20px;
        --eye-height: 40px;
        --pupil-color: #040202;
        --pupil-border: 25px;

        display: flex;
        justify-content: center;
        width: var(--width);
        height: var(--height);
      }

      .container {
        display: flex;
        width: 90%;
        justify-content: space-around;
        padding: 15px 0;
      }

      /* eyebrow */
      .eye::before {
        content: "";
        display: inline-block;
        width: calc(var(--eye-width) * 2);
        height: calc(var(--eye-width) / 1.25);
        background-color: var(--hair-color);
        background-image: radial-gradient(ellipse 80% 50% at 50% 30%, #fff4 15%, #0004 30%);
        box-shadow:
          0 -5px 2px #0004 inset,
          0 5px 0 #0002;
        border-radius: 25px;
        transform: translate(-25%, -125%);
      }

      .eye {
        width: var(--eye-width);
        height: var(--eye-height);
        background-color: var(--pupil-color);
        border-radius: var(--pupil-border);
      }

      .eye.patch::after {
        content: "";
        display: inline-block;
        background: #000;
        width: 75px;
        height: 50px;
        position: absolute;
        transform: translate(-20px, -20px) rotate(15deg);
        display: none;
        /* Pendiente */
      }

      :host(.baggy) .eye {
        box-shadow: 0 8px 0 #0003;
      }

      face-glasses {
        position: absolute;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="container">
      <div class="eye patch"></div>
      <div class="eye"></div>
      <face-glasses class="sunglasses"></face-glasses>
    </div>`}}customElements.define("face-eyes",o);class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      <div class="left hole"></div>
      <div class="right hole"></div>
    </div>`}}customElements.define("face-nose",i);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="mouth">
        <div class="top teeth gold"></div>
        <div class="tongue"></div>
        <div class="bottom teeth"></div>
      </div>
    </div>`}}customElements.define("face-mouth",n);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }

      .container {
        width: var(--face-width);
        height: var(--face-height);
        transform: translate(0, -50%);
        background: var(--hair-color);
        position: absolute;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">

    </div>`}}customElements.define("face-hair",d);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --neck-width: calc(var(--face-width) * 0.5);
      }

      .container {
        display: grid;
        justify-items: center;
        transform: translateY(-25%);
        position: relative;
        z-index: -1;
      }

      .neck {
        width: var(--neck-width);
        height: 100px;
        background: var(--skin-color);
      }

      :host(.tattoo) .neck::after {
        content: "I \u2764 IE";
        letter-spacing: -2px;
        font-weight: bold;
        font-size: 1.1rem;
        display: inline-block;
        color: #0009;
        transform: translate(50px, 20px) rotate(-20deg);
      }

      .neck::before {
        content: "";
        display: inline-block;
        background: #0004;
        width: 100%;
        height: 50%;
        transform: translate(0, 40%);
        border-radius: 0 0 50% 50% / 0 0 40% 40%;
      }

      .body {
        background: #a22;
        width: calc(1.5 * var(--neck-width));
        height: 40px;
        border-radius: 5px 5px 0 0;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="neck"></div>
      <div class="body"></div>
    </div>`}}customElements.define("face-neck",c);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="beard"></div>
    </div>`}}customElements.define("face-big-beard",l);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">
      <div class="left ear"></div>
      <div class="right ear ring"></div>
    </div>`}}customElements.define("face-ears",h);class f extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${f.styles}</style>
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
    </div>`}}customElements.define("face-generator",f);
