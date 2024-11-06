import EditorPage from './components/EditorPage.js'
import SidebarPage from './components/SidebarPage.js'
export default function App({ $target }) {
    const dummyData = [
        {
            id: 1, // Document id
            title: '노션을 만들자', // Document title
            documents: [
                {
                    id: 2,
                    title: '블라블라',
                    documents: [
                        {
                            id: 3,
                            title: '함냐함냐',
                            documents: [],
                        },
                    ],
                },
            ],
        },
        {
            id: 4,
            title: 'hello!',
            documents: [],
        },
    ]

    const editorDummyData = {
        title: '노션을 만들자',
        content: '노션 만들기~',
    }

    const $listContainer = document.createElement('div')
    const $editorContainer = document.createElement('div')

    $target.appendChild($listContainer)
    $target.appendChild($editorContainer)

    const sidebarPage = new SidebarPage({
        $target: $listContainer,
        initalState: dummyData,
    })

    const editorPage = new EditorPage({
        $target: $editorContainer,
        initalState: editorDummyData,
    })
}
