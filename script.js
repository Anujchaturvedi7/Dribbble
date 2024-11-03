const imagescroll = document.getElementById('imagescroll');
let isLoading = false;

function loadMoreContent() {
    if (isLoading) return;
    isLoading = true;

    setTimeout(() => {
        const newBlock = document.createElement('div');
        newBlock.className = 'block';

        newBlock.innerHTML = `
            <div class="box">
                <img src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=334x416&vertical=center" alt="">
                <div class="box-content">
                    <h5>New Designer</h5>
                    <h5>New Role</h5>
                    <div class="box-content-buttons">
                        <button>Brand</button>
                        <button>Illustration</button>
                        <button>UI</button>
                    </div>
                </div>
            </div>
        `;
   imagescroll.appendChild(newBlock);
        isLoading = false;
    }, 1000); 
}

imagescroll.addEventListener('scroll', () => {

    if (imagescroll.scrollHeight - imagescroll.scrollTop <= imagescroll.clientHeight + 50) {
        loadMoreContent();
    }
});


loadMoreContent();