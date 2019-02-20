const schoolinfo = [
  {
    id: 1,
    name: 'UCLA',
    tuitioninstate:  13225,
    tuitionoutofstate:  42217,
    livingexpensesoncampus:  19982,
    Livingexpensesoffcampus:  18407,
    Livingexpenseswithrelatives:  11576,
    type: 'UC',
  },
  {
    id: 2,
    name: 'UC Berkeley',
    tuitioninstate:  14184,
    tuitionoutofstate:  43232,
    livingexpensesoncampus:  25887,
    Livingexpensesoffcampus:  20147,
    Livingexpenseswithrelatives:  13207,
    type: 'UC',
  },
  {
    id: 3,
    name: 'UC Santa Barbara',
    tuitioninstate:  14472,
    tuitionoutofstate:  42486,
    livingexpensesoncampus:  17289.75,
    Livingexpensesoffcampus:  18885.75,
    Livingexpenseswithrelatives:  13509.75,
    type: 'UC',
  },
  {
    id: 4,
    name: 'UC Davis',
    tuitioninstate:  14403,
    tuitionoutofstate:  43395,
    livingexpensesoncampus:  20889,
    Livingexpensesoffcampus:  15892,
    Livingexpenseswithrelatives:  12693,
    type: 'UC',
  },
  {
    id: 5,
    name: 'UC Irvine',
    tuitioninstate:  15454,
    tuitionoutofstate:  44446,
    livingexpensesoncampus:  18805,
    Livingexpensesoffcampus:  16999,
    Livingexpenseswithrelatives:  10810,
    type: 'UC',
  },
  {
    id: 6,
    name: 'UC San Francisco',
    tuitioninstate:  0,
    tuitionoutofstate:  0,
    livingexpensesoncampus:  0,
    Livingexpensesoffcampus:  0,
    Livingexpenseswithrelatives:  0,
    type: 'UC',
  },
  {
    id: 7,
    name: 'UC San Diego',
    tuitioninstate:  14199,
    tuitionoutofstate:  43191,
    livingexpensesoncampus:  18913,
    Livingexpensesoffcampus:  18775,
    Livingexpenseswithrelatives:  12388,
    type: 'UC',
  },
  {
    id: 8,
    name: 'UC Santa Cruz',
    tuitioninstate:  13962,
    tuitionoutofstate:  42954,
    livingexpensesoncampus:  22458,
    Livingexpensesoffcampus:  19218,
    Livingexpenseswithrelatives:  13332,
    type: 'UC',
  },
  {
    id: 9,
    name: 'UC Riverside',
    tuitioninstate:  15602,
    tuitionoutofstate:  44594,
    livingexpensesoncampus:  22900,
    Livingexpensesoffcampus:  16650,
    Livingexpenseswithrelatives:  12625,
    type: 'UC',
  },
  {
    id: 10,
    name: 'UC Merced',
    tuitioninstate:  13538,
    tuitionoutofstate:  42530,
    livingexpensesoncampus:  21778.3333333333,
    Livingexpensesoffcampus:  14294.3333333333,
    Livingexpenseswithrelatives:  12712.3333333333,
    type: 'UC',
  },
  {
    id: 11,
    name: 'Cal State Northridge',
    tuitioninstate:  6888,
    tuitionoutofstate:  18755,
    livingexpensesoncampus:  16076,
    Livingexpensesoffcampus:  20176,
    Livingexpenseswithrelatives:  10486,
    type: 'CSU',
  },
  {
    id: 12,
    name: 'Cal State Long Beach',
    tuitioninstate:  6798,
    tuitionoutofstate:  17094,
    livingexpensesoncampus:  17770,
    Livingexpensesoffcampus:  19182,
    Livingexpenseswithrelatives:  10552,
    type: 'CSU',
  },
  {
    id: 13,
    name: 'Cal State San Luis Obispo',
    tuitioninstate:  9432,
    tuitionoutofstate:  21312,
    livingexpensesoncampus:  18534,
    Livingexpensesoffcampus:  18534,
    Livingexpenseswithrelatives:  10512,
    type: 'CSU',
  },
  {
    id: 14,
    name: 'Cal State San Jose',
    tuitioninstate:  7796,
    tuitionoutofstate:  17300,
    livingexpensesoncampus:  21397,
    Livingexpensesoffcampus:  20178,
    Livingexpenseswithrelatives:  10487,
    type: 'CSU',
  },
  {
    id: 15,
    name: 'Cal State San Diego',
    tuitioninstate:  7488,
    tuitionoutofstate:  19368,
    livingexpensesoncampus:  22955,
    Livingexpensesoffcampus:  22955,
    Livingexpenseswithrelatives:  22955,
    type: 'CSU',
  },
  {
    id: 16,
    name: 'USC',
    tuitioninstate:  55320,
    tuitionoutofstate:  55320,
    livingexpensesoncampus:  18600,
    Livingexpensesoffcampus:  18600,
    Livingexpenseswithrelatives:  18600,
    type: 'Private Non-Profit',
  },
  {
    id: 17,
    name: 'Stanford',
    tuitioninstate:  50703,
    tuitionoutofstate:  50703,
    livingexpensesoncampus:  25441,
    Livingexpensesoffcampus:  25441,
    Livingexpenseswithrelatives:  25441,
    type: 'Private Non-Profit',
  },
  {
    id: 18,
    name: 'Pomona College',
    tuitioninstate:  52412,
    tuitionoutofstate:  52412,
    livingexpensesoncampus:  21311,
    Livingexpensesoffcampus:  16311,
    Livingexpenseswithrelatives:  11311,
    type: 'Private Non-Profit',
  },
  {
    id: 19,
    name: 'Santa Clara University',
    tuitioninstate:  51081,
    tuitionoutofstate:  51081,
    livingexpensesoncampus:  20556,
    Livingexpensesoffcampus:  19830,
    Livingexpenseswithrelatives:  11325,
    type: 'Private Non-Profit',
  },
  {
    id: 20,
    name: 'Occidental College',
    tuitioninstate:  54090,
    tuitionoutofstate:  54090,
    livingexpensesoncampus:  22040,
    Livingexpensesoffcampus:  22040,
    Livingexpenseswithrelatives:  22040,
    type: 'Private Non-Profit',
  },
  {
    id: 21,
    name: 'Chapman University',
    tuitioninstate:  52340,
    tuitionoutofstate:  52340,
    livingexpensesoncampus:  20388,
    Livingexpensesoffcampus:  16944,
    Livingexpenseswithrelatives:  12070,
    type: 'Private Non-Profit',
  },
  {
    id: 22,
    name: 'Thomas Aquinas College',
    tuitioninstate:  25600,
    tuitionoutofstate:  25600,
    livingexpensesoncampus:  12516,
    Livingexpensesoffcampus:  12516,
    Livingexpenseswithrelatives:  12516,
    type: 'Private Non-Profit',
  },
  {
    id: 23,
    name: 'Northwestern University',
    tuitioninstate:  54120,
    tuitionoutofstate:  54120,
    livingexpensesoncampus:  25081,
    Livingexpensesoffcampus:  25081,
    Livingexpenseswithrelatives:  10950,
    type: 'Private Non-Profit',
  },
  {
    id: 24,
    name: 'Alice Lloyd College',
    tuitioninstate:  12150,
    tuitionoutofstate:  12150,
    livingexpensesoncampus:  12790,
    Livingexpensesoffcampus:  10200,
    Livingexpenseswithrelatives:  10200,
    type: 'Private Non-Profit',
  },
  {
    id: 25,
    name: 'Williams College',
    tuitioninstate:  55140,
    tuitionoutofstate:  55140,
    livingexpensesoncampus:  17976,
    Livingexpensesoffcampus:  17976,
    Livingexpenseswithrelatives:  17976,
    type: 'Private Non-Profit',
  },
  {
    id: 26,
    name: 'Yale University',
    tuitioninstate:  53430,
    tuitionoutofstate:  53430,
    livingexpensesoncampus:  19750,
    Livingexpensesoffcampus:  19750,
    Livingexpenseswithrelatives:  19750,
    type: 'Private Non-Profit',
  },
  {
    id: 27,
    name: 'Princeton',
    tuitioninstate:  51870,
    tuitionoutofstate:  51870,
    livingexpensesoncampus:  23750,
    Livingexpensesoffcampus:  23750,
    Livingexpenseswithrelatives:  23750,
    type: 'Private Non-Profit',
  },
  {
    id: 28,
    name: 'Washington University',
    tuitioninstate:  53399,
    tuitionoutofstate:  53399,
    livingexpensesoncampus:  22740,
    Livingexpensesoffcampus:  22740,
    Livingexpenseswithrelatives:  22740,
    type: 'Private Non-Profit',
  },
  {
    id: 29,
    name: 'Vassar College',
    tuitioninstate:  56130,
    tuitionoutofstate:  56130,
    livingexpensesoncampus:  16710,
    Livingexpensesoffcampus:  16710,
    Livingexpenseswithrelatives:  16710,
    type: 'Private Non-Profit',
  },
  {
    id: 30,
    name: 'Colgate University',
    tuitioninstate:  55530,
    tuitionoutofstate:  55530,
    livingexpensesoncampus:  18186,
    Livingexpensesoffcampus:  18186,
    Livingexpenseswithrelatives:  18186,
    type: 'Private Non-Profit',
  },
  {
    id: 31,
    name: 'Bowdoin College',
    tuitioninstate:  53418,
    tuitionoutofstate:  53418,
    livingexpensesoncampus:  16593,
    Livingexpensesoffcampus:  16593,
    Livingexpenseswithrelatives:  16593,
    type: 'Private Non-Profit',
  },
  {
    id: 32,
    name: 'Vanderbilt University',
    tuitioninstate:  48600,
    tuitionoutofstate:  48600,
    livingexpensesoncampus:  22826,
    Livingexpensesoffcampus:  22826,
    Livingexpenseswithrelatives:  22826,
    type: 'Private Non-Profit',
  },
];

