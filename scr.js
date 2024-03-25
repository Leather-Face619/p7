const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap
gsap.from("a",{
    stagger:.1,
    y:-50,
    duration:1,
    ease:Power3,
    opacity:0
})
gsap.to(".ani2",{
    stagger:.1,
    y:-50,
    duration:1,
    ease:Power3,
   
})
Shery.textAnimate("#headings h1", {
    
    style: 2,
    y: 10,
    delay: 0.7,
   
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.imageEffect("#imgtext img", {
    style: 3, //Select Style
   // Debug Panel
    config: {"uFrequencyX":{"value":19.83,"range":[0,100]},"uFrequencyY":{"value":22.31,"range":[0,100]},"uFrequencyZ":{"value":32.23,"range":[0,100]},"geoVertex":{"range":[1,64],"value":43.17},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071491892819},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });
  Shery.imageEffect(".imgani", {
    style: 5, //Select Style
    
    config:{"uFrequencyX":{"value":15.7,"range":[0,100]},"uFrequencyY":{"value":7.44,"range":[0,100]},"uFrequencyZ":{"value":27.27,"range":[0,100]},"geoVertex":{"range":[1,64],"value":14.02},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6416146788990825},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });
  Shery.imageEffect("#hero4img", {
    style: 5, //Select Style
    gooey:true,
    debug: false, 
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9538552553736936},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":5.74,"range":[1,15]},"durationOut":{"value":0.91,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":14.02},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.67,"range":[0,1]},"antialias_threshold":{"value":0.04,"range":[0,0.1]},"noise_height":{"value":0.55,"range":[0,2]},"noise_scale":{"value":19.01,"range":[0,100]},"uFrequencyX":{"value":15.7,"range":[0,100]},"uFrequencyY":{"value":7.44,"range":[0,100]},"uFrequencyZ":{"value":27.27,"range":[0,100]}},
    preset: "./presets/wigglewobble.json",
  });

  document.querySelector("#ftext button").addEventListener("mouseover",function () {
    gsap.to("#future video",{
      opacity:1,
      ease:Power3,
      duration:.7
    })
  })
  document.querySelector("#ftext button").addEventListener("mouseleave",function () {
    gsap.to("#future video",{
      opacity:0,
      ease:Power3,
      duration:.7
    })
  })