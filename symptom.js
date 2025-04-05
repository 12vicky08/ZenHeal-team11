document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('symptomForm');
    const steps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step');
    
    // Sample symptoms data
    const symptoms = {
        head: ['Headache', 'Dizziness', 'Blurred Vision', 'Ear Pain'],
        chest: ['Chest Pain', 'Shortness of Breath', 'Cough', 'Heart Palpitations'],
        abdomen: ['Stomach Pain', 'Nausea', 'Bloating', 'Loss of Appetite'],
        limbs: ['Joint Pain', 'Muscle Aches', 'Swelling', 'Weakness']
    };

    // Handle body part selection
    const bodyPartSelect = document.getElementById('bodyPart');
    const symptomsContainer = document.querySelector('.symptom-checkboxes');

    bodyPartSelect.addEventListener('change', function() {
        const selectedPart = this.value;
        updateSymptoms(selectedPart);
    });

    function updateSymptoms(bodyPart) {
        symptomsContainer.innerHTML = '';
        symptoms[bodyPart].forEach(symptom => {
            const div = document.createElement('div');
            div.innerHTML = `
                <label>
                    <input type="checkbox" name="symptoms" value="${symptom}">
                    ${symptom}
                </label>
            `;
            symptomsContainer.appendChild(div);
        });
    }

    // Initialize with first body part
    updateSymptoms('head');

    // Navigation between steps
    const nextButtons = document.querySelectorAll('.next-btn');
    const backButtons = document.querySelectorAll('.back-btn');
    const startOverButton = document.querySelector('.start-over-btn');

    let currentStep = 0;

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                steps[currentStep].classList.add('hidden');
                currentStep++;
                steps[currentStep].classList.remove('hidden');
                updateStepIndicators();
                if (currentStep === 2) {
                    showResults();
                }
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            steps[currentStep].classList.add('hidden');
            currentStep--;
            steps[currentStep].classList.remove('hidden');
            updateStepIndicators();
        });
    });

    startOverButton.addEventListener('click', () => {
        currentStep = 0;
        steps.forEach(step => step.classList.add('hidden'));
        steps[0].classList.remove('hidden');
        updateStepIndicators();
        form.reset();
    });

    function updateStepIndicators() {
        stepIndicators.forEach((indicator, index) => {
            if (index === currentStep) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function validateStep(step) {
        if (step === 0) {
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            if (!age || !gender) {
                alert('Please fill in all fields');
                return false;
            }
        } else if (step === 1) {
            const checkedSymptoms = document.querySelectorAll('input[name="symptoms"]:checked');
            if (checkedSymptoms.length === 0) {
                alert('Please select at least one symptom');
                return false;
            }
        }
        return true;
    }

    function showResults() {
        const resultsContainer = document.querySelector('.results-container');
        const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked'))
            .map(checkbox => checkbox.value);
        
        // Simple mock results - in a real application, this would be based on a medical database
        const mockResults = [
            {
                condition: 'Migraine',
                probability: 'High',
                description: 'Severe headache, visual disturbances, dizziness, nausea.'
            },
            {
                condition: 'Seasonal Allergies',
                probability: 'Medium',
                description: 'An allergic response to environmental triggers.'
            },
            {
                condition: 'Stress',
                probability: 'Medium',
                description: 'Physical and emotional symptoms caused by stress.'
            }
        ];

        resultsContainer.innerHTML = `
            <h3>Based on your symptoms:</h3>
            <ul class="results-list">
                ${mockResults.map(result => `
                    <li>
                        <h4>${result.condition}</h4>
                        <p>Probability: ${result.probability}</p>
                        <p>${result.description}</p>
                    </li>
                `).join('')}
            </ul>
            <p class="warning">
                Please consult with a healthcare provider for accurate diagnosis and treatment.
                This tool is for informational purposes only.
            </p>
        `;
    }
});