import NewBtn from './NewBtn'
export default function SidebarPage({ $target, initalState }) {
    this.state = initalState

    this.createTreeView = (data) => {
        let str = ''
        for (const key in data) {
            if (data[key].documents.length > 0) {
                str += `
                    <li class="dataList">
                        📄 ${data[key].title}
                        <button class="addBtn">➕</button>
                        <button class="delBtn">🗑️</button>
                        <ul>${this.createTreeView(data[key].documents)}</ul>
                    </li>
               `
            } else {
                str += `
                <li class="dataList">
                    📄 ${data[key].title}
                    <button class="addBtn">➕</button>
                    <button class="delBtn">🗑️</button>
                </li>
           `
            }
        }
        return str
    }
    const $page = document.createElement('div')
    $page.classList.add('listContainer')
    $page.innerHTML = `
        <ul>
            ${this.state
                .map(
                    (document) =>
                        `<li class="dataList">📄 ${document.title}
                        <button class="addBtn">➕</button>
                        <button class="delBtn">🗑️</button>
                    </li>
                    ${
                        document.documents.length > 0
                            ? `<ul>${this.createTreeView(
                                  document.documents
                              )} </ul>`
                            : ''
                    }
                    
                    
                    `
                )
                .join('')}
        </ul>
    `
    $target.appendChild($page)

    const $newBtn = new NewBtn({ $target: $page })
}
