<template>
  <div class="cube">
    <h1>This is an CUBE page</h1>
  </div>
</template>
<script>
import * as THREE from "three";
// import { TimelineMax } from 'gsap';

export default{
  name: 'Cube',
  // transition: {
  //   name: 'anim',
  //   mode: 'out-in',
  //   css: false,
  //   enter(el, done){
  //     let tl = new TimelineMax({onComplete: done});
  //     tl.fromTo(el, 0.3,{y: -1000, opacity: 0, rotation: 30}, {y: 0, opacity: 1, rotation: 0});
  //   },
  //   leave(el, done){
  //     let tl = new TimelineMax({onComplete: done});
  //     tl.fromTo(el, 0.3,{y: 0, opacity: 1}, {y: 1000, opacity: 0});
  //   }
  // },
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

    //Cube

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00aabb
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
    animate();

  }
}
</script>
<style lang="scss">

</style>
