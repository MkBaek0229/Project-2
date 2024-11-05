export default function EditorPage({ $target }) {
    const $page = document.createElement('div')
    $page.innerHTML = 'editor'
    $target.appendChild($page)
}
