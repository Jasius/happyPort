import "./styles.scss";
import profileData from "./profile.json";

const copyrightYear = () => {
  if (profileData.footer.initialWebsiteSetupYear === new Date().getFullYear()) {
    return `${profileData.footer.initialWebsiteSetupYear}`;
  } else {
    return `${
      profileData.footer.initialWebsiteSetupYear
    } - ${new Date().getFullYear()}`;
  }
};

const currentProfile = `
<div class="specialization">
<div>Company ${profileData.specialization.currentCompany}</div>
<div>Role ${profileData.specialization.role}</div>
<div>Education ${profileData.specialization.eduInstitution}</div>
<div>Programme ${profileData.specialization.eduProgramme}</div>
${profileData.specialization.hobbies ? `<div>Hobbies ${profileData.specialization.hobbies}</div>` : ''}
</div>
`;

function socialProfiles() {
  let existingProfiles = "",
    profileIcon;
  for (let socialLink in profileData.socialLinks) {
    switch (socialLink) {
      case "linkedin":
        profileIcon = "linkedin-in";
        break;
      case "facebook":
        profileIcon = "facebook-f";
        break;
      case "stackoverflow":
        profileIcon = "stack-overflow";
        break;
      case "twitter":
        profileIcon = "twitter";
        break;
      default:
        profileIcon = "question-circle";
    }
    if (profileData.socialLinks[socialLink]) existingProfiles += `<a href="${
      profileData.socialLinks[socialLink]
    }"><i class="fab fa-${profileIcon}"></i></a>`;
  }
  return `
  <div class="socialProfiles">
  ${existingProfiles}
  </div>
  `;
}

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
${socialProfiles()}
<button onClick="">Contact me!</button>
</header>
<footer>
<span>${copyrightYear()}</span>
</footer>
`;
