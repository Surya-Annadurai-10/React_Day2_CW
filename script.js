let root = document.getElementById("root");

const App = React.createElement(
  "div",
  { className: "main-container" },
  React.createElement("h1", {className:"heading"}, "Learn Web Development"),
  React.createElement(
    "div",
    {className:"para-div"},
    React.createElement("p", {className:"para"} , 
        "Welcome to the MDN learing area. This set of artiles aims to guide complete beginners to web development with all that they need to start coding websites. Welcome to the MDN learing area. This set of artiles aims to guide complete beginners to web development with all that they need to start coding websites.Welcome to the MDN learing area. This set of artiles aims to guide complete beginners to web development with all that they need to start coding websites.Welcome to the MDN learing area. This set of artiles aims to guide complete beginners to web development with all that they need to start coding websites."
    )
  ),
  React.createElement(
    "div",
   {className:"para-div"},
    React.createElement("p" , {className:"para"} , 
        "The aim of this area of MDN is not to take you from 'beginner' to 'expert' but ot take you form 'beginner' to 'comfortable'. From there, you shpuld be able to start making your way , learning from,", React.createElement("a" , {href:"www.google.com" , target : "_blank" , className: "anchor"} , "the rest MDN") ," and other intermediate to advanced resources that assume a lot a previous knowledge.The aim of this area of MDN is not to take you from 'beginner' to 'expert' but ot take you form 'beginner' to 'comfortable'. From there, you shpuld be able to start making your way , learning from the rest MDN, and other intermediate to advanced resources that assume a lot a previous knowledge.The aim of this area of MDN is not to take you from 'beginner' to 'expert' but ot take you form 'beginner' to 'comfortable'. From there, you shpuld be able to start making your way , learning from the rest MDN, and other intermediate to advanced resources that assume a lot a previous knowledge. "
    )
  ),
  React.createElement(
    "div",
    {className:"para-div"},
   React.createElement("p" ,{className:"para"} , 
     "If you are a complete beginner, web development can be challenging -- we will hold ypur hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learing web deveopment(on your own or as part of a classs), a teacher looking for class materials, a hobbyist , or someone who just wanrs to understad more about how web technologies work. If you are a complete beginner, web development can be challenging -- we will hold ypur hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learing web deveopment(on your own or as part of a classs), a teacher looking for class materials, a hobbyist , or someone who just wanrs to understad more about how web technologies work.If you are a complete beginner, web development can be challenging -- we will hold ypur hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learing web deveopment(on your own or as part of a classs), a teacher looking for class materials, a hobbyist , or someone who just wanrs to understad more about how web technologies work."
   )
  ),
  React.createElement("h4" , {className:"tag"} , "Created By Surya Annadurai")
);


const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(App);

