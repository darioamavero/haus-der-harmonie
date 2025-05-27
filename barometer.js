
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.barometer-button');
    const overlay = document.getElementById('harmoniebarometer');
    const closeBtn = document.getElementById('close-barometer');
    const container = document.getElementById('barometer-content');

    if (!button || !overlay || !container || !closeBtn) return;

    const data = {
        hunger: {
            level: "🔶 Mäßig",
            description: "Etwa 720 Millionen Menschen weltweit leiden unter chronischem Hunger."
        },
        armut: {
            level: "🔴 Hoch",
            description: "Über 1,2 Milliarden Menschen leben unterhalb der Armutsgrenze."
        },
        krieg: {
            level: "🔴 Sehr hoch",
            description: "Derzeit gibt es über 30 bewaffnete Konflikte auf der Welt."
        },
        umwelt: {
            level: "🟠 Kritisch",
            description: "Die CO₂-Werte steigen weiterhin trotz globaler Klimabemühungen."
        }
    };

    button.addEventListener('click', () => {
        overlay.style.display = 'flex';
        container.innerHTML = '';

        for (let [key, value] of Object.entries(data)) {
            const section = document.createElement('div');
            section.innerHTML = `
                <h3 style="margin-bottom: 5px;">${key.toUpperCase()}</h3>
                <p><strong>${value.level}</strong></p>
                <p>${value.description}</p>
                <hr style="margin: 20px 0;">
            `;
            section.style.marginBottom = '10px';
            container.appendChild(section);
        }
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});
