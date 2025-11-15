export async function retry<T>(fn: () => Promise<T>, attempts = 3, delayMs = 300): Promise<T> {
    let err;

    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (e) {
            err = e;
            await new Promise(res => setTimeout(res, delayMs));
        }
    }

    throw err;
}