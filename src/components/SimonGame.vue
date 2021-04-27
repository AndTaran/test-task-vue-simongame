<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="row">
      <div class="panel-game">
        <div>
          <div @click="click" ref="topLeft" class="btn top-left-btn"></div>
          <div @click="click" ref="topRight" class="btn top-right-btn"></div>
        </div>
        <div>
          <div @click="click" ref="botLeft" class="btn bottom-left-btn"></div>
          <div @click="click" ref="botRight" class="btn bottom-right-btn"></div>
        </div>
      </div>
      <div class="panel-options">
        <button @click="start" class="start" :disabled="sequence.length">
          Поехали
        </button>
        <div class="round">Раунд {{ round }}</div>
        <div class="complexity">
          Сложность:
          <div class="easy">
            <input
              class="radio"
              type="radio"
              name="complexity"
              id="easy"
              value="easy"
              v-model="complexity"
            />
            <label for="easy">Легкий</label>
          </div>
          <div class="middle">
            <input
              class="radio"
              type="radio"
              name="complexity"
              id="middle"
              value="middle"
              v-model="complexity"
            />
            <label for="middle">Средний</label>
          </div>
          <div class="hard">
            <input
              class="radio"
              type="radio"
              name="complexity"
              id="hard"
              value="hard"
              v-model="complexity"
            />
            <label for="hard">Сложный</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <audio ref="s1">
    <source src="@/assets/sounds/s1.mp3" />
  </audio>
  <audio ref="s2">
    <source src="@/assets/sounds/s2.mp3" />
  </audio>
  <audio ref="s3">
    <source src="@/assets/sounds/s3.mp3" />
  </audio>
  <audio ref="s4">
    <source src="@/assets/sounds/s4.mp3" />
  </audio>
</template>

<script>
export default {
  name: "SimonGame",
  props: {
    title: String,
  },

  data() {
    return {
      round: 1,
      sequence: [],
      complexity: "easy",
      interval: 0,
      repeatSequence: [],
      startGame: false,
      blockСlick: false,
    };
  },
  methods: {
    async start() {
      this.startGame = true;
      this.blockСlick = true;

      switch (this.complexity) {
        case "easy":
          this.interval = 1500;
          break;
        case "middle":
          this.interval = 1000;
          break;
        case "hard":
          this.interval = 400;
          break;
      }
      this.sequencePush();

      for (const element of this.sequence) {
        this.active(element);
        const delay = function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        };
        await delay(this.interval);
      }

      this.repeatSequence = [...this.sequence];
      this.blockСlick = false;
    },

    active(element) {
      return new Promise((resolve) => {
        this.music(element);
        setTimeout(() => {
          element.classList.toggle("active");
        }, this.interval);
        setTimeout(() => {
          resolve();
        }, 200);
      }).then(() => {
        element.classList.toggle("active");
      });
    },

    async click(e) {
      if (!this.blockСlick) {
        this.blockСlick = true;
        e.target.classList.toggle("active");
        this.music(e.target);
        setTimeout(() => {
          e.target.classList.toggle("active");
          this.blockСlick = false;
        }, 500);

        if (this.startGame) {
          let expectedPanel = this.repeatSequence.shift();
          if (expectedPanel === e.target) {
            if (this.repeatSequence.length === 0) {
              await setTimeout(() => {
                this.round++;
                this.start();
                this.repeatSequence = [...this.sequence];
              }, 1000);
            }
          } else {
            alert("Упс! Вы проиграли...");
            this.round = 1;
            this.sequence = [];
            this.startGame = false;
          }
        }
      }
    },

    sequencePush() {
      this.sequence.push(this.random());
    },
    random() {
      const panels = [
        this.$refs.topLeft,
        this.$refs.topRight,
        this.$refs.botLeft,
        this.$refs.botRight,
      ];
      return panels[parseInt(Math.random() * panels.length)];
    },

    music(panel) {
      switch (panel) {
        case this.$refs.topLeft:
          this.$refs.s1.play();
          break;
        case this.$refs.topRight:
          this.$refs.s2.play();
          break;
        case this.$refs.botLeft:
          this.$refs.s3.play();
          break;
        case this.$refs.botRight:
          this.$refs.s4.play();
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 1230px;
  padding: 15px 15px;
  margin: 0 auto;
  height: 100vh;
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
  }
  .btn {
    width: 200px;
    height: 200px;
    display: inline-block;
    border: 4px solid white;
    margin: 0 2px;
    cursor: pointer;
    &:hover {
      border: 4px solid rgb(13, 219, 226);
    }
  }
  .top-left-btn {
    border-top-left-radius: 100%;
    background-color: red;
  }
  .top-right-btn {
    border-top-right-radius: 100%;
    background-color: blue;
  }
  .bottom-left-btn {
    border-bottom-left-radius: 100%;
    background-color: green;
  }
  .bottom-right-btn {
    border-bottom-right-radius: 100%;
    background-color: yellow;
  }
  .active {
    background-color: white;
    border: 4px solid rgb(13, 219, 226);
  }
  .panel-options {
    text-align: center;
    border: 1px solid white;
    padding: 10px;
    .start {
      padding: 10px 15px;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      text-transform: uppercase;
    }
    .round {
      margin: 10px 0;
      text-transform: uppercase;
    }
    .complexity {
      text-align: left;
    }
  }
}
</style>
