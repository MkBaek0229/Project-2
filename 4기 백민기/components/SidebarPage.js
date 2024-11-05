export default function SidebarPage({ $target }) {
    const $page = document.createElement('div')
    $page.innerHTML = 'sidebar'
    $target.appendChild($page)
}
