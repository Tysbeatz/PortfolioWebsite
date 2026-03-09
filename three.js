const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth,window.innerHeight)

document.getElementById("three-bg")
.appendChild(renderer.domElement)

const geometry = new THREE.IcosahedronGeometry(8)

const material = new THREE.MeshBasicMaterial({
wireframe:true,
color:0x38bdf8
})

const shape = new THREE.Mesh(geometry,material)

scene.add(shape)

camera.position.z = 20

function animate(){

requestAnimationFrame(animate)

shape.rotation.x += 0.01
shape.rotation.y += 0.01

renderer.render(scene,camera)

}

animate()
