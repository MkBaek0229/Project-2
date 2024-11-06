import { request } from '../utils/api.js'
import NewBtn from './NewBtn.js'

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

    this.render = () => {
        $page.innerHTML = `
        <ul class="documentList">
            ${this.state
                .map(
                    (document) =>
                        `<li class="dataList">📄 ${document.title}
                        <button class="addBtn">➕</button>
                        <button class="delBtn" data-id="${
                            document.id
                        }">🗑️</button>
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
    }
    this.render()

    $target.appendChild($page)

    const $newBtn = new NewBtn({ $target: $page })

    this.setState = async () => {
        const documentList = await request(``)
        this.state = documentList
        this.render()
    }
    const onDelete = async (id) => {
        await request(`/${id}`, {
            method: 'DELETE',
        })
        this.setState()
    }
    $page.addEventListener('click', (e) => {
        const $delBtn = e.target.closest('.delBtn')
        const id = $delBtn.dataset.id
        onDelete(id)
    })
}
