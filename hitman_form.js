document.addEventListener("DOMContentLoaded", function () {
    const deathProofSelect = document.getElementById("deathProof");
    const proofDetailsContainer = document.getElementById("proofDetailsContainer");
    const proofDetailsTextarea = document.getElementById("proofDetails");
    const liveProofContainer = document.getElementById("liveProofContainer");
    const liveProofSelect = document.getElementById("liveProof");
    const dropSpotContainer = document.getElementById("dropSpotContainer");

    deathProofSelect.addEventListener("change", function () {
        const selectedValue = deathProofSelect.value;
        if (selectedValue === "yes") {
            proofDetailsContainer.style.display = "block";
            proofDetailsTextarea.disabled = false;
            liveProofContainer.style.display = "block";
        } else {
            proofDetailsContainer.style.display = "none";
            proofDetailsTextarea.disabled = true;
            liveProofContainer.style.display = "none";
            dropSpotContainer.style.display = "none";
        }
    });

    liveProofSelect.addEventListener("change", function () {
        const selectedValue = liveProofSelect.value;
        if (selectedValue === "live") {
            dropSpotContainer.style.display = "block";
        } else {
            dropSpotContainer.style.display = "none";
        }
    });

    // Form submission logic
    const hitmanForm = document.getElementById("hitmanForm");
    hitmanForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Perform form submission logic here
        // Redirect to success page after submission
        window.location.href = "success.html";
    });

    const queryParams = new URLSearchParams(window.location.search);

    // Populate form fields with retrieved values
    document.getElementById('name').value = queryParams.get('name');
    document.getElementById('weapon').value = queryParams.get('weapon');
    document.getElementById('location').value = queryParams.get('location');
    document.getElementById('proof').value = queryParams.get('proof');

    // Show/hide live proof section based on proof selection
    const liveProofSection = document.getElementById('liveProofSection');
    const proofSelect = document.getElementById('proof');
    proofSelect.addEventListener('change', () => {
        if (proofSelect.value === 'yes') {
            liveProofSection.style.display = 'block';
        } else {
            liveProofSection.style.display = 'none';
        }
    });
});
