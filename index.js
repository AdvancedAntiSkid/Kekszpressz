// hungarian

végső sürgőségi = kérelmez("sürgőségi")();

sürgőségi.állít("Néző Motor", "ejs");

végső értekezletKözépsőÁru = (kérelem, válasz, következő) {
  feltéve (kérelem.értekezlet) {
    következő();
  } más {
    átirányít("/belépés");
  }
};

sürgőségi.kap("/", értekezletKözépsőÁru, aszinkronizált (kérelem, válasz) => {
  válasz.vakol("index");
});

sürgőségi.fülel(80, () => {
  konzol.farönk("A webszerver elindult!");
});

// original

const express = require("express")();

express.set("View Engine", "ejs");

const sessionMiddleWare = (request, response, next) {
  if (request.session) {
    next();
  } else {
    redirect("/login");
  }
};

express.get("/", sessionMiddleWare, async (request, response) => {
  response.render("index");
});

express.listen(80, () => {
  console.log("The web server has started! 
");
});
