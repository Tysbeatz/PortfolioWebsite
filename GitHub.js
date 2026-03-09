fetch("https://api.github.com/users/tysbeatz/repos")

.then(res=>res.json())

.then(data=>{

const container =
document.getElementById("github-projects")

data.slice(0,6).forEach(repo=>{

const div = document.createElement("div")

div.className="project"

div.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">
View Repo
</a>
`

container.appendChild(div)

})

})
