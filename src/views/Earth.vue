<template>
  <div class="earth">
    <h1>This is an Earth page</h1>
  </div>
</template>
<script>
import * as THREE from "three";

export default{
  name: 'Earth',
  mounted(){
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1000
    );
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight -100); // 100 это высота навбара

    this.$el.appendChild(renderer.domElement);

    //Earth

    const geometry = new THREE.SphereGeometry(100, 40, 40);
    const material = new THREE.MeshBasicMaterial({
      // map: THREE.ImageUtils.loadTexture('earth.jpg') // вроде как деприкейтед
      map: new THREE.TextureLoader().load('earth.jpg')
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);
    animate();

    function animate() {
      requestAnimationFrame(animate);

      earth.rotation.y -= .01;

      renderer.render(scene, camera);
    }

  }
}
</script>
<style>

  h1{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: yellow;
  }
</style>
