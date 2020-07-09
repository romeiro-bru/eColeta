function populateUFs() {

    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    // ou     .then( () => { return res.json()})
    .then( res => res.json() )
    
    .then( states => {

        // para cada Estado de Estados
        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )    
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text



    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    // toda vez que entrar na função getCities, ele vai reescrever o conteudo interno e vai bloquear novamente a cidade, após a mudança do Estado a cidade é liberada para ser mudada novamente
    citySelect.innerHTML = "<option value>Selecione a Cidade</option> "
    citySelect.innerHTML = true


    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for( const city of cities ) {
            // o primeiro city.nome serve para guardar o nome da cidade no value
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
// city disabled é removido depois que o EStado é selecionado
            citySelect.disabled = false
    } )
}



document
// elemento select com nome = uf
    .querySelector("select[name=uf]")
    // escuta as mudanças(no caso, quando um estado é selecionado) e então aciona a função getCities
    .addEventListener("change", getCities)


////////////////    TOGGGLE ITENS DE COLETA      //////////////

// pegar todos os os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")
// estrutura de repetição, ativar no evento CLICK
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}



const colletedItems = document.querySelector("input[name=items]")

// os items selecionados irão para a array 
// (nossa array, selectedItems começa vazia)
let selectedItems = []

function handleSelectedItem(event) {
// adicionar ou remover uma class com JS
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

// verificar se existem items selecionados, se sim pegar esses items selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        // encontra o item e o comparando
        // const itemFound será true ou false
        const itemFound = item == itemId 
        return itemFound
    })
// se for maior ou igual a 0 significar que ele está entre os items selecionados, lembrando que o index começa em 0
    if( alreadySelected >= 0 ) {
// caso já estejam selecionados, tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            //  o elemento filtrado será uma nova array no momento em que o retorno for false, esse item deve ser removido da array
            const intemIsDifferent = item != itemId
            return intemIsDifferent
        })
        selectedItems = filteredItems
    } else {
// se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId)

    }
// atualizar o campo hidden com os items selecionados
    colletedItems.value = selectedItems
}

