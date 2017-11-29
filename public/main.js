$(document).ready(function(){
  console.log('ready');
  let $button = $('button')
  let $body = $('body')
  $button.on('click', function () {
    console.log('kaboom');
    $body.css({ backgroundColor: 'red' })
    $button.text('PHWOAR')
  })
})
