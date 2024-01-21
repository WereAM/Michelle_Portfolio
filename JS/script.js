let sects = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a')

// Change active page
window.onscroll = () => {
    sects.forEach(sect => {
        let start = window.scrollY;
        let offset = sect.offsetTop - 150;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if(start >= offset && start < offset + height){
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}