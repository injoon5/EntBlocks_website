let copy = text => {
  let tmp = document.createElement('textarea')
  tmp.value = text
  document.body.append(tmp)
  tmp.select()
  document.execCommand('copy')
  tmp.remove()
  snack('복사되었습니다.')
}

let snack = text => {
  let x = document.getElementById('snack')
  x.className = 'show'
  x.innerText = text
  setTimeout(() => { x.className = x.className.replace('show', '') }, 3000)
}