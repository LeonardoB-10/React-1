test("Esta prueba no tieen que fallar ", () => {
    const isActive = true;
    if (!isActive) {
        throw new Error("No esta activo");
    }
});
