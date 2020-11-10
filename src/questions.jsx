const questions=[
    {
        question:'True or False : The novel coronavirus is the same as COVID-19.',
        choices:[
            'True',
            'False',
        ],
        correct:1,
        desc:'COVID-19 is the name of the disease caused by the novel coronavirus, SARS-CoV-2, and is short for "Coronavirus Disease 2019.'
        
    },{
        question:'Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?',
        choices:['Solidarity','Plasma Therapy','Remdesivir','Hydroxychloroquine'],
        correct:2,
        desc:'Plasma Therapy or Convalescent Plasma Therapy is a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition.'
    },
    {
        question:'Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?',
        choices:['BNT162','PICOVACC','VINFER','COVACC'],
        correct:1,
        desc:'BNT162 is jointly developed by the German company BioNTech and US pharma giant Pfizer. It is a group of four potential vaccines based on the messenger RNA or mRNA, concept. On the other hand, PICOVACC is an inactivated vaccine developed by the private biopharma company Sinovac. These vaccines are in clinical trial phases.'
    },
    {
        question:'When experts talk about flattening the curve, what does that mean?',
        choices:[
            'It’s an axiom that means follow the evidence, rather than trust appearances, such as the earth appearing flat when it is actually round',
            'It means to slow the spread of a virus to reduce the peak number of cases and related demands on hospitals and infrastructure ',
            'It means to arrive at the point in the pandemic when the number of daily deaths due to COVID-19 are flat ',
        ],
        correct:2,
        desc:'Social distancing interventions are in place to help flatten the curve for the COVID-19 pandemic. ',

    },
    {
        question:'What is herd immunity?',
        choices:[
            'A situation where you purposefully get diseases from animals in order to protect yourself from future disease',
            'A situation in which a sufficient proportion of a population is immune to an infectious disease (through vaccination and/or prior illness) to make its spread from person to person unlikely',
            'When a sufficient number of animals are immune from disease that they are less likely to transmit it to humans ',
        ],correct:2,
        desc:'The United States has not yet reached herd immunity for COVID-19 since a sufficient proportion of the population has not been infected and there is not a vaccine yet available.',
    },
    {
        question:'How does Coronavirus transmit?',
        choices:['When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.',
                    'If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.',
                    'If the distance is less than 1 meter from the infected person.',
                    'All the above are correct.'],
        correct:4,
        desc:'Coronavirus (COVID-19) transmits through the above-mentioned options.'
    },{
        question:' Which of the following diseases are related to coronavirus?',
        choices:['MERS','SARS','Both A and B','Neither A nor B'],
        correct:3,
        desc:'Coronavirus may cause illness from the common cold to more other serious diseases like Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).'
    },{
        question:'Which of the following statement is/are correct about Favipiravir?',
        choices:['Favipiravir is an antiviral COVID-19 drug.',
                    'Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.',
                    'It is Indias first COVID-19 drug launched, priced at Rs 103 per tablet.',
                    'All of above'],
        correct:4,
        desc:' Favipiravir is an antiviral COVID-19 drug. Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir. It is Indias first COVID-19 drug launched, priced at Rs 103 per tablet.'
    },
    {
        question:'Mild Symptoms of Novel coronavirus are:',
        choices:['Shortness of breath','Fever','Cough','All the above'],
        correct:4,
        desc:' People infected with novel coronavirus or 2019-nCoV reported with mild symptoms namely fever, cough and shortness of breath. Whereas other common symptoms may include runny nose, headache, sore throat, a general feeling of unwell, etc.'
    },
    {
        question:'Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?',
        choices:['Monkeys','Hens','Kites','Lizards'],
        correct:1,
        desc:'After seeing positive results on mice now Thailand announced that it has proceeded to test its novel coronavirus vaccine on monkeys. The vaccine uses messenger RNA (mRNA) technology to weaken the strain of the virus and produce antigens to fight with the virus from the root'
    }

]

export default questions;