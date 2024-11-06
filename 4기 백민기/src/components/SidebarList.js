import { request } from '../../utils/api.js'
function SideBarList({ $target, initalState }) {
    const $list = document.createElement('div')
    $target.appendChild($list)

    this.state = initalState

    this.setState = async () => {
        const documentList = await request(``)
        this.state = documentList
        this.render()
    }

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

    this.render = () => {
        $list.innerHTML = `
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

    const onDelete = async (id) => {
        await request(`/${id}`, {
            method: 'DELETE',
        })
        this.setState()
    }

    $list.addEventListener('click', (e) => {
        const $delBtn = e.target.closest('.delBtn')

        const id = $delBtn.dataset.id
        onDelete(id)
    })
}

export default SideBarList
