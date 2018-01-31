const msgSend = document.querySelector('.msg-send')
const input = msgSend.querySelector('.msg-send__content')
const msg = document.querySelector('.msg')
const socket = io()

socket.on('nova-msg', (data) => {
  msg.innerHTML += `${data.msg} <br>`
  input.value = ''
})

msgSend.addEventListener('submit', (event) => {
  event.preventDefault()

  const msgDigitada = input.value

  //enviar a mensagem sem atualizar a página
  $.post('/msg', {msg: msgDigitada}, () => {
    console.log('Deu bom!')
  })
})
