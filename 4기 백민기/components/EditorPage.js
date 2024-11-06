export default function EditorPage({ $target, initialState }) {
    const $page = document.createElement('div')

    $page.className = 'editorPage'
    $page.innerHTML = `
        <input placeholder="제목없음" class="editorTitle" value=${initialState.title} />
        <textarea placeholder="내용을 입력하세요" class="editorContent">${initialState.content}</textarea>
    `

    $target.appendChild($page)
}
