const ctx = document.getElementById("skillsChart")

new Chart(ctx,{

type:"radar",

data:{

labels:[
"HTML",
"CSS",
"JavaScript",
"Java",
"SQL",
"React"
],

datasets:[{

label:"Skill Level",

data:[90,85,80,70,75,65]

}]

}

})

document
.getElementById("modeToggle")
.onclick = ()=>{

document.body.classList.toggle("light")

}
