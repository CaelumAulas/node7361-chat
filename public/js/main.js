const msgSend = document.querySelector('.msg-send')
const input = msgSend.querySelector('.msg-send__content')
const msg = document.querySelector('.msg')
const socket = io()
const link = document.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault()

  $.get('http://192.168.131.105:3000/promocao')
})

socket.on('nova-msg', (data) => {
  msg.innerHTML += `${data.msg} <br>`
})

msgSend.addEventListener('submit', (event) => {
  event.preventDefault()

  const msgDigitada = input.value

  //enviar a mensagem sem atualizar a página
  $.post('/msg', {msg: msgDigitada}, () => {
    console.log('Deu bom!')
  })

  input.value = ''
})
