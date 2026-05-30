import { BasicProtocals } from './BasicProtocals';

export var ContactMeService = {
    async GetAllMessages() {
        const response = await BasicProtocals.GetProtocal('api/contactme');
        if (response.error) return response;

        console.log('Contact Messages:', response);
        return response;
    },

    async SendMessage(data) {
        const response = await BasicProtocals.PostProtocal('api/contactme', data);
        if (response.error) return response;

        console.log('Message sent successfully:', response);
        return response;
    }
};