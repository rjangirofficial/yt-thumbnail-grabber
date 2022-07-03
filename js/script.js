let video_id = document.getElementById('video_id')
        let get_thumbnail_btn = document.getElementById('get_thumbnail')

        get_thumbnail_btn.addEventListener('click', () => {
            if (video_id.value == "") {
                alert('Input Field Is Empty')
            } else {
                let img_1 = document.getElementsByTagName('img')[1]
                img_1.src = `https://img.youtube.com/vi/${video_id.value}/maxresdefault.jpg`
                img_1.style.display = 'block'
            }
        })