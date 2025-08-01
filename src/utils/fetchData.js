export const exerciseOptions = {
	method: 'GET',
    params: {
        limit:'50',
        offset: '0'
    },
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};
export const youtubeOptions = {
    method: 'GET',
    headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData=async(url,options)=>{
    try {
        const response = await fetch(url,options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}