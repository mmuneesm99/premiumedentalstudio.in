<template>
  <div class="h-screen flex gap-5 justify-center items-center flex-col">
    <!-- Logo with a conditional class for scaling -->
    <img
      loading="lazy"
      :class="{ 'scale-logo': countdown === 0 }"
      src="../assets/img/logo.svg"
      class="h-10 md:h-16 transition-transform duration-1000"
      alt="Premium Dental Studio Logo"
    />
    <button
      v-show="countdown > 0"
      @click="startCelebration"
      class="launch-btn animate-pulse hover:scale-x-105 duration-[3s] transition-all border-4 tracking-tight border-white"
    >
      Launch Website
    </button>
    <div v-show="countdown > 0" id="counter" class="font-bold text-3xl">
      Countdown: 00:0{{ countdown }}
    </div>
    <canvas id="fireworks" v-if="countdown === 0"></canvas>
  </div>
</template>

<script>
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
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
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

/* New CSS class for scaling the logo */
.scale-logo {
  transform: scale(2); /* Scale the logo 1.5 times */
}
</style>
