let unreadMessages = document.querySelectorAll(".unread");
let markRead = document.querySelector("#markRead");
let notifications = document.querySelector("#notifications");

notifications.textContent = 3;

unreadMessages.forEach((message) => {
    message.addEventListener("click", function () {
        if(notifications.textContent > 0){
            this.classList.remove("unread");
            notifications.textContent --;
        }
        
    });
});

markRead.addEventListener("click", () => {
    unreadMessages.forEach((message) => {
        message.classList.remove("unread");
        notifications.textContent = 0;
    });
});
