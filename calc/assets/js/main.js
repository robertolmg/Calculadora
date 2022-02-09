const calculadora = {
    display: document.querySelector('.display'),

    inicia(){
        this.cliquebotoes();
        this.pressionaEnter();
    },

    cliquebotoes(){
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                this.apagarUm();
            }
            if(el.classList.contains('btn-eq')){
                this.resultado();
            }
        })
    },

    pressionaEnter(){
        this.display.addEventListener('keyup', e =>{
            if (e.keycode === 13){
                this.resultado();
            }
        })
    },

    btnParaDisplay(valor){
        this.display.value += valor;
    },

    clearDisplay(){
        this.display.value = '';
    },

    apagarUm(){
        this.display.value = this.display.value.slice(0, -1);
    },
    resultado(){
        try{
            this.display.value = eval(this.display.value);
            if(!eval(this.display.value)){
                alert('Conta inválida!');
                return;
            }
        } catch(e){
            alert('Conta invalida!');
            return;
        }
    }
}

calculadora.inicia();