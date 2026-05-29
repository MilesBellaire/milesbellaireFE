import { BasicProtocals } from './BasicProtocals';

export var ContactMeService = {
    async SendEmail(email, name, message) {
        const response = await BasicProtocals.PostProtocal('api/contact-me', {email, name, message});
        if(response.error) return response;
        return response;   
    }
}