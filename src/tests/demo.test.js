describe("Test in the file demo.test", () => {
    test("Should be Equal the strings", () => {
        // 1. start
        const message = "Hello world";
      
        // 2
        const message2 = `Hello world`;
      
        expect(message).toBe(message2);
      });
});


