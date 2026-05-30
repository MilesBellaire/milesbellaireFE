
export var BasicProtocals = {

    async GetProtocal(url) {
        try {
            const response = await fetch('/' + url);
            if (response.ok) {
                const data = await response.json();

                return data;
            } else if (response.status === 429) {
                console.error('Rate limited:', response.status);
                return {error: 'Too many requests. Please try again later.'};
            } else {
                console.error('Failed to fetch data:', response.status);
                return {error: response.status};
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return {error: error.message};
        }
    },

    async PostProtocal(url, data) {
        try {
            const response = await fetch('/' + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return result;
            } else if (response.status === 429) {
                console.error('Rate limited:', response.status);
                return {error: 'Too many requests. Please try again later.'};
            } else {
                console.error('Failed to post data:', response.status);
                return {error: response.status};
            }
        } catch (error) {
            console.error('Error posting data:', error.message);
            return {error: error.message};
        }
    }

}