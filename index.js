

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

//////

const WT_Initialize = (Values) => {    
  window.WT_Data = new Proxy(Values,{
      get: (obj, prop) => {
          return obj[prop]()
      },
      set: (obj, prop, value) => {
          obj[prop] = () => value
          Update()
          return obj[prop]
      }
  })

  const App = (update = () => {}) => (action = () => {}) => {
      action()
      update()
  }

  const Update = App(() => {
      const Each = (query, action) => Array
          .from(document.querySelectorAll(query))
          .map(item => action(item))

      Each('[wt-bind]', item => {
          let variable = item.getAttribute('wt-bind')
          
          item.oninput = () => {                
              WT_Data[variable] = item.value
          }
          item.value = WT_Data[variable]
      })

      Each('[wt-edit]', item => {
          let variable = item.getAttribute('wt-edit')
          
          item.oninput = () => {
              WT_Data[variable] = item.innerText
          }
          item.innerText = WT_Data[variable]
      })

      Each('[wt-text]', item => {
          let variable = item.getAttribute('wt-text')            
          item.innerText = WT_Data[variable]
      })
  })		

  Update()
}

////
