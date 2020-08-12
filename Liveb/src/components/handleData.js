import React from 'react'

const HandleData = (qtd) => {

    const meses = new Array("Janeiro", "Fevereiro","Março", "Abril","Maio","Junho","Julho","Agosto","Setembro", "Outubro","Novembro","Dezembro")
    const semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",  "Quinta-Feira", "Sexta-Feira", "Sábado")
    const dt = new Date()
    const ndt = new Date()
    ndt.setMonth(dt.getMonth() + qtd);
    const dia = ndt.getDate()
    const mes = ndt.getMonth()
    const ano =  ndt.getFullYear();
    
    return dia + " " + meses[mes] + " " + ano
}

export default HandleData
