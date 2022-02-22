	const $$ = query => Array.from(document.querySelectorAll(query))
  let dark_mode = false
  
  $$('[wt-dark_mode]').map(element => {
  	element.onclick = () => {
    	const value = element.getAttribute('wt-dark_mode')
      dark_mode = !dark_mode
      updateDarkMode()
    }
  })
  
  function updateDarkMode(){
    items = $$('.dark_mode')
    console.log(items)
  	if(dark_mode){
    	items.map(item => {
      	item.classList.add('is_dark')
      })
    } else {
    	items.map(item => {
      	item.classList.remove('is_dark')
      })
    }
  }
