
document.querySelector('.barometer-button').addEventListener('click', () => {
    const overlay = document.getElementById('harmoniebarometer');
    overlay.style.display = 'block';

    const data = {
        hunger: { level: "🔶 Mäßig", description: "720 Mio. Menschen weltweit leiden unter chronischem Hunger." },
        armut: { level: "🔴 Hoch", description: "Über 1,2 Mrd. Menschen leben unterhalb der Armutsgrenze." },
        krieg: { level: "🔴 Sehr hoch", description: "Über 30 bewaffnete Konflikte weltweit." },
        umwelt: { level: "🟠 Kritisch", description: "CO₂-Werte steigen trotz Klimazielen weiter." }
    };

    const container = document.getElementById('barometer-content');
    container.innerHTML = '';

    for (let [key, value] of Object.entries(data)) {
        const section = document.createElement('div');
        section.innerHTML = `<h3>${key.toUpperCase()}</h3><p>${value.level}</p><p>${value.description}</p><hr>`;
        section.style.marginBottom = '20px';
        container.appendChild(section);
    }
});
