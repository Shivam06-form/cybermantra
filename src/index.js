const { card_1 } = require("./Components/card_1");
const { Parah } = require("./Components/Parah");

const home = document.querySelector(".home");
const headerData = document.querySelector(".header_data");
const HeaderBody = document.querySelector(".header");

const { width, height } = window.screen;

const HeaderData = [
  { id: 1, name: "Expertise" },
  { id: 2, name: "Partner" },
  { id: 3, name: "Services" },
  { id: 4, name: "Consultancy" },
  { id: 5, name: "Courses" },
];

const Header = () => {
  const headerLogo = `<img src=${require("../src/img/home_1.png")}  class='header_img'
  style="height:${(window.screen.height / 100) * 90}px"}
  />`;

  const headerList = `<div class="list"
  style='width:${(window.screen.width / 100) * 45}px;'
  >
  ${HeaderData.map((data) => {
    return `<h5>${data.name}</h5>`;
  })}
 </div>`;

  HeaderBody.insertAdjacentHTML("afterbegin", headerLogo);
  headerData.insertAdjacentHTML("beforeend", headerList);
};

Header();

const paraGraph = () => {
  const data = [
    {
      id: 1,
      title: "CyberMantra Technologies: ",
      title2: "Your Trusted Cybersecurity Partner",
      subtitle: `In an era where digital threats are constantly evolving, CyberMantra Technologies Private Limited stands as a
beacon of security and trust. We specialize in delivering comprehensive cybersecurity services, including audits,
vulnerability assessments, penetration testing, consultancy, and training programs. Our mission is to safeguard
businesses and individuals from cyber threats while empowering them with the knowledge and tools to stay
secure.`,
    },
    {
      id: 2,
      title: "VAPT Services",
      title2: "Vulnerability Assessment and Penetration Testing (VAPT)",
      subtitle: `Our VAPT services are designed to identify vulnerabilities in your digital assets and simulate real-world attacks
to test your defences. From web applications to mobile apps and executables, we ensure your systems are secure.`,
    },
    {
      id: 3,
      title: "Strategic Cybersecurity Solutions for Your Business",
      subtitle: `CyberMantra Technologies provides expert consultancy services to help organizations design and implement
robust cybersecurity strategies. We guide businesses through every step of securing their digital landscape.`,
    },
    {
      id: 4,
      title: "Computer and Cybersecurity Training Courses ",
      title2: "Learn, Secure, Excel",
      subtitle: `At CyberMantra Technologies, we offer specialized training programs to equip individuals and teams with the
knowledge and skills to navigate the complex world of cybersecurity. From foundational IT skills to advanced
cybersecurity techniques, our courses are designed for all levels.`,
    },
  ];

  let currentIndex = 0;
  const container = document.createElement("div");
  container.id = "para-container";
  container.classList.add("fade-in");
  document.body.prepend(container);

  const updateParagraph = () => {
    container.classList.remove("fade-in");
    container.classList.add("fade-out");

    setTimeout(() => {
      const content = Parah({
        title: data[currentIndex].title,
        title2: data[currentIndex].title2 || "",
        subtitle: data[currentIndex].subtitle,
      });

      container.innerHTML = content;
      container.classList.remove("fade-out");
      container.classList.add("fade-in");

      currentIndex = (currentIndex + 1) % data.length;
    }, 500); // Wait for fade-out before changing content
  };

  updateParagraph();
  setInterval(updateParagraph, 10000);
};

paraGraph();

const columnTwo = () => {
  const html = `
  <div class="section_1" style="">
  <img src=${require("../src/img/f2.png")}  style="width: ${
    (window.screen.height / 100) * 60
  }px; height: ${(window.screen.height / 100) * 30}px" />
  <div>
  <h4 style="color: #0154b0; width:${(window.screen.width / 100) * 40}px;
  ">
  Cybersecurity Audits Comprehensive Cybersecurity Audits for Enhanced
  Protection
  </h4>
  <h6 style="color: black;  width:${(window.screen.width / 100) * 35}px">
  At CyberMantra Technologies, we provide detailed cybersecurity
  audits to help organizations identify vulnerabilities and strengthen
  their security posture. Our audits cover all critical areas of your
  IT infrastructure to ensure compliance and reduce risks.
  </h6>
          <button 
          style="background-color: ${"#F37020"}; width:${
    (window.screen.width / 100) * 10
  }px;
  border-radius:${(window.screen.width / 100) * 2}px; padding:${
    (width / 100) * 0.5
  }px;"
  >Know More</button>
  </div>
  </div>
  `;
  home.insertAdjacentHTML("beforeend", html);
};

columnTwo();

const columnThree = () => {
  const data = [
    {
      id: 1,
      name: "Key Areas We Cover",
      sub: `Comprehensive analysis of software, web, and mobile applications to identify and
mitigate vulnerabilities.`,
      img: require("../src/img/key.png"),
    },
    {
      id: 2,
      name: "Our Audit Process",
      sub: `Assist in deploying recommended changes to strengthen your defences.`,
      img: require("../src/img/Group.png"),
    },
    {
      id: 3,
      name: `Why Choose Us for Cybersecurity
 Audits?`,
      sub: `Assist in deploying recommended changes to strengthen your defences.`,
      img: require("../src/img/Security_Safe.png"),
    },
  ];

  const mapData = data.map((d) => {
    return `
        <div class="section_2_inside" style="width: ${
          (window.screen.width / 100) * 15
        }px;
        height:${(window.screen.height / 100) * 40}px
        ">
  <img src=${d.img}  style="width: ${
      (window.screen.width / 100) * 10
    }px; height: ${(window.screen.height / 100) * 20}px" />
  <h5
  >${d.name}</h5>
  <h5 style="font-weight: 100; width: ${(window.screen.width / 100) * 15}px; ">
 ${d.sub}
  </h5>
  </div>
      `;
  });

  const html = `
  <div class="section_2"
  
  style="padding:${(window.screen.width / 100) * 2.5}px"
  >
  <h4>Cybersecurity Audits</h4>
  <h5>Comprehensive Cybersecurity Audits for Enhanced Protection</h5>
  <div 
  class="section_2_map"
  >
${mapData}
  </div>
  </div>
  `;

  home.insertAdjacentHTML("beforeend", html);
};

