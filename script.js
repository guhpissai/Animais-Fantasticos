function initTabNav() {
  const tabmenu = document.querySelectorAll('.js-tabmenu li')
  const tabcontent = document.querySelectorAll('.js-tabcontent section')

  if(tabmenu.length && tabcontent.length) {
    const activeClass = 'active'
    tabcontent[0].classList.add(activeClass);
    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove(activeClass)
      })
      tabcontent[index].classList.add(activeClass)
    }

    tabmenu.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

initTabNav()

function initListNav() {
  const listmenu = document.querySelectorAll('.js-faqlista dt')
  const activeClass = 'active'

  if(listmenu.length) {
    function activeList() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  
    listmenu.forEach((list, index) => {
      list.addEventListener('click', activeList)
    })
  }
}

initListNav();

function smoothScroll() {
  const links = document.querySelectorAll('.js-menu a[href^="#"')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  links.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}

smoothScroll();

