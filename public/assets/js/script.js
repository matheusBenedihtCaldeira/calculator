function createCalculadora() {
    return {
      display: document.querySelector(".input"),
  
      inicia() {
        this.click();
        this.enter();
      },
  
      click() {
        document.addEventListener("click", (e) => {
          const el = e.target;
          if (
            el.classList.contains("btn-num") ||
            el.classList.contains("btn-sgn")
          ) {
            this.btnParaDisplay(el.innerText);
          }
          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }
          if (el.classList.contains("btn-del")) {
            this.apagar();
          }
          if (el.classList.contains("btn-eq")) {
            this.equal();
          }
        });
      },
  
      apagar() {
        this.display.value = this.display.value.slice(0, -1);
      },
  
      clearDisplay() {
        this.display.value = "";
      },
  
      btnParaDisplay(valor) {
        this.display.value += valor;
      },
      equal() {
        let conta = this.display.value;
        try {
          conta = eval(conta);
          if (!conta) {
            alert("Valor invalido");
            return;
          }
          this.display.value = String(conta);
        } catch (e) {
          alert("Valor invalida!");
        }
      },
      enter() {
        this.display.addEventListener("keyup", (e) => {
          if (e.keyCode === 13) {
            this.equal();
          }
        });
      },
    };
  }
  const calculadora = createCalculadora();
  calculadora.inicia();
  