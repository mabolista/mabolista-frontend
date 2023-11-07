const nav = document.querySelector('.nav') // Replace with your navigation element
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('bg-blur') // Add the "bg-blur" class when scrolling
  } else {
    nav.classList.remove('bg-blur') // Remove the "bg-blur" class when at the top
  }
})
