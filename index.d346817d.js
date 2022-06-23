const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}};b();class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --crystal-width: var(--height);
        --crystal-height: var(--height);
        --side-support: 10px;
        --side-support: calc(calc(var(--width) - calc(2 * var(--crystal-width))) / 4);

        display: flex;
        width: 100%;
        height: var(--crystal-height);
      }

      :host(:is(.sunglasses, .glasses)) .container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        transform: translate(0, -15px);
      }

      /* GLASSES CRYSTAL */

      :host(:is(.sunglasses, .glasses)) .crystal {
        width: var(--crystal-width);
        height: var(--crystal-height);
        background-image: linear-gradient(45deg, #fff4 30%, #fff8 30% 60%, #fff4 60% 70%, #fff8 70% 100%);
        border: 3px solid #000;
        border-radius: 50% 50%;
        position: relative;
        box-shadow: 1px 4px 0 #0002;
      }

      /* SUNGLASSES CRYSTAL */

      :host(.sunglasses) .crystal {
        background-image: linear-gradient(145deg, #204a62 30%, #012438 31% 60%, #5188c8 61% 70%, #012438 71% 100%);
        border-radius: 0 0 50% 50% / 0 0 75% 75%;
        transform: translate(0, 50%);
        height: 65%;
      }

      /* height sunglasses handle */

      :host(.sunglasses) .crystal::before,
      :host(.sunglasses) .crystal::after {
        transform: translate(0, -300%);
      }

      /* glasses handle (common) */

      :host(:is(.glasses, .sunglasses)) .crystal::before,
      :host(:is(.glasses, .sunglasses)) .crystal::after {
        content: "";
        background: black;
        display: inline-block;
        border: 3px solid #000;
        position: absolute;
        top: 50%;
        width: var(--side-support);
      }

      :host(:is(.glasses, .sunglasses)) .crystal::before {
        left: calc(-1.25 * var(--side-support));
      }

      :host(:is(.glasses, .sunglasses)) .crystal::after {
        right: calc(-1.25 * var(--side-support));
      }
    `}setRandom(){const t=["","glasses","sunglasses"],s=t[Math.floor(Math.random()*t.length)];s&&this.classList.add(s)}connectedCallback(){this.render(),this.setRandom()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      <div class="left crystal"></div>
      <div class="right crystal"></div>
    </div>`}}customElements.define("face-glasses",i);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${n.styles}</style>
    <div class="container">
      <div class="eye patch"></div>
      <div class="eye"></div>
      <face-glasses></face-glasses>
    </div>`}}customElements.define("face-eyes",n);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${d.styles}</style>
    <div class="container">
      <div class="left hole"></div>
      <div class="right hole"></div>
    </div>`}}customElements.define("face-nose",d);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}setRandom(){Math.floor(Math.random()*5)===0&&this.classList.add("goldtooth");const s=["","woteeth","wobottomteeth"],o=s[Math.floor(Math.random()*s.length)];o&&this.classList.add(o);const e=["","surprise","sad","scared"],a=e[Math.floor(Math.random()*e.length)];a&&this.classList.add(a)}connectedCallback(){this.render(),this.setRandom()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="mouth">
        <div class="top teeth"></div>
        <div class="tongue"></div>
        <div class="bottom teeth"></div>
      </div>
    </div>`}}customElements.define("face-mouth",c);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}setRandom(){const t=["","military","punky","flattop"],s=t[Math.floor(Math.random()*t.length)];s&&this.classList.add(s)}connectedCallback(){this.render(),this.setRandom()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">

    </div>`}}customElements.define("face-hair",l);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">

    </div>`}}customElements.define("face-front-hair",h);class f extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}setRandom(){Math.floor(Math.random()*5)===0&&this.classList.add("tattoo")}connectedCallback(){this.render(),this.setRandom()}render(){this.shadowRoot.innerHTML=`
    <style>${f.styles}</style>
    <div class="container">
      <div class="neck"></div>
      <div class="body"></div>
    </div>`}}customElements.define("face-neck",f);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

      :host(.none) .container {
        display: none;
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

      /* Sideburn */

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
    `}setRandom(){const t=[0,.4,.6,1,1.5],s=t[Math.floor(Math.random()*t.length)];this.style.setProperty("--beard-multiplier",s);const o=["#d7bdff","#CD5C5C","#000000","#3d03a3","#222222","#333333","#DC75CC","#770000","#c3b711","#3d1e09"],e=o[Math.floor(Math.random()*o.length)];e&&this.style.setProperty("--hair-color",e),Math.floor(Math.random()*2)===1&&this.classList.add("none")}connectedCallback(){this.render(),this.setRandom()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">
      <div class="beard"></div>
    </div>`}}customElements.define("face-big-beard",p);class u extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${u.styles}</style>
    <div class="container">
      <div class="left ear"></div>
      <div class="right ear ring"></div>
    </div>`}}customElements.define("face-ears",u);class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

      face-front-hair {
        display: flex;
        transform: translate(0, -260px);
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
    <style>${g.styles}</style>
    <div class="container">
      <face-hair></face-hair>
      <face-ears></face-ears>
      <div class="face">
        <face-eyes class="baggy"></face-eyes>
        <face-nose></face-nose>
        <face-big-beard></face-big-beard>
        <face-mouth></face-mouth>
      </div>
      <face-front-hair></face-front-hair>
      <face-neck></face-neck>
    </div>`}}customElements.define("face-generator",g);const y=document.querySelector(".container"),v=document.querySelector("button");v.addEventListener("click",()=>{document.querySelector("face-generator").remove();const t=document.createElement("face-generator");y.insertAdjacentElement("afterbegin",t)});
