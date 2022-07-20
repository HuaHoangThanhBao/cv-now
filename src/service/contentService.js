export const getContent = (childId) => {
    switch(childId){
        case 1:
            return [
                {title: "Study Program", status: true, height: 0},
                {desc: "Institution/ Place of education", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {optional_dashed: "City, Country or GPA (optional)", status: false, height: 0},
                {
                  content_bullet: {
                    child: [
                        {content_bullet_detail:"Course/Thesis/Project", status: false, height: 0}
                    ],
                  },
                  status: false,
                  height: 0,
                },
            ]
        case 2:
            return [
                {title: "Title/Position", status: true, height: 0},
                {desc: "Workplace/Company", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {optional_dashed: "City, Country (optional)", status: false, height: 0},
                {optional_dashed2:
                  "Company Description (optional, fill when the company is not well known)", status: false, height: 0},
                {content_detail: "Achievements/Tasks", status: false, height: 0},
                {
                    content_bullet: {
                      child: [
                          {content_bullet_detail:"Accomplishment/Responsibility/Task", status: false, height: 0}
                      ],
                    },
                    status: false,
                    height: 0,
                },
                {contact: "Contact:", status: false, height: 0},
                {contact_person: "Contact Person", status: false, height: 0},
                {contact_info: "Contact Info", status: false, height: 0},
            ]
        case 3:
            return [
                {title: "Organization Name", status: true, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {content_detail_dashed: "Role (optional)", status: false, height: 0},
            ]
        case 4:
            return [
                {title: "Certificate Name", status: true, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {content_detail_dashed: "Description (optional)", status: false, height: 0},
            ]
        case 5:
            return [
                {title: "Project Name", status: true, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {
                  content_bullet: {
                    child: [
                        {content_bullet_detail:"Description of Achievements", status: false, height: 0}
                    ],
                  },
                  status: false,
                  height: 0,
                },
            ]
        case 6:
            return [ 
                {title: "Achievement Name", status: true, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {content_detail_dashed: "Description (optional)", status: false, height: 0},
            ]
        case 7:
            return [ 
                {title: "Conference/Course Name", status: true, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {content_detail_dashed: "Conference/Issuer of the certificate", status: false, height: 0},
                {
                  content_bullet: {
                    child: [
                        {content_bullet_detail:"Description (optional)", status: false, height: 0}
                    ],
                  },
                  status: false,
                  height: 0,
                },
            ]
        case 8:
            return [ 
                {title: "Title/Award Name", status: true, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {content_detail_dashed: "Name of the institution that issued/awarded it", status: false, height: 0},
                {
                    content_bullet: {
                      child: [
                          {content_bullet_detail:"Description (optional)", status: false, height: 0}
                      ],
                    },
                    status: false,
                    height: 0,
                },
            ]
        case 9:
            return [ 
                { title: "Name of the class", status: true, height: 0 },
                { desc: "Institution/Place of Education", status: false, height: 0 },
                { month_start: "mm", status: false, height: 0 },
                { month_end: "mm", status: false, height: 0 },
                { year_start: "yyyy", status: false, height: 0 },
                { year_end: "yyyy", status: false, height: 0 },
                {
                  optional_dashed: "City, Country",
                  status: false,
                  height: 0,
                },
                {
                  content_detail: "Tasks/Achievements",
                  status: false,
                  height: 0,
                },
                {
                  content_bullet: {
                    child: [
                        {content_bullet_detail:"Task/Responsibility/Accomplishment", status: false, height: 0}
                    ],
                  },
                  status: false,
                  height: 0,
                },
                { contact: "Contact:", status: false, height: 0 },
                { contact_person: "Contact Person", status: false, height: 0 },
                { contact_info: "Contact Info", status: false, height: 0 },
            ]
        case 10:
            return [ 
                {title: "Title/Position", status: true, height: 0},
                {desc: "Organization", status: false, height: 0},
                {month_start: "mm", status: false, height: 0},
                {month_end: "mm", status: false, height: 0},
                {year_start: "yyyy", status: false, height: 0},
                {year_end: "yyyy", status: false, height: 0},
                {optional_dashed: "City, Country", status: false, height: 0},
                {optional_dashed2: "Organization Description (optional)", status: false, height: 0},
                {content_detail: "Task/Responsibility/Accomplishment", status: false, height: 0},
                {
                  content_bullet: {
                    child: [
                        {content_bullet_detail:"Tasks/Achievements", status: false, height: 0}
                    ],
                  },
                  status: false,
                  height: 0,
                },
                {contact: "Contact:", status: false, height: 0},
                {contact_person: "Contact Person", status: false, height: 0},
                {contact_info: "Contact Info", status: false, height: 0},
            ]
        case 11:
            return [ 
                { content_detail: "Cause", status: true, height: 0 },
            ]
        case 12:
            return [ 
                { title: "Language Name", status: true, height: 0 },
                {
                  content_detail_dashed: "Description",
                  status: false,
                  height: 0,
                },
            ]
        case 13:
            return [ 
                { title: "Publication Title", status: true, height: 0 },
                { desc: "Publication Type", status: false, height: 0 },
                {
                  optional_dashed: "Author(s)",
                  status: false,
                  height: 0,
                },
                {
                  optional_dashed2: "List of Authors",
                  status: false,
                  height: 0,
                },
                {
                  content_detail: "Date of Publication",
                  status: false,
                  height: 0,
                },
                {
                  optional_dashed3: "Publisher/Issue/Pages, etc.",
                  status: false,
                  height: 0,
                },
                {
                  optional_dashed4: "Description",
                  status: false,
                  height: 0,
                },
            ]
        case 14:
            return [
                { content_detail: "Skill name", status: true, height: 0 },
            ]    
        case 15:
            return [
                { content_detail: "Interest", status: true, height: 0 },
            ] 
        case 16:
            return [
                { content_detail: "Soft skill", status: true, height: 0 },
            ]     
        case 17:
            return [
                { title: "Name and Position", status: true, height: 0 },
                {
                  optional_dashed: "“Reference”",
                  status: false,
                  height: 0,
                },
                { contact: "Contact:", status: false, height: 0 },
                { contact_person: "Contact Person", status: false, height: 0 },
                { contact_info: "Contact Info", status: false, height: 0 },
            ]  
        default:
            return []   
    }
}