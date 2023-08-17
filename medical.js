let htmloutput = 'Patient List'

fetch('./patient_data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(patient => {
            const PatientName = getFullName(patient);
            const PatientNumber = getPhone(patient);
            const PatientNextAppt = getNextAppt(patient);

            let html =  '<ul>' +
            '<li>Name: ' + PatientName + '</li>' +
            '<li>Phone #: ' + PatientNumber + '</li>' +
            '<li>Next Appointment: ' + PatientNextAppt + '</li>' +
            '</ul>';
            
            htmloutput += html;
            console.log(`${PatientName} has an appointment on ${PatientNextAppt}.`)
            console.log(`${PatientName}'s Phone Number: ${PatientNumber}`)
            console.log(` `)
            document.body.innerHTML = htmloutput
        })
    });

    function getFullName(patient) {
        return `${patient.firstname} ${patient.lastname}`;
    }

    function getPhone(patient) {
        return `${patient.phone}`
    }

    function getNextAppt(patient) {
        return `${patient.nextappointment}`
    }

