import {tutorInfo, subjectDict} from "./data.js";

const select = document.querySelector("sl-select")
await customElements.whenDefined("sl-select")
await select.updateComplete
select.popup.flip = false
select.addEventListener('sl-change', () => {
    if (select.value === "") {
        document.getElementById('tutor-profiles').innerHTML = '';
    } else {
        document.getElementById('tutor-profiles').innerHTML = '';

        for (let i = 0; i < subjectDict[select.value]['tutors'].length; i++) {
            const card = document.createElement('sl-card');
            const tutor = subjectDict[select.value]['tutors'][i];

            card.className = 'card-overview';
            card.style = `margin-right: 16px`;
            card.innerHTML = `
                    <img
                        slot="image"
                        src="../assets/images/people/${tutor}-full.jpg"
                        alt="${tutorInfo[tutor]['name']} Banner Image"
                    />

                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <strong>${tutorInfo[tutor]['name']}</strong><br />
                            ${subjectDict[select.value]['shortName']} (${tutorInfo[tutor]['subjects'][select.value]})<br />
                            <small>${tutorInfo[tutor]['atar']}</small>
                        </div>

                        <sl-button variant="primary" href="./${tutor}">More Info</sl-button>
                    </div>
                `;

            document.getElementById('tutor-profiles').appendChild(card);
        }
    }
});
