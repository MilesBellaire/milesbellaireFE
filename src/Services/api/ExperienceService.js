import { BasicProtocals } from './BasicProtocals';

export var ExperienceService = {
    async GetWorkExperience() {
        const response = await BasicProtocals.GetProtocal('api/work-experience');
        if(response.error) return response;

        const itemsWithImages = response.map(item => {
            const imageFile = 'data:image/png;base64,' + item.image;
            return {
                ...item,
                image: imageFile,
            };
        });
        console.log('Work Experience:', itemsWithImages);
        return itemsWithImages;
    },
    async GetPersonalProjects() {
        const response = await BasicProtocals.GetProtocal('api/personal-project');

        const itemsWithImages = response.map(item => {
            const imageFile = 'data:image/png;base64,' + item.image;
            return {
                ...item,
                image: imageFile,
            };
        });
        console.log('Work Experience:', itemsWithImages);
        return itemsWithImages;
    }
}