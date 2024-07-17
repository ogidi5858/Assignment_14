document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    const datefill = document.getElementById('datefill');
    const completingform = document.getElementById('completingform');
    const healthprovider = document.getElementById('healthprovider');
    const contactphonenumber = document.getElementById('contactphonenumber');
    const fname = document.getElementById('fname');
    const dob = document.getElementById('dob');
    const gender = document.getElementsByName('gender');
    const ethnicity = document.getElementsByName('ethnicity');
    const race = document.getElementsByName('race');
    const sexpartners = document.getElementsByName('sexpartners');
    const reasonforexam = document.getElementsByName('reasonforexam');
    const diagnosis = document.getElementsByName('diagnosis');
    const site = document.getElementsByName('site');

    const date_err = document.getElementById('date_err');
    const complete_err = document.getElementById('complete_err');
    const provider_err = document.getElementById('provider_err');
    const contact_err = document.getElementById('contact_err');
    const fullname_err = document.getElementById('fullname_err');
    const birth_err = document.getElementById('birth_err');
    const genderidentity_err = document.getElementById('genderidentity_err');
    const ethnicity_err = document.getElementById('ethnicity_err');
    const raceErr = document.getElementById('raceErr');
    const sexpartnersErr = document.getElementById('sexpartnersErr');
    const reasonErr = document.getElementById('reasonErr');
    const diagnosisErr = document.getElementById('diagnosisErr');
    const siteErr = document.getElementById('siteErr');

    form.addEventListener('submit', function(e) {
        let valid = true;

        if (datefill.value === '' || datefill.value == null) {
            valid = false;
            date_err.innerHTML = "Required";
        } else {
            date_err.innerHTML = "";
        }

        if (completingform.value === '' || completingform.value == null) {
            valid = false;
            complete_err.innerHTML = "Required";
        } else {
            complete_err.innerHTML = "";
        }

        if (healthprovider.value === '' || healthprovider.value == null) {
            valid = false;
            provider_err.innerHTML = "Required";
        } else {
            provider_err.innerHTML = "";
        }

        if (contactphonenumber.value === '' || contactphonenumber.value == null) {
            valid = false;
            contact_err.innerHTML = "Required";
        } else {
            contact_err.innerHTML = "";
        }

        if (fname.value === '' || fname.value == null) {
            valid = false;
            fullname_err.innerHTML = "<br/>Name is required";
        } else {
            fullname_err.innerHTML = "";
        }

        if (dob.value === '' || dob.value == null) {
            valid = false;
            birth_err.innerHTML = "Required";
        } else {
            birth_err.innerHTML = "";
        }

        if (!Array.from(gender).some(e => e.checked)) {
            valid = false;
            genderidentity_err.innerHTML = "<br/>This field is required";
        } else {
            genderidentity_err.innerHTML = "";
        }

        if (!Array.from(ethnicity).some(e => e.checked)) {
            valid = false;
            ethnicity_err.innerHTML = "<br/>This field is required";
        } else {
            ethnicity_err.innerHTML = "";
        }

        if (!Array.from(race).some(r => r.checked)) {
            valid = false;
            raceErr.innerHTML = "<br/>This field is required";
        } else {
            raceErr.innerHTML = "";
        }

        if (!Array.from(sexpartners).some(sp => sp.checked)) {
            valid = false;
            sexpartnersErr.innerHTML = "<br/>This field is required";
        } else {
            sexpartnersErr.innerHTML = "";
        }

        if (!Array.from(reasonforexam).some(rfe => rfe.checked)) {
            valid = false;
            reasonErr.innerHTML = "<br/>This field is required";
        } else {
            reasonErr.innerHTML = "";
        }

        if (!Array.from(diagnosis).some(d => d.checked)) {
            valid = false;
            diagnosisErr.innerHTML = "<br/>This field is required";
        } else {
            diagnosisErr.innerHTML = "";
        }

        if (!Array.from(site).some(s => s.checked)) {
            valid = false;
            siteErr.innerHTML = "<br/>This field is required";
        } else {
            siteErr.innerHTML = "";
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    function validatefn() {
        let namepattern = /^[A-Za-z\s]*$/;
        let fullname = document.forms.personalinfo.fullname.value;
        if (fullname) {
            let x = namepattern.test(fullname);
            if (x == false) {
                fullname_err.innerHTML = "<br/>(only letters and spaces)";
                document.forms.personalinfo.fullname.focus();
            } else {
                fullname_err.innerHTML = "";
                document.forms.personalinfo.fullname.style.borderColor = "green";
            }
        }
    }

    document.forms.personalinfo.fullname.addEventListener('input', validatefn);
});