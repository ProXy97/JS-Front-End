function attachEvents() {
    
    const baseURL = 'http://localhost:3030/jsonstore/blog/';

    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let viewPostBtn = document.getElementById('btnViewPost');
    let selectPosts = document.getElementById('posts');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postCommentsList = document.getElementById('post-comments');

    let allPosts = {};

    loadPostsBtn.addEventListener('click', async () => {

        selectPosts.innerHTML = '';

        const response = await fetch(baseURL + 'posts');
        allPosts = await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)) {
            
            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObj.title;
            selectPosts.appendChild(option);
        }


    });

    viewPostBtn.addEventListener('click', async () => {
        
        postBody.innerHTML = '';
        postCommentsList.innerHTML = '';

        const postId = selectPosts.value;

        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(baseURL + 'comments');
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);
        filteredComments.forEach(comment => {
            const li = document.createElement('li');
            li.id = comment.id;
            li.textContent = comment.text;
            postCommentsList.appendChild(li);
        })

    })


}

attachEvents();