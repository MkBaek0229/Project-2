export default function SidebarPage({ $target, initalState }) {
    this.state = initalState

    const $page = document.createElement('div')
    $page.innerHTML = `
    <ul>
        ${this.state.map((row) => `<li>${row.id} / ${row.title}</li>`).join('')}
    </ul>
`
    $target.appendChild($page)
}
