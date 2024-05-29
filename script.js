// script.js

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;
        
        if (postTitle && postContent) {
            const post = document.createElement('div');
            post.classList.add('post');
            
            const postTitleElem = document.createElement('h3');
            postTitleElem.textContent = postTitle;
            
            const postContentElem = document.createElement('p');
            postContentElem.textContent = postContent;
            
            post.appendChild(postTitleElem);
            post.appendChild(postContentElem);
            
            postsContainer.appendChild(post);
            
            postForm.reset();
        }
    });
});
