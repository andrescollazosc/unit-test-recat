const { getImagen } = require("../../base/11-async-await");

describe('Test with Async-await', () => {
    test('should be return the image url', async() => {
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);
    });
});