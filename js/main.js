document.querySelector('input').addEventListener('click', toggleTimeframe)
let currentDisplay = ['yearly', 'monthly']

function toggleTimeframe() {
    const currentlyVisible = Array.from(document.querySelectorAll('.' + currentDisplay[0]))
    const currentlyHidden = Array.from(document.querySelectorAll('.' + currentDisplay[1]))
    currentlyVisible.forEach(elem => elem.style.display = 'none')
    currentlyHidden.forEach(elem => elem.style.display = 'block')
    currentDisplay.reverse()
}