columnThree();

const columnFour = () => {
  const data = [
    {
      id: 1,
      title_1: `Our VAPT Services Include`,
      sub_1: `Web Application Testing`,
      title_2: `Web Application Testing:`,
      sub_2: `Identify weaknesses in your web platforms, including OWASP Top 10
vulnerabilities.`,
      img: require("../src/img/vapt_1.png"),
    },
    {
      id: 2,
      title_1: `Our Process`,
      sub_1: `Reconnaissance:`,
      title_2: `Our Process`,
      sub_2: `Gather information about your systems and potential attack surfaces..`,
      img: require("../src/img/process.png"),
    },
    {
      id: 3,
      title_1: `Why CyberMantra for VAPT?`,
      sub_1: `Advanced Tools`,
      title_2: `Why CyberMantra for VAPT?`,
      sub_2: `We use industry-leading tools and techniques for accurate assessments.`,
      img: require("../src/img/vapt_1.png"),
    },
  ];

  const dataMap = data.map((d) => {
    return `  <div class="card_" style="height: ${
      (height / 100) * 50
    }px; width: ${(width / 100) * 20}px">
  <div
  style="width:${(width / 100) * 20}px;
  margin-left:${(width / 100) * 1.2}px"
  >
  <h6 style="color: black; width: 100%; font-weight:500">
 ${d.title_1}
 </h6>
 <h6 style="color: black; width: 100% ;font-weight:400">
 ${d.sub_1}  </h6>
  </div>
  <img
  src=${d.img}
  style="width:${(width / 100) * 25} px; height: ${(height / 100) * 20}px;
  "
  />
  <div
  style="width:${(width / 100) * 15}px;
   margin-left:${(width / 100) * 1.2}px"

  >
  <h6 style="color: black; width: 100%;font-weight:500">
${d.title_2}  </h6>
  <h6 style="color: black; width: 100%; font-weight:400">
 ${d.sub_2}
  </h6>
  </div>
  <button
  style="width:${(width / 100) * 4}px; border-radius:${(width / 100) * 4}px;
  margin-left:auto;background-Color:${"#65558F"};
   margin-right:${(width / 100) * 1.2}px"
  "
  >View</button>
  </div>`;
  });
  const html = `
  <div class="section_3">
  <img
  src="${require("../src/img/services.png")}"
  style="width: ${(width / 100) * 25}px; height: ${(height / 100) * 50}px;
  margin-Bottom:${(height / 100) * 5}px ;
  "
  />
<div class='section_3_inside'>
${dataMap}
  </div>
  </div>
  `;
  home.insertAdjacentHTML("beforeend", html);
};

columnFour();

const columnFive = () => {
  const data = [
    {
      id: 1,
      title: "Our Consultancy Services",
      sub: [
        "❖ Risk Assessment",
        "❖ Policy Development",
        "❖ Incident Response Planning",
        "❖ Compliance Advisory",
        "❖ Security Architecture Design:",
      ],
      img: require("../src/img/Consultancy.png"),
    },
    {
      id: 2,
      title: "How We Work",
      sub: [
        "1. Initial Consultation:",
        "2. Gap Analysis:",
        "3. Strategy Development",
        "4. Implementation Support",
        "5. Ongoing Support",
      ],
      img: require("../src/img/process.png"),
    },
    {
      id: 3,
      title: "Why Partner with CyberMantra?",
      sub: [
        "✓ Tailored Strategies:",
        "✓ Experienced Consultants",
        "✓ Proactive Approach",
      ],
      img: require("../src/img/patner.png"),
    },
  ];

  const cardMap = data.map((d) => {
    return card_1({
      title: d.title,
      sub: d.sub,
      img: d.img,
      customStyles: `flex-direction:${d.id % 2 !== 0 ? "row-reverse" : "row"}`,
    });
  });

  const html = `
  <div class="section_4">
  <div class="section_4_inside">
  <div>
  <h4 style="color: #0154B0; font-weight:400"; width:${(width / 100) * 75}px;>
  Cybersecurity Consultancy Strategic Cybersecurity Solutions for
  Your Business
  </h4>
  <div class="button-container"
  style="gap:${(window.screen.width / 100) * 1.5}px;
  margin-Top:${(window.screen.height / 100) * 2.5}px
  "
  >
  <button 
  style="background-color: ${"#F37020"}; width:${
    (window.screen.width / 100) * 10
  }px;
  border-radius:${(window.screen.width / 100) * 2}px;
   padding:${(width / 100) * 0.5}px
  ;
  "
  >Contact</button>
  <button 
  
  style="background-color: ${"#0254AE"}; width:${
    (window.screen.width / 100) * 10
  }px;  padding:${(width / 100) * 0.5}px ;border-radius:${
    (window.screen.width / 100) * 2
  }px"">Know More</button>
  </div>
  </div>
  <img src=${require("../src/img/f2.png")}  style="width: ${
    (window.screen.height / 100) * 60
  }px; height: ${(window.screen.height / 100) * 30}px" />
  
  </div>
  ${cardMap}
  </div>
  `;
  home.insertAdjacentHTML("beforeend", html);
};

columnFive();

const revealOnScroll = (elements) => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".section_1, .section_2, .section_3, .section_4"
  );
  revealOnScroll(sections);
});
