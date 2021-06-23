export function signUp() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'jdiosajdioasjdikasdjasndjasndjksa',
                user: { 
                    name: "Thiago",
                    email: "tg@gmail.com"
                }
            })
        }, 2000)
    })
}