import {LibreLinkUpClient} from '@diakem/libre-link-up-api-client';

(async function () {
    // LibreLinkUp credentials
    const username = 'mail@provider.com';
    const password = '!passw0rd$';

    // Setup client
    const {read} = LibreLinkUpClient({username, password});

    // Read glucose data
    const response = await read();

    // Log it!
    console.log(response);
})();