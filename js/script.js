let appendCount = 0; 

const displayPosts = (posts, postContainer) => {
    postContainer.innerHTML = '';

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = `rounded-xl border-2 p-6 bg-gray-300 card mb-8`;
        postCard.innerHTML = `
            <div class="card-container flex text-center gap-8">
                <div class="image-div">
                    <div>
                        <img class="rounded-2xl w-16 h-16" src="${post.image}">
                    </div>
                    <div class="circle-div">
                        <i class="fa-solid fa-circle" id="circle-icon-${post.id}"></i>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex gap-4">
                        <p># <span id="category">${post.category}</span></p>
                        <p>Author: <span id="author">${post.author.name}</span></p>
                    </div>
                    <h2 class="text-xl text-start font-extrabold text-heading py-4">${post.title}</h2>
                    <div> 
                        <p class="text-gray-600 text-start">${post.description}</p>
                    </div>
                    
                    <hr class="border-dashed pt-4 pb-4">
                    
                    <div class="flex justify-between items-center gap-12">
                        <div class="flex items-center">
                            <span class="pr-4"><i class="fa-regular fa-message pr-2"></i>${post.comment_count}</span>
                            <span class="pr-4"><i class="fa-solid fa-eye pr-2"></i>${post.view_count}</span>
                            <span><i class="fa-regular fa-clock pr-2"></i>${post.posted_time}</span>
                        </div>
                        <div class="flex items-center justify-end">
                            <button class="btn btn-circle read-done-btn" data-title="${post.title}" data-view-count="${post.view_count}">
                                <i class="fa-solid fa-envelope-circle-check text-green-500"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        postContainer.appendChild(postCard);
        
        // Get the circleIcon for this post
        var circleIcon = document.getElementById(`circle-icon-${post.id}`);
        var isActive = post.isActive;

        // Add class based on the value of isActive
        if (isActive) {
            circleIcon.classList.add("fa-circle-green");
        } else {
            circleIcon.classList.add("fa-circle-red");
        }
    });

     // Add event listener to "Mark as read" buttons
     const readDoneButtons = document.querySelectorAll('.read-done-btn');
     readDoneButtons.forEach(button => {
         button.addEventListener('click', () => {
             appendCount++;
             document.getElementById('read-count').textContent = `(${appendCount})`;
 
             // Append HTML for the read post
             const title = button.getAttribute('data-title');
             const viewCount = button.getAttribute('data-view-count');
             const readPostHTML = `
                 <div class="bg-white p-4 flex justify-between items-center text-center rounded-xl mt-4">
                     <h2 class="text-xl font-extrabold text-heading py-4">${title}</h2>
                     <p><span class="pr-4"><i class="fa-solid fa-eye pr-2"></i>${viewCount}</span></p>
                 </div>
             `;
             document.getElementById('read-post').insertAdjacentHTML('beforeend', readPostHTML);
         });
     });
 };