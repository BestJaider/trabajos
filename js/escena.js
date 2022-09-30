//escenario 
const scene = new THREE.Scene()
var loader = new THREE.TextureLoader()
loader.load('../img/brr.jpg', function(texture){
    scene.background = texture
});


//camara 

const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render 

const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );


//GEOMETRIAS 
const geometry = new THREE.PlaneGeometry( 1.5, 5,  );
const material = new THREE.MeshBasicMaterial( {color: 0xf2f43f} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

camara.position.z = 5;
camara.position.x = 0.03;
camara.position.y = 0.01;

//animación 
function animate(){
	requestAnimationFrame( animate );
    plane.rotation.y += 0.05;
    plane.rotation.x += 0.05;
	render.render( scene, camara );
}
animate();



