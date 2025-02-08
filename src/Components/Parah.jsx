const { width, height } = window.screen;

export const Parah = ({ title, title2, subtitle }) => {
  return `
    <div class="parah"
    style="top:${(window.screen.height / 100) * 30}px">
    <div class='inside_parah'>
    <h4
    style="font-size:${(window.screen.width / 100) * 2}px">
   ${title} </h4>
    <h4
    style="font-size:${(window.screen.width / 100) * 2}px ">
   ${title2}</h4>
    <h6 style="font-weight:200";>
    ${subtitle}
    </h6>
    <div class="button-container"
    style="gap:${(window.screen.width / 100) * 1.5}px;
    margin-Top:${(window.screen.height / 100) * 2.5}px
    "
    >
    <button 
    style="background-color: ${"#F37020"}; width:${
    (window.screen.width / 100) * 10
  }px;
    border-radius:${(window.screen.width / 100) * 15}px; padding:${
    (width / 100) * 0.5
  }px;";
  
    >
    <a>
    Contact
    </a>
    </button>
    <button 
    
    style="background-color: ${"#0254AE"}; width:${
    (window.screen.width / 100) * 10
  }px;  border-radius:${(window.screen.width / 100) * 2}px";
   padding:${(width / 100) * 0.5}px;
  ">
   <a  herf="section_3">
    Know More
    </a>
  </button>
    </div>
    </div>
    
    </div>
    `;
};
