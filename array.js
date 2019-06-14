var source = {
    matrix: [
        //row 0
        //[
            //{ atomicNumber: null, symbol: 1, element: 'IA', mass: '1A', class: 'other', group: 1 },
            //{ atomicNumber: null, symbol: 18, element: 'VIIIA', mass: '8A', class: 'other', group: 18 }
        //],
        //row-1
        [
            { atomicNumber: 1, symbol: 'H', element: 'Hydrogen', mass: '1.008', class: 'nonmetal', group: 1 },
            { class: 'emptyone' },
            //{ atomicNumber: null, symbol: 2, element: 'IIA', mass: '3A', class: 'other', group: 2 },
            //{ atomicNumber: null, symbol: 14, element: 'IVA', mass: '5A', class: 'other', group: 14 },
            //{ atomicNumber: null, symbol: 15, element: 'VA', mass: '6A', class: 'other', group: 15 },
            //{ atomicNumber: null, symbol: 16, element: 'VIA', mass: '7A', class: 'other', group: 16 },
            //{ atomicNumber: null, symbol: 17, element: 'VIIA', mass: '8A', class: 'other', group: 17 },
            { atomicNumber: 2, symbol: 'He', element: 'Helium', mass: 4.002, class: 'noble_gas', group: 18 }
        ],
        //row-2
        [
            { atomicNumber: 3, symbol: 'Li', element: 'Lithium', mass: 6.94, class: 'alkali_metal', group: 1 },
            { atomicNumber: 4, symbol: 'Be', element: 'Beryllium', mass: 9.012, class: 'alkaline_metal', group: 2 },
            { class: 'emptytwo' },
            { atomicNumber: 5, symbol: 'B', element: 'Boron', mass: 10.81, class: 'semi_metal', group: 13 },
            { atomicNumber: 6, symbol: 'C', element: 'Carbon', mass: 12.011, class: 'nonmetal', group: 14 },
            { atomicNumber: 7, symbol: 'N', element: 'Nitrogen', mass: 14.007, class: 'nonmetal', group: 15 },
            { atomicNumber: 8, symbol: 'O', element: 'Oxygen', mass: 15.999, class: 'nonmetal', group: 16 },
            { atomicNumber: 9, symbol: 'F', element: 'Fluorine', mass: 18.998, class: 'halogen', group: 17 },
            { atomicNumber: 10, symbol: 'Ne', element: 'Neon', mass: 20.1797, class: 'noble_gas', group: 18, }
        ],
        //row-3
        [
            { atomicNumber: 11, symbol: 'Na', element: 'Sodium', mass: 22.989, class: 'alkali_metal', group: 1 },
            { atomicNumber: 12, symbol: 'Mg', element: 'Magnesium', mass: 24.305, class: 'alkaline_metal', group: 2 },
            { class: 'emptythree' },
            //{ atomicNumber: null, symbol: 3, element: 'IIIB', mass: '3B', class: 'other', group: 3 },
            //{ atomicNumber: null, symbol: 4, element: 'IVB', mass: '4B', class: 'other', group: 4 },
            //{ atomicNumber: null, symbol: 5, element: 'VB', mass: '5B', class: 'other', group: 5 },
            //{ atomicNumber: null, symbol: 6, element: 'VIB', mass: '6B', class: 'other', group: 6 },
            //{ atomicNumber: null, symbol: 7, element: 'VIIB', mass: '7B', class: 'other', group: 7 },
            //{ atomicNumber: null, symbol: 8, element: 'VIII', mass: '8B', class: 'other', group: 8 },
            //{ atomicNumber: null, symbol: 9, element: 'VIII', mass: '8B', class: 'other', group: 9 },
            //{ atomicNumber: null, symbol: 10, element: 'VIII', mass: '8B', class: 'other', group: 10 },
            //{ atomicNumber: null, symbol: 11, element: 'IB', mass: '1B', class: 'other', group: 11 },
            //{ atomicNumber: null, symbol: 12, element: 'IIB', mass: '2B', class: 'other', group: 12 },
            { atomicNumber: 13, symbol: 'Al', element: 'Aluminium', mass: 26.981, class: 'basic_metal', group: 13 },
            { atomicNumber: 14, symbol: 'Si', element: 'Silicon', mass: 28.085, class: 'semi_metal', group: 14 },
            { atomicNumber: 15, symbol: 'P', element: 'Phosphorus', mass: 30.973, class: 'nonmetal', group: 15 },
            { atomicNumber: 16, symbol: 'S', element: 'Sulfur', mass: 32.06, class: 'nonmetal', group: 16 },
            { atomicNumber: 17, symbol: 'Cl', element: 'Chlorine', mass: 35.45, class: 'halogen', group: 17 },
            { atomicNumber: 18, symbol: 'Ar', element: 'Argon', mass: 39.948, class: 'noble_gas', group: 18 }
        ],
        //row-4
        [
            { atomicNumber: 19, symbol: 'K', element: 'Kalium', mass: 39.0983, class: 'alkali_metal', group: 1 },
            { atomicNumber: 20, symbol: 'Ca', element: 'Calcium', mass: 40.078, class: 'alkaline_metal', group: 2 },
            { atomicNumber: 21, symbol: 'Sc', element: 'Scandium', mass: 44.955, class: 'transition_metal', group: 3 },
            { atomicNumber: 22, symbol: 'Ti', element: 'Titanium', mass: 47.867, class: 'transition_metal', group: 4 },
            { atomicNumber: 23, symbol: 'V', element: 'Vanadium', mass: 50.9415, class: 'transition_metal', group: 5 },
            { atomicNumber: 24, symbol: 'Cr', element: 'Chromium', mass: 51.9961, class: 'transition_metal', group: 6 },
            { atomicNumber: 25, symbol: 'Mn', element: 'Manganese', mass: 54.938, class: 'transition_metal', group: 7 },
            { atomicNumber: 26, symbol: 'Fe', element: 'Ferrum', mass: 55.845, class: 'transition_metal', group: 8 },
            { atomicNumber: 27, symbol: 'Co', element: 'Cobalt', mass: 58.933, class: 'transition_metal', group: 9 },
            { atomicNumber: 28, symbol: 'Ni', element: 'Nickel', mass: 58.693, class: 'transition_metal', group: 10 },
            { atomicNumber: 29, symbol: 'Cu', element: 'Cuprum', mass: 63.546, class: 'transition_metal', group: 11 },
            { atomicNumber: 30, symbol: 'Zn', element: 'Zinc', mass: 65.38, class: 'transition_metal', group: 12 },
            { atomicNumber: 31, symbol: 'Ga', element: 'Gallium', mass: 69.723, class: 'basic_metal', group: 13 },
            { atomicNumber: 32, symbol: 'Ge', element: 'Germanium', mass: 72.63, class: 'semi_metal', group: 14 },
            { atomicNumber: 33, symbol: 'As', element: 'Arsenic', mass: 74.921, class: 'semi_metal', group: 15 },
            { atomicNumber: 34, symbol: 'Se', element: 'Selenium', mass: 78.971, class: 'nonmetal', group: 16 },
            { atomicNumber: 35, symbol: 'Br', element: 'Bromine', mass: 79.904, class: 'halogen', group: 17 },
            { atomicNumber: 36, symbol: 'Cr', element: 'Krypton', mass: 83.798, class: 'noble_gas', group: 18 }
        ],
        //row-5
        [
            { atomicNumber: 37, symbol: 'Rb', element: 'Rubidium', mass: 85.467, class: 'alkali_metal', group: 1 },
            { atomicNumber: 38, symbol: 'Sr', element: 'Strontium', mass: 87.62, class: 'alkaline_metal', group: 2 },
            { atomicNumber: 39, symbol: 'Y', element: 'Yttrium', mass: 88.90584, class: 'transition_metal', group: 3 },
            { atomicNumber: 40, symbol: 'Zr', element: 'Zirconium', mass: 91.224, class: 'transition_metal', group: 4 },
            { atomicNumber: 41, symbol: 'Nb', element: 'Niobium', mass: 92.90637, class: 'transition_metal', group: 5 },
            { atomicNumber: 42, symbol: 'Mo', element: 'Molybdenum', mass: 95.95, class: 'transition_metal', group: 6 },
            { atomicNumber: 43, symbol: 'Tc', element: 'Technetium', mass: (98), class: 'transition_metal', group: 7 },
            { atomicNumber: 44, symbol: 'Ru', element: 'Ruthenium', mass: 101.07, class: 'transition_metal', group: 8 },
            { atomicNumber: 45, symbol: 'Rh', element: 'Rhodium', mass: 102.9055, class: 'transition_metal', group: 9 },
            { atomicNumber: 46, symbol: 'Pd', element: 'Palladium', mass: 106.42, class: 'transition_metal', group: 10 },
            { atomicNumber: 47, symbol: 'Ag', element: 'Argentum', mass: 107.868, class: 'transition_metal', group: 11 },
            { atomicNumber: 48, symbol: 'Cd', element: 'Cadmium', mass: 112.414, class: 'transition_metal', group: 12 },
            { atomicNumber: 49, symbol: 'In', element: 'Indium', mass: 114.818, class: 'basic_metal', group: 13 },
            { atomicNumber: 50, symbol: 'Sn', element: 'Stannum', mass: 118.710, class: 'basic_metal', group: 14 },
            { atomicNumber: 51, symbol: 'Sb', element: 'Stibium', mass: 121.760, class: 'semi_metal', group: 15 },
            { atomicNumber: 52, symbol: 'Te', element: 'Tellurium', mass: 127.60, class: 'semi_metal', group: 16 },
            { atomicNumber: 53, symbol: 'I', element: 'Iodine', mass: 126.9044, class: 'halogen', group: 17 },
            { atomicNumber: 54, symbol: 'Xe', element: 'Xenon', mass: 131.293, class: 'noble_gas', group: 18 }
        ],
        //row-6
        [
            { atomicNumber: 55, symbol: 'Cs', element: 'Caesium', mass: 132.905, class: 'alkali_metal', group: 1 },
            { atomicNumber: 56, symbol: 'Ba', element: 'Barium', mass: 137.327, class: 'alkaline_metal', group: 2 },
            { class: 'empty' },
            { atomicNumber: 72, symbol: 'Hf', element: 'Hafnium', mass: 178.49, class: 'transition_metal', group: 4 },
            { atomicNumber: 73, symbol: 'Ta', element: 'Tantalum', mass: 180.947, class: 'transition_metal', group: 5 },
            { atomicNumber: 74, symbol: 'W', element: 'Wolfram', mass: 183.84, class: 'transition_metal', group: 6 },
            { atomicNumber: 75, symbol: 'Re', element: 'Rhenium', mass: 186.207, class: 'transition_metal', group: 7 },
            { atomicNumber: 76, symbol: 'Os', element: 'Osmium', mass: 190.23, class: 'transition_metal', group: 8 },
            { atomicNumber: 77, symbol: 'Ir', element: 'Iridium', mass: 192.217, class: 'transition_metal', group: 9 },
            { atomicNumber: 78, symbol: 'Pt', element: 'Platinum', mass: 195.084, class: 'transition_metal', group: 10 },
            { atomicNumber: 79, symbol: 'Au', element: 'Aurum', mass: 196.966, class: 'transition_metal', group: 11 },
            { atomicNumber: 80, symbol: 'Hg', element: 'Hydrargyrum', mass: 200.59, class: 'transition_metal', group: 12 },
            { atomicNumber: 81, symbol: 'Tl', element: 'Thallium', mass: 204.38, class: 'basic_metal', group: 13 },
            { atomicNumber: 82, symbol: 'Pb', element: 'Plumbum', mass: 207.2, class: 'basic_metal', group: 14 },
            { atomicNumber: 83, symbol: 'Be', element: 'Bismuth', mass: 208.98, class: 'basic_metal', group: 15 },
            { atomicNumber: 84, symbol: 'Po', element: 'Polonium', mass: (209), class: 'semi_metal', group: 16 },
            { atomicNumber: 85, symbol: 'At', element: 'Astatine', mass: (210), class: 'halogen', group: 17 },
            { atomicNumber: 86, symbol: 'Rn', element: 'Radon', mass: (222), class: 'noble_gas', group: 18 }
        ],
        //row-7
        [
            { atomicNumber: 87, symbol: 'Fr', element: 'Francium', mass: (223), class: 'alkali_metal', group: 1 },
            { atomicNumber: 88, symbol: 'Ra', element: 'Radium', mass: (226), class: 'alkaline_metal', group: 2 },
            { class: 'empty' },
            { atomicNumber: 104, symbol: 'Rf', element: 'Rutherfordium', mass: (267), class: 'transition_metal', group: 4 },
            { atomicNumber: 105, symbol: 'Db', element: 'Dubnium', mass: (268), class: 'transition_metal', group: 5 },
            { atomicNumber: 106, symbol: 'Sg', element: 'Seaborgium', mass: (271), class: 'transition_metal', group: 6 },
            { atomicNumber: 107, symbol: 'Bh', element: 'Bohrium', mass: (272), class: 'transition_metal', group: 7 },
            { atomicNumber: 108, symbol: 'Hs', element: 'Hassium', mass: (270), class: 'transition_metal', group: 8 },
            { atomicNumber: 109, symbol: 'Mt', element: 'Meitnerium', mass: (276), class: 'transition_metal', group: 9 },
            { atomicNumber: 110, symbol: 'Ds', element: 'Darmstadtium', mass: (281), class: 'transition_metal', group: 10 },
            { atomicNumber: 111, symbol: 'Rg', element: 'Roentgenium', mass: (280), class: 'transition_metal', group: 11 },
            { atomicNumber: 112, symbol: 'Cn', element: 'Copernicium', mass: (285), class: 'transition_metal', group: 12 },
            { atomicNumber: 113, symbol: 'Nh', element: 'Nihonium', mass: (284), class: 'basic_metal', group: 13 },
            { atomicNumber: 114, symbol: 'Fl', element: 'Flerovium', mass: (289), class: 'basic_metal', group: 14 },
            { atomicNumber: 115, symbol: 'Mc', element: 'Moscovium', mass: (288), class: 'basic_metal', group: 15 },
            { atomicNumber: 116, symbol: 'Lv', element: 'Livermorium', mass: (293), class: 'basic_metal', group: 16 },
            { atomicNumber: 117, symbol: 'Ts', element: 'Tennessine', mass: (294), class: 'halogen', group: 17 },
            { atomicNumber: 118, symbol: 'Og', element: 'Oganesson', mass: (294), class: 'noble_gas', group: 18 }
        ],
        //row-8
        [
            { class: 'emptylast' },
            { atomicNumber: 57, symbol: 'La', element: 'Lanthanum', mass: 138.905, class: 'lanthanide', group: 4 },
            { atomicNumber: 58, symbol: 'Ce', element: 'Cerium', mass: 140.116, class: 'lanthanide', group: 5 },
            { atomicNumber: 59, symbol: 'Pr', element: 'Praseodymium', mass: 140.907, class: 'lanthanide', group: 6 },
            { atomicNumber: 60, symbol: 'Nd', element: 'Neodymium', mass: 144.242, class: 'lanthanide', group: 7 },
            { atomicNumber: 61, symbol: 'Pm', element: 'Promethium', mass: '(145)', class: 'lanthanide', group: 8 },
            { atomicNumber: 62, symbol: 'Sm', element: 'Samarium', mass: 150.36, class: 'lanthanide', group: 9 },
            { atomicNumber: 63, symbol: 'Eu', element: 'Europium', mass: 151.964, class: 'lanthanide', group: 10 },
            { atomicNumber: 64, symbol: 'Gd', element: 'Gadolinium', mass: 157.25, class: 'lanthanide', group: 11 },
            { atomicNumber: 65, symbol: 'Tb', element: 'Terbium', mass: 158.92535, class: 'lanthanide', group: 12 },
            { atomicNumber: 66, symbol: 'Dy', element: 'Dysprosium', mass: 162.500, class: 'lanthanide', group: 13 },
            { atomicNumber: 67, symbol: 'Ho', element: 'Holmium', mass: 164.93033, class: 'lanthanide', group: 14 },
            { atomicNumber: 68, symbol: 'Er', element: 'Erbium', mass: 167.259, class: 'lanthanide', group: 15 },
            { atomicNumber: 69, symbol: 'Tm', element: 'Thulium', mass: 168.934, class: 'lanthanide', group: 16 },
            { atomicNumber: 70, symbol: 'Yb', element: 'Ytterbium', mass: 173.054, class: 'lanthanide', group: 17 },
            { atomicNumber: 71, symbol: 'Lu', element: 'Lutetium', mass: 174.9668, class: 'lanthanide', group: 18 }
        ],
        //row-9
        [
            { class: 'emptylast' },
            { atomicNumber: 89, symbol: 'Ac', element: 'Actinium', mass: (227), class: 'actinide', group: 4 },
            { atomicNumber: 90, symbol: 'Th', element: 'Thorium', mass: 232.0377, class: 'actinide', group: 5 },
            { atomicNumber: 91, symbol: 'Pa', element: 'Protactinium', mass: 231.035, class: 'actinide', group: 6 },
            { atomicNumber: 92, symbol: 'U', element: 'Uranium', mass: 238.02891, class: 'actinide', group: 7 },
            { atomicNumber: 93, symbol: 'Np', element: 'Neptunium', mass: '(237)', class: 'actinide', group: 8 },
            { atomicNumber: 94, symbol: 'Pu', element: 'Plutonium', mass: '(244)', class: 'actinide', group: 9 },
            { atomicNumber: 95, symbol: 'Am', element: 'Americium', mass: '(243)', class: 'actinide', group: 10 },
            { atomicNumber: 96, symbol: 'Cm', element: 'Curium', mass: '(247)', class: 'actinide', group: 11 },
            { atomicNumber: 97, symbol: 'Bk', element: 'Berkelium', mass: '(247)', class: 'actinide', group: 12 },
            { atomicNumber: 98, symbol: 'Cf', element: 'Californium', mass: '(251)', class: 'actinide', group: 13 },
            { atomicNumber: 99, symbol: 'Es', element: 'Einsteinium', mass: '(252)', class: 'actinide', group: 14 },
            { atomicNumber: 100, symbol: 'Fm', element: 'Fermium', mass: '(257)', class: 'actinide', group: 15 },
            { atomicNumber: 101, symbol: 'Md', element: 'Mendelevium', mass: '(258)', class: 'actinide', group: 16 },
            { atomicNumber: 102, symbol: 'No', element: 'Nobelium', mass: '(259)', class: 'actinide', group: 17 },
            { atomicNumber: 103, symbol: 'Lr', element: 'Lawrencium', mass: '(262)', class: 'actinide', group: 18 }
        ],
    ],

    slot: [
        { elemType: 'Alkali Metal', class: 'alkali_metal' },
        { elemType: 'Alkaline Earth', class: 'alkaline_metal' },
        { elemType: 'Transition Metal', class: 'transition_metal' },
        { elemType: 'Basic Metal', class: 'basic_metal' },
        { elemType: 'Semimetal', class: 'semi_metal' },
        { elemType: 'Nonmetal', class: 'nonmetal' },
        { elemType: 'Halogen', class: 'halogen' },
        { elemType: 'Noble Gas', class: 'noble_gas' },
        { elemType: 'Lanthanide', class: 'lanthanide' },
        { elemType: 'Actinide', class: 'actinide' }
    ]
};
