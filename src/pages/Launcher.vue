<template>
  <div class="h-screen flex gap-5 justify-center items-center flex-col">
    <div class="mb-6 sm:mb-0  text-center">
        <h1 class="text-balance text-4xl font-normal tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
          Your Journey to a Healthier,
        </h1>
        <h1  class="text-balance text-4xl font-semibold tracking-tight text-[#004443] lg:text-6xl 2xl:text-7xl">
          Brighter Smile Starts Here
        </h1>
      </div>
    <img loading="lazy" src="../assets/img/logo.svg" class="h-10 md:h-16" alt="Premium Dental studio Logo" />
    <button @click="startCelebration" class="launch-btn border-4 tracking-tight border-white">Launch Website</button>
    <div v-if="countdown > 0" id="counter">Countdown: 00:{{ countdown }}</div>
    <canvas id="fireworks" v-if="countdown === 0"></canvas>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      countdown: 5, // Starting countdown value
    };
  },
  methods: {
    startCelebration() {
      if (this.countdown > 0) {
        const countdownInterval = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            clearInterval(countdownInterval);
            this.launchFireworks();
          }
        }, 1000);
      }
    },
    launchFireworks() {
      const canvas = document.getElementById('fireworks');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = Array.from({ length: 100 }, () => ({
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 3 + 1,
      }));

      const animateFireworks = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
          particle.x += particle.dx;
          particle.y += particle.dy;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
        requestAnimationFrame(animateFireworks);
      };
      animateFireworks();
      setTimeout(()=>{
        window.location.href = "/"
      },10000)
    },
  },
};
</script>

<style>
.launch-btn {
  padding: 10px 50px;
  font-size: 16px;
  background-color: #004443;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  border: 3px solid white;
  transition: background-color 0.3s;
}

#counter {
  font-size: 20px;
  margin-top: 10px;
}

#fireworks {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
}
</style>
