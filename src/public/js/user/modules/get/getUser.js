// /c:/Users/Shawn/Documents/GitHub/Uni/src/Interface/public/js/user/modules/user.js

export async function getUser(userId) {
    try {
        const response = await fetch(`/api/user`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}