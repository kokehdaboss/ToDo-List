export const sideBarWidth = () => {
  const navbar = document.getElementById('navbar')
  const resizeHandle = document.getElementById('resize-handle')
  const mainContent = document.getElementById('content')
  let isResizing = false

  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true
  })

  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return

    const offsetRight = document.body.offsetWidth - (e.clientX - document.body.offsetLeft)
    const minWidth = 230
    const maxWidth = 400

    const newWidth = Math.min(Math.max(document.body.offsetWidth - offsetRight, minWidth), maxWidth)

    navbar.style.width = newWidth + 'px'
    mainContent.style.marginLeft = newWidth + 'px'
  })

  document.addEventListener('mouseup', () => {
    isResizing = false
  })
}
