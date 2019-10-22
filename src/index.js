import "./styles.scss";
import profileData from "./profile.json";

const copyrightYear = `${
  profileData.footer.initialWebsiteSetupYear
} - ${new Date().getFullYear()}`;

const currentProfile = `
<div class="specialization">
<div>Company ${profileData.specialization.currentCompany}</div>
<div>Role ${profileData.specialization.role}</div>
<div>Education ${profileData.specialization.eduInstitution}</div>
<div>Programme ${profileData.specialization.eduProgramme}</div>
<div>Hobbies ${profileData.specialization.hobbies}</div>
</div>
`;

document.getElementById("app").innerHTML = `
<header>
<h1>Hi</h1>
<h2>I am <span class="highlight">${profileData.profile.firstName},</span> a ${
  profileData.specialization.role
} based in <span class="highlight">Bristol</span></h2>
<p class="primaryDescription">
 ${profileData.primaryDescription}
</p>
<div class="specialization">
${currentProfile}
</div>
<button onClick="">Contact me!</button>
</header>
<footer>
<span>${copyrightYear}</span>
</footer>
`;
