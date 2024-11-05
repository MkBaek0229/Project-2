import EditorPage from './components/EditorPage.js'
import SidebarPage from './components/SidebarPage.js'
export default function App({ $target }) {
    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const sidebarPage = new SidebarPage({ $target: $listContainer })
    const editorPage = new EditorPage({ $target: $editorContainer })
}
