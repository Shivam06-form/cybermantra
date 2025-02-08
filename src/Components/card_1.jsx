const { width, height } = window.screen;

export const card_1 = ({ title, sub, img, customStyles }) => {
  return `
      <div class="section_4_inside" 
      style="margin-Top:${(height / 100) * 10}px;
      ${customStyles}
      "
      >
        <img
          src=${img}
          style="width: ${(width / 100) * 25}px; height: ${
    (height / 100) * 45
  }px"
        />
        <div>
          <h4 style="color: #0154B0">${title} </h4>
          <div
            style="
              display: flex;
              flex-direction: column;
              width: 500px;
              gap: ${(height / 100) * 0.5}px;
              margin-Top:${(height / 100) * 2}px
            "
          >
          ${sub.map((s) => {
            return `<h5 style="color: #777777; font-size: large;">${s}</h5>`;
          })}
          </div>
        </div>
      </div>
    `;
};
