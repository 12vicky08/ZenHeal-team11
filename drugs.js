// Drug database - in a real application, this would come from a server/API
const drugDatabase = {
    "lisinopril": {
        name: "Lisinopril",
        genericName: "Lisinopril (ACE Inhibitor)",
        description: "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor that is used to treat high blood pressure (hypertension) and heart failure. It works by relaxing blood vessels so that blood can flow more easily.",
        uses: [
            "Treatment of high blood pressure (hypertension)",
            "Treatment of heart failure",
            "Improving survival after a heart attack",
            "Protection of the kidneys in people with diabetes"
        ],
        important: "Do not take lisinopril if you are pregnant as it can harm the unborn baby. If you become pregnant, stop taking this medicine and tell your doctor right away.",
        howToTake: "Take lisinopril exactly as prescribed by your doctor. Follow all directions on your prescription label. Your doctor may occasionally change your dose. Take lisinopril at the same time each day, with or without food.",
        dosages: [
            "For high blood pressure: 10-40 mg once daily",
            "For heart failure: 5-20 mg once daily",
            "For heart attack: 5 mg within 24 hours, followed by 5 mg after 24 hours, 10 mg after 48 hours, then 10 mg once daily"
        ],
        missedDose: "Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take extra medicine to make up the missed dose.",
        commonSideEffects: [
            "Dizziness or lightheadedness",
            "Dry cough",
            "Headache",
            "Fatigue",
            "Nausea, vomiting, diarrhea"
        ],
        seriousSideEffects: [
            "Swelling of face, lips, tongue, or throat",
            "Difficulty breathing or swallowing",
            "Severe dizziness",
            "Fainting",
            "Chest pain",
            "Irregular heartbeat"
        ],
        warning: "Lisinopril can cause injury or death to the unborn baby if you take the medicine during your second or third trimester. Stop using this medicine and tell your doctor right away if you become pregnant.",
        interactions: [
            "Potassium supplements",
            "Salt substitutes containing potassium",
            "Diuretics (water pills)",
            "Lithium",
            "NSAIDs (such as ibuprofen, naproxen)",
            "Aliskiren"
        ],
        foodInteractions: "Avoid salt substitutes that contain potassium. Lisinopril can increase potassium levels in your body.",
        conditions: [
            "Kidney disease",
            "Liver disease",
            "Heart disease",
            "Diabetes",
            "Connective tissue disease",
            "Bone marrow suppression"
        ],
        imageUrl: "/placeholder.svg?height=300&width=300"
    },
    "metformin": {
        name: "Metformin",
        genericName: "Metformin (Biguanide)",
        description: "Metformin is an oral diabetes medicine that helps control blood sugar levels. It is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.",
        uses: [
            "Treatment of type 2 diabetes",
            "Prevention of type 2 diabetes in high-risk individuals",
            "Treatment of polycystic ovary syndrome (PCOS)",
            "Weight management in some cases"
        ],
        important: "Metformin can cause a rare but serious condition called lactic acidosis. Get emergency medical help if you have unusual muscle pain, trouble breathing, stomach pain, dizziness, feeling cold, or feeling very weak or tired.",
        howToTake: "Take metformin with meals to reduce stomach or bowel side effects. Swallow extended-release tablets whole. Follow your doctor's instructions about the type and amount of liquids you should drink while taking metformin.",
        dosages: [
            "Initial dose: 500 mg twice daily or 850 mg once daily",
            "Maintenance dose: 2000-2550 mg per day divided into 2-3 doses",
            "Extended-release: 500-2000 mg once daily with the evening meal"
        ],
        missedDose: "Take the missed dose as soon as you remember (with food). Skip the missed dose if it is almost time for your next scheduled dose. Do not take extra medicine to make up the missed dose.",
        commonSideEffects: [
            "Nausea, vomiting",
            "Stomach upset, diarrhea",
            "Loss of appetite",
            "Metallic taste in mouth",
            "Headache"
        ],
        seriousSideEffects: [
            "Lactic acidosis (rare but serious): unusual muscle pain, trouble breathing, stomach pain, dizziness, feeling cold, feeling very weak or tired",
            "Hypoglycemia (low blood sugar)",
            "Vitamin B12 deficiency",
            "Allergic reactions"
        ],
        warning: "Metformin may cause a rare but serious condition called lactic acidosis. Older adults, people with kidney or liver problems, and those who drink alcohol frequently are at higher risk.",
        interactions: [
            "Certain diabetes medications",
            "Diuretics (water pills)",
            "Corticosteroids",
            "Certain blood pressure medications",
            "Iodinated contrast agents used for certain imaging tests",
            "Certain antibiotics and antifungals"
        ],
        foodInteractions: "Alcohol can increase the risk of lactic acidosis. Limit or avoid alcohol while taking metformin.",
        conditions: [
            "Kidney disease",
            "Liver disease",
            "Heart failure",
            "History of lactic acidosis",
            "Alcoholism",
            "Planned surgery or medical tests"
        ],
        imageUrl: "/placeholder.svg?height=300&width=300"
    },
    "atorvastatin": {
        name: "Atorvastatin",
        genericName: "Atorvastatin (Statin)",
        description: "Atorvastatin belongs to a group of drugs called HMG CoA reductase inhibitors, or 'statins.' It works by reducing the amount of cholesterol made by the liver and helps remove cholesterol that has built up in the walls of blood vessels.",
        uses: [
            "Lowering high cholesterol and triglycerides",
            "Reducing the risk of heart attack, stroke, and other heart complications",
            "Prevention of cardiovascular disease",
            "Treatment of certain types of familial hypercholesterolemia"
        ],
        important: "Avoid eating foods high in fat or cholesterol, or atorvastatin will not be as effective. Avoid drinking alcohol while taking atorvastatin as it can raise triglyceride levels and may increase your risk of liver damage.",
        howToTake: "Take atorvastatin at the same time every day, with or without food. Do not break or crush the tablet. Follow your doctor's instructions about diet and exercise.",
        dosages: [
            "Initial dose: 10-20 mg once daily",
            "Maintenance dose: 10-80 mg once daily",
            "Maximum dose: 80 mg once daily"
        ],
        missedDose: "Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take extra medicine to make up the missed dose.",
        commonSideEffects: [
            "Muscle or joint pain",
            "Diarrhea or constipation",
            "Nausea",
            "Headache",
            "Mild skin rash"
        ],
        seriousSideEffects: [
            "Muscle pain, tenderness, or weakness with fever or unusual tiredness (may be signs of a rare but serious condition called rhabdomyolysis)",
            "Liver problems: nausea, upper stomach pain, itching, tired feeling, loss of appetite, dark urine, clay-colored stools, jaundice (yellowing of the skin or eyes)",
            "Memory problems or confusion",
            "Diabetes symptoms: increased thirst, increased urination, hunger, dry mouth, fruity breath odor"
        ],
        warning: "Atorvastatin can cause the breakdown of skeletal muscle tissue, leading to kidney failure. Call your doctor right away if you have unexplained muscle pain, tenderness, or weakness especially if you also have fever, unusual tiredness, or dark urine.",
        interactions: [
            "Certain antibiotics (erythromycin, clarithromycin)",
            "Antifungal medications (itraconazole, ketoconazole)",
            "HIV/AIDS medications",
            "Hepatitis C medications",
            "Other cholesterol-lowering medications (gemfibrozil, niacin)",
            "Certain heart medications (digoxin, diltiazem, verapamil)"
        ],
        foodInteractions: "Grapefruit and grapefruit juice can interact with atorvastatin and lead to potentially dangerous effects. Avoid or limit consumption of grapefruit products while taking this medication.",
        conditions: [
            "Liver disease",
            "Kidney disease",
            "Diabetes",
            "Thyroid disorder",
            "History of muscle pain or weakness",
            "If you drink more than 2 alcoholic beverages daily"
        ],
        imageUrl: "/placeholder.svg?height=300&width=300"
    },
    "ibuprofen": {
        name: "Ibuprofen",
        genericName: "Ibuprofen (NSAID)",
        description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID). It works by reducing hormones that cause inflammation and pain in the body.",
        uses: [
            "Relief of pain from various conditions",
            "Reduction of fever",
            "Treatment of inflammation",
            "Management of menstrual cramps",
            "Relief of minor aches and pains due to the common cold or flu"
        ],
        important: "Ibuprofen may increase your risk of heart attack or stroke, especially if you use it long term or have heart disease. Do not use this medicine just before or after heart bypass surgery (coronary artery bypass graft, or CABG).",
        howToTake: "Take ibuprofen with food or milk to prevent stomach upset. Take the lowest effective dose for the shortest duration possible to minimize risk of cardiovascular or gastrointestinal adverse events.",
        dosages: [
            "Adults: 200-400 mg every 4-6 hours as needed (not to exceed 3200 mg per day)",
            "Children: Dosage based on weight and age, as directed by a doctor"
        ],
        missedDose: "Since ibuprofen is used when needed, you may not be on a dosing schedule. If you are on a schedule, take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose.",
        commonSideEffects: [
            "Upset stomach, mild heartburn",
            "Nausea, vomiting",
            "Bloating, gas, diarrhea, constipation",
            "Dizziness, headache",
            "Mild rash"
        ],
        seriousSideEffects: [
            "Chest pain, shortness of breath, slurred speech, problems with vision or balance (signs of heart attack or stroke)",
            "Bloody or tarry stools, coughing up blood or vomit that looks like coffee grounds (signs of bleeding in your stomach or intestines)",
            "Swelling or rapid weight gain",
            "Skin rash, itching, blistering, peeling, loosening of skin, with or without fever",
            "Yellowing of skin or eyes, dark urine, clay-colored stools (signs of liver problems)"
        ],
        warning: "NSAIDs like ibuprofen may increase the risk of heart attack or stroke, especially with long-term use or in people with heart disease or risk factors for heart disease. NSAIDs may also cause stomach or intestinal bleeding, which can be fatal.",
        interactions: [
            "Aspirin",
            "Blood thinners (warfarin, Coumadin)",
            "Steroids",
            "ACE inhibitors",
            "Diuretics (water pills)",
            "Lithium",
            "Methotrexate"
        ],
        foodInteractions: "Alcohol can increase your risk of stomach bleeding while taking ibuprofen. Limit or avoid alcohol consumption.",
        conditions: [
            "History of heart attack, stroke, or blood clots",
            "Heart disease, congestive heart failure, high blood pressure",
            "History of stomach ulcers or bleeding",
            "Asthma",
            "Liver or kidney disease",
            "Pregnancy (especially in the third trimester)"
        ],
        imageUrl: "/placeholder.svg?height=300&width=300"
    },
    "amoxicillin": {
        name: "Amoxicillin",
        genericName: "Amoxicillin (Penicillin Antibiotic)",
        description: "Amoxicillin is a penicillin antibiotic that fights bacteria in the body. It is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.",
        uses: [
            "Treatment of bacterial infections",
            "Ear infections",
            "Urinary tract infections",
            "Sinusitis",
            "Strep throat",
            "Pneumonia",
            "Skin infections"
        ],
        important: "Amoxicillin will not treat a viral infection such as the common cold or flu. Misuse of antibiotics can lead to antibiotic resistance.",
        howToTake: "Take amoxicillin exactly as prescribed by your doctor. Follow all directions on your prescription label. Take this medicine with or without food. Shake the liquid medicine well just before you measure a dose.",
        dosages: [
            "Adults: 250-500 mg every 8 hours or 500-875 mg every 12 hours, depending on the type and severity of infection",
            "Children: Dosage is based on weight and must be determined by a doctor"
        ],
        missedDose: "Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take extra medicine to make up the missed dose.",
        commonSideEffects: [
            "Diarrhea",
            "Stomach upset",
            "Nausea, vomiting",
            "Headache",
            "Rash"
        ],
        seriousSideEffects: [
            "Severe skin rash, itching, hives",
            "Difficulty breathing or swallowing",
            "Wheezing",
            "Severe diarrhea that is watery or bloody",
            "Yellowing of the skin or eyes (jaundice)",
            "Dark urine, pale stools"
        ],
        warning: "Amoxicillin can cause a severe allergic reaction. Get emergency medical help if you have signs of an allergic reaction: hives, difficult breathing, swelling of your face, lips, tongue, or throat.",
        interactions: [
            "Probenecid",
            "Allopurinol",
            "Blood thinners (warfarin)",
            "Other antibiotics",
            "Birth control pills",
            "Methotrexate"
        ],
        foodInteractions: "Amoxicillin can be taken with or without food. However, taking it with food may help reduce stomach upset.",
        conditions: [
            "Allergy to penicillin or cephalosporin antibiotics",
            "Kidney disease",
            "Mononucleosis",
            "Phenylketonuria (if taking the chewable tablets)",
            "History of diarrhea caused by antibiotics",
            "Asthma"
        ],
        imageUrl: "/placeholder.svg?height=300&width=300"
    },
    "vitamin-d": {
        name: "Vitamin D",
        genericName: "Vitamin D (Cholecalciferol, Ergocalciferol)",
        description: "Vitamin D is a fat-soluble vitamin that plays a crucial role in calcium absorption, bone health, immune function, and cell growth. The body can produce vitamin D when skin is exposed to sunlight, but many people require supplementation.",
        uses: [
            "Prevention and treatment of vitamin D deficiency",
            "Support of bone health and prevention of osteoporosis",
            "Prevention of rickets in children",
            "Treatment of hypoparathyroidism",
            "Support of immune function"
        ],
        important: "Vitamin D toxicity can occur from high intakes of supplements but not from sun exposure. Symptoms of toxicity include nausea, vomiting, poor appetite, constipation, weakness, and weight loss.",
        howToTake: "Take vitamin D supplements with a meal that contains fat to enhance absorption. Follow your healthcare provider's instructions regarding dosage and timing.",
        dosages: [
            "Prevention of deficiency: 600-800 IU daily for adults",
            "Treatment of deficiency: 1,000-4,000 IU daily or as prescribed by a doctor",
            "Upper limit: 4,000 IU daily for adults (unless prescribed higher amounts by a doctor)"
        ],
        missedDose: "Take the missed dose as soon as you remember. Skip the missed dose if it is almost time for your next scheduled dose. Do not take extra medicine to make up the missed dose.",
        commonSideEffects: [
            "Generally well-tolerated at recommended doses",
            "Possible mild nausea or stomach discomfort"
        ],
        seriousSideEffects: [
            "Signs of vitamin D toxicity (with very high doses): nausea, vomiting, poor appetite, constipation, weakness, weight loss",
            "Kidney stones",
            "High blood calcium levels (hypercalcemia): confusion, fatigue, dry mouth, metallic taste, muscle or bone pain"
        ],
        warning: "Taking too much vitamin D can cause serious side effects including kidney problems, high calcium levels in the blood, and calcium deposits in soft tissues. Do not take more than recommended without medical supervision.",
        interactions: [
            "Steroids",
            "Weight loss drugs orlistat (Xenical, Alli)",
            "Cholesterol-lowering medications (cholestyramine, colestipol)",
            "Seizure medications (phenobarbital, phenytoin)",
            "Certain heart medications",
            "Diuretics (water pills)"
        ],
        foodInteractions: "Take vitamin D supplements with a meal that contains fat to enhance absorption.",
        conditions: [
            "Kidney disease",
            "Liver disease",
            "Heart disease",
            "High calcium levels",
            "Sarcoidosis, histoplasmosis, or other granulomatous diseases",
            "Hyperparathyroidism"
        ],
        imageUrl: "/placeholder.svg?height=300&width=300"
    }
};

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('drug-search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('Please enter a drug name to search');
        return;
    }
    
    // Check if the drug exists in our database
    let foundDrug = null;
    
    // Check for exact match
    if (drugDatabase[searchTerm]) {
        foundDrug = searchTerm;
    } else {
        // Check for partial match
        for (const drugKey in drugDatabase) {
            if (drugKey.includes(searchTerm) || 
                drugDatabase[drugKey].name.toLowerCase().includes(searchTerm) || 
                drugDatabase[drugKey].genericName.toLowerCase().includes(searchTerm)) {
                foundDrug = drugKey;
                break;
            }
        }
    }
    
    if (foundDrug) {
        // Store the drug data in localStorage to access it on the detail page
        localStorage.setItem('selectedDrug', foundDrug);
        window.location.href = 'drug-detail.html';
    } else {
        alert('No matching drug found. Please try another search term.');
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Search button click
    const searchButton = document.getElementById('drug-search-button');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    
    // Search input enter key
    const searchInput = document.getElementById('drug-search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    // Popular drug clicks
    const popularDrugs = document.querySelectorAll('.popular-drug');
    popularDrugs.forEach(drug => {
        drug.addEventListener('click', function() {
            const drugId = this.getAttribute('data-drug');
            localStorage.setItem('selectedDrug', drugId);
            window.location.href = 'drug-detail.html';
        });
    });
    
    // A-Z letter navigation
    const letterLinks = document.querySelectorAll('.letter-grid a');
    letterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const letter = this.getAttribute('data-letter');
            alert(`Browsing drugs starting with ${letter} - This feature would show all drugs starting with ${letter}`);
        });
    });
    
    // Category links
    const categoryLinks = document.querySelectorAll('.category-card a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            alert(`Browsing ${category} category - This feature would show all drugs in this category`);
        });
    });
    
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
