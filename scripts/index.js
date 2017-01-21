var { html, mount } = window.redom

function app () {
  var _video, _music

  var el = html('div.app',
    html('div.overlay'),
    _video = html('iframe', {
      width: '100%', height: '100%',
      frameborder: 0,
      allowfullscren: true,
      src: 'https://youtube.com/embed/E77jmtut1Zc?rel=0&autoplay=1&controls=0&showinfo=0'
    }),
    _music = html('iframe', {
      width: '100%', height: '100%',
      frameborder: 0,
      src: 'https://youtube.com/embed/vLwjoi1jduM?rel=0&autoplay=1&controls=0&showinfo=0&loop=1&playlist=vLwjoi1jduM'
    })
  )

  _music.style.maxHeight = '0px'

  window.addEventListener('resize', function () {
    _video.style.height = window.innerHeight + 'px'
  })
  _video.style.height = window.innerHeight + 'px'

  return { el }
}

var mountEl = document.getElementById('root')
mount(mountEl, app())
