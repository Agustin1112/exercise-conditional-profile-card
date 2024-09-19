import "../style/index.css";

/**
 * EDIT ONLY INSIDE THIS RENDER FUNCTION
 * This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  // Se genera HTML para la portada
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  // Aca se pone nombre y apellido
  const name = variables.name || "Name";
  const lastname = variables.lastname || "LastName";

  // Rol
  const role = variables.role || "Role";

  // Ciudad y País
  const city = variables.city || "City";
  const country = variables.country || "Country";

  // Los enlaces de redes sociales
  const twitterLink = variables.twitter
    ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
    : "";
  const githubLink = variables.github
    ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
    : "";
  const linkedinLink = variables.linkedin
    ? `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
    : "";
  const instagramLink = variables.instagram
    ? `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
    : "";

  // Reseteo el cuerpo del sitio web con el HTML
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${name} ${lastname}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="${variables.socialMediaPosition}">
        ${twitterLink}
        ${githubLink}
        ${linkedinLink}
        ${instagramLink}
      </ul>
    </div>
  `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-right",
    twitter: "4geeksacademy",
    github: "Agustin1112",
    linkedin: "agustin-perrone",
    instagram: "4geeksacademy",
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;

      console.log("Updated values:", values);

      render(Object.assign(window.variables, values));
    });
  });
};
