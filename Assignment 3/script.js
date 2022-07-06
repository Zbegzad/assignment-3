const tabs = document.quarySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classlist.remove('active')
        })
        tab.forEach(tab => {
            tab.Content.classlist.remove('active')
        })

        tab.classlist.add('active')
        target.classlist.add('active')
    })
})   
