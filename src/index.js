console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then((resp) => resp.json())
        .then((data) => handlesImg(data))
    function handlesImg(imgs) {
        const newImgDiv = document.getElementById("dog-image-container")
        imgs.message.forEach(newData => {
            let newImg = document.createElement('img')
            newImg.src = newData
            newImgDiv.appendChild(newImg)

        });
        
        
    }  
    const dogBreeds = "https://dog.ceo/api/breeds/list/all"
        fetch(dogBreeds)
        .then((resp) => resp.json())
        .then((data) => listDogBreeds(data))
     function listDogBreeds(breeds) {
        let ul = document.getElementById("dog-breeds")
        let objKeys = Object.keys(breeds.message)
        let dropDown = document.querySelector('select')
        objKeys.forEach(newData => {
            let li = document.createElement('li')
            li.textContent = newData
            ul.appendChild(li)
            function changeLiColor() {
                li.style.color = ('gray')
            }
            li.addEventListener('click', changeLiColor)
            
        })
        dropDown.addEventListener('change', (e) => handleFil(e))
        function handleFil(e) {
            ul.textContent = ""
            let newBreedData = objKeys.filter((breeds) => {
                if (breeds.charAt(0) === e.target.value) {
                    return true 
                } else return false
                
            })
            newBreedData.forEach(newData => {
                let li = document.createElement('li')
                li.textContent = newData
                ul.appendChild(li)
                function changeLiColor() {
                li.style.color = ('gray')
            }
            li.addEventListener('click', changeLiColor)
            })
            
        }
     }
        
       

        
        
})