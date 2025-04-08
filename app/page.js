"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Content from "@/components/Content";
import { Scene } from "@/components/Scene";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    loadModel();
  }, []);

  function loadModel() {
    let object;
    function onModelLoaded() {
      object.traverse((child) => {
        let mat = new THREE.MeshPhongMaterial({
          color: 0x171511,
          specular: 0xd0cbc7,
          shininess: 5,
          flatShading: true,
        });
        child.material = mat;
      });
      setupAnimation(object);
    }

    const manager = new THREE.LoadingManager(onModelLoaded);
    const loader = new OBJLoader(manager);
    loader.load("https://assets.codepen.io/557388/1405+Plane_1.obj", (obj) => {
      object = obj;
    });
  }

  function setupAnimation(model) {
    const scene = new Scene(model);
    const plane = scene.modelGroup;

    gsap.fromTo("canvas", { x: "50%", autoAlpha: 0 }, { duration: 1, x: "0%", autoAlpha: 1 });
    gsap.to(".loading", { autoAlpha: 0 });
    gsap.to(".scroll-cta", { opacity: 1 });
    gsap.set("svg", { autoAlpha: 1 });

    const tau = Math.PI * 2;
    gsap.set(plane.rotation, { y: tau * -0.25 });
    gsap.set(plane.position, { x: 80, y: -32, z: -60 });

    scene.render();

    const sectionDuration = 1;

    gsap.fromTo(
      scene.views[1],
      { height: 1, bottom: 0 },
      {
        height: 0,
        bottom: 1,
        ease: "none",
        scrollTrigger: { trigger: ".blueprint", scrub: true, start: "bottom bottom", end: "bottom top" },
      }
    );

    gsap.to(".ground", {
      y: "30%",
      scrollTrigger: { trigger: ".ground-container", scrub: true, start: "top bottom", end: "bottom top" },
    });

    gsap.from(".clouds", {
      y: "25%",
      scrollTrigger: { trigger: ".ground-container", scrub: true, start: "top bottom", end: "bottom top" },
    });

    const tl = gsap.timeline({
      onUpdate: scene.render,
      scrollTrigger: { trigger: ".content", scrub: true, start: "top top", end: "bottom bottom" },
      defaults: { duration: sectionDuration, ease: "power2.inOut" },
    });

    let delay = 0;
    tl.to(".scroll-cta", { duration: 0.25, opacity: 0 }, delay);
    tl.to(plane.position, { x: -10, ease: "power1.in" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: tau * 0.25, y: 0, z: -tau * 0.05, ease: "power1.inOut" }, delay);
    tl.to(plane.position, { x: -40, y: 0, z: -60, ease: "power1.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: tau * 0.25, y: 0, z: tau * 0.05, ease: "power3.inOut" }, delay);
    tl.to(plane.position, { x: 40, y: 0, z: -60, ease: "power2.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: tau * 0.2, y: 0, z: -tau * 0.1, ease: "power3.inOut" }, delay);
    tl.to(plane.position, { x: -40, y: 0, z: -30, ease: "power2.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: 0, z: 0, y: tau * 0.25 }, delay);
    tl.to(plane.position, { x: 0, y: -10, z: 50 }, delay);

    delay += sectionDuration * 2;
    tl.to(plane.rotation, { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" }, delay);
    tl.to(plane.position, { z: 30, ease: "power4.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: tau * 0.25, y: tau * 0.5, z: 0, ease: "power4.inOut" }, delay);
    tl.to(plane.position, { z: 60, x: 30, ease: "power4.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: tau * 0.35, y: tau * 0.75, z: tau * 0.6, ease: "power4.inOut" }, delay);
    tl.to(plane.position, { z: 100, x: 20, y: 0, ease: "power4.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: tau * 0.15, y: tau * 0.85, z: -tau * 0, ease: "power1.in" }, delay);
    tl.to(plane.position, { z: -150, x: 0, y: 0, ease: "power1.inOut" }, delay);

    delay += sectionDuration;
    tl.to(plane.rotation, { x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: "none" }, delay);
    tl.to(plane.position, { x: 0, y: 30, z: 320, ease: "power1.in" }, delay);
  }

  return (
    <div>
      <Content />
    </div>
  );
}