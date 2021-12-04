<script setup lang="ts">
</script>

<template>
  <div class="app">
    <div class="app__wrapper">
      <header class="header">
        <button class="btn">
          <img src="./assets/settings.svg" />
        </button>
      </header>
      <div class="home__wrapper">
        <h2 class="home__title">Get Ready</h2>
        <div class="tomato">
          <div class="root"></div>
          <div class="leaf leaf-1"></div>
          <div class="leaf leaf-2"></div>
          <div class="leaf leaf-3"></div>
          <div class="timer">
            <span class="timer__minutes timer__value">25</span>
            <span class="timer__separator">:</span>
            <span class="timer__secunds timer__value">00</span>
          </div>
        </div>

        <div class="buttons">
          <button class="btn primary">
            <img src="./assets/play.svg" />
          </button>
          <button class="btn primary">
            <img src="./assets/restart.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app {
  width: 100vw;
  height: 100%;
}
.app__wrapper {
  display: grid;
  height: 100%;
  max-width: 90vh;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
}
/* Header */
.header {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
@media (max-width: 500px) {
  .header {
    top: 0.5rem;
    right: 0.5rem;
  }
}
/* Home Page */
.home__wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
}

.home__title {
  font-size: calc(var(--size) * 0.07);
  font-weight: 400;
  text-transform: capitalize;
}

.buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}
/** ------------ TomatoContainer ------------ */
.tomato {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f00000;
  border-radius: 50%;
  height: calc(var(--size) * 0.9);
  width: calc(var(--size) * 0.9);
  position: relative;
}

.root {
  position: absolute;
  top: calc(var(--size) * -0.1);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: calc(var(--size) * 0.13) calc(var(--size) * 0.05) 0
    calc(var(--size) * 0.05);
  border-color: #32cd32 transparent transparent transparent;
}

.leaf {
  background-color: #32cd32;
  position: absolute;
  width: calc(var(--size) * 0.3);
  height: calc(var(--size) * 0.3);
  border-radius: 0 calc(var(--size) * 0.25);
  top: 0px;
  left: 50%;
  transform-origin: top left;
}

.leaf-1 {
  transform: rotate(330deg);
}

.leaf-2 {
  transform: rotate(120deg);
}

.leaf-3 {
  width: calc(var(--size) * 0.25);
  height: calc(var(--size) * 0.25);
  transform: rotate(45deg);
  border-radius: 0 calc(var(--size) * 0.15);
}
/** ------------ Timer ------------ */
.timer {
  margin-top: calc(var(--size) * 0.1);
  font-size: calc(var(--size) * 0.2);
  color: #fff;
}

.timer__value {
  padding: calc(var(--size) * 0.05);
  border-radius: calc(var(--size) * 0.05);
  background-color: #b90202;
}

.timer__separator {
  padding: 0 0.25rem;
}
/* Button */
.btn {
  width: calc(var(--size) * 0.15);
  height: calc(var(--size) * 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;
  font-size: calc(var(--size) * 0.1);
  line-height: calc(var(--size) * 0.1);
  background-color: #e0e0e0;
  cursor: pointer;
}
.btn:hover {
  filter: drop-shadow(0 0 20px #7c7c7c);
}

.btn--primary {
  background-color: #ffe604;
  color: #000;
}
.btn--primary:hover {
  filter: drop-shadow(0 0 20px red);
}
.btn:disabled {
  filter: grayscale(100%);
  color: #7c7c7c;
}
</style>
