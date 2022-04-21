function wt_dark_toggle(){
    const items = Array.from(document.querySelectorAll('body *, body'))    
    console.log(items)
    items.map(item => {
        item.classList.toggle('wt_dark')
    })
}
