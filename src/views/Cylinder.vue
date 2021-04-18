<template>
  <div class="cylinder">
  </div>
</template>

<script>
import * as THREE from "three";

export default{
  name: 'Cylinder',
  mounted(){
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight -100); // 100 это высота навбара

    this.$el.appendChild(renderer.domElement);

    //Cylinder

    const geometry = new THREE.CylinderGeometry(1, 1, 2);
    const material = new THREE.MeshNormalMaterial({
      color: 0x00aabb
    });

    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    function animate() {
      requestAnimationFrame(animate);

      cylinder.rotation.x += 0.03;
      cylinder.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();

  }
}
  

</script>
