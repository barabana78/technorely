const IMAGE_API_URL = 'https://picsum.photos/200/300'
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users'
const imageElement = document.getElementById('image')

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть минимум реализованы методы json() и blob()

function myFetch(url, method, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = options
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send()
    })
}

myFetch(JSON_PLACEHOLDER_URL, 'GET', 'json')
    .then(response => {
        console.log('task1_json= ', response)
        return response
    })
    .catch(err => console.log(err))
myFetch(IMAGE_API_URL, 'GET', 'blob')
    .then(response => {
        console.log('task1_blob= ', response)
        return response
    })
    .catch(err => console.log(err))

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)

myFetch(IMAGE_API_URL, 'GET', 'blob')
    .then(response => {
        let reader = new FileReader()
        reader.readAsDataURL(response)
        reader.onload = function (event) {
            insertImage(event.target.result)
            console.log('DataURL:', event);
        };

    })
    .catch(err => console.log(err))

function insertImage(src) {
    imageElement.src = src
}