const salaryinfo = [
  {
    id:1,
    major:
    [
      {
        name: 'General',
        salary: 56600,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 51500,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 47100,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 46000,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 54900,
      },
      {
        name: 'Biology',
        salary: 46100,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 52800,
      },
      {
        name: 'Genetics',
        salary: 50100,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 57600,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 48300,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 62800,
      },
      {
        name: 'Accounting',
        salary: 65000,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 56000,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 72900,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 71100,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 74000,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 72600,
      },
      {
        name: 'Marketing',
        salary: 58700,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 50400,
      },
      {
        name: 'Journalism',
        salary: 57200,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 56500,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 40100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 77000,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 67700,
      },
      {
        name: 'Chemical Engineering',
        salary: 72300,
      },
      {
        name: 'Civil Engineering',
        salary: 69700,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 80400,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 77200,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 68500,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 72900,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 52200,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 55200,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 59600,
      },
      {
        name: 'Romance Languages',
        salary: 48200,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 83900,
      },
      {
        name: 'Public Health',
        salary: 45000,
      },
      {
        name: 'History',
        salary: 51800,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 47500,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 46000,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 63700,
      },
      {
        name: 'Mathematics',
        salary: 69700,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 61900,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 51200,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 86400,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 50500,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 48700,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 52900,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 56300,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 69800,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 51300,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 53500,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 45300,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 62200,
      },
      {
        name: 'Geography and Cartography',
        salary: 50700,
      },
      {
        name: 'International Relations',
        salary: 43800,
      },
      {
        name: 'Political Science and Government',
        salary: 49700,
      },
      {
        name: 'Sociology',
        salary: 47500,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 48300,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 56600,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 44800,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 47200,
      },
      {
        name: 'Music',
        salary: 47300,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 50400,
      },
    ],
  },
  {
    id:2,
    major:
    [
      {
        name: 'General',
        salary: 64300,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 52800,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 55900,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 46300,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 46100,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 56000,
      },
      {
        name: 'Biology',
        salary: 52700,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 48600,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 63400,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 72700,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 78800,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 80200,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 103300,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 48700,
      },
      {
        name: 'Finance',
        salary: 74000,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 79300,
      },
      {
        name: 'International Business',
        salary: 67300,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 53100,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 58000,
      },
      {
        name: 'Journalism',
        salary: 46400,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 66000,
      },
      {
        name: 'Education',
        salary: 48700,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 72600,
      },
      {
        name: 'Chemical Engineering',
        salary: 74400,
      },
      {
        name: 'Civil Engineering',
        salary: 70400,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 106900,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 97500,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 80400,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 69700,
      },
      {
        name: 'Materials Engineering',
        salary: 70300,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 75400,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 69000,
      },
      {
        name: 'English Language and Literature',
        salary: 50800,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 77200,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 81500,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 52500,
      },
      {
        name: 'Romance Languages',
        salary: 54100,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 51000,
      },
      {
        name: 'History',
        salary: 48900,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 54300,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 39600,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 71200,
      },
      {
        name: 'Mathematics',
        salary: 73700,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 73100,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 43900,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 84300,
      },
      {
        name: 'Nutrition Sciences',
        salary: 44400,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 48300,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 49400,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 55600,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 58000,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 57700,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 55300,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 73100,
      },
      {
        name: 'Physics',
        salary: 64300,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 54300,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 47300,
      },
      {
        name: 'Social Work',
        salary: 41900,
      },
      {
        name: 'Anthropology',
        salary: 51200,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 67400,
      },
      {
        name: 'Geography and Cartography',
        salary: 45000,
      },
      {
        name: 'International Relations',
        salary: 50200,
      },
      {
        name: 'Political Science and Government',
        salary: 55800,
      },
      {
        name: 'Sociology',
        salary: 52600,
      },
      {
        name: 'Urban Studies',
        salary: 65700,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 68000,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 45100,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 53400,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 46000,
      },
      {
        name: 'Music',
        salary: 44800,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:3,
    major:
    [
      {
        name: 'General',
        salary: 53800,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 43700,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 48300,
      },
      {
        name: 'Biology',
        salary: 48600,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 49100,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 53400,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 57300,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 45800,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 58500,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 69900,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 64400,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 54600,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 76300,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 63500,
      },
      {
        name: 'Marketing',
        salary: 53300,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 49300,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 34500,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 73100,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 75600,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 75900,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 69700,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 51000,
      },
      {
        name: 'Literature',
        salary: 45900,
      },
      {
        name: 'Technical and Business Writing',
        salary: 60900,
      },
      {
        name: 'Classics',
        salary: 47200,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 56800,
      },
      {
        name: 'Romance Languages',
        salary: 49300,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 47500,
      },
      {
        name: 'Law',
        salary: 61300,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 44700,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 48300,
      },
      {
        name: 'Mathematics',
        salary: 52400,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 55000,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 47400,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 33800,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 69400,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 47400,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 51600,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 53400,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 47600,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 62400,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 50100,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 54900,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 44700,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 62200,
      },
      {
        name: 'Geography and Cartography',
        salary: 52800,
      },
      {
        name: 'International Relations',
        salary: 46600,
      },
      {
        name: 'Political Science and Government',
        salary: 52600,
      },
      {
        name: 'Sociology',
        salary: 51100,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 56000,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 44100,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 42400,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 43100,
      },
      {
        name: 'Music',
        salary: 44200,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:4,
    major:
    [
      {
        name: 'General',
        salary: 55700,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 48200,
      },
      {
        name: 'Animal Science',
        salary: 36300,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 49500,
      },
      {
        name: 'Food Science',
        salary: 47600,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 64100,
      },
      {
        name: 'Landscape Architecture',
        salary: 48100,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 38600,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 41700,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 52100,
      },
      {
        name: 'Biology',
        salary: 53300,
      },
      {
        name: 'Biotechnology',
        salary: 54100,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 45000,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 54200,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 53100,
      },
      {
        name: 'Genetics',
        salary: 53400,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 60300,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 51200,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 35800,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 43000,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 47400,
      },
      {
        name: 'Accounting',
        salary: 63100,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 52500,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 57900,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 63500,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 55600,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 50900,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 51800,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 46100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 76400,
      },
      {
        name: 'Biochemical Engineering',
        salary: 66700,
      },
      {
        name: 'Biomedical Engineering',
        salary: 66300,
      },
      {
        name: 'Chemical Engineering',
        salary: 70800,
      },
      {
        name: 'Civil Engineering',
        salary: 65300,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 88400,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 74100,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 63600,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 66800,
      },
      {
        name: 'Systems Engineering',
        salary: 68600,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 47200,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 40400,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 45500,
      },
      {
        name: 'Human Development and Related Services',
        salary: 42300,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 48500,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 44600,
      },
      {
        name: 'Romance Languages',
        salary: 43100,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 45800,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 51600,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 59900,
      },
      {
        name: 'Mathematics',
        salary: 52400,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 63400,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 52500,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 43700,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 53100,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 39400,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 52900,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 32600,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 56500,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 48800,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 70700,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 47700,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 49100,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 60100,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 50900,
      },
      {
        name: 'Political Science and Government',
        salary: 52800,
      },
      {
        name: 'Sociology',
        salary: 51600,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 51300,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 41500,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 40000,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 43100,
      },
      {
        name: 'Music',
        salary: 55500,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:5,
    major:
    [
      {
        name: 'General',
        salary: 54500,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 41900,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 36600,
      },
      {
        name: 'Biology',
        salary: 46700,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 46000,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 50700,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 50300,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 51400,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 53900,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 56000,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 48000,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 80600,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 37500,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 67800,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 63100,
      },
      {
        name: 'Chemical Engineering',
        salary: 70500,
      },
      {
        name: 'Civil Engineering',
        salary: 61200,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 73000,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 67800,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 53500,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 70000,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 67800,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 42200,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 53500,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 54000,
      },
      {
        name: 'Romance Languages',
        salary: 45200,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 76300,
      },
      {
        name: 'Public Health',
        salary: 38900,
      },
      {
        name: 'History',
        salary: 43400,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 46800,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 44900,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 57600,
      },
      {
        name: 'Mathematics',
        salary: 55500,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 61500,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 53000,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 53800,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 52800,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 54000,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 64000,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 45800,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 41800,
      },
      {
        name: 'Criminology',
        salary: 43500,
      },
      {
        name: 'Economics',
        salary: 52900,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 51000,
      },
      {
        name: 'Political Science and Government',
        salary: 50700,
      },
      {
        name: 'Sociology',
        salary: 47300,
      },
      {
        name: 'Urban Studies',
        salary: 46800,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 48800,
      },
      {
        name: 'Dance',
        salary: 39800,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 40000,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 40400,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 43200,
      },
      {
        name: 'Music',
        salary: 35000,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:6,
    major:
    [
      {
        name: 'General',
        salary: 0,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 0,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 0,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 0,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 0,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 0,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 0,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 0,
      },
      {
        name: 'Sociology',
        salary: 0,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 0,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:7,
    major:
    [
      {
        name: 'General',
        salary: 58000,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 52400,
      },
      {
        name: 'Area Studies',
        salary: 46400,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 40200,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 51100,
      },
      {
        name: 'Biology',
        salary: 48100,
      },
      {
        name: 'Biotechnology',
        salary: 57200,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 43600,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 55700,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 61100,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 48200,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 44900,
      },
      {
        name: 'Accounting',
        salary: 55300,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 59200,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 68500,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 69200,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 42400,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 58700,
      },
      {
        name: 'Marketing',
        salary: 48800,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 48400,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 74700,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 66300,
      },
      {
        name: 'Chemical Engineering',
        salary: 69600,
      },
      {
        name: 'Civil Engineering',
        salary: 58100,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 83600,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 75800,
      },
      {
        name: 'Engineering Science',
        salary: 60400,
      },
      {
        name: 'Environmental Engineering',
        salary: 58800,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 70300,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 45900,
      },
      {
        name: 'Literature',
        salary: 47800,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 44200,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 45800,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 37100,
      },
      {
        name: 'History',
        salary: 57100,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 68600,
      },
      {
        name: 'Mathematics',
        salary: 61800,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 50400,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 72400,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 64300,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 44800,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 51000,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 66300,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 64400,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 49000,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 44500,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 55800,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 48900,
      },
      {
        name: 'Political Science and Government',
        salary: 52700,
      },
      {
        name: 'Sociology',
        salary: 46000,
      },
      {
        name: 'Urban Studies',
        salary: 54900,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 54100,
      },
      {
        name: 'Dance',
        salary: 30700,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 44600,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 44000,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 45800,
      },
      {
        name: 'Music',
        salary: 53200,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 50200,
      },
    ],
  },
  {
    id:8,
    major:
    [
      {
        name: 'General',
        salary: 52000,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 43000,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 40800,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 48800,
      },
      {
        name: 'Biology',
        salary: 50000,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 44600,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 39700,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 55200,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 58200,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 51200,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 64900,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 78000,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 52700,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 67900,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 42800,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 51200,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 79200,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 71700,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 46000,
      },
      {
        name: 'Literature',
        salary: 45900,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 44600,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 94300,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 49300,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 43600,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 38100,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 55500,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 80000,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 42800,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 48400,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 62200,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 49500,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 76800,
      },
      {
        name: 'Physics',
        salary: 66600,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 45900,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 45100,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 56900,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 45000,
      },
      {
        name: 'Sociology',
        salary: 45500,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 39600,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 46000,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 52300,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 50700,
      },
      {
        name: 'Music',
        salary: 60100,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 109200,
      },
    ],
  },
  {
    id:9,
    major:
    [
      {
        name: 'General',
        salary: 50700,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 38300,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 46300,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 45800,
      },
      {
        name: 'Biology',
        salary: 52900,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 46800,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 42600,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 50500,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 52000,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 46600,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 56000,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 36400,
      },
      {
        name: 'International Business',
        salary: 63300,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 48300,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 47100,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 55300,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 65800,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 66600,
      },
      {
        name: 'Chemical Engineering',
        salary: 68400,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 64700,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 72200,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 51900,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 67600,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 65000,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 45900,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 45000,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 39700,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 38100,
      },
      {
        name: 'Law',
        salary: 31700,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 40300,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 62400,
      },
      {
        name: 'Mathematics',
        salary: 61300,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 58400,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 31000,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 49400,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 48400,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 41600,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 32800,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 32900,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 48800,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 40300,
      },
      {
        name: 'Sociology',
        salary: 46500,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 27100,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 35400,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 41700,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 37000,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:10,
    major:
    [
      {
        name: 'General',
        salary: 53700,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 53000,
      },
      {
        name: 'Biology',
        salary: 44400,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 42600,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 76400,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 69000,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 63500,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 0,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 52000,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 65700,
      },
      {
        name: 'Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 36400,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 0,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 47200,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 40100,
      },
      {
        name: 'Sociology',
        salary: 55900,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 0,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:11,
    major:
    [
      {
        name: 'General',
        salary: 47800,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 37400,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 53900,
      },
      {
        name: 'Area Studies',
        salary: 34600,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 43800,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 56300,
      },
      {
        name: 'Biology',
        salary: 42100,
      },
      {
        name: 'Biotechnology',
        salary: 56300,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 57400,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 48000,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 63400,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 54500,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 40300,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 44600,
      },
      {
        name: 'International Business',
        salary: 53500,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 67200,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 47500,
      },
      {
        name: 'Real Estate',
        salary: 57900,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 43700,
      },
      {
        name: 'Communication and Media Studies',
        salary: 43600,
      },
      {
        name: 'Journalism',
        salary: 46200,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 44200,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 35900,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 57000,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 45600,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 58200,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 70300,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 66500,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 66300,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 41200,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 34100,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 39100,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 43400,
      },
      {
        name: 'Work and Family Studies',
        salary: 30900,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 39400,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 64400,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 41100,
      },
      {
        name: 'Nursing',
        salary: 83400,
      },
      {
        name: 'Public Health',
        salary: 40600,
      },
      {
        name: 'History',
        salary: 44800,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 38000,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 43000,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 62700,
      },
      {
        name: 'Mathematics',
        salary: 52900,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 43200,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 47500,
      },
      {
        name: 'Philosophy',
        salary: 32100,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 50200,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 66500,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 55000,
      },
      {
        name: 'Child Development and Psychology',
        salary: 33100,
      },
      {
        name: 'Psychology',
        salary: 37300,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 38200,
      },
      {
        name: 'Anthropology',
        salary: 42100,
      },
      {
        name: 'Criminology',
        salary: 42800,
      },
      {
        name: 'Economics',
        salary: 48800,
      },
      {
        name: 'Geography and Cartography',
        salary: 44100,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 42900,
      },
      {
        name: 'Sociology',
        salary: 39400,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 42700,
      },
      {
        name: 'Design and Applied Arts',
        salary: 41500,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 35200,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 40300,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 44500,
      },
      {
        name: 'Music',
        salary: 53800,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:12,
    major:
    [
      {
        name: 'General',
        salary: 48000,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 47700,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 49100,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 37300,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 32800,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 42900,
      },
      {
        name: 'Biology',
        salary: 47400,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 41500,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 54600,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 54500,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 49800,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 50200,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 50400,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 39200,
      },
      {
        name: 'Finance',
        salary: 49900,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 37500,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 48100,
      },
      {
        name: 'International Business',
        salary: 45000,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 55400,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 47500,
      },
      {
        name: 'Real Estate',
        salary: 97400,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 38100,
      },
      {
        name: 'Communication and Media Studies',
        salary: 46000,
      },
      {
        name: 'Journalism',
        salary: 43000,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 46400,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 35100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 71000,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 50300,
      },
      {
        name: 'Chemical Engineering',
        salary: 66400,
      },
      {
        name: 'Civil Engineering',
        salary: 62000,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 68600,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 64100,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 66400,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 44100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 42800,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 57500,
      },
      {
        name: 'Human Development and Related Services',
        salary: 36500,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 38200,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 49900,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 58600,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 43300,
      },
      {
        name: 'Nursing',
        salary: 75000,
      },
      {
        name: 'Public Health',
        salary: 49700,
      },
      {
        name: 'History',
        salary: 45900,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 47700,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 45200,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 43800,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 55800,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 48300,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 39700,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 51000,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 41100,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 51200,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 33300,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 36200,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 47400,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 55000,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 37800,
      },
      {
        name: 'Psychology',
        salary: 42200,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 39000,
      },
      {
        name: 'Anthropology',
        salary: 42100,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 51900,
      },
      {
        name: 'Geography and Cartography',
        salary: 49900,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 45200,
      },
      {
        name: 'Sociology',
        salary: 39900,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 43000,
      },
      {
        name: 'Dance',
        salary: 45300,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 53400,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 40900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 39800,
      },
      {
        name: 'Music',
        salary: 40600,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:13,
    major:
    [
      {
        name: 'General',
        salary: 48000,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 47700,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 49100,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 37300,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 32800,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 42900,
      },
      {
        name: 'Biology',
        salary: 47400,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 41500,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 54600,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 54500,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 49800,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 50200,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 50400,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 39200,
      },
      {
        name: 'Finance',
        salary: 49900,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 37500,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 48100,
      },
      {
        name: 'International Business',
        salary: 45000,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 55400,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 47500,
      },
      {
        name: 'Real Estate',
        salary: 97400,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 38100,
      },
      {
        name: 'Communication and Media Studies',
        salary: 46000,
      },
      {
        name: 'Journalism',
        salary: 43000,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 46400,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 35100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 71000,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 50300,
      },
      {
        name: 'Chemical Engineering',
        salary: 66400,
      },
      {
        name: 'Civil Engineering',
        salary: 62000,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 68600,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 64100,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 66400,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 44100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 42800,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 57500,
      },
      {
        name: 'Human Development and Related Services',
        salary: 36500,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 38200,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 49900,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 58600,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 43300,
      },
      {
        name: 'Nursing',
        salary: 75000,
      },
      {
        name: 'Public Health',
        salary: 49700,
      },
      {
        name: 'History',
        salary: 45900,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 47700,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 45200,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 43800,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 55800,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 48300,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 39700,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 51000,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 41100,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 51200,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 33300,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 36200,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 47400,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 55000,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 37800,
      },
      {
        name: 'Psychology',
        salary: 42200,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 39000,
      },
      {
        name: 'Anthropology',
        salary: 42100,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 51900,
      },
      {
        name: 'Geography and Cartography',
        salary: 49900,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 45200,
      },
      {
        name: 'Sociology',
        salary: 39900,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 43000,
      },
      {
        name: 'Dance',
        salary: 45300,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 53400,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 40900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 39800,
      },
      {
        name: 'Music',
        salary: 40600,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:14,
    major:
    [
      {
        name: 'General',
        salary: 59200,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 57300,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 49300,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 63500,
      },
      {
        name: 'Biology',
        salary: 50300,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 63500,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 55500,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 60300,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 57100,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 49500,
      },
      {
        name: 'Finance',
        salary: 61900,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 53800,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 56100,
      },
      {
        name: 'International Business',
        salary: 53300,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 68400,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 59700,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 50100,
      },
      {
        name: 'Journalism',
        salary: 52100,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 50800,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 48100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 72300,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 75500,
      },
      {
        name: 'Chemical Engineering',
        salary: 75400,
      },
      {
        name: 'Civil Engineering',
        salary: 66100,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 83000,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 76900,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 67600,
      },
      {
        name: 'Materials Engineering',
        salary: 68300,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 70100,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 47100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 51900,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 45300,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 61600,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 58000,
      },
      {
        name: 'Nursing',
        salary: 81200,
      },
      {
        name: 'Public Health',
        salary: 48000,
      },
      {
        name: 'History',
        salary: 49100,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 45900,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 45400,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 57600,
      },
      {
        name: 'Mathematics',
        salary: 57000,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 47100,
      },
      {
        name: 'Global & International Studies',
        salary: 39200,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 61400,
      },
      {
        name: 'Nutrition Sciences',
        salary: 52400,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 43300,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 49700,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 60900,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 25700,
      },
      {
        name: 'Chemistry',
        salary: 64400,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 52100,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 39700,
      },
      {
        name: 'Psychology',
        salary: 48900,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 44500,
      },
      {
        name: 'Anthropology',
        salary: 48000,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 57800,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 49100,
      },
      {
        name: 'Sociology',
        salary: 43900,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 53900,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 39500,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 46900,
      },
      {
        name: 'Music',
        salary: 61300,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:15,
    major:
    [
      {
        name: 'General',
        salary: 51000,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 40400,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 38400,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 51600,
      },
      {
        name: 'Biology',
        salary: 47600,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 44000,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 58600,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 55800,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 48300,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 37400,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 63400,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 43200,
      },
      {
        name: 'Finance',
        salary: 54300,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 45400,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 49200,
      },
      {
        name: 'International Business',
        salary: 48400,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 63300,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 59600,
      },
      {
        name: 'Marketing',
        salary: 50200,
      },
      {
        name: 'Real Estate',
        salary: 50000,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 48200,
      },
      {
        name: 'Journalism',
        salary: 44200,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 44500,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 58000,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 44100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 68200,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 64800,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 79500,
      },
      {
        name: 'Construction Engineering',
        salary: 74000,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 76100,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 59100,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 65000,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 43700,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 51000,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 42900,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 46800,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 78500,
      },
      {
        name: 'Public Health',
        salary: 34400,
      },
      {
        name: 'History',
        salary: 50800,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 47600,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 42400,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 70000,
      },
      {
        name: 'Mathematics',
        salary: 54400,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 51300,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 51800,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 32700,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 43500,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 45400,
      },
      {
        name: 'Philosophy',
        salary: 40100,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 48900,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 46200,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 66900,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 65800,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 31400,
      },
      {
        name: 'Psychology',
        salary: 42300,
      },
      {
        name: 'Public Administration',
        salary: 49400,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 38700,
      },
      {
        name: 'Anthropology',
        salary: 45200,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 53200,
      },
      {
        name: 'Geography and Cartography',
        salary: 52900,
      },
      {
        name: 'International Relations',
        salary: 39300,
      },
      {
        name: 'Political Science and Government',
        salary: 49100,
      },
      {
        name: 'Sociology',
        salary: 44600,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 43200,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 36700,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 44900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 41600,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:16,
    major:
    [
      {
        name: 'General',
        salary: 58100,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 50000,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 50500,
      },
      {
        name: 'Area Studies',
        salary: 86700,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 50300,
      },
      {
        name: 'Biology',
        salary: 49300,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 50800,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 46500,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 63900,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 62700,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 58200,
      },
      {
        name: 'Finance',
        salary: 66400,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 60200,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 64500,
      },
      {
        name: 'Real Estate',
        salary: 65300,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 51200,
      },
      {
        name: 'Journalism',
        salary: 52700,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 52500,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 91800,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 37100,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 76400,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 66400,
      },
      {
        name: 'Chemical Engineering',
        salary: 73700,
      },
      {
        name: 'Civil Engineering',
        salary: 65000,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 86300,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 73500,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 70400,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 70300,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 48400,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 62900,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 47600,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 51200,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 77800,
      },
      {
        name: 'Public Health',
        salary: 58500,
      },
      {
        name: 'History',
        salary: 44300,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 53500,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 81800,
      },
      {
        name: 'Mathematics',
        salary: 60400,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 57200,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 56600,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 38100,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 63000,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 101800,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 51700,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 46300,
      },
      {
        name: 'Public Administration',
        salary: 61100,
      },
      {
        name: 'Public Policy',
        salary: 54800,
      },
      {
        name: 'Social Work',
        salary: 23800,
      },
      {
        name: 'Anthropology',
        salary: 49400,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 62500,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 55700,
      },
      {
        name: 'Political Science and Government',
        salary: 52100,
      },
      {
        name: 'Sociology',
        salary: 48300,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 49900,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 45100,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 48900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 47100,
      },
      {
        name: 'Music',
        salary: 41800,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 56000,
      },
    ],
  },
  {
    id:17,
    major:
    [
      {
        name: 'General',
        salary: 70700,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 72600,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 55000,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 55100,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 58000,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 97100,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 88200,
      },
      {
        name: 'Marketing',
        salary: 81000,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 60900,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 89200,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 84500,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 73700,
      },
      {
        name: 'Chemical Engineering',
        salary: 77200,
      },
      {
        name: 'Civil Engineering',
        salary: 69000,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 94400,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 95500,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 80500,
      },
      {
        name: 'Materials Engineering',
        salary: 82000,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 75500,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 66400,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 55800,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 50800,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 57200,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 63200,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 67100,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 80000,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 56800,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 63100,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 64000,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 65200,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 57700,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 74400,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 61600,
      },
      {
        name: 'Political Science and Government',
        salary: 64600,
      },
      {
        name: 'Sociology',
        salary: 57300,
      },
      {
        name: 'Urban Studies',
        salary: 56600,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 79000,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 44200,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 63800,
      },
      {
        name: 'Music',
        salary: 43400,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:18,
    major:
    [
      {
        name: 'General',
        salary: 55300,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 37000,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 43800,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 51200,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 45400,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 0,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 63200,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 51600,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 47000,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 0,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 72100,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 68700,
      },
      {
        name: 'Political Science and Government',
        salary: 63200,
      },
      {
        name: 'Sociology',
        salary: 47800,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 48200,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 35200,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:19,
    major:
    [
      {
        name: 'General',
        salary: 63300,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 61500,
      },
      {
        name: 'Biology',
        salary: 55300,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 59700,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 70700,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 57100,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 84300,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 60000,
      },
      {
        name: 'Finance',
        salary: 67500,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 89400,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 77000,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 60200,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 54900,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 45700,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 71500,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 68500,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 102400,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 89500,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 69300,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 49200,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 70700,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 60000,
      },
      {
        name: 'History',
        salary: 53000,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 42000,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 62800,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 57200,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 64900,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 54600,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 51200,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 62900,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 53900,
      },
      {
        name: 'Sociology',
        salary: 46000,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 62400,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 45700,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:20,
    major:
    [
      {
        name: 'General',
        salary: 50100,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 47600,
      },
      {
        name: 'Biology',
        salary: 48500,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 64700,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 43800,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 52200,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 56000,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 57100,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 44000,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 85900,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 65800,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 36800,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 57600,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 49900,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 56900,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 52600,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 45200,
      },
      {
        name: 'Political Science and Government',
        salary: 54800,
      },
      {
        name: 'Sociology',
        salary: 48700,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 58300,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 52900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 54200,
      },
      {
        name: 'Music',
        salary: 59800,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:21,
    major:
    [
      {
        name: 'General',
        salary: 48600,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 53500,
      },
      {
        name: 'Biology',
        salary: 43200,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 63300,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 52000,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 44100,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 83000,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 49800,
      },
      {
        name: 'Finance',
        salary: 56100,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 53300,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 48600,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 46300,
      },
      {
        name: 'Journalism',
        salary: 50600,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 48400,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 63000,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 39600,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 39100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 41400,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 45000,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 49200,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 46000,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 39900,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 54700,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 54400,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 48600,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 58700,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 46200,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 0,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 48300,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 45900,
      },
      {
        name: 'Sociology',
        salary: 50900,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 48000,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 37900,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 48700,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 39900,
      },
      {
        name: 'Music',
        salary: 58700,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:22,
    major:
    [
      {
        name: 'General',
        salary: 41200,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 0,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 0,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 0,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 35200,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 73800,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 0,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 0,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 0,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 0,
      },
      {
        name: 'Sociology',
        salary: 0,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 0,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:23,
    major:
    [
      {
        name: 'General',
        salary: 58800,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 53900,
      },
      {
        name: 'Animal Science',
        salary: 53900,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 53900,
      },
      {
        name: 'Food Science',
        salary: 54800,
      },
      {
        name: 'Architecture',
        salary: 53900,
      },
      {
        name: 'Interior Architecture',
        salary: 66400,
      },
      {
        name: 'Landscape Architecture',
        salary: 66400,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 55700,
      },
      {
        name: 'Area Studies',
        salary: 53900,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 54800,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 53900,
      },
      {
        name: 'Biology',
        salary: 53900,
      },
      {
        name: 'Biotechnology',
        salary: 53900,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 53900,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 71700,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 87300,
      },
      {
        name: 'Genetics',
        salary: 54800,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 54700,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 54700,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 55700,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 54700,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 54700,
      },
      {
        name: 'Accounting',
        salary: 53900,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 71700,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 71700,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 71700,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 87300,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 78600,
      },
      {
        name: 'Finance',
        salary: 54800,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 54800,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 54800,
      },
      {
        name: 'International Business',
        salary: 66400,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 66400,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 66400,
      },
      {
        name: 'Marketing',
        salary: 66400,
      },
      {
        name: 'Real Estate',
        salary: 54700,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 55700,
      },
      {
        name: 'Communication and Media Studies',
        salary: 71700,
      },
      {
        name: 'Journalism',
        salary: 66400,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 54700,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 54700,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 72600,
      },
      {
        name: 'Computer Science',
        salary: 87300,
      },
      {
        name: 'Education',
        salary: 87300,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 53900,
      },
      {
        name: 'Biochemical Engineering',
        salary: 53900,
      },
      {
        name: 'Biomedical Engineering',
        salary: 53900,
      },
      {
        name: 'Chemical Engineering',
        salary: 71700,
      },
      {
        name: 'Civil Engineering',
        salary: 71700,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 71700,
      },
      {
        name: 'Construction Engineering',
        salary: 87300,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 78600,
      },
      {
        name: 'Engineering Science',
        salary: 78600,
      },
      {
        name: 'Environmental Engineering',
        salary: 54800,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 66400,
      },
      {
        name: 'Materials Engineering',
        salary: 67400,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 70900,
      },
      {
        name: 'Systems Engineering',
        salary: 55700,
      },
      {
        name: 'Nuclear Engineering',
        salary: 54700,
      },
      {
        name: 'English Language and Literature',
        salary: 78600,
      },
      {
        name: 'Literature',
        salary: 66400,
      },
      {
        name: 'Technical and Business Writing',
        salary: 55700,
      },
      {
        name: 'Classics',
        salary: 71700,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 57700,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 54800,
      },
      {
        name: 'Human Development and Related Services',
        salary: 54800,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 55700,
      },
      {
        name: 'Work and Family Studies',
        salary: 55700,
      },
      {
        name: 'East Asian Languages',
        salary: 87300,
      },
      {
        name: 'Romance Languages',
        salary: 50600,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 87300,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 54800,
      },
      {
        name: 'Nursing',
        salary: 54700,
      },
      {
        name: 'Public Health',
        salary: 54700,
      },
      {
        name: 'History',
        salary: 54800,
      },
      {
        name: 'Law',
        salary: 66400,
      },
      {
        name: 'Criminal Justice',
        salary: 87300,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 66400,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 54700,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 66400,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 66400,
      },
      {
        name: 'Applied Mathematics',
        salary: 53900,
      },
      {
        name: 'Mathematics',
        salary: 67400,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 67400,
      },
      {
        name: 'Behavioral Science',
        salary: 53900,
      },
      {
        name: 'Global & International Studies',
        salary: 54800,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 67400,
      },
      {
        name: 'Nutrition Sciences',
        salary: 54700,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 54800,
      },
      {
        name: 'Forestry',
        salary: 54800,
      },
      {
        name: 'Gerontology',
        salary: 54800,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 54700,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 54800,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 54700,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 54700,
      },
      {
        name: 'Philosophy',
        salary: 54700,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 54700,
      },
      {
        name: 'Religious Studies',
        salary: 54700,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 53900,
      },
      {
        name: 'Chemistry',
        salary: 71700,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 54800,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 53900,
      },
      {
        name: 'Physics',
        salary: 54700,
      },
      {
        name: 'Child Development and Psychology',
        salary: 71700,
      },
      {
        name: 'Psychology',
        salary: 54700,
      },
      {
        name: 'Public Administration',
        salary: 54700,
      },
      {
        name: 'Public Policy',
        salary: 54700,
      },
      {
        name: 'Social Work',
        salary: 50600,
      },
      {
        name: 'Anthropology',
        salary: 53900,
      },
      {
        name: 'Criminology',
        salary: 87300,
      },
      {
        name: 'Economics',
        salary: 87300,
      },
      {
        name: 'Geography and Cartography',
        salary: 54800,
      },
      {
        name: 'International Relations',
        salary: 66400,
      },
      {
        name: 'Political Science and Government',
        salary: 54700,
      },
      {
        name: 'Sociology',
        salary: 47600,
      },
      {
        name: 'Urban Studies',
        salary: 55700,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 53900,
      },
      {
        name: 'Design and Applied Arts',
        salary: 87300,
      },
      {
        name: 'Dance',
        salary: 87300,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 87300,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 54800,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 54800,
      },
      {
        name: 'Music',
        salary: 54700,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 55700,
      },
    ],
  },
  {
    id:24,
    major:
    [
      {
        name: 'General',
        salary: 35500,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 0,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 43800,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 0,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 0,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 0,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 0,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 0,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 0,
      },
      {
        name: 'Sociology',
        salary: 0,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 0,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:25,
    major:
    [
      {
        name: 'General',
        salary: 56600,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 52000,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 43400,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 37300,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 49400,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 37600,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 44100,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 71100,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 75800,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 50800,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 56300,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 84400,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 70800,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 55600,
      },
      {
        name: 'Sociology',
        salary: 84400,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 56900,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 47600,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:26,
    major:
    [
      {
        name: 'General',
        salary: 63200,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 42100,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 44900,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 51700,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 70300,
      },
      {
        name: 'Biology',
        salary: 65600,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 58600,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 56600,
      },
      {
        name: 'Chemical Engineering',
        salary: 71600,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 84300,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 59300,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 71900,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 48800,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 0,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 98400,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 66000,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 69300,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 69000,
      },
      {
        name: 'Mathematics',
        salary: 105000,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 60600,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 50200,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 46400,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 40500,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 129300,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 75300,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 57000,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 55100,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 78700,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 60000,
      },
      {
        name: 'Sociology',
        salary: 49300,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 79600,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 38500,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 57500,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 50600,
      },
      {
        name: 'Music',
        salary: 48900,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:27,
    major:
    [
      {
        name: 'General',
        salary: 68400,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 46700,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 53000,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 59000,
      },
      {
        name: 'Biology',
        salary: 51000,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 0,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 69100,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 72400,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 81200,
      },
      {
        name: 'Civil Engineering',
        salary: 66200,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 88700,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 104300,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 68600,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 55100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 77000,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 83300,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 65000,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 82300,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 73200,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 59600,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 72000,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 73900,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 61800,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 56700,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 44200,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 74500,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 57900,
      },
      {
        name: 'Political Science and Government',
        salary: 71100,
      },
      {
        name: 'Sociology',
        salary: 56100,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 41800,
      },
      {
        name: 'Music',
        salary: 100800,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:28,
    major:
    [
      {
        name: 'General',
        salary: 60300,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 52500,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 40600,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 44600,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 52800,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 45300,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 47700,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 65600,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 59800,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 75000,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 54500,
      },
      {
        name: 'Finance',
        salary: 70500,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 62700,
      },
      {
        name: 'International Business',
        salary: 59200,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 56400,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 32200,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 52900,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 69600,
      },
      {
        name: 'Chemical Engineering',
        salary: 73300,
      },
      {
        name: 'Civil Engineering',
        salary: 57400,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 72900,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 72700,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 65700,
      },
      {
        name: 'Systems Engineering',
        salary: 74500,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 61200,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 42700,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 47500,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 63400,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 42100,
      },
      {
        name: 'History',
        salary: 51400,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 74300,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 47200,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 61700,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 69900,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 64000,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 48200,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 47600,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 67800,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 72700,
      },
      {
        name: 'Political Science and Government',
        salary: 65000,
      },
      {
        name: 'Sociology',
        salary: 0,
      },
      {
        name: 'Urban Studies',
        salary: 47200,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 46400,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 35900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 44600,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:29,
    major:
    [
      {
        name: 'General',
        salary: 47500,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 47500,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 65300,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 39000,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 40500,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 40900,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 41600,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 49900,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 61900,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 46100,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 83600,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 0,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 47200,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 47000,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 57000,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 45000,
      },
      {
        name: 'Sociology',
        salary: 49700,
      },
      {
        name: 'Urban Studies',
        salary: 41000,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 30400,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 49900,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 43400,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:30,
    major:
    [
      {
        name: 'General',
        salary: 59700,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 0,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 68500,
      },
      {
        name: 'Biology',
        salary: 48000,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 50800,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 59300,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 58500,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 51100,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 63700,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 69100,
      },
      {
        name: 'Romance Languages',
        salary: 70100,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 57800,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 71600,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 57500,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 50400,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 0,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 47600,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 58100,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 55900,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 42700,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 66700,
      },
      {
        name: 'Geography and Cartography',
        salary: 60900,
      },
      {
        name: 'International Relations',
        salary: 68800,
      },
      {
        name: 'Political Science and Government',
        salary: 54700,
      },
      {
        name: 'Sociology',
        salary: 51400,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 68500,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 63700,
      },
      {
        name: 'Music',
        salary: 0,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:31,
    major:
    [
      {
        name: 'General',
        salary: 55500,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 45500,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 0,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 65900,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 43000,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 94700,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 0,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 0,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 0,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 0,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 0,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 0,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 0,
      },
      {
        name: 'Chemical Engineering',
        salary: 0,
      },
      {
        name: 'Civil Engineering',
        salary: 0,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 0,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 0,
      },
      {
        name: 'Engineering Science',
        salary: 0,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 0,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 54100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 0,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 0,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 52100,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 0,
      },
      {
        name: 'Public Health',
        salary: 0,
      },
      {
        name: 'History',
        salary: 44400,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 81600,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 0,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 0,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 42700,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 41300,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 59700,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 61000,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 0,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 62500,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 75100,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 53400,
      },
      {
        name: 'Sociology',
        salary: 42200,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 0,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 46200,
      },
      {
        name: 'Music',
        salary: 40500,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
  {
    id:32,
    major:
    [
      {
        name: 'General',
        salary: 61400,
      },
      {
        name: 'Agricultural Economics & Business',
        salary: 0,
      },
      {
        name: 'Animal Science',
        salary: 0,
      },
      {
        name: 'Applied Horticulture and Horticultural Business Services',
        salary: 0,
      },
      {
        name: 'Food Science',
        salary: 0,
      },
      {
        name: 'Architecture',
        salary: 0,
      },
      {
        name: 'Interior Architecture',
        salary: 0,
      },
      {
        name: 'Landscape Architecture',
        salary: 0,
      },
      {
        name: 'Urban and Regional Planning',
        salary: 0,
      },
      {
        name: 'Area Studies',
        salary: 43800,
      },
      {
        name: 'Ethnic, Cultural Minority, Gender, and Group Studies',
        salary: 42400,
      },
      {
        name: 'Biochemistry, Biophysics and Molecular Biology',
        salary: 0,
      },
      {
        name: 'Biology',
        salary: 42100,
      },
      {
        name: 'Biotechnology',
        salary: 0,
      },
      {
        name: 'Botany/Plant Biology',
        salary: 0,
      },
      {
        name: 'Cell/Cellular Biology and Anatomical Sciences',
        salary: 0,
      },
      {
        name: 'Ecology, Evolution, Systematics, and Population Biology.',
        salary: 0,
      },
      {
        name: 'Genetics',
        salary: 0,
      },
      {
        name: 'Microbiological Sciences and Immunology',
        salary: 0,
      },
      {
        name: 'Pharmacology and Toxicology',
        salary: 0,
      },
      {
        name: 'Zoology/Animal Biology',
        salary: 0,
      },
      {
        name: 'Neurobiology and Neurosciences',
        salary: 42500,
      },
      {
        name: 'Physiology, Pathology and Related Sciences',
        salary: 0,
      },
      {
        name: 'Accounting',
        salary: 0,
      },
      {
        name: 'Business Administration, Management and Operations',
        salary: 59000,
      },
      {
        name: 'Business/Corporate Communications',
        salary: 0,
      },
      {
        name: 'Business/Managerial Economics',
        salary: 0,
      },
      {
        name: 'Business, Management, Marketi',
        salary: 0,
      },
      {
        name: 'Construction Management',
        salary: 0,
      },
      {
        name: 'Entrepreneurial Studies',
        salary: 0,
      },
      {
        name: 'Finance',
        salary: 70100,
      },
      {
        name: 'Hospitality Administration/Management',
        salary: 0,
      },
      {
        name: 'Human Resources Management and Services',
        salary: 54800,
      },
      {
        name: 'International Business',
        salary: 0,
      },
      {
        name: 'Management Information Systems (MIS)',
        salary: 0,
      },
      {
        name: 'Management Sciences and Quantitative Methods',
        salary: 0,
      },
      {
        name: 'Marketing',
        salary: 69800,
      },
      {
        name: 'Real Estate',
        salary: 0,
      },
      {
        name: 'Specialized Sales, Merchandising and Marketing Operations',
        salary: 0,
      },
      {
        name: 'Communication and Media Studies',
        salary: 50200,
      },
      {
        name: 'Journalism',
        salary: 0,
      },
      {
        name: 'Public Relations & Advertising',
        salary: 0,
      },
      {
        name: 'Radio, Television, and Digital Communication.',
        salary: 0,
      },
      {
        name: 'Computer Information Systems (CIS)',
        salary: 0,
      },
      {
        name: 'Computer Science',
        salary: 0,
      },
      {
        name: 'Education',
        salary: 43500,
      },
      {
        name: 'Aerospace & Aeronautical Engineering',
        salary: 0,
      },
      {
        name: 'Biochemical Engineering',
        salary: 0,
      },
      {
        name: 'Biomedical Engineering',
        salary: 72500,
      },
      {
        name: 'Chemical Engineering',
        salary: 69800,
      },
      {
        name: 'Civil Engineering',
        salary: 66500,
      },
      {
        name: 'Computer Engineering (CE)',
        salary: 74300,
      },
      {
        name: 'Construction Engineering',
        salary: 0,
      },
      {
        name: 'Electrical Engineering (EE)',
        salary: 68700,
      },
      {
        name: 'Engineering Science',
        salary: 63600,
      },
      {
        name: 'Environmental Engineering',
        salary: 0,
      },
      {
        name: 'Industrial Engineering (IE)',
        salary: 0,
      },
      {
        name: 'Materials Engineering',
        salary: 0,
      },
      {
        name: 'Mechanical Engineering (ME)',
        salary: 71200,
      },
      {
        name: 'Systems Engineering',
        salary: 0,
      },
      {
        name: 'Nuclear Engineering',
        salary: 0,
      },
      {
        name: 'English Language and Literature',
        salary: 47100,
      },
      {
        name: 'Literature',
        salary: 0,
      },
      {
        name: 'Technical and Business Writing',
        salary: 0,
      },
      {
        name: 'Classics',
        salary: 0,
      },
      {
        name: 'Rhetoric and English Composition',
        salary: 46400,
      },
      {
        name: 'Foods, Nutrition, and Related Services',
        salary: 0,
      },
      {
        name: 'Human Development and Related Services',
        salary: 45900,
      },
      {
        name: 'Textile & Apparel Studies',
        salary: 0,
      },
      {
        name: 'Work and Family Studies',
        salary: 0,
      },
      {
        name: 'East Asian Languages',
        salary: 0,
      },
      {
        name: 'Romance Languages',
        salary: 47600,
      },
      {
        name: 'Dietetics and Clinical Nutrition Services',
        salary: 0,
      },
      {
        name: 'Health and Medical Administrative Services',
        salary: 0,
      },
      {
        name: 'Nursing',
        salary: 65000,
      },
      {
        name: 'Public Health',
        salary: 53000,
      },
      {
        name: 'History',
        salary: 49300,
      },
      {
        name: 'Law',
        salary: 0,
      },
      {
        name: 'Criminal Justice',
        salary: 0,
      },
      {
        name: 'Interpersonal and Social Skills',
        salary: 0,
      },
      {
        name: 'Non-Professional General Legal Studies (Undergraduate)',
        salary: 0,
      },
      {
        name: 'Liberal Arts and General Studies',
        salary: 0,
      },
      {
        name: 'Liberal Arts and Sciences, General Studies and Humanities',
        salary: 0,
      },
      {
        name: 'Applied Mathematics',
        salary: 0,
      },
      {
        name: 'Mathematics',
        salary: 70500,
      },
      {
        name: 'Mathematics & Statistics',
        salary: 0,
      },
      {
        name: 'Behavioral Science',
        salary: 0,
      },
      {
        name: 'Global & International Studies',
        salary: 0,
      },
      {
        name: 'Mathematics & Computer Science',
        salary: 71100,
      },
      {
        name: 'Nutrition Sciences',
        salary: 0,
      },
      {
        name: 'Fishing and Fisheries Sciences and Management',
        salary: 0,
      },
      {
        name: 'Forestry',
        salary: 0,
      },
      {
        name: 'Gerontology',
        salary: 0,
      },
      {
        name: 'Natural Resources Conservation and Research',
        salary: 0,
      },
      {
        name: 'Health and Physical Education/Fitness',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Studies',
        salary: 0,
      },
      {
        name: 'Parks, Recreation and Leisure Facilities Management',
        salary: 0,
      },
      {
        name: 'Philosophy',
        salary: 52800,
      },
      {
        name: 'Philosophy and Religious Studies',
        salary: 0,
      },
      {
        name: 'Religious Studies',
        salary: 0,
      },
      {
        name: 'Atmospheric Sciences and Meteorology',
        salary: 0,
      },
      {
        name: 'Chemistry',
        salary: 42400,
      },
      {
        name: 'Geological and Earth Sciences',
        salary: 0,
      },
      {
        name: 'Astronomy and Astrophysics',
        salary: 0,
      },
      {
        name: 'Physics',
        salary: 53800,
      },
      {
        name: 'Child Development and Psychology',
        salary: 0,
      },
      {
        name: 'Psychology',
        salary: 56900,
      },
      {
        name: 'Public Administration',
        salary: 0,
      },
      {
        name: 'Public Policy',
        salary: 47900,
      },
      {
        name: 'Social Work',
        salary: 0,
      },
      {
        name: 'Anthropology',
        salary: 56200,
      },
      {
        name: 'Criminology',
        salary: 0,
      },
      {
        name: 'Economics',
        salary: 65400,
      },
      {
        name: 'Geography and Cartography',
        salary: 0,
      },
      {
        name: 'International Relations',
        salary: 0,
      },
      {
        name: 'Political Science and Government',
        salary: 56000,
      },
      {
        name: 'Sociology',
        salary: 55700,
      },
      {
        name: 'Urban Studies',
        salary: 0,
      },
      {
        name: 'Arts, Entertainment and Media Management',
        salary: 0,
      },
      {
        name: 'Design and Applied Arts',
        salary: 0,
      },
      {
        name: 'Dance',
        salary: 0,
      },
      {
        name: 'Drama and Theater Arts',
        salary: 0,
      },
      {
        name: 'Film, Video and Photographic Arts',
        salary: 44600,
      },
      {
        name: 'Fine and Studio Arts',
        salary: 46400,
      },
      {
        name: 'Music',
        salary: 41900,
      },
      {
        name: 'Visual and Performing Arts',
        salary: 0,
      },
    ],
  },
];

const searchSchoolCost = (schoolName, state) => {
  for (var i = 0; i < schoolinfo.length; i++) {
    let { name, tuitioninstate, tuitionoutofstate } = schoolinfo[i];
    if( name == schoolName) {
      //TODO we need to check if the student state is equal to school state (but we don't have the shool state in the DB)
      return tuitioninstate;
    }
  }
  return 0;
};

const searchSchoolLivingExpenses = (school, livingPreferences) => {
  for (var i = 0; i < schoolinfo.length; i++) {
    let { id, name, livingexpensesoncampus, Livingexpensesoffcampus, Livingexpenseswithrelatives } = schoolinfo[i];
    if(school == name) {
      //TODO set the difference cases of living preferences. Needs update on front end reading the value
      return livingexpensesoncampus;
    }
  }
  return 0;
};

const searchSchoolType = (schoolID) => {
  for (var i = 0; i < schoolinfo.length; i++) {
    const { id, name, type } = schoolinfo[i];
    if(schoolID == name) {
      return type;
    }
  }
  return 'UC';
};

const getSchoolList = () => {
  const schoolList = [];
  for (var i = 0; i < schoolinfo.length; i++) {
    let { id, name } = schoolinfo[i];
    schoolList[i] = {
      value: name,
      label: name,
      objectID: id,
    };
  }
  return schoolList;
};

const schoolsDB = {
  searchSchoolCost,
  searchSchoolLivingExpenses,
  searchSchoolType,
  getSchoolList,
};

export default schoolsDB;
