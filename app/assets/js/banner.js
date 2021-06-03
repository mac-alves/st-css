let banerActve = 0;
let timeEndScroll;

const items = document.querySelector('#items');
const posItems = items.getBoundingClientRect();
const listItem = items.querySelectorAll('.item');

console.log(posItems);

function changeWhell(event){    
    clearTimeout(timeEndScroll);

    if (event.deltaY > 0){
        event.target.scrollBy(300, 0)
    }

    if (event.deltaY <= 0){
        event.target.scrollBy(-300, 0)
    }


    timeEndScroll = setTimeout(() => {
        listItem.forEach(item => {
            const positions = item.getBoundingClientRect();
            console.log(positions);
            
            if (posItems.x === positions.x){
                // console.log(positions);
                console.log(item);
            }
        })
    }, 250);
}

items.addEventListener('wheel', changeWhell);