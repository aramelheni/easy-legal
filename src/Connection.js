const serverPath = "http://localhost:6005/api";

export function httpGet(path, handler, errorHandler) {
    const getCall = async () => {
        try {
            const response = await fetch(serverPath + path);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const reponse = await response.json();
            handler(reponse);
        } catch (error) {
            errorHandler(error);
        }
    };

    getCall();
}

export function httpPost(path, body, handler, errorHandler) {
    const postCall = async () => {
        try {
            const response = await fetch(serverPath + path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const reponse = await response.json();
            handler(reponse);
        } catch (error) {
            errorHandler(error);
        }
    };

    postCall();
}