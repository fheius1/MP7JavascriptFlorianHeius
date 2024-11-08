<template>
  <div class="calculator">
    <input type="text" v-model="display" readonly />
    <div class="buttons">
      <button @click="clear">C</button>
      <button v-for="num in numbers" :key="num" @click="append(num)">{{ num }}</button>
      <button v-for="op in operations" :key="op" @click="append(op)">{{ op }}</button>
      <button @click="calculate">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculadora",
  data() {
    return {
      display: "",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operations: ["+", "-", "*", "/"],
    };
  },
  methods: {
    append(value) {
      // Evitar que un número comenci amb "0" si no és un sol "0"
      if (
          (this.display === "" && value === 0) ||
          (this.display.endsWith(" ") && value === 0)
      ) {
        return;
      }

      // Evitar múltiples operadors seguits
      if (
          ["+", "-", "*", "/"].includes(value) &&
          ["+", "-", "*", "/"].includes(this.display.slice(-1))
      ) {
        return;
      }

      //Afegir un espai entre els números i operadors per evitar problemes de format com "1+01"
      if (["+", "-", "*", "/"].includes(value)) {
        this.display += ` ${value} `;
      } else {
        this.display += value;
      }
    },

    clear() {
      this.display = "";
    },

    calculate() {
      try {

        this.display = this.safeEvaluate(this.display);
      } catch (e) {
        this.display = "Error";
      }
    },

    safeEvaluate(expression) {
      // Reemplaça l'expressió amb espais i converteix un valor decimal
      return Function(`"use strict"; return (${expression.replace(/ /g, "")})`)();
    },

    handleKeyDown(event) {
      const key = event.key;
      if (/[0-9]/.test(key)) {

        this.append(parseInt(key));
      } else if (["+", "-", "*", "/"].includes(key)) {

        this.append(key);
      } else if (key === "Enter") {

        this.calculate();
      } else if (key === "Escape") {

        this.clear();
      }
    }
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<style scoped>
.calculator {
  max-width: 350px;
  margin: 0 auto;
  padding: 2em;
  background-color: #1c1c1c;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 300px;
}

.display {
  width: 100%;
  height: 100px;
  font-size: 3em;
  text-align: right;
  padding: 0.6em;
  border: none;
  border-radius: 15px;
  background-color: #333;
  color: white;
  box-sizing: border-box;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.button {
  padding: 35px;
  font-size: 2.5em;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


@media (max-width: 400px) {
  .calculator {
    width: 100%;
    padding: 1.5em;
  }

  .display {
    font-size: 2.5em;
  }

  .button {
    font-size: 2em;
    padding: 20px;
  }
}
</style>

