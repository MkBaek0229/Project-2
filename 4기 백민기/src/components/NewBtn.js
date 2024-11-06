export default function NewBtn({ $target }) {
    const $newBtn = document.createElement('button')
    $newBtn.textContent = '+ New Button'
    $newBtn.className = 'newBtn'
    $target.appendChild($newBtn)
}
