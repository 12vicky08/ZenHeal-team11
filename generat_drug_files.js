const fs = require('fs');
const path = require('path');

const drugs = [
  // --- Drugs for A ---
  {
    letter: 'A',
    drugName: 'Aspirin',
    genericName: 'Acetylsalicylic Acid',
    description: 'Aspirin is used to reduce pain, fever, and inflammation.',
    uses: ['Pain relief', 'Fever reduction', 'Anti-inflammatory'],
    important: 'Do not use if allergic to NSAIDs.',
    howToTake: 'Take with a full glass of water after meals.',
    typicalDosages: ['325 mg every 4-6 hours', 'Low dose for heart protection: 81 mg daily'],
    missedDose: 'Take the missed dose as soon as possible unless it is near the next scheduled dose.',
    commonSideEffects: ['Stomach upset', 'Bleeding risk'],
    seriousSideEffects: ['Gastrointestinal bleeding', 'Allergic reactions'],
    warning: 'Consult your doctor before use if you have ulcers or bleeding disorders.',
    interactions: ['Warfarin', 'Other NSAIDs'],
    foodInteractions: 'Avoid alcohol.',
    conditions: ['Asthma', 'Gastrointestinal disorders']
  },
  {
    letter: 'A',
    drugName: 'Amoxicillin',
    genericName: 'Amoxicillin',
    description: 'Amoxicillin is an antibiotic used to treat various bacterial infections.',
    uses: ['Respiratory infections', 'Urinary tract infections', 'Ear infections'],
    important: 'Complete the full course even if you feel better.',
    howToTake: 'Take with or without food, as prescribed.',
    typicalDosages: ['500 mg every 8 hours', '875 mg every 12 hours'],
    missedDose: 'Take as soon as you remember, but do not double dose.',
    commonSideEffects: ['Nausea', 'Diarrhea', 'Rash'],
    seriousSideEffects: ['Severe allergic reaction'],
    warning: 'Inform your doctor of any history of penicillin allergy.',
    interactions: ['Other antibiotics', 'Oral contraceptives'],
    foodInteractions: 'None significant.',
    conditions: ['Kidney disease', 'Liver dysfunction']
  },
  // --- Drugs for B ---
  {
    letter: 'B',
    drugName: 'Benazepril',
    genericName: 'Benazepril',
    description: 'An ACE inhibitor used to treat high blood pressure.',
    uses: ['Hypertension', 'Heart failure'],
    important: 'Monitor blood pressure regularly.',
    howToTake: 'Take once daily, with or without food.',
    typicalDosages: ['10-20 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Cough', 'Dizziness'],
    seriousSideEffects: ['Kidney dysfunction', 'Hyperkalemia'],
    warning: 'Avoid use during pregnancy.',
    interactions: ['Diuretics', 'Potassium supplements'],
    foodInteractions: 'Avoid high-potassium foods.',
    conditions: ['Pregnancy', 'Renal impairment']
  },
  {
    letter: 'B',
    drugName: 'Bupropion',
    genericName: 'Bupropion',
    description: 'An antidepressant used to treat depression and help with smoking cessation.',
    uses: ['Depression', 'Smoking cessation'],
    important: 'May lower seizure threshold.',
    howToTake: 'Take once daily in the morning.',
    typicalDosages: ['150-300 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Dry mouth', 'Insomnia'],
    seriousSideEffects: ['Seizures', 'Increased blood pressure'],
    warning: 'Do not use with MAO inhibitors.',
    interactions: ['MAO inhibitors', 'Alcohol'],
    foodInteractions: 'No significant food interactions.',
    conditions: ['Seizure disorders', 'Eating disorders']
  },
  // --- Drugs for C ---
  {
    letter: 'C',
    drugName: 'Ciprofloxacin',
    genericName: 'Ciprofloxacin',
    description: 'An antibiotic used to treat a variety of bacterial infections.',
    uses: ['Urinary tract infections', 'Respiratory infections'],
    important: 'Avoid exposure to sunlight.',
    howToTake: 'Take 2 hours before or 6 hours after meals.',
    typicalDosages: ['250-750 mg every 12 hours'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Nausea', 'Diarrhea'],
    seriousSideEffects: ['Tendon rupture', 'Nerve problems'],
    warning: 'Use with caution in patients with kidney issues.',
    interactions: ['Antacids', 'Corticosteroids'],
    foodInteractions: 'Avoid dairy products near dose time.',
    conditions: ['Tendon disorders', 'Renal impairment']
  },
  {
    letter: 'C',
    drugName: 'Cetirizine',
    genericName: 'Cetirizine',
    description: 'An antihistamine used to relieve allergy symptoms.',
    uses: ['Allergic rhinitis', 'Hives'],
    important: 'May cause drowsiness.',
    howToTake: 'Take once daily, with or without food.',
    typicalDosages: ['10 mg daily'],
    missedDose: 'Take as soon as remembered unless it is almost time for the next dose.',
    commonSideEffects: ['Drowsiness', 'Dry mouth'],
    seriousSideEffects: ['Severe allergic reaction'],
    warning: 'Avoid alcohol as it may increase drowsiness.',
    interactions: ['CNS depressants'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver impairment', 'Kidney problems']
  },
  // --- Drugs for D ---
  {
    letter: 'D',
    drugName: 'Doxycycline',
    genericName: 'Doxycycline',
    description: 'A tetracycline antibiotic used for a variety of infections.',
    uses: ['Acne', 'Respiratory infections'],
    important: 'Do not take with dairy products.',
    howToTake: 'Take with a full glass of water.',
    typicalDosages: ['100 mg every 12 hours'],
    missedDose: 'Take as soon as possible, but do not double dose.',
    commonSideEffects: ['Sun sensitivity', 'Nausea'],
    seriousSideEffects: ['Severe allergic reaction', 'Esophageal irritation'],
    warning: 'Avoid prolonged sun exposure.',
    interactions: ['Antacids', 'Iron supplements'],
    foodInteractions: 'Avoid dairy within 2 hours of dosing.',
    conditions: ['Pregnancy', 'Children under 8 years']
  },
  {
    letter: 'D',
    drugName: 'Diphenhydramine',
    genericName: 'Diphenhydramine',
    description: 'An antihistamine commonly used for allergy relief and as a sleep aid.',
    uses: ['Allergy relief', 'Sleep aid'],
    important: 'May cause drowsiness.',
    howToTake: 'Take 30 minutes before bedtime for sleep aid.',
    typicalDosages: ['25-50 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Drowsiness', 'Dry mouth'],
    seriousSideEffects: ['Confusion in elderly', 'Urinary retention'],
    warning: 'Do not combine with alcohol or other sedatives.',
    interactions: ['Alcohol', 'Sedatives'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Glaucoma', 'Asthma']
  },
  // --- Drugs for E ---
  {
    letter: 'E',
    drugName: 'Esomeprazole',
    genericName: 'Esomeprazole',
    description: 'A proton pump inhibitor used to reduce stomach acid.',
    uses: ['GERD', 'Acid reflux'],
    important: 'Take before meals for best effect.',
    howToTake: 'Take 30 minutes before meals.',
    typicalDosages: ['20-40 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Headache', 'Abdominal pain'],
    seriousSideEffects: ['Clostridium difficile infection'],
    warning: 'Long-term use may affect bone density.',
    interactions: ['Clopidogrel'],
    foodInteractions: 'None significant.',
    conditions: ['Liver disease', 'Kidney disease']
  },
  {
    letter: 'E',
    drugName: 'Erythromycin',
    genericName: 'Erythromycin',
    description: 'An antibiotic used for various bacterial infections.',
    uses: ['Respiratory infections', 'Skin infections'],
    important: 'May cause gastrointestinal upset.',
    howToTake: 'Take with food to reduce stomach upset.',
    typicalDosages: ['250-500 mg every 6-12 hours'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Nausea', 'Vomiting'],
    seriousSideEffects: ['Liver toxicity', 'QT prolongation'],
    warning: 'Avoid concurrent use with statins.',
    interactions: ['Statins', 'Antacids'],
    foodInteractions: 'Avoid high-fat meals.',
    conditions: ['Liver dysfunction']
  },
  // --- Drugs for F ---
  {
    letter: 'F',
    drugName: 'Fluoxetine',
    genericName: 'Fluoxetine',
    description: 'A selective serotonin reuptake inhibitor (SSRI) used to treat depression.',
    uses: ['Depression', 'Anxiety disorders'],
    important: 'May take several weeks to show full effects.',
    howToTake: 'Take once daily in the morning.',
    typicalDosages: ['20-80 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Nausea', 'Insomnia'],
    seriousSideEffects: ['Suicidal thoughts', 'Serotonin syndrome'],
    warning: 'Monitor for worsening depression.',
    interactions: ['MAO inhibitors', 'NSAIDs'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Bipolar disorder', 'Liver impairment']
  },
  {
    letter: 'F',
    drugName: 'Furosemide',
    genericName: 'Furosemide',
    description: 'A loop diuretic used to reduce excess fluid in the body.',
    uses: ['Edema', 'Hypertension'],
    important: 'Monitor electrolytes during use.',
    howToTake: 'Take in the morning to avoid nocturia.',
    typicalDosages: ['20-80 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Dehydration', 'Electrolyte imbalance'],
    seriousSideEffects: ['Kidney damage', 'Hearing loss'],
    warning: 'Avoid excessive use to prevent dehydration.',
    interactions: ['NSAIDs', 'Other diuretics'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Kidney disease', 'Liver disease']
  },
  // --- Drugs for G ---
  {
    letter: 'G',
    drugName: 'Gabapentin',
    genericName: 'Gabapentin',
    description: 'An anticonvulsant used to treat seizures and neuropathic pain.',
    uses: ['Seizures', 'Neuropathic pain'],
    important: 'May cause dizziness and drowsiness.',
    howToTake: 'Take with or without food as directed.',
    typicalDosages: ['300-1800 mg daily, divided doses'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Dizziness', 'Fatigue'],
    seriousSideEffects: ['Severe allergic reaction'],
    warning: 'Adjust dose in patients with kidney impairment.',
    interactions: ['Antacids'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Renal impairment']
  },
  {
    letter: 'G',
    drugName: 'Glipizide',
    genericName: 'Glipizide',
    description: 'An oral hypoglycemic used to control blood sugar in type 2 diabetes.',
    uses: ['Type 2 diabetes'],
    important: 'Monitor blood sugar regularly.',
    howToTake: 'Take 30 minutes before meals.',
    typicalDosages: ['5-40 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Hypoglycemia', 'Nausea'],
    seriousSideEffects: ['Severe hypoglycemia'],
    warning: 'Monitor for signs of low blood sugar.',
    interactions: ['Beta-blockers'],
    foodInteractions: 'Take with food to reduce risk of hypoglycemia.',
    conditions: ['Liver or kidney disease']
  },
  // --- Drugs for H ---
  {
    letter: 'H',
    drugName: 'Hydrocodone',
    genericName: 'Hydrocodone',
    description: 'An opioid used for pain relief.',
    uses: ['Moderate to severe pain'],
    important: 'Use only as prescribed due to addiction risk.',
    howToTake: 'Take exactly as prescribed by your doctor.',
    typicalDosages: ['5-10 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered unless it is near the next scheduled dose.',
    commonSideEffects: ['Drowsiness', 'Constipation'],
    seriousSideEffects: ['Respiratory depression'],
    warning: 'Avoid use with other CNS depressants.',
    interactions: ['Benzodiazepines'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Respiratory issues']
  },
  {
    letter: 'H',
    drugName: 'Hydrochlorothiazide',
    genericName: 'Hydrochlorothiazide',
    description: 'A thiazide diuretic used to treat high blood pressure and fluid retention.',
    uses: ['Hypertension', 'Edema'],
    important: 'Monitor potassium levels during use.',
    howToTake: 'Take in the morning.',
    typicalDosages: ['12.5-50 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Increased urination', 'Electrolyte imbalance'],
    seriousSideEffects: ['Dehydration', 'Low potassium'],
    warning: 'Avoid potassium supplements unless advised by your doctor.',
    interactions: ['NSAIDs'],
    foodInteractions: 'Avoid high-potassium foods.',
    conditions: ['Gout']
  },
  // --- Drugs for I ---
  {
    letter: 'I',
    drugName: 'Ibuprofen',
    genericName: 'Ibuprofen',
    description: 'A nonsteroidal anti-inflammatory drug (NSAID) used for pain relief.',
    uses: ['Pain relief', 'Fever reduction'],
    important: 'Take with food to avoid stomach upset.',
    howToTake: 'Take as needed, following recommended dosages.',
    typicalDosages: ['200-400 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered if needed, but do not double dose.',
    commonSideEffects: ['Stomach pain', 'Nausea'],
    seriousSideEffects: ['Gastrointestinal bleeding'],
    warning: 'Avoid if you have a history of ulcers.',
    interactions: ['Aspirin', 'Warfarin'],
    foodInteractions: 'Take with food.',
    conditions: ['Kidney disease']
  },
  {
    letter: 'I',
    drugName: 'Imatinib',
    genericName: 'Imatinib',
    description: 'A tyrosine kinase inhibitor used primarily for certain types of cancer.',
    uses: ['Chronic myeloid leukemia', 'Gastrointestinal stromal tumors'],
    important: 'Regular monitoring of blood counts is necessary.',
    howToTake: 'Take once daily, with food to minimize stomach upset.',
    typicalDosages: ['400-800 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Nausea', 'Edema'],
    seriousSideEffects: ['Liver toxicity', 'Cardiac issues'],
    warning: 'Report any unusual bleeding or bruising.',
    interactions: ['CYP3A4 inhibitors'],
    foodInteractions: 'Take with a meal for better absorption.',
    conditions: ['Liver dysfunction']
  },
  // --- Drugs for J ---
  {
    letter: 'J',
    drugName: 'Januvia',
    genericName: 'Sitagliptin',
    description: 'An oral diabetes medication that helps control blood sugar levels.',
    uses: ['Type 2 diabetes'],
    important: 'Monitor blood sugar regularly.',
    howToTake: 'Take once daily with or without food.',
    typicalDosages: ['100 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Headache', 'Sore throat'],
    seriousSideEffects: ['Pancreatitis'],
    warning: 'Inform your doctor of any pancreatic issues.',
    interactions: ['Other antidiabetic medications'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Kidney issues']
  },
  {
    letter: 'J',
    drugName: 'Jantoven',
    genericName: 'Warfarin',
    description: 'An anticoagulant used to prevent blood clots.',
    uses: ['Prevention of blood clots', 'Stroke prevention'],
    important: 'Regular INR monitoring is required.',
    howToTake: 'Take exactly as prescribed.',
    typicalDosages: ['2-10 mg daily'],
    missedDose: 'Take as soon as remembered unless it is near the next scheduled dose.',
    commonSideEffects: ['Bleeding', 'Bruising'],
    seriousSideEffects: ['Severe bleeding'],
    warning: 'Avoid activities with high risk of injury.',
    interactions: ['Antibiotics', 'NSAIDs'],
    foodInteractions: 'Maintain consistent vitamin K intake.',
    conditions: ['Pregnancy']
  },
  // --- Drugs for K ---
  {
    letter: 'K',
    drugName: 'Ketorolac',
    genericName: 'Ketorolac',
    description: 'A nonsteroidal anti-inflammatory drug (NSAID) used for short-term pain relief.',
    uses: ['Post-surgical pain'],
    important: 'Limit use to 5 days.',
    howToTake: 'Take as directed by your doctor.',
    typicalDosages: ['10-30 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered if needed, but do not double dose.',
    commonSideEffects: ['Stomach upset', 'Headache'],
    seriousSideEffects: ['Gastrointestinal bleeding'],
    warning: 'Use with caution in patients with kidney issues.',
    interactions: ['Anticoagulants'],
    foodInteractions: 'Avoid alcohol and dairy.',
    conditions: ['Kidney impairment']
  },
  {
    letter: 'K',
    drugName: 'Klonopin',
    genericName: 'Clonazepam',
    description: 'A benzodiazepine used to treat seizure disorders and panic attacks.',
    uses: ['Seizure disorders', 'Panic disorder'],
    important: 'May cause drowsiness and dependency.',
    howToTake: 'Take as prescribed, usually once or twice daily.',
    typicalDosages: ['0.5-2 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Drowsiness', 'Dizziness'],
    seriousSideEffects: ['Dependence', 'Respiratory depression'],
    warning: 'Avoid alcohol and other sedatives.',
    interactions: ['Alcohol', 'Other CNS depressants'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver disease']
  },
  // --- Drugs for L ---
  {
    letter: 'L',
    drugName: 'Lisinopril',
    genericName: 'Lisinopril',
    description: 'An ACE inhibitor used to treat high blood pressure and heart failure.',
    uses: ['Hypertension', 'Heart failure'],
    important: 'Monitor kidney function and potassium levels.',
    howToTake: 'Take once daily, with or without food.',
    typicalDosages: ['10-40 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Cough', 'Dizziness'],
    seriousSideEffects: ['Kidney impairment', 'Hyperkalemia'],
    warning: 'Avoid use during pregnancy.',
    interactions: ['NSAIDs', 'Diuretics'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Renal impairment']
  },
  {
    letter: 'L',
    drugName: 'Loratadine',
    genericName: 'Loratadine',
    description: 'An antihistamine used to relieve allergy symptoms without causing drowsiness.',
    uses: ['Allergic rhinitis', 'Hives'],
    important: 'May not work for everyone.',
    howToTake: 'Take once daily, with or without food.',
    typicalDosages: ['10 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Headache', 'Dry mouth'],
    seriousSideEffects: ['Severe allergic reaction'],
    warning: 'Avoid if you have liver disease.',
    interactions: ['Other antihistamines'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Kidney or liver impairment']
  },
  // --- Drugs for M ---
  {
    letter: 'M',
    drugName: 'Metformin',
    genericName: 'Metformin',
    description: 'An oral hypoglycemic used to control blood sugar in type 2 diabetes.',
    uses: ['Type 2 diabetes'],
    important: 'Take with meals to reduce gastrointestinal side effects.',
    howToTake: 'Take 1-3 times daily with food.',
    typicalDosages: ['500-2000 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Diarrhea', 'Nausea'],
    seriousSideEffects: ['Lactic acidosis'],
    warning: 'Monitor kidney function regularly.',
    interactions: ['Iodinated contrast', 'Corticosteroids'],
    foodInteractions: 'Take with food.',
    conditions: ['Kidney disease']
  },
  {
    letter: 'M',
    drugName: 'Metoprolol',
    genericName: 'Metoprolol',
    description: 'A beta-blocker used to treat high blood pressure and prevent heart-related complications.',
    uses: ['Hypertension', 'Angina'],
    important: 'Take as prescribed and do not stop abruptly.',
    howToTake: 'Take once or twice daily with or without food.',
    typicalDosages: ['50-200 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Fatigue', 'Dizziness'],
    seriousSideEffects: ['Bradycardia', 'Hypotension'],
    warning: 'Monitor heart rate regularly.',
    interactions: ['Calcium channel blockers', 'Digoxin'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Asthma', 'Diabetes']
  },
  // --- Drugs for N ---
  {
    letter: 'N',
    drugName: 'Naproxen',
    genericName: 'Naproxen',
    description: 'A nonsteroidal anti-inflammatory drug (NSAID) used for pain relief.',
    uses: ['Pain relief', 'Inflammation reduction'],
    important: 'Take with food to avoid stomach upset.',
    howToTake: 'Take as needed, following recommended dosages.',
    typicalDosages: ['250-500 mg every 12 hours'],
    missedDose: 'Take as soon as remembered if needed, but do not double dose.',
    commonSideEffects: ['Stomach pain', 'Nausea'],
    seriousSideEffects: ['Gastrointestinal bleeding'],
    warning: 'Avoid use if you have a history of ulcers.',
    interactions: ['Aspirin', 'Warfarin'],
    foodInteractions: 'Take with food.',
    conditions: ['Kidney disease']
  },
  {
    letter: 'N',
    drugName: 'Nifedipine',
    genericName: 'Nifedipine',
    description: 'A calcium channel blocker used to treat high blood pressure and angina.',
    uses: ['Hypertension', 'Angina'],
    important: 'Take as prescribed, usually multiple times daily.',
    howToTake: 'Take with food to reduce side effects.',
    typicalDosages: ['30-90 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Headache', 'Flushing'],
    seriousSideEffects: ['Low blood pressure', 'Heart palpitations'],
    warning: 'Monitor blood pressure regularly.',
    interactions: ['Beta-blockers', 'Grapefruit juice'],
    foodInteractions: 'Avoid grapefruit juice.',
    conditions: ['Liver disease']
  },
  // --- Drugs for O ---
  {
    letter: 'O',
    drugName: 'Omeprazole',
    genericName: 'Omeprazole',
    description: 'A proton pump inhibitor used to reduce stomach acid.',
    uses: ['GERD', 'Acid reflux'],
    important: 'Take before meals for best effect.',
    howToTake: 'Take 30 minutes before meals.',
    typicalDosages: ['20-40 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Headache', 'Abdominal pain'],
    seriousSideEffects: ['Clostridium difficile infection'],
    warning: 'Long-term use may affect bone density.',
    interactions: ['Clopidogrel'],
    foodInteractions: 'None significant.',
    conditions: ['Liver disease']
  },
  {
    letter: 'O',
    drugName: 'Oxycodone',
    genericName: 'Oxycodone',
    description: 'An opioid analgesic used for moderate to severe pain.',
    uses: ['Pain management'],
    important: 'High risk of addiction and overdose.',
    howToTake: 'Take exactly as prescribed by your doctor.',
    typicalDosages: ['5-15 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Drowsiness', 'Constipation'],
    seriousSideEffects: ['Respiratory depression', 'Addiction'],
    warning: 'Avoid combining with other CNS depressants.',
    interactions: ['Benzodiazepines', 'Alcohol'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Respiratory issues']
  },
  // --- Drugs for P ---
  {
    letter: 'P',
    drugName: 'Paracetamol',
    genericName: 'Acetaminophen',
    description: 'A commonly used pain reliever and fever reducer.',
    uses: ['Pain relief', 'Fever reduction'],
    important: 'Do not exceed recommended dosage to avoid liver damage.',
    howToTake: 'Take as needed, following package directions.',
    typicalDosages: ['500-1000 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered if needed, but do not double dose.',
    commonSideEffects: ['Rare, but may include rash'],
    seriousSideEffects: ['Liver toxicity with overdose'],
    warning: 'Avoid alcohol while taking this medication.',
    interactions: ['Warfarin'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver disease']
  },
  {
    letter: 'P',
    drugName: 'Prednisone',
    genericName: 'Prednisone',
    description: 'A corticosteroid used to reduce inflammation in various conditions.',
    uses: ['Inflammatory conditions', 'Autoimmune disorders'],
    important: 'Do not stop abruptly.',
    howToTake: 'Take with food to reduce stomach irritation.',
    typicalDosages: ['5-60 mg daily, depending on condition'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Increased appetite', 'Mood changes'],
    seriousSideEffects: ['Suppressed immune system', 'Osteoporosis'],
    warning: 'Do not use long-term without medical supervision.',
    interactions: ['NSAIDs', 'Vaccines'],
    foodInteractions: 'Take with food.',
    conditions: ['Diabetes', 'Hypertension']
  },
  // --- Drugs for Q ---
  {
    letter: 'Q',
    drugName: 'Quetiapine',
    genericName: 'Quetiapine',
    description: 'An atypical antipsychotic used to treat schizophrenia and bipolar disorder.',
    uses: ['Schizophrenia', 'Bipolar disorder'],
    important: 'May cause drowsiness and weight gain.',
    howToTake: 'Take once or twice daily with food.',
    typicalDosages: ['150-800 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Drowsiness', 'Dry mouth'],
    seriousSideEffects: ['Metabolic syndrome', 'Extrapyramidal symptoms'],
    warning: 'Monitor weight and blood sugar.',
    interactions: ['CNS depressants'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver dysfunction']
  },
  {
    letter: 'Q',
    drugName: 'Qvar',
    genericName: 'Beclomethasone dipropionate',
    description: 'An inhaled corticosteroid used for asthma maintenance.',
    uses: ['Asthma', 'COPD'],
    important: 'Regular use is necessary for control.',
    howToTake: 'Inhale as directed by your doctor.',
    typicalDosages: ['40-80 mcg per inhalation, 2 puffs twice daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Hoarseness', 'Throat irritation'],
    seriousSideEffects: ['Oral thrush'],
    warning: 'Rinse mouth after use.',
    interactions: ['Other inhaled steroids'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Tuberculosis']
  },
  // --- Drugs for R ---
  {
    letter: 'R',
    drugName: 'Ranitidine',
    genericName: 'Ranitidine',
    description: 'A histamine-2 blocker used to reduce stomach acid production.',
    uses: ['GERD', 'Peptic ulcers'],
    important: 'Withdrawn in many markets due to contamination issues.',
    howToTake: 'Take 30 minutes before meals.',
    typicalDosages: ['150 mg twice daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Headache', 'Dizziness'],
    seriousSideEffects: ['Liver issues'],
    warning: 'Consult your doctor for alternatives.',
    interactions: ['Antacids'],
    foodInteractions: 'None significant.',
    conditions: ['Liver disease']
  },
  {
    letter: 'R',
    drugName: 'Rosuvastatin',
    genericName: 'Rosuvastatin',
    description: 'A statin used to lower cholesterol levels.',
    uses: ['Hyperlipidemia'],
    important: 'Monitor liver enzymes regularly.',
    howToTake: 'Take once daily, with or without food.',
    typicalDosages: ['10-40 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Muscle pain', 'Headache'],
    seriousSideEffects: ['Rhabdomyolysis'],
    warning: 'Avoid grapefruit juice.',
    interactions: ['Other statins', 'Fibrates'],
    foodInteractions: 'Avoid grapefruit.',
    conditions: ['Liver disease']
  },
  // --- Drugs for S ---
  {
    letter: 'S',
    drugName: 'Simvastatin',
    genericName: 'Simvastatin',
    description: 'A statin used to lower cholesterol levels and reduce cardiovascular risk.',
    uses: ['Hyperlipidemia'],
    important: 'Monitor liver function and muscle pain.',
    howToTake: 'Take in the evening.',
    typicalDosages: ['10-40 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Muscle pain', 'Digestive issues'],
    seriousSideEffects: ['Rhabdomyolysis'],
    warning: 'Avoid excessive alcohol consumption.',
    interactions: ['Grapefruit juice'],
    foodInteractions: 'Avoid grapefruit.',
    conditions: ['Liver disease']
  },
  {
    letter: 'S',
    drugName: 'Sertraline',
    genericName: 'Sertraline',
    description: 'A selective serotonin reuptake inhibitor (SSRI) used to treat depression and anxiety disorders.',
    uses: ['Depression', 'Anxiety'],
    important: 'May take several weeks for full effect.',
    howToTake: 'Take once daily, preferably in the morning.',
    typicalDosages: ['50-200 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Nausea', 'Insomnia'],
    seriousSideEffects: ['Suicidal thoughts', 'Serotonin syndrome'],
    warning: 'Monitor for mood changes.',
    interactions: ['MAO inhibitors'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver impairment']
  },
  // --- Drugs for T ---
  {
    letter: 'T',
    drugName: 'Tamsulosin',
    genericName: 'Tamsulosin',
    description: 'An alpha-blocker used to treat symptoms of an enlarged prostate.',
    uses: ['Benign prostatic hyperplasia (BPH)'],
    important: 'Take at the same time every day.',
    howToTake: 'Take once daily, after the same meal each day.',
    typicalDosages: ['0.4 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Dizziness', 'Headache'],
    seriousSideEffects: ['Orthostatic hypotension'],
    warning: 'Be cautious when standing up quickly.',
    interactions: ['CYP3A4 inhibitors'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Low blood pressure']
  },
  {
    letter: 'T',
    drugName: 'Tramadol',
    genericName: 'Tramadol',
    description: 'An opioid pain reliever used to treat moderate to severe pain.',
    uses: ['Pain management'],
    important: 'Use only as prescribed due to risk of addiction.',
    howToTake: 'Take as directed, usually every 4-6 hours as needed.',
    typicalDosages: ['50-100 mg every 4-6 hours'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Nausea', 'Dizziness'],
    seriousSideEffects: ['Respiratory depression', 'Seizures'],
    warning: 'Avoid combining with other CNS depressants.',
    interactions: ['Alcohol', 'Benzodiazepines'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Epilepsy']
  },
  // --- Drugs for U ---
  {
    letter: 'U',
    drugName: 'Uloric',
    genericName: 'Febuxostat',
    description: 'A medication used to treat gout by reducing uric acid levels.',
    uses: ['Gout'],
    important: 'Monitor liver enzymes during use.',
    howToTake: 'Take once daily with or without food.',
    typicalDosages: ['40-80 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Nausea', 'Joint pain'],
    seriousSideEffects: ['Liver toxicity'],
    warning: 'Do not use if you have severe liver disease.',
    interactions: ['Azathioprine'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver impairment']
  },
  {
    letter: 'U',
    drugName: 'Unasyn',
    genericName: 'Ampicillin/Sulbactam',
    description: 'A combination antibiotic used to treat a variety of bacterial infections.',
    uses: ['Bacterial infections'],
    important: 'Complete the full course of treatment.',
    howToTake: 'Administered via IV or IM by a healthcare professional.',
    typicalDosages: ['1.5-3 g every 6-8 hours'],
    missedDose: 'Consult a healthcare provider.',
    commonSideEffects: ['Diarrhea', 'Injection site reactions'],
    seriousSideEffects: ['Allergic reactions'],
    warning: 'Avoid if allergic to penicillins.',
    interactions: ['Other antibiotics'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Kidney disease']
  },
  // --- Drugs for V ---
  {
    letter: 'V',
    drugName: 'Venlafaxine',
    genericName: 'Venlafaxine',
    description: 'An antidepressant used to treat major depressive disorder, anxiety, and panic disorder.',
    uses: ['Depression', 'Anxiety'],
    important: 'May take several weeks for full effect.',
    howToTake: 'Take once daily, preferably in the morning.',
    typicalDosages: ['75-225 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Nausea', 'Dizziness'],
    seriousSideEffects: ['Suicidal thoughts'],
    warning: 'Monitor for mood changes.',
    interactions: ['MAO inhibitors'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver impairment']
  },
  {
    letter: 'V',
    drugName: 'Valsartan',
    genericName: 'Valsartan',
    description: 'An angiotensin II receptor blocker (ARB) used to treat high blood pressure.',
    uses: ['Hypertension', 'Heart failure'],
    important: 'Monitor blood pressure regularly.',
    howToTake: 'Take once daily, with or without food.',
    typicalDosages: ['80-320 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Dizziness', 'Headache'],
    seriousSideEffects: ['Kidney impairment'],
    warning: 'Avoid if pregnant.',
    interactions: ['ACE inhibitors'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Pregnancy']
  },
  // --- Drugs for W ---
  {
    letter: 'W',
    drugName: 'Warfarin',
    genericName: 'Warfarin',
    description: 'An anticoagulant used to prevent blood clots.',
    uses: ['Blood clot prevention'],
    important: 'Requires regular INR monitoring.',
    howToTake: 'Take as prescribed, usually once daily.',
    typicalDosages: ['2-10 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Bruising', 'Bleeding'],
    seriousSideEffects: ['Severe bleeding'],
    warning: 'Avoid activities with high risk of injury.',
    interactions: ['Aspirin'],
    foodInteractions: 'Maintain consistent vitamin K intake.',
    conditions: ['Pregnancy']
  },
  {
    letter: 'W',
    drugName: 'Wegovy',
    genericName: 'Semaglutide',
    description: 'An injectable medication used for weight management in obesity.',
    uses: ['Weight management'],
    important: 'Monitor for gastrointestinal side effects.',
    howToTake: 'Inject subcutaneously once weekly.',
    typicalDosages: ['0.25-2.4 mg weekly'],
    missedDose: 'Take as soon as remembered if it is within a few days of the scheduled dose.',
    commonSideEffects: ['Nausea', 'Diarrhea'],
    seriousSideEffects: ['Pancreatitis'],
    warning: 'Do not use if you have a history of medullary thyroid carcinoma.',
    interactions: ['Insulin'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Thyroid cancer']
  },
  // --- Drugs for X ---
  {
    letter: 'X',
    drugName: 'Xarelto',
    genericName: 'Rivaroxaban',
    description: 'An anticoagulant used to reduce the risk of stroke and blood clots.',
    uses: ['Stroke prevention', 'Deep vein thrombosis prevention'],
    important: 'Take with food for better absorption.',
    howToTake: 'Take once daily with the evening meal.',
    typicalDosages: ['10-20 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Bleeding', 'Bruising'],
    seriousSideEffects: ['Severe bleeding'],
    warning: 'Do not use if you have active bleeding.',
    interactions: ['Antiplatelet drugs'],
    foodInteractions: 'Take with food.',
    conditions: ['Liver impairment']
  },
  {
    letter: 'X',
    drugName: 'Xopenex',
    genericName: 'Levalbuterol',
    description: 'A bronchodilator used to treat bronchospasm in conditions such as asthma.',
    uses: ['Asthma', 'COPD'],
    important: 'May cause rapid heartbeat.',
    howToTake: 'Use as needed for acute symptoms.',
    typicalDosages: ['1.25-2.5 mg via nebulization'],
    missedDose: 'No missed dose concept for rescue inhalers.',
    commonSideEffects: ['Tremor', 'Nervousness'],
    seriousSideEffects: ['Severe bronchospasm'],
    warning: 'Consult your doctor if symptoms worsen.',
    interactions: ['Beta-blockers'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Cardiac arrhythmia']
  },
  // --- Drugs for Y ---
  {
    letter: 'Y',
    drugName: 'Yaz',
    genericName: 'Ethinyl Estradiol/Drospirenone',
    description: 'An oral contraceptive used to prevent pregnancy and treat acne.',
    uses: ['Contraception', 'Acne treatment'],
    important: 'Take at the same time every day.',
    howToTake: 'Take one tablet daily.',
    typicalDosages: ['1 tablet daily'],
    missedDose: 'Follow the instructions on the package if a dose is missed.',
    commonSideEffects: ['Nausea', 'Breast tenderness'],
    seriousSideEffects: ['Blood clots'],
    warning: 'Not suitable for women over 35 who smoke.',
    interactions: ['Antibiotics'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Migraines']
  },
  {
    letter: 'Y',
    drugName: 'Yervoy',
    genericName: 'Ipilimumab',
    description: 'An immunotherapy used to treat melanoma and other cancers.',
    uses: ['Melanoma', 'Other cancers'],
    important: 'Monitor for immune-related side effects.',
    howToTake: 'Administered via IV infusion by a healthcare professional.',
    typicalDosages: ['3 mg/kg every 3 weeks for 4 doses'],
    missedDose: 'Consult your healthcare provider.',
    commonSideEffects: ['Fatigue', 'Diarrhea'],
    seriousSideEffects: ['Severe immune-mediated reactions'],
    warning: 'Report any unusual symptoms immediately.',
    interactions: ['Immunosuppressants'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Autoimmune disorders']
  },
  // --- Drugs for Z ---
  {
    letter: 'Z',
    drugName: 'Zolpidem',
    genericName: 'Zolpidem',
    description: 'A sedative-hypnotic used for short-term treatment of insomnia.',
    uses: ['Insomnia'],
    important: 'May cause next-day drowsiness.',
    howToTake: 'Take immediately before bedtime.',
    typicalDosages: ['5-10 mg daily'],
    missedDose: 'Take as soon as remembered unless near next dose.',
    commonSideEffects: ['Dizziness', 'Headache'],
    seriousSideEffects: ['Complex sleep behaviors'],
    warning: 'Do not combine with alcohol.',
    interactions: ['CNS depressants'],
    foodInteractions: 'No significant interactions.',
    conditions: ['Liver impairment']
  },
  {
    letter: 'Z',
    drugName: 'Zithromax',
    genericName: 'Azithromycin',
    description: 'An antibiotic used to treat a variety of bacterial infections.',
    uses: ['Respiratory infections', 'Skin infections'],
    important: 'Complete the full course of treatment.',
    howToTake: 'Take with or without food, as prescribed.',
    typicalDosages: ['250-500 mg daily'],
    missedDose: 'Take as soon as remembered, but do not double dose.',
    commonSideEffects: ['Diarrhea', 'Nausea'],
    seriousSideEffects: ['Severe allergic reaction'],
    warning: 'Consult your doctor if symptoms persist.',
    interactions: ['Antacids'],
    foodInteractions: 'Avoid dairy products close to dose time.',
    conditions: ['Liver or kidney impairment']
  }
];

const template = ({ drugName, genericName, description, uses, important, howToTake, typicalDosages, missedDose, commonSideEffects, seriousSideEffects, warning, interactions, foodInteractions, conditions }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${drugName} | Drug Information | ZenHeal</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="styles11.css">
  <link rel="stylesheet" href="drug-detail.css">
  <style>
    /* Inline CSS from your template */
    .content { display: flex; align-items: flex-start; justify-content: space-between; gap: 30px; max-width: 1000px; margin: 40px auto; padding: 20px; }
    .content .text-section{ font-size: 18px; }
    .image-section, .text-section { flex: 1; }
    .image-section img { width: 100%; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); }
    .content-header { text-align: left; font-size: 18px; margin: 60px 0 20px; max-width: 1000px; padding: 0 20px; margin-left: auto; margin-right: auto; }
    .content-header .view-all { float: right; text-decoration: none; color: #002280; }
    .drug-title { font-size: 32px; color: #002280; margin-bottom: 20px; max-width: 1000px; padding: 0 20px; margin-left: auto; margin-right: auto; margin-top: 40px; }
    .drug-subtitle { font-size: 18px; color: #666; margin-bottom: 30px; max-width: 1000px; padding: 0 20px; margin-left: auto; margin-right: auto; }
    .text-section h3 { color: #002280; margin-bottom: 15px; margin-top: 25px; }
    .text-section p { margin-bottom: 15px; line-height: 1.6; }
    .text-section ul { margin-bottom: 20px; padding-left: 20px; }
    .text-section li { margin-bottom: 8px; }
    hr { border: 0; height: 1px; background-color: #e0e0e0; margin: 30px auto; max-width: 1000px; }
    .warning-box { background-color: #fff8e6; border-left: 4px solid #ffcc00; padding: 15px; margin: 20px 0; }
    .info-box { background-color: #e6f7ff; border-left: 4px solid #0099ff; padding: 15px; margin: 20px 0; }
    @media (max-width: 768px) { .content { flex-direction: column; } .image-section, .text-section { max-width: 100%; } }
  </style>
</head>
<body>
  <header class="main-header">
    <nav class="nav-container">
      <div class="logo">
        <a href="index1.html"><img src="/placeholder.svg?height=30&width=120" alt="ZenHeal Logo"></a>
      </div>
      <button class="mobile-menu-btn">☰</button>
      <div class="nav-menu">
        <div class="nav-item dropdown">
          <button class="dropbtn">Conditions</button>
          <div class="dropdown-content">
            <a href="alziemers.html">Alziemer's</a>
            <a href="bmi.html">BMI Calculator</a>
            <a href="risk.html">Risk Assessment</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <button class="dropbtn">Drugs & Supplements</button>
          <div class="dropdown-content">
            <a href="drugs.html">Drugs</a>
            <a href="drugs.html">Supplements</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <button class="dropbtn">Well-Being</button>
          <div class="dropdown-content">
            <a href="wellbeing.html">Diet</a>
            <a href="wellbeing.html">Exercise</a>
            <a href="wellbeing.html">Mental Health</a>
          </div>
        </div>
        <a href="symptom.html" class="nav-item">Symptom Checker</a>
        <a href="doctor.html" class="nav-item">Find a Doctor</a>
        <div class="nav-item dropdown">
          <button class="dropbtn">More</button>
          <div class="dropdown-content">
            <a href="#">News</a>
            <a href="#">Blogs</a>
            <a href="#">Podcasts</a>
          </div>
        </div>
      </div>
      <div class="nav-right">
        <button class="subscribe-btn"><i class="far fa-envelope"></i> Subscribe</button>
        <button class="login-btn">Log In</button>
        <i class="fas fa-search search-icon"></i>
      </div>
    </nav>
  </header>

  <main>
    <h1 class="drug-title" id="drug-name">${drugName}</h1>
    <p class="drug-subtitle" id="drug-generic-name">${genericName}</p>
    
    <div class="content-header">
      <span>1 OF 4 / <strong>OVERVIEW</strong></span>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="content">
      <div class="text-section">
        <h3>What Is This Medication?</h3>
        <p id="drug-description">${description}</p>
        
        <h3>Common Uses</h3>
        <ul id="drug-uses">
          ${uses.map(use => `<li>${use}</li>`).join('')}
        </ul>
        
        <div class="info-box">
          <strong>Important:</strong> <span id="drug-important">${important}</span>
        </div>
      </div>
      <div class="image-section">
        <img id="drug-image" src="/placeholder.svg?height=300&width=300" alt="Medication Image">
      </div>
    </div>
    
    <hr>
    <div class="content-header">
      <span>2 OF 4 / <strong>DOSAGE & ADMINISTRATION</strong></span>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="content">
      <div class="image-section">
        <img src="/placeholder.svg?height=300&width=300" alt="Dosage Information">
      </div>
      <div class="text-section">
        <h3>How to Take</h3>
        <p id="drug-how-to-take">${howToTake}</p>
        
        <h3>Typical Dosages</h3>
        <ul id="drug-dosages">
          ${typicalDosages.map(dose => `<li>${dose}</li>`).join('')}
        </ul>
        
        <h3>Missed Dose</h3>
        <p id="drug-missed-dose">${missedDose}</p>
      </div>
    </div>
    
    <hr>
    <div class="content-header">
      <span>3 OF 4 / <strong>SIDE EFFECTS</strong></span>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="content">
      <div class="text-section">
        <h3>Common Side Effects</h3>
        <ul id="drug-common-side-effects">
          ${commonSideEffects.map(effect => `<li>${effect}</li>`).join('')}
        </ul>
        
        <h3>Serious Side Effects</h3>
        <ul id="drug-serious-side-effects">
          ${seriousSideEffects.map(effect => `<li>${effect}</li>`).join('')}
        </ul>
        
        <div class="warning-box">
          <strong>Warning:</strong> <span id="drug-warning">${warning}</span>
        </div>
      </div>
      <div class="image-section">
        <img src="/placeholder.svg?height=300&width=300" alt="Side Effects">
      </div>
    </div>
    
    <hr>
    <div class="content-header">
      <span>4 OF 4 / <strong>INTERACTIONS</strong></span>
      <a href="#" class="view-all">View All</a>
    </div>
    <div class="content">
      <div class="image-section">
        <img src="/placeholder.svg?height=300&width=300" alt="Drug Interactions">
      </div>
      <div class="text-section">
        <h3>Drug Interactions</h3>
        <p>This medication may interact with the following:</p>
        <ul id="drug-interactions">
          ${interactions.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h3>Food Interactions</h3>
        <p id="drug-food-interactions">${foodInteractions}</p>
        
        <h3>Conditions to Consider</h3>
        <p>Tell your doctor if you have any of these conditions:</p>
        <ul id="drug-conditions">
          ${conditions.map(condition => `<li>${condition}</li>`).join('')}
        </ul>
      </div>
    </div>
  </main>
  
  <footer style="background-color: #222; color: #fff; padding: 20px; text-align: center;">
    <div class="footer-content">
      <p style="font-size: 1.2em; margin-bottom: 10px;">Stay Updated with Our Newsletter:</p>
      <form style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
        <input type="email" placeholder="Your email" aria-label="Newsletter email"
               style="padding: 10px; border: none; border-radius: 5px; margin-right: 10px; width: 250px; max-width: 80%;">
        <button class="subscribe-btn"><a href="#">Subscribe</a></button>
      </form>
      <div class="social-media" style="margin-bottom: 20px;">
        <a href="#" style="color: #2814de; margin: 0 10px; font-size: 1.4em;"><i class="fab fa-facebook"></i></a>
        <a href="#" style="color: #2492dc; margin: 0 10px; font-size: 1.4em;"><i class="fab fa-twitter"></i></a>
        <a href="#" style="color: #ec3c7f; margin: 0 10px; font-size: 1.4em;"><i class="fab fa-instagram"></i></a>
        <a href="#" style="color: #39b1ed; margin: 0 10px; font-size: 1.4em;"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
    <p style="font-size: 0.9em;">© <span id="year"></span> ZenHeal. All rights reserved.</p>
  </footer>

  <script src="drug-detail.js"></script>
  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
`;

drugs.forEach(drug => {
  const letterDir = path.join(__dirname, drug.letter);
  if (!fs.existsSync(letterDir)){
    fs.mkdirSync(letterDir);
  }
  // Replace spaces with underscores for the filename
  const fileName = `${drug.drugName.replace(/\s+/g, '_')}.html`;
  const filePath = path.join(letterDir, fileName);
  fs.writeFileSync(filePath, template(drug));
  console.log(`Created file: ${filePath}`);
});

console.log("All drug files created successfully.");
