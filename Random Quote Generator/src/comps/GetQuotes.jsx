export const GetQuotes = async () => {
    const response = await fetch('https://icanhazdadjoke.com/slack', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};
