// const github = "GilbertoPereira13";
// const youtube = "Gilberto";
// const instagram = "blzgilberto";
// const facebook = "Pereirah";
// const twitter = "gilberto";
// function changeSocialMedia(){
// }

const linksSocialMedia = {
  github: 'GilbertoPereira13',
  youtube: 'teste',
  instagram: 'blzgilberto',
  facebook: 'teste',
  twitter: 'teste'
}

// -------------------------------- Do the same thing ---------------------------------
// function changeSocialMediaLinks() {
//   for (let li of socialLinks.children) {
//     const social = li.getAttribute('class')

//     li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
//   }
// }

// function changeGithub() {
//   for (let a of gitHubTeste.children) {
//     const social = a.getAttribute('class')

//     a.href = `https://www.${social}.com/${linksSocialMedia[social]}`
//   }
// }

// changeSocialMediaLinks()
// changeGithub()
// -----------------------------------------------------------------------------------

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfo()
