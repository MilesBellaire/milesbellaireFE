
export var BasicProtocals = {

    async GetProtocal(url) {
        try {
            const response = await fetch('http://localhost:5084/' + url);
            if (response.ok) {
                const data = await response.json();
    
                return data;
            } else {
                console.error('Failed to fetch data:', response.status);
                return {error: response.status};
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return {error: error.message};
        }
    }
    
}