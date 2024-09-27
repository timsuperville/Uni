export async function getProfile(userId) {
    try {
        const response = await fetch(`/api/user/person/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const profile = await response.json();
        return profile;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}